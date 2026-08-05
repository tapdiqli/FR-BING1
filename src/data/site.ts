export const site = {
  name: "AvisdesParis",
  domain: "avisdesparis.com",
  url: "https://www.avisdesparis.com",
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
];

export type RegulatoryBadge = {
  label: string;
  href: string;
  src: string;
  external?: boolean;
};

export const regulatoryBadges: RegulatoryBadge[] = [
  {
    label: "18+",
    href: "/pratique-responsable",
    src: "/reg/18plus.webp",
  },
  {
    label: "Organisation d'accompagnement",
    href: "https://www.gambleaware.org/",
    src: "/reg/gambleaware.png",
    external: true,
  },
  {
    label: "Autorité de régulation",
    href: "https://anj.fr/",
    src: "/reg/anj.png",
    external: true,
  },
  {
    label: "Structure d'écoute",
    href: "https://gordonmoody.org.uk/",
    src: "/reg/gordon-moody.png",
    external: true,
  },
  {
    label: "Service d'information",
    href: "https://www.joueurs-info-service.fr/",
    src: "/reg/joueurs-info-service.png",
    external: true,
  },
  {
    label: "Médiateur indépendant",
    href: "https://mediateurdesjeuxenligne.fr/",
    src: "/reg/mediateur-des-jeux.png",
    external: true,
  },
];
