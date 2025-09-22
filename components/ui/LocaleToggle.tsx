"use client";

import {useLocale} from 'next-intl';
import {usePathname} from '@/i18n/routing';
import {useTranslations} from 'next-intl';

type BaseHref = '/' | '/about' | '/solutions' | '/pricing' | '/contact' | '/blog' | '/differentials';

function toBaseHref(path: string): BaseHref {
  const clean = (path.replace(/\/+$/, '') || '/') as string;
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

function baseToPt(base: BaseHref): string {
  switch (base) {
    case '/': return '/';
    case '/about': return '/quem-somos';
    case '/solutions': return '/solucoes';
    case '/pricing': return '/precos';
    case '/contact': return '/contato';
    case '/blog': return '/blog';
    case '/differentials': return '/diferenciais';
    default: return '/';
  }
}

function buildTargetPath(currentPathRaw: string, nextLocale: 'pt' | 'en'): string {
  // eliminar query/hash
  let path = currentPathRaw.split(/[?#]/)[0] || '/';
  // normaliza múltiplas barras
  path = path.replace(/\/+$/, '/')
             .replace(/(^|[^:])\/\/+/, '$1/');

  const hadTrailing = path.endsWith('/');

  // remove prefixo /en (se houver)
  let without = path.replace(/^\/en(\/|$)/, '/');

  // mapeia para href base (neutro)
  const base = toBaseHref((without.replace(/\/+$/, '') || '/') as string);

  // monta destino por idioma
  let target = nextLocale === 'en'
    ? (base === '/' ? '/en/' : `/en${base}`)
    : baseToPt(base);

  // aplicar barra final conforme a página atual e config
  if (hadTrailing && !target.endsWith('/')) target += '/';
  if (!hadTrailing && target !== '/' && target.endsWith('/')) target = target.slice(0, -1);

  // garantias extras para raiz
  if (nextLocale === 'en' && base === '/' && !target.endsWith('/')) target += '/';
  if (nextLocale === 'pt' && base === '/') target = '/';

  return target;
}

export default function LocaleToggle() {
  const pathname = usePathname();
  const locale = (useLocale() as 'pt' | 'en') ?? 'pt';
  const t = useTranslations('common.language');

  const nextLocale: 'pt' | 'en' = locale === 'pt' ? 'en' : 'pt';

  function handleClick() {
    const current = String(pathname || '/');
    const target = buildTargetPath(current, nextLocale);
    // Navegação forçada para evitar estados inertes
    window.location.assign(target);
  }

  return (
    <button
      type="button"
      aria-label={t('label')}
      onClick={handleClick}
      className="inline-flex h-9 items-center justify-center rounded-md border border-transparent px-3 text-sm font-medium text-brand transition hover:bg-brand/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      {nextLocale.toUpperCase()}
    </button>
  );
}
