// components/ui/ThemeToggle.tsx
'use client';

import {useEffect, useState} from 'react';

const STORAGE_KEY = 'oktaforce-theme';

function setHtmlDark(enabled: boolean) {
  const root = document.documentElement;
  root.classList.toggle('dark', enabled);
  root.dataset.theme = enabled ? 'dark' : 'light';
  document.body.dataset.theme = enabled ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    const initial = saved ? saved === 'dark' : prefersDark;
    setDark(initial);
    setHtmlDark(initial);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    setHtmlDark(next);
    localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-brand transition hover:bg-brand/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand`}
      title={dark ? 'Tema escuro' : 'Tema claro'}
    >
      {dark ? (
        // Moon
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        // Sun
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9-10v2h3v-2h-3zm-3.24-8.16l1.8-1.79 1.41 1.41-1.79 1.8-1.42-1.42zM12 5a7 7 0 1 0 .001 14.001A7 7 0 0 0 12 5zm0-5h-2v3h2V0zm-9 9H0v2h3V9zm15 12l1.79 1.8 1.41-1.41-1.8-1.79L18 21z" />
        </svg>
      )}
    </button>
  );
}
