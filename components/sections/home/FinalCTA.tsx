'use client';

import {useLocale, useTranslations} from 'next-intl';
import {ButtonLink} from '@/components/ui/ButtonLink';
import {WHATSAPP_LINK} from '@/lib/siteConfig';
import { Link } from '@/lib/navigation';

export function FinalCTA() {
  const t = useTranslations('home.cta');
  const locale = useLocale();

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/12 via-brand/8 to-surface-alt p-10 text-center shadow-brand">
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-base text-foreground/80 md:text-lg">{t('subtitle')}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row">
            <ButtonLink
              href={WHATSAPP_LINK}
              external
              size="lg"
              eventName="cta_whatsapp_clicked"
              eventData={{page: 'home', locale, placement: 'final_cta'}}
            >
              {t('primary')}
            </ButtonLink>
            <Link href={{pathname: '/contact'}} locale={locale} className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-transparent text-foreground hover:border-brand hover:text-brand px-6 py-3 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
              {t('secondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
