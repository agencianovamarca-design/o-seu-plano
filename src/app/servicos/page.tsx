import { Metadata } from "next";
import { ServicosPageContent } from "./content";

export const metadata: Metadata = {
  title: "Serviços | O Seu Plano",
  description:
    "E-mail profissional, Google Meu Negócio, site, redes sociais e mentoria — presença digital completa para empresas, MEIs e profissionais liberais. Entrega em até 7 dias.",
};

export default function ServicosPage() {
  return <ServicosPageContent />;
}
