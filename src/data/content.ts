export type Pillar = {
  icon: string;
  title: string;
  body: string;
};

export const pillars: Pillar[] = [
  {
    icon: "shield",
    title: "Sélection filtrée",
    body: "Seules les plateformes qui satisfont nos exigences de transparence et de sérieux dans le service rendu apparaissent dans nos pages.",
  },
  {
    icon: "chart",
    title: "Mise en regard régulière",
    body: "Notre équipe reprend périodiquement chaque fiche pour confronter les fonctionnalités et maintenir un classement qui tient debout.",
  },
  {
    icon: "compass",
    title: "Regard indépendant",
    body: "Nos analyses sont écrites pour être comprises : pas de vocabulaire technique inutile, pas d'intérêt caché derrière une recommandation.",
  },
  {
    icon: "age",
    title: "Usage mesuré",
    body: "Chaque page rappelle les réflexes à conserver et renvoie vers les structures d'écoute et d'information existantes.",
  },
];

export type Criterion = {
  index: string;
  title: string;
  body: string;
  weight: number;
};

export const criteria: Criterion[] = [
  {
    index: "01",
    title: "Solidité de l'acteur",
    body: "Ancienneté sur le marché, franchise de la communication et réputation construite auprès du public français.",
    weight: 30,
  },
  {
    index: "02",
    title: "Étendue des services",
    body: "Comparaison de ce qui est réellement proposé et de la profondeur des fonctionnalités mises à disposition.",
    weight: 25,
  },
  {
    index: "03",
    title: "Confort d'utilisation",
    body: "Fluidité du site, réactivité sur mobile et facilité à trouver l'information que l'on cherche.",
    weight: 25,
  },
  {
    index: "04",
    title: "Lisibilité des règles",
    body: "Conditions d'utilisation compréhensibles et informations communiquées sans zone d'ombre.",
    weight: 20,
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Sur quelle base construisez-vous votre classement ?",
    answer:
      "Nous confrontons quatre dimensions pour chaque plateforme : sa solidité, l'étendue de ses services, le confort de navigation et la lisibilité des règles qu'elle communique. Le rang obtenu détermine ensuite la note affichée ainsi que le nombre d'étoiles.",
  },
  {
    question: "AvisdesParis est-il lui-même une plateforme ?",
    answer:
      "Non. AvisdesParis est un site éditorial : nous observons, comparons et rédigeons. Aucune inscription ni aucun service n'est proposé directement chez nous, nous vous orientons uniquement vers les acteurs analysés.",
  },
  {
    question: "Peut-on se fier aux plateformes que vous présentez ?",
    answer:
      "Nous écartons les acteurs dont les conditions manquent de clarté ou dont le sérieux nous paraît discutable. Cela dit, la décision finale vous appartient : lisez toujours les conditions d'utilisation avant de vous engager.",
  },
  {
    question: "Quel âge faut-il avoir pour s'inscrire ?",
    answer:
      "Ces environnements sont strictement réservés aux personnes majeures. Il faut donc avoir 18 ans révolus, et les plateformes sérieuses procèdent à une vérification d'identité à l'inscription.",
  },
  {
    question: "Votre comparatif est-il rémunéré par les plateformes ?",
    answer:
      "Certains liens présents sur le site peuvent générer une rémunération. Cela ne modifie ni la méthode appliquée ni l'ordre du classement : les critères restent identiques pour tous les acteurs examinés.",
  },
  {
    question: "À quelle fréquence les fiches sont-elles reprises ?",
    answer:
      "Nous repassons sur l'ensemble du comparatif à intervalles réguliers, et immédiatement dès qu'un changement notable est constaté chez l'un des acteurs suivis.",
  },
  {
    question: "Comment signaler une information inexacte ?",
    answer:
      "Écrivez-nous depuis la page Contact en précisant la plateforme concernée et le point litigieux. Nous vérifions chaque signalement et corrigeons la fiche si l'erreur est confirmée.",
  },
  {
    question: "Que faire si mon usage m'inquiète ?",
    answer:
      "Faites une pause et parlez-en. Le 09 74 75 13 13 (appel non surtaxé) met à disposition une écoute confidentielle, et notre page Usage responsable recense d'autres ressources utiles.",
  },
];

export const homeFaq = faqItems.slice(0, 4);

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "5", label: "plateformes analysées en détail" },
  { value: "4", label: "critères appliqués à chacune" },
  { value: "18+", label: "accès strictement réservé aux majeurs" },
  { value: "0 €", label: "aucun frais pour consulter le comparatif" },
];

export const heroChips: string[] = [
  "Analyse centrée sur la France",
  "Acteurs passés au crible",
  "Comparatif tenu à jour",
  "Classement revu régulièrement",
];
