'use client';

import {useTranslations} from 'next-intl';

export function MissionVisionSection() {
  const t = useTranslations('about.missionVision');
  const values = t.raw('values') as Array<{title: string; description: string}>;
  const why = useTranslations('about.why');
  const whyItems = why.raw('items') as Array<{title: string; description: string}>;

  return (
    <section className="section-padding">
      <div className="section-container space-y-12">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-transparent bg-surface p-6 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-foreground">{t('missionHeading')}</h3>
            <p className="mt-3 text-sm text-foreground/70">{t('mission')}</p>
          </article>
          <article className="rounded-2xl border border-transparent bg-surface p-6 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-foreground">{t('visionHeading')}</h3>
            <p className="mt-3 text-sm text-foreground/70">{t('vision')}</p>
          </article>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground">{t('valuesHeading')}</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-transparent bg-surface-alt/80 p-6 shadow-sm">
                <h4 className="font-semibold text-foreground">{value.title}</h4>
                <p className="mt-2 text-sm text-foreground/70">{value.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground">{why('title')}</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {whyItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-transparent bg-surface p-6 shadow-sm">
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
