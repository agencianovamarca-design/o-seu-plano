"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { CountUp } from "@/components/CountUp";

const problems = [
  {
    stat: "73%",
    title: "usam e-mail não profissional",
    description:
      "Mais de 7 em cada 10 pequenas empresas ainda usam @gmail ou @hotmail para negócios. Para o cliente, isso comunica falta de seriedade — antes mesmo de uma conversa.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=75",
    alt: "Pessoa olhando para celular com e-mail",
  },
  {
    stat: "Sem site",
    title: "você já perdeu antes de começar",
    description:
      "Quando alguém pesquisa seu negócio e não encontra nada — ou encontra algo desatualizado — a decisão é tomada ali: vai para o concorrente que parece mais profissional.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=75",
    alt: "Laptop com site profissional",
  },
  {
    stat: "Milhares",
    title: "de clientes perdidos por aparência",
    description:
      "Pesquisas mostram que a maioria das pessoas avalia a credibilidade de um negócio pela presença digital — antes mesmo de ter contato. Parecer amador custa caro.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=75",
    alt: "Redes sociais no celular",
  },
  {
    stat: "90%",
    title: "das empresas são invisíveis online",
    description:
      "A grande maioria dos pequenos negócios não aparece quando o cliente procura. Estratégia de conteúdo e SEO básico mudam completamente esse jogo.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75",
    alt: "Analítica de presença digital",
  },
];

export function ProblemSection() {
  return (
    <section id="entenda" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimateIn className="mb-20">
          <p className="text-[11px] font-semibold text-electric uppercase tracking-[0.25em] mb-6">
            A realidade que ninguém fala
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[0.95] max-w-4xl">
            {"O mercado julga livros "}
            <span className="text-gradient-gold italic">{"pela capa."}</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, i) => (
            <AnimateIn key={problem.title} delay={i * 0.1}>
              <div className="group rounded-2xl overflow-hidden border border-white/[0.06] hover:border-gold/10 transition-all duration-500 h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={problem.image}
                    alt={problem.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-3xl font-bold text-red-400/80 font-heading">
                      {problem.stat}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 bg-surface">
                  <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-3">
                    {problem.title}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Impact callout */}
        <AnimateIn delay={0.4}>
          <div className="relative rounded-2xl overflow-hidden border border-gold/[0.08] bg-gold/[0.02] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="text-[clamp(3rem,6vw,5rem)] font-extrabold text-gradient-gold font-heading leading-none">
                <CountUp end={7} suffix=" dias" />
              </div>
              <p className="text-white/30 text-sm mt-2 max-w-md">
                é tudo que leva para transformar sua presença digital
                e começar a parecer tão profissional quanto os maiores do seu setor.
              </p>
            </div>
            <p className="text-white text-lg lg:text-xl font-heading font-semibold max-w-sm leading-snug">
              Isso pode mudar{" "}
              <span className="text-gradient-gold">hoje.</span>
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
