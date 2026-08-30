"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { BookOpen, Zap, Star, ArrowRight, Download, ShoppingCart } from "lucide-react";

const products = [
  {
    id: "ebook-gratuito",
    badge: "GRATUITO",
    badgeColor: "bg-electric/10 text-electric border-electric/20",
    icon: Download,
    title: "7 Erros que Fazem Sua Empresa Perder Clientes Online",
    subtitle: "E-book gratuito — guia prático",
    description:
      "Descubra os erros mais comuns que fazem empresas e profissionais liberais perderem credibilidade — e clientes — antes mesmo de ter a primeira conversa.",
    features: [
      "Por que @gmail.com afasta clientes sérios",
      "O que uma bio ruim no Instagram comunica sobre seu negócio",
      "Como a falta de site faz você perder para a concorrência",
      "Checklist: sua empresa está pronta para o digital?",
    ],
    price: "Grátis",
    priceNote: "Baixe agora sem compromisso",
    cta: "Baixar grátis",
    hotmartUrl: "/obrigado",
    isExternal: false,
    highlight: false,
  },
  {
    id: "kit-presenca-digital",
    badge: "MAIS VENDIDO",
    badgeColor: "bg-gold/10 text-gold border-gold/20",
    icon: Zap,
    title: "Kit Presença Digital Completo",
    subtitle: "Guia passo a passo — acesso vitalício",
    description:
      "O guia definitivo para qualquer empresa ou profissional ter presença digital profissional do zero. Do e-mail ao Google Meu Negócio, passo a passo.",
    features: [
      "Como ter e-mail no seu domínio em menos de 24h",
      "Google Meu Negócio: configuração completa para aparecer no Maps",
      "Bio e perfil do Instagram que converte visitante em cliente",
      "Roteiro de conteúdo para os primeiros 30 dias",
      "Como usar WhatsApp Business de forma profissional",
      "Templates prontos para stories, posts e mensagens",
    ],
    price: "R$ 97,00",
    priceNote: "Acesso vitalício + atualizações",
    cta: "Comprar na Hotmart",
    hotmartUrl: "LINK_HOTMART_AQUI",
    isExternal: true,
    highlight: true,
  },
  {
    id: "mentoria-digital",
    badge: "EXCLUSIVO",
    badgeColor: "bg-white/5 text-white/50 border-white/10",
    icon: Star,
    title: "Mentoria Estratégica Individual",
    subtitle: "Sessão 1h — diagnóstico personalizado",
    description:
      "Sessão individual de análise da sua presença digital atual e montagem do plano de ação personalizado para o seu negócio específico.",
    features: [
      "Diagnóstico completo da sua presença digital atual",
      "Plano de ação prático e realista para o seu nicho",
      "Definição das prioridades: o que resolver primeiro",
      "Relatório PDF exclusivo pós-sessão com todos os passos",
    ],
    price: "R$ 197,00",
    priceNote: "Via WhatsApp ou videoconferência",
    cta: "Agendar na Hotmart",
    hotmartUrl: "LINK_HOTMART_AQUI",
    isExternal: true,
    highlight: false,
  },
];

export function ProdutosContent() {
  return (
    <div className="pt-36 pb-24">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
        <AnimateIn>
          <p className="text-[11px] font-semibold text-gold uppercase tracking-[0.25em] mb-4">
            Materiais & Serviços
          </p>
          <h1 className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-extrabold text-white leading-[0.95] mb-6">
            Ferramentas que{" "}
            <span className="text-gradient-gold italic">transformam</span>
            <br />
            sua presença.
          </h1>
          <p className="text-white/40 text-lg max-w-2xl leading-relaxed">
            Do guia gratuito à mentoria individual — escolha o que faz sentido
            para o momento do seu negócio e comece a parecer profissional hoje.
          </p>
        </AnimateIn>
      </div>

      {/* Products grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <AnimateIn key={product.id} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col h-full rounded-3xl border p-8 transition-all duration-300 ${
                    product.highlight
                      ? "bg-gold/[0.04] border-gold/[0.20] hover:border-gold/40"
                      : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]"
                  }`}
                >
                  {/* Badge */}
                  <div className="mb-6">
                    <span
                      className={`inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${product.badgeColor}`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                        product.highlight ? "bg-gold/10" : "bg-white/[0.04]"
                      }`}
                    >
                      <Icon
                        size={22}
                        className={product.highlight ? "text-gold" : "text-white/40"}
                      />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-white text-lg leading-tight">
                        {product.title}
                      </h2>
                      <p className="text-white/30 text-xs mt-1 uppercase tracking-wider">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {product.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <div
                          className={`w-1 h-1 rounded-full mt-2 shrink-0 ${
                            product.highlight ? "bg-gold" : "bg-electric"
                          }`}
                        />
                        <span className="text-white/40 text-sm leading-snug">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="border-t border-white/[0.06] pt-6 mt-auto">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span
                        className={`font-heading font-extrabold text-2xl ${
                          product.highlight ? "text-gold" : "text-white"
                        }`}
                      >
                        {product.price}
                      </span>
                    </div>
                    <p className="text-white/25 text-xs mb-5">
                      {product.priceNote}
                    </p>

                    {product.hotmartUrl === "LINK_HOTMART_AQUI" ? (
                      <div className="flex flex-col gap-2">
                        <button
                          disabled
                          className="w-full flex items-center justify-center gap-2 bg-white/[0.04] border border-white/[0.08] text-white/30 px-6 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider cursor-not-allowed"
                        >
                          <ShoppingCart size={16} />
                          {product.cta}
                        </button>
                        <p className="text-center text-[10px] text-white/20 uppercase tracking-wider">
                          Link em breve — fale pelo WhatsApp
                        </p>
                      </div>
                    ) : (
                      <a
                        href={product.hotmartUrl}
                        target={product.isExternal ? "_blank" : "_self"}
                        rel={product.isExternal ? "noopener noreferrer" : undefined}
                        className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                          product.highlight
                            ? "bg-gradient-gold text-deep hover:opacity-90"
                            : "border border-electric/30 text-electric hover:bg-electric/10"
                        }`}
                      >
                        {product.highlight ? (
                          <ShoppingCart size={16} />
                        ) : (
                          <Download size={16} />
                        )}
                        {product.cta}
                        {product.isExternal && <ArrowRight size={14} />}
                      </a>
                    )}
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        {/* Bottom note */}
        <AnimateIn>
          <div className="mt-16 text-center">
            <p className="text-white/20 text-sm">
              Pagamentos processados com segurança pela{" "}
              <span className="text-white/40 font-semibold">Hotmart</span>.
              Garantia de 7 dias em todos os produtos pagos.
            </p>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
