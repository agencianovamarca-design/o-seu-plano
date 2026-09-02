import { Metadata } from "next";
import { AboutPageContent } from "./content";

export const metadata: Metadata = {
  title: "Sobre Nós | O Seu Plano",
  description:
    "Conheça o O Seu Plano: agência de estratégia digital especializada em ajudar empresas, MEI e profissionais liberais a terem presença digital profissional.",
};

export default function SobrePage() {
  return <AboutPageContent />;
}
