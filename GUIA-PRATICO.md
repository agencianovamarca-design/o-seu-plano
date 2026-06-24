# GUIA PRÁTICO — Colocando o Site no Ar
### Para quem NÃO é programador

---

## PARTE 1: PUBLICAR O SITE (30 minutos)

### Passo 1 — Criar conta no GitHub (5 min)

O GitHub é onde o código do seu site fica guardado na nuvem.

1. Abra: **https://github.com**
2. Clique **"Sign up"**
3. Use seu email, crie uma senha e um username
4. Confirme o email que chegar na sua caixa
5. Pronto! Você tem uma conta no GitHub

### Passo 2 — Instalar o GitHub Desktop (5 min)

Esse app faz o trabalho pesado do Git pra você, sem terminal.

1. Baixe: **https://desktop.github.com**
2. Instale e abra
3. Faça login com sua conta do GitHub
4. Clique **"Add"** → **"Add Existing Repository"**
5. Navegue até a pasta: `C:\Users\moowg\claude code\seu-plano`
6. Se aparecer "not a Git repository", clique em **"create a repository"**
   - Name: `seu-plano`
   - Marque **"Keep this code private"**
   - Clique **"Create Repository"**
7. Clique **"Publish repository"** (botão azul no topo)
   - Desmarque "Keep this code private" SOMENTE se quiser código público
   - Clique **"Publish Repository"**

✅ Seu código agora está no GitHub!

### Passo 3 — Deploy na Vercel (5 min)

A Vercel é onde seu site roda. É grátis.

1. Abra: **https://vercel.com**
2. Clique **"Sign Up"** → **"Continue with GitHub"**
3. Autorize o acesso
4. Na dashboard, clique **"Add New..."** → **"Project"**
5. Encontre `seu-plano` na lista → clique **"Import"**
6. NÃO mude nada — a Vercel detecta tudo automaticamente
7. Clique **"Deploy"**
8. Espere ~2 minutos
9. ✅ Seu site está no ar em: `https://seu-plano.vercel.app`

### Passo 4 — Conectar seu domínio (10 min)

**4A — Na Vercel:**
1. No projeto, vá em **"Settings"** → **"Domains"**
2. Digite `oseuplano.com` → clique **"Add"**
3. Adicione também `www.oseuplano.com`
4. A Vercel vai mostrar instruções de DNS. Anote os valores.

**4B — Na Hostgator:**
1. Acesse: **https://cliente.hostgator.com.br**
2. Faça login
3. Vá em **"Domínios"** → clique no seu domínio
4. Procure **"Zona de DNS"** ou **"Editar DNS"** ou **"Zone Editor"**
5. Faça estas alterações:

```
APAGAR: Qualquer registro A que aponte para o IP antigo da Hostgator

ADICIONAR:
┌──────────┬────────────┬──────────────────────────┐
│ Tipo     │ Nome/Host  │ Valor                    │
├──────────┼────────────┼──────────────────────────┤
│ A        │ @          │ 76.76.21.21              │
│ CNAME    │ www        │ cname.vercel-dns.com     │
└──────────┴────────────┴──────────────────────────┘
```

6. Salve
7. Espere 1 a 6 horas para propagar
8. Teste acessando: `https://oseuplano.com`
9. ✅ O cadeado HTTPS aparece automaticamente!

---

## PARTE 2: CONECTAR O E-BOOK DE BOAS-VINDAS

O site já tem tudo pronto para entregar um e-book. Funciona assim:

```
Visitante preenche nome + WhatsApp
    ↓
É redirecionado para a página /obrigado
    ↓
Clica no botão "Baixar e-book"
    ↓
Ao mesmo tempo, abre o WhatsApp com mensagem automática
    ↓
Você recebe o lead no WhatsApp já qualificado
```

### O que você precisa fazer:

1. **Crie seu e-book em PDF**
   - Use o Canva (canva.com) — tem templates grátis de e-book
   - Ou peça para a IA gerar o conteúdo
   - Exporte como PDF

