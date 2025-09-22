'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const HERO_BACKGROUND = '/img_camerasAPP.webp';

export function DifferentialsHero() {
  const t = useTranslations('differentials.hero');

  return (
    <section className="relative overflow-hidden p-0">
      <div className="relative w-screen" style={{ aspectRatio: '16/9' }}>
        <Image
          src={HERO_BACKGROUND}
          alt="Differentials background"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0">
          <div className="relative py-16 md:py-24 text-center">
            <div className="mx-auto max-w-4xl">
              <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
                {t('title')}
              </h1>
              <p className="mt-4 text-base text-foreground/80 md:text-lg">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
