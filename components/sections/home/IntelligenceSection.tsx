'use client';

import {Brain, Radar, Workflow} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

const LAYERS = [
  {key: 'sense', icon: Radar},
  {key: 'predict', icon: Brain},
  {key: 'act', icon: Workflow}
] as const;

export function IntelligenceSection() {
  const t = useTranslations('home.intelligence');
  const extras = t.raw('extras') as string[];

  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeading kicker={t('kicker')} title={t('title')} subtitle={t('subtitle')} align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {LAYERS.map(({key, icon: Icon}) => (
            <article
              key={key}
              className="rounded-2xl border border-transparent bg-surface-alt/80 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand/40"
            >
              <span className="mx-auto flex size-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon className="size-7" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{t(`layers.${key}.title`)}</h3>
              <p className="mt-2 text-sm text-foreground/70">{t(`layers.${key}.description`)}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-dashed border-brand/40 bg-brand/5 p-6 text-sm text-foreground/80">
          <ul className="grid gap-2 md:grid-cols-3">
            {extras.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
