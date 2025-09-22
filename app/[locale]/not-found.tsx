"use client";

import Link from "next/link";

// import {useTranslations} from "next-intl";

export default function LocaleNotFound() {
  return (
    <div className="section-padding text-center">
      <div className="mx-auto max-w-xl space-y-4">
        <h1 className="font-display text-4xl font-semibold text-foreground">Página não encontrada</h1>
        <p className="text-sm text-foreground/70">A página que você está procurando não existe.</p>
        <Link href="/" className="inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-brand">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
