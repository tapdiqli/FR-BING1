export const GCLID_COOKIE = "adp_gclid";
export const GCLID_PARAM_KEYS = [
  "gclid",
  "wbraid",
  "gbraid",
  "msclkid",
  "click_id",
] as const;

const listeners = new Set<() => void>();

export function pickClickId(
  searchParams: URLSearchParams | { get(name: string): string | null },
): string {
  for (const key of GCLID_PARAM_KEYS) {
    const value = searchParams.get(key)?.trim();
    if (value) return value;
  }
  return "";
}

/** Append the click id value to the partner URL as-is. */
export function appendClickId(partnerUrl: string, gclid: string): string {
  if (!gclid) return partnerUrl;
  return `${partnerUrl}${gclid}`;
}

export function getCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(
    new RegExp(
      `(?:^|; )${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^;]*)`,
    ),
  );
  return match ? decodeURIComponent(match[1]) : "";
}

export function setCookie(name: string, value: string, days = 90): void {
  if (typeof document === "undefined") return;
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function getStoredGclid(): string {
  if (typeof document === "undefined") return "";
  return (
    document.body.getAttribute("data-gclid") || getCookie(GCLID_COOKIE) || ""
  );
}

export function persistGclid(value: string): void {
  if (!value || typeof document === "undefined") return;
  setCookie(GCLID_COOKIE, value);
  document.body.setAttribute("data-gclid", value);
  listeners.forEach((listener) => listener());
}

export function subscribeGclid(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
