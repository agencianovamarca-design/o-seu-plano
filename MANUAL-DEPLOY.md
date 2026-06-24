# Manual Completo — O Seu Plano
## Deploy, Conexões e Manutenção

---

## 1. VISÃO GERAL DO PROJETO

### Stack tecnológica
- **Framework:** Next.js 16.2.9 (React 19)
- **Estilização:** Tailwind CSS 4
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Linguagem:** TypeScript

### Estrutura de arquivos
```
seu-plano/
├── public/
│   ├── images/          ← Imagens do avatar (5 fotos)
│   └── videos/          ← Clips de sorteio (3 vídeos)
├── src/
│   ├── app/
│   │   ├── layout.tsx         ← Layout global (Navbar + Footer + WhatsApp)
│   │   ├── page.tsx           ← Home (todas as seções)
│   │   ├── globals.css        ← Estilos globais + cores da marca
│   │   ├── como-funciona/     ← Página "Como Funciona"
│   │   ├── sobre/             ← Página "Sobre Nós"
│   │   ├── simulador/         ← Simulador completo (calculadora detalhada)
│   │   ├── blog/              ← Blog educativo
│   │   ├── faq/               ← Perguntas frequentes
│   │   └── contato/           ← Formulário de contato
│   └── components/
│       ├── Navbar.tsx          ← Menu de navegação
│       ├── Footer.tsx          ← Rodapé com WhatsApp
│       ├── Logo.tsx            ← Logo SVG da marca
│       ├── WhatsAppButton.tsx  ← Botão flutuante WhatsApp
│       ├── VideoPlayer.tsx     ← Player de vídeo dos clips
│       ├── AnimateIn.tsx       ← Componente de animação
│       ├── CountUp.tsx         ← Animação de números
│       └── sections/           ← Seções da home page
│           ├── Hero.tsx              ← Banner principal
│           ├── Problem.tsx           ← "O problema"
│           ├── Solution.tsx          ← "A solução"
│           ├── Comparison.tsx        ← Comparativo
│           ├── Showcase.tsx          ← Vitrine de bens
│           ├── HowItWorks.tsx        ← Vídeo player + como funciona
│           ├── SimulatorJourney.tsx   ← Simulador SICAD interativo (5 etapas)
│           ├── Calculator.tsx        ← Calculadora estática (backup)
│           ├── Testimonials.tsx      ← Depoimentos
│           ├── Consultant.tsx        ← Seção da consultora (avatar)
│           ├── FAQ.tsx               ← FAQ resumido
│           ├── CTA.tsx               ← Call to action final
│           └── Rodobens.tsx          ← Seção administradora (não usada na home)
├── package.json
├── next.config.ts
├── tsconfig.json
└── tailwind / postcss configs
```

### Páginas do site
| Rota | Conteúdo |
|------|----------|
| `/` | Home — todas as seções |
| `/como-funciona` | Explicação detalhada do consórcio |
| `/sobre` | Sobre a marca + avatar |
| `/simulador` | Calculadora detalhada (números brutos) |
| `/blog` | Artigos educativos |
| `/faq` | Perguntas frequentes |
| `/contato` | Formulário de contato |

---

## 2. PRE-DEPLOY CHECKLIST

Antes de colocar no ar, faça estes testes:

### 2.1 Testar o build
```bash
cd "C:\Users\moowg\claude code\seu-plano"
npm run build
```
Se o build passar sem erros, o site está pronto para deploy.

### 2.2 Verificar imagens
Confirme que todas as imagens estão em `public/images/`:
- `avatar-side.jpg`
- `avatar-desk.jpg`
- `avatar-closeup.jpg`
- `avatar-portrait.jpg`
- `avatar-strategy.jpg`

### 2.3 Verificar vídeos
Confirme que os vídeos estão em `public/videos/` (arquivos reais, NÃO symlinks):
- `clip1-sorteio.mp4`
- `clip2-sorteio.mp4`
- `clip3-sorteio.mp4`

