import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dir, '..', 'public', 'downloads');
mkdirSync(OUT, { recursive: true });

const EBOOK_HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --deep: #0A0F1A;
    --surface: #111827;
    --gold: #FFA300;
    --gold-light: #FFD080;
    --electric: #0047FF;
    --text: #1a1a2e;
    --text-muted: #4a5568;
    --text-light: #718096;
    --border: #e2e8f0;
    --bg: #f8fafc;
    --white: #ffffff;
  }

  @page { size: A4; margin: 0; }
  html, body { width: 210mm; background: var(--white); font-family: 'DM Sans', sans-serif; }

  /* ── COVER ──────────────────────────────────────────────────── */
  .cover {
    width: 210mm;
    height: 297mm;
    background: var(--deep);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 14mm 16mm 12mm;
    page-break-after: always;
    position: relative;
    overflow: hidden;
  }
  .cover::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(255,163,0,0.035) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  .cover::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3mm;
    background: linear-gradient(90deg, var(--gold), var(--gold-light));
  }
  .cover-glow {
    position: absolute;
    width: 140mm;
    height: 120mm;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(255,163,0,0.07) 0%, transparent 70%);
    bottom: 20mm;
    right: -20mm;
    pointer-events: none;
  }

  .cover-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    z-index: 1;
  }
  .cover-bars {
    display: flex;
    align-items: flex-end;
    gap: 3px;
  }
  .cover-bar {
    width: 6px;
    border-radius: 2px;
    background: var(--gold);
  }
  .cb1 { height: 12px; }
  .cb2 { height: 20px; }
  .cb3 { height: 28px; }
  .cb4 { height: 38px; }
  .cover-brand {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .cover-brand-name {
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
    letter-spacing: 0.06em;
    color: #F5F2EC;
    line-height: 1;
  }
  .cover-brand-sub {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 7px;
    font-weight: 600;
    letter-spacing: 0.25em;
    color: rgba(245,242,236,0.3);
    text-transform: uppercase;
  }

  .cover-body {
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10mm 0;
  }
  .cover-badge {
    display: inline-block;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold);
    background: rgba(255,163,0,0.1);
    border: 1px solid rgba(255,163,0,0.25);
    padding: 4px 12px;
    border-radius: 4px;
    margin-bottom: 10mm;
  }
  .cover-num {
    font-family: 'Bebas Neue', cursive;
    font-size: 120px;
    line-height: 0.85;
    color: rgba(255,163,0,0.08);
    position: absolute;
    right: -4mm;
    top: 0;
    letter-spacing: -2px;
  }
  .cover-title {
    font-family: 'Bebas Neue', cursive;
    font-size: 52px;
    line-height: 1.0;
    letter-spacing: 0.02em;
    color: #F5F2EC;
    margin-bottom: 6mm;
  }
  .cover-title span {
    color: var(--gold);
  }
  .cover-subtitle {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    line-height: 1.55;
    color: rgba(245,242,236,0.38);
    max-width: 130mm;
  }

  .cover-footer {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .cover-meta {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 8px;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: rgba(245,242,236,0.18);
    text-transform: uppercase;
  }
  .cover-edition {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 8px;
    font-weight: 500;
    color: rgba(245,242,236,0.15);
    text-align: right;
  }

  /* ── CHAPTER PAGES ──────────────────────────────────────────── */
  .chapter {
    width: 210mm;
    min-height: 297mm;
    padding: 16mm 16mm 14mm;
    page-break-before: always;
    page-break-inside: avoid;
    background: var(--white);
    display: flex;
    flex-direction: column;
  }

  .chapter-header {
    display: flex;
    align-items: flex-start;
    gap: 5mm;
    margin-bottom: 8mm;
    padding-bottom: 6mm;
    border-bottom: 1px solid var(--border);
  }
  .chapter-num-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    flex-shrink: 0;
  }
  .chapter-num {
    font-family: 'Bebas Neue', cursive;
    font-size: 44px;
    line-height: 1;
    color: var(--gold);
  }
  .chapter-num-label {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 6px;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: var(--text-light);
    text-transform: uppercase;
  }
  .chapter-vline {
    width: 2px;
    min-height: 48px;
    background: linear-gradient(to bottom, var(--gold), transparent);
    flex-shrink: 0;
    margin-top: 4px;
  }
  .chapter-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.25;
    color: var(--text);
    margin-top: 6px;
  }

  .chapter-intro {
    font-size: 13.5px;
    line-height: 1.7;
    color: var(--text-muted);
    margin-bottom: 6mm;
  }
  .chapter-intro strong {
    color: var(--text);
    font-weight: 600;
  }

  .insight-box {
    background: #fffbf0;
    border-left: 3px solid var(--gold);
    padding: 4mm 5mm;
    border-radius: 0 4px 4px 0;
    margin-bottom: 6mm;
  }
  .insight-box p {
    font-size: 12.5px;
    line-height: 1.6;
    color: #5a4a1a;
  }
  .insight-box strong {
    color: #3a2e0a;
  }

  .section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 3mm;
    margin-top: 5mm;
  }

  .body-text {
    font-size: 13px;
    line-height: 1.7;
    color: var(--text-muted);
    margin-bottom: 4mm;
  }
  .body-text strong {
    color: var(--text);
    font-weight: 600;
  }

  .checklist {
    list-style: none;
    margin-bottom: 6mm;
  }
  .checklist li {
    display: flex;
    align-items: flex-start;
    gap: 3mm;
    font-size: 13px;
    line-height: 1.6;
    color: var(--text-muted);
    margin-bottom: 3mm;
  }
  .checklist li::before {
    content: '✓';
    color: var(--gold);
    font-weight: 700;
    font-size: 12px;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .warning-box {
    background: #fff5f5;
    border-left: 3px solid #fc8181;
    padding: 4mm 5mm;
    border-radius: 0 4px 4px 0;
    margin-bottom: 5mm;
  }
  .warning-box p {
    font-size: 12.5px;
    line-height: 1.6;
    color: #742a2a;
  }

  .tip-box {
    background: #f0fdf4;
    border-left: 3px solid #48bb78;
    padding: 4mm 5mm;
    border-radius: 0 4px 4px 0;
    margin-bottom: 5mm;
  }
  .tip-box p {
    font-size: 12.5px;
    line-height: 1.6;
    color: #1a472a;
  }

  .chapter-footer {
    margin-top: auto;
    padding-top: 5mm;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer-brand {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 8px;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: #ccc;
    text-transform: uppercase;
  }
  .footer-page {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 8px;
    color: #ccc;
  }
  .footer-accent {
    width: 20mm;
    height: 2px;
    background: linear-gradient(90deg, var(--gold), transparent);
    border-radius: 1px;
  }

  /* ── FINAL PAGE ─────────────────────────────────────────────── */
  .final-page {
    width: 210mm;
    height: 297mm;
    background: var(--deep);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16mm;
    page-break-before: always;
    position: relative;
    overflow: hidden;
    text-align: center;
  }
  .final-page::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3mm;
    background: linear-gradient(90deg, var(--gold), var(--gold-light));
  }
  .final-title {
    font-family: 'Bebas Neue', cursive;
    font-size: 38px;
    color: #F5F2EC;
    margin-bottom: 4mm;
    letter-spacing: 0.02em;
  }
  .final-title span { color: var(--gold); }
  .final-body {
    font-size: 13px;
    line-height: 1.7;
    color: rgba(245,242,236,0.4);
    max-width: 130mm;
    margin-bottom: 10mm;
  }
  .final-cta {
    display: inline-block;
    background: var(--gold);
    color: var(--deep);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 4mm 10mm;
    border-radius: 50px;
    text-decoration: none;
    margin-bottom: 10mm;
  }
  .final-url {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 9px;
    color: rgba(245,242,236,0.2);
    letter-spacing: 0.1em;
  }
</style>
</head>
<body>

<!-- ═══════════════════════════════════════════════════════ COVER -->
<div class="cover">
  <div class="cover-glow"></div>

  <div class="cover-logo">
    <div class="cover-bars">
      <div class="cover-bar cb1"></div>
      <div class="cover-bar cb2"></div>
      <div class="cover-bar cb3"></div>
      <div class="cover-bar cb4"></div>
    </div>
    <div class="cover-brand">
      <span class="cover-brand-name">O SEU PLANO</span>
      <span class="cover-brand-sub">Estratégia Digital</span>
    </div>
  </div>

  <div class="cover-body">
    <div class="cover-num">7</div>
    <div class="cover-badge">E-book gratuito · Gestão &amp; Finanças</div>
    <div class="cover-title">
      7 Coisas que<br>
      Ninguém Conta<br>
      para o Pequeno<br>
      <span>Empreendedor</span>
    </div>
    <p class="cover-subtitle">
      Do contador ao advogado, do fluxo de caixa à nota fiscal — o que todo dono de negócio precisa saber <em>antes</em> de investir em marketing.
    </p>
  </div>

  <div class="cover-footer">
    <div class="cover-meta">oseuplano.com · 2025</div>
    <div class="cover-edition">Distribuição gratuita<br>Reprodução proibida sem autorização</div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════ CAPÍTULO 1 -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-num-block">
      <div class="chapter-num">01</div>
      <div class="chapter-num-label">Cap.</div>
    </div>
    <div class="chapter-vline"></div>
    <h2 class="chapter-title">Por que a escolha do seu contador pode determinar o tempo de vida da sua empresa</h2>
  </div>

  <p class="chapter-intro">
    A maioria dos pequenos empresários escolhe o contador pelo preço. É compreensível — quando você está começando, cada real conta. Mas essa decisão, tomada só com a carteira, pode ser uma das mais caras que você vai tomar.
  </p>

  <div class="insight-box">
    <p><strong>Realidade:</strong> Segundo o Sebrae, 29% das micro e pequenas empresas fecham nos primeiros 5 anos. Entre os principais motivos: gestão financeira inadequada e problemas tributários — áreas que um bom contador resolve <em>antes</em> de virarem problema.</p>
  </div>

  <div class="section-title">O que um contador realmente faz</div>
  <p class="body-text">
    Um contador não existe apenas para emitir guias e entregar declarações. Ele é o profissional que define em qual regime tributário você vai operar (e isso muda o quanto você paga de imposto todo mês), orienta sobre quando abrir uma empresa, quando mudar de MEI para ME, e como você pode remunerar a si mesmo sem pagar imposto desnecessário.
  </p>

  <div class="section-title">Contador certo vs. contador barato</div>
  <ul class="checklist">
    <li>Contador estratégico orienta sobre regime tributário, pró-labore e planejamento fiscal</li>
    <li>Contador estratégico avisa quando seu faturamento está chegando no limite do Simples</li>
    <li>Contador estratégico sugere quando separar CNPJs ou mudar de enquadramento</li>
    <li>Contador só burocrático entrega as obrigações acessórias e espera você perguntar</li>
  </ul>

  <div class="warning-box">
    <p><strong>Atenção:</strong> Mudar de regime tributário no meio do ano é proibido. Se você escolheu o regime errado em janeiro, vai pagar mais imposto o ano todo. Um bom contador faz essa análise <em>antes</em> do prazo de opção.</p>
  </div>

  <div class="section-title">Como escolher o seu contador</div>
  <p class="body-text">
    Antes de fechar, pergunte: <strong>Qual regime tributário você recomenda para o meu negócio e por quê?</strong> Se ele souber explicar claramente (Simples Nacional, Lucro Presumido ou Lucro Real) e mostrar números comparativos, é sinal de que ele pensa estrategicamente. Se ele responder "vamos ver" sem critério, procure outro.
  </p>

  <div class="tip-box">
    <p><strong>Dica prática:</strong> Peça para o seu contador simular quanto você pagaria de imposto em cada regime no ano anterior. Essa simulação revela muito — tanto sobre o seu negócio quanto sobre a competência do profissional.</p>
  </div>

  <div class="chapter-footer">
    <div class="footer-accent"></div>
    <div class="footer-brand">O Seu Plano · Estratégia Digital</div>
    <div class="footer-page">Capítulo 01 / 07</div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════ CAPÍTULO 2 -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-num-block">
      <div class="chapter-num">02</div>
      <div class="chapter-num-label">Cap.</div>
    </div>
    <div class="chapter-vline"></div>
    <h2 class="chapter-title">Por que ter um advogado que oriente pode te livrar de vários problemas sérios</h2>
  </div>

  <p class="chapter-intro">
    "Advogado é caro. Só chamo se eu precisar." Essa frase já custou muito dinheiro — e muito estresse — a empreendedores que poderiam ter evitado problemas com uma consulta prévia de R$ 200 a R$ 400.
  </p>

  <div class="insight-box">
    <p><strong>Fato:</strong> A maioria dos processos trabalhistas, conflitos com fornecedores e disputas com clientes que chegam à Justiça poderiam ter sido evitados com um contrato bem redigido. Um contrato claro custa muito menos do que uma ação judicial.</p>
  </div>

  <div class="section-title">Os 3 momentos em que você mais precisa de um advogado</div>
  <ul class="checklist">
    <li><strong>Ao contratar seu primeiro funcionário CLT</strong> — legislação trabalhista é complexa e as multas por descumprimento são altas</li>
    <li><strong>Ao fechar um contrato grande com um cliente</strong> — sem contrato claro, você depende da boa vontade do outro lado</li>
    <li><strong>Ao ter um conflito com fornecedor ou cliente</strong> — antes de agir por impulso, um advogado te mostra o que você pode e o que não pode fazer</li>
  </ul>

  <div class="section-title">O que um contrato bem feito protege</div>
  <p class="body-text">
    Um contrato de prestação de serviços bem redigido define: <strong>o que foi combinado</strong> (escopo), <strong>o que acontece se mudar</strong> (alterações), <strong>quando você recebe</strong> (pagamento e penalidades por atraso), e <strong>o que acontece em caso de rescisão</strong>. Sem isso, qualquer divergência vira conflito e qualquer conflito vira custo.
  </p>

  <div class="section-title">Como ter acesso a assessoria jurídica sem gastar muito</div>
  <p class="body-text">
    Você não precisa ter um advogado de plantão. Existem opções acessíveis para pequenos empreendedores:
  </p>
  <ul class="checklist">
    <li>Planos mensais de assessoria jurídica para PMEs (R$ 150 a R$ 400/mês)</li>
    <li>Consulta pontual por projeto (contrato, demissão, disputa específica)</li>
    <li>OAB de alguns estados oferece atendimento inicial gratuito para MEI</li>
    <li>Sebrae tem parceria com escritórios para consultas subsidiadas</li>
  </ul>

  <div class="tip-box">
    <p><strong>Regra de ouro:</strong> Antes de assinar qualquer contrato acima de R$ 3.000 ou de contratar funcionário CLT pela primeira vez, consulte um advogado. O custo da consulta é insignificante perto do risco que você elimina.</p>
  </div>

  <div class="chapter-footer">
    <div class="footer-accent"></div>
    <div class="footer-brand">O Seu Plano · Estratégia Digital</div>
    <div class="footer-page">Capítulo 02 / 07</div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════ CAPÍTULO 3 -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-num-block">
      <div class="chapter-num">03</div>
      <div class="chapter-num-label">Cap.</div>
    </div>
    <div class="chapter-vline"></div>
    <h2 class="chapter-title">MEI ou ME? Como escolher o regime tributário certo e pagar menos imposto</h2>
  </div>

  <p class="chapter-intro">
    Uma das primeiras decisões de qualquer empreendedor é: como formalizar o meu negócio? A escolha errada pode fazer você pagar mais imposto do que precisa — ou te prender em um regime que limita o crescimento.
  </p>

  <div class="section-title">Entendendo os principais tipos</div>
  <ul class="checklist">
    <li><strong>MEI (Microempreendedor Individual):</strong> faturamento até R$ 81 mil/ano, paga contribuição fixa mensal (em torno de R$ 70 a R$ 80), não pode ter sócios, pode ter 1 funcionário</li>
    <li><strong>ME (Microempresa):</strong> faturamento até R$ 360 mil/ano, pode ter sócios e funcionários, tributada pelo Simples Nacional</li>
    <li><strong>EPP (Empresa de Pequeno Porte):</strong> faturamento até R$ 4,8 milhões/ano, também no Simples Nacional mas com alíquotas maiores</li>
  </ul>

  <div class="insight-box">
    <p><strong>Atenção ao limite:</strong> Se você faturar mais de R$ 81 mil como MEI, perde o enquadramento e pode ter que pagar todos os impostos atrasados com multa. Monitorar o faturamento é obrigatório.</p>
  </div>

  <div class="section-title">Simples Nacional: o que é e por que importa</div>
  <p class="body-text">
    O Simples Nacional é um regime tributário simplificado que unifica 8 impostos em uma única guia (DAS). As alíquotas variam de acordo com a faixa de faturamento e a atividade da empresa. <strong>Para a maioria das micro e pequenas empresas, ele é a opção mais vantajosa</strong> — mas não é regra. Há casos em que o Lucro Presumido é mais barato, especialmente para empresas de serviços com margem alta.
  </p>

  <div class="section-title">Como decidir entre MEI e ME</div>
  <p class="body-text">
    Se você fatura menos de R$ 6 mil/mês de forma consistente, o MEI é suficiente e mais simples. Mas se você já está próximo do limite, precisa emitir nota para empresas (PJ) de forma regular, quer crescer a equipe ou precisa de CNPJ para participar de licitações — migre para ME. Essa transição é tranquila e o seu contador resolve.
  </p>

  <div class="tip-box">
    <p><strong>Importante:</strong> Algumas atividades não são permitidas no MEI — como médicos, advogados, engenheiros e consultores de gestão. Verifique a tabela de CNAEs permitidas no Portal do Empreendedor antes de abrir.</p>
  </div>

  <div class="chapter-footer">
    <div class="footer-accent"></div>
    <div class="footer-brand">O Seu Plano · Estratégia Digital</div>
    <div class="footer-page">Capítulo 03 / 07</div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════ CAPÍTULO 4 -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-num-block">
      <div class="chapter-num">04</div>
      <div class="chapter-num-label">Cap.</div>
    </div>
    <div class="chapter-vline"></div>
    <h2 class="chapter-title">Como emitir nota fiscal sem complicação: o básico que ninguém ensina</h2>
  </div>

  <p class="chapter-intro">
    "Eu não emito nota porque é complicado." Essa frase sai da boca de muitos empreendedores — e coloca o negócio deles em risco desnecessário. Emitir nota fiscal é mais simples do que parece, e não fazê-lo tem consequências sérias.
  </p>

  <div class="warning-box">
    <p><strong>Atenção legal:</strong> Prestar serviços ou vender produtos sem emitir nota fiscal é sonegação. Além da multa, em caso de fiscalização você perde o direito de contestar cobranças e fica sem respaldo jurídico em conflitos com clientes.</p>
  </div>

  <div class="section-title">Tipos de nota fiscal que você precisa conhecer</div>
  <ul class="checklist">
    <li><strong>NF-e (Nota Fiscal Eletrônica):</strong> para venda de produtos físicos</li>
    <li><strong>NFS-e (Nota Fiscal de Serviços Eletrônica):</strong> para prestação de serviços — emitida pela prefeitura do seu município</li>
    <li><strong>NFC-e (Nota Fiscal de Consumidor Eletrônica):</strong> para vendas no varejo direto ao consumidor final</li>
  </ul>

  <p class="body-text">
    A maioria dos pequenos empreendedores de serviços (designers, consultores, fotógrafos, etc.) emite a <strong>NFS-e</strong>. MEIs prestadores de serviço também emitem NFS-e — a diferença é que não precisam emitir para pessoas físicas, mas devem emitir para clientes PJ.
  </p>

  <div class="section-title">Como emitir na prática</div>
  <p class="body-text">
    Para NFS-e: acesse o site da prefeitura da sua cidade, cadastre-se como prestador de serviço, configure seu CNPJ e emita direto pelo sistema. Não existe software para comprar — é gratuito. Alguns municípios têm aplicativos próprios.
  </p>
  <ul class="checklist">
    <li>Acesse o portal da prefeitura e localize "Nota Fiscal Eletrônica de Serviços"</li>
    <li>Cadastre seu CNPJ como tomador ou prestador</li>
    <li>Preencha: tomador (quem pagou), valor, descrição do serviço, alíquota ISS</li>
    <li>Emita e envie o PDF para o cliente por e-mail</li>
  </ul>

  <div class="tip-box">
    <p><strong>Dica:</strong> Configure um e-mail profissional (no seu domínio) para enviar as notas fiscais. Receber uma NF de nf@seunome.com.br passa muito mais seriedade do que de uma conta Gmail — e é o que mostra ao cliente que você é um profissional de verdade.</p>
  </div>

  <div class="chapter-footer">
    <div class="footer-accent"></div>
    <div class="footer-brand">O Seu Plano · Estratégia Digital</div>
    <div class="footer-page">Capítulo 04 / 07</div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════ CAPÍTULO 5 -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-num-block">
      <div class="chapter-num">05</div>
      <div class="chapter-num-label">Cap.</div>
    </div>
    <div class="chapter-vline"></div>
    <h2 class="chapter-title">Fluxo de caixa para quem não estudou finanças: 15 minutos por dia já resolve</h2>
  </div>

  <p class="chapter-intro">
    Você pode ter clientes, fazer vendas e ainda assim falir. Isso acontece quando a empresa não controla o fluxo de caixa — o dinheiro que entra e o dinheiro que sai, e <em>quando</em> isso acontece. Gestão de caixa não é opcional: é o que decide se o negócio sobrevive.
  </p>

  <div class="insight-box">
    <p><strong>Dado importante:</strong> A principal causa de fechamento de empresas não é falta de clientes — é falta de controle financeiro. Empresas que faturam bem mas não controlam o caixa chegam ao fim do mês sem dinheiro para pagar fornecedores e funcionários.</p>
  </div>

  <div class="section-title">O que é fluxo de caixa (em linguagem simples)</div>
  <p class="body-text">
    Fluxo de caixa é o registro de tudo que <strong>entrou</strong> (recebimentos de clientes, vendas à vista, antecipações) e tudo que <strong>saiu</strong> (fornecedores, aluguel, impostos, salários, compras) em um período. A diferença entre o que entrou e o que saiu é o seu <strong>saldo de caixa</strong> — e é ele que te diz se você tem dinheiro para honrar seus compromissos.
  </p>

  <div class="section-title">O método dos 15 minutos por dia</div>
  <ul class="checklist">
    <li>Toda manhã: registre os pagamentos recebidos ontem e os que você espera hoje</li>
    <li>Toda tarde: registre todas as saídas do dia (compras, transferências, pagamentos)</li>
    <li>Toda sexta: some e confira o saldo — compare com o saldo real na conta</li>
    <li>Todo início de mês: projete as entradas e saídas do mês que começa</li>
  </ul>

  <div class="section-title">Ferramentas simples para começar</div>
  <p class="body-text">
    Você não precisa de software caro. Uma planilha no Google Sheets com 4 colunas resolve: <strong>Data | Descrição | Entrada | Saída</strong>. Some as colunas no final e você tem o fluxo. Conforme o negócio cresce, você pode migrar para ferramentas como Nibo, Conta Azul ou Omie — mas o princípio é o mesmo.
  </p>

  <div class="warning-box">
    <p><strong>Erro comum:</strong> Contar o dinheiro que está na conta como "lucro". O saldo bancário inclui valores de clientes que ainda não pagaram, reservas para impostos e valores de fornecedores a pagar. Saldo na conta ≠ lucro disponível.</p>
  </div>

  <div class="chapter-footer">
    <div class="footer-accent"></div>
    <div class="footer-brand">O Seu Plano · Estratégia Digital</div>
    <div class="footer-page">Capítulo 05 / 07</div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════ CAPÍTULO 6 -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-num-block">
      <div class="chapter-num">06</div>
      <div class="chapter-num-label">Cap.</div>
    </div>
    <div class="chapter-vline"></div>
    <h2 class="chapter-title">Pessoa física vs. pessoa jurídica: como separar e proteger seu patrimônio</h2>
  </div>

  <p class="chapter-intro">
    Misturar as finanças pessoais com as do negócio é um dos erros mais comuns — e mais perigosos — do pequeno empreendedor brasileiro. Parece inofensivo no começo. Com o tempo, vira um caos que pode custar o seu patrimônio pessoal.
  </p>

  <div class="warning-box">
    <p><strong>Risco real:</strong> Em alguns casos, quando uma empresa não tem contabilidade separada da pessoa física do sócio e acumula dívidas, credores podem requerer a desconsideração da personalidade jurídica — e aí seus bens pessoais (carro, casa, conta bancária) ficam em risco.</p>
  </div>

  <div class="section-title">Por que separar é obrigatório (não é sugestão)</div>
  <p class="body-text">
    Quando você mistura as contas, você: (1) não sabe se o negócio está dando lucro de verdade, (2) não consegue calcular o imposto corretamente, (3) não tem histórico financeiro para conseguir crédito empresarial, e (4) expõe seu patrimônio pessoal a riscos do negócio. São quatro problemas sérios com uma única causa.
  </p>

  <div class="section-title">Como separar na prática</div>
  <ul class="checklist">
    <li>Abra uma conta corrente exclusiva para o CNPJ (a maioria dos bancos digitais tem conta PJ grátis)</li>
    <li>Defina um pró-labore — o valor fixo que você "paga a si mesmo" todo mês como sócio</li>
    <li>Tudo que a empresa recebe entra na conta PJ; tudo que você gasta pessoalmente sai da sua conta PF</li>
    <li>Só transfira dinheiro da PJ para a PF de forma documentada: pró-labore ou distribuição de lucros</li>
  </ul>

  <div class="section-title">Pró-labore vs. distribuição de lucros</div>
  <p class="body-text">
    <strong>Pró-labore</strong> é o salário do sócio pelo trabalho prestado — incide INSS. <strong>Distribuição de lucros</strong> é a retirada de parte do lucro da empresa — isenta de Imposto de Renda no Brasil (para Simples Nacional e Lucro Presumido). Um bom contador define o equilíbrio entre os dois para você pagar menos imposto legalmente.
  </p>

  <div class="tip-box">
    <p><strong>Comece amanhã:</strong> Abra uma conta PJ gratuita no Inter, Nubank ou Banco do Brasil (para MEI) e transfira todo o dinheiro do negócio para ela. Esse único ato já resolve 80% da confusão financeira de um pequeno empreendedor.</p>
  </div>

  <div class="chapter-footer">
    <div class="footer-accent"></div>
    <div class="footer-brand">O Seu Plano · Estratégia Digital</div>
    <div class="footer-page">Capítulo 06 / 07</div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════ CAPÍTULO 7 -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-num-block">
      <div class="chapter-num">07</div>
      <div class="chapter-num-label">Cap.</div>
    </div>
    <div class="chapter-vline"></div>
    <h2 class="chapter-title">O que o CNPJ desbloqueia: crédito, licitação e credibilidade que você ainda não tem</h2>
  </div>

  <p class="chapter-intro">
    Muitos empreendedores abrem o CNPJ por obrigação — para emitir nota ou porque alguém pediu. Mas o CNPJ é muito mais do que uma formalidade. É um instrumento que desbloqueia oportunidades que a pessoa física simplesmente não tem acesso.
  </p>

  <div class="section-title">1. Crédito empresarial</div>
  <p class="body-text">
    Com CNPJ ativo e histórico financeiro (mesmo que pequeno), você pode acessar linhas de crédito para empresas que têm condições muito melhores do que o crédito pessoal. O BNDES, o Pronampe, o FGI e linhas dos bancos públicos e digitais oferecem taxas menores, prazos maiores e limites superiores para PJ. Um MEI com 6 meses de ativo e sem restrições já consegue crédito em algumas instituições.
  </p>

  <div class="section-title">2. Participação em licitações</div>
  <p class="body-text">
    O governo federal, estadual e municipal compra de tudo — e parte dessas compras é destinada a micro e pequenas empresas por lei (Lei Complementar 123). MEIs e MEs têm <strong>preferência em desempate</strong> em licitações. Isso significa que, com um CNPJ ativo e regularidade fiscal, você pode vender para o governo — um dos maiores compradores do país.
  </p>

  <div class="section-title">3. Credibilidade que fecha contratos</div>
  <p class="body-text">
    Empresas sérias preferem contratar PJs. Clientes maiores exigem nota fiscal. Plataformas como a Hotmart, o Mercado Pago e marketplaces profissionais oferecem melhores taxas para quem opera com CNPJ. E, do ponto de vista da percepção, <strong>um negócio com CNPJ, e-mail no domínio e site próprio passa confiança que a pessoa física nunca vai passar.</strong>
  </p>

  <div class="insight-box">
    <p><strong>Pense assim:</strong> O CNPJ é a sua carteira de motorista para o mundo dos negócios. Você pode até andar sem ela por um tempo, mas em qualquer fiscalização — ou em qualquer oportunidade maior — vai precisar dela. Melhor ter e não precisar do que precisar e não ter.</p>
  </div>

  <div class="section-title">O próximo passo</div>
  <p class="body-text">
    Se você chegou até aqui, já sabe mais do que a maioria dos empreendedores que começam. Agora o desafio é colocar em prática — um passo de cada vez. Comece pelo mais urgente para o seu momento: contador, conta PJ separada, ou regularizar a nota fiscal. O resto vem.
  </p>

  <div class="chapter-footer">
    <div class="footer-accent"></div>
    <div class="footer-brand">O Seu Plano · Estratégia Digital</div>
    <div class="footer-page">Capítulo 07 / 07</div>
  </div>
</div>


<!-- ════════════════════════════════════════════════ PÁGINA FINAL -->
<div class="final-page">
  <div class="final-title">Agora você já sabe.<br><span>O próximo passo é seu.</span></div>
  <p class="final-body">
    Mas saber sem agir não muda nada. Se quiser um diagnóstico gratuito da sua presença digital e um plano prático para estruturar o seu negócio — fale com a gente. Sem compromisso, sem pressão.
  </p>
  <a class="final-cta" href="https://oseuplano.com">Acessar o site</a>
  <p class="final-url">oseuplano.com · @seuplano.ofc · contato@oseuplano.com</p>
</div>

</body>
</html>`;

console.log('Gerando PDF do e-book...');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setContent(EBOOK_HTML, { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.evaluate(() => document.fonts.ready.then(() => new Promise(r => setTimeout(r, 100))));
await new Promise(r => setTimeout(r, 600));

const pdf = await page.pdf({
  format: 'A4',
  printBackground: true,
  margin: { top: 0, bottom: 0, left: 0, right: 0 },
});

await browser.close();

const outPath = join(OUT, 'ebook-empreendedor-brasileiro.pdf');
writeFileSync(outPath, pdf);

const kb = Math.round(pdf.length / 1024);
console.log(`\n✅ PDF gerado: public/downloads/ebook-empreendedor-brasileiro.pdf`);
console.log(`   Tamanho: ${kb} KB · ${Math.round(kb/1024 * 10)/10} MB`);
