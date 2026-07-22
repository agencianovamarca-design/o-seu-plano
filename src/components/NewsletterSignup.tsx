"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterSignup({
  title = "Não perca nenhum artigo novo",
  description = "Receba no seu e-mail assim que publicarmos um post novo. Sem spam, cancele quando quiser.",
  compact = false,
}: {
  title?: string;
  description?: string;
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className={`flex items-center gap-3 text-sm text-white/60 ${
          compact ? "" : "justify-center py-6"
        }`}
      >
        <CheckCircle size={18} className="text-gold shrink-0" />
        Inscrito! Você vai receber os próximos artigos por e-mail.
      </div>
    );
  }

  return (
    <div className={compact ? "" : "text-center"}>
      {!compact && (
        <>
          <h3 className="font-heading text-lg font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-white/30 text-sm mb-6 max-w-md mx-auto">
            {description}
          </p>
        </>
      )}
      <form
        onSubmit={handleSubmit}
        className={`flex ${
          compact ? "flex-col sm:flex-row" : "flex-col sm:flex-row justify-center"
        } gap-3`}
      >
        <div
          className={`relative ${compact ? "flex-1" : "w-full sm:w-80"}`}
        >
          <Mail
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-full pl-11 pr-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/30 transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-gradient-gold text-deep px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 shrink-0"
        >
          {status === "loading" ? "Enviando..." : "Quero receber"}
          {status !== "loading" && <ArrowRight size={14} />}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-400/70 text-xs mt-3">
          Não deu para cadastrar agora. Tenta de novo em instantes.
        </p>
      )}
    </div>
  );
}
