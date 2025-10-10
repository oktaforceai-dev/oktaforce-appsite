'use client';

import Image from 'next/image';
import {useLocale, useTranslations} from 'next-intl';
import {ButtonLink} from '@/components/ui/ButtonLink';
import {Link} from '@/i18n/routing';

const HERO_BACKGROUND = '/img_monitoramenteEfetivo.webp';

type Metric = {
  value: string;
  label: string;
};

export function PricingHero() {
  const locale = useLocale();
  const t = useTranslations('pricing.hero');
  const metrics = t.raw('metrics') as Metric[] | undefined;

  return (
    <section className="relative overflow-hidden p-0 bg-tech">
      <div className="relative w-full aspect-[5/7] lg:aspect-[21/9]">
        <Image
          src={HERO_BACKGROUND}
          alt={t('title')}
          fill
          priority
          className="object-cover object-top opacity-40 transition-opacity duration-500 dark:opacity-100"
        />
        <div className="absolute inset-0 bg-white/30 transition-colors duration-500 dark:bg-transparent" />
        <div className="absolute inset-0">
          <div className="container mx-auto flex h-full flex-col items-center justify-end gap-8 px-8 py-12 text-center">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                {t('tagline')}
              </span>
              <h1 className="font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                {t('title')}
              </h1>
              <p className="hidden text-base text-foreground/80 sm:block sm:text-sm md:text-lg">{t('description')}</p>
              <div className="flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row">
                <ButtonLink
                  href="/contact"
                  size="lg"
                  eventName="cta_whatsapp_clicked"
                  eventData={{page: 'pricing', locale, placement: 'hero'}}
                >
                  {t('primaryCta')}
                </ButtonLink>
                <ButtonLink
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  eventName="cta_demo_requested"
                  eventData={{page: 'pricing', locale, placement: 'hero'}}
                  className="pointer-events-none opacity-50 sm:pointer-events-auto sm:opacity-100"
                  aria-disabled={true}
                >
                  {t('secondaryCta')}
                </ButtonLink>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                {t('caption')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
