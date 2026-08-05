import type { Metadata } from "next";

import { LegalContent, type LegalSection } from "@/components/site/LegalContent";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Données collectées, finalités, durée de conservation, cookies et droits applicables sur le site AvisdesParis.",
  alternates: { canonical: "/confidentialite" },
};

const sections: LegalSection[] = [
  {
    heading: "1. Notre approche",
    paragraphs: [
      `${site.name} limite volontairement la collecte de données au strict nécessaire. Aucun compte n'est créé sur ce site et aucune donnée bancaire n'y transite.`,
    ],
  },
  {
    heading: "2. Données que nous traitons",
    bullets: [
      "Données de navigation : pages consultées, durée de visite, type d'appareil et provenance, sous forme agrégée.",
      "Données de contact : nom, adresse e-mail, objet et contenu du message lorsque vous utilisez le formulaire de contact.",
      "Préférences locales : confirmation de majorité et choix relatif aux cookies, conservés dans le stockage local de votre navigateur.",
    ],
  },
  {
    heading: "3. Finalités poursuivies",
    bullets: [
      "Assurer le fonctionnement, la sécurité et la stabilité du site.",
      "Mesurer l'audience afin d'améliorer la structure et le contenu des pages.",
      "Répondre aux demandes reçues via le formulaire de contact.",
      "Respecter les obligations légales qui s'imposent à l'éditeur.",
    ],
  },
  {
    heading: "4. Bases légales",
    paragraphs: [
      "Le traitement repose sur votre consentement pour les cookies non essentiels et la prise de contact, et sur l'intérêt légitime de l'éditeur pour la sécurité et la mesure d'audience agrégée.",
    ],
  },
  {
    heading: "5. Cookies et traceurs",
    paragraphs: [
      "Les cookies strictement nécessaires assurent le fonctionnement du site et ne requièrent pas de consentement. Les cookies de mesure et de personnalisation ne sont déposés qu'après acceptation de votre part.",
      "Vous pouvez revenir sur votre choix à tout moment en effaçant les données de site enregistrées par votre navigateur : la bannière réapparaîtra lors de votre prochaine visite.",
    ],
  },
  {
    heading: "6. Durée de conservation",
    bullets: [
      "Messages reçus via le formulaire : 24 mois maximum à compter du dernier échange.",
      "Statistiques d'audience agrégées : 25 mois maximum.",
      "Préférences stockées localement : jusqu'à leur suppression par vos soins.",
    ],
  },
  {
    heading: "7. Destinataires",
    paragraphs: [
      "Les données sont traitées par l'équipe éditoriale et, le cas échéant, par nos prestataires techniques d'hébergement et de mesure d'audience, agissant sur instruction et dans un cadre contractuel.",
      "Aucune donnée n'est cédée ni revendue à des tiers à des fins commerciales.",
    ],
  },
  {
    heading: "8. Vos droits",
    paragraphs: [
      `Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité. Pour l'exercer, écrivez à ${site.email} en précisant votre demande.`,
      "Si la réponse apportée ne vous satisfait pas, vous pouvez saisir la CNIL, autorité de contrôle compétente en France.",
    ],
  },
  {
    heading: "9. Sécurité",
    paragraphs: [
      "Le site est diffusé en HTTPS et l'accès aux outils d'administration est restreint. Malgré ces mesures, aucune transmission sur internet ne peut être garantie comme totalement inviolable.",
    ],
  },
  {
    heading: "10. Personnes mineures",
    paragraphs: [
      "Le site n'est pas destiné aux personnes de moins de 18 ans et ne collecte sciemment aucune donnée les concernant. Toute donnée identifiée comme telle est supprimée sans délai.",
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        eyebrow="Vos données"
        title="Politique de confidentialité"
        description="Ce que nous collectons, pourquoi, pendant combien de temps, et comment reprendre la main sur vos informations."
      />
      <LegalContent updatedAt="janvier 2026" sections={sections} />
    </>
  );
}
