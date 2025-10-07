'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

export function IntelligenceSection() {
  const t = useTranslations('home.intelligence');
  const highlights = t.raw('highlights') as Array<{text: string}>;
  const image = t.raw('image') as {src: string; alt: string};

  return (
    <section className="section-padding relative overflow-hidden">
      {/* full-section animated octagon background (white lines, 10% opacity) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <svg className="w-full h-full intelligence-octagon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <g stroke="currentColor" strokeWidth="0.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <g className="octagon-group">
              {/* outer regular octagon (r ~36) */}
              <polygon points="50,14 75.46,24.54 86,50 75.46,75.46 50,86 24.54,75.46 14,50 24.54,24.54" />
              {/* middle regular octagon (r ~28) */}
              <polygon points="50,22 69.8,30.2 78,50 69.8,69.8 50,78 30.2,69.8 22,50 30.2,30.2" />
              {/* inner regular octagon (r ~20) */}
              <polygon points="50,30 64.14,35.86 70,50 64.14,64.14 50,70 35.86,64.14 30,50 35.86,35.86" />
            </g>
          </g>
        </svg>
      </div>
      <div className="section-container grid gap-12 lg:grid-cols-[1fr,0.85fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeading
            kicker={t('kicker')}
            title={t('title')}
            subtitle={t('subtitle')}
          />

          <ul className="space-y-4 text-sm text-foreground/80">
            {highlights.map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <span className="mt-1 inline-flex size-5 items-center justify-center rounded-full bg-brand/10 text-brand">•</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-3xl border border-brand/20 bg-brand/5 p-6 shadow-lg">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
            <Image src={image.src} alt={image.alt} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
