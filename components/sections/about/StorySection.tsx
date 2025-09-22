'use client';

import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

export function StorySection() {
  const t = useTranslations('about.story');
  const paragraphs = t.raw('paragraphs') as string[];

  return (
    <section className="section-padding">
      <div className="section-container max-w-4xl">
        <SectionHeading title={t('title')} align="left" />
        <div className="mt-6 space-y-4 text-base text-foreground/80">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
