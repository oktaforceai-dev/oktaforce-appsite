'use client';

import { Check, Minus, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

type Status = 'included' | 'partial' | 'missing';

const STATUS_ICON: Record<Status, typeof Check> = {
  included: Check,
  partial: Minus,
  missing: X
};

const STATUS_CLASS: Record<Status, string> = {
  included: 'text-brand',
  partial: 'text-foreground/60',
  missing: 'text-foreground/40'
};

export function ComparisonTable() {
  const t = useTranslations('differentials.comparison');
  const features = t.raw('features') as Array<{ name: string; oktaforce: Status; market: Status }>;
  const legend = t.raw('legend') as Record<Status, string>;

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-title text-left">{t('title')}</h2>
        <div className="mt-6 overflow-hidden rounded-3xl border border-transparent">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-surface-alt">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-foreground/70">Feature</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground/70">OKTAFORCE</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground/70">Mercado</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.name} className="odd:bg-surface even:bg-surface-alt/60">
                  <td className="px-4 py-3 text-foreground">{feature.name}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={feature.oktaforce} label={legend[feature.oktaforce]} />
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={feature.market} label={legend[feature.market]} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status, label }: { status: Status; label: string }) {
  const Icon = STATUS_ICON[status];
  const color = STATUS_CLASS[status];
  const tone =
    status === 'included'
      ? 'border-brand/60 bg-brand/10 text-brand'
      : status === 'partial'
      ? 'border-transparent bg-surface/90 text-foreground/70'
      : 'border-transparent bg-surface/80 text-foreground/50';

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${tone}`}>
      <Icon className={`size-4 ${color}`} />
      {label}
    </span>
  );
}
