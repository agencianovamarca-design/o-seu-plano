"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { CountUp } from "@/components/CountUp";

const problems = [
  {
    stat: "R$ 400 mil+",
    title: "desperdiçados em juros",
    description:
      "No financiamento de um imóvel de R$ 300 mil, você paga mais de R$ 700 mil ao banco. São mais de 2 imóveis jogados fora.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=75",
    alt: "Dinheiro sendo desperdiçado",
  },
  {
    stat: "30 anos",
    title: "preso ao sistema",
    description:
      "Enquanto você paga parcelas com juros abusivos, a vida passa. Decisões erradas custam décadas inteiras de trabalho.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&q=75",
    alt: "Relógio representando tempo perdido",
  },
  {
    stat: "Milhares",
    title: "de pessoas enganadas",
    description:
      "O mercado de consórcios foi prejudicado por empresas e vendedores desonestos, gerando desconfiança generalizada.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=75",
    alt: "Pessoa preocupada com documentos",
  },
  {
    stat: "90%",
    title: "pagam mais do que deveriam",
    description:
      "O sistema financeiro lucra com a sua falta de conhecimento. Você não foi ensinado a entender — foi feito para pagar.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=75",
    alt: "Pessoa analisando finanças",
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
            A verdade que ninguém te conta
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[0.95] max-w-4xl">
            {"O sistema foi feito"}
            <br />
            {"para você "}
            <span className="text-gradient-gold italic">{"não entender."}</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, i) => (
            <AnimateIn key={problem.title} delay={i * 0.1}>
              <div className="group rounded-2xl overflow-hidden border border-white/[0.06] hover:border-red-400/10 transition-all duration-500 h-full">
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
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=75"
              alt="Família olhando para casa dos sonhos"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-deep/85 backdrop-blur-sm" />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 p-10 lg:p-14">
              <div>
                <div className="text-[clamp(3rem,6vw,5rem)] font-extrabold text-gradient-gold font-heading leading-none">
                  <CountUp end={67} suffix="%" />
                </div>
                <p className="text-white/30 text-sm mt-2 max-w-md">
                  dos brasileiros pagam mais do que o dobro pelo seu imóvel no
                  financiamento tradicional.
                </p>
              </div>
              <p className="text-white text-lg lg:text-xl font-heading font-semibold max-w-sm leading-snug">
                Isso pode ser{" "}
                <span className="text-gradient-gold">diferente.</span>
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
