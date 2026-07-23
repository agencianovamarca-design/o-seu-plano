import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwSWDV-rRQX3zoPTciJ86PmWBDezm3PQYbpjJmo8V2N8ULMH3NA3QsT4ECDbSfHGDA9/exec";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let email: string;
  try {
    const body = await req.json();
    email = String(body.email || "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  // Sempre registra na planilha, independente do Brevo estar configurado ou não.
  const sheetPromise = fetch(GOOGLE_SHEET_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "",
      whatsapp: "",
      email,
      origem: "Newsletter",
      data: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      }),
    }),
  }).catch(() => null);

  const brevoApiKey = process.env.BREVO_API_KEY;
  const brevoListId = process.env.BREVO_LIST_ID;

  if (brevoApiKey && brevoListId) {
    try {
      const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "api-key": brevoApiKey,
        },
        body: JSON.stringify({
          email,
          listIds: [Number(brevoListId)],
          updateEnabled: true,
        }),
      });

      if (!brevoRes.ok && brevoRes.status !== 400) {
        const detail = await brevoRes.text();
        console.error("Brevo contact error:", brevoRes.status, detail);
      }
    } catch (err) {
      console.error("Brevo request failed:", err);
    }
  }

  await sheetPromise;
  return NextResponse.json({ ok: true });
}
