"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { MessageSquare, Map, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Diagnóstico gratuito",
    description:
      "Uma conversa de 15 minutos pelo WhatsApp para entender onde seu negócio está hoje e o que precisa ser resolvido com mais urgência.",
  },
  {
    number: "02",
    icon: Map,
    title: "Montamos seu plano",
    description:
      "Com base no seu nicho e objetivo, definimos as prioridades: e-mail profissional, redes, Google Meu Negócio, site ou funil de vendas.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execução e resultado",
    description:
      "Você executa com nosso guia ou contrata nosso serviço completo. Em 7 a 30 dias, sua presença digital está profissional e gerando clientes.",
  },
];

const services = [
  "E-mail no seu domínio (@suaempresa.com.br)",
  "Google Meu Negócio configurado e otimizado",
  "Bio e perfil do Instagram que converte",
  "WhatsApp Business profissional",
  "Site ou landing page que gera leads",
  "Estratégia de conteúdo para os primeiros 30 dias",
  "Funil de vendas com captura de leads",
  "Produtos digitais para gerar caixa rápido",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-16">
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

        {/* Services list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <AnimateIn delay={0.3}>
            <div className="rounded-2xl border border-white/[0.06] p-8 lg:p-10">
              <p className="text-[10px] font-bold text-electric uppercase tracking-[0.3em] mb-6">
                O que entregamos
              </p>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span className="text-white/40 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <div className="lg:pl-4">
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
                {"Seu negócio completo "}
                <span className="text-gradient-gold italic">no digital.</span>
              </h3>
              <p className="text-white/35 text-sm leading-relaxed mb-6">
                Desde o e-mail profissional até o funil de vendas �?? montamos
                tudo o que você precisa para parecer profissional e atrair
                clientes reais, independente do seu nicho ou tamanho.
              </p>
              <a
                href="https://wa.me/5519997485834"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-gold text-deep px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
              >
                Quero meu diagnóstico gratuito
                <ArrowRight size={14} />
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

