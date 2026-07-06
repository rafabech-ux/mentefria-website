import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";

/* ─────────────────────────────────────────────────────────────
   MF ONE — Página de Detalle de Producto (PDP) · sistema "metal"
   Estructura: Hero → Stats (dark) → Features → Lifestyle →
   Specs → Closeup → FAQ → CTA (dark)
───────────────────────────────────────────────────────────── */

const WHATSAPP = "https://wa.me/5215616471386";

const FAQ_ITEMS = [
  {
    q: "¿Qué hace diferente a la MF ONE?",
    a: "Construcción más robusta: acrílico con acabados premium en acero inoxidable, iluminación LED interna y externa, y chorros de hidromasaje exclusivos. 200 × 80 × 80 cm, 420 L, ~135 kg. Garantía de 1 año — el doble que los demás. Enfría hasta 3 °C y calienta hasta 42 °C. Control WiFi desde app.",
  },
  {
    q: "¿Cuánto tarda en enfriar?",
    a: "Incluye Motor Premium integrado de 1 HP — aproximadamente 6 °C por hora, dependiendo de la temperatura ambiente y si el equipo está en interior o exterior. Recomendamos programar el enfriamiento desde la app para que siempre esté lista a tu hora.",
  },
  {
    q: "¿Necesita instalación o desagüe?",
    a: "No requiere instalación eléctrica especial ni toma de agua permanente: funciona con 110 V y se llena con manguera o llave. Una coladera cercana facilita el mantenimiento, pero no es obligatoria. Con 135 kg, elige bien el espacio desde el inicio.",
  },
  {
    q: "¿Cada cuánto cambio los filtros?",
    a: "Cada 3 a 4 semanas con uso regular; cada cambio de agua incluye cambio de filtro. El proceso es sencillo y no requiere técnico.",
  },
  {
    q: "¿Se puede usar en exteriores?",
    a: "Sí, pero no expuesta directamente al sol ni a la lluvia. Idealmente bajo techo para proteger los componentes y no comprometer la garantía.",
  },
  {
    q: "¿Cuánto cuesta el envío?",
    a: "El envío del MF ONE cuesta $6,000 MXN a todo México. Incluye maniobra de entrega — con 135 kg, nuestro equipo coordina contigo el acceso al espacio final.",
  },
];

const SPEC_ROWS = [
  { label: "Dimensiones", value: "200 × 80 × 80 cm" },
  { label: "Capacidad", value: "420 L" },
  { label: "Peso", value: "135 kg" },
  { label: "Material", value: "Acrílico + acabados en acero inoxidable" },
  { label: "Chiller", value: "Motor Premium integrado (1 HP)" },
  { label: "Enfriamiento", value: "Hasta 3 °C (~6 °C/hora)" },
  { label: "Calentamiento", value: "Hasta 42 °C" },
  { label: "Desinfección", value: "Ozono" },
  { label: "Filtración", value: "20 micrones + filtro de 3 capas" },
  { label: "Pantalla y control", value: "WiFi + app" },
  { label: "Voltaje", value: "110 V (circuito dedicado)" },
  { label: "Consumo", value: "<$20 MXN/día" },
  { label: "Certificación", value: "CE" },
  { label: "Garantía", value: "1 año" },
  { label: "Instalación", value: "Sin obra ni plomería" },
  { label: "Envío", value: "$6,000 MXN a todo México" },
];

const FEATURE_CARDS = [
  {
    tag: "Dual Climate Control",
    title: "Enfría hasta 3 °C",
    body: "De 3 °C a 42 °C incluido de serie — frío para recuperación, calor para hidroterapia. Un solo equipo, sin accesorios externos.",
  },
  {
    tag: "Conectividad",
    title: "Contrólalo desde tu celular",
    body: "Programa el enfriamiento con tu rutina para que siempre esté lista. Control WiFi + app móvil — temperatura exacta, a tu hora.",
  },
  {
    tag: "Construcción",
    title: "Acrílico de alta resistencia",
    body: "Estructura en acrílico con acabados en acero inoxidable. Componentes pensados para uso continuo, sin degradarse.",
  },
  {
    tag: "All-In-One",
    title: "Sistema All-In-One",
    body: "Todos los componentes integrados en una sola unidad. Zero Setup: sin obra, sin plomería. Solo conecta y opera.",
  },
  {
    tag: "Estándares",
    title: "Certificación CE",
    body: "Grado comercial. Los más altos estándares de seguridad eléctrica y de producto — válido para instalaciones en hoteles, spas y clínicas.",
  },
  {
    tag: "Experiencia",
    title: "Chorros de hidromasaje",
    body: "Chorros integrados que intensifican el efecto del frío — y también funcionan en modo calor para hidroterapia. LED interno y externo incluidos.",
  },
];

