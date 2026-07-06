import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import {
  SectionHeader,
  SpecTable,
  StatRow,
  CTASection,
  FeatureCards,
} from "@/components/blocks";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";

/* ─────────────────────────────────────────────────────────────
   MF BARREL — Página de Detalle de Producto (PDP)
   Estructura: Hero → Stats → Features → Testimonio → Specs → Incluye → FAQ → CTA
───────────────────────────────────────────────────────────── */

const FAQ_ITEMS = [
  {
    q: "¿Para qué espacio es ideal?",
    a: "Es el modelo más compacto de Mente Fria: 90 cm de diámetro, ideal para departamentos y espacios reducidos. Inflable y guardable en la mochila incluida.",
  },
  {
    q: "¿Necesito hielo?",
    a: "No. El MF Barrel incluye motor integrado que enfría el agua hasta 3 °C sin necesidad de hielo. Solo llénalo, conecta y programa desde la app.",
  },
  {
    q: "¿Qué tan difícil es el montaje?",
    a: "Sin herramientas. El proceso completo toma entre 15 y 20 minutos: inflado con la bomba de doble acción incluida, llenado con manguera y conexión eléctrica estándar 110 V.",
  },
  {
    q: "¿Cuál es la diferencia entre Motor Pro y Motor Premium?",
    a: "El Motor Pro (0.8 HP) solo enfría. El Motor Premium (1 HP) enfría hasta 3 °C, calienta hasta 42 °C y purifica con ozono — todo desde la app. El Barrel es compatible con ambos.",
  },
];

const SPEC_ROWS = [
  { label: "Dimensiones", value: "90 cm de diámetro × 90 cm de altura" },
  { label: "Peso", value: "13 kg" },
  { label: "Capacidad", value: "400 L" },
  { label: "Material", value: "Tejido drop-stitch grado militar" },
  { label: "Enfriamiento", value: "Hasta 3 °C" },
  { label: "Calentamiento", value: "Hasta 42 °C (con Motor Premium)" },
  { label: "Filtración", value: "Triple filtración (3 capas) + ozono (Premium)" },
  { label: "Control", value: "WiFi + app" },
  { label: "Certificación", value: "CE" },
  { label: "Voltaje", value: "110 V" },
  { label: "Garantía", value: "6 meses" },
  { label: "Portabilidad", value: "Inflable, cabe en mochila incluida" },
];

const FEATURE_CARDS = [
  {
    tag: "Temperatura",
    title: "Enfría hasta 3 °C",
    body: "Motor integrado que lleva el agua a 3 °C sin hielo — listo a la hora que programes desde la app.",
    tone: "cool" as const,
  },
  {
    tag: "Conectividad",
    title: "Contrólalo desde tu celular",
    body: "Programa tu cold plunge con tu rutina diaria para que siempre esté lista. Control WiFi + app móvil — temperatura exacta, a tu hora.",
    tone: "ink" as const,
  },
  {
    tag: "Pureza",
    title: "Sistema de triple filtración",
    body: "Retiene impurezas grandes, elimina químicos y sedimentos finos, dejando el agua cristalina y limpia. Ozono incluido con Motor Premium.",
    tone: "warm" as const,
  },
  {
    tag: "Potencia",
    title: "Motor 3× más potente",
    body: "Enfría y filtra el agua 3 veces más rápido que un motor convencional — sin tiempos de espera, sin compromisos.",
    tone: "ink" as const,
  },
  {
    tag: "Portabilidad",
    title: "Compacto y portátil",
    body: "Con 90 cm de diámetro se adapta a espacios reducidos y es fácil de guardar. Todo cabe en la mochila de transporte incluida.",
    tone: "warm" as const,
  },
];

