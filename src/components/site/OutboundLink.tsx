"use client";

import type { ReactNode } from "react";

import { useTrackedUrl } from "@/hooks/useTrackedUrl";

type OutboundLinkProps = {
  partnerUrl: string;
  label: string;
  className?: string;
  children: ReactNode;
};

/** Real outbound partner link with persisted gclid appended. */
export function OutboundLink({
  partnerUrl,
  label,
  className,
  children,
}: OutboundLinkProps) {
  const href = useTrackedUrl(partnerUrl);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={label}
      className={className}
    >
      {children}
    </a>
  );
}
