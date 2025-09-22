import Image from "next/image";
import {Link} from "@/i18n/routing";
import type {BlogPostSummary} from "@/lib/blog";

interface BlogPostCardProps {
  post: BlogPostSummary;
  basePath: string;
  locale: string;
}

export function BlogPostCard({post, basePath, locale}: BlogPostCardProps) {
  const dateFormatter = new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-transparent bg-surface shadow-sm transition hover:-translate-y-1 hover:border-brand/60">
      {post.thumbnail ? (
        <div className="relative h-48 w-full">
          <Image src={post.thumbnail} alt={post.title} fill className="object-cover" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-brand">
          {dateFormatter.format(new Date(post.publishedAt))}
        </p>
        <h2 className="mt-3 font-display text-xl font-semibold text-foreground">
          <Link href={`${basePath}/${post.slug}` as any}>{post.title}</Link>
        </h2>
        <p className="mt-2 flex-1 text-sm text-foreground/70">{post.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
