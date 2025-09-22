'use client';

import {usePathname, useRouter} from 'next/navigation';
import {useLocale} from 'next-intl';
import Link from 'next/link';

const mapPtToEn: Record<string, string> = {
  '/': '/en',
  '/solucoes': '/en/solutions',
  '/precos': '/en/pricing',
  '/quem-somos': '/en/about',
  '/contato': '/en/contact',
  '/blog': '/en/blog'
};

const mapEnToPt: Record<string, string> = {
  '/en': '/',
  '/en/solutions': '/solucoes',
  '/en/pricing': '/precos',
  '/en/about': '/quem-somos',
  '/en/contact': '/contato',
  '/en/blog': '/blog'
};

function swapLocalePath(path: string) {
  // mapeamentos diretos
  if (path in mapPtToEn) return mapPtToEn[path];
  if (path in mapEnToPt) return mapEnToPt[path];

  // blog com slug dinâmico
  if (path.startsWith('/blog/')) return `/en${path}`;
  if (path.startsWith('/en/blog/')) return path.replace(/^\/en/, '');

  // fallback genérico: prefixa ou remove /en
  return path.startsWith('/en/')
    ? path.replace(/^\/en/, '')
    : `/en${path}`;
}

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const nextLocale = locale === 'pt' ? 'en' : 'pt';
  const href = swapLocalePath(pathname || '/');

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    // persiste a escolha para a Home e primeiras visitas
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
    router.replace(href, {scroll: false});
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      aria-label="Mudar idioma"
      className="inline-flex h-9 items-center rounded-md border px-3 text-sm hover:bg-accent"
      prefetch={false}
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}

// Deprecated: replaced by LanguageSwitcher which uses next-intl navigation API correctly.
export {};
