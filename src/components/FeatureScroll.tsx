"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { featureScroll } from "@/lib/content";

/*
  Scroll-driven feature section (INTERACTION MODEL: scroll-driven, not clicks).
  A media panel stays pinned (position: sticky) while three stacked text blocks
  scroll past. As each block enters the viewport center, it becomes active —
  swapping the oversized background word and the values shown on the media card.
  Active state is driven by IntersectionObserver, matching the original.
*/

export function FeatureScroll() {
  const [active, setActive] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" },
    );
    blockRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = featureScroll.features[active];

  return (
    <section className="relative bg-background text-foreground">
      <div className="container-edge">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: stacked, scroll-triggered text blocks */}
          <div className="relative">
            {featureScroll.features.map((f, i) => (
              <div
                key={f.word}
                data-index={i}
                ref={(el) => {
                  blockRefs.current[i] = el;
                }}
                className="flex min-h-[80vh] flex-col justify-center py-10"
              >
                <h2
                  className={cn(
                    "display-lg transition-colors duration-500",
                    i === active ? "text-foreground" : "text-foreground/15",
                  )}
                >
                  {f.word}
                </h2>
                <p className="body-lg mt-6 max-w-md">{f.body}</p>
              </div>
            ))}
          </div>

          {/* Right: sticky media panel that reacts to the active feature */}
          <div className="hidden lg:block">
            <div className="sticky top-24 flex h-[80vh] items-center">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#10131c] to-black">
                {/* dotted thermal-grid texture */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(90,120,255,0.45) 1px, transparent 1.5px)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_70%,rgba(255,120,60,0.25),transparent_60%)]" />

                {/* dual-zone control cards */}
                <div className="absolute inset-x-0 bottom-10 flex items-end justify-center gap-5 px-6">
                  {[current.left, current.right].map((zone) => (
                    <div
                      key={zone.label}
                      className="flex-1 rounded-2xl border border-white/15 bg-black/40 p-4 backdrop-blur-md"
                    >
                      <p className="text-center text-[10px] uppercase tracking-[0.14em] text-white/60">
                        {zone.label}
                      </p>
                      <div className="mt-2 flex items-center justify-between text-white">
                        <span className="text-lg opacity-50">−</span>
                        <span className="text-3xl font-light tabular-nums transition-all duration-500">
                          {zone.value}
                        </span>
                        <span className="text-lg opacity-50">+</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
