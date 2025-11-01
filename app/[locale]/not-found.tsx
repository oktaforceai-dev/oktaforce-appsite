"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const COPIES = {
  pt: {
    title: "Página não encontrada",
    description: "A página que você procura não existe.",
    href: "/pt",
    label: "Voltar ao início"
  },
  en: {
    title: "Page not found",
    description: "The page you are looking for does not exist.",
    href: "/en",
    label: "Back to home"
  }
} as const;

type SupportedLocale = keyof typeof COPIES;

function resolveLocale(raw: string | string[] | undefined): SupportedLocale {
  if (typeof raw === "string") {
    return raw.startsWith("en") ? "en" : "pt";
  }
  if (Array.isArray(raw) && raw.length > 0) {
    return raw[0].startsWith("en") ? "en" : "pt";
  }
  return "pt";
}

export default function NotFoundPage() {
  const params = useParams();
  const locale = resolveLocale(params?.locale);
  const copy = COPIES[locale];

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">{copy.title}</h1>
      <p className="text-sm text-foreground/70">{copy.description}</p>
      <Link
        href={copy.href}
        className="inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white"
      >
        {copy.label}
      </Link>
    </div>
  );
}
