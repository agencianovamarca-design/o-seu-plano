"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

type FormData = {
  nome: string;
  wa: string;
  nicho: string;
  cidade: string;
  email: string;
  redes: string;
  site: string;
  gmn: string;
  dores: string[];
  urgencia: string;
  budget: string;
  origem: string;
};

const empty: FormData = {
  nome: "", wa: "", nicho: "", cidade: "",
  email: "", redes: "", site: "", gmn: "",
  dores: [], urgencia: "", budget: "", origem: "",
};

const niches = [
  "Saúde (médico, dentista, psicólogo)",
  "Beleza (salão, estética, manicure)",
  "Alimentação (restaurante, delivery, bar)",
  "Jurídico (advogado, contador, cartório)",
  "Construção / reforma / arquitetura",
  "Educação / coaching / cursos",
  "Comércio / loja física ou online",
  "Fitness / academia / personal trainer",
  "Imóveis / corretagem",
  "Serviços gerais / MEI",
  "Outro",
];

function RadioCard({ value, label, selected, onSelect }: { value: string; label: string; selected: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-200 cursor-pointer ${
        selected
          ? "border-gold/40 bg-gold/[0.06] text-white"
          : "border-white/[0.06] bg-white/[0.02] text-white/40 hover:border-white/[0.14] hover:text-white/60"
      }`}
    >
      <span className="flex items-center gap-3">
        <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${
          selected ? "border-gold" : "border-white/20"
        }`}>
          {selected && <span className="w-2 h-2 rounded-full bg-gold block" />}
        </span>
        {label}
      </span>
    </button>
  );
}

function CheckCard({ value, label, selected, onToggle }: { value: string; label: string; selected: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-200 cursor-pointer ${
        selected
          ? "border-electric/40 bg-electric/[0.06] text-white"
          : "border-white/[0.06] bg-white/[0.02] text-white/40 hover:border-white/[0.14] hover:text-white/60"
      }`}
    >
      <span className="flex items-center gap-3">
        <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all duration-200 ${
          selected ? "border-electric bg-electric/20" : "border-white/20"
        }`}>
          {selected && <span className="text-electric text-[10px] font-bold leading-none">�??</span>}
        </span>
        {label}
      </span>
    </button>
  );
}

function Field({ label, children, error }: { label: string; children: React.ReactNode; error?: string }) {
  return (
    <div>
      <label className="block text-xs text-white/30 uppercase tracking-[0.15em] mb-2">{label}</label>
      {children}
      {error && <p className="text-red-400/80 text-xs mt-1.5">{error}</p>}
    </div>
  );
}

const inputClass = "w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-white/15 focus:outline-none focus:border-gold/30 transition-colors text-sm";

