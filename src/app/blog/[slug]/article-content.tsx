"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { ArrowLeft, ArrowRight, Clock, Share2 } from "lucide-react";
import { NewsletterSignup } from "@/components/NewsletterSignup";

type Section = { heading: string; body: string };
type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  imageAlt: string;
};

export function ArticleContent({
  post,
  sections,
}: {
  post: Post;
  sections: Section[];
}) {
  const formattedDate = new Date(post.date + "T12:00:00").toLocaleDateString(
    "pt-BR",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div className="pt-36 pb-24">
      <article className="max-w-3xl mx-auto px-6">
        {/* Back */}
        <AnimateIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm mb-10 transition-colors"
          >
            <ArrowLeft size={14} />
            Voltar ao Blog
          </Link>
        </AnimateIn>

        {/* Cover */}
        <AnimateIn>
          <div className="relative h-56 sm:h-72 lg:h-80 rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/10 to-transparent" />
          </div>
        </AnimateIn>

        {/* Header */}
        <AnimateIn>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-electric uppercase tracking-wide bg-electric/10 px-3 py-1 rounded-md">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-white/25">
                <Clock size={12} />
                {post.readTime} de leitura
              </span>
              <span className="text-xs text-white/25">{formattedDate}</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-white/40 text-lg leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </AnimateIn>

        <div className="w-full h-px bg-white/[0.06] mb-12" />

        {/* Body */}
        {sections.map((section, i) => (
          <AnimateIn key={i} delay={i * 0.05}>
            <section className="mb-10">
              {section.heading && (
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4">
                  {section.heading}
                </h2>
              )}
              <div className="text-white/40 text-base leading-relaxed space-y-4">
                {section.body.split("\n\n").map((p, j) => (
                  <p
                    key={j}
                    dangerouslySetInnerHTML={{
                      __html: p.replace(/\*\*(.+?)\*\*/g, "<strong class=\"text-white/70\">$1</strong>"),
                    }}
                  />
                ))}
              </div>
            </section>
          </AnimateIn>
        ))}

        {/* Hostinger referral — shows on email article */}
        {post.slug === "email-profissional-vs-gmail" && (
          <AnimateIn>
            <div className="mt-10 rounded-2xl border border-[#673DE6]/20 bg-[#673DE6]/[0.04] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-11 h-11 rounded-xl bg-[#673DE6]/15 border border-[#673DE6]/25 flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9B6DFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-[#9B6DFF] uppercase tracking-wider mb-1">Ferramenta recomendada · Hostinger</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  Registre seu domínio .com.br e tenha e-mail profissional ainda hoje — a partir de R$ 39,99/ano.
                </p>
              </div>
              <a
                href="https://www.hostinger.com/br?REFERRALCODE=QGHAGENCI29Y"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-[#673DE6] hover:bg-[#7B52E8] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-200 whitespace-nowrap"
              >
                Registrar domínio
                <ArrowRight size={12} />
              </a>
            </div>
          </AnimateIn>
        )}

        {/* CTA */}
        <AnimateIn>
          <div className="mt-16 p-8 rounded-2xl bg-gold/[0.04] border border-gold/[0.12] text-center">
            <h3 className="font-heading text-xl font-bold text-white mb-3">
              Pronto para estruturar sua presença digital?
            </h3>
            <p className="text-white/30 text-sm mb-6 max-w-md mx-auto">
              Faça o diagnóstico gratuito e descubra o que está impedindo sua empresa de atrair clientes no digital.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/diagnostico"
                className="bg-gradient-gold text-deep px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Diagnóstico gratuito
              </Link>
              <a
                href="https://wa.me/17169399340"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/[0.12] px-7 py-3 rounded-full text-sm font-medium text-white/50 hover:text-white hover:border-white/30 transition-all uppercase tracking-wider"
              >
                Falar com especialista
              </a>
            </div>
          </div>
        </AnimateIn>

        {/* Newsletter */}
        <AnimateIn>
          <div className="mt-8 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <NewsletterSignup />
          </div>
        </AnimateIn>

        {/* Share */}
        <AnimateIn>
          <div className="mt-10 flex items-center justify-center gap-2 text-white/20 text-sm">
            <Share2 size={14} />
            <span>Compartilhe esse artigo com quem precisa saber disso.</span>
          </div>
        </AnimateIn>
      </article>
    </div>
  );
}
