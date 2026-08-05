import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import { mainNav } from "@/data/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(48rem_24rem_at_50%_-10%,rgba(139,92,240,0.3),transparent)]"
      />
      <div className="container-page relative flex min-h-[62vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-400">
          Erreur 404
        </p>
        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Cette page est introuvable
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-plum-100/70">
          L&apos;adresse demandée a peut-être changé, ou la page n&apos;est plus
          en ligne. Reprenez votre navigation depuis l&apos;une des rubriques
          ci-dessous.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-plum-500 to-plum-700 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5"
        >
          Retour à l&apos;accueil
          <Icon name="arrow" className="h-4 w-4" />
        </Link>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-plum-100/60">
          {mainNav.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-colors hover:text-gold-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