### 2.4 Verificar WhatsApp
O número configurado em todos os links é: `5583986469009`
Para alterar, procure por `wa.me/5583986469009` nos seguintes arquivos:
- `src/components/WhatsAppButton.tsx`
- `src/components/Footer.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/CTA.tsx`
- `src/components/sections/Consultant.tsx`
- `src/components/sections/SimulatorJourney.tsx`
- `src/app/simulador/content.tsx`

---

## 3. COLOCAR NO AR — PASSO A PASSO

### 3.1 Instalar o Git (se não tiver)
Baixe em: https://git-scm.com/download/win
Instale com as opções padrão.

### 3.2 Criar repositório no GitHub

1. Acesse https://github.com e crie uma conta (se não tiver)
2. Clique no botão verde **"New"** (novo repositório)
3. Nome: `seu-plano`
4. Marque **Private** (privado)
5. NÃO marque "Add a README"
6. Clique **"Create repository"**

### 3.3 Subir o código

Abra o terminal (PowerShell ou Git Bash) na pasta do projeto:

```bash
cd "C:\Users\moowg\claude code\seu-plano"

# Inicializar Git
git init
git add .
git commit -m "v1.0 - O Seu Plano"

# Conectar ao GitHub (troque SEU-USUARIO pelo seu username)
git remote add origin https://github.com/SEU-USUARIO/seu-plano.git
git branch -M main
git push -u origin main
```

O GitHub vai pedir login — use seu username e um Personal Access Token:
- GitHub → Settings → Developer settings → Personal access tokens → Generate new token
- Marque o escopo `repo` → Generate → Copie o token e use como senha

### 3.4 Deploy na Vercel (GRÁTIS)

1. Acesse https://vercel.com
2. Clique **"Sign Up"** → **"Continue with GitHub"**
3. Autorize o acesso à sua conta GitHub
4. Clique **"Add New Project"**
5. Selecione o repositório `seu-plano`
6. A Vercel detecta automaticamente que é Next.js
7. Clique **"Deploy"**
8. Aguarde ~2 minutos
9. Seu site estará em: `https://seu-plano.vercel.app`

### 3.5 Conectar o domínio oseuplano.com

**Na Vercel:**
1. Vá em **Project Settings → Domains**
2. Digite `oseuplano.com` → **Add**
3. A Vercel vai mostrar os registros DNS necessários
4. Adicione também `www.oseuplano.com` (ela configura o redirect automático)

### 3.6 Configurar DNS na Hostgator

**No painel da Hostgator:**
1. Faça login em https://cliente.hostgator.com.br
2. Vá em **Domínios** → clique no `oseuplano.com`
3. Procure **"Zona de DNS"** ou **"Editar DNS"**
4. Edite/adicione estes registros:

| Tipo | Nome/Host | Valor/Destino |
|------|-----------|---------------|
| **A** | `@` (ou em branco) | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

5. **Remova** qualquer registro A antigo que aponte para o IP da Hostgator
6. Salve

**Tempo de propagação:** 1 a 6 horas (máximo 48h em casos raros)

### 3.7 Verificar SSL

A Vercel gera o certificado HTTPS automaticamente assim que o DNS propagar.
- Teste: acesse `https://oseuplano.com`
- O cadeado verde deve aparecer no navegador
- O redirect de `http://` para `https://` é automático

---

## 4. CONEXÃO WHATSAPP

### 4.1 Estado atual
O site tem 3 pontos de contato com WhatsApp:
1. **Botão flutuante** (canto inferior direito, todas as páginas)
2. **Botão no footer** ("Fale conosco")
3. **Simulador SICAD** (etapa final, envia simulação completa)

Todos direcionam para: `https://wa.me/5583986469009`

### 4.2 Automação com WhatsApp Business API

Para conectar automação (chatbot, respostas automáticas):

**Opção 1 — Z-API (mais simples, BR)**
1. Acesse https://z-api.io
2. Crie uma instância
3. Conecte seu WhatsApp escaneando o QR Code
4. Use os webhooks para receber mensagens do site
5. Configure respostas automáticas

