import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BlogClientPage from './BlogClientPage';
import { listBlogPosts } from "@/lib/blog";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Blog | OktaForce",
  description: "Artigos, notícias e dicas sobre segurança condominial, portaria remota e tecnologia.",
};

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  const posts = await listBlogPosts(locale);
  return <BlogClientPage posts={posts} />;
}
