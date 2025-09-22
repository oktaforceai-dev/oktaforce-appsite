'use client';

import { useTranslations } from 'next-intl';
import { getPathname } from '@/i18n/routing';
import type { BlogPostSummary } from '@/lib/blog';
import { BlogPostCard } from './BlogPostCard';

interface PostsGridProps {
  posts: BlogPostSummary[];
  locale: string;
}

export function PostsGrid({ posts, locale }: PostsGridProps) {
  const t = useTranslations('blog.empty');
  const basePath = getPathname({ locale, href: '/blog' });

  if (posts.length === 0) {
    return (
      <section className="section-padding">
        <div className="mx-auto max-w-4xl rounded-3xl border border-transparent bg-surface-alt p-10 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground">{t('title')}</h2>
          <p className="mt-3 text-sm text-foreground/70">{t('subtitle')}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} basePath={basePath} locale={locale} />
        ))}
      </div>
    </section>
  );
}
