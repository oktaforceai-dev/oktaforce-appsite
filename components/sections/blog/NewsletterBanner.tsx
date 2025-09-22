'use client';

import { FormEvent, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

export function NewsletterBanner() {
  const t = useTranslations('blog.newsletter');
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale })
      });
      if (!response.ok) throw new Error('Request failed');
      setEmail('');
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl rounded-3xl border border-transparent bg-surface-alt p-8 text-center">
        <h2 className="font-display text-2xl font-semibold text-foreground">{t('title')}</h2>
        <p className="mt-3 text-sm text-foreground/70">{t('description')}</p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center gap-3 md:flex-row md:justify-center">
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-full border border-transparent bg-surface px-5 py-3 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-brand md:w-2/3"
            placeholder={t('placeholder')}
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:opacity-90 disabled:opacity-50"
            disabled={status === 'loading'}
          >
            {t('cta')}
          </button>
        </form>
        {status === 'success' ? (
          <p className="mt-3 text-sm text-brand">{t('success')}</p>
        ) : null}
        {status === 'error' ? (
          <p className="mt-3 text-sm text-red-500">{t('error')}</p>
        ) : null}
      </div>
    </section>
  );
}
