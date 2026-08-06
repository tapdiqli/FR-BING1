export const site = {
  name: "AvisdesParis",
  domain: "avisdesparis.com",
  url: "https://www.avisdesparis.com",
  /** Entité qui exploite le site ; à remplacer par la raison sociale une fois la société immatriculée. */
  legalEntity: "avisdesparis.com",
  tagline: "Le comparateur indépendant des plateformes en France",
  description:
    "AvisdesParis passe au crible les plateformes en ligne accessibles depuis la France et publie un classement lisible, construit sur la solidité de chaque acteur, le confort d'utilisation et la transparence des informations.",
  helpline: "09 74 75 13 13",
  email: "contact@avisdesparis.com",
  city: "Paris, France",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Comparatif", href: "/comparatif" },
  { label: "FAQ", href: "/faq" },
  { label: "Usage responsable", href: "/pratique-responsable" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Conditions d'utilisation", href: "/cgu" },
  { label: "Divulgation d'affiliation", href: "/divulgation-affiliation" },
];

export type RegulatoryBadge = {
  label: string;
  href: string;
  src: string;
  external?: boolean;
};

/**
 * Organismes français uniquement : le site s'adresse exclusivement au marché
 * français, les références aux organismes britanniques ont été retirées.
 */
export const regulatoryBadges: RegulatoryBadge[] = [
  {
    label: "18+",
    href: "/pratique-responsable",
    src: "/reg/18plus.webp",
  },
  {
    label: "Autorité nationale des jeux",
    href: "https://anj.fr/",
    src: "/reg/anj.png",
    external: true,
  },
  {
    label: "Joueurs Info Service",
    href: "https://www.joueurs-info-service.fr/",
    src: "/reg/joueurs-info-service.png",
    external: true,
  },
  {
    label: "Médiateur des jeux en ligne",
    href: "https://mediateurdesjeuxenligne.fr/",
    src: "/reg/mediateur-des-jeux.png",
    external: true,
  },
];

/** Ressources d'aide françaises, citées en complément des badges ci-dessus. */
export const helpResources: NavItem[] = [
  { label: "Joueurs Info Service", href: "https://www.joueurs-info-service.fr/" },
  { label: "Auto-évaluation EvalluJeu", href: "https://www.evalujeu.fr/" },
  { label: "Autorité nationale des jeux (ANJ)", href: "https://anj.fr/" },
];
