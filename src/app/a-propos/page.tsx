import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/site/PageHero";
import { Icon } from "@/components/ui/Icon";
import { criteria } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Qui édite AvisdesParis, comment nous travaillons et de quelle façon le site est financé : notre fonctionnement expliqué sans détour.",
  alternates: { canonical: "/a-propos" },
};

const steps = [
  {
    icon: "book",
    title: "Repérage",
    body: "Nous identifions les plateformes réellement accessibles depuis la France et écartons celles dont les informations publiques restent trop floues.",
  },
  {
    icon: "chart",
    title: "Examen",
    body: "Chaque acteur retenu passe par la même grille de lecture, remplie à partir de sources publiques et de nos propres observations.",
  },
  {
    icon: "scale",
    title: "Mise en balance",
    body: "Les résultats sont confrontés entre eux, ce qui détermine le rang, la note affichée et le nombre d'étoiles.",
  },
  {
    icon: "spark",
    title: "Actualisation",
    body: "Les fiches sont reprises à intervalles réguliers et corrigées dès qu'un changement significatif est constaté.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="Qui sommes-nous"
        title="Un comparateur éditorial, pas une plateforme"
        description={`${site.name} est un site d'information. Nous observons, comparons et rédigeons ; nous ne proposons aucun service directement.`}
      />

      <section className="bg-mist-50 py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
              Notre raison d&apos;être
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-700/80">
              <p>
                Le marché français compte de nombreux acteurs, et il n&apos;est
                pas simple de distinguer ceux qui tiennent leurs promesses de
                ceux qui se contentent de communiquer. Nous avons créé{" "}
                {site.name} pour offrir un point de comparaison stable, écrit
                dans un français clair.
              </p>
              <p>
                Notre parti pris : privilégier ce qui se vérifie. Ancienneté,
                transparence des conditions, ergonomie constatée, réactivité de
                l&apos;assistance. Nous laissons de côté les promesses
                invérifiables et les arguments purement marketing.
              </p>
              <p>
                Nous ne prétendons pas détenir la vérité. Notre classement
                constitue un point de départ documenté ; la décision finale, elle,
                vous revient entièrement.
              </p>
            </div>

            <h2 className="mt-12 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
              Comment le site est financé
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-700/80">
              <p>
                La consultation est gratuite. Certains liens sortants peuvent
                donner lieu à une rémunération lorsqu&apos;un visiteur poursuit
                sa navigation chez un acteur analysé.
              </p>
              <p>
                Ce mode de financement ne modifie ni la grille de lecture ni
                l&apos;ordre du classement. Les mêmes critères s&apos;appliquent
                à toutes les plateformes, qu&apos;un partenariat existe ou non.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-mist-200 bg-white p-6 sm:p-7">
              <h2 className="font-display text-lg font-bold text-ink-900">
                Nos engagements
              </h2>
              <ul className="mt-5 space-y-3.5">
                {[
                  "Une méthode identique pour chaque plateforme examinée",
                  "Aucune note achetée, aucun rang négociable",
                  "Les limites signalées au même titre que les atouts",
                  "Un rappel systématique du cadre 18+ et de l'usage mesuré",
                  "Une correction rapide dès qu'une erreur nous est signalée",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-ink-700/80"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-plum-500"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-2xl border border-plum-200 bg-plum-50 p-6 sm:p-7">
              <h2 className="font-display text-lg font-bold text-ink-900">
                La pondération appliquée
              </h2>
              <ul className="mt-5 space-y-4">
                {criteria.map((criterion) => (
                  <li key={criterion.index}>
                    <div className="flex items-center justify-between text-sm font-semibold text-ink-900">
                      <span>{criterion.title}</span>
                      <span className="text-plum-600">{criterion.weight}%</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-plum-400 to-plum-600"
                        style={{ width: `${criterion.weight}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-plum-600">
              Notre processus
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
              Quatre étapes, toujours dans le même ordre
            </h2>
          </div>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-mist-200 bg-mist-50 p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-plum-700 shadow-card">
                  <Icon name={step.icon} className="h-6 w-6" />
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-plum-600">
                  Étape {index + 1}
                </p>
                <h3 className="mt-1.5 font-display text-base font-bold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-plum-500 to-plum-700 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Une remarque à nous transmettre ?
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
