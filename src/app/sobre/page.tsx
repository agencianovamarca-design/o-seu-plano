import { Metadata } from "next";
import { AboutPageContent } from "./content";

export const metadata: Metadata = {
  title: "Sobre Nós | O Seu Plano",
  description:
    "Conheça a missão do O Seu Plano: educar consumidores e transformar o mercado de consórcios com transparência e informação.",
};

export default function SobrePage() {
  return <AboutPageContent />;
}
