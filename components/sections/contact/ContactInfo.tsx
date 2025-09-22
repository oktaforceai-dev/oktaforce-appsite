'use client';

import {Mail, MapPin, Phone} from 'lucide-react';
import {useTranslations} from 'next-intl';

const ICONS = {
  phone: Phone,
  email: Mail,
  address: MapPin
} as const;

type InfoType = keyof typeof ICONS;

export function ContactInfo() {
  const t = useTranslations('contact.info');
  const items = t.raw('items') as Array<{label: string; value: string; type: InfoType}>;

  return (
    <section className="section-padding bg-surface-alt/70">
      <div className="section-container max-w-4xl space-y-6">
        <h2 className="section-title text-center">{t('title')}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => {
            const Icon = ICONS[item.type] ?? Phone;
            const href =
              item.type === 'phone'
                ? `tel:${item.value.replace(/[^\d+]/g, '')}`
                : item.type === 'email'
                ? `mailto:${item.value}`
                : undefined;
            return (
              <div key={item.label} className="rounded-2xl border border-transparent bg-surface p-6 text-center shadow-sm">
                <Icon className="mx-auto size-6 text-brand" aria-hidden />
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-foreground/60">{item.label}</p>
                {href ? (
                  <a href={href} className="mt-2 block font-display text-sm font-semibold text-foreground transition hover:text-brand">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 font-display text-sm font-semibold text-foreground">{item.value}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
