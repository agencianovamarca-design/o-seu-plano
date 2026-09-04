"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

export function ConsultantSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden border border-white/[0.06]">
          {/* Image */}
          <div className="relative min-h-[500px] lg:min-h-[650px]">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
              alt="Especialista em estratégia digital — O Seu Plano"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-deep/40" />
          </div>

          {/* Content */}
          <div className="bg-surface/80 backdrop-blur-md p-10 lg:p-16 flex flex-col justify-center">
            <AnimateIn>
              <p className="text-[11px] font-semibold text-gold uppercase tracking-[0.25em] mb-6">
                Quem está por trás
              </p>
              <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white leading-[0.95] mb-8">
                Presença digital.{" "}
                <span className="text-gradient-gold italic">Resultado real.</span>
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <p className="text-white/40 text-base leading-relaxed mb-6">
                Por trás de cada plano existe uma análise cuidadosa,
                personalizada e comprometida com o resultado do seu negócio.
                Não vendemos promessas — entregamos estratégia.
              </p>
              <p className="text-white/40 text-base leading-relaxed mb-10">
                Analisamos sua presença digital atual, identificamos o que está
                fazendo você perder clientes e montamos um plano de ação claro,
                realista e adaptado ao seu nicho e momento.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.25}>
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { label: "Diagnóstico", desc: "Gratuito" },
                  { label: "Plano", desc: "Personalizado" },
                  { label: "Resultado", desc: "Em 7 dias" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                  >
                    <p className="text-gold font-heading font-bold text-sm">
                      {item.label}
                    </p>
                    <p className="text-white/25 text-[10px] uppercase tracking-wider mt-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <a
                href="https://wa.me/5519997485834"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-gold text-deep px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar com especialista
              </a>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}

