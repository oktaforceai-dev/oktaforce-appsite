'use client';

import Image from 'next/image';
import {useLocale, useTranslations} from 'next-intl';
import {ButtonLink} from '@/components/ui/ButtonLink';
import {WHATSAPP_LINK} from '@/lib/siteConfig';

const HERO_BACKGROUND = '/img_notificacaoPush.webp';

export function ContactHero() {
  const t = useTranslations('contact.hero');
  const whatsapp = useTranslations('contact.whatsapp');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden p-0">
      <div className="relative w-full" style={{aspectRatio: '21/9'}}>
        <Image
          src={HERO_BACKGROUND}
          alt="Contact background"
          fill
          priority
          className="object-cover object-top opacity-10 dark:opacity-100"
        />
        <div className="absolute inset-0 bg-transparent dark:bg-black/60" />
        <div className="absolute inset-0">
          <div className="container mx-auto flex h-full items-end justify-center px-8 pb-8 md:pb-12 text-center">
            <div className="max-w-3xl space-y-6">
              <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">{t('title')}</h1>
              <p className="text-base text-foreground/70 md:text-lg">{t('subtitle')}</p>
              <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                <ButtonLink
                  href={WHATSAPP_LINK}
                  external
                  size="lg"
                  eventName="cta_whatsapp_clicked"
                  eventData={{page: 'contact', locale, placement: 'hero'}}
                >
                  {whatsapp('cta')}
                </ButtonLink>
                <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">{whatsapp('helper')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
