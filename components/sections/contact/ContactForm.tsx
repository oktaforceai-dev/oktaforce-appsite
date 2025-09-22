'use client';

import {FormEvent, useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {trackEvent} from '@/lib/analytics';

type FormState = {
  name: string;
  email: string;
  phone: string;
  condominium: string;
  units: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  condominium: '',
  units: '',
  message: ''
};

export function ContactForm() {
  const t = useTranslations('contact.form');
  const locale = useLocale();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState<FormState>(INITIAL_FORM);

  function updateField(key: keyof FormState, value: string) {
    setForm((prev) => ({...prev, [key]: value}));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...form, locale})
      });

      if (!response.ok) throw new Error('request failed');

      trackEvent('lead_form_submitted', {
        page: 'contact',
        locale,
        units: form.units,
        condominium: form.condominium
      });

      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus('error');
    }
  }

  const fields = t.raw('fields') as Record<keyof FormState, {label: string; placeholder: string}>;

  return (
    <section className="section-padding">
      <div className="section-container max-w-4xl rounded-2xl border border-transparent bg-surface p-8 shadow-sm">
        <h2 className="font-display text-2xl font-semibold text-foreground">{t('title')}</h2>
        <p className="mt-2 text-sm text-foreground/70">{t('subtitle')}</p>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4" noValidate aria-busy={status === 'loading'}>
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              id="name"
              label={fields.name.label}
              placeholder={fields.name.placeholder}
              value={form.name}
              onChange={(value) => updateField('name', value)}
              required
              autoComplete="name"
            />
            <Field
              id="email"
              type="email"
              label={fields.email.label}
              placeholder={fields.email.placeholder}
              value={form.email}
              onChange={(value) => updateField('email', value)}
              required
              autoComplete="email"
            />
            <Field
              id="phone"
              label={fields.phone.label}
              placeholder={fields.phone.placeholder}
              value={form.phone}
              onChange={(value) => updateField('phone', value)}
              autoComplete="tel"
              required
            />
            <Field
              id="condominium"
              label={fields.condominium.label}
              placeholder={fields.condominium.placeholder}
              value={form.condominium}
              onChange={(value) => updateField('condominium', value)}
              required
            />
            <Field
              id="units"
              label={fields.units.label}
              placeholder={fields.units.placeholder}
              value={form.units}
              onChange={(value) => updateField('units', value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-foreground">
              {fields.message.label}
            </label>
            <textarea
              id="message"
              className="mt-2 w-full rounded-xl border border-transparent bg-surface-alt px-4 py-3 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              rows={5}
              placeholder={fields.message.placeholder}
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:opacity-90 disabled:opacity-50"
            disabled={status === 'loading'}
          >
            {t('submit')}
          </button>
        </form>
        <div className="mt-3 text-sm" aria-live="polite">
          {status === 'success' ? <p className="text-brand">{t('success')}</p> : null}
          {status === 'error' ? <p className="text-red-500">{t('error')}</p> : null}
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}

function Field({id, label, placeholder, value, onChange, type = 'text', required, autoComplete}: FieldProps) {
  return (
    <label className="block text-sm font-semibold text-foreground" htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-transparent bg-surface-alt px-4 py-3 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      />
    </label>
  );
}
