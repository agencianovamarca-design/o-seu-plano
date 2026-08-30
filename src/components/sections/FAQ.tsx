"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Por que e-mail profissional faz diferença?",
    answer:
      "Porque o cliente percebe. Um e-mail @gmail.com ou @hotmail.com passa a mensagem de que o negócio não é estruturado — mesmo que você seja excelente no que faz. Já contato@suaempresa.com.br transmite profissionalismo, confiança e seriedade antes da primeira palavra. Custa menos de R$ 30/mês e leva menos de 24h para configurar.",
  },
  {
    question: "Quanto tempo leva para ter minha presença digital?",
    answer:
      "E-mail profissional: menos de 24h. Google Meu Negócio e Instagram otimizado: 2 a 3 dias. Site ou landing page básica: 5 a 7 dias. Estratégia de conteúdo completa: até 15 dias. Dependendo do que você precisa agora, o resultado aparece muito rápido.",
  },
  {
    question: "Preciso saber de tecnologia para usar o guia?",
    answer:
      "Não. Nosso guia foi criado exatamente para quem não tem conhecimento técnico. Cada passo é explicado com prints, vídeos e linguagem simples. Se você consegue usar o WhatsApp, consegue seguir nosso passo a passo.",
  },
  {
    question: "Funciona para qualquer tipo de negócio?",
    answer:
      "Sim. Médicos, advogados, barbeiros, manicures, restaurantes, e-commerces, construtoras, MEI, profissionais liberais — qualquer negócio que precisa de clientes e ainda não tem presença digital profissional pode usar. O processo é adaptável para qualquer nicho.",
  },
  {
    question: "Qual a diferença entre site e landing page?",
    answer:
      "Um site institucional tem várias páginas (home, sobre, serviços, contato) e apresenta o negócio de forma completa. Uma landing page é uma página única focada em converter — capturar um lead, vender um produto, agendar um horário. Para quem está começando, uma landing page bem feita costuma trazer resultado mais rápido.",
  },
  {
    question: "Vocês também fazem o serviço por mim?",
    answer:
      "Sim. Além dos guias de autoajuda, oferecemos mentoria individual onde analisamos seu caso e montamos o plano de ação personalizado. E para quem quiser que a gente faça tudo, temos serviços de execução completa. Converse com a gente pelo WhatsApp para entender qual opção se encaixa melhor no seu momento.",
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.04] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className="font-heading font-semibold text-white text-base pr-4 group-hover:text-gold transition-colors duration-200">
          {faq.question}
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
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-white/35 text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <AnimateIn className="mb-16">
          <p className="text-[11px] font-semibold text-electric uppercase tracking-[0.25em] mb-6">
            Perguntas frequentes
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[0.95]">
            Tudo que você precisa{" "}
            <span className="text-gradient-gold italic">saber.</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="border border-white/[0.06] rounded-2xl px-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} faq={faq} />
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3} className="mt-8 flex justify-center">
          <a
            href="/faq"
            className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:text-gold-light transition-colors duration-200 cursor-pointer"
          >
            Ver todas as perguntas
            <ArrowRight size={14} />
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
