'use client';

import { useTranslations } from 'next-intl';

export function MetricsSection() {
  const t = useTranslations('differentials.metrics');
  const items = t.raw('items') as Array<{ value: string; label: string }>;

  return (
    <section className="section-padding bg-surface-alt/60">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-title text-left">{t('title')}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.value} className="rounded-3xl border border-transparent bg-surface p-6 text-center shadow-sm">
              <p className="font-display text-4xl font-semibold text-brand">{item.value}</p>
              <p className="mt-2 text-sm text-foreground/70">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
