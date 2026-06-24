"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { ArrowRight } from "lucide-react";

const items = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Casa moderna com jardim",
    category: "Imóveis",
    title: "Sua casa própria sem pagar o triplo",
    description: "Créditos de até R$ 1 milhão em até 216 meses. Parcelas que cabem no seu bolso, sem juros compostos.",
    span: "lg:col-span-2 lg:row-span-2",
    imgHeight: "h-72 lg:h-full",
  },
  {
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80",
    alt: "Carro elétrico moderno",
    category: "Veículos",
    title: "O carro dos seus sonhos",
    description: "Créditos de até R$ 750 mil em até 96 meses.",
    span: "",
    imgHeight: "h-48",
  },
  {
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80",
    alt: "Família feliz em casa nova",
    category: "Realizações",
    title: "Momentos que valem mais",
    description: "O que importa é viver, não pagar juros por décadas.",
    span: "",
    imgHeight: "h-48",
  },
  {
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    alt: "Apartamento de luxo",
    category: "Investimento",
    title: "Patrimônio que gera renda",
    description: "Imóveis para Airbnb que pagam as próprias parcelas.",
    span: "",
    imgHeight: "h-48",
  },
  {
    image: "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?w=600&q=80",
    alt: "SUV elétrico estacionado",
    category: "Mobilidade",
    title: "Tecnologia ao seu alcance",
    description: "Veículos novos e seminovos com planejamento inteligente.",
    span: "",
    imgHeight: "h-48",
  },
];

export function ShowcaseSection() {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimateIn className="mb-16">
          <p className="text-[11px] font-semibold text-gold uppercase tracking-[0.25em] mb-6">
            {"O que você pode conquistar"}
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[0.95] max-w-4xl">
            {"Imóveis, veículos e a "}
            <span className="text-gradient-gold italic">
              {"liberdade de escolher."}
            </span>
          </h2>
        </AnimateIn>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.08} className={item.span}>
              <div className="group rounded-2xl overflow-hidden border border-white/[0.06] hover:border-gold/15 transition-all duration-500 h-full flex flex-col">
                <div className={`relative ${item.imgHeight} overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold text-gold uppercase tracking-[0.25em] bg-deep/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-deep flex-1">
                  <h3 className="font-heading font-semibold text-white text-base mb-2 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/30 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.5} className="mt-12 flex justify-center">
          <a
            href="/simulador"
            className="inline-flex items-center gap-2 bg-gradient-gold text-deep px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            Simule seu plano agora
            <ArrowRight size={15} />
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
