"use client";

import { useSyncExternalStore } from "react";

import {
  appendClickId,
  getStoredGclid,
  subscribeGclid,
} from "@/lib/gclid";

/**
 * Keeps the outbound partner URL in sync with the persisted click id.
 * Pattern: setLinkUrl(`${partnerUrl}${gclid}`)
 */
export function useTrackedUrl(partnerUrl: string): string {
  const gclid = useSyncExternalStore(subscribeGclid, getStoredGclid, () => "");
  return appendClickId(partnerUrl, gclid);
}
