'use client';

import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {useLocale, useTranslations} from 'next-intl';

const DATA = [
  {name: 'payroll', traditional: 420, oktaforce: 140},
  {name: 'infrastructure', traditional: 110, oktaforce: 65},
  {name: 'risk', traditional: 90, oktaforce: 20}
];

export default function SolutionsSavingsChart() {
  const t = useTranslations('solutions.savingsChart');
  const locale = useLocale();
  const labels = t.raw('buckets') as Record<string, string>;
  const series = t.raw('series') as Record<'traditional' | 'oktaforce', string>;
  const axis = t.raw('axis') as {currency: string};

  const formatter = new Intl.NumberFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  });

  return (
    <section className="section-padding">
      <div className="section-container">
        <h2 className="section-title text-left">{t('title')}</h2>
        <p className="mt-2 text-sm text-foreground/70">{t('description')}</p>
        <div className="mt-8 h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={DATA} barGap={12}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.25)" />
              <XAxis
                dataKey="name"
                tickFormatter={(value) => labels[value] ?? value}
                tick={{fill: 'var(--color-foreground)'}}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tickFormatter={(value) => `${formatter.format(Number(value) * 1000)}`}
                label={{
                  value: axis.currency,
                  angle: -90,
                  position: 'insideLeft',
                  style: {fill: 'var(--color-foreground)'}
                }}
                width={80}
                tick={{fill: 'var(--color-foreground)'}}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                formatter={(value, name) => [
                  formatter.format(Number(value) * 1000),
                  name === 'traditional' ? series.traditional : series.oktaforce
                ]}
                labelFormatter={(label) => labels[label] ?? label}
                contentStyle={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid rgba(148,163,184,0.25)',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="traditional" fill="rgba(148,163,184,0.5)" name={series.traditional} radius={[4, 4, 0, 0]} />
              <Bar dataKey="oktaforce" fill="var(--color-brand)" name={series.oktaforce} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
