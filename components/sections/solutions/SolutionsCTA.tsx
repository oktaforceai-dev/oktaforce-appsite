"use client";

import {useTranslations, useLocale} from "next-intl";
import {ButtonLink} from "@/components/ui/ButtonLink";
import {WHATSAPP_LINK} from "@/lib/siteConfig";

export function SolutionsCTA() {
  const t = useTranslations("solutions.cta");
  const locale = useLocale();

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="rounded-2xl border border-brand/30 bg-brand/10 p-10 text-center text-brand">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-base text-brand/80 md:text-lg">{t("subtitle")}</p>
          <div className="mt-6 flex flex-col items-center justify-center">
            <ButtonLink
              href={WHATSAPP_LINK}
              external
              variant="secondary"
              size="lg"
              eventName="cta_whatsapp_clicked"
              eventData={{page: "solutions", locale, placement: "cta_secondary"}}
            >
              {t("secondary")}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
