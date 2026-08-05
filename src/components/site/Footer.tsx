import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { legalNav, mainNav, regulatoryBadges, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-plum-100/70">
      <div className="container-page pt-14 pb-10">
        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="font-display text-lg font-bold text-white">
              Réservé aux majeurs — gardez la main sur votre usage
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Pour poser une question ou être accompagné, tournez-vous vers les
              ressources dédiées ou composez le{" "}
              <span className="font-semibold text-gold-400">{site.helpline}</span>{" "}
              (appel non surtaxé).
            </p>
          </div>
          <Link
            href="/pratique-responsable"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:border-gold-400 hover:text-gold-400 lg:mt-0"
          >
            Usage responsable
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {site.name} observe et met en regard les plateformes en ligne
              accessibles en France : fiabilité de l&apos;acteur, confort de
              navigation et clarté des informations, pour choisir en connaissance
              de cause.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNav.map((item) => (
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

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Informations
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legalNav.map((item) => (
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

          <div className="lg:col-span-3">
            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-5">
              <p className="font-display text-base font-bold text-white">
                Besoin d&apos;aide ?
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Accès limité aux personnes majeures. Consultez les plateformes
                avec mesure. Une écoute confidentielle est disponible au{" "}
                <span className="font-semibold text-gold-400">
                  {site.helpline}
                </span>
                .
              </p>
              <Link
                href="/pratique-responsable"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-plum-300 transition-colors hover:text-gold-400"
              >
                En savoir plus
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-4 border-t border-white/5 pt-8 text-xs leading-relaxed text-plum-100/50">
          <p>
            Un usage excessif des plateformes en ligne peut laisser des traces :
            fatigue, perte de repères ou isolement. Pour être entendu et orienté,
            appelez le{" "}
            <span className="font-semibold text-plum-100/80">
              {site.helpline}
            </span>{" "}
            (appel non surtaxé).
          </p>
          <p>
            Avant d&apos;utiliser une plateforme en ligne, il vous appartient de
            vérifier que ce type de service est autorisé là où vous résidez.
            L&apos;usage des informations rassemblées ici n&apos;engage que vous.
          </p>
          <p>
            Toute copie, rediffusion ou exploitation — intégrale ou partielle —
            de nos textes, visuels et comparatifs est proscrite sans accord écrit
            préalable de notre part.
          </p>
          <p>
            L&apos;accès à ces contenus est limité aux personnes majeures (18 ans
            et plus). Une fréquentation intensive des environnements numériques
            peut encourager des comportements inadaptés : mieux vaut conserver
            une approche posée et lucide.
          </p>
          <p>
            Une question ou un accompagnement ? Consultez notre page{" "}
            <Link
              href="/pratique-responsable"
              className="underline underline-offset-2 hover:text-gold-400"
            >
              Usage responsable
            </Link>{" "}
            ou composez le {site.helpline} (appel non surtaxé).
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 border-t border-white/5 pt-8">
          {regulatoryBadges.map((item) => {
            const badge = (
              <Image
                src={item.src}
                alt={item.label}
                width={140}
                height={48}
                unoptimized
                className="h-9 w-auto max-w-[120px] object-contain sm:h-10 sm:max-w-[140px]"
              />
            );

            return (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="opacity-90 transition-opacity hover:opacity-100"
                  >
                    {badge}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className="opacity-90 transition-opacity hover:opacity-100"
                  >
                    {badge}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="underline underline-offset-4 transition-colors hover:text-gold-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs text-plum-100/45">
            © {year} — {site.name} · 18+ | Contenu informatif et publicitaire,
            sans garantie de résultat.
          </p>
        </div>
      </div>
    </footer>
  );
}
