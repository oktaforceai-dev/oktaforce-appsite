'use client';

import Image from 'next/image';
import {useLocale, useTranslations} from 'next-intl';
import {ButtonLink} from '@/components/ui/ButtonLink';
import {Link} from '@/i18n/routing';

const HERO_IMAGE = '/exterior-modern-residential-banner.webp';
const CTA_LINK = 'https://api.whatsapp.com/send?phone=5511966445253&text=Venho%20do%20Site';

export default function HeroSection() {
  const locale = useLocale();
  const t = useTranslations('home.hero');
  const hero = t.raw('content') as {
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    caption: string;
    imageAlt: string;
    highlight?: {label: string; value: string}[];
  };

  return (
    <section className="relative overflow-hidden bg-tech">
      <div className="relative w-full aspect-[5/7] lg:aspect-[16/9]">
        <Image
          src={HERO_IMAGE}
          alt={hero.imageAlt}
          fill
          priority
          className="z-0 object-cover object-center brightness-[1.15] transition-[filter] duration-500 dark:brightness-75"
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-br from-white/70 via-white/45 to-white/15 transition-colors duration-500 dark:from-black/70 dark:via-black/60 dark:to-black/40" />
        <div className="absolute inset-0 z-30 flex">
          <div className="container mx-auto flex h-full flex-col justify-start px-4 pt-24 pb-12 md:px-6 md:pt-12 lg:grid lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:gap-8 lg:px-6 lg:pt-0 lg:pb-32">
            <div className="flex flex-1 flex-col justify-start space-y-6 text-balance text-foreground transition-colors duration-500 dark:text-white">
              <div className="max-w-3xl space-y-6 text-balance text-foreground transition-colors duration-500 dark:text-white">
                <h1 className="font-display text-4xl font-semibold leading-tight text-foreground transition-colors duration-500 dark:text-white md:text-5xl">
                  {hero.title}
                </h1>
                <h2 className="text-xl font-semibold text-foreground/80 transition-colors duration-500 dark:text-white/90 lg:text-2xl">
                  {hero.subtitle}
                </h2>
                <p className="hidden rounded-2xl border border-foreground/10 bg-white/60 px-6 py-5 text-base text-foreground/75 backdrop-blur-md transition-all duration-500 dark:border-white/10 dark:bg-black/40 dark:text-white/80 lg:block lg:max-w-2xl">
                  {hero.description}
                </p>
                <div className="flex flex-col gap-3 pt-4 sm:flex-row lg:pt-2">
                  <ButtonLink href={CTA_LINK} external size="lg" className="w-full sm:w-auto">
                    {hero.primaryCta}
                  </ButtonLink>
                  <Link
                    href="/contact"
                    locale={locale}
                    className="hidden min-h-[44px] items-center justify-center rounded-xl border border-transparent px-6 py-3 text-base font-semibold text-foreground transition-colors duration-300 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:text-white lg:inline-flex"
                  >
                    {hero.secondaryCta}
                  </Link>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60 transition-colors duration-500 dark:text-white/75">
                  {hero.caption}
                </p>
              </div>
            </div>

            {hero.highlight?.length ? (
              <div className="mt-10 hidden h-full flex-col justify-center gap-5 lg:flex">
                {hero.highlight.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-foreground/10 bg-white/70 p-5 text-left transition-colors duration-500 dark:border-white/10 dark:bg-black/35"
                  >
                    <p className="text-2xl font-semibold text-foreground transition-colors duration-500 dark:text-white">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.3em] text-foreground/70 transition-colors duration-500 dark:text-white/80">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
