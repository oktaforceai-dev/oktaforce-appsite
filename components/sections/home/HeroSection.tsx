'use client';

import Image from 'next/image';
import {useLocale, useTranslations} from 'next-intl';
import {ButtonLink} from '@/components/ui/ButtonLink';
import {Link} from '@/i18n/routing';

const HERO_IMAGE = '/exterior-modern-residential-banner.webp';
const CTA_LINK = 'https://wa.me/SEUNUMERO';

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
      <div className="relative w-full" style={{aspectRatio: '16/9'}}>
        <Image
          src={HERO_IMAGE}
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover object-center brightness-75 z-0"
        />
  <div className="absolute inset-0 z-20 bg-gradient-to-br from-black/70 via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 pb-24 md:px-6 md:pb-32">
            <div className="lg:grid lg:grid-cols-[1fr,320px] lg:items-center lg:gap-8">
              {/* Left: main hero content */}
              <div className="max-w-3xl space-y-6 text-white">
                <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{hero.title}</h1>
                <h2 className="text-xl font-semibold md:text-2xl">{hero.subtitle}</h2>
                <p className="text-base text-white/90 md:text-lg">{hero.description}</p>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <ButtonLink href={CTA_LINK} external size="lg" className="w-full sm:w-auto">
                    {hero.primaryCta}
                  </ButtonLink>
                  <Link
                    href="/contact"
                    locale={locale}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-transparent px-6 py-3 text-base font-semibold text-white hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    {hero.secondaryCta}
                  </Link>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">{hero.caption}</p>
              </div>

              {/* Right: highlights stack on lg, grid on smaller screens (kept under content) */}
              {hero.highlight?.length ? (
                <div className="mt-8 lg:mt-0">
                  <div className="hidden lg:flex lg:flex-col lg:items-end lg:gap-6 lg:justify-center lg:h-full">
                    {hero.highlight.map((item) => (
                      <div key={item.label} className="rounded-xl border border-white/10 bg-black/30 p-6 text-center w-[320px] flex flex-col items-center justify-center">
                        <p className="text-3xl font-semibold text-white">{item.value}</p>
                        <p className="text-xs uppercase tracking-[0.25em] mt-1">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* fallback / mobile: show as grid under content */}
                  <div className="mt-6 grid gap-4 text-white/80 sm:grid-cols-3 lg:hidden">
                    {hero.highlight.map((item) => (
                      <div key={item.label} className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
                        <p className="text-3xl font-semibold text-white">{item.value}</p>
                        <p className="text-xs uppercase tracking-[0.25em]">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