2. **Salve o PDF na pasta do site:**
   ```
   C:\Users\moowg\claude code\seu-plano\public\downloads\ebook-o-seu-plano.pdf
   ```
   O nome do arquivo DEVE ser exatamente: `ebook-o-seu-plano.pdf`

3. **Publique a atualização:**
   - Abra o GitHub Desktop
   - Vai aparecer os arquivos alterados
   - Escreva na mensagem: "adiciona ebook"
   - Clique **"Commit to main"**
   - Clique **"Push origin"**
   - ✅ Em 2 minutos a Vercel atualiza automaticamente

### Onde o e-book aparece no site:

- **Seção na Home** (entre FAQ e CTA final) — formulário de captação
- **Página /obrigado** — botão de download após preencher o formulário

---

## PARTE 3: CONECTAR AUTOMAÇÃO NO WHATSAPP

### Nível 1 — Sem automação (já funciona agora)

O site já envia mensagens pré-preenchidas para seu WhatsApp.
Cada ponto de contato envia uma mensagem diferente:

| Onde no site | Mensagem que chega |
|---|---|
| Botão flutuante (verde) | "Mude sua vida agora" |
| Simulador SICAD (5 etapas) | Simulação completa com valores |
| Formulário de contato | Nome, email, assunto e mensagem |
| E-book | "Baixei o e-book, quero saber mais" |
| CTA final | Texto livre |

Tudo chega no seu WhatsApp: **(83) 98646-9009**
Você responde manualmente.

### Nível 2 — Automação simples com ManyChat (grátis até 1000 contatos)

O ManyChat é a forma mais fácil de automatizar respostas no WhatsApp.

1. Acesse: **https://manychat.com**
2. Crie conta → conecte seu WhatsApp Business
3. Crie um "Flow" (fluxo automatizado):

**Fluxo de Boas-Vindas (quando alguém manda mensagem do site):**
```
Mensagem recebida
    ↓
Resposta automática:
"Olá, [nome]! 👋 Obrigado por entrar em contato com O Seu Plano.

Recebi sua mensagem e vou te atender em breve.

Enquanto isso, já deu uma olhada no nosso simulador?
👉 https://oseuplano.com/simulador"
    ↓
Espera 5 min
    ↓
Se não respondeu:
"Sei que a rotina é corrida! 😊 Fico à disposição quando quiser.
Qual dessas opções te interessa mais?

1️⃣ Consórcio para imóvel
2️⃣ Consórcio para veículo
3️⃣ Investimento com consórcio
4️⃣ Entender como funciona"
```

### Nível 3 — Automação avançada com N8N + Evolution API

Para quem quer controle total:

1. **Evolution API** (open source) — conecta ao WhatsApp
2. **N8N** (automação visual) — cria fluxos tipo "se/então"
3. Precisa de um servidor VPS (~R$ 30/mês na Hostinger ou Contabo)

Isso é pra quando o volume de leads crescer. Comece pelo Nível 1 ou 2.

---

## PARTE 4: GOOGLE (aparecer nas buscas)

### Google Search Console (para o Google indexar seu site)

1. Acesse: **https://search.google.com/search-console**
2. Clique **"Iniciar"** → faça login com Google
3. Escolha **"Domínio"** → digite `oseuplano.com`
4. O Google vai pedir verificação por DNS:
   - Copie o registro TXT que ele mostrar
   - Na Hostgator, vá em Zona de DNS
   - Adicione um registro **TXT** com o valor copiado
   - Salve e volte ao Google → clique **"Verificar"**
5. Pode demorar algumas horas
6. Após verificar, vá em **"Sitemaps"**
7. Digite: `sitemap.xml` → clique **"Enviar"**
8. ✅ O Google vai começar a indexar seu site!

### Google Analytics (para ver quantas pessoas acessam)

