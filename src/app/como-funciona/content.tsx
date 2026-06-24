"use client";

import { AnimateIn } from "@/components/AnimateIn";
import {
  FileText,
  Users,
  Award,
  Home,
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Shuffle,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "1. Escolha o crédito ideal",
    description:
      "Definimos juntos o valor da carta de crédito que você precisa. Pode ser para imóvel, veículo, caminhão, moto ou até investimento. Não existe valor mínimo de renda — existe o plano certo para o seu momento.",
    details: [
      "Cartas de crédito de R$ 30 mil a R$ 500 mil+",
      "Prazos de 60 a 240 meses",
      "Parcelas que cabem no seu bolso",
      "Sem análise de crédito para entrar no grupo",
    ],
  },
  {
    icon: Users,
    title: "2. Entre em um grupo",
    description:
      "Você passa a fazer parte de um grupo de pessoas com o mesmo objetivo. Os grupos são pequenos — de 120 a no máximo 2.000 participantes — o que aumenta suas chances.",
    details: [
      "Grupos menores = mais chances no sorteio",
      "Assembleias mensais transparentes",
      "Acompanhamento total pelo aplicativo",
      "Sem burocracia para participar",
    ],
  },
  {
    icon: DollarSign,
    title: "3. Pague parcelas sem juros",
    description:
      "Diferente do financiamento, no consórcio não existem juros compostos. Você paga apenas o valor do crédito + uma taxa de administração que é diluída ao longo de todo o prazo.",
    details: [
      "Zero juros — apenas taxa de administração (~15% diluída)",
      "Parcelas muito menores que o financiamento",
      "Fundo de reserva que protege o grupo",
      "Reajuste anual pelo INCC (imóveis) ou IPCA",
    ],
  },
  {
    icon: Shuffle,
    title: "4. Sorteio manual todo mês",
    description:
      "Todo mês acontece o sorteio. Na administradora que escolhemos, ele é MANUAL — diferente de outras administradoras que usam loteria federal (chances nível mega-sena). Aqui, todos os participantes têm chances reais de contemplação.",
    details: [
      "Sorteio manual = chances reais para todos",
      "Não depende da loteria federal",
      "Pode ser contemplado no 1º mês",
      "Também é possível ofertar lance para antecipar",
    ],
  },
  {
    icon: Award,
    title: "5. Seja contemplado",
    description:
      "Quando contemplado por sorteio ou lance, você recebe a carta de crédito no valor integral. Com ela, você compra seu bem com poder de negociação de quem paga à vista.",
    details: [
      "Carta de crédito no valor integral",
      "Poder de negociação de pagamento à vista",
      "Pode usar para imóvel novo, usado ou na planta",
      "Veículos: novos, seminovos ou 0km",
    ],
  },
  {
    icon: Home,
    title: "6. Realize seu sonho",
    description:
      "Com o bem adquirido, você continua pagando as parcelas restantes — que continuam sem juros. Diferente do financiamento, onde os juros já estão corroendo seu patrimônio desde o primeiro dia.",
    details: [
      "Seu patrimônio, sua conquista",
      "Parcelas sem juros até o final",
      "Pode quitar antecipadamente",
      "Bem pode gerar renda (Airbnb, aluguel)",
    ],
  },
];

const myths = [
  {
    myth: "Consórcio é furada",
    truth:
      "Furada é pagar 2.4x o valor do seu imóvel em juros. Consórcio com administradora séria é uma das formas mais inteligentes de adquirir bens.",
  },
  {
    myth: "Demora muito para ser contemplado",
    truth:
      "Com sorteio manual e grupos menores, as chances são reais todo mês. Muitos clientes são contemplados nos primeiros 12 meses.",
  },
  {
    myth: "Preciso dar lance alto",
    truth:
      "O sorteio é gratuito e acontece todo mês. Lance é opcional e pode ser usado estrategicamente, mas não é obrigatório.",
  },
  {
    myth: "Não vale a pena porque não recebo o bem na hora",
    truth:
      "Enquanto espera, você não está pagando juros. No financiamento, você recebe na hora mas paga até 3x o valor. Qual é mais inteligente?",
  },
];

export function HowItWorksPageContent() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-20">
        <AnimateIn>
          <span className="inline-block text-xs font-semibold text-electric uppercase tracking-widest mb-4">
            Guia completo
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-light mb-6">
            Como funciona o consórcio{" "}
            <span className="text-gradient-gold">na prática.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted text-lg leading-relaxed">
            Sem termos complicados, sem letras miúdas. Um guia feito para quem
            nunca ouviu falar de consórcio e para quem ouviu, mas nunca
            entendeu de verdade.
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
            Vamos desmistificar o que te disseram sobre consórcio.
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
              Pronto para entender o jogo?
            </h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              Converse com nossa equipe e descubra o plano ideal para o seu
              momento. Sem compromisso, com total transparência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5583986469009"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-gold text-deep px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              >
                Falar com especialista
              </a>
              <a
                href="/simulador"
                className="glass px-8 py-4 rounded-xl font-medium text-gold hover:bg-white/10 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                Simular agora
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
