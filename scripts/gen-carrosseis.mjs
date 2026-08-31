import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dir, '..', 'public', 'carrosseis');
mkdirSync(OUT, { recursive: true });

const CARROSSEIS = [
  { id:1,  ac:'gold', cat:'Consciência',        capa:'Sua empresa perde clientes\nantes de abrir a boca.', sub:'Você provavelmente não percebe —\nmas seus clientes, sim.' },
  { id:2,  ac:'elec', cat:'Problema + Solução',  capa:'@gmail.com está te\ncustando clientes.', sub:'Você não percebe porque\na perda é silenciosa.' },
  { id:3,  ac:'gold', cat:'Tutorial',            capa:'Como aparecer no Google Maps\ngratuitamente.', sub:'Passo a passo para\nqualquer empresa ou MEI.' },
  { id:4,  ac:'gold', cat:'Transformação',       capa:'Antes e depois de estruturar\na presença digital.', sub:'A mesma empresa.\nResultado completamente diferente.' },
  { id:5,  ac:'elec', cat:'Tutorial Rápido',     capa:'E-mail profissional.\nEm menos de 24h.', sub:'Sem conhecimento técnico.\nPasso a passo.' },
  { id:6,  ac:'gold', cat:'Lista de Erros',      capa:'7 erros que fazem seu Instagram\nparecer amador.', sub:'E como corrigir\ncada um.' },
  { id:7,  ac:'gold', cat:'Tutorial',            capa:'WhatsApp Business:\ndo amador ao profissional.', sub:'Vai muito além\nde mudar de aplicativo.' },
  { id:8,  ac:'elec', cat:'Educacional',         capa:'Site ou landing page?\nVocê está escolhendo errado.', sub:'Entenda a diferença e\npare de desperdiçar.' },
  { id:9,  ac:'elec', cat:'Problema + Solução',  capa:'Seus concorrentes aparecem\nno Google. Você não.', sub:'A resposta é mais simples\ndo que você imagina.' },
  { id:10, ac:'gold', cat:'Antes/Depois',        capa:'Sua bio do Instagram\nestá afastando clientes.', sub:'E você nem desconfia.\nVeja exemplos reais.' },
  { id:11, ac:'gold', cat:'Objeção de Preço',    capa:'Quanto custa ter presença\ndigital profissional?', sub:'A resposta vai\nte surpreender.' },
  { id:12, ac:'elec', cat:'Perspectiva Cliente', capa:'O que seu cliente pesquisa\nantes de te contratar.', sub:'Você sabe o que\nele encontra?' },
  { id:13, ac:'gold', cat:'Diagnóstico',         capa:'3 perguntas. Descubra onde\nsua empresa está no digital.', sub:'Seja honesto\ncom você mesmo.' },
  { id:14, ac:'gold', cat:'Guia Prático',        capa:'30 dias de conteúdo.\nPara qualquer negócio. Do zero.', sub:'Salva esse carrossel.' },
  { id:15, ac:'elec', cat:'Tática',              capa:'Como responder avaliações\nno Google.', sub:'Exemplos reais. Copie\ne use agora.' },
  { id:16, ac:'gold', cat:'Recursos',            capa:'5 ferramentas gratuitas\nque todo MEI precisa.', sub:'Todas gratuitas.\nTodas essenciais.' },
  { id:17, ac:'gold', cat:'Identidade Visual',   capa:'Sua logo está comunicando\na mensagem certa?', sub:'Ela fala antes\nde você.' },
  { id:18, ac:'gold', cat:'Checklist',           capa:'Checklist: sua empresa está\npronta para o digital?', sub:'Marque quantos\nvocê já tem.' },
  { id:19, ac:'elec', cat:'Educação Base',       capa:'Presença digital não\né ter Instagram.', sub:'Entenda o que significa\nde verdade.' },
  { id:20, ac:'gold', cat:'Plano de Ação',       capa:'De 0 a presença digital\nprofissional em 7 dias.', sub:'O plano que qualquer\nempresa pode seguir.' },
  { id:21, ac:'gold', cat:'Estratégia de Conteúdo', capa:'Como usar Reels para atrair\nclientes sem aparecer.', sub:'A estratégia que\nfunciona sem câmera.' },
  { id:22, ac:'gold', cat:'Prova Social',        capa:'Como pedir e usar depoimentos\nde clientes.', sub:'Prova social que\nvende de verdade.' },
  { id:23, ac:'elec', cat:'LinkedIn',            capa:'LinkedIn para profissionais\nliberais: por onde começar.', sub:'A rede que ninguém\nusa — mas deveria.' },
  { id:24, ac:'gold', cat:'Portfólio',           capa:'Como montar um portfólio\ndigital do zero.', sub:'Mostre seu trabalho\nantes de falar.' },
  { id:25, ac:'gold', cat:'Precificação',        capa:'Quanto cobrar? Como precificar\nseus serviços no digital.', sub:'Pare de cobrar menos\ndo que você vale.' },
  { id:26, ac:'elec', cat:'Tráfego Pago',        capa:'Como anunciar no Instagram\ncom R$ 10 por dia.', sub:'Sem agência.\nSem complicação.' },
  { id:27, ac:'gold', cat:'Fidelização',         capa:'Atendimento que fideliza:\no que fazer depois da venda.', sub:'Cliente satisfeito\nindica. Sempre.' },
  { id:28, ac:'gold', cat:'Copywriting',         capa:'Como criar conteúdo que vende\nsem parecer vendedor.', sub:'A diferença entre\nempurrar e atrair.' },
  { id:29, ac:'elec', cat:'Parcerias',           capa:'Parcerias digitais: como crescer\njunto com outros profissionais.', sub:'Sozinho você vai rápido.\nJuntos vocês vão longe.' },
  { id:30, ac:'gold', cat:'Métricas',            capa:'Como saber se seu marketing\ndigital está funcionando.', sub:'Os números que\nrealmente importam.' },
];

