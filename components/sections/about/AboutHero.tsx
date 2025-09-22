'use client';

import Image from 'next/image';
import {useLocale, useTranslations} from 'next-intl';
import {ButtonLink} from '@/components/ui/ButtonLink';
import { Link } from '@/lib/navigation';

const HERO_IMAGE = '/img_ordemChamadas.webp';

export function AboutHero() {
  const t = useTranslations('about.hero');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden p-0">
      <div className="relative w-full" style={{aspectRatio: '21/9'}}>
        <Image
          src={HERO_IMAGE}
          alt={t('title')}
          fill
          priority
          className="object-cover object-top opacity-10 dark:opacity-100"
        />
        <div className="absolute inset-0 bg-transparent dark:bg-black/60" />
        <div className="absolute inset-0">
          <div className="container mx-auto flex h-full items-end justify-center px-8 pb-8 md:pb-12 text-center">
            <div className="mx-auto max-w-3xl">
              <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">{t('title')}</h1>
              <p className="mt-3 text-base text-foreground/85 md:text-lg">{t('subtitle')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
