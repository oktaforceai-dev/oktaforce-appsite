import type {Metadata} from "next";
import Image from "next/image";
import {notFound} from "next/navigation";
import {getTranslations} from "next-intl/server";
import Link from "next/link";
import {getBlogPostBySlug} from "@/lib/blog";
import {getPathname} from "@/i18n/routing";

export async function generateMetadata({params}: {params: Promise<{locale: string; slug: string}>}): Promise<Metadata> {
  const {locale, slug} = await params;
  const t = await getTranslations({locale, namespace: "blog.meta"});
  const post = await getBlogPostBySlug(locale, slug);

  if (!post) {
    return {
      title: t("title"),
      description: t("description")
    };
  }

  return {
    title: `${post.title} | OKTAFORCE`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.thumbnail ? [{url: post.thumbnail}] : undefined
    }
  };
}

export const dynamic = 'force-dynamic';

export default async function BlogPostPage({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;
  const post = await getBlogPostBySlug(locale, slug);
  const t = await getTranslations({locale, namespace: "blog.post"});

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString(locale === "pt" ? "pt-BR" : "en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  const backHref = getPathname({ locale, href: '/blog' as any });
  const paragraphs = post.content ? post.content.split("\n").filter(Boolean) : [];

  return (
    <article className="section-padding">
      <div className="mx-auto max-w-3xl space-y-6">
        <Link href={backHref} className="text-sm text-brand underline-offset-4 hover:underline">
          {t("back")}
        </Link>
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-brand">
            {t("publishedOn", {date: formattedDate})}
          </p>
          <h1 className="font-display text-4xl font-semibold text-foreground">{post.title}</h1>
          <p className="text-base text-foreground/70">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                {tag}
              </span>
            ))}
          </div>
        </header>
        {post.thumbnail ? (
          <div className="relative h-80 w-full overflow-hidden rounded-3xl">
            <Image src={post.thumbnail} alt={post.title} fill className="object-cover" />
          </div>
        ) : null}
        <div className="space-y-4 text-base leading-relaxed text-foreground/80">
          {paragraphs.length > 0 ? paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>{post.excerpt}</p>}
        </div>
      </div>
    </article>
  );
}
