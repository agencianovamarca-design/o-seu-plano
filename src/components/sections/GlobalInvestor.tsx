"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { Globe, DollarSign, TrendingUp, Shield, MapPin, ArrowRight } from "lucide-react";

const advantages = [
  {
    icon: DollarSign,
    title: "Poder de compra multiplicado",
    description:
      "Com o dólar acima de R$ 5, seu salário em moeda forte compra muito mais no Brasil. Um imóvel de R$ 300 mil custa menos de US$ 55 mil — impensável nos EUA ou Europa.",
  },
  {
    icon: TrendingUp,
    title: "Renda passiva em reais",
    description:
      "Adquira imóveis no Brasil via consórcio e coloque para alugar. A renda em reais cobre a parcela enquanto seu patrimônio cresce — tudo sem juros compostos.",
  },
  {
    icon: Shield,
    title: "Patrimônio protegido",
    description:
      "Diversifique seus investimentos fora do mercado americano. Imóveis no Brasil são ativos reais, com valorização histórica acima da inflação.",
  },
  {
    icon: MapPin,
    title: "Conexão com o Brasil",
    description:
      "Tenha sua casa para férias, para a família, ou como base para um retorno futuro. Construa patrimônio no seu país de origem mesmo morando fora.",
  },
];

export function GlobalInvestorSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 mb-6">
              <Globe size={14} className="text-electric" />
              <span className="text-[11px] font-semibold text-electric uppercase tracking-[0.2em]">
                Para brasileiros no exterior
              </span>
            </div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-extrabold text-white leading-[0.95] mb-8">
              Você ganha em dólar.{" "}
              <span className="text-gradient-gold italic">
                Seu patrimônio cresce no Brasil.
              </span>
            </h2>
            <p className="text-white/35 text-base leading-relaxed max-w-lg">
              Mais de 4 milhões de brasileiros vivem fora do país. Se você é um
              deles, o consórcio é a forma mais inteligente de construir
              patrimônio no Brasil — sem juros, sem burocracia bancária
              internacional e com o câmbio a seu favor.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="p-8 rounded-2xl border border-electric/[0.15] bg-electric/[0.03]">
              <p className="text-[10px] text-electric uppercase tracking-[0.3em] font-bold mb-6">
                Simulação para quem ganha em dólar
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-white/20 text-xs mb-1">Imóvel no Brasil</p>
                  <p className="text-2xl font-bold text-white font-heading">
                    R$ 300 mil
                  </p>
                  <p className="text-electric text-sm font-medium mt-1">
                    ≈ US$ 55,000
                  </p>
                </div>
                <div>
                  <p className="text-white/20 text-xs mb-1">Parcela consórcio</p>
                  <p className="text-2xl font-bold text-gradient-gold font-heading">
                    R$ 1.927/mês
                  </p>
                  <p className="text-electric text-sm font-medium mt-1">
                    ≈ US$ 350/mês
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-white/20 text-xs mb-1">
                    Renda Airbnb estimada
                  </p>
                  <p className="text-lg font-bold text-green-300 font-heading">
                    R$ 1.800/mês
                  </p>
                  <p className="text-white/20 text-[10px] mt-1">
                    Cobre 93% da parcela
                  </p>
                </div>
                <div>
                  <p className="text-white/20 text-xs mb-1">
                    Economia vs financiamento
                  </p>
                  <p className="text-lg font-bold text-gradient-gold font-heading">
                    R$ 712 mil
                  </p>
                  <p className="text-white/20 text-[10px] mt-1">
                    ≈ US$ 130,000 economizados
                  </p>
                </div>
              </div>
              <p className="text-white/15 text-[10px]">
                * Câmbio referência: US$ 1 = R$ 5,50. Valores estimados.
              </p>
            </div>
          </AnimateIn>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-16">
          {advantages.map((adv, i) => (
            <AnimateIn key={adv.title} delay={i * 0.1}>
              <div className="bg-surface p-10 lg:p-12 h-full group hover:bg-surface-light transition-colors duration-500">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-electric/20 transition-colors duration-500">
                    <adv.icon size={22} className="text-electric" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-white/35 text-sm leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* CTA */}
        <AnimateIn delay={0.3}>
          <div className="text-center">
            <p className="text-white/25 text-sm mb-6 max-w-lg mx-auto">
              Atendemos brasileiros nos EUA, Europa, Japão, Oriente Médio e
              em qualquer lugar do mundo. Consultoria em português, no seu
              fuso horário.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/17169399340?text=Ol%C3%A1!%20Moro%20fora%20do%20Brasil%20e%20gostaria%20de%20saber%20sobre%20cons%C3%B3rcio%20para%20investir%20em%20im%C3%B3veis."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-gold text-deep px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar com consultor (WhatsApp US)
              </a>
              <a
                href="/simulador"
                className="border border-white/[0.12] px-8 py-4 rounded-full text-sm font-medium text-white/50 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer flex items-center gap-2 uppercase tracking-wider"
              >
                Simular valores
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
