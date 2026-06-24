import { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "../posts";
import { ArticleContent } from "./article-content";
import { articles } from "./articles";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | O Seu Plano`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  const article = articles[slug];
  if (!post || !article) notFound();
  return <ArticleContent post={post} sections={article} />;
}
