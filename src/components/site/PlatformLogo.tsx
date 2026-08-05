type PlatformLogoProps = {
  initial: string;
  rank: number;
  className?: string;
  compact?: boolean;
};

const themes = [
  {
    wrapper: "bg-plum-50 ring-2 ring-ink-900",
    inner: "border border-dashed border-rose-accent/70",
    letter: "text-ink-900",
  },
  {
    wrapper: "bg-gold-300/25 ring-1 ring-gold-400/50",
    inner: "border border-gold-500/40 rounded-full",
    letter: "text-gold-600",
  },
  {
    wrapper: "bg-ink-900 ring-1 ring-ink-700",
    inner: "border border-plum-400/40",
    letter: "text-plum-200",
  },
  {
    wrapper: "bg-mist-100 ring-1 ring-plum-200",
    inner: "border border-plum-300/60 rounded-2xl",
    letter: "text-plum-700",
  },
  {
    wrapper: "bg-rose-accent/10 ring-1 ring-rose-accent/40",
    inner: "border border-rose-accent/40",
    letter: "text-rose-accent",
  },
];

export function PlatformLogo({
  initial,
  rank,
  className = "",
  compact = false,
}: PlatformLogoProps) {
  const theme = themes[(rank - 1) % themes.length];

  return (
    <div
      aria-hidden="true"
      className={`grid place-items-center rounded-xl ${theme.wrapper} ${
        compact
          ? "h-12 w-[7.5rem] shrink-0"
          : "aspect-[16/9] w-full"
      } ${className}`}
    >
      <div
        className={`grid place-items-center ${theme.inner} ${
          compact ? "px-3 py-1.5" : "px-6 py-3"
        }`}
      >
        <span
          className={`font-display font-black tracking-tight ${theme.letter} ${
            compact ? "text-2xl" : "text-3xl"
          }`}
        >
          {initial}
        </span>
      </div>
    </div>
  );
}
