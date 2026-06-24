import { Metadata } from "next";
import { ContatoPageContent } from "./content";

export const metadata: Metadata = {
  title: "Contato | O Seu Plano",
  description:
    "Entre em contato com O Seu Plano. Tire suas dúvidas sobre consórcio e receba orientação personalizada.",
};

export default function ContatoPage() {
  return <ContatoPageContent />;
}
