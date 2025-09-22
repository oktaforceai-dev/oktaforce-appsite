'use client';

import {LineChart, ShieldCheck, Sparkles, TrendingUp} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

const BENEFIT_ITEMS = [
  {key: 'savings', icon: TrendingUp},
  {key: 'security', icon: ShieldCheck},
  {key: 'experience', icon: Sparkles},
  {key: 'transparency', icon: LineChart}
] as const;

export function BenefitsGrid() {
  const t = useTranslations('home.benefits');

  return (
    <section className="section-padding bg-surface-alt/60">
      <div className="section-container">
        <SectionHeading kicker={t('kicker')} title={t('title')} subtitle={t('subtitle')} align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {BENEFIT_ITEMS.map(({key, icon: Icon}) => (
            <article
              key={key}
              className="h-full rounded-2xl border border-transparent bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/40"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="size-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">{t(`items.${key}.title`)}</h3>
                  <p className="text-sm text-foreground/70">{t(`items.${key}.description`)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
