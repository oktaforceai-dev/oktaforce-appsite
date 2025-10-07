'use client';

import type {ComponentType, SVGProps} from 'react';
import {CheckCircle2, Minus, X, BrainCircuit, LayoutDashboard, CloudCog, Handshake, Boxes} from 'lucide-react';
import {useTranslations} from 'next-intl';

type Status = 'included' | 'partial' | 'missing';

type ComparisonFeature = {
  name: string;
  oktaforce: Status;
  market: Status;
};

const FEATURE_ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [BrainCircuit, LayoutDashboard, CloudCog, Handshake, Boxes];

export function SolutionsComparison() {
  const t = useTranslations('solutions.comparison');

  const features = t.raw('features') as ComparisonFeature[];
  const legend = t.raw('legend') as Record<Status, string>;
  const columns = t.raw('columns') as Record<'feature' | 'oktaforce' | 'market', string>;
  const subtitle = t.has('subtitle') ? t('subtitle') : undefined;
  const tableLabel = t.has('tableAria') ? t('tableAria') : 'Fast comparison between OKTAFORCE and market offerings';

  return (
    <section className="section-padding">
      <div className="section-container max-w-5xl">
        <div className="w-full overflow-hidden rounded-3xl bg-[#10151f] px-6 pb-8 pt-7 shadow-[0_30px_80px_rgba(10,12,20,0.55)] ring-1 ring-white/10 md:px-9 md:pb-11 md:pt-9">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{t('title')}</h2>
            {subtitle ? <p className="mt-1 text-base text-zinc-400">{subtitle}</p> : null}
          </div>

          <div className="hidden w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0d131d] md:block">
            <table className="w-full border-collapse text-left" aria-label={tableLabel}>
              <thead className="bg-gradient-to-r from-[#111a29] via-[#111a29] to-[#0d131d] text-sm uppercase tracking-[0.08em] text-zinc-200">
                <tr>
                  <th scope="col" className="px-10 py-5 font-semibold text-zinc-100">{columns.feature}</th>
                  <th scope="col" className="px-10 py-5 text-center font-semibold text-zinc-100">{columns.oktaforce}</th>
                  <th scope="col" className="px-10 py-5 text-center font-semibold text-zinc-100">{columns.market}</th>
                </tr>
              </thead>
              <tbody className="text-base text-zinc-100">
                {features.map((feature, idx) => {
                  const Icon = FEATURE_ICONS[idx] ?? BrainCircuit;
                  return (
                    <tr key={feature.name} className={idx % 2 ? 'bg-[#101823]' : undefined}>
                      <td className="px-10 py-6">
                        <div className="flex items-start gap-5">
                          <span className="mt-1 flex size-[3.5rem] items-center justify-center rounded-2xl bg-[#131b28] text-white/80 ring-1 ring-white/10">
                            <Icon className="size-8" aria-hidden />
                            <span className="sr-only">{feature.name}</span>
                          </span>
                          <div className="leading-tight">
                            <div className="font-semibold tracking-tight text-zinc-100">{feature.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-10 py-6 text-center">
                        <OktaBadge label={legend.included} />
                      </td>
                      <td className="px-10 py-6 text-center">
                        <MarketBadge status={feature.market} label={legend[feature.market]} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="space-y-5 md:hidden">
            {features.map((feature, idx) => {
              const Icon = FEATURE_ICONS[idx] ?? BrainCircuit;
              return (
                <div key={feature.name} className="rounded-3xl border border-white/10 bg-[#0d131d] p-5">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex size-12 items-center justify-center rounded-2xl bg-[#131b28] text-white/80 ring-1 ring-white/10">
                      <Icon className="size-7" aria-hidden />
                      <span className="sr-only">{feature.name}</span>
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold tracking-tight text-zinc-100">{feature.name}</div>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3">
                    <div className="rounded-2xl bg-[#291d5a] p-4 text-center ring-1 ring-white/10">
                      <div className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70">{columns.oktaforce}</div>
                      <div className="mt-2 flex justify-center">
                        <OktaBadge label={legend.included} />
                      </div>
                    </div>
                    <div className="rounded-2xl bg-[#161b24] p-4 text-center ring-1 ring-white/10">
                      <div className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-400">{columns.market}</div>
                      <div className="mt-2 flex justify-center">
                        <MarketBadge status={feature.market} label={legend[feature.market]} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-6 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#8a7bff]" aria-hidden /> ✓ = {legend.included}
            </span>
            <span className="inline-flex items-center gap-2">
              <Minus className="size-4 text-zinc-300" aria-hidden /> — = {legend.partial}
            </span>
            <span className="inline-flex items-center gap-2">
              <X className="size-4 text-red-400" aria-hidden /> ✗ = {legend.missing}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function OktaBadge({label}: {label: string}) {
  return (
    <div className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full bg-[#604bff] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(96,75,255,0.35)] ring-1 ring-white/20">
      <CheckCircle2 className="size-[1.15rem]" aria-hidden />
      <span className="tracking-tight">{label}</span>
    </div>
  );
}

function MarketBadge({status, label}: {status: Status; label: string}) {
  const isLimited = status === 'partial';
  const icon = isLimited ? <Minus className="size-[1.15rem] text-zinc-300" aria-hidden /> : <X className="size-[1.15rem] text-red-400" aria-hidden />;
  const prefix = isLimited ? '—' : '✗';

  return (
    <div className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full bg-[#1f222e] px-5 py-2 text-sm font-semibold text-zinc-100 ring-1 ring-white/10">
      {icon}
      <span className="tracking-tight">{`${prefix} ${label}`}</span>
    </div>
  );
}
