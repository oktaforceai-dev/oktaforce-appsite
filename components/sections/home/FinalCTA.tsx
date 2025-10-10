'use client';

import {useTranslations} from 'next-intl';
import {ButtonLink} from '@/components/ui/ButtonLink';

const CTA_LINK = 'https://wa.me/SEUNUMERO';

export function FinalCTA() {
  const t = useTranslations('home.cta');
  const content = t.raw('content') as {line1: string; line2: string; line3: string; primaryCta: string};

  return (
    <section className="section-padding relative left-1/2 w-screen -translate-x-1/2 transform-gpu overflow-hidden">
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <img
          src="/back-view-deliverer-cta.webp"
          alt=""
          className="h-full w-full object-cover"
          style={{opacity: 0.45}}
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
      <div className="section-container relative">
        <div className="card-glass rounded-2xl p-10 text-center shadow-brand">
          <div className="space-y-4 text-balance text-foreground">
            <p className="text-2xl md:text-3xl">{content.line1}</p>
            <p className="text-xl font-semibold md:text-2xl">{content.line2}</p>
            <p className="text-base md:text-lg">{content.line3}</p>
          </div>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={CTA_LINK} external size="lg">
              {content.primaryCta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
