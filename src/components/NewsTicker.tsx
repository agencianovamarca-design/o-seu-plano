"use client";

import Link from "next/link";
import { posts } from "@/app/blog/posts";

const categoryDot: Record<string, string> = {
  Alerta: "bg-red-400",
  "Educação": "bg-electric",
  "Investimento": "bg-green-400",
  "Educação Financeira": "bg-bronze",
  Guia: "bg-purple-400",
};

export function NewsTicker() {
  const latest = [...posts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 5);

  const items = (
    <>
      {latest.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 px-6 hover:text-gold transition-colors duration-200"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
              categoryDot[post.category] || "bg-electric"
            }`}
          />
          <span className="text-[11px] sm:text-xs font-medium text-white/55 whitespace-nowrap">
            {post.title}
          </span>
        </Link>
      ))}
    </>
  );

  return (
    <div className="relative flex items-center h-9 bg-deep border-b border-white/[0.06] overflow-hidden">
      <div className="hidden sm:flex items-center gap-2 shrink-0 pl-5 pr-4 h-full bg-deep relative z-10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400" />
        </span>
        <span className="text-[10px] font-bold text-red-400 uppercase tracking-[0.15em] whitespace-nowrap">
          Ao vivo no blog
        </span>
      </div>
      <div className="hidden sm:block w-8 h-full bg-gradient-to-r from-deep to-transparent relative z-10 -ml-8" />

      <div className="flex-1 overflow-hidden">
        <div className="flex w-max animate-ticker">
          {items}
          {items}
        </div>
      </div>

      <div className="w-10 h-full bg-gradient-to-l from-deep to-transparent absolute right-0 top-0 z-10" />
    </div>
  );
}