export function DiagnosticoContent() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData | "dores_min", string>>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  function set(field: keyof FormData, value: string) {
    setData((d) => ({ ...d, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  }

  function toggleDore(v: string) {
    setData((d) => ({
      ...d,
      dores: d.dores.includes(v) ? d.dores.filter((x) => x !== v) : [...d.dores, v],
    }));
    setErrors((e) => ({ ...e, dores_min: "" }));
  }

  function validateStep(s: number): boolean {
    const errs: typeof errors = {};
    if (s === 0) {
      if (!data.nome.trim()) errs.nome = "Informe seu nome";
      if (!data.wa.trim()) errs.wa = "Informe seu WhatsApp";
      if (!data.nicho) errs.nicho = "Selecione o seu nicho";
    }
    if (s === 1) {
      if (!data.email) errs.email = "Selecione uma opção";
      if (!data.redes) errs.redes = "Selecione uma opção";
      if (!data.site) errs.site = "Selecione uma opção";
    }
    if (s === 2) {
      if (data.dores.length === 0) errs.dores_min = "Selecione ao menos uma dor";
      if (!data.urgencia) errs.urgencia = "Selecione uma opção";
      if (!data.budget) errs.budget = "Selecione uma opção";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function next() {
    if (!validateStep(step)) return;
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submit() {
    if (!validateStep(2)) { setStep(2); return; }
    setSubmitting(true);
    try {
      await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch { /* Sheets webhook is best-effort */ }

    const dores = data.dores.length ? data.dores.join(", ") : "Não informado";
    const msg =
`�?�� *Diagnóstico Digital �?? O Seu Plano*

�??� *${data.nome}*
�??� WhatsApp: ${data.wa}
�?�� Nicho: ${data.nicho}
�??� Cidade: ${data.cidade || "�??"}

*Situação atual:*
�?� E-mail: ${data.email || "�??"}
�?� Redes sociais: ${data.redes || "�??"}
�?� Site: ${data.site || "�??"}
�?� Google Maps: ${data.gmn || "�??"}

*Objetivos:*
�?� Dores: ${dores}
�?� Urgência: ${data.urgencia || "�??"}
�?� Budget: ${data.budget || "�??"}
�?� Como chegou: ${data.origem || "�??"}`;

    window.open(`https://wa.me/5519997485834?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitting(false);
    setSent(true);
  }

  const stepLabels = ["Identificação", "Situação atual", "Objetivos", "Confirmar"];

  return (
    <div className="pt-36 pb-24 min-h-screen">
      <div className="max-w-[640px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[11px] font-semibold text-gold uppercase tracking-[0.28em] mb-4">
            Gratuito · 2 minutos
          </p>
          <h1 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white leading-[0.95] mb-4">
            Diagnóstico{" "}
            <span className="text-gradient-gold italic">digital</span>
            <br />
            do seu negócio.
          </h1>
          <p className="text-white/35 text-sm leading-relaxed max-w-md">
            Responda 12 perguntas rápidas e descubra exatamente o que está impedindo sua empresa de atrair clientes no digital.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {stepLabels.map((label, i) => (
              <span
                key={label}
                className={`text-[10px] font-medium uppercase tracking-wider ${
                  i === step ? "text-gold" : i < step ? "text-white/40" : "text-white/15"
                }`}
              >
                {label}
              </span>
            ))}
          </div>
          <div className="h-0.5 bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-gold/70 rounded-full"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
              <h2 className="font-heading font-bold text-white text-2xl mb-3">
                Diagnóstico enviado!
              </h2>
              <p className="text-white/35 text-sm max-w-xs mx-auto mb-6 leading-relaxed">
                O WhatsApp abre com tudo preenchido. Se não abriu automaticamente, use o botão abaixo.
              </p>
              <button
                onClick={submit}
                className="inline-flex items-center gap-2 bg-gradient-gold text-deep px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
              >
                Abrir WhatsApp
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ) : (
            <>
              {/* Step 0 �?? Identificação */}
              {step === 0 && (
                <motion.div key="s0" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <Field label="Seu nome" error={errors.nome}>
                        <input className={inputClass} type="text" placeholder="Ex: Carlos Lima" value={data.nome} onChange={(e) => set("nome", e.target.value)} />
                      </Field>
                      <Field label="WhatsApp" error={errors.wa}>
                        <input className={inputClass} type="tel" placeholder="(00) 00000-0000" value={data.wa} onChange={(e) => set("wa", e.target.value)} />
                      </Field>
                    </div>
                    <Field label="Nicho / setor" error={errors.nicho}>
                      <select className={inputClass} value={data.nicho} onChange={(e) => set("nicho", e.target.value)}>
                        <option value="">Selecione o seu nicho...</option>
                        {niches.map((n) => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </Field>
                    <Field label="Cidade e estado (opcional)">
                      <input className={inputClass} type="text" placeholder="Ex: Recife - PE" value={data.cidade} onChange={(e) => set("cidade", e.target.value)} />
                    </Field>
                  </div>
                </motion.div>
              )}

              {/* Step 1 �?? Situação atual */}
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
                  <div className="space-y-6">
                    <Field label="Qual e-mail você usa para o negócio?" error={errors.email}>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {["@gmail.com", "@hotmail / @outlook", "Domínio próprio (@minhaempresa.com.br)", "Não uso e-mail"].map((v) => (
                          <RadioCard key={v} value={v} label={v} selected={data.email === v} onSelect={() => set("email", v)} />
                        ))}
                      </div>
                    </Field>
                    <Field label="Como estão suas redes sociais?" error={errors.redes}>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {["Ativo e com estratégia", "Ativo mas sem postagens", "Perfil básico sem uso", "Não tenho perfil"].map((v) => (
                          <RadioCard key={v} value={v} label={v} selected={data.redes === v} onSelect={() => set("redes", v)} />
                        ))}
                      </div>
                    </Field>
                    <Field label="Tem site ou landing page?" error={errors.site}>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {["Sim, funciona bem", "Sim, mas não converte", "Não tenho site", "Em construção"].map((v) => (
                          <RadioCard key={v} value={v} label={v} selected={data.site === v} onSelect={() => set("site", v)} />
                        ))}
                      </div>
                    </Field>
                    <Field label="Aparece no Google Maps?">
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {["Sim, bem configurado", "Sim, mas incompleto", "Não apareço", "Não sei verificar"].map((v) => (
                          <RadioCard key={v} value={v} label={v} selected={data.gmn === v} onSelect={() => set("gmn", v)} />
                        ))}
                      </div>
                    </Field>
                  </div>
                </motion.div>
              )}

              {/* Step 2 �?? Objetivos */}
              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
                  <div className="space-y-6">
                    <Field label="Quais são suas principais dores? (pode marcar mais de uma)" error={errors.dores_min}>
                      <div className="space-y-2 mt-1">
                        {[
                          "Atrair mais clientes novos",
                          "Parecer mais profissional que a concorrência",
                          "Vender mais pelo Instagram / redes",
                          "Aparecer no Google quando me pesquisarem",
                          "Criar um funil de vendas e capturar leads",
                          "Ter e-mail no domínio próprio",
                          "Estruturar meu WhatsApp Business",
                          "Criar produtos digitais para gerar caixa",
                        ].map((v) => (
                          <CheckCard key={v} value={v} label={v} selected={data.dores.includes(v)} onToggle={() => toggleDore(v)} />
                        ))}
                      </div>
                    </Field>
                    <Field label="Qual a urgência?" error={errors.urgencia}>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {["Agora �?? preciso resolver isso", "Próximo mês", "Estou só explorando", "Depende do investimento"].map((v) => (
                          <RadioCard key={v} value={v} label={v} selected={data.urgencia === v} onSelect={() => set("urgencia", v)} />
                        ))}
                      </div>
                    </Field>
                    <Field label="Quanto pode investir por mês?" error={errors.budget}>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {["Até R$ 97 (kit digital)", "R$ 97 �?? 500 (serviço)", "Acima de R$ 500", "Quero a mentoria (R$ 197)"].map((v) => (
                          <RadioCard key={v} value={v} label={v} selected={data.budget === v} onSelect={() => set("budget", v)} />
                        ))}
                      </div>
                    </Field>
                    <Field label="Como nos encontrou? (opcional)">
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {["Instagram", "Google", "Indicação de amigo", "WhatsApp / grupo"].map((v) => (
                          <RadioCard key={v} value={v} label={v} selected={data.origem === v} onSelect={() => set("origem", v)} />
                        ))}
                      </div>
                    </Field>
                  </div>
                </motion.div>
              )}

              {/* Step 3 �?? Revisão */}
              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden mb-6">
                    {/* Header section */}
                    <div className="border-b border-white/[0.06] px-6 py-5">
                      <p className="text-[10px] font-semibold text-gold uppercase tracking-[0.2em] mb-1">Diagnóstico de</p>
                      <h2 className="font-heading font-bold text-white text-xl">{data.nome}</h2>
                      <p className="text-white/30 text-sm">{data.wa} · {data.nicho}{data.cidade ? ` · ${data.cidade}` : ""}</p>
                    </div>

                    {/* Situação */}
                    <div className="border-b border-white/[0.06] px-6 py-5">
                      <p className="text-[10px] font-semibold text-white/25 uppercase tracking-[0.2em] mb-3">Situação atual</p>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                        {[
                          ["E-mail", data.email],
                          ["Redes sociais", data.redes],
                          ["Site", data.site],
                          ["Google Maps", data.gmn || "�??"],
                        ].map(([k, v]) => (
                          <div key={k}>
                            <p className="text-white/25 text-xs">{k}</p>
                            <p className="text-white/60 text-sm font-medium">{v}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Objetivos */}
                    <div className="px-6 py-5">
                      <p className="text-[10px] font-semibold text-white/25 uppercase tracking-[0.2em] mb-3">Objetivos</p>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-4">
                        {[
                          ["Urgência", data.urgencia],
                          ["Budget", data.budget],
                          ["Origem", data.origem || "�??"],
                        ].map(([k, v]) => (
                          <div key={k}>
                            <p className="text-white/25 text-xs">{k}</p>
                            <p className="text-white/60 text-sm font-medium">{v}</p>
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-white/25 text-xs mb-2">Dores identificadas</p>
                        <div className="flex flex-wrap gap-1.5">
                          {data.dores.map((d) => (
                            <span key={d} className="text-[11px] px-2.5 py-1 rounded-full border border-electric/20 text-electric/70 bg-electric/[0.04]">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/20 text-xs text-center mb-4">
                    Ao confirmar, o WhatsApp abrirá com esses dados já preenchidos �?? e a gente entra em contato com o plano de ação.
                  </p>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>

        {/* Navigation */}
        {!sent && (
          <div className={`flex items-center mt-8 ${step > 0 ? "justify-between" : "justify-end"}`}>
            {step > 0 && (
              <button
                onClick={back}
                className="border border-white/[0.1] px-6 py-3 rounded-full text-sm font-medium text-white/40 hover:text-white/70 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                �?� Voltar
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={next}
                className="bg-gradient-gold text-deep px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-2"
              >
                Próximo
                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={submit}
                disabled={submitting}
                className="bg-gradient-gold text-deep px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {submitting ? "Enviando..." : "Enviar diagnóstico"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

