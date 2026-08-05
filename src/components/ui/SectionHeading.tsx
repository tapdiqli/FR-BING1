type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <p
        className={`text-xs font-bold uppercase tracking-[0.22em] ${
          isDark ? "text-gold-400" : "text-plum-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-extrabold tracking-tight text-balance-title sm:text-4xl ${
          isDark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            isDark ? "text-plum-100/75" : "text-ink-700/75"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