1. Acesse: **https://analytics.google.com**
2. Crie conta → nome: "O Seu Plano"
3. Crie propriedade → URL: `oseuplano.com`
4. Selecione **"Web"**
5. Copie o **ID de Medição** (parece com `G-ABC123XYZ`)
6. Me passe esse ID e eu adiciono no site pra você
   Ou peça ao Claude Code: "adicione o Google Analytics com ID G-XXXXXX"

---

## PARTE 5: COMO FAZER ALTERAÇÕES NO SITE

### Método 1 — Pelo Claude Code (mais fácil)
Abra o Claude Code e peça em português:
- "Troque o número do WhatsApp para (XX) XXXXX-XXXX"
- "Mude o texto do hero para..."
- "Adicione um novo artigo no blog sobre..."
- "Troque a imagem do avatar"

Depois publique:
1. Abra GitHub Desktop
2. Escreva o que mudou na mensagem
3. Clique **"Commit to main"** → **"Push origin"**
4. ✅ Vercel atualiza em 2 minutos

### Método 2 — Direto pelo GitHub (emergência)
1. Acesse github.com/SEU-USUARIO/seu-plano
2. Navegue até o arquivo que quer editar
3. Clique no lápis (Edit)
4. Faça a alteração
5. Clique **"Commit changes"**
6. ✅ Vercel atualiza automaticamente

---

## PARTE 6: MAPA DE TUDO QUE EXISTE NO SITE

### Links do WhatsApp (todos vão para o mesmo número)
Todos os links que levam ao WhatsApp usam o formato:
```
https://wa.me/5583986469009?text=MENSAGEM
```

Para trocar o número, peça ao Claude Code:
"Troque o WhatsApp para (XX) XXXXX-XXXX em todo o site"

### Páginas do site
```
oseuplano.com/                → Home (11 seções)
oseuplano.com/como-funciona   → Explicação do consórcio
oseuplano.com/sobre           → Sobre nós + avatar
oseuplano.com/simulador       → Calculadora detalhada
oseuplano.com/blog            → Lista de artigos
oseuplano.com/blog/[artigo]   → Artigo completo (6 artigos)
oseuplano.com/faq             → Perguntas frequentes
oseuplano.com/contato         → Formulário + WhatsApp
oseuplano.com/obrigado        → Download do e-book
```

### Custos mensais
```
Vercel (hospedagem)     = GRÁTIS
GitHub (código)         = GRÁTIS
SSL/HTTPS               = GRÁTIS
Google Analytics        = GRÁTIS
Domínio                 = ~R$ 40/ANO (já pago na Hostgator)
ManyChat (se quiser)    = GRÁTIS até 1000 contatos
────────────────────────────────
TOTAL                   = R$ 0/mês (só R$ 40/ano do domínio)
```

---

## PARTE 7: CHECKLIST FINAL

- [ ] Criar conta no GitHub
- [ ] Instalar GitHub Desktop e subir o código
- [ ] Criar conta na Vercel e fazer o deploy
- [ ] Configurar DNS na Hostgator
- [ ] Esperar propagação (1-6h) e testar o domínio
- [ ] Criar e-book no Canva e salvar em public/downloads/
- [ ] Configurar Google Search Console
- [ ] Configurar Google Analytics
- [ ] Testar todos os links do WhatsApp
- [ ] Testar formulário de contato
- [ ] Testar simulador SICAD (5 etapas)
- [ ] Testar download do e-book
- [ ] Postar no Instagram que o site está no ar! 🚀

---

## PRECISA DE AJUDA?

Abra o Claude Code e pergunte qualquer coisa em português.
Ele tem acesso completo ao código do site e pode fazer qualquer alteração.

Exemplos:
- "Adiciona o Google Analytics com ID G-XXXX"
- "Troca a cor do botão de WhatsApp"
- "Cria um novo artigo sobre contemplação"
- "Muda a foto do avatar"
- "Atualiza as taxas do simulador"
