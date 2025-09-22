'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = 'oktaforce-theme';

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within AppProviders');
  }
  return ctx;
}

export default function AppProviders({
  children
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    const initial = stored ?? (prefersDark ? 'dark' : 'light');
    setThemeState(initial);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.classList.toggle('dark', theme === 'dark');
    html.dataset.theme = theme;
    body.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((value: Theme) => {
    setThemeState(value);
    window.localStorage.setItem(STORAGE_KEY, value);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
      return nextTheme;
    });
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({theme, setTheme, toggleTheme}),
    [theme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
