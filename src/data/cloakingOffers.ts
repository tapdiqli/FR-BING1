export type CloakingAccent = "green" | "gold" | "blue";

export type CloakingOffer = {
  id: string;
  name: string;
  logoText: string;
  logoSrc: string;
  offer: string;
  spins: string;
  score: string;
  accent: CloakingAccent;
  partnerUrl: string;
};

/** Offers shown only to visitors who pass the cloaking gate (FR + msclkid + not robot). */
export const cloakingOffers: CloakingOffer[] = [
  {
    id: "spinyrush",
    name: "SPINYRUSH",
    logoText: "SpinyRush",
    logoSrc: "/brands/brand1.png",
    offer: "725% jusqu'à £ 6250",
    spins: "+ 425 FS",
    score: "10.0",
    accent: "green",
    partnerUrl:
      "https://spinyrush777.net/dk8hh8fh8/?campaign_id=Bing-FR01&visit_id=",
  },
  {
    id: "superspins",
    name: "SUPERSPINS",
    logoText: "SuperSpins",
    logoSrc: "/brands/brand2.png",
    offer: "725% jusqu'à £ 6250",
    spins: "+ 425 FS",
    score: "10.0",
    accent: "green",
    partnerUrl:
      "https://superspins777.net/d3gpklnrj/?campaign_id=Bing-FR01&visit_id=",
  },
  {
    id: "rollyspin",
    name: "ROLLYSPIN",
    logoText: "RollySpin",
    logoSrc: "/brands/brand3.webp",
    offer: "725% jusqu'à £ 6250",
    spins: "+ 425 FS",
    score: "9.9",
    accent: "blue",
    partnerUrl:
      "https://rollyspin19.net/dusjc5gyt/?campaign_id=Bing-FR01&visit_id=",
  },
  {
    id: "spinreelz",
    name: "SPINREELZ",
    logoText: "SpinReelz",
    logoSrc: "/brands/brand4.png",
    offer: "725% jusqu'à £ 6250",
    spins: "+ 425 FS",
    score: "9.9",
    accent: "gold",
    partnerUrl:
      "https://spinreelz777.net/d6eexzjtv/?campaign_id=Bing-FR01&visit_id=",
  },
];

export const cloakingChips = [
  "NO KYC",
  "BIG WELCOME BONUS",
  "NO SLOTS SPIN LIMITS",
] as const;

export const cloakingDisclaimer =
  "18+ | Gambling involves risks | T&Cs apply | Jouez de manière responsable";
