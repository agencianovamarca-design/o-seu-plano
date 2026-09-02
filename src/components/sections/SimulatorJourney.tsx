?"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { saveLead } from "@/lib/save-lead";
import {
  Home,
  Car,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  AlertTriangle,
  CheckCircle,
  Target,
} from "lucide-react";

const profiles = [
  {
    id: "primeiro-imovel",
    label: "Primeiro imóvel",
    icon: Home,
    catId: "imovel",
    dream: "Sair do aluguel e ter a casa própria",
    defaultCredit: 260000,
  },
  {
    id: "upgrade",
    label: "Trocar de imóvel",
    icon: Home,
    catId: "imovel",
    dream: "Um espaço maior para sua família",
    defaultCredit: 400000,
  },
  {
    id: "investidor",
    label: "Investir em imóvel",
    icon: TrendingUp,
    catId: "imovel",
    dream: "Construir patrimônio e renda passiva",
    defaultCredit: 300000,
  },
  {
    id: "veiculo",
    label: "Veículo",
    icon: Car,
    catId: "veiculo",
    dream: "O carro que você sempre quis",
    defaultCredit: 80000,
  },
];

const categories: Record<
  string,
  {
    maxCredit: number;
    minCredit: number;
    maxMonths: number;
    adminRate: number;
    groupSize: number;
    correction: string;
    financeRate: number;
    financeMonthsFactor: number;
  }
> = {
  imovel: {
    maxCredit: 360000,
    minCredit: 80000,
    maxMonths: 216,
    adminRate: 0.285,
    groupSize: 999,
    correction: "INCC",
    financeRate: 0.0136,
    financeMonthsFactor: 1.67,
  },
  veiculo: {
    maxCredit: 170000,
    minCredit: 30000,
    maxMonths: 96,
    adminRate: 0.195,
    groupSize: 2000,
    correction: "IPCA",
    financeRate: 0.0136,
    financeMonthsFactor: 1,
  },
};

const STEPS = [
  { key: "situacao", label: "Situação", num: 1 },
  { key: "imaginacao", label: "Seu sonho", num: 2 },
  { key: "consciencia", label: "A verdade", num: 3 },
  { key: "desejo", label: "Economia", num: 4 },
  { key: "transicao", label: "Próximo passo", num: 5 },
];

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

