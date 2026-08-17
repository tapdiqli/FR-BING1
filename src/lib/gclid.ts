export const GCLID_COOKIE = "adp_gclid";
/** Bing Ads only — this site uses msclkid. */
export const GCLID_PARAM_KEYS = ["msclkid"] as const;

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

/** Append the click id to the partner URL as a `gclid` query parameter. */
export function appendClickId(partnerUrl: string, gclid: string): string {
  if (!gclid) return partnerUrl;

  try {
    const url = new URL(partnerUrl);
    url.searchParams.set("gclid", gclid);
    return url.toString();
  } catch {
    const separator = partnerUrl.includes("?") ? "&" : "?";
    return `${partnerUrl}${separator}gclid=${encodeURIComponent(gclid)}`;
  }
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
  const fromUrl = pickClickId(new URLSearchParams(window.location.search));
  if (fromUrl) return fromUrl;
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

/** Drops a previously stored click id, used when measurement consent is refused. */
export function clearGclid(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${GCLID_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
  document.body.removeAttribute("data-gclid");
  listeners.forEach((listener) => listener());
}

export function subscribeGclid(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
