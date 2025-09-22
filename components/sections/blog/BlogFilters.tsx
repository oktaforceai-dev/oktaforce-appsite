'use client';

import { FormEvent, useState, useTransition } from 'react';
import { Search } from 'lucide-react';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

interface BlogFiltersProps {
  categories: string[];
  currentCategory?: string;
  searchQuery?: string;
}

export function BlogFilters({ categories, currentCategory, searchQuery = '' }: BlogFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('blog');
  const [value, setValue] = useState(searchQuery);
  const [isPending, startTransition] = useTransition();

  function updateQuery(params: URLSearchParams) {
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}` as any);
    });
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    if (value) params.set('q', value);
    else params.delete('q');
    updateQuery(params);
  }

  function toggleCategory(category?: string) {
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    if (!category) params.delete('category');
    else params.set('category', category);
    updateQuery(params);
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-foreground/50" />
        <input
          type="search"
          className="w-full rounded-full border border-transparent bg-surface py-3 pl-12 pr-4 text-sm text-foreground"
          placeholder={t('hero.searchPlaceholder')}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          disabled={isPending}
        />
      </form>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => toggleCategory(undefined)}
          className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
            !currentCategory ? 'bg-brand text-white' : 'bg-surface-alt text-foreground/70'
          }`}
        >
          {t('filters.all')}
        </button>
        {categories.map((category) => {
          const active = category === currentCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => toggleCategory(category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                active ? 'bg-brand text-white' : 'bg-surface-alt text-foreground/70 hover:bg-brand/10 hover:text-brand'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
