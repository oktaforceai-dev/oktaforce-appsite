'use client';

import {Check} from 'lucide-react';
import {useLocale, useTranslations} from 'next-intl';
import {ButtonLink} from '@/components/ui/ButtonLink';
import {SectionHeading} from '@/components/ui/SectionHeading';
import {WHATSAPP_LINK} from '@/lib/siteConfig';

type Plan = {
  id: string;
  badge?: string;
  name: string;
  headline: string;
  audience: string;
  priceLabel: string;
  price: string;
  priceNote: string;
  description: string;
  featuresTitle: string;
  features: string[];
  note?: string;
};

const ACCENT_BACKGROUNDS = [
  'from-brand/10 via-transparent to-surface/40',
  'from-[#9370DB]/15 via-transparent to-surface/40',
  'from-[#00FFFF]/15 via-transparent to-surface/40'
];

export function PlansGrid() {
  const locale = useLocale();
  const t = useTranslations('pricing.plans');
  const plans = (t.raw('list') as Plan[]) || [];
  const cardCta = t('cardCta');

  return (
    <section className="section-padding">
      <SectionHeading title={t('title')} subtitle={t('subtitle')} align="center" />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => {
          const accent = ACCENT_BACKGROUNDS[index % ACCENT_BACKGROUNDS.length];
          return (
            <div
              key={plan.id}
              className="relative rounded-3xl border border-transparent bg-surface-alt/90 p-7 shadow-sm transition hover:border-brand/40"
            >
              <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${accent}`} aria-hidden />
              <div className="relative flex h-full flex-col gap-6">
                <div className="space-y-3">
                  {plan.badge ? (
                    <span className="inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
                      {plan.badge}
                    </span>
                  ) : null}
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">{plan.name}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.3em] text-brand/80">
                      {plan.priceLabel}
                    </p>
                    <p className="mt-2 text-3xl font-bold text-brand">{plan.price}</p>
                    <p className="mt-2 text-sm text-foreground/70">{plan.priceNote}</p>
                  </div>
                  <p className="text-sm text-foreground/80">{plan.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                    {plan.audience}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/60">
                    {plan.featuresTitle}
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-brand">
                          <Check className="size-3.5" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.note ? <p className="text-xs text-foreground/60">{plan.note}</p> : null}
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-2">
                  <ButtonLink
                    href={WHATSAPP_LINK}
                    external
                    className="w-full"
                    size="md"
                    eventName="cta_whatsapp_clicked"
                    eventData={{page: 'pricing', locale, plan: plan.id, placement: 'card'}}
                  >
                    {cardCta}
                  </ButtonLink>
                  <ButtonLink
                    href={`/contato?plano=${plan.id}`}
                    variant="secondary"
                    className="w-full"
                    size="md"
                    eventName="cta_demo_requested"
                    eventData={{page: 'pricing', locale, plan: plan.id, placement: 'card'}}
                  >
                    {t('secondaryCta', {plan: plan.name})}
                  </ButtonLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-8 text-center text-sm text-foreground/60">{t('disclaimer')}</p>
    </section>
  );
}
