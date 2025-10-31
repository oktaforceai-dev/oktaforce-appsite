import Image from 'next/image';
import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {
  ArrowUpRight,
  Globe,
  Instagram,
  Mail,
  MessageCircle,
  Phone
} from 'lucide-react';

type PageProps = {
  params: {
    locale: string;
  };
};

const LINK_ITEMS = [
  {
    id: 'website',
    href: 'https://oktaforce.com.br/',
    icon: Globe,
    target: '_blank' as const,
    rel: 'noopener noreferrer'
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/oktaforcebrasil/',
    icon: Instagram,
    target: '_blank' as const,
    rel: 'noopener noreferrer'
  },
  {
    id: 'email',
    href: 'mailto:contato@oktaforce.com.br',
    icon: Mail
  },
  {
    id: 'phone',
    href: 'tel:+551132741040',
    icon: Phone
  },
  {
    id: 'whatsapp',
    href: 'https://wa.me/55119900000000',
    icon: MessageCircle,
    target: '_blank' as const,
    rel: 'noopener noreferrer'
  }
] as const;

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'linklist.meta'});
  const canonicalPath = params.locale === 'en' ? '/en/learn-more' : '/saibamais';

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: canonicalPath
    },
    openGraph: {
      title: t('title'),
      description: t('description')
    },
    twitter: {
      title: t('title'),
      description: t('description')
    }
  };
}

export default async function LinkListPage({params}: PageProps) {
  const t = await getTranslations({locale: params.locale, namespace: 'linklist'});

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-surface px-6 py-12 text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-glow opacity-70 dark:opacity-40" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl dark:bg-brand/30" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-brand-accent/20 blur-[110px] dark:bg-brand-accent/30" />

      <div className="z-10 flex w-full max-w-sm flex-col items-center space-y-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-3xl border border-brand/30 bg-surface-alt/80 p-4 shadow-brand backdrop-blur">
            <Image src="/logo.svg" alt="OKTAFORCE" width={60} height={60} priority />
          </div>
          <div className="space-y-2">
            <h1 className="font-display text-3xl font-semibold">{t('hero.title')}</h1>
            <p className="text-sm text-foreground/70">{t('hero.subtitle')}</p>
          </div>
        </div>

        <nav className="flex w-full flex-col gap-3">
          {LINK_ITEMS.map((item) => {
            const Icon = item.icon;
            const label = t(`links.${item.id}` as const);

            return (
              <a
                key={item.id}
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="group flex items-center justify-between rounded-2xl border border-brand/40 bg-brand/10 px-5 py-4 text-left shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:border-brand/30 dark:bg-brand/15 dark:hover:bg-brand/25"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand/20 text-brand transition group-hover:bg-brand group-hover:text-white dark:bg-brand/25">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="text-base font-semibold text-foreground transition group-hover:text-brand dark:group-hover:text-white">
                    {label}
                  </span>
                </span>
                <ArrowUpRight className="size-5 text-brand transition group-hover:text-white" aria-hidden />
              </a>
            );
          })}
        </nav>

        <p className="text-xs text-foreground/60">{t('note')}</p>
      </div>
    </div>
  );
}
