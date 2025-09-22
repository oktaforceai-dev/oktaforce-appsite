'use client';

import {useLocale, useTranslations} from 'next-intl';
import {ButtonLink} from '@/components/ui/ButtonLink';
import {WHATSAPP_LINK} from '@/lib/siteConfig';
import { Link } from '@/lib/navigation';

export function AboutCTA() {
  const t = useTranslations('about.cta');
  const locale = useLocale();

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="rounded-2xl border border-brand/30 bg-brand/10 p-10 text-center text-brand">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-base text-brand/80 md:text-lg">{t('subtitle')}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 md:flex-row">
            <ButtonLink
              href={WHATSAPP_LINK}
              external
              size="lg"
              eventName="cta_whatsapp_clicked"
              eventData={{page: 'about', locale, placement: 'cta'}}
            >
              {t('primary')}
            </ButtonLink>
            <Link
              href={{ pathname: '/contact', query: { material: 'institucional' } }}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-transparent text-foreground hover:border-brand hover:text-brand px-6 py-3 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {t('secondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
