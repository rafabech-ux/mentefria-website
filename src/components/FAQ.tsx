"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PlusIcon, MinusIcon } from "@/components/icons";

/*
  Accordion FAQ. Single-open behavior with a steel hairline between rows and a
  smooth height/opacity reveal. Used on product and support pages.
*/

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium sm:text-lg">{item.q}</span>
              <span className="shrink-0 text-ink-soft">
                {isOpen ? <MinusIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
