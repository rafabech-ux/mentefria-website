import { statement } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

/*
  Quiet editorial band: a single large statement headline on warm off-white,
  left-aligned within the edge container. Acts as a palate-cleanser between
  the feature section and the lifestyle gallery.
*/

export function StatementBand() {
  return (
    <section className="section-y bg-warm text-foreground">
      <div className="container-edge">
        <Reveal>
          <h2 className="display-lg max-w-4xl text-foreground/30">
            {statement.text}
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
