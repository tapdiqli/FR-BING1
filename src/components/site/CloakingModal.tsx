"use client";

import Image from "next/image";
import { useEffect, useSyncExternalStore } from "react";

import {
  cloakingChips,
  cloakingDisclaimer,
  cloakingOffers,
  type CloakingAccent,
  type CloakingOffer,
} from "@/data/cloakingOffers";
import {
  getStoredGclid,
  subscribeGclid,
} from "@/lib/gclid";

const accentStyles: Record<
  CloakingAccent,
  {
    border: string;
    badge: string;
    offer: string;
    button: string;
    glow: string;
  }
> = {
  green: {
    border: "border-[#39ff14]",
    badge: "bg-[#39ff14] text-black",
    offer: "text-[#39ff14]",
    button:
      "bg-gradient-to-b from-[#7CFF4A] to-[#22C55E] text-black shadow-[0_0_24px_rgba(57,255,20,0.35)]",
    glow: "shadow-[0_0_0_1px_rgba(57,255,20,0.35)]",
  },
  gold: {
    border: "border-[#f5c518]",
    badge: "bg-[#f5c518] text-black",
    offer: "text-[#f5c518]",
    button:
      "bg-gradient-to-b from-[#FFE566] to-[#E3A534] text-black shadow-[0_0_24px_rgba(245,197,24,0.35)]",
    glow: "shadow-[0_0_0_1px_rgba(245,197,24,0.35)]",
  },
  blue: {
    border: "border-[#3BA7FF]",
    badge: "bg-[#3BA7FF] text-black",
    offer: "text-[#3BA7FF]",
    button:
      "bg-gradient-to-b from-[#6EC1FF] to-[#1D8FFF] text-black shadow-[0_0_24px_rgba(59,167,255,0.35)]",
    glow: "shadow-[0_0_0_1px_rgba(59,167,255,0.35)]",
  },
};

function withVisitId(partnerUrl: string, visitId: string): string {
  if (!visitId) return partnerUrl;
  try {
    const url = new URL(partnerUrl);
    url.searchParams.set("visit_id", visitId);
    return url.toString();
  } catch {
    if (partnerUrl.endsWith("visit_id=")) {
      return `${partnerUrl}${encodeURIComponent(visitId)}`;
    }
    const separator = partnerUrl.includes("?") ? "&" : "?";
    return `${partnerUrl}${separator}visit_id=${encodeURIComponent(visitId)}`;
  }
}

function OfferLogo({ offer }: { offer: CloakingOffer }) {
  return (
    <div className="relative flex h-16 w-28 shrink-0 items-center justify-center sm:h-20 sm:w-36">
      <Image
        src={offer.logoSrc}
        alt={offer.logoText}
        fill
        className="object-contain"
        sizes="144px"
      />
    </div>
  );
}

function OfferCard({
  offer,
  visitId,
}: {
  offer: CloakingOffer;
  visitId: string;
}) {
  const stored = useSyncExternalStore(subscribeGclid, getStoredGclid, () => "");
  const gclid = visitId || stored;
  const href = withVisitId(offer.partnerUrl, gclid);
  const styles = accentStyles[offer.accent];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`relative block rounded-xl border-2 bg-[#0b1220] ${styles.border} ${styles.glow} transition-transform duration-200 hover:-translate-y-0.5`}
    >
      <span
        className={`absolute -top-2.5 left-4 rounded px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide ${styles.badge}`}
      >
        Hot Offer
      </span>

      <div className="flex flex-col gap-4 p-4 pt-5 sm:flex-row sm:items-center sm:gap-5 sm:p-5 sm:pt-6">
        <div className="flex items-center gap-4 sm:contents">
          <OfferLogo offer={offer} />
          <div className="hidden h-14 w-px bg-white/15 sm:block" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/80">
              {offer.name}
            </p>
            <p
              className={`mt-1 font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl ${styles.offer}`}
            >
              {offer.offer}
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-white">
              {offer.spins}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 sm:contents">
          <div className="text-left sm:shrink-0 sm:text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
              Our Score
            </p>
            <p className="font-display text-3xl font-extrabold leading-none text-white">
              {offer.score}
            </p>
          </div>

          <span
            className={`inline-flex flex-1 items-center justify-center rounded-lg px-5 py-3 text-sm font-extrabold uppercase tracking-wide sm:min-w-[11rem] sm:flex-none sm:text-base ${styles.button}`}
          >
            Claim Bonus
          </span>
        </div>
      </div>

      <p className="border-t border-white/10 px-4 py-2 text-[10px] leading-snug text-white/40 sm:px-5">
        {cloakingDisclaimer}
      </p>
    </a>
  );
}

type CloakingModalProps = {
  open: boolean;
  /** Server-resolved click id (URL wins over cookie). */
  visitId?: string;
};

export function CloakingModal({ open, visitId = "" }: CloakingModalProps) {
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cloaking-modal-title"
      className="fixed inset-0 z-[90] overflow-y-auto bg-[#07101f]"
    >
      <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col px-4 py-8 sm:px-6 sm:py-10">
        <header className="text-center">
          <h2
            id="cloaking-modal-title"
            className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-4xl"
          >
            Meilleurs casinos en ligne en France
          </h2>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {cloakingChips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white sm:text-xs"
              >
                {chip}
              </li>
            ))}
          </ul>
        </header>

        <div className="mt-8 space-y-5 sm:mt-10">
          {cloakingOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} visitId={visitId} />
          ))}
        </div>
      </div>
    </div>
  );
}
