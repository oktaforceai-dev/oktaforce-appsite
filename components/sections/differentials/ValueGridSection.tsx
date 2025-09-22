'use client';

import { Sparkle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ValueGridSection() {
  const t = useTranslations('differentials.valueGrid');
  const items = t.raw('items') as Array<{ title: string; description: string }>;

  return (
    <section className="section-padding bg-surface-alt/60">
      <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="rounded-3xl border border-transparent bg-surface p-6 shadow-sm">
            <Sparkle className="size-6 text-brand" />
            <h2 className="mt-4 font-display text-xl font-semibold text-foreground">{item.title}</h2>
            <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
