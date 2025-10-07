'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {SectionHeading} from '@/components/ui/SectionHeading';

export function FAQSection() {
  const t = useTranslations('home.faq');
  const items = t.raw('items') as Array<{question: string; answer: string}>;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-surface-alt/60">
      <div className="section-container max-w-3xl">
        <SectionHeading kicker={t('kicker')} title={t('title')} align="center" />

        <div className="mt-10 space-y-4">
          {items.map(({question, answer}, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={question}
                className="rounded-2xl border border-transparent bg-surface p-6 shadow-sm transition hover:border-brand/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left font-semibold text-foreground"
                >
                  <span>{question}</span>
                  <span
                    aria-hidden
                    className={`inline-flex size-5 items-center justify-center rounded-full bg-brand/10 text-brand transition ${isOpen ? 'rotate-180' : ''}`}
                  >
                    ↓
                  </span>
                </button>
                {isOpen ? <p className="mt-3 text-sm text-foreground/70">{answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
