import { Metadata } from "next";
import { BlogPageContent } from "./content";

export const metadata: Metadata = {
  title: "Blog | O Seu Plano — Estratégia Digital na Prática",
  description:
    "Artigos sobre e-mail profissional, redes sociais, Google Meu Negócio, leads orgânicos e presença digital para empresas, MEI e profissionais liberais.",
};

export default function BlogPage() {
  return <BlogPageContent />;
}
