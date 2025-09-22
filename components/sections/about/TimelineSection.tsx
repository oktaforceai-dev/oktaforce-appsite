'use client';

import {Flag} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

export function TimelineSection() {
  const t = useTranslations('about.timeline');
  const items = t.raw('items') as Array<{year: string; title: string; description: string}>;

  return (
    <section className="section-padding">
      <div className="section-container max-w-4xl">
        <SectionHeading title={t('title')} align="left" />
        <ol className="mt-8 space-y-6 border-l border-brand/30 pl-6">
          {items.map((item) => (
            <li key={item.year} className="relative rounded-2xl bg-surface-alt/70 p-6 shadow-sm">
              <span className="absolute -left-3 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
                <Flag className="size-3" aria-hidden />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/80">{item.year}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