const HERO_BULLETS = [
  "Dual Climate Control: de 3 °C a 42 °C incluido",
  "Diseño All-In-One con chiller integrado",
  "Zero Setup: sin obra, sin plomería, solo conecta y opera",
  "Control WiFi programable desde tu celular. Certificación CE.",
  "1 año de garantía.",
];

export default function MFOnePage() {
  return (
    <PageShell>
      <div className="bg-[var(--bg-metal)] text-[var(--fg-metal)]">

        {/* ── 1. PRODUCT HERO ─────────────────────────────────── */}
        <section className="msection !pt-[clamp(40px,6vh,80px)]">
          <div className="mwrap">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

              {/* LEFT — product stage */}
              <Reveal>
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[18px] [background:var(--grad-silver)] lg:aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/prod-mfone.png"
                    alt="MF ONE — tina de inmersión todo en uno"
                    className="h-full w-full object-contain p-10"
                  />
                </div>
              </Reveal>

              {/* RIGHT — copy + CTAs */}
              <Reveal delay={80}>
                <div>
                  <span className="m-eyebrow accent">MF ONE · All-in-One</span>
                  <h1 className="mdisplay mt-4 text-[clamp(44px,5.5vw,76px)]" style={{ WebkitTextStroke: "var(--bold-stroke) currentColor" }}>
                    MF ONE
                  </h1>

                  {/* Price */}
                  <div className="mt-5 flex flex-wrap items-baseline gap-2">
                    <span className="mdisplay text-[clamp(34px,3.6vw,50px)]">$169,000</span>
                    <span className="text-lg text-[var(--fg-muted)]">MXN</span>
                  </div>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
                    Precio no incluye IVA
                  </p>

                  <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[var(--fg-muted)]">
                    El único cold plunge con frío y calor incluidos de serie.
                  </p>

                  {/* Bullet highlights */}
                  <ul className="mt-8 space-y-3">
                    {HERO_BULLETS.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-[8px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent-ice)]" />
                        <span className="text-[15px] leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="mt-10 flex flex-wrap gap-3">
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mbtn mbtn-primary">
                      Comprar
                    </a>
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mbtn mbtn-ghost">
                      Agendar demo
                    </a>
                  </div>

                  {/* Trust line */}
                  <p className="mt-6 text-[11px] uppercase tracking-[0.14em] text-[var(--fg-subtle)]">
                    Prueba 30 días, sin preguntas · Garantía 1 año + atención de por vida · Hasta 6 MSI con Mercado Pago
                  </p>

                  {/* Complemento — MF ONE PRO DECK */}
                  <div className="mt-6 inline-flex flex-wrap items-center gap-3 rounded-[14px] border border-[var(--line-1)] bg-[var(--bg-panel)] px-5 py-3">
                    <span className="m-eyebrow accent">Complemento</span>
                    <span className="text-sm font-medium">MF ONE PRO DECK — $6,900 MXN</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 2. STATS (dark) ─────────────────────────────────── */}
        <section className="msection dark-s">
          <div className="mwrap">
            <div className="stats-wrap">
              <Reveal className="stats-visual">
                <div className="glow" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/photography/product/mf-one-white-studio.png" alt="MF ONE en estudio" />
              </Reveal>
              <Reveal>
                <span className="m-eyebrow accent">Por qué MF ONE</span>
                <h2
                  className="mdisplay my-[14px] mb-8 text-[clamp(28px,3.5vw,48px)]"
                  style={{ WebkitTextStroke: "var(--bold-stroke) currentColor" }}
                >
                  La diferencia.
                </h2>
                <div className="stats-grid">
                  <div className="stat">
                    <div className="n">3<span className="u">°C</span></div>
                    <div className="l">Temperatura mínima alcanzable, sin un solo hielo.</div>
                  </div>
                  <div className="stat">
                    <div className="n">42<span className="u">°C</span></div>
                    <div className="l">Calentamiento hasta jacuzzi mode. Una tina, todo el año.</div>
                  </div>
                  <div className="stat">
                    <div className="n">1<span className="u">HP</span></div>
                    <div className="l">Chiller integrado de grado comercial, sin motor externo.</div>
                  </div>
                  <div className="stat">
                    <div className="n">20<span className="u">µm</span></div>
                    <div className="l">Filtración fina + filtro de 3 capas + ozono. Agua cristalina.</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 3. FEATURE CARDS ────────────────────────────────── */}
        <section className="msection panel">
          <div className="mwrap">
            <Reveal className="msection-head">
              <span className="m-eyebrow accent">Tecnología</span>
              <h2>Ingeniería que se siente.</h2>
              <p>
                Frío, calor, hidromasaje e iluminación LED — todo integrado en un solo
                equipo. Tu única preocupación: entrar al agua.
              </p>
            </Reveal>
            <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURE_CARDS.map((c) => (
                <article key={c.title} className="rounded-[14px] border border-[var(--line-1)] bg-[var(--m-white)] p-7">
                  <span className="m-eyebrow accent">{c.tag}</span>
                  <h3
                    className="mdisplay mt-3 text-[22px]"
                    style={{ WebkitTextStroke: "var(--bold-stroke) currentColor" }}
                  >
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--fg-muted)]">{c.body}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── 4. FULL-BLEED LIFESTYLE ─────────────────────────── */}
        <section className="msection">
          <div className="mwrap">
            <Reveal>
              <div className="relative overflow-hidden rounded-[18px]">
                <div className="relative aspect-[16/9] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hero-mfone.png"
                    alt="MF ONE en un espacio de recuperación"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,9,11,0.82)] via-[rgba(8,9,11,0.28)] to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 lg:p-16">
                  <h2
                    className="mdisplay max-w-2xl text-[clamp(28px,4vw,52px)] text-white"
                    style={{ WebkitTextStroke: "var(--bold-stroke) currentColor" }}
                  >
                    Frío. Calor. Un solo equipo.
                  </h2>
                  <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/70">
                    Los chorros de hidromasaje intensifican el efecto del frío — y también
                    sirven en modo calor para hidroterapia. Zero Setup: sin obra, sin plomería.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 5. SPEC TABLE ───────────────────────────────────── */}
        <section className="msection panel">
          <div className="mwrap">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
              {/* Left — sticky header */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Reveal>
                  <span className="m-eyebrow accent">Ficha técnica</span>
                  <h2
                    className="mdisplay mt-3 text-[clamp(30px,4vw,52px)]"
                    style={{ WebkitTextStroke: "var(--bold-stroke) currentColor" }}
                  >
                    Especificaciones
                  </h2>
                  <p className="mt-4 max-w-[40ch] text-[15px] text-[var(--fg-muted)]">
                    Todo lo que necesitas saber antes de tomar la decisión.
                  </p>
                  <div className="mt-8">
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mbtn mbtn-primary">
                      Comprar MF ONE
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Right — spec rows */}
              <Reveal delay={80}>
                <div className="divide-y divide-[var(--line-1)] border-y border-[var(--line-1)]">
                  {SPEC_ROWS.map((r) => (
                    <div key={r.label} className="flex items-baseline justify-between gap-6 py-4">
                      <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--fg-muted)]">
                        {r.label}
                      </span>
                      <span className="text-right text-[15px] font-medium">{r.value}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 6. CLOSEUP ──────────────────────────────────────── */}
        <section className="closeup">
          <div className="glow" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photography/product/mf-one-white-studio.png" alt="MF ONE — detalle" />
          <div className="cap">
            <h2>Todo en una sola pieza.</h2>
            <p>Chiller de 1 HP integrado. Silencioso. Sellado. Certificado CE.</p>
          </div>
        </section>

        {/* ── 7. FAQ ──────────────────────────────────────────── */}
        <section className="msection">
          <div className="mwrap">
            <Reveal className="msection-head">
              <span className="m-eyebrow accent">Dudas frecuentes</span>
              <h2>Preguntas frecuentes.</h2>
            </Reveal>
            <FAQ items={FAQ_ITEMS} />
          </div>
        </section>

        {/* ── 8. CTA FINAL (dark) ─────────────────────────────── */}
        <section className="msection dark-s">
          <div className="mwrap text-center">
            <Reveal>
              <span className="m-eyebrow accent">Empieza hoy</span>
              <h2
                className="mdisplay mx-auto mt-4 max-w-[18ch] text-[clamp(34px,5vw,68px)]"
                style={{ WebkitTextStroke: "var(--bold-stroke) currentColor" }}
              >
                Lleva el MF ONE a casa — $169,000 MXN
              </h2>
              <p className="mx-auto mt-5 max-w-[52ch] text-[15px] text-[var(--on-dark-muted)]">
                Prueba 30 días sin preguntas. Garantía 1 año + atención de por vida. Hasta 6
                MSI con Mercado Pago. Envío $6,000 MXN a todo México.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mbtn mbtn-blue">
                  Comprar MF ONE
                </a>
                <Link href="/productos" className="mbtn mbtn-ghost on-dark text-white">
                  Ver todos los productos
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
    </PageShell>
  );
}
