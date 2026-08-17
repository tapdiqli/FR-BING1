import { headers } from "next/headers";

import { GCLID_COOKIE, GCLID_PARAM_KEYS, pickClickId } from "@/lib/gclid";

export type VisitorContext = {
  ip: string;
  gclid: string;
  referer: string;
  userAgent: string;
  isFR: boolean;
  isRobot: boolean;
  hasGclid: boolean;
  isOnline: boolean;
};

type SearchParamsLike =
  | URLSearchParams
  | Record<string, string | string[] | undefined>;

function readParam(params: SearchParamsLike, key: string): string {
  if (params instanceof URLSearchParams) {
    return params.get(key)?.trim() ?? "";
  }
  const raw = params[key];
  if (Array.isArray(raw)) return raw[0]?.trim() ?? "";
  return raw?.trim() ?? "";
}

function clickIdFromSearchParams(params: SearchParamsLike): string {
  if (params instanceof URLSearchParams) {
    return pickClickId(params);
  }
  for (const key of GCLID_PARAM_KEYS) {
    const value = readParam(params, key);
    if (value) return value;
  }
  return "";
}

function clickIdFromCookieHeader(cookieHeader: string): string {
  const match = cookieHeader.match(
    new RegExp(
      `(?:^|;\\s*)${GCLID_COOKIE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^;]*)`,
    ),
  );
  return match ? decodeURIComponent(match[1]).trim() : "";
}

function clientIp(headerStore: Headers): string {
  const forwarded = headerStore.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "";
  }
  return (
    headerStore.get("x-real-ip")?.trim() ||
    headerStore.get("cf-connecting-ip")?.trim() ||
    ""
  );
}

export async function resolveVisitor(
  searchParams?: SearchParamsLike,
): Promise<VisitorContext> {
  const headerStore = await headers();
  const ip = clientIp(headerStore);
  const referer = headerStore.get("referer") || "";
  const userAgent = headerStore.get("user-agent") || "";
  const cookieHeader = headerStore.get("cookie") || "";

  const fromQuery = searchParams ? clickIdFromSearchParams(searchParams) : "";
  const fromCookie = clickIdFromCookieHeader(cookieHeader);
  const gclid = fromQuery || fromCookie;
  const hasGclid = Boolean(gclid);

  let isFR = false;
  let isRobot = false;

  if (ip) {
    try {
      const response = await fetch(
        `https://api.ipregistry.co/${ip}?key=ira_YLGO8mz0t50zRG5ZObx4XRUOeOCq2f3mUZjc`,
        { cache: "no-store" },
      );
      if (!response.ok) {
        throw new Error(`IP registry error: ${response.status}`);
      }
      const data = await response.json();
      isFR = data?.location?.country?.code === "FR";
      const companyDomain = (data?.company?.domain || "").toLowerCase();
      const connectionDomain = (data?.connection?.domain || "").toLowerCase();
      const companyName = (data?.company?.name || "").toLowerCase();

      isRobot =
        companyDomain.includes("googl") ||
        connectionDomain.includes("googl") ||
        companyName.includes("googl") ||
        companyDomain.includes("amazon") ||
        companyDomain.includes("microsoft") ||
        companyDomain.includes("bing") ||
        connectionDomain.includes("tencent") ||
        companyDomain.includes("tencent") ||
        data?.security?.is_attacker === true ||
        data?.security?.is_abuser === true ||
        data?.security?.is_threat === true;
    } catch (error) {
      console.error("Error fetching IP location:", error);
      isFR = true;
    }
  }

  console.log("User IP: ", ip);
  console.log("msclkid:", gclid);
  console.log("referer:", referer);
  console.log("userAgent:", userAgent);

  const isOnline = hasGclid && !isRobot && isFR;

  return {
    ip,
    gclid,
    referer,
    userAgent,
    isFR,
    isRobot,
    hasGclid,
    isOnline,
  };
}
