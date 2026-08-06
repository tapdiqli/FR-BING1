import type { ReactNode } from "react";

export type LegalSection = {
  heading: string;
  paragraphs?: ReactNode[];
  bullets?: ReactNode[];
};

type LegalContentProps = {
  updatedAt: string;
  sections: LegalSection[];
};

export function LegalContent({ updatedAt, sections }: LegalContentProps) {
  return (
    <section className="bg-mist-50 py-14 sm:py-16">
      <div className="container-page mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-700/50">
          Dernière mise à jour : {updatedAt}
        </p>

        <nav
          aria-label="Sommaire de la page"
          className="mt-6 rounded-2xl border border-mist-200 bg-white p-6 shadow-card"
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-plum-600">
            Sommaire
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {sections.map((section, index) => (
              <li key={section.heading}>
                <a
                  href={`#section-${index + 1}`}
                  className="text-ink-700/80 transition-colors hover:text-plum-600"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 space-y-8 rounded-2xl border border-mist-200 bg-white p-6 sm:p-9">
          {sections.map((section, index) => (
            <section
              key={section.heading}
              id={`section-${index + 1}`}
              className="scroll-mt-28"
            >
              <h2 className="font-display text-lg font-bold text-ink-900">
                {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="mt-3 text-sm leading-relaxed text-ink-700/80"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex gap-2.5 text-sm leading-relaxed text-ink-700/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-plum-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
