import Link from "next/link";
import { Logo } from "./Logo";
import { Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/como-funciona", label: "Como Funciona" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/simulador", label: "Simulador" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

const educationLinks = [
  { href: "/blog/consorcio-vs-financiamento", label: "Consórcio vs Financiamento" },
  { href: "/blog/como-funciona-sorteio", label: "Como Funciona o Sorteio" },
  { href: "/blog/mitos-consorcio", label: "Mitos sobre Consórcio" },
  { href: "/blog/investir-com-consorcio", label: "Investir com Consórcio" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Logo className="h-10 w-auto mb-6" />
            <p className="text-white/25 text-sm leading-relaxed mb-8">
              Educando consumidores e transformando o mercado de consórcios.
              Informação é poder.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/seuplano.ofc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/20 transition-all duration-300 cursor-pointer"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/20 transition-all duration-300 cursor-pointer"
                aria-label="YouTube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[11px] font-semibold text-gold uppercase tracking-[0.25em] mb-6">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/25 text-sm hover:text-white/60 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-[11px] font-semibold text-gold uppercase tracking-[0.25em] mb-6">
              Educação
            </h3>
            <ul className="space-y-3">
              {educationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/25 text-sm hover:text-white/60 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold text-gold uppercase tracking-[0.25em] mb-6">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/17169399340"
                  className="flex items-center gap-3 text-white/25 text-sm hover:text-white/60 transition-colors duration-200"
                >
                  <Phone size={14} className="text-electric shrink-0" />
                  (83) 98646-9009
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@oseuplano.com"
                  className="flex items-center gap-3 text-white/25 text-sm hover:text-white/60 transition-colors duration-200"
                >
                  <Mail size={14} className="text-electric shrink-0" />
                  contato@oseuplano.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/15 text-xs">
            &copy; {new Date().getFullYear()} O Seu Plano. Todos os direitos reservados.
          </p>
          <a
            href="https://wa.me/17169399340"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#20BD5A] transition-colors duration-200 cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Fale conosco
          </a>
        </div>
      </div>
    </footer>
  );
}
