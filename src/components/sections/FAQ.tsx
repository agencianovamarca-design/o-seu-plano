"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Consórcio é furada?",
    answer:
      "Não. O que é furada é pagar juros compostos durante 30 anos e entregar mais de 2x o valor do seu imóvel ao banco. O consórcio não tem juros — apenas uma taxa de administração diluída ao longo do prazo. O problema real foram vendedores desonestos que prejudicaram a imagem do segmento. Com uma administradora séria e profissionais comprometidos, o consórcio é uma das formas mais inteligentes de adquirir bens.",
  },
  {
    question: "Quanto tempo leva para ser contemplado?",
    answer:
      "Depende. Você pode ser contemplado no primeiro mês por sorteio ou oferecer um lance para antecipar. Com sorteio manual e grupos menores (até 650 para imóveis), as chances reais de contemplação são muito maiores do que em administradoras que usam loteria federal com milhares de participantes.",
  },
  {
    question: "Qual a diferença entre consórcio e financiamento?",
    answer:
      "No financiamento, você recebe o bem imediatamente mas paga juros compostos que podem mais que dobrar o valor. Exemplo: imóvel de R$ 300 mil custa R$ 720 mil+ no financiamento. No consórcio, você paga parcelas sem juros (taxa de administração de até 28,5% diluída) e pode ser contemplado a qualquer momento. O total pago fica em torno de R$ 385 mil — uma economia enorme.",
  },
  {
    question: "O que é sorteio manual?",
    answer:
      "O sorteio manual é realizado diretamente nas assembleias, com participação ativa do grupo. Diferente de administradoras que usam a loteria federal (onde suas chances são equivalentes a ganhar na mega-sena), o sorteio manual garante que todos os participantes tenham chances reais de contemplação.",
  },
  {
    question: "Posso usar o consórcio como investimento?",
    answer:
      "Sim, e essa é uma das estratégias mais inteligentes. Você pode adquirir um imóvel via consórcio e colocá-lo para render no Airbnb ou aluguel tradicional. O retorno mensal pode pagar as parcelas do consórcio e ainda gerar renda passiva. É fazer o dinheiro trabalhar para você, não contra você.",
  },
  {
    question: "E se eu não for contemplado logo?",
    answer:
      "Seu dinheiro continua rendendo e suas parcelas vão reduzindo o saldo devedor. Você participa do sorteio todo mês e pode dar um lance a qualquer momento. Diferente do financiamento, onde você já está pagando juros desde o primeiro dia, no consórcio cada parcela é patrimônio sendo construído.",
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
            Desmistificando o{" "}
            <span className="text-gradient-gold italic">consórcio.</span>
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
