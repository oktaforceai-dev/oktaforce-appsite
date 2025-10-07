'use client';

import {Cpu, ShieldCheck, Headphones, ChartBarStacked, Clock4} from 'lucide-react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

const DIFFERENTIAL_ITEMS = [
  {key: 'technology', icon: Cpu},
  {key: 'proactiveSecurity', icon: ShieldCheck},
  {key: 'agileService', icon: Headphones},
  {key: 'dashboard', icon: ChartBarStacked},
  {key: 'technicalSupport', icon: Clock4}
] as const;

export function DifferentialsHighlights() {
  const t = useTranslations('home.differentials');
  const image = t.raw('image') as {src: string; alt: string};

  return (
    <section className="section-padding">
      <div className="section-container grid gap-12 lg:grid-cols-[1fr,0.9fr] lg:items-center">
        <div>
          <SectionHeading kicker={t('kicker')} title={t('title')} subtitle={t('subtitle')} />

          <ul className="mt-8 grid gap-4">
            {DIFFERENTIAL_ITEMS.map(({key, icon: Icon}) => {
              const item = t.raw(`items.${key}`) as {title: string; description: string};
              return (
                <li
                  key={key}
                  className="flex items-start gap-5 rounded-2xl border border-transparent bg-surface-alt/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/40"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-3xl border border-brand/20 bg-brand/5 p-4 shadow-lg">
          <div className="relative w-full overflow-hidden rounded-3xl">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <Image src={image.src} alt={image.alt} fill className="object-contain object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
