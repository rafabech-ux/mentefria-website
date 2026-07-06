import { featuredReviews } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { QuoteMark, StarIcon } from "@/components/icons";

/*
  Credibility section: a row of trust badges (truthful MF guarantees) above two
  large featured testimonial pull-quotes. Badges sit on a steel-ruled band.
*/

export function FeaturedReviews() {
  return (
    <section className="section-y bg-background text-foreground">
      <div className="container-edge">
        <Reveal className="text-center">
          <h2 className="heading-sm mb-10">{featuredReviews.title}</h2>
        </Reveal>

        {/* Trust badges on a steel-ruled band */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-y border-line py-8">
          {featuredReviews.badges.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold uppercase tracking-[0.08em] text-ink-soft"
            >
              {name}
            </span>
          ))}
        </div>

        {/* Featured testimonial cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredReviews.cards.map((card, i) => (
            <Reveal
              key={i}
              delay={i * 90}
              className="rounded-3xl border border-line bg-warm p-8 sm:p-10"
            >
              <QuoteMark className="h-7 w-10 text-ink-faint" />
              <div className="mt-5 flex gap-1 text-foreground">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 text-xl leading-snug">{card.quote}</p>
              <p className="mt-6 text-sm text-ink-soft">{card.source}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
