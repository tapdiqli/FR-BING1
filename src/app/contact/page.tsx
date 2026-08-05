import type { Metadata } from "next";

import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question, une correction à signaler ou une demande presse ? Écrivez à l'équipe éditoriale d'AvisdesParis.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: "mail",
    label: "Par e-mail",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "pin",
    label: "Rédaction",
    value: site.city,
  },
  {
    icon: "phone",
    label: "Écoute et prévention",
    value: `${site.helpline} (appel non surtaxé)`,
    href: `tel:${site.helpline.replace(/\s/g, "")}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Nous écrire"
        title="Une question, une précision, une correction ?"
        description="Chaque message est lu par un membre de la rédaction. Plus votre demande est précise, plus notre réponse le sera."
      />

      <section className="bg-mist-50 py-14 sm:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-extrabold text-ink-900">
              Nous joindre autrement
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700/75">
              Nous ne gérons aucun compte utilisateur et ne pouvons pas intervenir
              auprès des plateformes analysées. Pour toute démarche liée à un
              compte, adressez-vous directement au service concerné.
            </p>

            <ul className="mt-7 space-y-3">
              {channels.map((channel) => {
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-plum-100 text-plum-700">
                      <Icon name={channel.icon} className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ink-700/55">
                        {channel.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold text-ink-900">
                        {channel.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={channel.label}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="flex items-center gap-4 rounded-xl border border-mist-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-plum-200 hover:shadow-card"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-xl border border-mist-200 bg-white p-4">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 rounded-xl border border-gold-400/40 bg-gold-300/15 p-5">
              <p className="text-sm leading-relaxed text-ink-800">
                <span className="font-bold">Rappel :</span> {site.name}{" "}
                s&apos;adresse exclusivement à un public majeur. Nous ne
                traiterons aucune demande émanant d&apos;une personne mineure.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
