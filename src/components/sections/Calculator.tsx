"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { TrendingUp, Home, Car, ArrowRight } from "lucide-react";

const categories = [
  {
    id: "imovel",
    label: "Imóvel",
    icon: Home,
    maxCredit: 360000,
    maxMonths: 216,
    adminRate: 0.285,
    groupSize: 999,
    financeRate: 0.0136,
    financeMonthsFactor: 1.67,
  },
  {
    id: "veiculo",
    label: "Veículo",
    icon: Car,
    maxCredit: 170000,
    maxMonths: 96,
    adminRate: 0.195,
    groupSize: 2000,
    financeRate: 0.0136,
    financeMonthsFactor: 1,
  },
];

export function CalculatorSection() {
  const [catId, setCatId] = useState("imovel");
  const [creditValue, setCreditValue] = useState(300000);
  const [months, setMonths] = useState(200);

  const cat = categories.find((c) => c.id === catId)!;

  const handleCategoryChange = (id: string) => {
    setCatId(id);
    const c = categories.find((x) => x.id === id)!;
    setCreditValue(id === "imovel" ? 300000 : 80000);
    setMonths(Math.min(months, c.maxMonths));
  };

  const consortiumTotal = creditValue * (1 + cat.adminRate);
  const consortiumMonthly = consortiumTotal / months;

  const financeMonths = Math.round(
    catId === "imovel" ? months * cat.financeMonthsFactor : 60
  );
  const financeMonthly =
    (creditValue *
      cat.financeRate *
      Math.pow(1 + cat.financeRate, financeMonths)) /
    (Math.pow(1 + cat.financeRate, financeMonths) - 1);
  const financeTotal = financeMonthly * financeMonths;

  const savings = financeTotal - consortiumTotal;
  const savingsPercent = ((savings / financeTotal) * 100).toFixed(0);

  const fmt = (v: number) =>
    v.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    });

  const airbnbMonthly = creditValue * 0.006;

  return (
    <section className="relative py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <AnimateIn className="mb-16">
          <p className="text-[11px] font-semibold text-electric uppercase tracking-[0.25em] mb-6">
            Calculadora
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[0.95] max-w-3xl">
            {"Veja quanto você "}
            <span className="text-gradient-gold italic">{"deixa de perder."}</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="border border-white/[0.06] rounded-2xl overflow-hidden">
            {/* Controls */}
            <div className="p-8 lg:p-10 border-b border-white/[0.04]">
              {/* Category */}
              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleCategoryChange(c.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                      catId === c.id
                        ? "bg-gradient-gold text-deep"
                        : "border border-white/[0.08] text-white/40 hover:text-white/60 hover:border-white/20"
                    }`}
                  >
                    <c.icon size={16} />
                    {c.label}
                  </button>
                ))}
                <div className="flex items-center gap-2 ml-auto text-white/20 text-xs">
                  <span>
                    Taxa admin: {(cat.adminRate * 100).toFixed(1)}% total
                  </span>
                  <span>&middot;</span>
                  <span>Até {cat.maxMonths} meses</span>
                  <span>&middot;</span>
                  <span>Máx. {cat.groupSize} participantes</span>
                </div>
              </div>

              {/* Sliders */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-[0.2em] mb-3">
                    Valor do crédito
                  </label>
                  <div className="text-3xl font-bold text-gradient-gold font-heading mb-5">
                    {fmt(creditValue)}
                  </div>
                  <input
                    type="range"
                    min={30000}
                    max={cat.maxCredit}
                    step={10000}
                    value={Math.min(creditValue, cat.maxCredit)}
                    onChange={(e) => setCreditValue(Number(e.target.value))}
                    className="w-full accent-gold cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/20 mt-2 uppercase tracking-wider">
                    <span>R$ 30 mil</span>
                    <span>{fmt(cat.maxCredit)}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-[0.2em] mb-3">
                    Prazo do consórcio
                  </label>
                  <div className="text-3xl font-bold text-white font-heading mb-5">
                    {months} meses{" "}
                    <span className="text-base text-white/20 font-normal">
                      ({(months / 12).toFixed(1)} anos)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={36}
                    max={cat.maxMonths}
                    step={12}
                    value={Math.min(months, cat.maxMonths)}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    className="w-full accent-electric cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/20 mt-2 uppercase tracking-wider">
                    <span>36 meses</span>
                    <span>{cat.maxMonths} meses</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]">
              {/* Finance */}
              <div className="bg-deep p-8">
                <p className="text-[10px] text-red-400/80 uppercase tracking-[0.25em] font-bold mb-1">
                  Financiamento
                </p>
                <p className="text-[10px] text-white/15 uppercase tracking-wider mb-3">
                  {financeMonths} meses com juros compostos
                </p>
                <p className="text-2xl lg:text-3xl font-bold text-red-300/80 font-heading">
                  {fmt(financeTotal)}
                </p>
                <p className="text-xs text-red-400/40 mt-3">
                  Parcela: {fmt(financeMonthly)}/mês
                </p>
                <p className="text-[10px] text-red-400/25 mt-1">
                  Juros pagos: {fmt(financeTotal - creditValue)}
                </p>
              </div>

              {/* Consortium */}
              <div className="bg-deep p-8">
                <p className="text-[10px] text-green-400/80 uppercase tracking-[0.25em] font-bold mb-1">
                  Consórcio
                </p>
                <p className="text-[10px] text-white/15 uppercase tracking-wider mb-3">
                  {months} meses &middot; taxa {(cat.adminRate * 100).toFixed(1)}%
                  total &middot; IPCA
                </p>
                <p className="text-2xl lg:text-3xl font-bold text-green-300/80 font-heading">
                  {fmt(consortiumTotal)}
                </p>
                <p className="text-xs text-green-400/40 mt-3">
                  Parcela: {fmt(consortiumMonthly)}/mês
                </p>
                <p className="text-[10px] text-green-400/25 mt-1">
                  Taxa admin: {fmt(consortiumTotal - creditValue)}
                </p>
              </div>

              {/* Savings */}
              <div className="bg-deep p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/[0.02]" />
                <div className="relative">
                  <p className="text-[10px] text-gold/80 uppercase tracking-[0.25em] font-bold mb-1">
                    Sua economia
                  </p>
                  <p className="text-[10px] text-white/15 uppercase tracking-wider mb-3">
                    {savingsPercent}% de diferença
                  </p>
                  <p className="text-2xl lg:text-3xl font-bold text-gradient-gold font-heading">
                    {fmt(savings)}
                  </p>
                  <p className="text-xs text-gold/40 mt-3">
                    Economia mensal: {fmt(financeMonthly - consortiumMonthly)}
                  </p>
                </div>
              </div>
            </div>

            {/* Investment insight - only for real estate */}
            {catId === "imovel" && (
              <div className="p-8 lg:p-10 border-t border-white/[0.04]">
                <div className="flex items-start gap-4">
                  <TrendingUp
                    size={20}
                    className="text-electric mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-white/60 font-heading font-semibold text-sm mb-2">
                      E se esse imóvel gerasse renda?
                    </p>
                    <p className="text-white/25 text-sm leading-relaxed mb-4">
                      Adquirindo um imóvel de {fmt(creditValue)} via consórcio e
                      colocando no Airbnb com taxa média de ocupação, a renda
                      estimada de{" "}
                      <span className="text-white/50 font-medium">
                        {fmt(airbnbMonthly)}/mês
                      </span>
                      {airbnbMonthly >= consortiumMonthly ? (
                        <span className="text-green-400/60">
                          {" "}
                          — o bastante para cobrir a parcela do consórcio e
                          ainda gerar lucro.
                        </span>
                      ) : (
                        <span>
                          {" "}
                          — ajudaria a cobrir parte significativa da parcela.
                        </span>
                      )}
                    </p>
                    <p className="text-white/15 text-xs">
                      * Valores estimados. Correção pelo IPCA. Consulte
                      condições reais com nossa equipe.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="p-8 lg:p-10 bg-gold/[0.02] border-t border-gold/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white font-heading font-bold">
                  Quer uma simulação sob medida?
                </p>
                <p className="text-white/25 text-sm mt-1">
                  Nossa equipe calcula o plano exato para o seu momento.
                </p>
              </div>
              <a
                href="/simulador"
                className="bg-gradient-gold text-deep px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity duration-200 cursor-pointer flex items-center gap-2 shrink-0"
              >
                Simulação completa
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
