'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

const TEAM_IMAGE = '/img_reconhecimentoFacial.webp';

export function TeamSection() {
  const t = useTranslations('about.team');
  const pillars = t.raw('pillars') as Array<{title: string; description: string}>;

  return (
    <section className="section-padding bg-surface-alt/70">
      <div className="section-container">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} align="center" />
        <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_1fr] md:gap-8">
          <div className="relative overflow-hidden rounded-2xl border border-transparent">
            <Image
              src={TEAM_IMAGE}
              alt="Central OKTAFORCE"
              width={960}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid gap-4">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-transparent bg-surface p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
