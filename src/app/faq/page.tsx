import { Metadata } from "next";
import { FAQPageContent } from "./content";

export const metadata: Metadata = {
  title: "Perguntas Frequentes | O Seu Plano",
  description:
    "Tire todas as suas dúvidas sobre consórcio. Respostas claras, sem enrolação, com transparência total.",
};

export default function FAQPage() {
  return <FAQPageContent />;
}
