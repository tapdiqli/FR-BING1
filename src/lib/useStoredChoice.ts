"use client";

import { useCallback, useSyncExternalStore } from "react";

/** Rendered on the server and during hydration, before storage can be read. */
export const UNKNOWN = "unknown";
/** No choice has been recorded yet. */
export const UNSET = "unset";

export const AGE_GATE_KEY = "adp-age-confirmed";
export const COOKIE_CHOICE_KEY = "adp-cookie-choice";

/** True once the visitor has accepted measurement and advertising cookies. */
export function hasMarketingConsent(choice: string) {
  return choice === "all";
}

const listeners = new Set<() => void>();
/** Mirrors the recorded choice so the UI still updates when storage is blocked. */
const memory = new Map<string, string>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useStoredChoice(key: string) {
  const getSnapshot = useCallback(() => {
    const cached = memory.get(key);
    if (cached) return cached;
    try {
      return window.localStorage.getItem(key) ?? UNSET;
    } catch {
      return UNSET;
    }
  }, [key]);

  const value = useSyncExternalStore(subscribe, getSnapshot, () => UNKNOWN);

  const setValue = useCallback(
    (next: string) => {
      memory.set(key, next);
      try {
        window.localStorage.setItem(key, next);
      } catch {
        // storage unavailable: the in-memory mirror keeps this session consistent
      }
      listeners.forEach((listener) => listener());
    },
    [key],
  );

  return [value, setValue] as const;
}
