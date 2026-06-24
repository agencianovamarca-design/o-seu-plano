import { Metadata } from "next";
import { BlogPageContent } from "./content";

export const metadata: Metadata = {
  title: "Blog | O Seu Plano - Educação sobre Consórcios",
  description:
    "Artigos educativos sobre consórcio, financiamento, investimento imobiliário e educação financeira. Informação que liberta.",
};

export default function BlogPage() {
  return <BlogPageContent />;
}
