"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { Zap, Eye, HeartHandshake, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Rapidez",
    description:
      "E-mail profissional ativo em menos de 24h. Google Meu Negócio configurado. Instagram com bio que converte. Tudo isso sem precisar saber de tecnologia.",
    color: "text-electric",
  },
  {
    icon: Eye,
    title: "Clareza",
    description:
      "Cada passo explicado de forma simples. Nada de termos técnicos. Você segue o guia e o resultado aparece — sem precisar contratar uma agência cara.",
    color: "text-gold",
  },
  {
    icon: HeartHandshake,
    title: "Suporte",
    description:
      "Não fica sozinho. Nosso atendimento via WhatsApp acompanha você durante todo o processo. Dúvida surgiu? A gente resolve junto.",
    color: "text-bronze",
  },
  {
    icon: TrendingUp,
    title: "Resultado",
    description:
      "Mais credibilidade, mais confiança do cliente, mais conversões. Presença profissional no digital não é luxo — é o mínimo para competir hoje.",
    color: "text-green-400",
  },
];

export function SolutionSection() {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - heading + image */}
          <AnimateIn>
            <div className="lg:sticky lg:top-32">
              <p className="text-[11px] font-semibold text-gold uppercase tracking-[0.25em] mb-6">
                Nossa abordagem
              </p>
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[0.95] mb-8">
                A gente resolve{" "}
                <span className="text-gradient-gold italic">
                  tudo isso por você.
                </span>
              </h2>
              <p className="text-white/35 text-base leading-relaxed max-w-md mb-8">
                Do e-mail profissional ao funil de vendas — estruturamos a
                presença digital do seu negócio de forma simples, rápida e com
                resultado real. Funciona para qualquer nicho.
              </p>
              {/* Image */}
              <div className="relative h-72 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=75"
                  alt="Profissional trabalhando com presença digital"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent" />
              </div>
            </div>
          </AnimateIn>

          {/* Right - pillar cards */}
          <div className="space-y-4">
            {pillars.map((pillar, i) => (
              <AnimateIn key={pillar.title} delay={i * 0.1}>
                <div className="group border border-white/[0.06] rounded-2xl p-8 hover:border-gold/20 hover:bg-white/[0.01] transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-gold/20 transition-colors duration-500">
                      <pillar.icon size={22} className={pillar.color} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-white mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-white/35 text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
