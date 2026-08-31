import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const PNG_DIR = join(__dir, '..', 'public', 'carrosseis', 'png');
mkdirSync(PNG_DIR, { recursive: true });

const CARROSSEIS = [
  { id:1,  ac:'gold', cat:'Consciência',           capa:'Sua empresa perde clientes\nantes de abrir a boca.', sub:'Você provavelmente não percebe —\nmas seus clientes, sim.' },
  { id:2,  ac:'elec', cat:'Problema + Solução',     capa:'@gmail.com está te\ncustando clientes.', sub:'Você não percebe porque\na perda é silenciosa.' },
  { id:3,  ac:'gold', cat:'Tutorial',               capa:'Como aparecer no\nGoogle Maps de graça.', sub:'Passo a passo para\nqualquer empresa ou MEI.' },
  { id:4,  ac:'gold', cat:'Transformação',          capa:'Antes e depois de estruturar\na presença digital.', sub:'A mesma empresa.\nResultado completamente diferente.' },
  { id:5,  ac:'elec', cat:'Tutorial Rápido',        capa:'E-mail profissional.\nEm menos de 24h.', sub:'Sem conhecimento técnico.\nPasso a passo.' },
  { id:6,  ac:'gold', cat:'Lista de Erros',         capa:'7 erros que fazem\nseu Instagram parecer amador.', sub:'E como corrigir\ncada um.' },
  { id:7,  ac:'gold', cat:'Tutorial',               capa:'WhatsApp Business:\ndo amador ao profissional.', sub:'Vai muito além\nde mudar de aplicativo.' },
  { id:8,  ac:'elec', cat:'Educacional',            capa:'Site ou landing page?\nVocê está escolhendo errado.', sub:'Entenda a diferença e\npare de desperdiçar.' },
  { id:9,  ac:'elec', cat:'Problema + Solução',     capa:'Seus concorrentes aparecem\nno Google. Você não.', sub:'A resposta é mais simples\ndo que você imagina.' },
  { id:10, ac:'gold', cat:'Antes / Depois',         capa:'Sua bio do Instagram\nestá afastando clientes.', sub:'E você nem desconfia.\nVeja exemplos reais.' },
  { id:11, ac:'gold', cat:'Objeção de Preço',       capa:'Quanto custa ter presença\ndigital profissional?', sub:'A resposta vai\nte surpreender.' },
  { id:12, ac:'elec', cat:'Perspectiva Cliente',    capa:'O que seu cliente pesquisa\nantes de te contratar.', sub:'Você sabe o que\nele encontra?' },
  { id:13, ac:'gold', cat:'Diagnóstico',            capa:'3 perguntas. Descubra onde\nsua empresa está no digital.', sub:'Seja honesto\ncom você mesmo.' },
  { id:14, ac:'gold', cat:'Guia Prático',           capa:'30 dias de conteúdo.\nPara qualquer negócio. Do zero.', sub:'Salva esse carrossel.' },
  { id:15, ac:'elec', cat:'Tática',                 capa:'Como responder avaliações\nno Google.', sub:'Exemplos reais.\nCopie e use agora.' },
  { id:16, ac:'gold', cat:'Recursos Gratuitos',     capa:'5 ferramentas gratuitas\nque todo MEI precisa.', sub:'Todas gratuitas.\nTodas essenciais.' },
  { id:17, ac:'gold', cat:'Identidade Visual',      capa:'Sua logo está comunicando\na mensagem certa?', sub:'Ela fala antes\nde você.' },
  { id:18, ac:'gold', cat:'Checklist',              capa:'Checklist: sua empresa está\npronta para o digital?', sub:'Marque quantos\nvocê já tem.' },
  { id:19, ac:'elec', cat:'Educação Base',          capa:'Presença digital não\né ter Instagram.', sub:'Entenda o que significa\nde verdade.' },
  { id:20, ac:'gold', cat:'Plano de Ação',          capa:'De 0 a presença digital\nprofissional em 7 dias.', sub:'O plano que qualquer\nempresa pode seguir.' },
  { id:21, ac:'gold', cat:'Estratégia de Reels',    capa:'Como usar Reels para atrair\nclientes sem aparecer.', sub:'A estratégia que funciona\nsem mostrar o rosto.' },
  { id:22, ac:'gold', cat:'Prova Social',           capa:'Como pedir e usar\ndepoimentos de clientes.', sub:'Prova social que\nvende de verdade.' },
  { id:23, ac:'elec', cat:'LinkedIn',               capa:'LinkedIn para profissionais\nliberais: por onde começar.', sub:'A rede que ninguém usa —\nmas deveria.' },
  { id:24, ac:'gold', cat:'Portfólio Digital',      capa:'Como montar um portfólio\ndigital do zero.', sub:'Mostre seu trabalho\nantes de falar.' },
  { id:25, ac:'gold', cat:'Precificação',           capa:'Quanto cobrar? Como precificar\nseus serviços.', sub:'Pare de cobrar menos\ndo que você vale.' },
  { id:26, ac:'elec', cat:'Tráfego Pago',           capa:'Como anunciar no Instagram\ncom R$ 10 por dia.', sub:'Sem agência.\nSem complicação.' },
  { id:27, ac:'gold', cat:'Fidelização',            capa:'Atendimento que fideliza:\no que fazer depois da venda.', sub:'Cliente satisfeito\nindica. Sempre.' },
  { id:28, ac:'gold', cat:'Copywriting',            capa:'Como criar conteúdo que vende\nsem parecer vendedor.', sub:'A diferença entre\nempurrar e atrair.' },
  { id:29, ac:'elec', cat:'Parcerias',              capa:'Parcerias digitais: como crescer\njunto com outros profissionais.', sub:'Sozinho você vai rápido.\nJuntos vocês vão longe.' },
  { id:30, ac:'gold', cat:'Métricas',               capa:'Como saber se seu marketing\ndigital está funcionando.', sub:'Os números que\nrealmente importam.' },
];

