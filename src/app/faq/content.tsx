"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqCategories = [
  {
    category: "Sobre Consórcio",
    faqs: [
      {
        q: "O que é consórcio?",
        a: "Consórcio é uma modalidade de compra coletiva onde um grupo de pessoas contribui mensalmente para um fundo comum. Todo mês, um ou mais participantes são contemplados e recebem uma carta de crédito no valor integral para adquirir o bem desejado. Não há juros — apenas taxa de administração.",
      },
      {
        q: "Consórcio é regulamentado?",
        a: "Sim. O consórcio é regulamentado e fiscalizado pelo Banco Central do Brasil. Nossa administradora parceira é associada à ABAC (Associação Brasileira de Administradoras de Consórcio) e opera dentro de todas as normas legais.",
      },
      {
        q: "Consórcio é furada?",
        a: "Não. O que é furada é pagar juros compostos de 8-12% ao ano durante 30 anos. O consórcio foi prejudicado pela imagem de empresas e vendedores desonestos, mas com uma administradora séria e profissionais comprometidos, o consórcio é uma das formas mais inteligentes de adquirir bens.",
      },
      {
        q: "Qual a diferença entre consórcio e financiamento?",
        a: "No financiamento: você recebe o bem imediatamente, mas paga juros compostos que podem mais que dobrar o valor total. No consórcio: você paga parcelas sem juros (apenas taxa de administração de ~15% diluída) e pode ser contemplado a qualquer momento por sorteio ou lance. Exemplo real: imóvel de R$ 300 mil custa ~R$ 720 mil no financiamento e ~R$ 345 mil no consórcio.",
      },
      {
        q: "Posso usar consórcio como investimento?",
        a: "Sim! Uma estratégia cada vez mais popular é adquirir imóveis via consórcio para Airbnb ou aluguel. O retorno mensal pode cobrir as parcelas do consórcio e ainda gerar renda passiva. É uma forma inteligente de construir patrimônio.",
      },
    ],
  },
  {
    category: "Sobre a administradora",
    faqs: [
      {
        q: "Por que essa administradora e não outra?",
        a: "Três diferenciais: 1) Sorteio manual — chances reais de contemplação sem depender da loteria federal. 2) Grupos menores (120 a 2.000 participantes). 3) 75 anos de mercado, com solidez comprovada em todas as crises econômicas.",
      },
      {
        q: "O que é sorteio manual?",
        a: "O sorteio é feito manualmente nas assembleias — diferente de administradoras que usam a loteria federal, onde suas chances de contemplação são equivalentes a ganhar na mega-sena. No sorteio manual, com grupos menores, as chances são significativamente maiores.",
      },
      {
        q: "Qual o tamanho dos grupos?",
        a: "Nossa administradora trabalha com grupos de de 999 (imóveis Faixa I) a 2.000 (autos Edição Especial) participantes. Mesmo nos maiores grupos, as chances de sorteio são reais — muito diferente de outras administradoras que operam com 5.000 a 10.000+ participantes.",
      },
      {
        q: "Preciso dar lance para ser contemplado?",
        a: "Não. O sorteio acontece todo mês e é gratuito. O lance é uma opção para quem quer antecipar a contemplação, mas não é obrigatório. Muitos clientes são contemplados por sorteio nos primeiros meses.",
      },
    ],
  },
  {
    category: "Sobre O Seu Plano",
    faqs: [
      {
        q: "O Seu Plano é uma administradora de consórcio?",
        a: "Não. Somos um portal educativo e parceiro autorizado de uma das maiores administradoras do Brasil. Nossa missão é educar consumidores e ajudá-los a tomar decisões financeiras inteligentes.",
      },
      {
        q: "Vocês cobram alguma taxa adicional?",
        a: "Não. Você paga exatamente o mesmo que pagaria diretamente com a administradora. Nossa remuneração vem da administradora, não do cliente.",
      },
      {
        q: "Como posso falar com vocês?",
        a: "Pelo WhatsApp +1 (716) 939-9340, pelo formulário de contato no site ou pelas redes sociais @seuplano.ofc. Estamos sempre disponíveis para tirar dúvidas — sem compromisso.",
      },
    ],
  },
  {
    category: "Processo e Pagamento",
    faqs: [
      {
        q: "Qual o valor mínimo de crédito?",
        a: "Oferecemos cartas de crédito a partir de R$ 30 mil para veículos e valores maiores para imóveis. O plano ideal depende do seu objetivo e momento financeiro.",
      },
      {
        q: "Preciso comprovar renda para entrar?",
        a: "Para aderir ao grupo, não é necessária análise de crédito. A comprovação de renda é feita no momento da contemplação, quando você vai utilizar a carta de crédito.",
      },
      {
        q: "Posso quitar antecipadamente?",
        a: "Sim. Você pode quitar as parcelas restantes a qualquer momento e, dependendo das regras do grupo, pode utilizar o saldo para ofertar lance ou antecipar a contemplação.",
      },
      {
        q: "O que acontece se eu atrasar uma parcela?",
        a: "Atrasos podem gerar multa e impedir sua participação nos sorteios daquele mês. O ideal é manter as parcelas em dia. Se estiver com dificuldades, entre em contato conosco que podemos orientar sobre as opções.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className="font-heading font-semibold text-light text-sm pr-4 group-hover:text-gold transition-colors duration-200">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-gold shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-muted text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export function FAQPageContent() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-3xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-electric uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-light mb-6">
            Todas as suas{" "}
            <span className="text-gradient-gold">dúvidas.</span>
          </h1>
          <p className="max-w-xl mx-auto text-muted text-lg">
            Respostas claras, sem enrolação. Se sua pergunta não estiver aqui,
            fale com a gente.
          </p>
        </AnimateIn>

        {faqCategories.map((cat, i) => (
          <AnimateIn key={cat.category} delay={i * 0.1} className="mb-10">
            <h2 className="font-heading text-lg font-bold text-gold mb-4">
              {cat.category}
            </h2>
            <div className="glass rounded-2xl px-6">
              {cat.faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </AnimateIn>
        ))}

        <AnimateIn delay={0.4} className="mt-12 text-center">
          <p className="text-muted mb-4">Não encontrou sua pergunta?</p>
          <a
            href="https://wa.me/17169399340"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-deep px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            <MessageCircle size={18} />
            Pergunte no WhatsApp
          </a>
        </AnimateIn>
      </section>
    </div>
  );
}
