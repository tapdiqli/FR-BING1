import type { Metadata } from "next";

import { LegalContent, type LegalSection } from "@/components/site/LegalContent";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Éditeur, hébergement, propriété intellectuelle et responsabilité éditoriale du site AvisdesParis.",
  alternates: { canonical: "/mentions-legales" },
};

const sections: LegalSection[] = [
  {
    heading: "1. Éditeur du site",
    paragraphs: [
      `Le site ${site.domain} est édité par l'équipe éditoriale ${site.name}, structure indépendante spécialisée dans l'analyse comparative de plateformes en ligne accessibles depuis la France.`,
      `Adresse de la rédaction : ${site.city}. Contact : ${site.email}.`,
    ],
  },
  {
    heading: "2. Directeur de la publication",
    paragraphs: [
      `La direction de la publication est assurée par le responsable éditorial de ${site.name}, joignable à l'adresse ${site.email}.`,
    ],
  },
  {
    heading: "3. Hébergement",
    paragraphs: [
      "Le site est hébergé sur une infrastructure cloud implantée dans l'Union européenne. Les coordonnées complètes de l'hébergeur sont communiquées sur simple demande écrite adressée à la rédaction.",
    ],
  },
  {
    heading: "4. Nature du service",
    paragraphs: [
      `${site.name} est un support éditorial et publicitaire. Nous ne proposons aucun service transactionnel, n'ouvrons aucun compte utilisateur et n'encaissons aucun paiement de la part des visiteurs.`,
      "Les contenus publiés sont fournis à titre informatif. Ils ne constituent ni un conseil personnalisé, ni une garantie de résultat.",
    ],
  },
  {
    heading: "5. Propriété intellectuelle",
    paragraphs: [
      "L'ensemble des éléments composant ce site — textes, structures de comparaison, éléments graphiques, éléments d'interface — est protégé par le droit de la propriété intellectuelle.",
      "Toute reproduction, adaptation, rediffusion ou exploitation, totale ou partielle, sur quelque support que ce soit, est interdite sans autorisation écrite préalable de l'éditeur.",
    ],
  },
  {
    heading: "6. Liens sortants et rémunération",
    paragraphs: [
      "Le site renvoie vers des services édités par des tiers. Certains de ces liens peuvent donner lieu à une rémunération de l'éditeur.",
      "Cette rémunération est sans effet sur la méthode d'évaluation appliquée ni sur l'ordre du classement publié. L'éditeur n'exerce aucun contrôle sur le contenu des sites tiers et décline toute responsabilité à leur égard.",
    ],
  },
  {
    heading: "7. Limitation de responsabilité",
    paragraphs: [
      "L'éditeur met tout en œuvre pour publier des informations exactes et actualisées, sans pouvoir garantir leur exhaustivité à tout instant. L'utilisation des informations réunies sur ce site relève de la seule responsabilité du visiteur.",
      "Il appartient à chaque personne de vérifier que la consultation de ce type de contenu est autorisée dans son pays de résidence.",
    ],
  },
  {
    heading: "8. Accès réservé aux personnes majeures",
    paragraphs: [
      "L'accès au site est strictement limité aux personnes âgées de 18 ans révolus. Un dispositif de vérification de l'âge est affiché à la première visite.",
      `Un usage excessif des plateformes en ligne peut entraîner isolement ou perte de repères. Pour être écouté et orienté, composez le ${site.helpline} (appel non surtaxé).`,
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
        description={`Identification de l'éditeur, cadre d'utilisation et responsabilités applicables au site ${site.domain}.`}
      />
      <LegalContent updatedAt="janvier 2026" sections={sections} />
    </>
  );
}
