"use client";

import { PlatformLogo } from "@/components/site/PlatformLogo";
import { Icon } from "@/components/ui/Icon";
import { StarRating } from "@/components/ui/StarRating";
import type { Platform } from "@/data/platforms";
import { useTrackedUrl } from "@/hooks/useTrackedUrl";

type PlatformCardProps = {
  platform: Platform;
};

export function PlatformCard({ platform }: PlatformCardProps) {
  const linkUrl = useTrackedUrl(platform.partnerUrl);

  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`Accéder à ${platform.name}`}
      className="group block rounded-2xl border border-mist-200 bg-white p-3.5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-plum-200 hover:shadow-card-hover sm:p-5 lg:p-6"
    >
      {/* Mobile — compact stack */}
      <div className="lg:hidden">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink-900 font-display text-xs font-bold text-white">
            {platform.rank}
          </span>
          <div className="flex min-w-0 flex-1 justify-center">
            <PlatformLogo
              initial={platform.initial}
              rank={platform.rank}
              compact
            />
          </div>
          <div className="w-14 shrink-0 text-right">
            <p className="font-display text-xl font-extrabold leading-none text-ink-900">
              {platform.score.toFixed(1)}
            </p>
            <StarRating value={platform.stars} className="mt-1 justify-end scale-90 origin-right" />
          </div>
        </div>

        <h3 className="sr-only">{platform.name}</h3>
        <p className="mt-3 text-[13px] font-medium leading-snug text-ink-800">
          {platform.summary}
        </p>

        <span className="mt-3.5 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-plum-500 to-plum-700 px-4 py-2.5 text-sm font-bold text-white">
          Accéder à la page
        </span>
      </div>

      {/* Desktop — horizontal layout */}
      <div className="hidden items-center gap-5 lg:grid lg:grid-cols-12">
        <div className="flex items-center gap-3 lg:col-span-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink-900 font-display text-sm font-bold text-white">
            {platform.rank}
          </span>
          <PlatformLogo
            initial={platform.initial}
            rank={platform.rank}
            className="min-w-0 flex-1"
          />
        </div>

        <div className="lg:col-span-6">
          <span className="inline-block rounded-full bg-gold-300/25 px-2.5 py-0.5 text-[10px] font-bold text-gold-600">
            {platform.badge}
          </span>
          <p className="mt-1.5 text-sm font-semibold leading-relaxed text-ink-900">
            {platform.summary}
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            {platform.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-1.5 text-xs text-ink-700/70"
              >
                <Icon name="check" className="h-4 w-4 text-plum-500" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-end gap-4 lg:col-span-4">
          <div className="text-right">
            <p className="font-display text-2xl font-extrabold text-ink-900">
              {platform.score.toFixed(1)}
            </p>
            <StarRating value={platform.stars} className="mt-1 justify-end" />
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-plum-500 to-plum-700 px-5 py-2.5 text-sm font-bold text-white shadow-glow transition-transform duration-200 group-hover:-translate-y-0.5">
            Accéder à la page
          </span>
        </div>
      </div>
    </a>
  );
}
