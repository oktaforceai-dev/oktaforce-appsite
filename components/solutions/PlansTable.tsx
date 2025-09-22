'use client';

import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WHATSAPP_LINK } from '@/lib/siteConfig';

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

export default function PlansTable() {
  const t = useTranslations('home.plans');
  const tableT = useTranslations('home.plans.table');

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          kicker={t('kicker')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-16 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-transparent">
                <th className="pb-4 text-left font-semibold text-foreground">
                  {tableT('features')}
                </th>
                {plans.map((plan) => (
                  <th key={plan} className="pb-4 text-center font-semibold text-foreground">
                    {t(`plans.${plan}.name`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((feature) => (
                <tr key={feature.key} className="border-b border-transparent">
                  <td className="py-4 pr-8 font-medium text-foreground">
                    {tableT(`features.${feature.key}`)}
                  </td>
                  {plans.map((plan) => (
                    <td key={plan} className="py-4 text-center">
                      {renderAvailability(feature.matrix[plan], (key) => tableT(`availability.${key}`))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan}
              className="rounded-2xl border border-transparent bg-surface p-6"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {t(`plans.${plan}.name`)}
              </h3>
              <p className="mt-2 text-foreground/80">
                {t(`plans.${plan}.description`)}
              </p>
              <div className="mt-4">
                <ButtonLink href={WHATSAPP_LINK} external size="sm">
                  {t('cta')}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}