'use client';

import {useLocale, useTranslations} from 'next-intl';
import {ButtonLink} from '@/components/ui/ButtonLink';
import {WHATSAPP_LINK} from '@/lib/siteConfig';
import {Link} from '@/lib/navigation';

export function PricingCTA() {
  const t = useTranslations('pricing.cta');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-cyan-500/10 dark:from-brand/25" aria-hidden />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center">
        <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">{t('title')}</h2>
        <p className="mt-3 text-base text-foreground/80 md:text-lg">{t('description')}</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-transparent text-foreground hover:border-brand hover:text-brand px-6 py-3 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {t('primaryCta')}
          </Link>
          <ButtonLink
            href={WHATSAPP_LINK}
            external
            variant="secondary"
            size="lg"
            eventName="cta_whatsapp_clicked"
            eventData={{page: 'pricing', locale, placement: 'cta'}}
          >
            {t('secondaryCta')}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
