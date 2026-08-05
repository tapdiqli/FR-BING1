export type Platform = {
  rank: number;
  id: string;
  initial: string;
  name: string;
  badge: string;
  score: number;
  stars: number;
  summary: string;
  highlights: string[];
  detail: string;
  strengths: string[];
  watchouts: string[];
  /** Outbound partner URL; click id is appended as-is at redirect time. */
  partnerUrl: string;
};

export const platforms: Platform[] = [
  {
    rank: 1,
    id: "plateforme-b",
    initial: "B",
    name: "Plateforme B",
    badge: "Choix n°1 de la rédaction",
    score: 10,
    stars: 5,
    summary:
      "Acteur européen solidement installé, retenu pour son interface épurée et une prise en main quasi immédiate.",
    highlights: ["Statistiques approfondies", "Outils utiles intégrés"],
    detail:
      "Cette plateforme se distingue par une navigation dépouillée qui va droit au but. Les informations essentielles sont regroupées sur un seul écran et les nouveaux venus retrouvent leurs repères en quelques minutes.",
    strengths: [
      "Parcours d'inscription court et lisible",
      "Tableaux de données détaillés et exportables",
      "Assistance disponible en français toute la semaine",
    ],
    watchouts: ["Personnalisation de l'affichage encore limitée"],
    partnerUrl: "https://betsson.fr/",
  },
  {
    rank: 2,
    id: "plateforme-p",
    initial: "P",
    name: "Plateforme P",
    badge: "Valeur sûre",
    score: 9.9,
    stars: 5,
    summary:
      "Enseigne française de longue date, présente depuis plusieurs décennies parmi les repères du secteur en ligne.",
    highlights: ["Catalogue de fonctionnalités large", "Service client réactif"],
    detail:
      "Son ancienneté reste son meilleur argument : la marque a eu le temps d'affiner ses services et de bâtir une relation de confiance avec le public français.",
    strengths: [
      "Notoriété établie et communication transparente",
      "Éventail de services parmi les plus complets",
      "Réponses rapides du support en cas de question",
    ],
    watchouts: ["Interface légèrement plus dense que la moyenne"],
    partnerUrl: "https://www.pmu.fr/",
  },
  {
    rank: 3,
    id: "plateforme-u",
    initial: "U",
    name: "Plateforme U",
    badge: "Meilleure expérience mobile",
    score: 9.8,
    stars: 5,
    summary:
      "Acteur hexagonal qui concentre ses efforts sur une expérience mobile contemporaine et particulièrement fluide.",
    highlights: ["Navigation rapide", "Mises à jour fréquentes"],
    detail:
      "Pensée d'abord pour le smartphone, l'application se charge vite et reste agréable même sur des connexions moyennes. Les évolutions se succèdent à un rythme soutenu.",
    strengths: [
      "Application mobile fluide et bien notée",
      "Cycle de mises à jour régulier",
      "Design clair, adapté aux petits écrans",
    ],
    watchouts: ["Version bureau moins aboutie que le mobile"],
    partnerUrl: "https://www.unibet.fr/",
  },
  {
    rank: 4,
    id: "plateforme-n",
    initial: "N",
    name: "Plateforme N",
    badge: "Montée en puissance",
    score: 9.6,
    stars: 4,
    summary:
      "Arrivée plus récemment sur le marché français, elle progresse vite grâce à des choix d'ergonomie assumés.",
    highlights: ["Prise en main intuitive", "Interface sans surcharge"],
    detail:
      "Le nouvel entrant mise sur la simplicité plutôt que sur l'accumulation de fonctions. Un parti pris qui séduit celles et ceux qui débutent.",
    strengths: [
      "Vocabulaire accessible, sans jargon",
      "Temps de chargement contenus",
      "Tutoriels d'accueil bien construits",
    ],
    watchouts: ["Historique encore court sur le marché français"],
    partnerUrl: "https://www.winamax.fr/?gclid=",
  },
  {
    rank: 5,
    id: "plateforme-w",
    initial: "W",
    name: "Plateforme W",
    badge: "Transparence remarquée",
    score: 9.4,
    stars: 4,
    summary:
      "Une plateforme qui joue la carte de la clarté : conditions détaillées, langage direct et informations accessibles.",
    highlights: ["Conditions expliquées simplement", "Centre d'aide fourni"],
    detail:
      "Rares sont les acteurs à documenter aussi précisément leurs règles d'usage. La base de connaissances répond à la majorité des questions sans passer par le support.",
    strengths: [
      "Documentation complète et à jour",
      "Aucune formulation ambiguë dans les conditions",
      "Outils d'auto-limitation faciles à trouver",
    ],
    watchouts: ["Esthétique un peu austère"],
    partnerUrl: "https://www.betclic.fr/?gclid=",
  },
];

export const topPlatforms = platforms.slice(0, 3);
