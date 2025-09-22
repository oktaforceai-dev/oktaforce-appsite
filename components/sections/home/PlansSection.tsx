'use client';

import { Check } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
// import { CostComparisonChart } from '@/components/charts/CostComparisonChart';
import { WHATSAPP_LINK } from '@/lib/siteConfig';
import { getPathname } from '@/i18n/routing';

const FEATURES = [
  { key: 'remoteConcierge', matrix: { essential: 'available', advanced: 'available', enterprise: 'available' } },
  { key: 'smartView', matrix: { essential: 'available', advanced: 'available', enterprise: 'available' } },
  { key: 'smartLocker', matrix: { essential: 'optional', advanced: 'available', enterprise: 'available' } },
  { key: 'analytics', matrix: { essential: 'available', advanced: 'available', enterprise: 'available' } },
  { key: 'integrations', matrix: { essential: 'optional', advanced: 'available', enterprise: 'available' } },
  { key: 'onSite', matrix: { essential: 'optional', advanced: 'available', enterprise: 'available' } },
  { key: 'disasterRecovery', matrix: { essential: 'optional', advanced: 'optional', enterprise: 'available' } },
  { key: 'premiumSupport', matrix: { essential: 'optional', advanced: 'available', enterprise: 'available' } }
] as const;

const plans = ['essential', 'advanced', 'enterprise'] as const;

type Availability = 'available' | 'optional' | 'tailored';

function renderAvailability(value: Availability, label: (key: Availability) => string) {
  if (value === 'available') {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white">
        <Check className="mr-1 size-4" />
        {label('available')}
      </span>
    );
  }
  if (value === 'optional') {
    return (
      <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand">
        {label('optional')}
      </span>
    );
  }
  return (
    <span className="rounded-full border border-dashed border-brand px-2.5 py-1 text-xs font-semibold text-brand">
      {label('tailored')}
    </span>
  );
}

export function PlansSection() {
  const t = useTranslations('home.plans');
  const tableT = useTranslations('home.plans.table');
  const noteT = useTranslations('home.plans.table.notes');
  const ctaCommon = useTranslations('common.cta');
  const locale = useLocale();
  const contactHref = getPathname({ locale, href: '/contact' as any });

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={t('kicker')} title={t('title')} subtitle={t('subtitle')} />
        <p className="mt-6 rounded-3xl border border-dashed border-brand/40 bg-brand/5 p-4 text-sm text-foreground/80">
          {t('highlight')}
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-transparent">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-surface-alt">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-foreground/70">
                  {tableT('headers.feature')}
                </th>
                {plans.map((plan) => (
                  <th key={plan} className="px-4 py-3 text-left font-semibold text-foreground/70">
                    {tableT(`headers.${plan}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map(({ key, matrix }) => (
                <tr key={key} className="odd:bg-surface even:bg-surface-alt/60">
                  <td className="px-4 py-3 font-medium text-foreground">
                    {tableT(`rows.${key}`)}
                  </td>
                  {plans.map((plan) => (
                    <td key={plan} className="px-4 py-3">
                      {renderAvailability(matrix[plan] as Availability, (value) => noteT(value))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-transparent bg-surface-alt p-6">
            <h3 className="font-display text-xl font-semibold text-foreground">
              {t('chart.title')}
            </h3>
            <p className="mt-2 text-sm text-foreground/70">{t('chart.description')}</p>
            <div className="mt-6">
              {/* <CostComparisonChart /> */}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-brand/50 bg-brand/10 p-6 text-brand">
            <div>
              <h3 className="font-display text-2xl font-semibold">{t('cta')}</h3>
              <p className="mt-2 text-sm text-brand/80">{t('highlight')}</p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href={WHATSAPP_LINK} external variant="primary" size="md">
                {t('cta')}
              </ButtonLink>
              <ButtonLink href={contactHref} variant="ghost" size="md">
                {ctaCommon('contact')}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
