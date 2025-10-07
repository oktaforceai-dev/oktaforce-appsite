'use client';

import {ShieldCheck, Wallet, Smartphone, ScrollText, Zap, Package} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

const ICON_MAP = {
  savings: Wallet,
  zeroSurrender: ShieldCheck,
  autonomy: Smartphone,
  transparency: ScrollText,
  reliability: Zap,
  locker: Package
} as const;

const BENEFIT_KEYS = Object.keys(ICON_MAP) as Array<keyof typeof ICON_MAP>;

export function BenefitsGrid() {
  const t = useTranslations('home.benefits');

  return (
    <section className="section-padding bg-surface-alt/60">
      <div className="section-container">
        <SectionHeading
          kicker={t('kicker')}
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BENEFIT_KEYS.map((key) => {
            const Icon = ICON_MAP[key];
            const benefit = t.raw(`items.${key}`) as {title: string; description: string};
            return (
              <article
                key={key}
                className="flex h-full flex-col gap-5 rounded-2xl border border-transparent bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/40"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="size-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70">{benefit.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
