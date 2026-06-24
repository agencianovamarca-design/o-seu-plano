"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { CountUp } from "@/components/CountUp";
import { Shield, Users, Shuffle, Award, CheckCircle, Trophy } from "lucide-react";

const differentials = [
  {
    icon: Shuffle,
    title: "Sorteio manual",
    description:
      "Enquanto outras administradoras usam loteria federal (chances nível mega-sena), trabalhamos com sorteio manual. Cada participante tem chance real de contemplação.",
  },
  {
    icon: Users,
    title: "Grupos de até 650 pessoas",
    description:
      "Para imóveis, o máximo são 650 participantes. Outras administradoras colocam 5 mil, 10 mil ou mais pessoas competindo pelas mesmas cotas.",
  },
  {
    icon: Shield,
    title: "Mais de 59 anos em consórcios",
    description:
      "A administradora que escolhemos já passou por todas as crises econômicas do Brasil — Plano Cruzado, Real, 2008, pandemia — e continua de pé.",
  },
  {
    icon: Award,
    title: "1,1 milhão de cotas vendidas",
    description:
      "Mais de 370 mil contemplações realizadas. Não é promessa — é histórico documentado e fiscalizado pelo Banco Central.",
  },
];

const seals = [
  "MESC 100 Melhores Empresas 2025",
  "Great Place to Work",
  "Regulamentada pelo Banco Central",
  "Associada à ABAC",
  "Prêmio Ernst & Young",
  "Top of Mind do segmento",
];

export function RodobensSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimateIn>
            <p className="text-[11px] font-semibold text-bronze uppercase tracking-[0.25em] mb-6">
              E quem garante tudo isso?
            </p>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[0.95] mb-8">
              Uma administradora com 77 anos e{" "}
              <span className="text-gradient-gold italic">
                370 mil sonhos realizados.
              </span>
            </h2>
            <p className="text-white/35 text-base leading-relaxed">
              Escolhemos a dedo a administradora que mais se alinha com nossos
              valores: transparência, grupos menores e chances reais de
              contemplação. Fundada em 1949, ela já provou sua solidez em todas
              as crises do Brasil.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=75"
                alt="Edifício corporativo representando solidez"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <Shield size={18} className="text-gold" />
                  <span className="text-white/60 text-sm font-medium">
                    Fiscalizada pelo Banco Central do Brasil
                  </span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Differentials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-16">
          {differentials.map((diff, i) => (
            <AnimateIn key={diff.title} delay={i * 0.1}>
              <div className="bg-surface p-10 lg:p-12 h-full group hover:bg-surface-light transition-colors duration-500">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-electric/20 transition-colors duration-500">
                    <diff.icon size={22} className="text-electric" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-white/35 text-sm leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Stats */}
        <AnimateIn delay={0.3}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-16">
            {[
              { value: 77, suffix: " anos", label: "De mercado" },
              { value: 59, suffix: " anos", label: "Em consórcios" },
              { value: 5500, suffix: "+", label: "Colaboradores" },
              { value: 650, suffix: "", label: "Máx. por grupo (imóveis)" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface p-8 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gradient-gold font-heading">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/30 text-xs uppercase tracking-[0.15em] mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Certifications */}
        <AnimateIn delay={0.4}>
          <div className="border border-white/[0.06] rounded-2xl p-10 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Trophy size={20} className="text-gold" />
              <h3 className="font-heading text-lg font-semibold text-white">
                Certificações e reconhecimentos
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {seals.map((seal) => (
                <div
                  key={seal}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.01] border border-white/[0.04]"
                >
                  <CheckCircle size={14} className="text-gold/60 shrink-0" />
                  <span className="text-white/40 text-sm">{seal}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
