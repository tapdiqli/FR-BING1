import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/site/PageHero";
import { PlatformCard } from "@/components/site/PlatformCard";
import { Icon } from "@/components/ui/Icon";
import { criteria } from "@/data/content";
import { platforms } from "@/data/platforms";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Comparatif des plateformes",
  description:
    "Le classement complet établi par AvisdesParis : cinq plateformes analysées une par une, avec leurs points forts, leurs limites et la note attribuée.",
  alternates: { canonical: "/comparatif" },
};

export default function ComparatifPage() {
  return (
    <>
      <PageHero
        eyebrow="Classement complet"
        title="Toutes les plateformes que nous avons passées au crible"
        description={`${site.name} détaille ici chaque acteur retenu : ce qu'il fait bien, ce qu'il pourrait améliorer et la note que lui vaut notre grille de lecture.`}
      />

      <section className="bg-mist-100 py-14 sm:py-16">
        <div className="container-page">
          <div className="space-y-4">
            {platforms.map((platform) => (
              <PlatformCard key={platform.id} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-900 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
              Rappel méthodologique
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Les quatre axes derrière chaque note
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {criteria.map((criterion) => (
              <div
                key={criterion.index}
                className="rounded-2xl border border-white/5 bg-white/[0.04] p-6"
              >
                <p className="font-display text-3xl font-extrabold text-white/15">
                  {criterion.index}
                </p>
                <h3 className="mt-3 font-display text-base font-bold text-white">
                  {criterion.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-100/65">
                  {criterion.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              Des questions sur la méthode ?
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
