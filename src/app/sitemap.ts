import type { MetadataRoute } from "next";

import { legalNav, mainNav, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [...mainNav, ...legalNav].map((item) => ({
    url: `${site.url}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : item.href === "/comparatif" ? 0.9 : 0.6,
  }));
}
