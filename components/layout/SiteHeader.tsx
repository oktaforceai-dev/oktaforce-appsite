'use client';
import {useLocale, useTranslations} from 'next-intl';
import { Link } from '@/i18n/routing';
import {LanguageSwitcher} from '@/components/ui/LanguageSwitcher';
import LocaleToggle from '@/components/ui/LocaleToggle';
import ThemeToggle from '@/components/ui/ThemeToggle';
import {useState} from 'react';
import Image from 'next/image';

export default function SiteHeader() {
  const tNav = useTranslations('common.navigation');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const items: {href: '/' | '/solutions' | '/pricing' | '/about' | '/contact' | '/blog'; id: 'home'|'solutions'|'pricing'|'about'|'contact'|'blog'}[] = [
    { href: '/',           id: 'home' },
    { href: '/solutions',  id: 'solutions' },
    { href: '/pricing',    id: 'pricing' },
    { href: '/about',      id: 'about' },
    { href: '/contact',    id: 'contact' },
    { href: '/blog',       id: 'blog' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface/70 backdrop-blur-xl shadow-sm">
      <div className="section-container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="OKTAFORCE home">
          <Image src="/logo.svg" alt="OKTAFORCE" width={34} height={34} priority />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-foreground">OKTAFORCE</span>
            <span className="text-xs font-normal text-muted">{tCommon('branding.tagline')}</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              prefetch
              className="text-sm text-foreground/80 transition hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {tNav(it.id as any)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LocaleToggle />
          </div>
          <ThemeToggle />
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-transparent hover:bg-brand/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label={tNav('openMenu')}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-foreground/90">
              <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden">
          {/* overlay to close */}
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-0 right-0 z-50 mt-20 mr-4 w-[88%] max-w-sm rounded-xl border border-border bg-surface-alt p-4 shadow-xl">
            <nav className="flex flex-col gap-2">
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="rounded-md px-3 py-2 text-base text-foreground/90 hover:bg-brand/10 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  onClick={() => setMobileOpen(false)}
                >
                  {tNav(it.id as any)}
                </Link>
              ))}
              <div className="mt-2">
                <LocaleToggle />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
