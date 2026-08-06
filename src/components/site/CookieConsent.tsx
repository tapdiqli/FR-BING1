"use client";

import Link from "next/link";

import {
  AGE_GATE_KEY,
  COOKIE_CHOICE_KEY,
  UNSET,
  useStoredChoice,
} from "@/lib/useStoredChoice";

export function CookieConsent() {
  const [choice, decide] = useStoredChoice(COOKIE_CHOICE_KEY);
  const [ageChoice] = useStoredChoice(AGE_GATE_KEY);

  // The age gate sits at z-[100] and covers this banner, so hold it back until
  // the visitor has passed the gate and can actually reach these buttons.
  if (ageChoice !== "yes") return null;
  if (choice !== UNSET) return null;

  return (
    <div
      role="region"
      aria-label="Paramètres des cookies"
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5"
    >
      <div className="container-page">
        <div className="rounded-2xl border border-ink-800/10 bg-white p-5 shadow-card-hover sm:flex sm:items-center sm:gap-6 sm:p-6">
          <div className="flex-1">
            <p className="font-display text-base font-bold text-ink-900">
              Paramètres des cookies
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-700/75">
              Nous déposons des cookies et traceurs équivalents afin d&apos;adapter
              le contenu, mesurer l&apos;audience et améliorer votre confort de
              lecture. En acceptant, vous validez cet usage.{" "}
              <Link
                href="/confidentialite"
                className="font-semibold text-plum-600 underline underline-offset-2"
              >
                Politique relative aux cookies
              </Link>
            </p>
          </div>
          <div className="mt-4 flex shrink-0 gap-3 sm:mt-0">
            <button
              type="button"
              onClick={() => decide("essential")}
              className="flex-1 rounded-full border border-ink-800/15 px-5 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:bg-mist-100 sm:flex-none"
            >
              Essentiels
            </button>
            <button
              type="button"
              onClick={() => decide("all")}
              className="flex-1 rounded-full bg-gradient-to-r from-plum-500 to-plum-700 px-6 py-2.5 text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5 sm:flex-none"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
