"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-40 lg:pt-36">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Casa moderna representando conquista"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/80 to-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-12 pb-12">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-heading font-extrabold leading-[0.9] tracking-tight mb-8"
        >
          <span className="block text-[clamp(3rem,8vw,7.5rem)] text-white">
            {"Seu sonho "}
            <span className="text-gradient-gold italic">{"não"}</span>
          </span>
          <span className="block text-[clamp(3rem,8vw,7.5rem)] text-white">
            deveria custar
          </span>
          <span className="block text-[clamp(3rem,8vw,7.5rem)] text-gradient-gold italic">
            {"três vezes mais."}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-xl text-white/50 text-base lg:text-lg leading-relaxed mb-10"
        >
          Dedicados a educar consumidores e transformar o mercado de
          aquisição de bens de forma inteligente, gerando segurança e
          confiabilidade.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-start gap-4 mb-16"
        >
          <a
            href="https://wa.me/17169399340"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-deep px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            Mude sua história agora
          </a>
          <a
            href="#entenda"
            className="border border-white/[0.12] px-8 py-4 rounded-full text-sm font-medium text-white/60 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer uppercase tracking-wider backdrop-blur-sm"
          >
            Entenda como funciona
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
              { value: 565, suffix: " mil", label: "De economia real", sub: "Em um único imóvel de R$ 260 mil" },
              { value: 1190, suffix: "", label: "Parcela a partir de", sub: "R$/mês para crédito de R$ 260 mil" },
              { value: 216, suffix: " meses", label: "Prazo para imóveis", sub: "Sem juros compostos" },
              { value: 96, suffix: " meses", label: "Prazo para veículos", sub: "Créditos de até R$ 750 mil" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-deep/70 backdrop-blur-sm p-6 lg:p-8 text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-gradient-gold font-heading">
                  {stat.value === 1190 ? (
                    "R$ 1.190"
                  ) : (
                    <CountUp end={stat.value} suffix={stat.suffix} />
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

      {/* Scroll */}
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
