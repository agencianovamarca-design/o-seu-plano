"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { Clock, ArrowRight } from "lucide-react";
import { posts } from "./posts";

const categoryColors: Record<string, string> = {
  Alerta: "text-red-400 bg-red-400/10",
  Educação: "text-electric bg-electric/10",
  Administradora: "text-gold bg-gold/10",
  Investimento: "text-green-400 bg-green-400/10",
  "Educação Financeira": "text-bronze bg-bronze/10",
  Guia: "text-purple-400 bg-purple-400/10",
};

export function BlogPageContent() {
  return (
    <div className="pt-36 pb-24">
      <section className="max-w-5xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-gold uppercase tracking-widest mb-4">
            Blog
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-light mb-6">
            Informação que{" "}
            <span className="text-gradient-gold">liberta.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted text-lg">
            Conteúdo que o mercado não quer que você veja. Artigos educativos
            sobre presença digital, empreendedorismo e estratégia.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimateIn key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <article className="glass-light rounded-2xl overflow-hidden h-full flex flex-col group hover:border-gold/20 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-md ${
                          categoryColors[post.category] ||
                          "text-muted bg-white/5"
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-heading font-semibold text-light text-base mb-2 group-hover:text-gold transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-gold font-medium">
                      Ler artigo
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </article>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>
    </div>
  );
}
