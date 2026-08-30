"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NewsTicker } from "@/components/NewsTicker";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/como-funciona", label: "Como Funciona" },
  { href: "/produtos", label: "Produtos" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <NewsTicker />
      <nav
        className={`mx-auto transition-all duration-500 flex items-center justify-between ${
          scrolled
            ? "mx-0 px-8 py-3 bg-deep/90 backdrop-blur-xl border-b border-white/5"
            : "mx-6 mt-5 px-8 py-4 rounded-2xl bg-deep/40 backdrop-blur-md border border-white/[0.06]"
        }`}
      >
        <Link href="/" aria-label="Página inicial">
          <Logo iconSize={34} />
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center">
          <a
            href="/contato"
            className="text-[13px] font-semibold text-deep bg-gradient-gold px-6 py-2.5 rounded-full uppercase tracking-wider hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            Contato
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gold cursor-pointer p-2"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden mx-4 mt-2 rounded-2xl bg-deep/95 backdrop-blur-xl border border-white/[0.06] p-6">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-white/50 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/contato"
            className="mt-4 block text-center bg-gradient-gold text-deep px-6 py-3 rounded-full font-semibold cursor-pointer text-sm uppercase tracking-wider"
          >
            Contato
          </a>
        </div>
      )}
    </header>
  );
}
