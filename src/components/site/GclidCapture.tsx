"use client";

import { useEffect } from "react";

import {
  GCLID_COOKIE,
  getCookie,
  persistGclid,
  pickClickId,
} from "@/lib/gclid";

/**
 * Captures gclid (or related click ids) from the URL and persists them
 * so every outbound partner link can append the same identifier.
 */
export function GclidCapture() {
  useEffect(() => {
    const fromUrl = pickClickId(new URLSearchParams(window.location.search));
    if (fromUrl) {
      persistGclid(fromUrl);
      return;
    }

    const stored = getCookie(GCLID_COOKIE);
    if (stored) {
      persistGclid(stored);
    }
  }, []);

  return null;
}
