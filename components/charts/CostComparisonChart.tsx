'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { useLocale, useTranslations } from 'next-intl';

const DATA = [
  { name: 'payroll', traditional: 420, oktaforce: 140 },
  { name: 'infrastructure', traditional: 110, oktaforce: 65 },
  { name: 'risk', traditional: 90, oktaforce: 20 }
];

export function CostComparisonChart() {
  const t = useTranslations('home.plans.chart');
  const locale = useLocale();
  const traditionalLabel = t('series.traditional');
  const oktaforceLabel = t('series.oktaforce');
  const formatter = new Intl.NumberFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  });

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={DATA} barGap={12}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.25)" />
          <XAxis
            dataKey="name"
            tickFormatter={(value) => t(`buckets.${value}`)}
            tick={{ fill: 'var(--color-foreground)' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(value) => formatter.format(value * 1000)}
            width={80}
            tick={{ fill: 'var(--color-foreground)' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: 'rgba(124,58,237,0.08)' }}
            formatter={(value: number, key: string) => [formatter.format(value * 1000), key === 'traditional' ? traditionalLabel : oktaforceLabel]}
            labelFormatter={(label: string) => t(`buckets.${label}`)}
          />
          <Bar dataKey="traditional" name={traditionalLabel} fill="rgba(148,163,184,0.6)" radius={[12, 12, 0, 0]} />
          <Bar dataKey="oktaforce" name={oktaforceLabel} fill="rgba(124,58,237,0.85)" radius={[12, 12, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p className="mt-2 text-center text-xs text-foreground/60">{t('axis.currency')}</p>
    </div>
  );
}
