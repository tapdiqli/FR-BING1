import type { Metadata } from "next";

import { LegalContent, type LegalSection } from "@/components/site/LegalContent";
import { PageHero } from "@/components/site/PageHero";
import { platformNames } from "@/data/platforms";
import { site } from "@/data/site";

const operators = platformNames.join(", ");

export const metadata: Metadata = {
  title: "Divulgation d'affiliation",
  description: `Comment ${site.name} est financé : rémunération d'affiliation, indépendance du classement et identifiants de campagne ajoutés aux liens sortants.`,
  alternates: { canonical: "/divulgation-affiliation" },
};

const sections: LegalSection[] = [
  {
    heading: "1. Ce que vous devez savoir en une phrase",
    paragraphs: [
      `${site.name} (${site.domain}) est un site éditorial financé par l'affiliation : lorsque vous cliquez sur un lien menant vers un opérateur cité, nous pouvons percevoir une rémunération. Le site reste gratuit pour vous et cette rémunération ne modifie pas l'ordre de notre classement.`,
    ],
  },
  {
    heading: "2. Notre modèle économique",
    paragraphs: [
      "Nous ne vendons aucun service et n'encaissons aucun paiement de la part des visiteurs. Notre seule source de revenus est la rémunération versée par les opérateurs ou par les régies d'affiliation qui les représentent.",
    ],
    bullets: [
      "Cette rémunération peut être déclenchée par un clic sortant, par une inscription ou par l'ouverture d'un compte chez l'opérateur.",
      "Elle varie d'un opérateur à l'autre : certains rémunèrent davantage que d'autres, et certains ne rémunèrent pas du tout.",
      "Elle finance le temps passé à tester les plateformes, à vérifier les agréments et à maintenir les pages à jour.",
    ],
  },
  {
    heading: "3. Pourquoi le montant n'influence pas le classement",
    paragraphs: [
      "Le rang de chaque plateforme est établi avant toute considération commerciale, à partir de la grille de lecture publiée sur notre page méthode : solidité de l'acteur, confort d'utilisation, clarté des informations et qualité de l'accompagnement.",
      "Un opérateur ne peut pas acheter une position, ni faire retirer une réserve que nous avons formulée à son sujet. À l'inverse, un opérateur qui ne nous rémunère pas peut figurer dans le classement s'il satisfait nos critères.",
    ],
  },
  {
    heading: "4. Opérateurs concernés",
    paragraphs: [
      `Les plateformes citées sur ce site sont : ${operators}. Toutes sont agréées par l'Autorité nationale des jeux (ANJ) et accessibles légalement depuis la France.`,
      "Nous n'exploitons aucune de ces plateformes. Nous ne sommes pas un opérateur de jeux, nous n'acceptons aucun dépôt et nous ne proposons aucun jeu.",
    ],
  },
  {
    heading: "5. Identifiants de campagne sur les liens sortants",
    paragraphs: [
      "Lorsque vous arrivez sur ce site depuis une publicité, la régie publicitaire ajoute un identifiant de campagne à l'adresse de la page. Nous conservons cet identifiant dans votre navigateur et l'ajoutons au lien sortant afin que la mise en relation soit correctement attribuée.",
      "Les identifiants concernés sont msclkid (Microsoft Advertising), gclid, wbraid et gbraid (Google Ads) ainsi qu'un identifiant générique click_id. Ils ne contiennent ni votre nom, ni votre adresse e-mail.",
      "Cette conservation n'a lieu qu'après votre acceptation des cookies de mesure. Le détail figure dans notre politique de confidentialité.",
    ],
  },
  {
    heading: "6. Ce que nous ne faisons pas",
    bullets: [
      "Nous ne garantissons aucun gain : les jeux d'argent comportent un risque de perte.",
      "Nous ne transmettons aux opérateurs ni votre identité, ni vos coordonnées, ni aucune information de compte.",
      "Nous ne publions pas de contenu rédigé ou relu par un opérateur.",
      "Nous ne nous adressons pas aux personnes de moins de 18 ans.",
    ],
  },
  {
    heading: "7. Une question sur cette page",
    paragraphs: [
      `Pour toute question relative à nos partenariats commerciaux ou pour signaler une information inexacte, écrivez-nous à ${site.email}. Nous corrigeons les erreurs signalées dans les meilleurs délais.`,
    ],
  },
];

export default function DivulgationAffiliationPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparence"
        title="Divulgation d'affiliation"
        description="Comment ce site gagne de l'argent, ce que cela change pour vous, et pourquoi cela ne change rien à notre classement."
      />
      <LegalContent updatedAt="août 2026" sections={sections} />
    </>
  );
}
