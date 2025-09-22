'use client';

import { useTranslations } from 'next-intl';
import { BlogFilters } from './BlogFilters';

interface BlogHeroProps {
  locale: string;
  currentCategory?: string;
  searchQuery?: string;
}

export function BlogHero({ locale, currentCategory, searchQuery }: BlogHeroProps) {
  const t = useTranslations('blog.hero');
  const blogT = useTranslations('blog');
  const categories = blogT.raw('categories') as string[];

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-5xl space-y-6 text-center">
        <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">{t('title')}</h1>
        <p className="text-base text-foreground/80 md:text-lg">{t('subtitle')}</p>
        <BlogFilters categories={categories} currentCategory={currentCategory} searchQuery={searchQuery} />
      </div>
    </section>
  );
}
