"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcos Oliveira",
    role: "Empresário, João Pessoa - PB",
    text: "Eu tinha medo de consórcio por tudo que já ouvi. A equipe do Seu Plano me explicou cada detalhe. Fui contemplado no 8.º mês sem dar lance. Hoje tenho meu apartamento.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=75",
  },
  {
    name: "Ana Beatriz Santos",
    role: "Professora, Campina Grande - PB",
    text: "Já tinha financiamento de um carro e descobri que estava pagando quase 3 carros. Quitei e entrei no consórcio. A diferença é absurda. Me arrependo de não ter conhecido antes.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=75",
  },
  {
    name: "Ricardo Almeida",
    role: "Engenheiro Civil, Recife - PE",
    text: "Como engenheiro, faço as contas. No financiamento eu pagaria R$ 680 mil por um imóvel de R$ 280 mil. No consórcio, paguei R$ 322 mil. Os números falam por si.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=75",
  },
  {
    name: "Fernanda Costa",
    role: "Investidora, Natal - RN",
    text: "Uso consórcio como estratégia de investimento. Compro imóveis para Airbnb e o retorno paga as parcelas e ainda gera renda passiva. O Seu Plano me abriu os olhos para isso.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=75",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <AnimateIn>
            <p className="text-[11px] font-semibold text-gold uppercase tracking-[0.25em] mb-6">
              Depoimentos
            </p>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[0.95]">
              Quem entendeu o jogo,{" "}
              <span className="text-gradient-gold italic">mudou de vida.</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=75"
                alt="Família feliz em frente à casa nova"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/50 to-transparent" />
            </div>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.1}>
              <div className="border border-white/[0.06] rounded-2xl p-8 lg:p-10 h-full relative group hover:border-gold/10 transition-all duration-500">
                <Quote size={28} className="text-gold/[0.06] absolute top-8 right-8" />
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={13} className="text-gold/70 fill-gold/70" />
                  ))}
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-8 relative z-10">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-white text-sm">
                      {t.name}
                    </p>
                    <p className="text-white/25 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
