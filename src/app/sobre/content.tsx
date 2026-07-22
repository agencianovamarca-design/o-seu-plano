"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { CountUp } from "@/components/CountUp";
import { BookOpen, Eye, Shield, Target, Heart, Users } from "lucide-react";

export function AboutPageContent() {
  return (
    <div className="pt-36 pb-24">
      {/* Hero with Avatar */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateIn>
            <span className="inline-block text-xs font-semibold text-gold uppercase tracking-widest mb-4">
              Nossa história
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-light mb-6">
              Entenda o <span className="text-gradient-gold">jogo</span> antes
              de entrar.
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              O Seu Plano nasceu de uma inconformidade: por que tantas pessoas
              pagam três imóveis para morar em um? Por que o sistema financeiro
              lucra com a desinformação? Decidimos mudar isso.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/[0.06]">
              <Image
                src="/images/avatar-strategy.jpg"
                alt="Consultora O Seu Plano — Inteligência Estratégica"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/50 via-transparent to-transparent" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimateIn>
            <div className="glass rounded-2xl p-10 h-full">
              <Target size={32} className="text-gold mb-6" />
              <h2 className="font-heading text-2xl font-bold text-light mb-4">
                Nossa missão
              </h2>
              <p className="text-muted leading-relaxed">
                Educar consumidores e transformar o mercado de aquisição de
                bens móveis e imóveis de forma coesa e eficaz, gerando
                segurança e confiabilidade. Queremos que cada pessoa entenda
                suas opções antes de tomar a decisão que vai impactar as
                próximas décadas da sua vida.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <div className="glass rounded-2xl p-10 h-full">
              <Eye size={32} className="text-electric mb-6" />
              <h2 className="font-heading text-2xl font-bold text-light mb-4">
                Nossa visão
              </h2>
              <p className="text-muted leading-relaxed">
                Um Brasil onde ninguém paga juros abusivos por falta de
                informação. Onde consórcio não é tabu, mas sim a escolha
                inteligente. Onde profissionais do mercado estão comprometidos
                com o plano do cliente, não com a própria comissão.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <AnimateIn className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-light">
            Nossos <span className="text-gradient-gold">valores</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              title: "Educação acima de tudo",
              text: "Acreditamos que informação é poder. Antes de vender, educamos.",
            },
            {
              icon: Shield,
              title: "Transparência radical",
              text: "Sem letras miúdas, sem pegadinhas. Os números falam por si.",
            },
            {
              icon: Heart,
              title: "Compromisso genuíno",
              text: "Nosso interesse é no seu plano, não na nossa comissão.",
            },
            {
              icon: Users,
              title: "Comunidade",
              text: "Construímos uma rede de pessoas que entenderam o jogo e querem ajudar outras.",
            },
            {
              icon: Target,
              title: "Resultado real",
              text: "Não prometemos milagres. Mostramos os caminhos e deixamos os números falarem.",
            },
            {
              icon: Eye,
              title: "Verdade inconveniente",
              text: "A verdade sempre parece ofensiva no começo. Mas é ela que liberta.",
            },
          ].map((value, i) => (
            <AnimateIn key={value.title} delay={i * 0.1}>
              <div className="glass-light rounded-2xl p-8 h-full text-center">
                <value.icon
                  size={28}
                  className="text-gold mx-auto mb-4"
                />
                <h3 className="font-heading font-semibold text-light mb-2">
                  {value.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {value.text}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Why our partner */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <AnimateIn>
          <div className="glass rounded-2xl p-10 lg:p-12 glow-gold">
            <h2 className="font-heading text-2xl font-bold text-light mb-6 text-center">
              Por que escolhemos{" "}
              <span className="text-gradient-gold">essa administradora</span>
            </h2>
            <p className="text-muted leading-relaxed text-center max-w-2xl mx-auto mb-10">
              Pesquisamos todas as administradoras do mercado e escolhemos a que
              mais se alinha com nossos valores de transparência, grupos menores
              e chances reais para o cliente.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: 75, suffix: " anos", label: "de mercado sólido" },
                {
                  value: 2000,
                  suffix: "",
                  label: "máximo de participantes por grupo",
                },
                { value: 120, suffix: "", label: "menor grupo disponível" },
                { value: 0, suffix: " juros", label: "apenas taxa admin" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gradient-gold font-heading">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <AnimateIn>
          <h2 className="font-heading text-3xl font-bold text-light mb-4">
            Venha fazer parte dessa{" "}
            <span className="text-gradient-gold">mudança.</span>
          </h2>
          <p className="text-muted mb-8">
            Estamos aqui para te ajudar a entender o jogo e tomar a melhor
            decisão.
          </p>
          <a
            href="https://wa.me/17169399340"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-gold text-deep px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            Fale com a gente
          </a>
        </AnimateIn>
      </section>
    </div>
  );
}
