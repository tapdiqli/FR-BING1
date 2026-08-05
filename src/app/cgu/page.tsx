import type { Metadata } from "next";

import { LegalContent, type LegalSection } from "@/components/site/LegalContent";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description:
    "Règles d'accès et d'usage du site AvisdesParis : public concerné, portée des contenus, obligations et responsabilités.",
  alternates: { canonical: "/cgu" },
};

const sections: LegalSection[] = [
  {
    heading: "1. Objet",
    paragraphs: [
      `Les présentes conditions encadrent l'accès au site ${site.domain} et l'usage des contenus qui y sont publiés. Consulter le site vaut acceptation pleine et entière de ces règles.`,
    ],
  },
  {
    heading: "2. Public concerné",
    paragraphs: [
      "L'accès est réservé aux personnes âgées d'au moins 18 ans. Un dispositif de confirmation d'âge est présenté lors de la première visite ; toute déclaration inexacte engage la responsabilité de son auteur.",
      "Il vous appartient également de vérifier que la consultation de ce type de contenu est licite dans votre pays de résidence.",
    ],
  },
  {
    heading: "3. Nature des contenus",
    paragraphs: [
      "Les comparatifs, notes et analyses publiés reflètent l'appréciation de la rédaction à la date de publication, sur la base d'une méthode identique appliquée à chaque acteur.",
      "Ils ont une valeur strictement informative. Ils ne constituent ni un conseil personnalisé, ni une incitation, ni une promesse de résultat de quelque nature que ce soit.",
    ],
  },
  {
    heading: "4. Usage autorisé",
    bullets: [
      "Consulter librement les pages pour votre usage personnel.",
      "Partager un lien vers une page du site en citant explicitement la source.",
      "Nous signaler toute information que vous estimez inexacte via la page Contact.",
    ],
  },
  {
    heading: "5. Usage interdit",
    bullets: [
      "Reproduire, republier ou exploiter commercialement nos contenus sans accord écrit préalable.",
      "Extraire massivement les données du site par un procédé automatisé.",
      "Tenter d'altérer le fonctionnement du site ou d'en contourner les protections.",
      "Présenter nos analyses de façon trompeuse ou hors de leur contexte d'origine.",
    ],
  },
  {
    heading: "6. Liens vers des services tiers",
    paragraphs: [
      "Le site renvoie vers des plateformes éditées par des tiers, régies par leurs propres conditions. Nous vous invitons à les lire attentivement avant tout engagement.",
      "L'éditeur n'exerce aucun contrôle sur ces services et ne saurait être tenu responsable de leur contenu, de leur disponibilité ou de leurs pratiques.",
    ],
  },
  {
    heading: "7. Disponibilité et évolutions",
    paragraphs: [
      "Le site peut être temporairement indisponible pour maintenance ou pour une raison indépendante de notre volonté, sans que cela ouvre droit à indemnisation.",
      "Les contenus, le classement et les présentes conditions peuvent évoluer à tout moment. La version applicable est celle publiée en ligne lors de votre visite.",
    ],
  },
  {
    heading: "8. Responsabilité",
    paragraphs: [
      "L'éditeur ne peut être tenu responsable des décisions prises par un visiteur sur la base des informations publiées, ni des conséquences directes ou indirectes qui en découleraient.",
    ],
  },
  {
    heading: "9. Usage responsable",
    paragraphs: [
      `Une fréquentation excessive des plateformes en ligne peut favoriser des comportements inadaptés. Pour être écouté et accompagné, composez le ${site.helpline} (appel non surtaxé).`,
    ],
  },
  {
    heading: "10. Droit applicable",
    paragraphs: [
      "Les présentes conditions sont soumises au droit français. À défaut de résolution amiable, tout litige relève des juridictions françaises compétentes.",
    ],
  },
];

export default function CguPage() {
  return (
    <>
      <PageHero
        eyebrow="Cadre d'utilisation"
        title="Conditions d'utilisation"
        description="Les règles qui encadrent l'accès au site et l'usage des analyses que nous publions."
      />
      <LegalContent updatedAt="janvier 2026" sections={sections} />
    </>
  );
}
