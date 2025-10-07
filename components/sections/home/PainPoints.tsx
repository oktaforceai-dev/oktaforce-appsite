'use client';

import Image from 'next/image';
import {AlertTriangle, BarChart3, CreditCard, GaugeCircle} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

const ICON_MAP = {
  costs: CreditCard,
  humanRisk: AlertTriangle,
  lackControl: BarChart3,
  inefficiency: GaugeCircle
} as const;

const PAIN_KEYS = Object.keys(ICON_MAP) as Array<keyof typeof ICON_MAP>;
const COMPARISON_IMAGES = ['traditional', 'remote'] as const;

export function PainPoints() {
  const t = useTranslations('home.pains');
  const comparison = t.raw('comparison') as {
    kicker: string;
    subtitle: string;
    images: Record<(typeof COMPARISON_IMAGES)[number], {src: string; alt: string; label: string}>;
  };

  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeading kicker={t('kicker')} title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <div className="grid gap-6 md:grid-cols-2">
            {PAIN_KEYS.map((key) => {
              const Icon = ICON_MAP[key];
              const item = t.raw(`items.${key}`) as {title: string; description: string};
              return (
                <article
                  key={key}
                  className="group h-full rounded-2xl border border-transparent bg-surface-alt/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/40"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
            {/* Subtitle kept, kicker removed */}
            <p className="text-sm text-foreground/80 text-center">{comparison.subtitle}</p>
            <div className="flex items-center justify-center gap-0 w-full">
              {/* Two images side-by-side, no white boxes, responsive */}
              {COMPARISON_IMAGES.map((variant) => {
                const image = comparison.images[variant];
                return (
                  <div key={variant} className="relative w-full sm:w-1/2 aspect-[3/4] overflow-hidden">
                    <Image src={image.src} alt={image.alt} fill className="object-contain object-center" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
