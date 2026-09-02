import { Metadata } from "next";
import { FAQPageContent } from "./content";

export const metadata: Metadata = {
  title: "Perguntas Frequentes | O Seu Plano",
  description:
    "Tire todas as suas dúvidas sobre presença digital, e-mail profissional, redes sociais e estratégia para o seu negócio.",
};

export default function FAQPage() {
  return <FAQPageContent />;
}