**Opção 2 — Evolution API (open source)**
1. Ideal se quiser mais controle
2. Precisa de um servidor (VPS)
3. Integra com N8N para fluxos automatizados

**Opção 3 — WhatsApp Business Cloud API (oficial)**
1. Acesse https://business.facebook.com
2. Crie um app → tipo "Business" → produto "WhatsApp"
3. Siga a verificação da Meta
4. Mais burocrático mas é a API oficial

### 4.3 Como alterar o número do WhatsApp

Se precisar trocar o número, faça uma busca global por `5583986469009` e substitua.
Arquivos que contêm o número:
```
src/components/WhatsAppButton.tsx
src/components/Footer.tsx
src/components/sections/Hero.tsx
src/components/sections/CTA.tsx
src/components/sections/Consultant.tsx
src/components/sections/SimulatorJourney.tsx
src/app/simulador/content.tsx
```

### 4.4 Mensagem pré-preenchida do Simulador

O simulador SICAD envia uma mensagem estruturada ao WhatsApp:
```
Olá! Sou [nome].

Fiz a simulação no site:
• Objetivo: Primeiro imóvel
• Crédito: R$ 260.000
• Prazo: 200 meses
• Parcela consórcio: R$ 1.691/mês
• Economia vs financiamento: R$ 565.000

Gostaria de uma análise personalizada.
```

Para editar essa mensagem, altere o arquivo:
`src/components/sections/SimulatorJourney.tsx` → função `sendWhatsApp`

---

## 5. GOOGLE — SEO E ANALYTICS

### 5.1 Google Search Console (indexação)

1. Acesse https://search.google.com/search-console
2. Clique **"Adicionar propriedade"** → **"Domínio"** → `oseuplano.com`
3. O Google vai pedir verificação via DNS:
   - Na Hostgator, adicione um registro TXT com o valor que o Google fornecer
4. Após verificação, envie o sitemap: `https://oseuplano.com/sitemap.xml`
   (Next.js gera automaticamente se configurado)

### 5.2 Google Analytics (tráfego)

1. Acesse https://analytics.google.com
2. Crie uma conta → propriedade `O Seu Plano`
3. Selecione **"Web"** → URL: `oseuplano.com`
4. Copie o ID de medição (formato: `G-XXXXXXXXXX`)
5. No projeto, adicione no `src/app/layout.tsx`, dentro do `<head>`:

```tsx
<script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

Troque `G-XXXXXXXXXX` pelo seu ID real.

### 5.3 Meta Pixel (Facebook/Instagram Ads)

Se for rodar anúncios:
1. Acesse https://business.facebook.com → Gerenciador de Eventos
2. Crie um Pixel → copie o ID
3. Adicione o script no `layout.tsx` (mesmo padrão do Analytics)

---

## 6. MANUTENÇÃO DO SITE

### 6.1 Como fazer alterações

**Fluxo básico:**
1. Abra o Claude Code nesta pasta
2. Peça a alteração desejada
3. Teste localmente: `npm run dev` → acesse `http://localhost:3000`
4. Quando estiver OK:
```bash
git add .
git commit -m "descrição da mudança"
git push
```
5. A Vercel detecta o push e faz deploy automático (~2 min)

### 6.2 Alterações comuns

| O que mudar | Onde |
|-------------|------|
| Texto do hero | `src/components/sections/Hero.tsx` |
| Número do WhatsApp | Buscar `5583986469009` em todos os arquivos |
| Cores da marca | `src/app/globals.css` (variáveis CSS) |
| Logo | `src/components/Logo.tsx` |
| Imagens do avatar | `public/images/` (substituir arquivos) |
| Vídeos de sorteio | `public/videos/` (manter nomes) |
| Perguntas do FAQ | `src/components/sections/FAQ.tsx` e `src/app/faq/content.tsx` |
| Depoimentos | `src/components/sections/Testimonials.tsx` |
| Taxas do consórcio | `src/components/sections/SimulatorJourney.tsx` e `Calculator.tsx` |
| Metadados/SEO | `src/app/layout.tsx` (metadata) |
| Links do Instagram | `src/components/Footer.tsx` |
| Posts do blog | `src/app/blog/content.tsx` |

