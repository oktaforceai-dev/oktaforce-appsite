'use client';

import {useTranslations} from 'next-intl';

const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.001972503263!2d-46.69161562399392!3d-23.568607165804202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5731af3e9d4f%3A0xb1d0cf76e95d85f1!2sAv.%20Brigadeiro%20Faria%20Lima%2C%202369%20-%20Jardim%20Paulistano%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001452-000!5e0!3m2!1spt-BR!2sbr!4v1707341234567!5m2!1spt-BR!2sbr';

export function ContactMap() {
  const t = useTranslations('contact.map');

  return (
    <section className="section-padding">
      <div className="section-container max-w-4xl space-y-6">
        <div>
          <h2 className="font-display text-2xl font-semibold text-foreground">{t('title')}</h2>
          <p className="mt-2 text-sm text-foreground/70">{t('description')}</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-transparent shadow-sm">
          <iframe
            title="OKTAFORCE Sao Paulo"
            src={MAP_EMBED_URL}
            height="320"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
