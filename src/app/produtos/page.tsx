import { Metadata } from "next";
import { ProdutosContent } from "./content";

export const metadata: Metadata = {
  title: "Produtos | O Seu Plano",
  description:
    "E-books gratuitos e materiais práticos sobre presença digital, gestão e estratégia para pequenos empreendedores brasileiros.",
};

export default function ProdutosPage() {
  return <ProdutosContent />;
}
