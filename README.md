# AvisdesParis

Comparateur éditorial francophone pour **avisdesparis.com**. Le site publie un
classement de plateformes en ligne accessibles depuis la France, accompagné de la
méthode d'évaluation, d'une FAQ et des pages légales attendues sur ce type de
support (18+, confidentialité, CGU, pratique responsable).

## Stack

| Élément    | Version                             |
| ---------- | ----------------------------------- |
| Next.js    | 16 (App Router, Turbopack)          |
| React      | 19                                  |
| TypeScript | 5                                   |
| Tailwind   | 4 (configuration via `@theme` CSS)  |
| Polices    | Manrope (texte) + Plus Jakarta Sans |

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
```

Autres commandes :

```bash
npm run build    # build de production
npm run start    # sert le build
npm run lint     # ESLint
npx tsc --noEmit # vérification des types
```

## Structure

```
src/
├─ app/
│  ├─ layout.tsx              chrome global, polices, métadonnées, JSON-LD
│  ├─ page.tsx                accueil (hero, podium, méthode, notation, FAQ)
│  ├─ comparatif/             classement complet + fiches détaillées
│  ├─ faq/                    FAQ complète (avec schéma FAQPage)
│  ├─ pratique-responsable/   prévention, signaux d'alerte, ressources
│  ├─ a-propos/               ligne éditoriale, financement, processus
│  ├─ contact/                coordonnées + formulaire
│  ├─ mentions-legales/ confidentialite/ cgu/
│  ├─ not-found.tsx           page 404
│  ├─ sitemap.ts robots.ts
│  └─ globals.css             palette et utilitaires Tailwind
├─ components/
│  ├─ site/                   Header, Footer, TopStrip, AgeGate, CookieConsent,
│  │                          PlatformCard, FaqAccordion, ContactForm…
│  └─ ui/                     Logo, Icon, StarRating, SectionHeading
├─ data/                      site.ts, platforms.ts, content.ts
└─ lib/useStoredChoice.ts     lecture du choix stocké (âge, cookies)
```

## Contenu éditorial

Tout le contenu variable est centralisé dans `src/data/` :

- `site.ts` — nom, domaine, navigation, numéro d'écoute, organismes cités
- `platforms.ts` — plateformes classées, notes, atouts et réserves
- `content.ts` — piliers de méthode, critères pondérés, FAQ, chiffres clés

Modifier une note ou ajouter une plateforme ne demande donc aucune retouche des
composants : le podium de l'accueil reprend les trois premières entrées de
`platforms.ts`, la page comparatif les affiche toutes.

## Palette

Fond sombre prune (`ink`), accent violet (`plum`) pour les actions, or (`gold`)
pour les notations et les rappels 18+, fonds clairs `mist`. Les variables sont
déclarées dans le bloc `@theme` de `src/app/globals.css`.

## Conformité

- Vérification d'âge bloquante à la première visite, choix mémorisé localement
- Bandeau cookies avec distinction « essentiels » / « accepter »
- Rappel 18+ en en-tête, en pied de page et sur les pages sensibles
- Numéro d'écoute et organismes d'accompagnement présents sur tout le site

## Déploiement

Les 12 routes sont pré-rendues en statique. Avant mise en ligne, vérifier que
`site.url` dans `src/data/site.ts` pointe bien sur le domaine de production :
c'est cette valeur qui alimente `metadataBase`, le sitemap et `robots.txt`.
