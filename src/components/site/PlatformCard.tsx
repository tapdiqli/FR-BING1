"use client";

import { PlatformLogo } from "@/components/site/PlatformLogo";
import { Icon } from "@/components/ui/Icon";
import { StarRating } from "@/components/ui/StarRating";
import type { Platform } from "@/data/platforms";
import { useTrackedUrl } from "@/hooks/useTrackedUrl";

type PlatformCardProps = {
  platform: Platform;
  /** When false, the card is not an outbound affiliate link (bots / non-FR / no gclid). */
  outbound?: boolean;
};

export function PlatformCard({
  platform,
  outbound = false,
}: PlatformCardProps) {
  const trackedUrl = useTrackedUrl(platform.partnerUrl);
  const linkUrl = outbound ? trackedUrl : undefined;

  const body = (
    <>
      {/* Mobile — compact stack */}
      <div className="lg:hidden">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink-900 font-display text-xs font-bold text-white">
            {platform.rank}
          </span>
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <PlatformLogo
              initial={platform.initial}
              rank={platform.rank}
              compact
            />
            <h3 className="min-w-0 truncate font-display text-base font-extrabold leading-tight text-ink-900">
              {platform.name}
            </h3>
          </div>
          <div className="w-14 shrink-0 text-right">
            <p className="font-display text-xl font-extrabold leading-none text-ink-900">
              {platform.score.toFixed(1)}
            </p>
            <StarRating
              value={platform.stars}
              className="mt-1 origin-right scale-90 justify-end"
            />
          </div>
        </div>

        <span className="mt-2.5 inline-block rounded-full bg-gold-300/25 px-2.5 py-0.5 text-[10px] font-bold text-gold-600">
          {platform.badge}
        </span>
        <p className="mt-2 text-[13px] font-medium leading-snug text-ink-800">
          {platform.summary}
        </p>

        <span className="mt-3.5 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-plum-500 to-plum-700 px-4 py-2.5 text-sm font-bold text-white">
          {outbound ? `Accéder à ${platform.name}` : "En savoir plus"}
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
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <h3 className="font-display text-lg font-extrabold leading-tight text-ink-900">
              {platform.name}
            </h3>
            <span className="inline-block rounded-full bg-gold-300/25 px-2.5 py-0.5 text-[10px] font-bold text-gold-600">
              {platform.badge}
            </span>
          </div>
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
            {outbound ? `Accéder à ${platform.name}` : "En savoir plus"}
          </span>
        </div>
      </div>
    </>
  );

  const shellClass =
    "group block rounded-2xl border border-mist-200 bg-white p-3.5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-plum-200 hover:shadow-card-hover sm:p-5 lg:p-6";

  if (linkUrl) {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        aria-label={`Accéder à ${platform.name}`}
        className={shellClass}
      >
        {body}
      </a>
    );
  }

  return <article className={shellClass}>{body}</article>;
}