export function SimulatorJourneySection() {
  const [step, setStep] = useState(0);
  const [profileId, setProfileId] = useState("");
  const [creditValue, setCreditValue] = useState(260000);
  const [months, setMonths] = useState(200);
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  const profile = profiles.find((p) => p.id === profileId);
  const cat = categories[profile?.catId ?? "imovel"];

  const consortiumTotal = creditValue * (1 + cat.adminRate);
  const consortiumMonthly = consortiumTotal / months;

  const financeMonths = Math.round(
    (profile?.catId ?? "imovel") === "imovel"
      ? months * cat.financeMonthsFactor
      : 60
  );
  const financeMonthly =
    (creditValue *
      cat.financeRate *
      Math.pow(1 + cat.financeRate, financeMonths)) /
    (Math.pow(1 + cat.financeRate, financeMonths) - 1);
  const financeTotal = financeMonthly * financeMonths;

  const savings = financeTotal - consortiumTotal;
  const savingsPercent = ((savings / financeTotal) * 100).toFixed(0);

  const airbnbMonthly = creditValue * 0.006;

  const selectProfile = (id: string) => {
    const p = profiles.find((x) => x.id === id)!;
    setProfileId(id);
    setCreditValue(p.defaultCredit);
    setMonths(p.catId === "imovel" ? 200 : 72);
    setStep(1);
  };

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const sendWhatsApp = () => {
    const profileLabel = profile?.label ?? "consórcio";
    saveLead({
      nome: name || "visitante",
      whatsapp: "",
      origem: "Simulador SICAD",
      assunto: profileLabel,
      mensagem: `Crédito: ${fmt(creditValue)} | Prazo: ${months}m | Parcela: ${fmt(consortiumMonthly)}/mês | Economia: ${fmt(savings)}`,
    });
    const msg = `Olá! Sou ${name || "visitante do site"}.\n\nFiz a simulação no site:\n�?� Objetivo: ${profileLabel}\n�?� Crédito: ${fmt(creditValue)}\n�?� Prazo: ${months} meses\n�?� Parcela consórcio: ${fmt(consortiumMonthly)}/mês\n�?� Economia vs financiamento: ${fmt(savings)}\n\nGostaria de uma análise personalizada.`;
    window.open(
      `https://wa.me/5519997485834?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSent(true);
  };

  return (
    <section className="relative py-32 lg:py-40" id="simulador-interativo">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold text-electric uppercase tracking-[0.25em] mb-4">
            Simulador inteligente
          </p>
          <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white leading-[0.95]">
            Descubra quanto você{" "}
            <span className="text-gradient-gold italic">deixa na mesa.</span>
          </h2>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-1 mb-10 max-w-lg mx-auto">
          {STEPS.map((s, i) => (
            <div key={s.key} className="flex-1 flex items-center gap-1">
              <div
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                  i <= step ? "bg-gold" : "bg-white/[0.06]"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="border border-white/[0.06] rounded-2xl overflow-hidden min-h-[480px]">
          <AnimatePresence mode="wait">
            {/* STEP 0 �?? SITUA�?�?O */}
            {step === 0 && (
              <motion.div
                key="situacao"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="p-8 lg:p-12"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Target size={18} className="text-gold" />
                  <p className="text-[10px] text-gold uppercase tracking-[0.3em] font-bold">
                    Etapa 1 �?? Situação
                  </p>
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-3">
                  Qual é o seu momento?
                </h3>
                <p className="text-white/30 text-sm mb-10 max-w-lg">
                  Cada objetivo tem uma estratégia diferente. Nos conte o que
                  você busca e montamos o cenário ideal.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {profiles.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => selectProfile(p.id)}
                      className="group flex items-start gap-4 p-6 rounded-xl border border-white/[0.06] bg-white/[0.01] hover:border-gold/30 hover:bg-gold/[0.03] transition-all duration-300 text-left cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-gold/20 transition-colors">
                        <p.icon
                          size={20}
                          className="text-white/30 group-hover:text-gold transition-colors"
                        />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-white group-hover:text-gold transition-colors">
                          {p.label}
                        </p>
                        <p className="text-white/25 text-xs mt-1">{p.dream}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 1 �?? IMAGINA�?�?O */}
            {step === 1 && (
              <motion.div
                key="imaginacao"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="p-8 lg:p-12"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles size={18} className="text-gold" />
                  <p className="text-[10px] text-gold uppercase tracking-[0.3em] font-bold">
                    Etapa 2 �?? Imagine
                  </p>
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-3">
                  {profile?.dream}
                </h3>
                <p className="text-white/30 text-sm mb-10 max-w-lg">
                  Defina o valor do crédito e o prazo que cabem na sua
                  realidade. Nós calculamos o resto.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-[0.2em] mb-3">
                      Qual o valor do seu sonho?
                    </label>
                    <div className="text-3xl font-bold text-gradient-gold font-heading mb-5">
                      {fmt(creditValue)}
                    </div>
                    <input
                      type="range"
                      min={cat.minCredit}
                      max={cat.maxCredit}
                      step={10000}
                      value={creditValue}
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
                      Em quanto tempo?
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
                      value={months}
                      onChange={(e) => setMonths(Number(e.target.value))}
                      className="w-full accent-electric cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-white/20 mt-2 uppercase tracking-wider">
                      <span>36 meses</span>
                      <span>{cat.maxMonths} meses</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-gold/[0.03] border border-gold/[0.08] mb-8">
                  <p className="text-white/50 text-sm">
                    No consórcio, sua parcela estimada seria de{" "}
                    <span className="text-gold font-bold text-lg">
                      {fmt(consortiumMonthly)}/mês
                    </span>{" "}
                    �?? sem juros compostos, apenas taxa administrativa de{" "}
                    {(cat.adminRate * 100).toFixed(1)}% no total.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={prev}
                    className="flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                    Voltar
                  </button>
                  <button
                    onClick={next}
                    className="bg-gradient-gold text-deep px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-2"
                  >
                    Agora veja a verdade
                    <ArrowRight size={15} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2 �?? CONSCI�?NCIA */}
            {step === 2 && (
              <motion.div
                key="consciencia"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="p-8 lg:p-12"
              >
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle size={18} className="text-red-400" />
                  <p className="text-[10px] text-red-400 uppercase tracking-[0.3em] font-bold">
                    Etapa 3 �?? A verdade que ninguém te conta
                  </p>
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-3">
                  Sabe quanto você pagaria no financiamento?
                </h3>
                <p className="text-white/30 text-sm mb-4 max-w-lg">
                  Pelos mesmos {fmt(creditValue)}, o banco cobra taxa de{" "}
                  <span className="text-red-400 font-bold">1,36% a.m.</span> (17,57% a.a.)
                  com CET real de{" "}
                  <span className="text-red-400 font-bold">22,46% a.a.</span>{" "}
                  �?? fora as tarifas de avaliação (R$ 668) e cadastro (R$ 999).
                </p>
                <p className="text-white/20 text-xs mb-8 max-w-lg">
                  Valores reais praticados pelo mercado financeiro brasileiro.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Financing card */}
                  <div className="p-8 rounded-xl border-2 border-red-500/20 bg-red-500/[0.03]">
                    <p className="text-[10px] text-red-400 uppercase tracking-[0.3em] font-bold mb-4">
                      Financiamento tradicional
                    </p>
                    <p className="text-4xl font-bold text-red-300 font-heading mb-4">
                      {fmt(financeTotal)}
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/25">Parcela mensal</span>
                        <span className="text-red-300">
                          {fmt(financeMonthly)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/25">
                          Juros que você paga
                        </span>
                        <span className="text-red-300">
                          {fmt(financeTotal - creditValue)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/25">Multiplicador</span>
                        <span className="text-red-300">
                          {(financeTotal / creditValue).toFixed(1)}x o valor
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Consortium card */}
                  <div className="p-8 rounded-xl border-2 border-green-500/20 bg-green-500/[0.03]">
                    <p className="text-[10px] text-green-400 uppercase tracking-[0.3em] font-bold mb-4">
                      Consórcio inteligente
                    </p>
                    <p className="text-4xl font-bold text-green-300 font-heading mb-4">
                      {fmt(consortiumTotal)}
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/25">Parcela mensal</span>
                        <span className="text-green-300">
                          {fmt(consortiumMonthly)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/25">Taxa admin total</span>
                        <span className="text-green-300">
                          {fmt(consortiumTotal - creditValue)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/25">Multiplicador</span>
                        <span className="text-green-300">
                          {(consortiumTotal / creditValue).toFixed(2)}x o valor
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <p className="text-white/30 text-sm">
                    No financiamento, você paga{" "}
                    <span className="text-red-300 font-bold">
                      {(financeTotal / creditValue).toFixed(1)}x
                    </span>{" "}
                    o valor do bem. No consórcio,{" "}
                    <span className="text-green-300 font-bold">
                      {(consortiumTotal / creditValue).toFixed(2)}x
                    </span>
                    .
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={prev}
                    className="flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                    Voltar
                  </button>
                  <button
                    onClick={next}
                    className="bg-gradient-gold text-deep px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-2"
                  >
                    Ver minha economia
                    <ArrowRight size={15} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 �?? DESEJO */}
            {step === 3 && (
              <motion.div
                key="desejo"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="p-8 lg:p-12"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles size={18} className="text-gold" />
                  <p className="text-[10px] text-gold uppercase tracking-[0.3em] font-bold">
                    Etapa 4 �?? O que isso significa pra você
                  </p>
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-8">
                  Você economiza{" "}
                  <span className="text-gradient-gold">{fmt(savings)}</span>
                </h3>

                <div className="p-8 rounded-xl bg-gold/[0.04] border border-gold/[0.12] mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-3xl font-bold text-gradient-gold font-heading">
                        {savingsPercent}%
                      </p>
                      <p className="text-white/30 text-xs mt-1 uppercase tracking-wider">
                        Menos que no financiamento
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white font-heading">
                        {fmt(financeMonthly - consortiumMonthly)}
                      </p>
                      <p className="text-white/30 text-xs mt-1 uppercase tracking-wider">
                        Economia todo mês
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white font-heading">
                        {fmt(financeTotal - creditValue)}
                      </p>
                      <p className="text-white/30 text-xs mt-1 uppercase tracking-wider">
                        Juros que você evita
                      </p>
                    </div>
                  </div>
                </div>

                {(profile?.catId ?? "imovel") === "imovel" &&
                  profileId === "investidor" && (
                    <div className="p-6 rounded-xl bg-electric/[0.04] border border-electric/[0.12] mb-8">
                      <div className="flex items-start gap-3">
                        <TrendingUp
                          size={18}
                          className="text-electric mt-0.5 shrink-0"
                        />
                        <div>
                          <p className="text-white/60 font-heading font-semibold text-sm mb-1">
                            Renda passiva com esse imóvel
                          </p>
                          <p className="text-white/30 text-sm">
                            No Airbnb (60% ocupação), renda estimada de{" "}
                            <span className="text-electric font-bold">
                              {fmt(airbnbMonthly)}/mês
                            </span>
                            {airbnbMonthly >= consortiumMonthly ? (
                              <span className="text-green-400">
                                {" "}
                                �?? cobre a parcela e ainda gera lucro!
                              </span>
                            ) : (
                              <span>
                                {" "}
                                �?? cobre parte significativa da parcela.
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-5 rounded-xl bg-white/[0.01] border border-white/[0.06] text-center">
                    <p className="text-white/20 text-[10px] uppercase tracking-wider mb-1">
                      Com a economia, daria para
                    </p>
                    <p className="text-white/60 font-heading font-semibold text-sm">
                      {savings > 200000
                        ? "Comprar outro imóvel à vista"
                        : savings > 80000
                          ? "Dar entrada em outro imóvel"
                          : savings > 40000
                            ? "Comprar um carro popular"
                            : "Montar uma reserva de emergência"}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/[0.01] border border-white/[0.06] text-center">
                    <p className="text-white/20 text-[10px] uppercase tracking-wider mb-1">
                      Investindo a economia mensal
                    </p>
                    <p className="text-white/60 font-heading font-semibold text-sm">
                      {fmt((financeMonthly - consortiumMonthly) * months * 1.08)}{" "}
                      em {(months / 12).toFixed(0)} anos
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={prev}
                    className="flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                    Voltar
                  </button>
                  <button
                    onClick={next}
                    className="bg-gradient-gold text-deep px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-2"
                  >
                    Quero minha análise
                    <ArrowRight size={15} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4 �?? TRANSI�?�?O */}
            {step === 4 && (
              <motion.div
                key="transicao"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="p-8 lg:p-12"
              >
                {!sent ? (
                  <>
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle size={18} className="text-green-400" />
                      <p className="text-[10px] text-green-400 uppercase tracking-[0.3em] font-bold">
                        Etapa final �?? Receba sua análise
                      </p>
                    </div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-3">
                      Falta um passo para mudar sua história.
                    </h3>
                    <p className="text-white/30 text-sm mb-10 max-w-lg">
                      Envie sua simulação direto para nossa consultora e receba
                      uma análise personalizada no WhatsApp.
                    </p>

                    {/* Summary */}
                    <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-8">
                      <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-4 font-bold">
                        Resumo da sua simulação
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div>
                          <p className="text-[10px] text-white/15 uppercase tracking-wider">
                            Objetivo
                          </p>
                          <p className="text-white/60 text-sm font-semibold">
                            {profile?.label}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] text-white/15 uppercase tracking-wider">
                            Crédito
                          </p>
                          <p className="text-gold text-sm font-semibold">
                            {fmt(creditValue)}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] text-white/15 uppercase tracking-wider">
                            Parcela
                          </p>
                          <p className="text-green-300 text-sm font-semibold">
                            {fmt(consortiumMonthly)}/mês
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] text-white/15 uppercase tracking-wider">
                            Economia
                          </p>
                          <p className="text-gradient-gold text-sm font-semibold">
                            {fmt(savings)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <input
                        type="text"
                        placeholder="Seu nome (opcional)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex-1 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder:text-white/15 focus:outline-none focus:border-gold/20 transition-colors text-sm"
                      />
                      <button
                        onClick={sendWhatsApp}
                        className="bg-[#25D366] text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-[#20BD5A] transition-colors cursor-pointer flex items-center justify-center gap-3 shrink-0"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Enviar simulação no WhatsApp
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        onClick={prev}
                        className="flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors cursor-pointer"
                      >
                        <ArrowLeft size={14} />
                        Voltar
                      </button>
                      <p className="text-white/15 text-xs">
                        Valores estimados. Correção pelo IPCA.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-16">
                    <CheckCircle
                      size={48}
                      className="text-green-400 mx-auto mb-6"
                    />
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">
                      Simulação enviada!
                    </h3>
                    <p className="text-white/30 text-sm max-w-md mx-auto mb-8">
                      Nossa consultora vai analisar seu cenário e preparar uma
                      proposta personalizada. Respondemos rapidamente.
                    </p>
                    <button
                      onClick={() => {
                        setStep(0);
                        setProfileId("");
                        setName("");
                        setSent(false);
                      }}
                      className="text-gold text-sm font-medium hover:text-gold/80 transition-colors cursor-pointer"
                    >
                      Fazer nova simulação
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

