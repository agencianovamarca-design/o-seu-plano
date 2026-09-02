?"use client";

import { AnimateIn } from "@/components/AnimateIn";
import {
  Search,
  Lightbulb,
  Zap,
  CheckCircle,
  Rocket,
  BarChart3,
  Shield,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Diagnóstico gratuito",
    description:
      "Tudo começa com uma conversa honesta. Analisamos a sua situação digital atual �?? e-mail, redes sociais, site, Google �?? e identificamos exatamente o que está custando clientes para o seu negócio.",
    details: [
      "Análise completa da presença digital atual",
      "Identificação dos pontos críticos",
      "Comparação com concorrentes do seu nicho",
      "Relatório verbal com prioridades claras",
    ],
  },
  {
    icon: Lightbulb,
    title: "2. Plano de ação personalizado",
    description:
      "Com o diagnóstico em mãos, montamos um plano específico para o seu momento e o seu negócio. Sem solução genérica �?? o que vale para um escritório de advocacia não é o mesmo que vale para um salão de beleza.",
    details: [
      "Plano feito para o seu nicho específico",
      "Priorização: o que resolver primeiro",
      "Prazos realistas e passos claros",
      "Investimento transparente desde o início",
    ],
  },
  {
    icon: Zap,
    title: "3. Execução rápida",
    description:
      "Não ficamos na teoria. Em até 7 dias úteis, você já tem e-mail no seu domínio, perfil do Google Meu Negócio configurado, redes sociais estruturadas e site no ar �?? ou o que o seu plano exige.",
    details: [
      "E-mail profissional em menos de 24h",
      "Google Meu Negócio ativo em até 3 dias",
      "Redes sociais com identidade visual e bio que converte",
      "Site ou landing page funcional em até 7 dias",
    ],
  },
  {
    icon: CheckCircle,
    title: "4. Entrega e revisão",
    description:
      "Entregamos tudo com acesso completo �?? você é dono de tudo que criamos. Passamos por cada entrega junto com você, explicamos como usar e garantimos que tudo está funcionando antes de encerrar.",
    details: [
      "Acesso total a todos os canais criados",
      "Walkthrough de cada entrega",
      "Manual prático de uso para a sua equipe",
      "Suporte por 7 dias após a entrega",
    ],
  },
  {
    icon: Rocket,
    title: "5. Estratégia de conteúdo",
    description:
      "Presença digital sem conteúdo é vitrine fechada. Entregamos um roteiro dos primeiros 30 dias �?? o que postar, quando e com qual objetivo �?? para que você comece a atrair clientes imediatamente.",
    details: [
      "30 dias de pauta de conteúdo prontos",
      "Roteiro de stories, posts e reels",
      "Guia de linguagem e tom de voz da marca",
      "Templates prontos para usar e adaptar",
    ],
  },
  {
    icon: BarChart3,
    title: "6. Acompanhamento e evolução",
    description:
      "Negócio que cresce precisa de presença digital que acompanhe. Oferecemos revisões periódicas e atualizações para que o que foi estruturado continue gerando resultado �?? não apenas no mês 1.",
    details: [
      "Revisão trimestral da estratégia",
      "Atualização de conteúdo conforme o negócio evolui",
      "Novas ferramentas e canais quando fizer sentido",
      "Acesso prioritário para dúvidas e ajustes",
    ],
  },
];

const myths = [
  {
    myth: "Presença digital é coisa de empresa grande",
    truth:
      "�? justamente o oposto. Pequenas empresas e MEIs que têm presença profissional competem de igual para igual com empresas maiores no digital.",
  },
  {
    myth: "Preciso saber de tecnologia para isso",
    truth:
      "Cuidamos de tudo técnico. Nossa entrega inclui acesso simples e um guia prático para que qualquer pessoa da sua equipe consiga usar.",
  },
  {
    myth: "Já tenho Instagram, isso já é suficiente",
    truth:
      "Instagram é só um canal. Presença digital completa inclui e-mail profissional, Google Meu Negócio, site e estratégia que conecta tudo.",
  },
  {
    myth: "�? muito caro para o meu momento",
    truth:
      "Começar custa R$ 97. Não começar custa clientes todos os dias. A pergunta certa é: quanto você já perdeu por não parecer profissional?",
  },
];

export function HowItWorksPageContent() {
  return (
    <div className="pt-36 pb-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-20">
        <AnimateIn>
          <span className="inline-block text-xs font-semibold text-electric uppercase tracking-widest mb-4">
            Guia completo
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-light mb-6">
            Como funciona{" "}
            <span className="text-gradient-gold">na prática.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted text-lg leading-relaxed">
            Do diagnóstico gratuito ao site no ar �?? um processo claro, rápido e sem
            jargão técnico. Feito para qualquer empresa, MEI ou profissional liberal.
          </p>
        </AnimateIn>
      </section>

      {/* Steps */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="space-y-8">
          {steps.map((step, i) => (
            <AnimateIn key={step.title} delay={i * 0.1}>
              <div className="glass-light rounded-2xl p-8 lg:p-10">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                    <step.icon size={26} className="text-gold" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-light mb-2">
                      {step.title}
                    </h2>
                    <p className="text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-0 lg:ml-[4.75rem]">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="text-green-400 mt-0.5 shrink-0"
                      />
                      <span className="text-sm text-light/80">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Myths */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <AnimateIn className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-light mb-4">
            Mitos vs <span className="text-gradient-gold">Realidade</span>
          </h2>
          <p className="text-muted text-lg">
            O que te impede de ter presença digital profissional �?? e a verdade por trás de cada desculpa.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myths.map((item, i) => (
            <AnimateIn key={item.myth} delay={i * 0.1}>
              <div className="glass rounded-2xl p-8 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-red-400 text-xs font-bold uppercase tracking-wide">
                    Mito
                  </span>
                </div>
                <p className="text-light font-heading font-semibold mb-4">
                  &ldquo;{item.myth}&rdquo;
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green-400 text-xs font-bold uppercase tracking-wide">
                    Realidade
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {item.truth}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <AnimateIn>
          <div className="glass rounded-2xl p-10 glow-gold">
            <Shield size={32} className="text-gold mx-auto mb-4" />
            <h2 className="font-heading text-2xl font-bold text-light mb-4">
              Pronto para parecer profissional?
            </h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              Comece pelo diagnóstico gratuito. Em 15 minutos, você sabe exatamente
              o que está faltando e o que priorizar.
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
                Ver materiais
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}

