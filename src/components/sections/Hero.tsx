"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-40 lg:pt-36">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
          alt="Equipe trabalhando em ambiente profissional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/85 to-deep/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/95 via-deep/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-12 pb-12">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[11px] font-semibold text-gold uppercase tracking-[0.28em] mb-6"
        >
          Estratégia Digital para Qualquer Negócio
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-heading font-extrabold leading-[0.9] tracking-tight mb-8"
        >
          <span className="block text-[clamp(2.8rem,7.5vw,7rem)] text-white">
            Sua empresa perde
          </span>
          <span className="block text-[clamp(2.8rem,7.5vw,7rem)] text-white">
            clientes antes de{" "}
            <span className="text-gradient-gold italic">abrir</span>
          </span>
          <span className="block text-[clamp(2.8rem,7.5vw,7rem)] text-gradient-gold italic">
            a boca.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-xl text-white/50 text-base lg:text-lg leading-relaxed mb-10"
        >
          Enquanto você usa @gmail.com, seu concorrente parece mais profissional.
          A gente resolve isso — e-mail no seu domínio, redes estruturadas,
          site que converte — em menos de 7 dias.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-start gap-4 mb-16"
        >
          <a
            href="/diagnostico"
            className="bg-gradient-gold text-deep px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            Quero meu diagnóstico gratuito
          </a>
          <a
            href="#como-funciona"
            className="border border-white/[0.12] px-8 py-4 rounded-full text-sm font-medium text-white/60 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer uppercase tracking-wider backdrop-blur-sm"
          >
            Ver como funciona
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden backdrop-blur-md">
            {[
              { display: null, value: 24, suffix: "h", label: "E-mail profissional ativo", sub: "Do zero ao @suaempresa.com.br" },
              { display: null, value: 7, suffix: " dias", label: "Presença digital completa", sub: "Site, redes sociais e estratégia" },
              { display: "Qualquer", value: null, suffix: "", label: "Nicho ou segmento", sub: "MEI, empresa, profissional liberal" },
              { display: "R$ 97", value: null, suffix: "", label: "Para começar do zero", sub: "Kit presença digital completo" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-deep/70 backdrop-blur-sm p-6 lg:p-8 text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-gradient-gold font-heading">
                  {stat.display ? (
                    stat.display
                  ) : (
                    <CountUp end={stat.value!} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider mt-2">
                  {stat.label}
                </p>
                <p className="text-white/25 text-[10px] uppercase tracking-wider mt-0.5">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={16} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
