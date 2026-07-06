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
import { ProductOptionsProvider, ProductStage, ColorPicker } from "@/components/ProductOptions";
import { ArrowRight } from "@/components/icons";

/* ─────────────────────────────────────────────────────────────
   MF HORIZON — Página de Detalle de Producto (PDP)
   Estructura: Hero → Stats → Features → Testimonial → Specs → Comparativa → FAQ → CTA
───────────────────────────────────────────────────────────── */

const FAQ_ITEMS = [
  {
    q: "¿Necesito hielo?",
    a: "No. El motor mantiene la temperatura hasta 3 °C de forma continua y filtra el agua automáticamente — sin hielos, sin cargar bolsas, sin costos extra.",
  },
  {
    q: "¿Qué tan difícil es el montaje?",
    a: "Sin herramientas: infla la tina, conecta las mangueras al motor, enchúfalo y llena con agua. Todo listo en aproximadamente 15 a 20 minutos.",
  },
  {
    q: "¿Se puede guardar cuando no la uso?",
    a: "Sí. Se desinfla completamente y cabe en su mochila de transporte incluida — ideal para llevarla a tu casa de vacaciones o guardarla en un clóset cuando no la necesitas.",
  },
  {
    q: "¿Cuál es la diferencia entre Motor Pro 2.0 y Motor Premium 2.0?",
    a: "El Motor Pro 2.0 (0.8 HP) enfría hasta 3 °C sin calor ni ozono — perfecto para recuperación en frío. El Motor Premium 2.0 (1 HP) además calienta hasta 42 °C y purifica con ozono, convirtiéndola en jacuzzi o tina de hidroterapia caliente.",
  },
];

const SPEC_ROWS = [
  { label: "Dimensiones", value: "160 × 65 × 70 cm" },
  { label: "Peso", value: "15 kg" },
  { label: "Capacidad", value: "420 L" },
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
    body: "Sin hielo — el motor mantiene el agua a temperatura exacta de forma continua. Frío real, sin esfuerzo, todos los días.",
    tone: "cool" as const,
  },
  {
    tag: "Conectividad",
    title: "Contrólalo desde tu celular",
    body: "Programa tu cold plunge con tu rutina diaria para que siempre esté lista. Control WiFi + app — temperatura exacta, a tu hora.",
    tone: "ink" as const,
  },
  {
    tag: "Filtración",
    title: "Sistema de triple filtración",
    body: "Retiene impurezas grandes, elimina químicos y sedimentos finos, dejando el agua cristalina y limpia. Sin cambios de agua frecuentes.",
    tone: "warm" as const,
  },
  {
    tag: "Potencia",
    title: "Motor 3× más potente",
    body: "Enfría y filtra el agua 3 veces más rápido que un motor convencional, para que no esperes. Listo cuando tú lo estás.",
    tone: "cool" as const,
  },
  {
    tag: "Portabilidad",
    title: "Inflable y portátil",
    body: "Fácil de transportar — para tu casa de vacaciones o mudanzas, tu cold plunge se va contigo. Se guarda en su mochila incluida.",
    tone: "ink" as const,
  },
  {
    tag: "Dual Climate",
    title: "Calienta hasta 42 °C",
    body: "Con Motor Premium 2.0: de cold plunge a jacuzzi en un solo equipo. Hidroterapia caliente y purificación con ozono incluidos.",
    tone: "warm" as const,
  },
];

const INCLUDES = [
  "Mochila de transporte",
  "Bomba de doble acción",
  "Cubierta protectora",
  "Sistema de filtrado (3 filtros)",
  "Kit de reparación",
];

const COMPARE_ROWS = [
  { label: "Enfría hasta 3° sin fallar", mf: true },
  { label: "Calienta hasta 42 °C (jacuzzi)", mf: true },
  { label: "0 hielos", mf: true },
  { label: "Control por app WiFi", mf: true },
  { label: "Servicio 24/7 + Garantía 6 meses", mf: true },
  { label: "Filtro de 3 capas", mf: true },
];

