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
          alt="Consultora O Seu Plano"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-deep/85 backdrop-blur-[2px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-12 text-center">
        <AnimateIn>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[0.95] mb-8">
            Você pode muito mais do que o sistema te fez{" "}
            <span className="text-gradient-gold italic">acreditar.</span>
          </h2>
          <p className="text-white/35 text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Não deixe que a desinformação te custe mais décadas de parcelas
            desnecessárias. Converse com quem quer te ajudar a entender o jogo.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/5583986469009"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-deep px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity duration-200 cursor-pointer flex items-center gap-3"
            >
              <MessageCircle size={18} />
              Mude sua história agora
            </a>
            <a
              href="/contato"
              className="border border-white/[0.12] px-8 py-4 rounded-full text-sm font-medium text-white/50 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer flex items-center gap-2 uppercase tracking-wider"
            >
              Formulário de contato
              <ArrowRight size={14} />
            </a>
          </div>
        </AnimateIn>

        {/* Trust bar */}
        <AnimateIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-10 text-white/20">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.2em]">Regulamentado</p>
              <p className="font-heading font-semibold text-xs mt-1">Banco Central do Brasil</p>
            </div>
            <div className="w-px h-6 bg-white/[0.06]" />
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.2em]">Associado</p>
              <p className="font-heading font-semibold text-xs mt-1">ABAC</p>
            </div>
            <div className="w-px h-6 bg-white/[0.06]" />
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.2em]">Certificado</p>
              <p className="font-heading font-semibold text-xs mt-1">MESC 100 Melhores 2025</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
