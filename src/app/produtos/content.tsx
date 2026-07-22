"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { BookOpen, FileText, Star, ArrowRight, Download, ShoppingCart } from "lucide-react";

const products = [
  {
    id: "ebook-gratuito",
    badge: "GRATUITO",
    badgeColor: "bg-electric/10 text-electric border-electric/20",
    icon: Download,
    title: "O Guia do Consórcio Inteligente",
    subtitle: "E-book — 5 páginas",
    description:
      "Descubra por que 90% das pessoas pagam mais do que deveriam na aquisição de imóveis e veículos. Com dados reais e comparativos que o banco não quer que você veja.",
    features: [
      "Comparativo consórcio vs financiamento com números reais",
      "Como calcular o custo total de um financiamento",
      "Estratégia de lance para contemplação antecipada",
      "Simulações com créditos de R$ 300k a R$ 1 milhão",
    ],
    price: "Grátis",
    priceNote: "Baixe agora sem compromisso",
    cta: "Baixar grátis",
    hotmartUrl: "/obrigado",
    isExternal: false,
    highlight: false,
  },
  {
    id: "ebook-premium",
    badge: "MAIS VENDIDO",
    badgeColor: "bg-gold/10 text-gold border-gold/20",
    icon: BookOpen,
    title: "Manual Completo do Consórcio para Investidores",
    subtitle: "E-book Premium — 40+ páginas",
    description:
      "O guia definitivo para quem quer usar o consórcio como ferramenta de construção de patrimônio. Do planejamento à contemplação, passo a passo.",
    features: [
      "Estratégias avançadas de lance livre e fixo",
      "Como usar FGTS como lance em consórcios de imóveis",
      "Portfólio de consórcio: múltiplas cotas simultaneamente",
      "Consórcio + Airbnb: construção de renda passiva",
      "Checklist completo: o que verificar antes de assinar",
      "Modelos de simulação com planilhas editáveis",
    ],
    price: "R$ 47,00",
    priceNote: "Acesso vitalício + atualizações",
    cta: "Comprar na Hotmart",
    hotmartUrl: "LINK_HOTMART_AQUI",
    isExternal: true,
    highlight: true,
  },
  {
    id: "consultoria",
    badge: "EXCLUSIVO",
    badgeColor: "bg-white/5 text-white/50 border-white/10",
    icon: Star,
    title: "Análise Estratégica Personalizada",
    subtitle: "Consultoria individual — 60 min",
    description:
      "Sessão individual de análise do seu perfil financeiro e definição do melhor plano de consórcio para o seu objetivo. Inclui relatório personalizado.",
    features: [
      "Análise completa do seu perfil financeiro",
      "Simulações personalizadas para seu objetivo",
      "Estratégia de contemplação definida para seu caso",
      "Relatório PDF exclusivo pós-sessão",
    ],
    price: "R$ 197,00",
    priceNote: "Sessão via WhatsApp ou videoconferência",
    cta: "Contratar na Hotmart",
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
            Conhecimento que{" "}
            <span className="text-gradient-gold italic">transforma</span>
            <br />
            decisões.
          </h1>
          <p className="text-white/40 text-lg max-w-2xl leading-relaxed">
            Materiais desenvolvidos por especialistas em consórcio para quem
            quer tomar decisões financeiras com dados reais — não com achismo.
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
                        product.highlight
                          ? "bg-gold/10"
                          : "bg-white/[0.04]"
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
                          Link Hotmart em breve
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
