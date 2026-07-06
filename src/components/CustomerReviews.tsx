import { customerReviews } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { StarIcon } from "@/components/icons";

/*
  Customer review grid: a heading + aggregate rating line, then a responsive
  masonry-ish grid of review cards. Each card has a 5-star row, a short title,
  body text, and a verified-member byline.
*/

export function CustomerReviews() {
  return (
    <section className="section-y bg-background text-foreground">
      <div className="container-edge">
        <Reveal className="text-center">
          <h2 className="display-md">{customerReviews.title}</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="flex gap-0.5 text-foreground">
              {Array.from({ length: 5 }).map((_, s) => (
                <StarIcon key={s} className="h-4 w-4" />
              ))}
            </span>
            <span className="text-sm text-ink-soft">{customerReviews.subtitle}</span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {customerReviews.reviews.map((review, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 80}
              className="flex flex-col rounded-2xl border border-line bg-warm p-6"
            >
              <span className="flex gap-0.5 text-foreground">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <StarIcon key={s} className="h-3.5 w-3.5" />
                ))}
              </span>
              <h3 className="mt-3 text-base font-medium">{review.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {review.body}
              </p>
              <p className="mt-5 text-xs text-ink-faint">
                {review.name}
                {review.verified && (
                  <span className="ml-2 text-ink-soft">· Cliente verificado</span>
                )}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="btn-pill border border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            Ver más reseñas
          </a>
        </div>
      </div>
    </section>
  );
}
