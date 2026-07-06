import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SubHero, SectionHeader, CTASection } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Placeholder } from "@/components/Placeholder";

/* ---- Data ---------------------------------------------------------------- */

const featured = {
  category: "Noticias",
  title: "¿Qué beneficios ofrece el uso regular de un cold plunge?",
  excerpt:
    "El cold plunge ofrece beneficios reales y documentados para la salud —menos estrés, mejor sueño, sistema inmunológico más fuerte, mayor claridad mental— y en este artículo los analizamos uno por uno.",
  date: "27 de mayo de 2026",
  author: "Anderson Muro Zabala",
  tone: "cool" as const,
};

const articles = [
  {
    category: "Noticias",
    title: "Los mejores consejos para iniciar en el ciclismo con éxito",
    excerpt:
      "Muchas personas que empiezan a pedalear cometen el mismo error: salir fuerte los primeros días, terminar con dolor en rodillas y cuádriceps, y abandonar antes de ver resultados.",
    date: "19 de mayo de 2026",
    author: "Anderson Muro Zabala",
    tone: "warm" as const,
  },
  {
    category: "Noticias",
    title: "¿Qué son las cold plunge y qué modelos existen en México?",
    excerpt:
      "Cada vez más personas descubren la terapia de inmersión fría, pero al momento de comprar se topan con un problema real: el mercado está lleno de términos distintos que parecen referirse a lo mismo.",
    date: "6 de mayo de 2026",
    author: "Anderson Muro Zabala",
    tone: "blue" as const,
  },
];

/* ---- Page ---------------------------------------------------------------- */

export default function BlogPage() {
  return (
    <PageShell>
      {/* 1. SubHero */}
      <SubHero
        eyebrow="Blog"
        title="Noticias"
        subtitle="Frío, cuerpo y mente. Todo lo que necesitas saber sobre terapia de inmersión fría, recuperación y rendimiento."
        tone="warm"
      />

      {/* 2. Featured post */}
      <section className="section-y bg-background">
        <div className="container-edge">
          <Reveal className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left: image placeholder */}
            <Placeholder
              tone={featured.tone}
              label={featured.category}
              className="aspect-[16/10] w-full rounded-3xl"
            />

            {/* Right: content */}
            <div className="flex flex-col">
              <p className="eyebrow">{featured.category}</p>
              <h2 className="display-md mt-3">{featured.title}</h2>
              <p className="body-lg mt-5 text-ink-soft">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-3 text-xs text-ink-faint">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.author}</span>
              </div>
              <div className="mt-6">
                <Link
                  href="https://mentefria.com/blog"
                  className="btn-pill btn-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Article grid — últimos 2 artículos */}
      <section className="section-y bg-background">
        <div className="container-edge">
          <SectionHeader
            title="Más artículos"
            eyebrow="Noticias"
            className="mb-12"
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {articles.map((article) => (
              <Reveal key={article.title}>
                <div className="flex flex-col rounded-3xl border border-line bg-background p-8 transition-shadow hover:shadow-md">
                  <p className="eyebrow mb-3">{article.category}</p>
                  <h3 className="display-sm mb-4 leading-snug">{article.title}</h3>
                  <p className="body-md flex-1 text-ink-soft">{article.excerpt}</p>
                  <div className="mt-5 flex items-center gap-3 text-xs text-ink-faint">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.author}</span>
                  </div>
                  <div className="mt-5">
                    <Link
                      href="https://mentefria.com/blog"
                      className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Leer más →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="text-xs uppercase tracking-[0.1em] text-ink-faint">
              Más artículos pronto.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5. Newsletter CTA */}
      <section className="section-y bg-warm">
        <div className="container-edge">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Newsletter</p>
            <h2 className="display-md">Suscríbete al frío.</h2>
            <p className="body-lg mt-4 text-ink-soft">
              Recibe protocolos y ciencia del frío en tu correo. Sin spam, sin ruido.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="tu@correo.com"
                className="w-full rounded-full border border-line bg-background px-5 py-3 text-sm text-foreground placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-foreground sm:w-72"
                readOnly
              />
              <button
                type="button"
                className="btn-pill btn-ink w-full sm:w-auto"
              >
                Suscribirme
              </button>
            </div>
            <p className="mt-4 text-xs text-ink-faint">
              Sin spam. Puedes salirte cuando quieras.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. CTA Section */}
      <CTASection
        title="Siente la diferencia desde el primer día."
        body="Tecnología de temperatura diseñada para atletas, optimizadores y quienes se toman en serio su descanso."
        cta={{ label: "Ver productos", href: "/productos" }}
        dark
      />
    </PageShell>
  );
}
