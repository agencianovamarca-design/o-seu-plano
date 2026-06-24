import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "O Seu Plano | Entenda o Jogo Antes de Entrar",
  description:
    "Portal educativo sobre consórcios. Descubra como adquirir imóveis e veículos de forma inteligente, sem pagar juros abusivos. Informação é poder.",
  keywords: [
    "consórcio",
    "consórcio inteligente",
    "imóveis",
    "veículos",
    "educação financeira",
    "consórcio vs financiamento",
    "sorteio manual",
    "O Seu Plano",
  ],
  openGraph: {
    title: "O Seu Plano | Entenda o Jogo Antes de Entrar",
    description:
      "Informação é poder. Descubra como o consórcio pode mudar sua vida.",
    url: "https://oseuplano.com",
    siteName: "O Seu Plano",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-deep text-light">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
