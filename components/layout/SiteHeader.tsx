'use client';
import {useLocale, useTranslations} from 'next-intl';
import { Link } from '@/i18n/routing';
import {LanguageSwitcher} from '@/components/ui/LanguageSwitcher';
import ThemeToggle from '@/components/ui/ThemeToggle';
import {useEffect, useState} from 'react';
import Image from 'next/image';

export default function SiteHeader() {
  const tNav = useTranslations('common.navigation');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerHeightClass = isScrolled ? 'h-16' : 'h-20';
  const headerToneClass = isScrolled ? 'bg-surface/95' : 'bg-surface/70';
  const mobilePanelOffsetClass = isScrolled ? 'mt-16' : 'mt-20';

  const items: {href: '/' | '/solutions' | '/about' | '/contact' | '/blog'; id: 'home'|'solutions'|'about'|'contact'|'blog'}[] = [
    { href: '/',           id: 'home' },
    { href: '/solutions',  id: 'solutions' },
    { href: '/about',      id: 'about' },
    { href: '/contact',    id: 'contact' },
//    { href: '/blog',       id: 'blog' }
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full transform-gpu ${headerToneClass} backdrop-blur-xl transition-all duration-300 ${headerHeightClass}`}
      >
        <div className={`section-container flex h-full items-center justify-between gap-6 transition-all duration-300 ${isScrolled ? 'py-0' : 'py-2'}`}>
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
              <LanguageSwitcher />
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
            <div className={`fixed top-0 right-0 z-50 ${mobilePanelOffsetClass} mr-4 w-[88%] max-w-sm rounded-xl border border-border bg-surface-alt p-4 shadow-xl`}>
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
                  <LanguageSwitcher />
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
      <div className={`transition-all duration-300 ${headerHeightClass}`} aria-hidden />
    </>
  );
}
