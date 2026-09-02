import { Metadata } from "next";
import { ContatoPageContent } from "./content";

export const metadata: Metadata = {
  title: "Contato | O Seu Plano",
  description:
    "Entre em contato com O Seu Plano. Tire suas dúvidas sobre presença digital, e-mail profissional e estratégia para o seu negócio.",
};

export default function ContatoPage() {
  return <ContatoPageContent />;
}