export default function MFBarrelPage() {
  return (
    <PageShell>

      {/* ── 1. PRODUCT HERO ─────────────────────────────────────── */}
      <section className="section-y bg-warm">
        <div className="container-edge">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT — product stage */}
            <Reveal>
              <div className="relative rounded-3xl bg-gradient-to-b from-white to-[#e7eaee] p-8 flex items-center justify-center aspect-[4/3] lg:aspect-square overflow-hidden">
                <Image
                  src="/images/prod-barrel.png"
                  alt="MF Barrel — cold plunge inflable"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-8"
                />
              </div>
            </Reveal>

            {/* RIGHT — copy + CTAs */}
            <Reveal delay={80}>
              <div>
                <p className="eyebrow mb-4">MF Barrel · Inflable</p>
                <h1 className="display-lg text-foreground mb-4">MF BARREL</h1>

                {/* Price + Agotado badge */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-4xl sm:text-5xl font-light tracking-tight text-foreground">
                      $69,000
                    </span>
                    <span className="ml-1 text-lg text-ink-soft">MXN</span>
                    {/* Agotado badge — acero/neutro, sin azul */}
                    <span className="inline-flex items-center rounded-full border border-foreground/20 bg-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-foreground/60">
                      Agotado
                    </span>
                  </div>
                  <p className="text-xs text-ink-faint mt-1 uppercase tracking-[0.1em]">
                    Precio no incluye IVA
                  </p>
                </div>

                <p className="body-lg mb-8 max-w-md">
                  La cold-plunge portátil más potente de Mexico.
                </p>

                {/* Bullet highlights */}
                <ul className="mb-10 space-y-3">
                  {[
                    "Enfría hasta 3 °C sin hielo.",
                    "Inflable, portátil y compacto, con sistema de triple filtración.",
                    "Hecho para durar — 6 meses de garantía.",
                    "Disponible con Motor Premium: calienta hasta 42 °C y purifica con ozono.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                      <span className="text-base leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <Link href="#" className="btn-pill btn-ink">
                    Avisame cuando este disponible
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/productos/mf-horizon"
                    className="btn-pill border border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors"
                  >
                    Ver MF Horizon
                  </Link>
                </div>

                {/* Trust line */}
                <p className="text-xs text-ink-faint uppercase tracking-[0.1em]">
                  Prueba 30 dias, sin preguntas · Garantia 6 meses + atencion de por vida · Hasta 6 MSI con Mercado Pago
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 2. STAT ROW ─────────────────────────────────────────── */}
      <section className="section-y bg-background">
        <div className="container-edge">
          <Reveal className="mb-12">
            <SectionHeader
              eyebrow="Por que MF Barrel"
              title="La diferencia"
              subtitle="Portabilidad sin sacrificar potencia."
              center
            />
          </Reveal>
          <StatRow
            stats={[
              { value: "3 °C", label: "temperatura minima alcanzable" },
              { value: "400 L", label: "capacidad total" },
              { value: "13 kg", label: "ligero y guardable en mochila" },
            ]}
          />
        </div>
      </section>

      {/* ── 3. FEATURE CARDS ────────────────────────────────────── */}
      <section className="section-y bg-warm">
        <div className="container-edge">
          <Reveal className="mb-12">
            <SectionHeader
              eyebrow="Tecnologia"
              title="Portabilidad que no cede en potencia."
              subtitle="Triple filtracion, control WiFi y motor de alto rendimiento — todo en un equipo que cabe en tu mochila."
              center
            />
          </Reveal>
          <FeatureCards cards={FEATURE_CARDS} columns={3} />
        </div>
      </section>

      {/* ── 4. TESTIMONIAL ──────────────────────────────────────── */}
      <section className="section-y bg-black text-white">
        <div className="container-edge">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              {/* Stars — neutras (blancas), no azul */}
              <div className="flex justify-center gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-white"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <blockquote className="display-sm text-white mb-8 leading-snug">
                &ldquo;Es un producto increible, los de Mente Fria son unos cracks. Te sientes muchisimo mejor, recuperas, descansas y entras en una claridad mental espectacular.&rdquo;
              </blockquote>
              {/* Attribution */}
              <p className="text-sm text-white/60 uppercase tracking-[0.12em] font-medium">
                Dr. Patricio Ochoa
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. SPEC TABLE ───────────────────────────────────────── */}
      <section className="section-y bg-background">
        <div className="container-edge">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

            {/* Left — sticky header */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <SectionHeader
                  eyebrow="Ficha tecnica"
                  title="Especificaciones"
                  subtitle="Todo lo que necesitas saber antes de tomar la decision."
                />
                <div className="mt-8">
                  <Link href="#" className="btn-pill btn-ink">
                    Avisame cuando este disponible
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right — spec table */}
            <Reveal delay={80}>
              <SpecTable rows={SPEC_ROWS} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6. LO QUE INCLUYE ───────────────────────────────────── */}
      <section className="section-y bg-warm">
        <div className="container-edge">
          <Reveal className="mb-12">
            <SectionHeader
              eyebrow="En la caja"
              title="Lo que incluye"
              subtitle="Todo lo que necesitas para empezar desde el primer dia."
              center
            />
          </Reveal>
          <Reveal>
            <ul className="mx-auto max-w-md space-y-4">
              {[
                "Mochila de transporte",
                "Bomba de doble accion",
                "Cubierta protectora",
                "Sistema de filtrado (3 filtros)",
                "Kit de reparacion",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-foreground/10 bg-background px-6 py-4"
                >
                  <span className="w-2 h-2 rounded-full bg-foreground flex-shrink-0" />
                  <span className="text-base text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── 7. FAQ ──────────────────────────────────────────────── */}
      <section className="section-y bg-background">
        <div className="container-edge">
          <Reveal className="mb-12">
            <SectionHeader
              eyebrow="Dudas frecuentes"
              title="Preguntas frecuentes"
              center
            />
          </Reveal>
          <FAQ items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ── 8. CTA SECTION ──────────────────────────────────────── */}
      <CTASection
        title="El MF Barrel regresa pronto."
        body="Prueba 30 dias sin preguntas. Garantia 6 meses + atencion de por vida. Hasta 6 MSI con Mercado Pago."
        cta={{ label: "Avisame", href: "#" }}
        dark
      />

    </PageShell>
  );
}
