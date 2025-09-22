'use client';

import { useLocale, useTranslations } from 'next-intl';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { WHATSAPP_LINK } from '@/lib/siteConfig';
import { Link } from '@/lib/navigation';

export function DifferentialsCTA() {
  const t = useTranslations('differentials.cta');
  const locale = useLocale();

  return (
    <section className="section-padding text-center">
      <div className="section-container">
        <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">{t('title')}</h2>
        <p className="mt-3 text-base text-foreground/80 md:text-lg">{t('subtitle')}</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href={{ pathname: '/contact', query: { tipo: 'diagnostico' } }}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-transparent text-foreground hover:border-brand hover:text-brand px-6 py-3 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {t('primary')}
          </Link>
          <ButtonLink href={WHATSAPP_LINK} external variant="secondary" size="lg">
            {t('secondary')}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
