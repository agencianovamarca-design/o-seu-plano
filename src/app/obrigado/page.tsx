import { Metadata } from "next";
import { ObrigadoContent } from "./content";

export const metadata: Metadata = {
  title: "Obrigado! | O Seu Plano",
  description: "Seu e-book está pronto para download.",
};

export default function ObrigadoPage() {
  return <ObrigadoContent />;
}
