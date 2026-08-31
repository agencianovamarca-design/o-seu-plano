import { Metadata } from "next";
import { DiagnosticoContent } from "./content";

export const metadata: Metadata = {
  title: "Diagnóstico Digital Gratuito | O Seu Plano",
  description:
    "Preencha o diagnóstico em 2 minutos e descubra o que está impedindo sua empresa de atrair clientes no digital. 100% gratuito, sem compromisso.",
};

export default function DiagnosticoPage() {
  return <DiagnosticoContent />;
}
