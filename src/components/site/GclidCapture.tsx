"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import {
  clearGclid,
  GCLID_COOKIE,
  getCookie,
  persistGclid,
  pickClickId,
} from "@/lib/gclid";
import {
  COOKIE_CHOICE_KEY,
  hasMarketingConsent,
  useStoredChoice,
} from "@/lib/useStoredChoice";

/**
 * Captures msclkid from the URL (Bing Ads) and persists it.
 * URL always wins over a previously stored cookie when a new id is present.
 */
export function GclidCapture() {
  const searchParams = useSearchParams();
  const [cookieChoice] = useStoredChoice(COOKIE_CHOICE_KEY);
  const consented = hasMarketingConsent(cookieChoice);

  useEffect(() => {
    if (!consented) {
      if (cookieChoice === "essential") clearGclid();
      return;
    }

    const fromUrl = pickClickId(searchParams);
    if (fromUrl) {
      persistGclid(fromUrl);
      return;
    }

    const stored = getCookie(GCLID_COOKIE);
    if (stored) {
      persistGclid(stored);
    }
  }, [consented, cookieChoice, searchParams]);

  return null;
}
