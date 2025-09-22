'use client';

import Image from 'next/image';
import {BarChart2, FileLock2, Headphones, Server} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

const DIFFERENTIALS = [
  {key: 'redundancy', icon: Server},
  {key: 'lgpd', icon: FileLock2},
  {key: 'dashboard', icon: BarChart2},
  {key: 'service', icon: Headphones}
] as const;

const BG_IMAGE = '/img_monitoramentoEfetivo.webp';

export function DifferentialsHighlights() {
  const t = useTranslations('home.differentials');

  return (
    <section className="relative overflow-hidden p-0">
      <div className="absolute inset-0">
        <Image
          src={BG_IMAGE}
          alt="Background"
          fill
          priority={false}
          className="object-cover object-top opacity-20"
        />
      </div>

      <div className="relative py-0">
        <div className="section-container py-8 md:py-12">
          <SectionHeading kicker={t('kicker')} title={t('title')} />
          <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
            {DIFFERENTIALS.map(({key, icon: Icon}) => (
              <article
                key={key}
                className="rounded-1xl border border-transparent bg-surface/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-brand/40"
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">{t(`items.${key}.title`)}</h3>
                    <p className="text-sm text-foreground/70">{t(`items.${key}.description`)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
