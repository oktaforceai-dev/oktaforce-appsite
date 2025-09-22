import Image from 'next/image';
import {getLocale, getTranslations} from 'next-intl/server';
import {ButtonLink} from '@/components/ui/ButtonLink';
import {WHATSAPP_LINK} from '@/lib/siteConfig';
import { Link } from '@/i18n/routing';

const HERO_IMAGE = '/20220531_145932.webp';

type Stat = {
  value: string;
  label: string;
};

export default async function HeroSection() {
  const locale = await getLocale();
  const t = await getTranslations('home.hero');
  const stats = t.raw('stats') as Stat[] | undefined;

  return (
    <section className="relative overflow-hidden p-0">
      <div className="relative w-full" style={{aspectRatio: '16/9'}}>
        <Image
          src={HERO_IMAGE}
          alt="OKTAFORCE remote concierge operations"
          fill
          priority
          className="object-cover object-top opacity-10 dark:opacity-100"
        />
        <div className="absolute inset-0 bg-transparent dark:bg-black/60" />
        <div className="absolute inset-0">
          <div className="container mx-auto flex h-full flex-col items-start justify-end px-4 md:px-6 pb-28 md:pb-40">
            <div className="max-w-3xl space-y-6 md:ml-32">
              <p className="section-kicker text-brand/90">{t('tagline')}</p>
              <h1 className="font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                {t('title')}
              </h1>
              <p className="text-base text-foreground/90 md:text-lg">{t('subtitle')}</p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <ButtonLink
                  href={WHATSAPP_LINK}
                  external
                  size="lg"
                  eventName="cta_whatsapp_clicked"
                  eventData={{page: 'home'}}
                >
                  {t('primaryCta')}
                </ButtonLink>
                <Link href="/contact" locale={locale} className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-transparent text-foreground hover:border-brand hover:text-brand px-6 py-3 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                  {t('secondaryCta')}
                </Link>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/80">
                {t('caption')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
