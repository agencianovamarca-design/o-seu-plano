import { Metadata } from "next";
import { HowItWorksPageContent } from "./content";

export const metadata: Metadata = {
  title: "Como Funciona o Consórcio | O Seu Plano",
  description:
    "Guia completo e didático sobre como funciona o consórcio. Entenda cada etapa: da adesão à contemplação, sem termos complicados.",
};

export default function ComoFuncionaPage() {
  return <HowItWorksPageContent />;
}
