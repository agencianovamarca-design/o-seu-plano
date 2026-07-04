import { Metadata } from "next";
import { ProdutosContent } from "./content";

export const metadata: Metadata = {
  title: "Produtos | O Seu Plano",
  description:
    "E-books e materiais premium sobre consórcio inteligente. Conhecimento que transforma decisões financeiras.",
};

export default function ProdutosPage() {
  return <ProdutosContent />;
}
