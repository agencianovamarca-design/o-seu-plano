import { Metadata } from "next";
import { HowItWorksPageContent } from "./content";

export const metadata: Metadata = {
  title: "Como Funciona | O Seu Plano",
  description:
    "Entenda como o O Seu Plano estrutura a presença digital da sua empresa — do e-mail profissional ao site, passo a passo e sem complicação.",
};

export default function ComoFuncionaPage() {
  return <HowItWorksPageContent />;
}
