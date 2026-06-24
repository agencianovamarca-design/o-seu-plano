"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { Check, X, ArrowRight } from "lucide-react";

const banks = [
  { name: "Bradesco", rate: "13,61%", total: "R$ 758.220", monthly: "R$ 2.903", term: "420 meses", multiplier: "3,33x" },
  { name: "Itaú", rate: "13,69%", total: "R$ 899.936", monthly: "R$ 3.507", term: "420 meses", multiplier: "3,46x" },
  { name: "Santander", rate: "13,79%", total: "R$ ~900.000", monthly: "R$ 3.541", term: "420 meses", multiplier: "3,46x" },
];

const consortium = {
  name: "Plano inteligente",
  rate: "28,5% total",
  total: "R$ 334.100",
  monthly: "R$ 1.654",
  monthlyReduced: "R$ 1.190",
  term: "216 meses",
  multiplier: "1,28x",
};

export function ComparisonSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <AnimateIn>
            <p className="text-[11px] font-semibold text-electric uppercase tracking-[0.25em] mb-6">
              {"Dados reais de simulações bancárias"}
            </p>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[0.95] mb-6">
              {"O tempo e o dinheiro que você "}
              <span className="text-gradient-gold italic">{"perde."}</span>
            </h2>
            <p className="text-white/35 text-base leading-relaxed">
              {"Comparamos simulações reais de financiamento dos maiores bancos do Brasil com o planejamento inteligente. Os números são públicos — confira você mesmo."}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&q=75"
                alt="Pessoa analisando documentos financeiros"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
            </div>
          </AnimateIn>
        </div>

        {/* Bank comparisons */}
        <AnimateIn delay={0.2}>
          <div className="border border-white/[0.06] rounded-2xl overflow-hidden mb-6">
            <div className="p-6 bg-white/[0.01] border-b border-white/[0.04]">
              <p className="text-xs text-red-400/80 uppercase tracking-[0.2em] font-bold">
                {"Financiamento bancário — Imóvel de R$ 325.000 (entrada de R$ 65.000)"}
              </p>
            </div>
            {banks.map((bank) => (
              <div
                key={bank.name}
                className="grid grid-cols-2 sm:grid-cols-6 gap-4 px-6 py-5 border-b border-white/[0.03] last:border-0"
              >
                <div className="flex items-center gap-2">
                  <X size={12} className="text-red-400/50 shrink-0" />
                  <span className="text-sm text-white/60 font-medium">{bank.name}</span>
                </div>
                <div className="text-sm text-red-300/60">{bank.rate} a.a.</div>
                <div className="text-sm text-red-300/60">{bank.term}</div>
                <div className="text-sm text-red-300/60">1.ª parcela: {bank.monthly}</div>
                <div className="text-sm text-red-300/80 font-semibold">{bank.total}</div>
                <div className="text-sm text-red-400/80 font-bold">{bank.multiplier} o valor</div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Consortium */}
        <AnimateIn delay={0.3}>
          <div className="border border-gold/20 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gold/[0.02]" />
            <div className="relative p-6 border-b border-gold/10">
              <p className="text-xs text-gold/80 uppercase tracking-[0.2em] font-bold">
                {"Planejamento inteligente — Mesmo crédito de R$ 260.000"}
              </p>
            </div>
            <div className="relative grid grid-cols-2 sm:grid-cols-5 gap-6 p-6 lg:p-8">
              <div>
                <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-1">Taxa total</p>
                <p className="text-lg font-heading font-bold text-green-300/80">{consortium.rate}</p>
              </div>
              <div>
                <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-1">Prazo</p>
                <p className="text-lg font-heading font-bold text-green-300/80">{consortium.term}</p>
              </div>
              <div>
                <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-1">Parcela</p>
                <p className="text-lg font-heading font-bold text-green-300/80">{consortium.monthly}/mês</p>
                <p className="text-[10px] text-green-400/40 mt-0.5">ou {consortium.monthlyReduced} (reduzida)</p>
              </div>
              <div>
                <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-1">Total pago</p>
                <p className="text-lg font-heading font-bold text-gradient-gold">{consortium.total}</p>
              </div>
              <div>
                <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-1">Multiplicador</p>
                <p className="text-lg font-heading font-bold text-gradient-gold">{consortium.multiplier}</p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Savings callout */}
        <AnimateIn delay={0.4}>
          <div className="mt-8 rounded-2xl p-8 lg:p-10 border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white font-heading font-bold text-xl mb-2">
                {"Economia de até "}
                <span className="text-gradient-gold">R$ 565.836</span>
              </p>
              <p className="text-white/25 text-sm">
                {"Comparando Itaú (R$ 899.936) com o planejamento inteligente (R$ 334.100) para o mesmo crédito."}
              </p>
            </div>
            <a
              href="/simulador"
              className="bg-gradient-gold text-deep px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity duration-200 cursor-pointer flex items-center gap-2 shrink-0"
            >
              Simule seus valores
              <ArrowRight size={15} />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