function buildHTML(c) {
  const isGold = c.ac === 'gold';
  const accentA = isGold ? '#FFA300' : '#0047FF';
  const accentB = isGold ? '#FFD080' : '#4D88FF';
  const badgeBg = isGold ? 'rgba(255,163,0,0.12)' : 'rgba(0,71,255,0.12)';
  const badgeBorder = isGold ? 'rgba(255,163,0,0.3)' : 'rgba(0,71,255,0.3)';
  const badgeColor = isGold ? '#FFA300' : '#5588FF';

  const numStr = String(c.id).padStart(2, '0');
  const titleLines = c.capa.split('\n');
  const subLines   = c.sub ? c.sub.split('\n') : [];

  // Dynamic font size based on title length
  const maxTitleLen = Math.max(...titleLines.map(l => l.length));
  const titleSize = maxTitleLen > 28 ? 88 : maxTitleLen > 22 ? 100 : maxTitleLen > 16 ? 112 : 124;

  const titleHTML = titleLines.map(line => `<div>${escHtml(line)}</div>`).join('');
  const subHTML   = subLines.map(line => `<div>${escHtml(line)}</div>`).join('');

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 1080px; height: 1080px; overflow: hidden; background: #0A0F1A; }

.slide {
  position: relative;
  width: 1080px;
  height: 1080px;
  background: #0A0F1A;
  overflow: hidden;
}

/* Subtle radial glow */
.glow {
  position: absolute;
  width: 900px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(ellipse, ${isGold ? 'rgba(255,163,0,0.055)' : 'rgba(0,71,255,0.06)'} 0%, transparent 70%);
  bottom: -100px;
  left: -200px;
  pointer-events: none;
}

/* Dot grid */
.dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(245,242,236,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}

/* Top vignette */
.vignette {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(10,15,26,0.0) 0%, rgba(10,15,26,0.0) 50%, rgba(10,15,26,0.55) 100%);
  pointer-events: none;
}

