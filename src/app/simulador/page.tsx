import { Metadata } from "next";
import { SimuladorPageContent } from "./content";

export const metadata: Metadata = {
  title: "Simulador de Consórcio | O Seu Plano",
  description:
    "Simule seu consórcio. Compare com financiamento e descubra quanto você economiza. Sem compromisso.",
};

export default function SimuladorPage() {
  return <SimuladorPageContent />;
}
