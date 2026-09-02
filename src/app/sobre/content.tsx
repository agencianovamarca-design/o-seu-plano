?"use client";

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
              O Seu Plano nasceu de uma inconformidade: por que tantos
              empreendedores brilhantes continuam invisíveis no digital? Por que
              pequenos negócios perdem clientes todos os dias por não parecerem
              profissionais? Decidimos mudar isso.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/[0.06]">
              <Image
                src="/images/avatar-strategy.jpg"
                alt="Consultora O Seu Plano �?? Inteligência Estratégica"
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
                Empoderar empreendedores, MEIs e profissionais liberais com
                presença digital profissional �?? de forma clara, acessível e
                sem jargão técnico. Acreditamos que todo negócio honesto merece
                ser encontrado e reconhecido no digital.
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
                Um Brasil onde qualquer pequeno negócio consegue parecer
                profissional no digital. Onde o empreendedor não perde clientes
                por falta de e-mail no domínio, perfil no Google ou site �?? e
                onde a estratégia digital é acessível, não elitizada.
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

      {/* Numbers */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <AnimateIn>
          <div className="glass rounded-2xl p-10 lg:p-12 glow-gold">
            <h2 className="font-heading text-2xl font-bold text-light mb-6 text-center">
              Resultados que{" "}
              <span className="text-gradient-gold">falam por si</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: 7, suffix: " dias", label: "para site no ar" },
                { value: 24, suffix: "h", label: "e-mail profissional ativo" },
                { value: 100, suffix: "%", label: "acesso total entregue a você" },
                { value: 97, suffix: " R$", label: "para começar do zero" },
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
            href="https://wa.me/5519997485834"
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

