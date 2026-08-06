import Link from "next/link";

import { FaqAccordion } from "@/components/site/FaqAccordion";
import { PlatformCard } from "@/components/site/PlatformCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { criteria, heroChips, homeFaq, pillars, stats } from "@/data/content";
import { platformNames, topPlatforms } from "@/data/platforms";

const allNames = platformNames.join(", ");
const podiumNames = topPlatforms.map((platform) => platform.name).join(", ");

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-900">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(48rem_22rem_at_50%_-10%,rgba(139,92,240,0.32),transparent)]"
        />
        <div className="container-page relative py-8 text-center sm:py-10">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-gold-400">
            Comparatif indépendant des plateformes
          </span>
          <h1 className="mx-auto mt-3 max-w-2xl font-display text-2xl font-extrabold leading-[1.15] tracking-tight text-white text-balance-title sm:text-3xl lg:text-[2.1rem]">
            Les meilleures plateformes accessibles en France
          </h1>
          <p className="mx-auto mt-2.5 max-w-xl text-sm leading-relaxed text-plum-100/75">
            Classement clair de {allNames}, fondé sur la solidité, le confort
            d&apos;usage et l&apos;étendue des services.
          </p>

          <ul className="no-scrollbar -mx-5 mt-4 flex w-[calc(100%+2.5rem)] gap-2 overflow-x-auto px-5 pb-1 sm:mx-auto sm:w-full sm:max-w-3xl sm:flex-wrap sm:items-center sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
            {heroChips.map((chip) => (
              <li
                key={chip}
                className="shrink-0 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold text-plum-100/85 sm:text-xs"
              >
                {chip}
              </li>
            ))}
          </ul>

        </div>
      </section>

      <section
        id="classement"
        aria-labelledby="classement-titre"
        className="bg-mist-100 py-8 sm:py-10"
      >
        <div className="container-page">
          <h2
            id="classement-titre"
            className="mb-5 font-display text-xl font-extrabold text-ink-900 sm:text-2xl"
          >
            Notre podium : {podiumNames}
          </h2>
          <div className="space-y-4">
            {topPlatforms.map((platform) => (
              <PlatformCard key={platform.id} platform={platform} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/comparatif"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-plum-600 transition-colors hover:text-plum-800"
            >
              Voir le comparatif complet
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="Chiffres clés" className="bg-white py-10">
        <div className="container-page grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-extrabold text-plum-600">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs leading-snug text-ink-700/65">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="methode" className="bg-mist-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Notre méthode"
            title="Ce qui rend notre classement digne de confiance"
            description="Une grille de lecture identique, appliquée sans exception à chaque plateforme que nous examinons."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-mist-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-plum-200 hover:shadow-card-hover"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-plum-100 text-plum-700">
                  <Icon name={pillar.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-ink-900">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-700/70">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="notation" className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Notre notation"
            title="De quoi la note finale est-elle faite"
            description="Chaque plateforme reçoit un rang établi à partir de ces quatre axes, pondérés comme indiqué ci-dessous."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {criteria.map((criterion) => (
              <div key={criterion.index}>
                <p className="font-display text-4xl font-extrabold text-mist-200">
                  {criterion.index}
                </p>
                <h3 className="mt-3 font-display text-base font-bold text-ink-900">
                  {criterion.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
                  {criterion.body}
                </p>
                <div className="mt-4">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-mist-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-plum-400 to-plum-600"
                      style={{ width: `${criterion.weight}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs font-semibold text-plum-600">
                    Poids : {criterion.weight}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist-100 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Questions fréquentes"
            title="L'essentiel en quelques réponses"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <FaqAccordion items={homeFaq} />
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-plum-600 transition-colors hover:text-plum-800"
              >
                Consulter toutes les questions
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
