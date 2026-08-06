"use client";

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
 * Captures gclid (or related click ids) from the URL and persists them
 * so every outbound partner link can append the same identifier.
 *
 * Runs only once the visitor has accepted measurement cookies; refusing
 * consent also removes any identifier stored on an earlier visit.
 */
export function GclidCapture() {
  const [cookieChoice] = useStoredChoice(COOKIE_CHOICE_KEY);
  const consented = hasMarketingConsent(cookieChoice);

  useEffect(() => {
    if (!consented) {
      if (cookieChoice === "essential") clearGclid();
      return;
    }

    const fromUrl = pickClickId(new URLSearchParams(window.location.search));
    if (fromUrl) {
      persistGclid(fromUrl);
      return;
    }

    const stored = getCookie(GCLID_COOKIE);
    if (stored) {
      persistGclid(stored);
    }
  }, [consented, cookieChoice]);

  return null;
}
