import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import {
  SubHero,
  SectionHeader,
  FeatureCards,
  StatRow,
  CTASection,
} from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";

/* ─── Product card data ─────────────────────────────────────────────────── */
const tinas = [
  {
    name: "MF ONE",
    tag: "All-In-One · Chiller 1 HP integrado · 420 L",
    tagline: "Diseño All-In-One con chiller integrado. Filtro de 20 micrones + ozono. LED interno/externo, chorros de hidromasaje. 1 año de garantía.",
    specs: "200 × 80 × 75 cm · 135 kg · Acrílico + acero inoxidable",
    price: "$169,000 MXN",
    image: "/images/prod-mfone.png",
    href: "/productos/mf-one",
    badge: "Más vendido",
  },
  {
    name: "MF Horizon",
    tag: "Rectangular · 420 L · Mayor espacio de inmersión",
    tagline: "Sistema de 3 filtros + purificación por ozono. Control WiFi programable. Certificación CE. 6 meses de garantía.",
    specs: "160 × 65 × 70 cm · 15 kg",
    price: "$74,000 MXN",
    image: "/images/prod-horizon.png",
    href: "/productos/mf-horizon",
    badge: null,
  },
  {
    name: "MF Barrel",
    tag: "Cilíndrica · 400 L · Ideal para departamentos",
    tagline: "Sistema de 3 filtros + purificación por ozono. Control WiFi programable. Certificación CE. 6 meses de garantía.",
    specs: "90 cm diámetro × 90 cm altura · 13 kg",
    price: "$69,000 MXN",
    image: "/images/prod-barrel.png",
    href: "/productos/mf-barrel",
    badge: null,
  },
];

/* ─── Motor cards ────────────────────────────────────────────────────────── */
const motorCards = [
  {
    title: "Motor Pro 2.0",
    body: "0.8 HP (2,230 W) · Enfría de 25 °C a 3 °C en ~6 h · Filtración de 3 etapas · Control WiFi. Sin calefacción ni ozono. Ideal para quienes priorizan el frío intenso.",
    tag: "Entrada",
    tone: "cool" as const,
  },
  {
    title: "Motor Premium 2.0",
    body: "1 HP (2,700 W) · Rango completo 42 °C a 3 °C — enfría y calienta · Ozono 24/7 · Control WiFi · Enfría en ~4 h. Versatilidad total para recuperación avanzada.",
    tag: "Más popular",
    tone: "warm" as const,
  },
];

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function ProductosPage() {
  return (
    <PageShell>
      {/* 1+2 · Discover-your-perfect-Plunge — título + productos de inmediato */}
      <section className="msection panel !pt-[clamp(48px,7vh,90px)]">
        <div className="mwrap">
          <Reveal className="msection-head !mb-14">
            <span className="m-eyebrow accent">Productos</span>
            <h2>Encuentra la cold plunge perfecta para ti.</h2>
            <p>Recuperarte y rendir al máximo desde casa, sin hielo y sin complicaciones.</p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tinas.map((tina, i) => (
              <Reveal
                key={tina.name}
                delay={i * 90}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(8,9,11,0.06)] transition-shadow duration-500 hover:shadow-[0_24px_48px_-20px_rgba(8,9,11,0.25)]"
              >
                {/* Image stage — contain, nunca recortada */}
                <div className="relative grid aspect-[4/3] w-full place-items-center overflow-hidden bg-white p-8">
                  <Image
                    src={tina.image}
                    alt={tina.name}
                    width={640}
                    height={480}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ width: tina.name === "MF ONE" ? "100%" : tina.name === "MF Horizon" ? "82%" : "55%" }}
                    className="h-auto max-h-full object-contain transition-transform duration-500 group-hover:scale-[1.05]"
                    priority={i === 0}
                  />
                  {tina.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-foreground px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-background">
                      {tina.badge}
                    </span>
                  )}
                </div>

                {/* Card body — estilo Plunge */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="text-[13px] tracking-[3px] text-[var(--accent-ice)]">★★★★★</div>
                  <h3
                    className="mdisplay mt-2 text-[26px]"
                    style={{ WebkitTextStroke: "var(--bold-stroke) currentColor" }}
                  >
                    {tina.name}
                  </h3>
                  <p className="mt-1 text-sm">
                    <span className="font-semibold">{tina.price}</span>
                    <span className="text-ink-faint"> · hasta 6 MSI con Mercado Pago</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{tina.tagline}</p>
                  <p className="mt-2 flex-1 text-xs text-ink-faint">{tina.specs}</p>
                  <div className="mt-6">
                    <Link href={tina.href} className="mbtn mbtn-primary w-full justify-center">
                      Comprar ahora
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Motores */}
      <section className="section-y bg-warm">
        <div className="container-edge">
          <Reveal className="mb-12">
            <SectionHeader
              eyebrow="Motores"
              title="El corazón del sistema."
              subtitle="Motores 3× más poderosos que cualquier otro en México. Enfrían y calientan sin hielo — el MF ONE ya incluye el chiller integrado."
            />
          </Reveal>

          <FeatureCards cards={motorCards} columns={2} />

          <Reveal delay={160}>
            <p className="mt-6 text-center text-xs text-ink-faint">
              * El MF ONE incluye chiller 1 HP integrado. No requiere motor adicional.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4 · Por qué Mente Fria — StatRow */}
      <section className="section-y bg-background">
        <div className="container-edge">
          <Reveal className="mb-12 text-center container-prose mx-auto">
            <SectionHeader
              eyebrow="Por qué Mente Fria"
              title="Tecnología que se paga sola."
              subtitle="0 hielos, ahorro a largo plazo. Motores 3× más poderosos que cualquier otro en México. Control total desde tu celular desde el primer día."
              center
            />
          </Reveal>

          <StatRow
            stats={[
              {
                value: "3×",
                label: "más potentes que cualquier otro motor en México",
              },
              {
                value: "0 hielos",
                label: "ahorro real a largo plazo",
              },
              {
                value: "30 días",
                label: "de prueba sin preguntas",
              },
            ]}
          />
        </div>
      </section>

      {/* 5 · CTA dark */}
      <CTASection
        title="El frío te está esperando."
        body="Servicio 24/7, garantía real y purificación de ozono cada 5 min. Sin hielo, sin complicaciones — solo tecnología que funciona."
        cta={{ label: "Ver todos los productos", href: "#" }}
        dark
      />
    </PageShell>
  );
}
