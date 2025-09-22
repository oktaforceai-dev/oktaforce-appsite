'use client';

import {ChevronDown} from 'lucide-react';
import {useMemo} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

type FaqItem = {
  question: string;
  answer: string;
};

export function FAQSection() {
  const t = useTranslations('home.faq');
  const locale = useLocale();
  const items = t.raw('items') as FaqItem[];

  const schema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    }),
    [items]
  );

  return (
    <section className="section-padding bg-surface-alt/60">
      <div className="section-container max-w-3xl">
        <SectionHeading kicker={t('kicker')} title={t('title')} align="center" />
        <div className="mt-10 space-y-4">
          {items.map((item) => (
            <details
              key={`${locale}-${item.question}`}
              className="group rounded-2xl border border-transparent bg-surface p-6 shadow-sm transition hover:border-brand/40"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-semibold text-foreground">
                <span>{item.question}</span>
                <ChevronDown className="size-5 transition group-open:rotate-180" aria-hidden />
              </summary>
              <p className="mt-3 text-sm text-foreground/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
    </section>
  );
}
