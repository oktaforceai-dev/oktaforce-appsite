'use client';

import {AlertTriangle, BarChart3, CalendarClock, CreditCard, ShieldOff} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

type PainKey = 'costs' | 'humanError' | 'lackVisibility' | 'compliance' | 'staffing';

const PAIN_ITEMS: Array<{key: PainKey; icon: typeof CreditCard}> = [
  {key: 'costs', icon: CreditCard},
  {key: 'humanError', icon: ShieldOff},
  {key: 'lackVisibility', icon: BarChart3},
  {key: 'compliance', icon: AlertTriangle}
];

export function PainPoints() {
  const t = useTranslations('home.pains');

  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeading kicker={t('kicker')} title={t('title')} subtitle={t('subtitle')} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {PAIN_ITEMS.map(({key, icon: Icon}) => {
            const item = t.raw(`items.${key}`) as {title: string; description: string; metric: string};
            return (
              <article
                key={key}
                className="h-full rounded-2xl border border-transparent bg-surface-alt/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/40"
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                    <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