/* Header bar */
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 68px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 13px;
}
.bars {
  display: flex;
  align-items: flex-end;
  gap: 4px;
}
.bar {
  width: 8px;
  border-radius: 3px;
  background: #FFA300;
}
.b1 { height: 26px; }
.b2 { height: 45px; }
.b3 { height: 64px; }
.b4 { height: 86px; }
.brand-words { display: flex; flex-direction: column; gap: 3px; }
.brand-name {
  font-family: 'Bebas Neue', cursive;
  font-size: 28px;
  letter-spacing: 0.08em;
  color: #F5F2EC;
  line-height: 1;
}
.brand-sub {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.28em;
  color: rgba(245,242,236,0.3);
  text-transform: uppercase;
  line-height: 1;
}

/* Badge */
.badge {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${badgeColor};
  background: ${badgeBg};
  border: 1px solid ${badgeBorder};
  padding: 8px 18px;
  border-radius: 6px;
}

/* Number */
.number {
  position: absolute;
  left: 68px;
  top: 490px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.22em;
  color: rgba(245,242,236,0.15);
  text-transform: uppercase;
}

/* Accent line before title */
.title-accent {
  position: absolute;
  left: 68px;
  top: 536px;
  width: 48px;
  height: 3px;
  background: linear-gradient(90deg, ${accentA}, ${accentB});
  border-radius: 2px;
}

/* Title block */
.title {
  position: absolute;
  left: 68px;
  right: 68px;
  top: 566px;
  font-family: 'Bebas Neue', cursive;
  font-size: ${titleSize}px;
  line-height: 1.0;
  letter-spacing: 0.02em;
  color: #F5F2EC;
}

/* Subtitle */
.subtitle {
  position: absolute;
  top: 860px;
  left: 68px;
  right: 200px;
  font-family: 'DM Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.45;
  color: rgba(245,242,236,0.42);
}

/* Accent bar bottom */
.accent-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, ${accentA}, ${accentB});
}

/* Corner number */
.corner-num {
  position: absolute;
  right: 68px;
  bottom: 28px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: rgba(245,242,236,0.15);
}
</style>
</head>
<body>
<div class="slide">
  <div class="glow"></div>
  <div class="dots"></div>
  <div class="vignette"></div>

  <div class="header">
    <div class="logo">
      <div class="bars">
        <div class="bar b1"></div>
        <div class="bar b2"></div>
        <div class="bar b3"></div>
        <div class="bar b4"></div>
      </div>
      <div class="brand-words">
        <span class="brand-name">O SEU PLANO</span>
        <span class="brand-sub">Estratégia Digital</span>
      </div>
    </div>
    <div class="badge">${escHtml(c.cat)}</div>
  </div>

  <div class="number">Carrossel ${numStr} · 30</div>
  <div class="title-accent"></div>
  <div class="title">${titleHTML}</div>
  <div class="subtitle" id="sub">${subHTML}</div>

  <div class="accent-bar"></div>
  <div class="corner-num">oseuplanobr</div>
</div>
<script>
// Reposition subtitle below title after fonts are loaded
document.fonts.ready.then(() => {
  const title = document.querySelector('.title');
  const sub = document.querySelector('.subtitle');
  if (title && sub) {
    const titleBottom = title.getBoundingClientRect().bottom;
    sub.style.top = (titleBottom + 32) + 'px';
  }
});
</script>
</body>
</html>`;
}

function escHtml(s) {
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;');
}

// ── MAIN ─────────────────────────────────────────────────────────
console.log('Iniciando geração de PNGs...\n');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 }); // @2x for crispness

for (const c of CARROSSEIS) {
  const num = String(c.id).padStart(2, '0');
  const html = buildHTML(c);

  await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 30000 });

  // Wait for fonts AND for the inline fonts.ready.then() callback to run
  await page.evaluate(() => document.fonts.ready.then(() => new Promise(r => setTimeout(r, 100))));

  // Extra settle for layout reflow
  await new Promise(r => setTimeout(r, 300));

  const buf = await page.screenshot({
    type: 'png',
    clip: { x: 0, y: 0, width: 1080, height: 1080 },
    omitBackground: false,
  });

  const outPath = join(PNG_DIR, `capa-${num}.png`);
  writeFileSync(outPath, buf);
  console.log(`✓ capa-${num}.png`);
}

await browser.close();

console.log(`\n✅ 30 PNGs gerados em public/carrosseis/png/`);
console.log('   Dimensão: 1080 × 1080 px (@2x → qualidade máxima)');
