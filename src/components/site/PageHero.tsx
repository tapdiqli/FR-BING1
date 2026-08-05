type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(48rem_22rem_at_50%_-20%,rgba(139,92,240,0.32),transparent)]"
      />
      <div className="container-page relative py-14 text-center sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
          {eyebrow}
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-white text-balance-title sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-plum-100/75">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
