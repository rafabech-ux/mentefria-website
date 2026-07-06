import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { Placeholder } from "@/components/Placeholder";
import { ArrowRight } from "@/components/icons";

/*
  Reusable, brand-consistent content blocks shared across all inner pages.
  Same design system as the landing: Aileron type scale, silver/steel neutrals,
  sparing #001bff accent, generous rhythm, scroll-reveal motion.
*/

/* ---- Inner-page hero (light) ------------------------------------------- */
export function SubHero({
  eyebrow,
  title,
  subtitle,
  cta,
  tone = "warm",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  tone?: "warm" | "white" | "mist";
}) {
  const bg = tone === "white" ? "bg-background" : tone === "mist" ? "bg-mist" : "bg-warm";
  return (
    <section className={cn("section-y", bg)}>
      <div className="container-edge">
        <Reveal className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="display-lg">{title}</h1>
          {subtitle && <p className="body-lg mt-5 max-w-2xl">{subtitle}</p>}
          {cta && (
            <Link href={cta.href} className="btn-pill btn-ink mt-8">
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Section header ---------------------------------------------------- */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn(center && "container-prose text-center", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="display-md">{title}</h2>
      {subtitle && <p className="body-lg mt-4">{subtitle}</p>}
    </Reveal>
  );
}

/* ---- Feature / use-case card grid -------------------------------------- */
export type FeatureCard = {
  title: string;
  body: string;
  tag?: string;
  tone?: "warm" | "cool" | "ink" | "blue";
  image?: string;
};

export function FeatureCards({
  cards,
  columns = 3,
}: {
  cards: FeatureCard[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={cn("grid gap-5", cols)}>
      {cards.map((c, i) => (
        <Reveal
          key={c.title}
          delay={(i % columns) * 80}
          className="flex flex-col overflow-hidden rounded-3xl border border-line bg-background"
        >
          <div className="relative aspect-[4/3] w-full">
            {c.image ? (
              <Image src={c.image} alt={c.title} fill sizes="400px" className="object-cover" />
            ) : (
              <Placeholder tone={c.tone ?? "cool"} label={c.tag ?? c.title} rounded="rounded-none" className="absolute inset-0" />
            )}
          </div>
          <div className="flex flex-1 flex-col p-6">
            {c.tag && <p className="eyebrow mb-2">{c.tag}</p>}
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---- Spec table -------------------------------------------------------- */
export function SpecTable({
  title,
  rows,
}: {
  title?: string;
  rows: { label: string; value: string }[];
}) {
  return (
    <Reveal className="rounded-3xl border border-line bg-warm p-8 sm:p-10">
      {title && <h3 className="display-md mb-6 !text-2xl">{title}</h3>}
      <dl className="divide-y divide-line">
        {rows.map((r) => (
          <div key={r.label} className="flex items-baseline justify-between gap-6 py-3.5">
            <dt className="text-sm text-ink-soft">{r.label}</dt>
            <dd className="text-right text-sm font-medium">{r.value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}

/* ---- Stat row ---------------------------------------------------------- */
export function StatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid gap-10 border-t border-line pt-12 sm:grid-cols-3">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 90} className="text-center">
          <div className="display-lg !text-foreground">{s.value}</div>
          <p className="mt-2 text-sm text-ink-soft">{s.label}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* ---- Blog / article card grid ------------------------------------------ */
export type Article = {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  tone?: "warm" | "cool" | "ink" | "blue";
};

export function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((a, i) => (
        <Reveal key={a.title} delay={(i % 3) * 80} className="group flex flex-col">
          <Placeholder
            tone={a.tone ?? "cool"}
            label={a.category}
            className="aspect-[16/10] w-full"
          />
          <p className="eyebrow mt-4">{a.category}</p>
          <h3 className="mt-2 text-lg font-semibold leading-snug transition-colors group-hover:text-[color:var(--accent-blue)]">
            {a.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{a.excerpt}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.1em] text-ink-faint">{a.readTime}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* ---- CTA band ---------------------------------------------------------- */
export function CTASection({
  title,
  body,
  cta,
  dark = true,
}: {
  title: string;
  body?: string;
  cta: { label: string; href: string };
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-black text-white" : "bg-warm text-foreground"}>
      <div className="container-edge section-y text-center">
        <Reveal className="container-prose">
          <h2 className="display-md">{title}</h2>
          {body && (
            <p className={cn("body-lg mt-5", dark && "!text-white/70")}>{body}</p>
          )}
          <Link
            href={cta.href}
            className={cn(
              "btn-pill mt-8",
              dark ? "bg-white text-black hover:opacity-90" : "btn-ink",
            )}
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
