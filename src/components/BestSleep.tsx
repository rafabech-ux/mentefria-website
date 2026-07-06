import { bestSleep } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

/*
  Centered benefit statement with a three-up stat row beneath. Large display
  headline, supporting prose, and oversized numeric stats with captions.
*/

export function BestSleep() {
  return (
    <section className="section-y bg-background text-foreground">
      <div className="container-edge">
        <Reveal className="container-prose text-center">
          <p className="eyebrow mb-4 text-accent-blue">{bestSleep.eyebrow}</p>
          <h2 className="display-md">{bestSleep.title}</h2>
          <p className="body-lg mt-5">{bestSleep.body}</p>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-3">
          {bestSleep.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="text-center">
              <div className="display-lg !text-foreground">{stat.value}</div>
              <p className="mt-2 text-sm text-ink-soft">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
