import type { Metadata } from "next";

import { PageHero } from "@/components/site/PageHero";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Usage responsable",
  description:
    "Repères, signaux d'alerte et ressources d'accompagnement pour garder un usage mesuré des plateformes en ligne.",
  alternates: { canonical: "/pratique-responsable" },
};

const habits = [
  {
    icon: "scale",
    title: "Fixez un cadre avant de commencer",
    body: "Décidez à l'avance du temps que vous souhaitez y consacrer, puis tenez-vous-y même quand l'envie de prolonger se fait sentir.",
  },
  {
    icon: "compass",
    title: "Gardez une approche informative",
    body: "Ces plateformes sont des outils de comparaison et d'information. Prenez le temps de lire les conditions avant toute inscription.",
  },
  {
    icon: "spark",
    title: "Ménagez de vraies pauses",
    body: "Des interruptions régulières aident à reprendre du recul. Programmez une alerte si vous perdez facilement la notion du temps.",
  },
  {
    icon: "shield",
    title: "Activez les outils de limitation",
    body: "Les plateformes sérieuses proposent rappels de session et options de limitation. Configurez-les dès votre inscription.",
  },
];

const signals = [
  "Vous y consacrez nettement plus de temps que prévu.",
  "Vous y revenez pour compenser une contrariété.",
  "Vous dissimulez cette activité à votre entourage.",
  "Votre sommeil, votre travail ou vos relations en pâtissent.",
  "Vous éprouvez de l'irritation lorsque vous devez vous arrêter.",
  "Vous peinez à faire une pause, même pour quelques jours.",
];

/** Ressources françaises uniquement : le site s'adresse au seul marché français. */
const resources = [
  {
    name: "Joueurs Info Service",
    description:
      "Écoute confidentielle et gratuite, sept jours sur sept, pour les personnes concernées comme pour leurs proches.",
    href: "https://www.joueurs-info-service.fr/",
  },
  {
    name: "Autorité nationale des jeux (ANJ)",
    description:
      "Le cadre légal français, la liste des plateformes autorisées et les démarches d'accompagnement volontaire.",
    href: "https://anj.fr/",
  },
  {
    name: "Auto-évaluation EvalluJeu",
    description:
      "Questionnaire anonyme et gratuit pour situer votre pratique et savoir si un accompagnement serait utile.",
    href: "https://www.evalujeu.fr/",
  },
  {
    name: "Médiateur des jeux en ligne",
    description:
      "Médiation indépendante et gratuite en cas de litige non résolu avec un opérateur agréé en France.",
    href: "https://mediateurdesjeuxenligne.fr/",
  },
];

export default function PratiqueResponsablePage() {
  return (
    <>
      <PageHero
        eyebrow="Prévention"
        title="Garder un usage mesuré, lucide et choisi"
        description="Consulter des plateformes en ligne n'a rien de problématique tant que l'activité reste sous contrôle. Voici les repères que nous rappelons systématiquement."
      />

      <section className="bg-mist-50 py-14 sm:py-16">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2">
            {habits.map((habit) => (
              <div
                key={habit.title}
                className="rounded-2xl border border-mist-200 bg-white p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-plum-100 text-plum-700">
                  <Icon name={habit.icon} className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-base font-bold text-ink-900">
                  {habit.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-700/70">
                  {habit.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-600">
              Signaux d&apos;alerte
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
              Quand la vigilance s&apos;impose
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
              Une seule de ces situations suffit à justifier une pause. Si
              plusieurs vous parlent, parlez-en à un professionnel sans attendre.
            </p>
            <ul className="mt-6 space-y-3">
              {signals.map((signal) => (
                <li
                  key={signal}
                  className="flex gap-3 rounded-xl border border-mist-200 bg-mist-50 px-4 py-3 text-sm leading-relaxed text-ink-700/80"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {signal}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-plum-600">
              Où trouver de l&apos;aide
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
              Des interlocuteurs indépendants
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
              Ces structures n&apos;ont aucun lien commercial avec les plateformes
              analysées sur ce site.
            </p>
            <ul className="mt-6 space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="block rounded-xl border border-mist-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-plum-200 hover:shadow-card"
                  >
                    <span className="flex items-center gap-2 font-display text-base font-bold text-ink-900">
                      {resource.name}
                      <Icon name="arrow" className="h-4 w-4 text-plum-500" />
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-ink-700/70">
                      {resource.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink-900 py-14 sm:py-16">
        <div className="container-page text-center">
          <span className="inline-grid h-14 w-14 place-items-center rounded-full border-2 border-gold-400 font-display text-base font-extrabold text-gold-400">
            18+
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-2xl font-extrabold text-white sm:text-3xl">
            Une écoute confidentielle, gratuite et sans jugement
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-plum-100/75">
            Si votre usage vous inquiète ou inquiète un proche, composez le
            numéro ci-dessous. L&apos;appel n&apos;est pas surtaxé et
            n&apos;engage à rien.
          </p>
          <a
            href={`tel:${site.helpline.replace(/\s/g, "")}`}
            className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-plum-500 to-plum-700 px-8 py-4 font-display text-lg font-extrabold text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <Icon name="phone" className="h-5 w-5" />
            {site.helpline}
          </a>
        </div>
      </section>
    </>
  );
}
