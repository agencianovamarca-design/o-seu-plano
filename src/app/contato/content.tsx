?"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";
import { saveLead } from "@/lib/save-lead";

export function ContatoPageContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveLead({
      nome: form.name,
      whatsapp: form.phone,
      email: form.email,
      origem: "Formulário de contato",
      assunto: form.subject,
      mensagem: form.message,
    });
    const msg = `Olá! Me chamo ${form.name}.\n\nAssunto: ${form.subject}\n\n${form.message}\n\nMeu email: ${form.email}\nMeu telefone: ${form.phone}`;
    window.open(
      `https://wa.me/5519997485834?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <div className="pt-36 pb-24">
      <section className="max-w-5xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-electric uppercase tracking-widest mb-4">
            Contato
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-light mb-6">
            Fale com quem{" "}
            <span className="text-gradient-gold">entende o jogo.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted text-lg">
            Tire suas dúvidas, peça um diagnóstico ou simplesmente converse com
            a gente. Sem compromisso, sem pressão de vendas.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <AnimateIn>
              <a
                href="https://wa.me/5519997485834"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-light rounded-2xl p-6 flex items-start gap-4 hover:border-green-400/20 transition-all duration-300 cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center shrink-0">
                  <MessageCircle size={22} className="text-green-400" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-light mb-1">
                    WhatsApp
                  </h3>
                  <p className="text-muted text-sm">+1 (716) 939-9340</p>
                  <p className="text-green-400 text-xs mt-1">
                    Resposta rápida
                  </p>
                </div>
              </a>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="glass-light rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-electric" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-light mb-1">
                    Diagnóstico gratuito
                  </h3>
                  <p className="text-muted text-sm">
                    Análise da sua presença digital
                  </p>
                  <p className="text-electric text-xs mt-1">Sem custo, sem pressão</p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="glass-light rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Mail size={22} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-light mb-1">
                    E-mail
                  </h3>
                  <a
                    href="mailto:contato@oseuplano.com"
                    className="text-muted text-sm hover:text-light transition-colors"
                  >
                    contato@oseuplano.com
                  </a>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <a
                href="https://instagram.com/seuplano.ofc"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-light rounded-2xl p-6 flex items-start gap-4 hover:border-gold/20 transition-all duration-300 cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-light mb-1">
                    Instagram
                  </h3>
                  <p className="text-muted text-sm">@seuplano.ofc</p>
                  <p className="text-pink-400 text-xs mt-1">18.6k seguidores</p>
                </div>
              </a>
            </AnimateIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <AnimateIn delay={0.2}>
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-8 lg:p-10"
                >
                  <h2 className="font-heading text-xl font-bold text-light mb-6">
                    Envie sua mensagem
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm text-muted mb-2">
                        Nome completo
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-light placeholder:text-muted/50 focus:outline-none focus:border-gold/30 transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-muted mb-2">
                        E-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-light placeholder:text-muted/50 focus:outline-none focus:border-gold/30 transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm text-muted mb-2">
                        WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-light placeholder:text-muted/50 focus:outline-none focus:border-gold/30 transition-colors"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm text-muted mb-2">
                        Assunto
                      </label>
                      <select
                        id="subject"
                        required
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-gold/30 transition-colors cursor-pointer"
                      >
                        <option value="" className="bg-surface">Selecione</option>
                        <option value="Diagnóstico gratuito da minha presença digital" className="bg-surface">
                          Diagnóstico gratuito
                        </option>
                        <option value="Quero montar minha presença digital do zero" className="bg-surface">
                          Presença digital do zero
                        </option>
                        <option value="Quero e-mail no meu domínio" className="bg-surface">
                          E-mail profissional
                        </option>
                        <option value="Site ou landing page para meu negócio" className="bg-surface">
                          Site / landing page
                        </option>
                        <option value="Gerenciamento de redes sociais" className="bg-surface">
                          Redes sociais
                        </option>
                        <option value="Mentoria estratégica individual" className="bg-surface">
                          Mentoria estratégica
                        </option>
                        <option value="Parceria comercial" className="bg-surface">
                          Parceria comercial
                        </option>
                        <option value="Outro assunto" className="bg-surface">
                          Outro assunto
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm text-muted mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-light placeholder:text-muted/50 focus:outline-none focus:border-gold/30 transition-colors resize-none"
                      placeholder="Como podemos te ajudar?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-gold text-deep px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity duration-200 cursor-pointer flex items-center gap-2"
                  >
                    <Send size={18} />
                    Enviar mensagem
                  </button>
                </form>
              ) : (
                <div className="glass rounded-2xl p-12 text-center">
                  <CheckCircle
                    size={48}
                    className="text-green-400 mx-auto mb-6"
                  />
                  <h2 className="font-heading text-2xl font-bold text-light mb-4">
                    Mensagem enviada!
                  </h2>
                  <p className="text-muted mb-6">
                    Você será redirecionado ao WhatsApp. Nossa equipe responde
                    rapidamente.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="glass px-6 py-3 rounded-xl text-gold font-medium hover:bg-white/10 transition-all duration-200 cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              )}
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
}

