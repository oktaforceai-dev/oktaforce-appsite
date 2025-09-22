'use client';

import type { BlogPostSummary } from "@/lib/blog";

interface BlogClientPageProps {
  posts: BlogPostSummary[];
}

export default function BlogClientPage({ posts }: BlogClientPageProps) {
  return (
    <>
      <section className="section-padding">
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Blog</h1>
          <p className="text-base text-foreground/80 md:text-lg">Artigos sobre segurança condominial.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-3xl border border-transparent bg-surface-alt p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">{post.title}</h2>
              <p className="mt-2 text-sm text-foreground/70">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}