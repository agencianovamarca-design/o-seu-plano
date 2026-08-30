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
  title: "O Seu Plano | Presença Digital que Gera Clientes",
  description:
    "Ajudamos empresas, MEI e profissionais liberais a ter presença digital profissional. E-mail no domínio próprio, redes sociais estruturadas, site e estratégia que gera clientes reais.",
  keywords: [
    "presença digital",
    "e-mail profissional",
    "marketing digital",
    "redes sociais para empresas",
    "site profissional",
    "estratégia digital",
    "MEI digital",
    "O Seu Plano",
  ],
  openGraph: {
    title: "O Seu Plano | Presença Digital que Gera Clientes",
    description:
      "Seu negócio merece parecer profissional. Do @gmail ao @suaempresa — a gente resolve.",
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
