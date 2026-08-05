"use client";

import { useEffect, useState } from "react";

import { site } from "@/data/site";
import { UNSET, useStoredChoice } from "@/lib/useStoredChoice";

const STORAGE_KEY = "adp-age-confirmed";

export function AgeGate() {
  const [choice, setChoice] = useStoredChoice(STORAGE_KEY);
  const [refused, setRefused] = useState(false);
  const visible = choice === UNSET;

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-[100] grid place-items-center bg-ink-950/85 p-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-ink-900 p-7 text-center shadow-2xl">
        <span className="inline-grid h-14 w-14 place-items-center rounded-full border-2 border-gold-400 font-display text-lg font-extrabold text-gold-400">
          18+
        </span>
        <h2
          id="age-gate-title"
          className="mt-5 font-display text-2xl font-extrabold text-white"
        >
          Vérification de l&apos;âge
        </h2>

        {refused ? (
          <>
            <p className="mt-3 text-sm leading-relaxed text-plum-100/75">
              L&apos;accès à {site.name} est réservé aux personnes majeures. Nous
              ne pouvons pas vous laisser consulter ces contenus.
            </p>
            <p className="mt-4 text-xs text-plum-100/50">
              Besoin de parler à quelqu&apos;un ? Le {site.helpline} (appel non
              surtaxé) reste joignable.
            </p>
          </>
        ) : (
          <>
            <p className="mt-3 text-sm leading-relaxed text-plum-100/75">
              Ce site s&apos;adresse uniquement à un public majeur. Merci de
              confirmer que vous avez au moins 18 ans pour poursuivre.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setChoice("yes")}
                className="rounded-full bg-gradient-to-r from-plum-500 to-plum-700 px-6 py-3 text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                J&apos;ai 18 ans ou plus
              </button>
              <button
                type="button"
                onClick={() => setRefused(true)}
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-plum-100/75 transition-colors hover:border-white/30 hover:text-white"
              >
                J&apos;ai moins de 18 ans
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
