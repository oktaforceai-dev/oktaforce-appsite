'use client';

import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function TestimonialsSection() {
  const t = useTranslations('home.testimonials');
  const items = t.raw('items') as Array<{ quote: string; name: string; role: string }>;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          kicker={t('kicker')}
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items?.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-transparent bg-surface p-6"
            >
              <MessageCircle className="mb-4 h-8 w-8 text-brand" />
              <blockquote className="mb-4 text-foreground/80">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <cite className="text-sm font-semibold text-foreground">
                {item.name}
              </cite>
              <p className="text-sm text-foreground/60">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
