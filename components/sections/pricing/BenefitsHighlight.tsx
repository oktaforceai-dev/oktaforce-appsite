'use client';

import {Brain, ShieldCheck, Users2} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

type Benefit = {
  title: string;
  description: string;
};

const ICONS = [Brain, ShieldCheck, Users2];

export function BenefitsHighlight() {
  const t = useTranslations('pricing.benefits');
  const items = (t.raw('items') as Benefit[]) || [];

  return (
    <section className="section-padding bg-surface-alt/70">
      <SectionHeading title={t('title')} align="center" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((item, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <div key={item.title} className="flex h-full flex-col gap-4 rounded-3xl border border-transparent bg-surface p-6 shadow-sm">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon className="size-6" />
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-foreground/70">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
