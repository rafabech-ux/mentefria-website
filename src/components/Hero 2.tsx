import { hero } from "@/lib/content";
import { ArrowRight } from "@/components/icons";

/*
  Full-viewport black hero. The original plays a background video; here a tonal
  gradient stands in for it. Content is left-aligned and vertically centered:
  eyebrow → oversized two-line display headline → subcopy → white pill CTA.
*/

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-black text-white">
      {/* Placeholder video background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b1f2a] via-[#0b0d12] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_75%_30%,rgba(70,90,160,0.35),transparent_60%)]" />
        {/* bottom fade so text stays legible */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="container-edge relative z-10 w-full pt-28">
        <div className="max-w-xl">
          <p className="eyebrow mb-5 text-white/70">{hero.eyebrow}</p>
          <h1 className="display-xl">
            {hero.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="body-lg mt-6 max-w-md !text-white/75">{hero.subtitle}</p>
          <a
            href="#"
            className="btn-pill mt-9 bg-white text-black hover:opacity-90"
          >
            {hero.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
