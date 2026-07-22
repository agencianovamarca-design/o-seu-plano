"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import {
  Home,
  Car,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Shield,
} from "lucide-react";

const categories = [
  {
    id: "imovel",
    label: "Imóvel",
    icon: Home,
    maxCredit: 360000,
    minCredit: 80000,
    maxMonths: 216,
    minMonths: 36,
    adminRate: 0.285,
    groupSize: 999,
    correction: "INCC",
    financeRate: 0.0136,
    financeMonthsFactor: 1.67,
  },
  {
    id: "veiculo",
    label: "Veículo",
    icon: Car,
    maxCredit: 170000,
    minCredit: 30000,
    maxMonths: 96,
    minMonths: 36,
    adminRate: 0.195,
    groupSize: 2000,
    correction: "IPCA",
    financeRate: 0.0136,
    financeMonthsFactor: 1,
  },
];

export function SimuladorPageContent() {
  const [catId, setCatId] = useState("imovel");
  const [creditValue, setCreditValue] = useState(300000);
  const [months, setMonths] = useState(200);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const cat = categories.find((c) => c.id === catId)!;

  const handleCategoryChange = (id: string) => {
    setCatId(id);
    const c = categories.find((x) => x.id === id)!;
    setCreditValue(id === "imovel" ? 300000 : 80000);
    setMonths(id === "imovel" ? 200 : 72);
  };

  const consortiumTotal = creditValue * (1 + cat.adminRate);
  const consortiumMonthly = consortiumTotal / months;
  const adminFee = consortiumTotal - creditValue;

  const financeMonths = Math.round(
    catId === "imovel" ? months * cat.financeMonthsFactor : 60
  );
  const financeMonthly =
    (creditValue * cat.financeRate * Math.pow(1 + cat.financeRate, financeMonths)) /
    (Math.pow(1 + cat.financeRate, financeMonths) - 1);
  const financeTotal = financeMonthly * financeMonths;
  const financeInterest = financeTotal - creditValue;

  const savings = financeTotal - consortiumTotal;
  const savingsPercent = ((savings / financeTotal) * 100).toFixed(0);
  const savingsMonthly = financeMonthly - consortiumMonthly;

  const fmt = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  const airbnbMonthly = creditValue * 0.006;
  const airbnbAnnual = airbnbMonthly * 12;
  const airbnbCoversInstallment = airbnbMonthly >= consortiumMonthly;

  return (
    <div className="pt-36 pb-24">
      <section className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <AnimateIn className="mb-12">
          <p className="text-[11px] font-semibold text-electric uppercase tracking-[0.25em] mb-6">
            Simulador
          </p>
          <h1 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-white leading-[0.95] mb-6">
            Simule e descubra a{" "}
            <span className="text-gradient-gold italic">economia real.</span>
          </h1>
          <p className="text-white/35 text-base max-w-xl">
            Compare consórcio com financiamento usando dados reais.
            Correção pelo IPCA. Sem surpresas.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="border border-white/[0.06] rounded-2xl overflow-hidden">
            {/* Controls */}
            <div className="p-8 lg:p-10">
              {/* Category selector */}
              <div className="flex flex-wrap gap-3 mb-10">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleCategoryChange(c.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                      catId === c.id
                        ? "bg-gradient-gold text-deep"
                        : "border border-white/[0.08] text-white/40 hover:text-white/60"
                    }`}
                  >
                    <c.icon size={16} />
                    {c.label}
                  </button>
                ))}
              </div>

              {/* Plan specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.04]">
                  <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-1">
                    Crédito máx.
                  </p>
                  <p className="text-sm font-heading font-semibold text-white/60">
                    {fmt(cat.maxCredit)}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.04]">
                  <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-1">
                    Prazo máx.
                  </p>
                  <p className="text-sm font-heading font-semibold text-white/60">
                    {cat.maxMonths} meses
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.04]">
                  <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-1">
                    Taxa admin total
                  </p>
                  <p className="text-sm font-heading font-semibold text-white/60">
                    {(cat.adminRate * 100).toFixed(1)}%
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.04]">
                  <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-1">
                    Correção
                  </p>
                  <p className="text-sm font-heading font-semibold text-white/60">
                    {cat.correction}
                  </p>
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
                    min={cat.minCredit}
                    max={cat.maxCredit}
                    step={10000}
                    value={Math.min(creditValue, cat.maxCredit)}
                    onChange={(e) => setCreditValue(Number(e.target.value))}
                    className="w-full accent-gold cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/20 mt-2 uppercase tracking-wider">
                    <span>{fmt(cat.minCredit)}</span>
                    <span>{fmt(cat.maxCredit)}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-[0.2em] mb-3">
                    Prazo
                  </label>
                  <div className="text-3xl font-bold text-white font-heading mb-5">
                    {months} meses{" "}
                    <span className="text-base text-white/20 font-normal">
                      ({(months / 12).toFixed(1)} anos)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={cat.minMonths}
                    max={cat.maxMonths}
                    step={12}
                    value={Math.min(months, cat.maxMonths)}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    className="w-full accent-electric cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/20 mt-2 uppercase tracking-wider">
                    <span>{cat.minMonths} meses</span>
                    <span>{cat.maxMonths} meses</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] border-t border-white/[0.04]">
              <div className="bg-deep p-8">
                <p className="text-[10px] text-red-400/80 uppercase tracking-[0.25em] font-bold mb-1">
                  Financiamento
                </p>
                <p className="text-[10px] text-white/15 uppercase tracking-wider mb-4">
                  {financeMonths} meses &middot; juros compostos
                </p>
                <p className="text-3xl font-bold text-red-300/80 font-heading mb-4">
                  {fmt(financeTotal)}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/20">Parcela mensal</span>
                    <span className="text-red-300/60">{fmt(financeMonthly)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/20">Total em juros</span>
                    <span className="text-red-300/60">{fmt(financeInterest)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/20">Multiplicador</span>
                    <span className="text-red-300/60">
                      {(financeTotal / creditValue).toFixed(1)}x o valor
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-deep p-8">
                <p className="text-[10px] text-green-400/80 uppercase tracking-[0.25em] font-bold mb-1">
                  Consórcio
                </p>
                <p className="text-[10px] text-white/15 uppercase tracking-wider mb-4">
                  {months} meses &middot; {(cat.adminRate * 100).toFixed(1)}% total &middot; {cat.correction}
                </p>
                <p className="text-3xl font-bold text-green-300/80 font-heading mb-4">
                  {fmt(consortiumTotal)}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/20">Parcela mensal</span>
                    <span className="text-green-300/60">{fmt(consortiumMonthly)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/20">Taxa admin total</span>
                    <span className="text-green-300/60">{fmt(adminFee)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/20">Multiplicador</span>
                    <span className="text-green-300/60">
                      {(consortiumTotal / creditValue).toFixed(2)}x o valor
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-deep p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/[0.02]" />
                <div className="relative">
                  <p className="text-[10px] text-gold/80 uppercase tracking-[0.25em] font-bold mb-1">
                    Economia
                  </p>
                  <p className="text-[10px] text-white/15 uppercase tracking-wider mb-4">
                    {savingsPercent}% de diferença total
                  </p>
                  <p className="text-3xl font-bold text-gradient-gold font-heading mb-4">
                    {fmt(savings)}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/20">Economia mensal</span>
                      <span className="text-gold/60">{fmt(savingsMonthly)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/20">Juros evitados</span>
                      <span className="text-gold/60">{fmt(financeInterest)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment insight - real estate only */}
            {catId === "imovel" && (
              <div className="p-8 lg:p-10 border-t border-white/[0.04]">
                <div className="flex items-start gap-4">
                  <TrendingUp size={20} className="text-electric mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/60 font-heading font-semibold text-sm mb-2">
                      Estratégia: imóvel para renda passiva
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.04]">
                        <p className="text-[10px] text-electric/60 uppercase tracking-[0.2em] font-bold">
                          Renda mensal (Airbnb)
                        </p>
                        <p className="text-lg font-bold text-white/60 font-heading mt-1">
                          {fmt(airbnbMonthly)}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.04]">
                        <p className="text-[10px] text-electric/60 uppercase tracking-[0.2em] font-bold">
                          Renda anual
                        </p>
                        <p className="text-lg font-bold text-white/60 font-heading mt-1">
                          {fmt(airbnbAnnual)}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.04]">
                        <p className="text-[10px] text-electric/60 uppercase tracking-[0.2em] font-bold">
                          Cobre a parcela?
                        </p>
                        <p className={`text-lg font-bold font-heading mt-1 ${airbnbCoversInstallment ? "text-green-400/80" : "text-white/40"}`}>
                          {airbnbCoversInstallment ? "Sim, com lucro" : "Parcialmente"}
                        </p>
                      </div>
                    </div>
                    <p className="text-white/15 text-xs">
                      * Estimativa com taxa de ocupação média de 60%. Correção pelo IPCA.
                      Valores reais podem variar.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Lead capture */}
            <div className="p-8 lg:p-10 bg-white/[0.01] border-t border-white/[0.04]">
              {!submitted ? (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <Shield size={18} className="text-gold" />
                    <div>
                      <h3 className="font-heading font-bold text-white text-base">
                        Simulação personalizada
                      </h3>
                      <p className="text-white/25 text-xs">
                        Insira seus dados e receba uma proposta sob medida no WhatsApp.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder:text-white/15 focus:outline-none focus:border-gold/20 transition-colors text-sm"
                    />
                    <input
                      type="tel"
                      placeholder="Seu WhatsApp"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder:text-white/15 focus:outline-none focus:border-gold/20 transition-colors text-sm"
                    />
                    <button
                      onClick={() => {
                        if (name && phone) {
                          const msg = `Olá! Sou ${name}. Simulei um consórcio de ${fmt(creditValue)} para ${cat.label} (${months} meses, taxa ${(cat.adminRate * 100).toFixed(1)}%). Parcela estimada: ${fmt(consortiumMonthly)}/mês. Gostaria de uma proposta personalizada.`;
                          window.open(
                            `https://wa.me/17169399340?text=${encodeURIComponent(msg)}`,
                            "_blank"
                          );
                          setSubmitted(true);
                        }
                      }}
                      disabled={!name || !phone}
                      className="bg-gradient-gold text-deep px-6 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={16} />
                      Receber proposta
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle size={28} className="text-green-400 mx-auto mb-3" />
                  <p className="font-heading font-bold text-white">
                    Simulação enviada ao WhatsApp!
                  </p>
                  <p className="text-white/25 text-sm mt-1">
                    Nossa equipe responde rapidamente.
                  </p>
                </div>
              )}
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
