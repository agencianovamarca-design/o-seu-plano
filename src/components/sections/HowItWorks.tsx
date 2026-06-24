"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { FileText, Users, Award, Home, ArrowRight } from "lucide-react";
import { VideoPlayer } from "@/components/VideoPlayer";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Escolha seu plano",
    description: "Definimos juntos o crédito ideal para seu objetivo — imóvel, veículo ou investimento.",
  },
  {
    number: "02",
    icon: Users,
    title: "Entre no grupo",
    description: "Grupos com poucos participantes. Parcelas mensais sem juros compostos, apenas taxa de administração.",
  },
  {
    number: "03",
    icon: Award,
    title: "Seja contemplado",
    description: "Por sorteio manual (chances reais todo mês) ou por lance. Sem depender de sorte nível mega-sena.",
  },
  {
    number: "04",
    icon: Home,
    title: "Realize seu sonho",
    description: "Crédito em mãos, compre com poder de negociação de quem paga à vista.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="relative py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimateIn className="mb-20">
          <p className="text-[11px] font-semibold text-gold uppercase tracking-[0.25em] mb-6">
            Passo a passo
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[0.95] max-w-3xl">
            {"Como funciona "}
            <span className="text-gradient-gold italic">{"na prática."}</span>
          </h2>
        </AnimateIn>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-16">
          {steps.map((step, i) => (
            <AnimateIn key={step.number} delay={i * 0.12}>
              <div className="bg-deep p-8 lg:p-10 h-full group hover:bg-white/[0.01] transition-colors duration-500 relative">
                <span className="absolute top-6 right-8 text-[4rem] font-heading font-extrabold text-white/[0.02] leading-none select-none">
                  {step.number}
                </span>
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:border-gold/20 transition-colors duration-500">
                    <step.icon size={18} className="text-gold" />
                  </div>
                  <p className="text-[10px] font-bold text-electric uppercase tracking-[0.3em] mb-3">
                    Passo {step.number}
                  </p>
                  <h3 className="font-heading text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Assembly video section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <AnimateIn delay={0.3}>
            <VideoPlayer />
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="lg:pl-4">
              <p className="text-[10px] font-bold text-electric uppercase tracking-[0.3em] mb-4">
                Assembleia real gravada
              </p>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
                {"Isso não é propaganda. "}
                <span className="text-gradient-gold italic">{"É real."}</span>
              </h3>
              <p className="text-white/35 text-sm leading-relaxed mb-6">
                Nesses clipes você acompanha momentos reais de uma assembleia
                onde participantes são contemplados por sorteio manual. Cada
                pedra-chave é sorteada na frente de todos — transparência total.
              </p>
              <ul className="space-y-3">
                {[
                  "Sorteio manual feito ao vivo na assembleia",
                  "Todos os participantes podem acompanhar",
                  "Contemplação acontece na hora, sem truques",
                  "Gravações públicas para total transparência",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span className="text-white/40 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.5} className="flex justify-center">
          <a
            href="/como-funciona"
            className="inline-flex items-center gap-2 border border-white/[0.1] px-8 py-4 rounded-full text-sm font-medium text-white/50 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer uppercase tracking-wider"
          >
            Ver guia completo
            <ArrowRight size={14} />
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
