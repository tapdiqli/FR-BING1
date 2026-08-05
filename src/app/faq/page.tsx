import type { Metadata } from "next";
import Link from "next/link";

import { FaqAccordion } from "@/components/site/FaqAccordion";
import { PageHero } from "@/components/site/PageHero";
import { Icon } from "@/components/ui/Icon";
import { faqItems } from "@/data/content";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description:
    "Méthode de classement, indépendance éditoriale, accès réservé aux majeurs : les réponses aux questions les plus souvent posées à AvisdesParis.",
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Foire aux questions"
        title="Vos interrogations, nos réponses"
        description="Nous rassemblons ici les points qui reviennent le plus souvent, de la construction du classement à la protection des personnes mineures."
      />

      <section className="bg-mist-50 py-14 sm:py-16">
        <div className="container-page mx-auto max-w-3xl">
          <FaqAccordion items={faqItems} />

          <div className="mt-10 rounded-2xl border border-mist-200 bg-white p-6 text-center sm:p-8">
            <h2 className="font-display text-lg font-bold text-ink-900">
              Votre question n&apos;apparaît pas ici ?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
              Écrivez-nous : nous répondons à chaque message et complétons cette
              page dès qu&apos;un sujet revient régulièrement.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-plum-500 to-plum-700 px-6 py-3 text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Nous contacter
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
