'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';

const HERO_BACKGROUND = '/img_chaveMobile.webp';

export default function SolutionsHero() {
  const t = useTranslations('solutions.hero');

  return (
    <section className="relative overflow-hidden p-0 bg-tech">
      <div className="relative w-full aspect-[5/7] lg:aspect-[21/9]">
        <Image
          src={HERO_BACKGROUND}
          alt="Solutions background"
          fill
          priority
          className="object-cover object-top opacity-40 transition-opacity duration-500 dark:opacity-100"
        />
        <div className="absolute inset-0 bg-white/30 transition-colors duration-500 dark:bg-transparent" />
        <div className="absolute inset-0">
          <div className="container mx-auto flex h-full items-end justify-center px-8 pb-8 md:pb-12 text-center">
            <div className="w-full text-center space-y-4">
              <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">{t('title')}</h1>
              <p className="text-base text-foreground/85 md:text-lg">{t('subtitle')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
