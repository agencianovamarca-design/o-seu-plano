"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { BookOpen, ArrowRight, CheckCircle, Shield } from "lucide-react";

export function LeadCaptureSection() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) return;

    const link = document.createElement("a");
    link.href = "/downloads/ebook-o-seu-plano.pdf";
    link.download = "O-Seu-Plano-Ebook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const msg = `Novo lead do e-book:\n• Nome: ${name}\n• WhatsApp: ${whatsapp}`;
    window.open(
      `https://wa.me/17169399340?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    setSent(true);
  };

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <div className="rounded-3xl overflow-hidden border border-gold/[0.12] bg-gold/[0.02]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left - Content */}
            <div className="p-10 lg:p-14">
              <AnimateIn>
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  <BookOpen size={28} className="text-gold" />
                </div>
                <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-4">
                  E-book grátis:{" "}
                  <span className="text-gradient-gold">
                    Entenda o Jogo Antes de Entrar
                  </span>
                </h2>
                <p className="text-white/35 text-sm leading-relaxed mb-6">
                  Tudo que você precisa saber sobre consórcio em um guia direto
                  e sem enrolação. Os números que o banco não quer que você veja.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Comparativo real: consórcio vs financiamento",
                    "Como funciona o sorteio manual",
                    "Estratégias de lance para ser contemplado",
                    "Checklist para escolher a administradora certa",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-white/30 text-sm"
                    >
                      <CheckCircle
                        size={14}
                        className="text-gold/60 mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-white/15 text-xs">
                  <Shield size={12} />
                  100% gratuito. Sem spam.
                </div>
              </AnimateIn>
            </div>

            {/* Right - Form */}
            <div className="p-10 lg:p-14 bg-white/[0.01]">
              <AnimateIn delay={0.15}>
                {!sent ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-heading text-lg font-bold text-white mb-2">
                      Receba o e-book agora
                    </h3>
                    <p className="text-white/25 text-sm mb-6">
                      Preencha e o download começa automaticamente.
                    </p>
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="block text-xs text-white/25 uppercase tracking-wider mb-2"
                      >
                        Seu nome
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Como podemos te chamar?"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/15 focus:outline-none focus:border-gold/30 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lead-whatsapp"
                        className="block text-xs text-white/25 uppercase tracking-wider mb-2"
                      >
                        Seu WhatsApp
                      </label>
                      <input
                        id="lead-whatsapp"
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="(00) 00000-0000"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/15 focus:outline-none focus:border-gold/30 transition-colors text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-gold text-deep py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2"
                    >
                      Quero meu e-book grátis
                      <ArrowRight size={16} />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle
                      size={40}
                      className="text-green-400 mx-auto mb-4"
                    />
                    <p className="font-heading font-bold text-white text-lg mb-2">
                      Download iniciado!
                    </p>
                    <p className="text-white/30 text-sm mb-6">
                      Se não iniciou automaticamente, clique abaixo:
                    </p>
                    <a
                      href="/downloads/ebook-o-seu-plano.pdf"
                      download="O-Seu-Plano-Ebook.pdf"
                      className="inline-flex items-center gap-2 bg-gradient-gold text-deep px-6 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      <ArrowRight size={14} />
                      Baixar e-book
                    </a>
                  </div>
                )}
              </AnimateIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