### 6.3 Cores da marca
As cores estão definidas em `src/app/globals.css`:
- **deep** = fundo escuro principal (`#070B14`)
- **gold** = dourado da marca (`#B87333` → `#FFA300` → `#FFD080`)
- **electric** = azul elétrico (`#0047FF`)
- **light** = texto claro
- **muted** = texto secundário

### 6.4 Atualizar dependências
A cada ~3 meses, rode:
```bash
npm outdated          # ver o que está desatualizado
npm update            # atualizar patches seguros
npm run build         # testar se nada quebrou
```

Para atualizações maiores do Next.js, consulte o changelog oficial.

### 6.5 Backup
- O código está no GitHub (repositório privado)
- Faça backup das imagens do avatar e vídeos em outro local (Google Drive, etc.)
- A Vercel mantém histórico de todos os deploys (pode reverter a qualquer momento)

---

## 7. CUSTOS

| Item | Custo | Observação |
|------|-------|------------|
| Vercel (hospedagem) | **Grátis** | Plano Hobby: 100GB banda/mês |
| Domínio (Hostgator) | **~R$ 40/ano** | Renovação anual do oseuplano.com |
| SSL (HTTPS) | **Grátis** | Fornecido pela Vercel |
| GitHub (código) | **Grátis** | Repositório privado |
| Google Analytics | **Grátis** | Sem limite |
| Google Search Console | **Grátis** | Indexação |
| WhatsApp (manual) | **Grátis** | Links wa.me |
| WhatsApp (automação) | **~R$ 50-200/mês** | Se usar Z-API ou similar |
| **Total mínimo** | **~R$ 40/ano** | Apenas o domínio |

---

## 8. LIMITES DO PLANO GRATUITO DA VERCEL

- 100 GB de banda por mês (suficiente para ~50 mil visitas/mês)
- Builds ilimitados
- HTTPS automático
- CDN global (rápido no Brasil e fora)
- Preview de cada branch/PR
- Se ultrapassar, o Plano Pro custa US$ 20/mês

---

## 9. TROUBLESHOOTING

### Site não carrega após deploy
1. Verifique o status do build na Vercel (aba Deployments)
2. Se houver erro de build, leia o log — geralmente é import faltando
3. Teste localmente: `npm run build`

### DNS não propagou
1. Verifique em https://dnschecker.org se o domínio já aponta para a Vercel
2. Pode levar até 48h (raro, geralmente 1-6h)
3. Limpe o cache DNS local: `ipconfig /flushdns` (Windows)

### Imagens não aparecem
1. Verifique se os arquivos estão em `public/images/` com os nomes corretos
2. Extensão deve ser `.jpg` (não `.jpg.png`)
3. Após adicionar, faça commit e push

### Vídeos não tocam
1. Verifique se os arquivos estão em `public/videos/`
2. Devem ser arquivos reais (não symlinks)
3. Formato: MP4 com codec H.264

### WhatsApp não abre
1. Verifique se o número está no formato correto: `5583986469009` (55 + DDD + número)
2. Teste o link manualmente: https://wa.me/5583986469009

---

## 10. PRÓXIMOS PASSOS SUGERIDOS

- [ ] Rodar `npm run build` para validar
- [ ] Criar conta no GitHub e subir o código
- [ ] Criar conta na Vercel e fazer o deploy
- [ ] Configurar DNS na Hostgator
- [ ] Configurar Google Search Console
- [ ] Configurar Google Analytics
- [ ] Conectar automação do WhatsApp (quando pronto)
- [ ] Criar conteúdo real para o Blog
- [ ] Adicionar depoimentos reais de clientes
