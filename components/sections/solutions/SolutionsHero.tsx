'use client';

import Image from 'next/image';
import {useLocale, useTranslations} from 'next-intl';
import {ButtonLink} from '@/components/ui/ButtonLink';
import {Link} from '@/i18n/routing';

const HERO_BACKGROUND = '/img_chaveMobile.webp';

export default function SolutionsHero() {
  const t = useTranslations('solutions.hero');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden p-0">
      <div className="relative w-full" style={{aspectRatio: '21/9'}}>
        <Image
          src={HERO_BACKGROUND}
          alt="Solutions background"
          fill
          priority
          className="object-cover object-top opacity-10 dark:opacity-100"
        />
        <div className="absolute inset-0 bg-transparent dark:bg-black/60" />
        <div className="absolute inset-0">
          <div className="container mx-auto flex h-full items-end justify-center px-8 pb-8 md:pb-12 text-center">
            <div className="w-full text-center space-y-4">
              <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">{t('title')}</h1>
              <p className="text-base text-foreground/85 md:text-lg">{t('subtitle')}</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <Link
                  href="/pricing"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-transparent text-foreground hover:border-brand hover:text-brand px-6 py-3 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {t('cta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
