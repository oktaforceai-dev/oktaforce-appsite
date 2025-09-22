'use client';

import {Package, ShieldCheck, Video} from 'lucide-react';
import {useTranslations} from 'next-intl';

const MODULE_ICONS = {
  remote: ShieldCheck,
  oktavision: Video,
  lockers: Package
} as const;

type Section = {
  key: keyof typeof MODULE_ICONS;
  title: string;
  headline: string;
  description: string;
  bullets: string[];
};

export function SolutionModules() {
  const t = useTranslations('solutions');
  const sections = t.raw('sections') as Section[];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {sections.map((section) => {
            const Icon = MODULE_ICONS[section.key];
            return (
              <article
                key={section.key}
                className="flex h-full flex-col rounded-2xl border border-transparent bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/40"
              >
                <span className="flex size-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="size-7" aria-hidden />
                </span>
                <h2 className="mt-4 font-display text-xl font-semibold text-foreground">{section.title}</h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand/70">{section.headline}</p>
                <p className="mt-3 text-sm text-foreground/70">{section.description}</p>
                <ul className="mt-4 flex flex-col gap-2 text-sm text-foreground/80">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-brand" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