export default function MFHorizonPage() {
  return (
    <PageShell>

      {/* ── 1. PRODUCT HERO ─────────────────────────────────────── */}
      <section className="section-y bg-warm">
        <div className="container-edge">
          <ProductOptionsProvider
            variants={[
              { color: "Negro", images: ["/images/pdp-horizon-negro.png"] },
              { color: "Blanco", images: ["/images/pdp-horizon-blanco.png"] },
            ]}
            defaultColor="Blanco"
          >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT — product stage */}
            <Reveal>
              <ProductStage alt="MF Horizon — cold plunge inflable portátil" />
            </Reveal>

            {/* RIGHT — copy + CTAs */}
            <Reveal delay={80}>
              <div>
                <p className="eyebrow mb-4">MF Horizon · Inflable</p>
                <h1 className="display-lg text-foreground mb-4">MF HORIZON</h1>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-light tracking-tight text-foreground">
                    $74,000
                  </span>
                  <span className="ml-2 text-lg text-ink-soft">MXN</span>
                  <p className="text-xs text-ink-faint mt-1 uppercase tracking-[0.1em]">
                    Precio no incluye IVA
                  </p>
                </div>

                <p className="body-lg mb-8 max-w-md">
                  La cold plunge portátil más potente de México.
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

                {/* Color + Motor options */}
                <div className="mb-8 flex flex-wrap gap-6">
                  <div>
                    <p className="text-xs text-ink-faint uppercase tracking-[0.1em] mb-2">Color</p>
                    <div className="flex gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-3 py-1 text-sm font-medium text-foreground">
                        <span className="w-3 h-3 rounded-full bg-foreground inline-block" />
                        Negro
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-3 py-1 text-sm font-medium text-foreground">
                        <span className="w-3 h-3 rounded-full bg-white border border-foreground/30 inline-block" />
                        Blanco
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-ink-faint uppercase tracking-[0.1em] mb-2">Motor</p>
                    <div className="flex gap-2">
                      <span className="rounded-full border border-foreground/20 px-3 py-1 text-sm font-medium text-foreground">
                        Pro 2.0
                      </span>
                      <span className="rounded-full border border-foreground/20 px-3 py-1 text-sm font-medium text-foreground">
                        Premium 2.0
                      </span>
                    </div>
                  </div>
                </div>

                {/* Color (arriba de los CTAs) */}
              <ColorPicker />

              {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <Link href="#" className="btn-pill btn-ink">
                    Añadir al carrito
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/soporte"
                    className="btn-pill border border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors"
                  >
                    ¿Qué motor es para ti?
                  </Link>
                </div>

                {/* Trust line */}
                <p className="text-xs text-ink-faint uppercase tracking-[0.1em]">
                  Prueba 30 días, sin preguntas · Garantía 6 meses + atención de por vida · Hasta 6 MSI con Mercado Pago
                </p>
              </div>
            </Reveal>
          </div>
          </ProductOptionsProvider>
        </div>
      </section>

      {/* ── 2. STAT ROW ─────────────────────────────────────────── */}
      <section className="section-y bg-background">
        <div className="container-edge">
          <Reveal className="mb-12">
            <SectionHeader
              eyebrow="Por qué MF Horizon"
              title="La diferencia"
              subtitle="Portabilidad sin compromiso. Potencia real. Frío garantizado."
              center
            />
          </Reveal>
          <StatRow
            stats={[
              { value: "3 °C", label: "temperatura mínima alcanzable" },
              { value: "420 L", label: "capacidad sin hielo" },
              { value: "15 kg", label: "peso — cabe en tu mochila" },
            ]}
          />
        </div>
      </section>

      {/* ── 3. FEATURE CARDS ────────────────────────────────────── */}
      <section className="section-y bg-warm">
        <div className="container-edge">
          <Reveal className="mb-12">
            <SectionHeader
              eyebrow="Tecnología"
              title="Portátil. Potente. Sin compromiso."
              subtitle="Triple filtración, control WiFi y frío real hasta 3 °C — todo en una tina que cabe en tu mochila."
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
            <div className="max-w-3xl mx-auto text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-white/70"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Quote mark */}
              <svg
                className="w-10 h-10 text-white/20 mx-auto mb-6"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
              </svg>
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light text-white leading-relaxed mb-8">
                Es un producto increíble, los de Mente Fria son unos cracks. Te sientes muchísimo mejor, recuperas, descansas y entras en una claridad mental espectacular.
              </blockquote>
              <cite className="not-italic text-white/60 text-sm uppercase tracking-[0.12em] font-medium">
                Dr. Patricio Ochoa
              </cite>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. LO QUE INCLUYE ───────────────────────────────────── */}
      <section className="section-y bg-background">
        <div className="container-edge">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
            <Reveal>
              <SectionHeader
                eyebrow="En la caja"
                title="Lo que incluye"
                subtitle="Todo lo que necesitas para empezar el mismo día que llega."
              />
            </Reveal>
            <Reveal delay={80}>
              <ul className="space-y-4">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-center gap-4 border-b border-foreground/8 pb-4 last:border-0 last:pb-0">
                    <span className="w-2 h-2 rounded-full bg-foreground flex-shrink-0" />
                    <span className="text-base text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6. SPEC TABLE ───────────────────────────────────────── */}
      <section className="section-y bg-warm">
        <div className="container-edge">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

            {/* Left — sticky header */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <SectionHeader
                  eyebrow="Ficha técnica"
                  title="Especificaciones"
                  subtitle="Todo lo que necesitas saber antes de tomar la decisión."
                />
                <div className="mt-8">
                  <Link href="#" className="btn-pill btn-ink">
                    Añadir al carrito
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

      {/* ── 7. COMPARATIVA ──────────────────────────────────────── */}
      <section className="section-y bg-background">
        <div className="container-edge">
          <Reveal className="mb-12">
            <SectionHeader
              eyebrow="Comparativa"
              title="MF Horizon #1 en MX vs Otras"
              subtitle="Lo que ninguna otra cold plunge portátil te da."
              center
            />
          </Reveal>
          <Reveal delay={60}>
            <div className="max-w-2xl mx-auto rounded-2xl border border-foreground/10 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[1fr_auto_auto] bg-foreground text-white px-6 py-4 text-sm font-medium uppercase tracking-[0.08em]">
                <span>Característica</span>
                <span className="text-center px-4">MF Horizon</span>
                <span className="text-center px-4 text-white/50">Otras</span>
              </div>
              {/* Rows */}
              {COMPARE_ROWS.map(({ label }, i) => (
                <div
                  key={label}
                  className={`grid grid-cols-[1fr_auto_auto] px-6 py-4 text-sm border-b border-foreground/8 last:border-0 ${
                    i % 2 === 0 ? "bg-warm" : "bg-background"
                  }`}
                >
                  <span className="text-foreground font-medium">{label}</span>
                  <span className="text-center px-4">
                    <svg className="w-5 h-5 text-foreground mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-center px-4">
                    <svg className="w-5 h-5 text-foreground/20 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────── */}
      <section className="section-y bg-warm">
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

      {/* ── 9. CTA SECTION ──────────────────────────────────────── */}
      <CTASection
        title="Lleva el MF Horizon a casa — $74,000 MXN"
        body="Prueba 30 días sin preguntas. Garantía 6 meses + atención de por vida. Hasta 6 MSI con Mercado Pago."
        cta={{ label: "Añadir al carrito", href: "#" }}
        dark
      />

    </PageShell>
  );
}
