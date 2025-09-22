"use client";

import {useTransition} from 'react';
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/lib/navigation';
import {useTranslations} from 'next-intl';

const SUPPORTED_LOCALES: Array<'pt' | 'en'> = ['pt', 'en'];

type BaseHref = '/' | '/about' | '/solutions' | '/pricing' | '/contact' | '/blog' | '/differentials';

function stripLocale(path: string | null | undefined): string {
  const p = path || '/';
  if (p === '/pt' || p === '/en') return '/';
  return p.replace(/^\/(pt|en)(?=\/)/, '');
}

function toBaseHref(path: string): BaseHref {
  const clean = path.replace(/\/+$/, '') || '/';
  switch (clean) {
    case '/':
    case '/about':
    case '/solutions':
    case '/pricing':
    case '/contact':
    case '/blog':
    case '/differentials':
      return clean as BaseHref;
    case '/quem-somos':
      return '/about';
    case '/solucoes':
      return '/solutions';
    case '/precos':
      return '/pricing';
    case '/contato':
      return '/contact';
    default:
      return '/';
  }
}

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() ?? '/';
  const locale = useLocale() as 'pt' | 'en';
  const t = useTranslations('common.language');
  const [isPending, startTransition] = useTransition();

  return (
    <div
      role="group"
      aria-label={t('label')}
      className="inline-flex overflow-hidden rounded-full border border-transparent bg-surface-alt"
    >
      {SUPPORTED_LOCALES.map((targetLocale) => {
        const active = targetLocale === locale;
        return (
          <button
            key={targetLocale}
            type="button"
            onClick={() =>
              startTransition(() => {
                const basePath = stripLocale(pathname);
                const href = toBaseHref(basePath);
                router.replace(href, { locale: targetLocale });
              })
            }
            disabled={active || isPending}
            className={`px-3 py-1.5 text-sm font-medium uppercase transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
              active
                ? 'bg-brand/10 text-brand'
                : 'text-foreground/80 hover:bg-brand/5 hover:text-brand'
            }`}
            aria-pressed={active}
          >
            {t(targetLocale)}
          </button>
        );
      })}
    </div>
  );
}


