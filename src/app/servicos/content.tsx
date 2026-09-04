"use client";

import { AnimateIn } from "@/components/AnimateIn";
import {
  Mail,
  MapPin,
  Globe,
  Share2,
  Smartphone,
  BarChart3,
  Star,
  Zap,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
} from "lucide-react";

const services = [
  {
    icon: Mail,
    tag: "Fundação",
    title: "E-mail Profissional",
    subtitle: "nome@seudominio.com.br",
    description:
      "Pare de usar @gmail ou @hotmail para falar com clientes. Um e-mail no seu domínio transmite credibilidade imediata — e é a primeira coisa que clientes sérios avaliam antes de fechar negócio.",
    deliverables: [
      "Configuração completa em menos de 24h",
      "Acesso pelo celular, tablet e computador",
      "Assinatura profissional configurada",
      "Manual de uso para sua equipe",
    ],
    highlight: false,
    color: "electric",
  },
  {
    icon: MapPin,
    tag: "Visibilidade",
    title: "Google Meu Negócio",
    subtitle: "Apareça no Maps e na busca",
    description:
      "Quando alguém procura o que você oferece no Google, o seu negócio precisa aparecer. Configuramos seu perfil completo para que você seja encontrado por quem já está pronto para comprar.",
    deliverables: [
      "Perfil verificado e otimizado em até 3 dias",
      "Fotos, categorias e horários configurados",
      "Estratégia para acumular avaliações reais",
      "Monitoramento e orientação pós-entrega",
    ],
    highlight: false,
    color: "electric",
  },
  {
    icon: Share2,
    tag: "Identidade",
    title: "Redes Sociais Estruturadas",
    subtitle: "Bio, visual e primeiros passos",
    description:
      "Instagram, Facebook e LinkedIn configurados com identidade visual consistente, bio que converte e destaques que mostram o que você faz. Sua vitrine digital pronta para atrair.",
    deliverables: [
      "Bio e perfil otimizados para conversão",
      "Identidade visual aplicada (foto, capa, destaques)",
      "Configuração do WhatsApp Business",
      "Guia de linguagem e tom de voz da marca",
    ],
    highlight: false,
    color: "electric",
  },
  {
    icon: Globe,
    tag: "Autoridade",
    title: "Site Profissional",
    subtitle: "Do zero ao ar em até 7 dias",
    description:
      "Um site bem feito é o seu vendedor 24 horas. Estruturamos sua presença online com domínio, hospedagem, conteúdo e tudo funcionando — sem enrolação técnica.",
    deliverables: [
      "Site funcional em até 7 dias úteis",
      "Domínio e hospedagem incluídos ou orientados",
      "Integração com WhatsApp e redes sociais",
      "Acesso total — você é dono de tudo",
    ],
    highlight: false,
    color: "electric",
  },
  {
    icon: Zap,
    tag: "Mais Vendido",
    title: "Kit Presença Digital Completo",
    subtitle: "E-mail + Google + Redes + Site",
    description:
      "A solução completa para quem quer resolver tudo de uma vez. E-mail profissional, Google Meu Negócio, redes sociais estruturadas e site no ar — integrados e com estratégia de conteúdo inclusa.",
    deliverables: [
      "E-mail profissional no domínio",
      "Google Meu Negócio verificado e otimizado",
      "Redes sociais com identidade visual completa",
      "Site funcional + 30 dias de pauta de conteúdo",
    ],
    highlight: true,
    color: "gold",
  },
  {
    icon: BarChart3,
    tag: "Estratégia",
    title: "Conteúdo e Calendário Editorial",
    subtitle: "30 dias de pauta pronta",
    description:
      "Presença digital sem conteúdo é vitrine fechada. Desenvolvemos a pauta dos primeiros 30 dias com o que postar, quando e com qual objetivo — para que você comece a atrair clientes imediatamente.",
    deliverables: [
      "30 dias de pauta de posts e stories",
      "Templates prontos para usar e adaptar",
      "Roteiro de reels e conteúdo em vídeo",
      "Guia de hashtags por nicho",
    ],
    highlight: false,
    color: "electric",
  },
  {
    icon: Smartphone,
    tag: "Gestão",
    title: "E-mail Marketing Profissional",
    subtitle: "Lista, automação e campanhas",
    description:
      "Construa uma lista de clientes que é sua — não do Instagram ou do Google. Configuramos a ferramenta, os formulários de captura e as primeiras sequências para nutrir e vender por e-mail.",
    deliverables: [
      "Configuração de ferramenta de e-mail marketing",
      "Formulário de captura integrado ao seu site",
      "Sequência de boas-vindas automatizada",
      "Modelo para newsletters mensais",
    ],
    highlight: false,
    color: "electric",
  },
  {
    icon: Star,
    tag: "Premium",
    title: "Mentoria Estratégica Individual",
    subtitle: "Sessão 1h — plano personalizado",
    description:
      "Para quem quer clareza total antes de executar. Analisamos sua presença digital atual, identificamos os pontos críticos e montamos um plano de ação feito para o seu negócio específico.",
    deliverables: [
      "Diagnóstico completo da sua presença digital",
      "Plano de ação com prioridades definidas",
      "Comparativo com concorrentes do seu nicho",
      "Relatório PDF exclusivo pós-sessão",
    ],
    highlight: false,
    color: "electric",
  },
];

