import type { Metadata } from "next";
import Link from "next/link";

import { LegalContent, type LegalSection } from "@/components/site/LegalContent";
import { PageHero } from "@/components/site/PageHero";
import { platformNames } from "@/data/platforms";
import { site } from "@/data/site";

const operators = platformNames.join(", ");

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Identité de l'éditeur, données collectées, finalités, partage avec Microsoft Advertising et Google Analytics, transferts hors UE, durées de conservation et droits applicables sur le site AvisdesParis.",
  alternates: { canonical: "/confidentialite" },
};

const microsoftLink = (
  <a
    href="https://privacy.microsoft.com/fr-fr/privacystatement"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-plum-600 underline underline-offset-2"
  >
    Déclaration de confidentialité de Microsoft
  </a>
);

const sections: LegalSection[] = [
  {
    heading: "1. Qui exploite ce site",
    paragraphs: [
      `Ce site est édité par ${site.legalEntity}, éditeur du comparateur accessible à l'adresse ${site.url}. L'éditeur agit en qualité de responsable de traitement pour les données décrites ci-dessous.`,
      `${site.name} est un site éditorial indépendant financé par l'affiliation. Nous ne sommes pas un opérateur de jeux : aucun compte de jeu n'est ouvert ici, aucun dépôt n'y est accepté et aucune donnée bancaire n'y transite.`,
      <>
        Pour toute question sur cette politique ou pour exercer vos droits,
        écrivez à{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-semibold text-plum-600 underline underline-offset-2"
        >
          {site.email}
        </a>
        .
      </>,
    ],
  },
  {
    heading: "2. Catégories de données traitées",
    bullets: [
      "Données techniques et d'appareil : adresse IP (tronquée lorsque c'est possible), agent utilisateur du navigateur, type d'appareil, système d'exploitation et région approximative déduite de l'adresse IP.",
      "Données de navigation : pages consultées, durée de visite, site d'origine, termes de recherche vous ayant amené ici et liens sortants sur lesquels vous cliquez.",
      "Identifiants de campagne publicitaire : msclkid (Microsoft Advertising), gclid, wbraid et gbraid (Google Ads) ainsi qu'un identifiant générique click_id, conservés dans le cookie adp_gclid lorsque vous arrivez depuis une publicité. Ils ne contiennent ni votre nom ni votre adresse e-mail.",
      "Données de contact : nom, adresse e-mail, objet et contenu du message lorsque vous utilisez le formulaire de contact.",
      "Préférences locales : confirmation de majorité et choix relatif aux cookies, conservés dans le stockage local de votre navigateur.",
    ],
    paragraphs: [
      "Nous ne collectons sciemment aucune donnée concernant des personnes de moins de 18 ans, et nous ne traitons aucune donnée sensible au sens de l'article 9 du RGPD.",
    ],
  },
  {
    heading: "3. Finalités poursuivies et bases légales",
    bullets: [
      "Mesure d'audience : comprendre quelles pages et quels comparatifs sont utiles aux visiteurs. Base légale : votre consentement.",
      "Marketing et mesure publicitaire : évaluer la performance de nos campagnes sur Microsoft Advertising et Google Ads, et rattacher une mise en relation à la bonne campagne. Base légale : votre consentement.",
      "Amélioration du site : corriger les problèmes d'affichage et de navigation, faire évoluer la présentation du classement. Base légale : intérêt légitime de l'éditeur.",
      "Assistance aux utilisateurs : répondre aux questions, corrections et réclamations que vous nous adressez. Base légale : intérêt légitime de l'éditeur.",
      "Sécurité : détecter les trafics frauduleux, l'aspiration de contenu et les attaques. Base légale : intérêt légitime de l'éditeur.",
      "Obligations légales : répondre aux demandes des autorités compétentes. Base légale : obligation légale.",
    ],
    paragraphs: [
      "Nous ne vendons aucune donnée personnelle et nous ne constituons pas nous-mêmes de profils publicitaires individuels.",
    ],
  },
  {
    heading: "4. Destinataires et partage avec des tiers",
    paragraphs: ["Les données décrites ci-dessus peuvent être communiquées aux catégories de destinataires suivantes :"],
    bullets: [
      "Microsoft Advertising (Microsoft Corporation et Microsoft Ireland Operations Limited), pour la diffusion publicitaire, la mesure des conversions et l'analyse d'audience. Voir la section 5.",
      <>
        Google Analytics et Google Ads (Google Ireland Limited), pour la mesure
        d&apos;audience et la mesure des conversions publicitaires, après votre
        consentement. Voir la{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-plum-600 underline underline-offset-2"
        >
          politique de confidentialité de Google
        </a>
        .
      </>,
      `Partenaires d'affiliation : les opérateurs agréés cités sur ce site (${operators}) ainsi que les régies d'affiliation qui administrent ces relations. Lors d'un clic sortant, l'identifiant de campagne décrit à la section 2 leur est transmis afin que la mise en relation soit attribuée. Ni votre nom, ni votre adresse e-mail, ni aucune information de compte ne leur sont communiqués.`,
      "Prestataires techniques d'hébergement et de mesure d'audience, agissant en qualité de sous-traitants, sur instruction et dans un cadre contractuel.",
      "Conseils professionnels et autorités compétentes, lorsque la communication est requise par la loi ou nécessaire à la constatation, à l'exercice ou à la défense d'un droit en justice.",
    ],
  },
  {
    heading: "5. Microsoft Advertising et la balise UET",
    paragraphs: [
      "Nous faisons la promotion de ce site via Microsoft Advertising. Lorsque les technologies Microsoft Advertising, dont la balise UET (Universal Event Tracking), sont actives sur ce site, elles sont utilisées à des fins de mesure d'audience et de publicité : identifier quelle annonce a conduit à une visite, produire des rapports d'audience agrégés et permettre le reciblage publicitaire.",
      "Microsoft est susceptible de collecter ou de recevoir des données personnelles concernant les utilisateurs de ce site, notamment les données techniques, d'appareil et de navigation décrites à la section 2, et de les utiliser pour fournir ses services de mesure et pour cibler des annonces. Microsoft agit à cet égard en qualité de responsable de traitement indépendant.",
      <>
        Le détail des traitements réalisés par Microsoft et les moyens de
        contrôle mis à votre disposition figurent dans la {microsoftLink}.
      </>,
    ],
  },
  {
    heading: "6. Vos droits",
    paragraphs: [
      "Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :",
    ],
    bullets: [
      "Droit d'accès : obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie.",
      "Droit de rectification : faire corriger des données inexactes ou incomplètes.",
      "Droit à l'effacement : faire supprimer vos données lorsque nous n'avons plus de motif légitime de les conserver.",
      "Droit à la limitation et droit d'opposition, notamment aux traitements fondés sur notre intérêt légitime.",
      "Droit à la portabilité : recevoir dans un format structuré et lisible par machine les données que vous nous avez fournies.",
      "Droit de retirer votre consentement à tout moment, sans que cela remette en cause les traitements effectués avant le retrait. Pour retirer votre consentement à la mesure d'audience et à la publicité, effacez les données de site enregistrées par votre navigateur : la bannière réapparaîtra et vous pourrez choisir « Essentiels ».",
    ],
  },
  {
    heading: "7. Comment exercer vos droits",
    paragraphs: [
      <>
        Adressez votre demande à{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-semibold text-plum-600 underline underline-offset-2"
        >
          {site.email}
        </a>{" "}
        en précisant l&apos;objet de votre demande. Nous répondons dans un délai
        d&apos;un mois.
      </>,
      <>
        Si la réponse apportée ne vous satisfait pas, vous pouvez saisir la CNIL,
        autorité de contrôle compétente en France, sur{" "}
        <a
          href="https://www.cnil.fr/fr/plaintes"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-plum-600 underline underline-offset-2"
        >
          cnil.fr
        </a>
        .
      </>,
    ],
  },
  {
    heading: "8. Durées de conservation",
    bullets: [
      "Statistiques d'audience agrégées : 25 mois maximum, puis suppression ou anonymisation complète.",
      "Identifiants de campagne publicitaire (cookie adp_gclid) : 90 jours, ou jusqu'à effacement des données de site par vos soins.",
      "Préférences stockées localement (âge, cookies) : jusqu'à leur suppression par vos soins.",
      "Journaux techniques du serveur : 12 mois maximum, à des fins de sécurité et de diagnostic.",
      "Messages reçus via le formulaire de contact : 24 mois maximum à compter du dernier échange.",
    ],
  },
  {
    heading: "9. Transferts hors de l'Union européenne",
    paragraphs: [
      "Certains destinataires mentionnés à la section 4, en particulier Microsoft et Google, traitent des données personnelles en dehors de l'Union européenne, notamment aux États-Unis.",
      "Ces transferts sont encadrés soit par une décision d'adéquation de la Commission européenne, soit par les clauses contractuelles types adoptées par la Commission, complétées par des mesures techniques additionnelles. Vous pouvez obtenir une copie de ces garanties en écrivant à l'adresse indiquée à la section 7.",
    ],
  },
  {
    heading: "10. Cookies et traceurs",
    paragraphs: [
      "Les cookies strictement nécessaires assurent le fonctionnement du site — mémorisation de votre confirmation de majorité et de votre choix relatif aux cookies — et ne requièrent pas de consentement.",
      "Les traceurs de mesure d'audience et de publicité, y compris ceux décrits aux sections 4 et 5, ne sont activés qu'après votre acceptation via la bannière. Si vous choisissez « Essentiels », aucun identifiant de campagne n'est conservé et le comparatif reste pleinement consultable.",
    ],
  },
  {
    heading: "11. Sécurité",
    paragraphs: [
      "Le site est diffusé en HTTPS et l'accès aux outils d'administration est restreint aux seules personnes qui en ont besoin. Malgré ces mesures, aucune transmission sur internet ne peut être garantie comme totalement inviolable.",
    ],
  },
  {
    heading: "12. Personnes mineures et évolutions",
    paragraphs: [
      "Le site n'est pas destiné aux personnes de moins de 18 ans et ne collecte sciemment aucune donnée les concernant. Toute donnée identifiée comme telle est supprimée sans délai.",
      <>
        Cette politique peut évoluer pour refléter un changement de nos pratiques
        ou de la réglementation ; la date de mise à jour figure en haut de page.
        Nos relations commerciales avec les opérateurs cités sont détaillées dans
        notre{" "}
        <Link
          href="/divulgation-affiliation"
          className="font-semibold text-plum-600 underline underline-offset-2"
        >
          divulgation d&apos;affiliation
        </Link>
        .
      </>,
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        eyebrow="Vos données"
        title="Politique de confidentialité"
        description="Qui édite ce site, ce que nous collectons, pourquoi, avec qui nous le partageons, pendant combien de temps, et comment reprendre la main sur vos informations."
      />
      <LegalContent updatedAt="août 2026" sections={sections} />
    </>
  );
}
