"use client";

import { useState } from "react";

import { Icon } from "@/components/ui/Icon";
import type { FaqItem } from "@/data/content";

type FaqAccordionProps = {
  items: FaqItem[];
  defaultOpen?: number | null;
};

export function FaqAccordion({ items, defaultOpen = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;

        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-xl border bg-white transition-colors ${
              open ? "border-plum-200 shadow-card" : "border-mist-200"
            }`}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
                aria-controls={`faq-panel-${index}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-bold text-ink-900 sm:text-base">
                  {item.question}
                </span>
                <Icon
                  name="chevron"
                  className={`h-5 w-5 shrink-0 text-plum-600 transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              hidden={!open}
              className="px-5 pb-5 text-sm leading-relaxed text-ink-700/75"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
