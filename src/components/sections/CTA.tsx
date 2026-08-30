"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { MessageCircle, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/avatar-closeup.jpg"
          alt="Especialista O Seu Plano"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-deep/85 backdrop-blur-[2px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-12 text-center">
        <AnimateIn>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[0.95] mb-8">
            Seu negócio merece{" "}
            <span className="text-gradient-gold italic">aparecer</span>
            {" "}como o profissional que você é.
          </h2>
          <p className="text-white/35 text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Não perca mais clientes por parecer amador no digital. Em menos
            de uma semana, sua empresa tem a presença que merece.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/17169399340"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-deep px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity duration-200 cursor-pointer flex items-center gap-3"
            >
              <MessageCircle size={18} />
              Quero meu diagnóstico gratuito
            </a>
            <a
              href="/produtos"
              className="border border-white/[0.12] px-8 py-4 rounded-full text-sm font-medium text-white/50 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer flex items-center gap-2 uppercase tracking-wider"
            >
              Ver produtos
              <ArrowRight size={14} />
            </a>
          </div>
        </AnimateIn>

        {/* Trust bar */}
        <AnimateIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-10 text-white/20">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.2em]">Qualquer</p>
              <p className="font-heading font-semibold text-xs mt-1">Nicho ou Segmento</p>
            </div>
            <div className="w-px h-6 bg-white/[0.06]" />
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.2em]">Resultado em</p>
              <p className="font-heading font-semibold text-xs mt-1">Menos de 7 dias</p>
            </div>
            <div className="w-px h-6 bg-white/[0.06]" />
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.2em]">Sem precisar de</p>
              <p className="font-heading font-semibold text-xs mt-1">Conhecimento Técnico</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
