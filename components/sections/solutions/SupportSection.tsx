'use client';

import {LifeBuoy, ShieldCheck, SlidersHorizontal} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

const SUPPORT_ICONS = [ShieldCheck, SlidersHorizontal, LifeBuoy];

type SupportItem = {
  title: string;
  description: string;
};

export function SolutionsSupport() {
  const t = useTranslations('solutions.support');
  const items = t.raw('items') as SupportItem[];

  return (
    <section className="section-padding bg-surface-alt/70">
      <div className="section-container">
        <SectionHeading title={t('title')} align="center" />
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {items.map((item, index) => {
            const Icon = SUPPORT_ICONS[index % SUPPORT_ICONS.length];
            return (
              <article key={item.title} className="rounded-2xl border border-transparent bg-surface p-6 shadow-sm">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