// ── SVG generation ──────────────────────────────────────────────

function logoBarsSVG(x0, y0, size) {
  const gap = Math.round(size * 0.14);
  const bw  = Math.round((size - 3 * gap) / 4);
  const rx  = Math.max(2, Math.round(bw * 0.28));
  const ratios = [0.30, 0.52, 0.74, 1.00];
  return ratios.map((r, i) => {
    const h  = Math.round(r * size);
    const bx = x0 + i * (bw + gap);
    const by = y0 + size - h;
    return `<rect x="${bx}" y="${by}" width="${bw}" height="${h}" rx="${rx}" fill="#FFA300"/>`;
  }).join('\n  ');
}

function wrapLines(lines, x, startY, fontSize, fill, opacity, fontFamily, fontWeight, anchor='start') {
  return lines.map((line, i) => {
    const y = startY + i * (fontSize * 1.12);
    return `<text x="${x}" y="${y}" font-family="${fontFamily}" font-size="${fontSize}" font-weight="${fontWeight}" fill="${fill}" fill-opacity="${opacity}" text-anchor="${anchor}">${escXml(line)}</text>`;
  }).join('\n  ');
}

function escXml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
}

function makeSVG(c) {
  const isGold = c.ac === 'gold';
  const accentColor  = isGold ? '#FFA300' : '#0047FF';
  const accentColor2 = isGold ? '#FFD080' : '#4D88FF';
  const catBg        = isGold ? 'rgba(255,163,0,0.14)' : 'rgba(0,71,255,0.14)';
  const catStroke    = isGold ? 'rgba(255,163,0,0.3)' : 'rgba(0,71,255,0.3)';

  const logoSize = 72;
  const logoX    = 64;
  const logoY    = 64;

  // Split title and subtitle into lines
  const titleLines = c.capa.split('\n');
  const subLines   = c.sub ? c.sub.split('\n') : [];

  const numStr  = String(c.id).padStart(2, '0');
  const catText = escXml(c.cat);
  const catLen  = c.cat.length;
  const catW    = Math.max(180, catLen * 13 + 40);

  const logoBarsSvg = logoBarsSVG(logoX, logoY, logoSize);

  // Brand text next to bars
  const barsTotalW = 4 * Math.round((logoSize - 3*Math.round(logoSize*0.14)) / 4) + 3 * Math.round(logoSize * 0.14);
  const brandX = logoX + barsTotalW + 16;

  // Title block - start at y=700 for large impact text
  const titleFontSize = titleLines.length >= 2 ? 108 : 120;
  const titleY = 680;
  const titleLines2 = wrapLines(titleLines, 64, titleY, titleFontSize, '#F5F2EC', 1, "Impact,'Arial Black',sans-serif", 'bold');

  const subY = titleY + titleLines.length * (titleFontSize * 1.12) + 24;
  const subLines2 = subLines.length > 0
    ? wrapLines(subLines, 64, subY, 42, '#F5F2EC', 0.45, "Arial,Helvetica,sans-serif", 'normal')
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
  <!-- Background -->
  <rect width="1080" height="1080" fill="#0A0F1A"/>

  <!-- Subtle gradient overlay -->
  <defs>
    <linearGradient id="vg${c.id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0A0F1A" stop-opacity="0"/>
      <stop offset="60%" stop-color="#0A0F1A" stop-opacity="0"/>
      <stop offset="100%" stop-color="#0A0F1A" stop-opacity="0.7"/>
    </linearGradient>
    <linearGradient id="ag${c.id}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${accentColor}"/>
      <stop offset="100%" stop-color="${accentColor2}"/>
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#vg${c.id})"/>

  <!-- Subtle dot pattern -->
  <pattern id="dots${c.id}" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
    <circle cx="20" cy="20" r="1" fill="#F5F2EC" fill-opacity="0.03"/>
  </pattern>
  <rect width="1080" height="1080" fill="url(#dots${c.id})"/>

  <!-- Logo bars -->
  ${logoBarsSvg}

  <!-- Brand name -->
  <text x="${brandX}" y="${logoY + logoSize * 0.58}" font-family="Impact,'Arial Black',sans-serif" font-size="${Math.round(logoSize * 0.50)}" font-weight="bold" fill="#F5F2EC" fill-opacity="0.9" letter-spacing="3">${'O SEU PLANO'}</text>
  <text x="${brandX}" y="${logoY + logoSize * 0.84}" font-family="Arial,Helvetica,sans-serif" font-size="${Math.round(logoSize * 0.19)}" fill="#F5F2EC" fill-opacity="0.35" letter-spacing="4">${'ESTRATÉGIA DIGITAL'}</text>

  <!-- Category badge -->
  <rect x="${1080 - catW - 60}" y="56" width="${catW}" height="44" rx="8" fill="${catBg}" stroke="${catStroke}" stroke-width="1"/>
  <text x="${1080 - catW/2 - 60}" y="84" font-family="Arial,Helvetica,sans-serif" font-size="18" font-weight="bold" fill="${accentColor}" text-anchor="middle" letter-spacing="2">${catText.toUpperCase()}</text>

  <!-- Slide number -->
  <text x="64" y="560" font-family="Arial,Helvetica,sans-serif" font-size="22" fill="#F5F2EC" fill-opacity="0.2" letter-spacing="3">CARROSSEL ${numStr} / 30</text>

  <!-- Title lines -->
  ${titleLines2}

  <!-- Subtitle lines -->
  ${subLines2}

  <!-- Accent bar at bottom -->
  <rect x="0" y="1074" width="1080" height="6" fill="url(#ag${c.id})"/>

  <!-- Slide count hint -->
  <text x="1016" y="1050" font-family="Arial,Helvetica,sans-serif" font-size="20" fill="#F5F2EC" fill-opacity="0.18" text-anchor="end">1 /</text>
</svg>`;
}

// Generate all 30 files
CARROSSEIS.forEach(c => {
  const filename = `capa-${String(c.id).padStart(2,'0')}.svg`;
  const svg = makeSVG(c);
  writeFileSync(join(OUT, filename), svg, 'utf8');
  console.log(`✓ ${filename}`);
});

// Generate index HTML
const indexHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Carrosséis — O Seu Plano</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:#0A0F1A;color:#F5F2EC;font-family:'DM Sans',sans-serif;padding:2rem}
h1{font-family:'Bebas Neue',cursive;font-size:3rem;letter-spacing:.04em;color:#FFA300;margin-bottom:.5rem}
p{color:rgba(245,242,236,.4);margin-bottom:2rem;font-size:14px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(1080px,1fr));gap:3rem}
.slide-group{border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden}
.slide-group h2{font-family:'Bebas Neue',cursive;font-size:1.5rem;letter-spacing:.04em;padding:1rem 1.5rem;background:#111827;color:#F5F2EC;border-bottom:1px solid rgba(255,255,255,.06)}
.slide-group img{width:1080px;height:1080px;display:block}
</style>
</head>
<body>
<h1>Kit de Carrosséis</h1>
<p>30 capas prontas — tamanho 1080×1080 px · Instagram / Facebook</p>
<div class="grid">
${CARROSSEIS.map(c => `  <div class="slide-group"><h2>${String(c.id).padStart(2,'0')}. ${c.capa.replace(/\n/,' ')}</h2><img src="capa-${String(c.id).padStart(2,'0')}.svg" alt="Carrossel ${c.id}"/></div>`).join('\n')}
</div>
</body>
</html>`;

writeFileSync(join(OUT, 'index.html'), indexHtml, 'utf8');
console.log('\n✅ Todos os arquivos gerados em public/carrosseis/');
console.log(`   → ${CARROSSEIS.length} capas SVG (1080×1080)`);
console.log('   → index.html (visualizador completo)');
