"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { BookOpen, Eye, Handshake, Target } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Educação",
    description:
      "Conteúdo claro e acessível para todos. Fundamentos do consórcio na prática, sem termos confusos.",
    color: "text-electric",
  },
  {
    icon: Eye,
    title: "Transparência",
    description:
      "Todas as informações sem pegadinhas. Mostramos os números reais — o que você paga e o que recebe.",
    color: "text-gold",
  },
  {
    icon: Handshake,
    title: "Confiança",
    description:
      "Nosso compromisso é com o seu plano de vida, não com comissões. Profissionais que trabalham para você.",
    color: "text-bronze",
  },
  {
    icon: Target,
    title: "Resultado",
    description:
      "Planejamento personalizado para o seu momento. Seu sonho é o nosso objetivo.",
    color: "text-green-400",
  },
];

export function SolutionSection() {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - image + heading */}
          <AnimateIn>
            <div className="lg:sticky lg:top-32">
              <p className="text-[11px] font-semibold text-gold uppercase tracking-[0.25em] mb-6">
                Nossa missão
              </p>
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[0.95] mb-8">
                Criamos O Seu Plano para{" "}
                <span className="text-gradient-gold italic">
                  mudar o jogo.
                </span>
              </h2>
              <p className="text-white/35 text-base leading-relaxed max-w-md mb-8">
                Dedicados a educar consumidores e transformar o mercado de
                aquisição de bens de forma inteligente, gerando segurança e
                confiabilidade.
              </p>
              {/* Image */}
              <div className="relative h-72 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=75"
                  alt="Casa moderna representando conquista"
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
