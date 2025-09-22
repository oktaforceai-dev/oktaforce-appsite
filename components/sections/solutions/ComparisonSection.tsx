'use client';

import {Check, Minus, X} from 'lucide-react';
import {useTranslations} from 'next-intl';

type Status = 'included' | 'partial' | 'missing';

type ComparisonFeature = {
  name: string;
  oktaforce: Status;
  market: Status;
};

const STATUS_ICON: Record<Status, typeof Check> = {
  included: Check,
  partial: Minus,
  missing: X
};

const STATUS_COLOR: Record<Status, string> = {
  included: 'text-brand',
  partial: 'text-foreground/60',
  missing: 'text-foreground/40'
};

const BADGE_STYLE: Record<Status, string> = {
  included: 'border-brand/60 bg-brand/10 text-brand',
  partial: 'border-transparent bg-surface/90 text-foreground/70',
  missing: 'border-transparent bg-surface/80 text-foreground/50'
};

export function SolutionsComparison() {
  const t = useTranslations('solutions.comparison');
  const features = t.raw('features') as ComparisonFeature[];
  const legend = t.raw('legend') as Record<Status, string>;
  const columns = t.raw('columns') as Record<'feature' | 'oktaforce' | 'market', string>;

  return (
    <section className="section-padding">
      <div className="section-container max-w-5xl">
        <h2 className="section-title text-left">{t('title')}</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-transparent">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-surface-alt">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-foreground/70">{columns.feature}</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground/70">{columns.oktaforce}</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground/70">{columns.market}</th>
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

function StatusBadge({status, label}: {status: Status; label: string}) {
  const Icon = STATUS_ICON[status];
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${BADGE_STYLE[status]}`}>
      <Icon className={`size-4 ${STATUS_COLOR[status]}`} aria-hidden />
      {label}
    </span>
  );
}
