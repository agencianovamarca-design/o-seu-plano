"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqCategories = [
  {
    category: "Sobre Presença Digital",
    faqs: [
      {
        q: "O que é presença digital, de verdade?",
        a: "Presença digital é o conjunto de todos os canais onde a sua empresa pode ser encontrada online: e-mail profissional, perfil no Google (Google Meu Negócio), site, redes sociais e WhatsApp Business. Não é ter um canal �?? é ter todos conectados, funcionando e transmitindo profissionalismo.",
      },
      {
        q: "Por que @gmail.com afasta clientes?",
        a: "Porque passa a mensagem de que o negócio não investiu nem R$ 30 no próprio domínio. Para quem está avaliando contratar um serviço ou comprar um produto, e-mail no domínio próprio (ex: contato@suaempresa.com.br) é um sinal de que a empresa é séria. Gmail diz 'informal'. Domínio próprio diz 'profissional'.",
      },
      {
        q: "Meu negócio é pequeno. Vale a pena investir em presença digital?",
        a: "Especialmente para negócios pequenos. Você não tem budget para outdoor ou televisão �?? mas pode ter um Google Meu Negócio impecável, um Instagram que converte e um site que funciona. O digital nivela o campo: o cliente não sabe o tamanho da empresa antes de contratar. O que ele vê é a aparência.",
      },
      {
        q: "Qual é a diferença entre site e landing page?",
        a: "Site é um destino completo: várias páginas, sobre a empresa, serviços, blog, contato. Landing page é uma página única focada em uma ação específica �?? geralmente capturar um lead ou vender um produto. Para quem está começando, uma landing page bem feita converte mais do que um site mal feito. Para quem já tem clientes, um site passa mais credibilidade.",
      },
    ],
  },
  {
    category: "Sobre nossos serviços",
    faqs: [
      {
        q: "O que o O Seu Plano faz exatamente?",
        a: "Estruturamos a presença digital de empresas, MEIs e profissionais liberais do zero ou reorganizamos o que já existe. Isso inclui: e-mail no domínio próprio, Google Meu Negócio, bio e perfil de redes sociais, site ou landing page, WhatsApp Business e roteiro de conteúdo para os primeiros 30 dias.",
      },
      {
        q: "Vocês gerenciam minhas redes sociais?",
        a: "Dependendo do plano. Na entrega básica, estruturamos perfil, bio, destaques e template visual �?? e você ou sua equipe cria o conteúdo com o nosso roteiro. Para gestão ativa de redes sociais, temos planos mensais. Fale com a gente para entender o que faz mais sentido para o seu momento.",
      },
      {
        q: "Em quanto tempo fico com tudo pronto?",
        a: "O e-mail profissional fica ativo em menos de 24 horas. Google Meu Negócio configurado em até 3 dias úteis. Site ou landing page em até 7 dias úteis após aprovação do briefing. O prazo total depende do escopo contratado e da sua disponibilidade para responder o briefing.",
      },
      {
        q: "Preciso saber de tecnologia para contratar?",
        a: "Não. Cuidamos de tudo técnico. Você responde um formulário de briefing, aprova as entregas e recebe tudo pronto com acesso completo e guia de uso. A única coisa que pedimos é que você tenha as informações básicas sobre o seu negócio �?? o resto é com a gente.",
      },
      {
        q: "O Seu Plano cobra taxa mensal?",
        a: "Depende do serviço. A estruturação inicial (e-mail, Google, site) é cobrada uma única vez. Se você quiser gestão de redes sociais, atualizações de site ou mentoria contínua, existem planos mensais. Mas você nunca é obrigado a continuar �?? cada etapa é independente.",
      },
    ],
  },
  {
    category: "E-mail profissional",
    faqs: [
      {
        q: "O que eu preciso para ter e-mail no meu domínio?",
        a: "Você precisa de um domínio registrado (ex: suaempresa.com.br) e de uma conta de e-mail corporativo (Google Workspace, Microsoft 365 ou Zoho Mail). O custo total fica entre R$ 30 e R$ 90 por mês, dependendo da ferramenta escolhida. A gente configura tudo para você.",
      },
      {
        q: "Posso manter meu @gmail.com e ter um e-mail profissional também?",
        a: "Sim. Você pode configurar o e-mail profissional para encaminhar mensagens para o Gmail e responder como contato@suaempresa.com.br mesmo usando o app do Gmail. Assim você não perde nada e ainda parece profissional para o cliente.",
      },
      {
        q: "Qual serviço de e-mail corporativo vocês recomendam?",
        a: "Para a maioria dos pequenos negócios, o Google Workspace (a partir de R$ 29/mês por usuário) é o mais indicado: você já conhece a interface do Gmail, integra com Drive e Calendar, e é confiável. Para quem precisa de solução gratuita, o Zoho Mail tem plano grátis para até 5 usuários com domínio próprio.",
      },
    ],
  },
  {
    category: "Google Meu Negócio",
    faqs: [
      {
        q: "O que é o Google Meu Negócio e por que preciso?",
        a: "�? o perfil da sua empresa no Google �?? o que aparece no Maps e nos resultados de busca quando alguém pesquisa pelo seu tipo de negócio na sua cidade. Gratuito e essencial: empresas com perfil completo recebem 70% mais visitas do que empresas sem perfil.",
      },
      {
        q: "Qualquer empresa pode ter Google Meu Negócio?",
        a: "Sim. MEI, ME, empresa sem sede fixa, profissional autônomo �?? qualquer um pode criar um perfil. Para negócios que atendem no endereço do cliente (como jardinagem ou limpeza), é possível configurar como 'área de atendimento' sem mostrar endereço físico.",
      },
      {
        q: "Como responder avaliações negativas?",
        a: "Sempre responda �?? nunca ignore. Agradeça o feedback, reconheça o problema (mesmo que discorde do tom), e mostre o que foi feito ou ofereça resolver. Uma resposta profissional a uma avaliação ruim diz mais sobre a empresa do que a própria avaliação. Clientes futuros veem isso.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className="font-heading font-semibold text-light text-sm pr-4 group-hover:text-gold transition-colors duration-200">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-gold shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-muted text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export function FAQPageContent() {
  return (
    <div className="pt-36 pb-24">
      <section className="max-w-3xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-electric uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-light mb-6">
            Todas as suas{" "}
            <span className="text-gradient-gold">dúvidas.</span>
          </h1>
          <p className="max-w-xl mx-auto text-muted text-lg">
            Respostas claras, sem enrolação. Se sua pergunta não estiver aqui,
            fale com a gente.
          </p>
        </AnimateIn>

        {faqCategories.map((cat, i) => (
          <AnimateIn key={cat.category} delay={i * 0.1} className="mb-10">
            <h2 className="font-heading text-lg font-bold text-gold mb-4">
              {cat.category}
            </h2>
            <div className="glass rounded-2xl px-6">
              {cat.faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </AnimateIn>
        ))}

        <AnimateIn delay={0.4} className="mt-12 text-center">
          <p className="text-muted mb-4">Não encontrou sua pergunta?</p>
          <a
            href="https://wa.me/5519997485834"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-deep px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            <MessageCircle size={18} />
            Pergunte no WhatsApp
          </a>
        </AnimateIn>
      </section>
    </div>
  );
}

