// Detecta se um post novo foi adicionado a src/app/blog/posts.ts e, se sim,
// cria e dispara uma campanha no Brevo para a lista de assinantes da newsletter.
// Rodado pelo workflow .github/workflows/notify-new-post.yml a cada push em main
// que altere posts.ts. Não usa nenhuma dependência além do Node (fetch nativo).

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const POSTS_FILE = path.join(ROOT, "src/app/blog/posts.ts");
const STATE_FILE = path.join(ROOT, "data/newsletter-state.json");

const SITE_URL = process.env.SITE_URL || "https://oseuplano.com";
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_LIST_ID;
const SENDER_NAME = process.env.BREVO_SENDER_NAME || "O Seu Plano";
const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || "contato@oseuplano.com";

function field(block, name) {
  const re = new RegExp(name + '\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"', "s");
  const m = block.match(re);
  if (!m) return undefined;
  return m[1]
    .replace(/\\"/g, '"')
    .replace(/\\n/g, " ")
    .replace(/\\\\/g, "\\")
    .trim();
}

function parsePosts(source) {
  const blocks = source.match(/\{[^{}]*\}/g) || [];
  return blocks
    .map((block) => ({
      slug: field(block, "slug"),
      category: field(block, "category"),
      title: field(block, "title"),
      excerpt: field(block, "excerpt"),
      readTime: field(block, "readTime"),
      date: field(block, "date"),
      image: field(block, "image"),
      imageAlt: field(block, "imageAlt"),
    }))
    .filter((p) => p.slug && p.date);
}

function buildEmailHtml(post) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const cover = post.image?.startsWith("http")
    ? post.image
    : `${SITE_URL}${post.image || ""}`;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;max-width:600px;width:100%;">
          <tr>
            <td style="padding:28px 32px;background:#0A0F1A;">
              <span style="display:inline-block;width:14px;height:14px;border-radius:4px;background:linear-gradient(135deg,#B87333,#FFA300);vertical-align:middle;margin-right:8px;"></span>
              <span style="color:#ffffff;font-size:16px;font-weight:bold;vertical-align:middle;">O SEU <span style="color:#FFA300;">PLANO</span></span>
            </td>
          </tr>
          ${
            post.image
              ? `<tr><td><img src="${cover}" width="600" alt="${post.imageAlt || ""}" style="width:100%;max-width:600px;height:auto;display:block;"/></td></tr>`
              : ""
          }
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 12px;font-size:11px;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;color:#B87333;">
                Novo artigo &middot; ${post.category || "Blog"}
              </p>
              <h1 style="margin:0 0 16px;font-size:24px;line-height:1.3;color:#111827;">
                ${post.title}
              </h1>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#4b5563;">
                ${post.excerpt || ""}
              </p>
              <a href="${url}" style="display:inline-block;background:linear-gradient(135deg,#B87333,#FFA300);color:#0A0F1A;text-decoration:none;font-weight:bold;font-size:14px;letter-spacing:0.04em;text-transform:uppercase;padding:14px 28px;border-radius:999px;">
                Ler artigo completo
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">
                Você recebeu este e-mail porque se inscreveu na newsletter do
                <a href="${SITE_URL}" style="color:#9ca3af;">oseuplano.com</a>.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function sendCampaign(post) {
  const createRes = await fetch("https://api.brevo.com/v3/emailCampaigns", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": BREVO_API_KEY,
    },
    body: JSON.stringify({
      name: `Novo post: ${post.title} (${post.slug})`,
      subject: `Novo artigo: ${post.title}`,
      sender: { name: SENDER_NAME, email: SENDER_EMAIL },
      type: "classic",
      htmlContent: buildEmailHtml(post),
      recipients: { listIds: [Number(BREVO_LIST_ID)] },
    }),
  });

  if (!createRes.ok) {
    throw new Error(
      `Brevo create campaign failed: ${createRes.status} ${await createRes.text()}`
    );
  }

  const { id } = await createRes.json();

  const sendRes = await fetch(
    `https://api.brevo.com/v3/emailCampaigns/${id}/sendNow`,
    {
      method: "POST",
      headers: { "api-key": BREVO_API_KEY, Accept: "application/json" },
    }
  );

  if (!sendRes.ok) {
    throw new Error(
      `Brevo sendNow failed: ${sendRes.status} ${await sendRes.text()}`
    );
  }

  console.log(`Campanha enviada para o post "${post.slug}" (campaign id ${id}).`);
}

async function main() {
  const source = readFileSync(POSTS_FILE, "utf-8");
  const posts = parsePosts(source);

  if (posts.length === 0) {
    console.log("Nenhum post encontrado em posts.ts — nada a fazer.");
    return;
  }

  const latest = posts.reduce((a, b) => (a.date > b.date ? a : b));

  const state = JSON.parse(readFileSync(STATE_FILE, "utf-8"));

  if (state.lastNotifiedSlug === latest.slug) {
    console.log(`Post mais recente ("${latest.slug}") já foi notificado. Nada a enviar.`);
    return;
  }

  console.log(`Post novo detectado: "${latest.slug}".`);

  if (!BREVO_API_KEY || !BREVO_LIST_ID) {
    console.log(
      "BREVO_API_KEY/BREVO_LIST_ID não configurados — pulando envio, mas marcando como notificado para não acumular."
    );
  } else {
    await sendCampaign(latest);
  }

  writeFileSync(
    STATE_FILE,
    JSON.stringify({ lastNotifiedSlug: latest.slug }, null, 2) + "\n"
  );
  console.log("Estado atualizado.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