const differentials = [
  {
    icon: Clock,
    title: "Entrega rápida",
    text: "E-mail em 24h. Google Meu Negócio em 3 dias. Site em 7 dias. Sem esperar meses para ver resultado.",
  },
  {
    icon: Shield,
    title: "Você é dono de tudo",
    text: "100% de acesso a tudo que criamos. Sem dependência, sem reféns. O negócio é seu — a presença digital também.",
  },
  {
    icon: CheckCircle,
    title: "Sem jargão técnico",
    text: "Explicamos cada passo em linguagem clara. Você não precisa entender de tecnologia para ter presença profissional.",
  },
  {
    icon: BarChart3,
    title: "Resultado mensurável",
    text: "Configuramos ferramentas de análise para que você veja, em números, como sua presença digital está performando.",
  },
];

export function ServicosPageContent() {
  return (
    <div className="pt-36 pb-24">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
        <AnimateIn>
          <p className="text-[11px] font-semibold text-gold uppercase tracking-[0.25em] mb-4">
            O que entregamos
          </p>
          <h1 className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-extrabold text-white leading-[0.95] mb-6">
            Presença digital{" "}
            <span className="text-gradient-gold italic">profissional</span>
            <br />
            para negócios.
          </h1>
          <p className="text-white/40 text-lg max-w-2xl leading-relaxed">
            Do e-mail ao site, do Google ao Instagram — estruturamos tudo que faz
            um negócio parecer profissional no digital. Rápido, sem jargão técnico
            e com acesso total nas suas mãos.
          </p>
        </AnimateIn>
      </section>

      {/* Services grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateIn key={service.title} delay={i * 0.07}>
                <div
                  className={`relative flex flex-col h-full rounded-3xl border p-8 transition-all duration-300 ${
                    service.highlight
                      ? "bg-gold/[0.04] border-gold/[0.20] hover:border-gold/40"
                      : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]"
                  }`}
                >
                  {/* Tag */}
                  <div className="mb-5">
                    <span
                      className={`inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                        service.highlight
                          ? "bg-gold/10 text-gold border-gold/20"
                          : "bg-electric/10 text-electric border-electric/20"
                      }`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                        service.highlight ? "bg-gold/10" : "bg-white/[0.04]"
                      }`}
                    >
                      <Icon
                        size={22}
                        className={service.highlight ? "text-gold" : "text-white/40"}
                      />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-white text-lg leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-white/30 text-xs mt-1 uppercase tracking-wider">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {service.deliverables.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <div
                          className={`w-1 h-1 rounded-full mt-2 shrink-0 ${
                            service.highlight ? "bg-gold" : "bg-electric"
                          }`}
                        />
                        <span className="text-white/40 text-sm leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="border-t border-white/[0.06] pt-5 mt-auto">
                    <a
                      href="https://wa.me/5519997485834"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        service.highlight
                          ? "bg-gradient-gold text-deep hover:opacity-90"
                          : "border border-white/[0.10] text-white/50 hover:border-white/20 hover:text-white/80"
                      }`}
                    >
                      Solicitar orçamento
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </section>

      {/* Differentials */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <AnimateIn className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-white">
            Por que o{" "}
            <span className="text-gradient-gold">O Seu Plano?</span>
          </h2>
          <p className="text-white/40 mt-3 text-lg max-w-xl mx-auto">
            Existem outras agências. O que nos separa é a forma como entregamos.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentials.map((d, i) => (
            <AnimateIn key={d.title} delay={i * 0.1}>
              <div className="glass-light rounded-2xl p-8 h-full flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                  <d.icon size={22} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white mb-2">
                    {d.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{d.text}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Process strip */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <AnimateIn>
          <div className="glass rounded-2xl p-8 lg:p-10">
            <p className="text-[11px] font-semibold text-electric uppercase tracking-[0.22em] mb-6 text-center">
              Como funciona
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { step: "01", label: "Diagnóstico gratuito", sub: "15 minutos pelo WhatsApp" },
                { step: "02", label: "Plano personalizado", sub: "Feito para o seu nicho" },
                { step: "03", label: "Execução rápida", sub: "Do zero ao ar em 7 dias" },
                { step: "04", label: "Acesso total", sub: "Tudo nas suas mãos" },
              ].map((s) => (
                <div key={s.step}>
                  <div className="text-3xl font-extrabold text-gradient-gold font-heading mb-2">
                    {s.step}
                  </div>
                  <p className="text-white font-semibold text-sm leading-snug mb-1">
                    {s.label}
                  </p>
                  <p className="text-white/30 text-xs">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <AnimateIn>
          <div className="glass rounded-2xl p-10 glow-gold">
            <Shield size={32} className="text-gold mx-auto mb-4" />
            <h2 className="font-heading text-2xl font-bold text-white mb-3">
              Comece pelo diagnóstico{" "}
              <span className="text-gradient-gold">gratuito.</span>
            </h2>
            <p className="text-white/40 mb-8 max-w-lg mx-auto leading-relaxed">
              Em 15 minutos pelo WhatsApp, identificamos exatamente o que está
              impedindo seu negócio de parecer profissional no digital — e qual
              serviço faz sentido para o seu momento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5519997485834"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-gold text-deep px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              >
                Quero meu diagnóstico gratuito
              </a>
              <a
                href="/produtos"
                className="glass px-8 py-4 rounded-xl font-medium text-gold hover:bg-white/10 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                Ver materiais e preços
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}

