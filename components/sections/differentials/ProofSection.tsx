'use client';

import { ClipboardList } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ProofSection() {
  const t = useTranslations('differentials.proof');
  const items = t.raw('items') as string[];

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-5xl rounded-3xl border border-transparent bg-surface p-8">
        <div className="flex items-start gap-4">
          <ClipboardList className="size-8 text-brand" />
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">{t('title')}</h2>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
