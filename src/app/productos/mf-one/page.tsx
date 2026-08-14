import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { ProductOptionsProvider, ProductStage, ColorPicker, AddonCard } from "@/components/ProductOptions";
import { FrioCalor } from "@/components/FrioCalor";
import { MfOneBento } from "@/components/MfOneBento";
import { BenefitsCarousel } from "@/components/BenefitsCarousel";
import { ArrowRight } from "@/components/icons";
import { Layers, Filter, Zap, Smartphone, RotateCcw, ShieldCheck, CreditCard, Plus } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   MF ONE — Página de Detalle de Producto (PDP) · sistema "metal"
   Estructura: Hero → Stats (dark) → Features → Lifestyle →
   Specs → Closeup → FAQ → CTA (dark)
───────────────────────────────────────────────────────────── */

const WHATSAPP = "https://wa.me/5215616471386";

const FAQ_ITEMS = [
  {
    q: "¿Qué hace diferente a la MF ONE?",
    a: "Construcción más robusta: acrílico con acabados premium en acero inoxidable, iluminación LED interna y externa, y chorros de hidromasaje exclusivos. 195 × 80 × 71 cm, 420 L, ~135 kg. Garantía de 1 año — el doble que los demás. Enfría hasta 0 °C y calienta hasta 40 °C. Control WiFi desde app.",
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

/* Specs del manual oficial All-in-One 110V/220V v1.04 (jul 2026) */
const SPEC_ROWS = [
  { label: "Dimensiones", value: "195 × 80 × 71 cm" },
  { label: "Capacidad", value: "420 L" },
  { label: "Peso", value: "135 kg" },
  { label: "Material", value: "Acrílico + acabados en acero inoxidable" },
  { label: "Chiller", value: "Integrado, 3.5 kW de enfriamiento (grado comercial)" },
  { label: "Enfriamiento", value: "Hasta 0 °C" },
  { label: "Calentamiento", value: "Hasta 40 °C" },
  { label: "Rango de temperatura", value: "0 – 40 °C, al grado exacto" },
  { label: "Desinfección", value: "Ozono automático" },
  { label: "Filtración", value: "Skimmer de acero inoxidable + filtro de 20 micrones" },
  { label: "Bomba de agua", value: "8,000 L/h" },
  { label: "Nivel de ruido", value: "68 dB(A) a 1 m" },
  { label: "Refrigerante", value: "R32 ecológico" },
  { label: "Pantalla y control", value: "Panel táctil + WiFi + app (timers y modo automático)" },
  { label: "Voltaje", value: "110 V · 16 A (protector de fuga incluido)" },
  { label: "Consumo", value: "1.19 kW (<$20 MXN/día)" },
  { label: "Certificación", value: "CE" },
  { label: "Garantía", value: "1 año" },
  { label: "Instalación", value: "Sin obra ni plomería" },
  { label: "Envío", value: "$6,000 MXN a todo México" },
];

const HERO_BULLETS = [
  "Dual Climate Control: de 0 °C a 40 °C incluido",
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
            <ProductOptionsProvider
              variants={[
                { color: "Negro", images: ["/images/mfone-gallery/negro/front.jpg", ...Array.from({ length: 10 }, (_, i) => `/images/mfone-gallery/negro/${String(i + 1).padStart(2, "0")}.jpg`)] },
                { color: "Blanco", images: ["/images/mfone-gallery/blanco/front.jpg", ...Array.from({ length: 10 }, (_, i) => `/images/mfone-gallery/blanco/${String(i + 1).padStart(2, "0")}.jpg`)] },
              ]}
            >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

              {/* LEFT — celda estirada con stage sticky interno (estilo Plunge/Apple) */}
              <Reveal className="lg:h-full">
                <div className="lg:sticky lg:top-24">
                  <ProductStage alt="MF ONE — tina de inmersión todo en uno" />
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
                    El único cold plunge con frío y calor incluidos de serie. Ahora enfría hasta 0 °C.
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

                  {/* Color (patrón Plunge: opciones arriba del CTA) */}
                  <ColorPicker />

                  {/* Add-on estilo Plunge Basin */}
                  <AddonCard
                    name="MF ONE PRO DECK"
                    description="El escalón de acceso diseñado para tu MF ONE."
                    price={6900}
                    basePrice={169000}
                    imgByColor={{
                      Negro: "/images/prodeck-negro.png",
                      Blanco: "/images/prodeck-blanco.png",
                    }}
                  />

                  {/* CTAs */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="https://mentefria.com/products/mf-one" target="_blank" rel="noopener noreferrer" className="mbtn mbtn-primary">
                      Agregar al carrito
                    </a>
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mbtn mbtn-ghost">
                      Agendar demo
                    </a>
                  </div>

                  {/* Acordeones estilo Plunge */}
                  <div className="mt-7 space-y-2.5">
                    {[
                      {
                        t: "Detalles del producto",
                        c: "195 × 80 × 71 cm · 420 L · 135 kg. Acrílico de alta resistencia con acabados y componentes en acero inoxidable. Rango de 0 a 40 °C con chiller integrado de 3.5 kW. Control por panel táctil, WiFi y app. Certificación CE, grado comercial.",
                      },
                      {
                        t: "Qué incluye",
                        c: "Tapa aislante térmica de 3 piezas, skimmer de acero inoxidable, filtro de 20 micrones, protector de corriente con reset y acceso a la app de control WiFi. Todo en la caja, sin compras extra.",
                      },
                      {
                        t: "Envío y entrega",
                        c: "$6,000 MXN a todo México, de 3 a 7 días hábiles. Incluye maniobra de entrega: con 135 kg, nuestro equipo coordina contigo el acceso al espacio final.",
                      },
                      {
                        t: "Prueba, garantía y devoluciones",
                        c: "30 días de prueba sin preguntas: si no es el mejor cold plunge que has probado, te reembolsamos. Garantía de 1 año por defectos de fabricación y atención de por vida por nuestros canales.",
                      },
                    ].map((a) => (
                      <details key={a.t} className="group rounded-[14px] border border-[var(--line-1)] bg-white">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[14px] font-semibold [&::-webkit-details-marker]:hidden">
                          {a.t}
                          <Plus size={18} className="flex-none text-[var(--accent-ice)] transition-transform duration-300 group-open:rotate-45" />
                        </summary>
                        <p className="px-5 pb-5 text-[13.5px] leading-relaxed text-[var(--fg-muted)]">{a.c}</p>
                      </details>
                    ))}
                  </div>

                  {/* Trust cards (formato Eight Sleep/Plunge) */}
                  <div className="mt-7 grid grid-cols-3 gap-3">
                    {[
                      { icon: RotateCcw, t: "30 días de prueba", d: "Sin preguntas: te reembolsamos." },
                      { icon: ShieldCheck, t: "Garantía 1 año", d: "Y atención de por vida." },
                      { icon: CreditCard, t: "Hasta 6 MSI", d: "Con Mercado Pago." },
                    ].map((b) => (
                      <div key={b.t} className="rounded-[14px] border border-[var(--line-1)] bg-white p-4 text-center">
                        <b.icon size={20} strokeWidth={1.8} className="mx-auto text-[var(--accent-ice)]" />
                        <div className="mt-2 text-[12.5px] font-semibold leading-tight">{b.t}</div>
                        <div className="mt-1 text-[11px] leading-snug text-[var(--fg-muted)]">{b.d}</div>
                      </div>
                    ))}
                  </div>

                </div>
              </Reveal>
            </div>
            </ProductOptionsProvider>
          </div>
        </section>

        {/* ── 2. STATS (dark) ─────────────────────────────────── */}
        <section className="msection panel">
          <div className="mwrap">
            <div className="stats-wrap">
              <Reveal className="stats-visual">
                <video
                  src="/videos/mfone-diferencia.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full !object-cover !p-0"
                />
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
                    <div className="n n-cold">0<span className="u">°C</span></div>
                    <div className="l">Temperatura mínima alcanzable, sin un solo hielo.</div>
                  </div>
                  <div className="stat">
                    <div className="n n-heat">40<span className="u">°C</span></div>
                    <div className="l">Calentamiento hasta jacuzzi mode. Una tina, todo el año.</div>
                  </div>
                  <div className="stat">
                    <div className="n">1<span className="u">unidad</span></div>
                    <div className="l">All-in-One: chiller, filtración y ozono integrados. Plug &amp; Play.</div>
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

        {/* ── 3. BENTO ANIMADO v2 (diseño de Rafa — dark premium) ── */}
        <section className="msection !bg-white">
          <div className="mwrap">
            <Reveal className="msection-head">
              <span className="m-eyebrow accent">Tecnología</span>
              <h2>Ingeniería que se siente.</h2>
              <p>
                Frío, calor, hidromasaje e iluminación LED — todo integrado en un solo
                equipo. Tu única preocupación: entrar al agua.
              </p>
            </Reveal>
            <Reveal>
              <MfOneBento />
            </Reveal>
          </div>
        </section>

        {/* ── ACCESORIOS INCLUIDOS (formato Plunge) ──────────── */}
        <section className="msection">
          <div className="mwrap">
            <Reveal className="msection-head">
              <span className="m-eyebrow accent">Accesorios incluidos</span>
              <h2>Todo incluido, desde el día uno.</h2>
              <p>Sin compras extra ni sorpresas: el MF ONE llega completo y listo para usarse.</p>
            </Reveal>
            <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { t: "Filtro de 20 micrones", p: "Cartuchos reemplazables de fácil acceso — cámbialo una vez al mes.", img: "/images/acc-filtros-cartucho.jpg" },
                { t: "Filtro de carbón", p: "Se conecta a la manguera al llenar la tina — retiene impurezas desde el primer litro.", img: "/images/acc-filtro-prellenado.jpg" },
                { t: "Red de limpieza", p: "Retira hojas e impurezas de la superficie en segundos.", img: "/images/acc-red-limpieza.jpg" },
                { t: "Soporte para celular", p: "Se monta en el borde de la tina — tu timer, tu música o tu serie durante la inmersión.", img: "/images/acc-soporte-celular.jpg" },
                { t: "Tapa aislante térmica", p: "3 piezas rígidas — conserva la temperatura y mantiene el agua limpia.", img: null },
                { t: "Skimmer de acero inoxidable", p: "Red integrada en la tina que atrapa impurezas — limpieza semanal en segundos.", img: null },
                { t: "Protector de corriente", p: "Enchufe con protección de fuga y reset — seguridad eléctrica de serie.", img: null },
                { t: "App de control WiFi", p: "Temperatura, timers y modo automático desde tu celular.", img: null },
                { t: "Patitos de hule", p: "Sí, vienen incluidos. Porque el frío se toma en serio — pero no tanto.", img: "/images/acc-patitos.jpg" },
              ].map((a) => (
                <article key={a.t} className="overflow-hidden rounded-[16px] border border-[var(--line-1)] bg-[var(--m-white)]">
                  {/* Imagen del accesorio (o espacio reservado) */}
                  <div className="grid aspect-[16/9] place-items-center bg-[var(--bg-panel)]">
                    {a.img ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={a.img} alt={a.t} className="h-full w-full object-cover" />
                    ) : (
                      <span className="rounded-full border border-dashed border-[var(--line-2)] px-4 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
                        Imagen próximamente
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-[15px] font-semibold">{a.t}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--fg-muted)]">{a.p}</p>
                  </div>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── 4. FRÍO / CALOR — díptico interactivo ───────────── */}
        <section className="msection">
          <div className="mwrap">
            <Reveal>
              <FrioCalor />
            </Reveal>
          </div>
        </section>

        {/* ── EL CHILLER EN DETALLE — Siempre limpia. Siempre fría. Siempre lista. ── */}
        <section className="msection dark-s">
          <div className="mwrap">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <span className="m-eyebrow accent">El corazón del MF ONE</span>
                <h2 className="mdisplay mt-3 text-[clamp(28px,3.4vw,46px)]" style={{ WebkitTextStroke: "var(--bold-stroke) currentColor" }}>
                  Siempre limpia.
                  <br />
                  Siempre fría.
                  <br />
                  Siempre lista.
                </h2>

                {/* Dato estrella: 19× */}
                <div className="mt-8 flex items-center gap-5 rounded-[16px] border border-[var(--on-dark-line)] bg-white/[0.04] p-5">
                  <div className="mdisplay text-[54px] leading-none text-[var(--m-blue-400)]">19×</div>
                  <p className="m-0 max-w-[30ch] text-[13.5px] leading-relaxed text-[var(--on-dark-muted)]">
                    La bomba de 8,000 L/h filtra <span className="text-white">toda el agua de la tina ~19 veces cada hora</span>. Por eso siempre está cristalina.
                  </p>
                </div>

                {/* Features elegidos */}
                <div className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                  {[
                    ["Timer programable", "Se enciende y apaga sola a tus horarios — dos programas."],
                    ["Modo automático", "Fijas tu temperatura y la mantiene 24/7, al grado."],
                    ["Ozono automático", "Esterilización sin cloro ni químicos."],
                    ["Doble filtración", "Skimmer de acero inoxidable + filtro de 20 micrones."],
                    ["Candado de pantalla", "Bloqueo del panel — ideal para uso comercial o niños."],
                    ["Luces LED", "Enciende y apaga la iluminación desde el panel."],
                  ].map(([t, d]) => (
                    <div key={t} className="border-t border-white/10 py-4">
                      <div className="flex items-baseline gap-2.5">
                        <span aria-hidden className="h-[7px] w-[7px] flex-none translate-y-[-1px] rounded-full bg-[var(--m-blue-400)]" />
                        <div>
                          <div className="text-[14px] font-semibold text-white">{t}</div>
                          <p className="mt-0.5 text-[13px] leading-relaxed text-[var(--on-dark-muted)]">{d}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[16px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/mfone-gallery/negro/06.jpg" alt="Chiller integrado del MF ONE" className="w-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="overflow-hidden rounded-[16px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/mfone-gallery/negro/07.jpg" alt="Frente del chiller" className="w-full" />
                    </div>
                    <div className="overflow-hidden rounded-[16px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/mfone-gallery/negro/09.jpg" alt="Panel de control táctil" className="w-full" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── BENEFICIOS CIENTÍFICAMENTE PROBADOS (real mentefria.com) ── */}
        <BenefitsCarousel />

        {/* ── 5. SPEC TABLE ───────────────────────────────────── */}
        <section className="msection panel scroll-mt-20" id="ficha-tecnica">
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

        {/* ── 8. CTA FINAL — PARA NEGOCIOS (claro, estilo B2BBand) ── */}
        <section className="bg-mist text-foreground">
          <div className="container-edge section-y">
            <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="eyebrow mb-4">Mente Fria para Negocios</p>
                <h2 className="display-md">¿Y si el MF ONE se pagara solo?</h2>
                <p className="body-lg mt-4">
                  Hoteles, gimnasios, spas y clínicas ya cobran por cada inmersión.
                  Adquiérelo en leasing sin tocar tu línea bancaria — y calcula en un
                  minuto cuántas sesiones necesitas para recuperarlo.
                </p>

                {/* Stats */}
                <div className="mt-8 grid max-w-xl grid-cols-1 gap-y-6 sm:grid-cols-3">
                  {[
                    ["100%", "renta deducible"],
                    ["12–24", "meses de leasing"],
                    ["<24 h", "propuesta en tu correo"],
                  ].map(([n, l], i) => (
                    <div key={l} className={i > 0 ? "sm:border-l sm:border-line sm:pl-6" : ""}>
                      <div className="mdisplay text-[clamp(28px,3vw,40px)] leading-none text-[var(--accent-ice)]">
                        {n}
                      </div>
                      <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
                <Link href="/negocios" className="btn-pill btn-ink">
                  Cotiza para tu negocio
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/negocios#roi"
                  className="text-[13px] font-semibold text-[var(--accent-ice)] transition-colors hover:text-[var(--m-blue-600)]"
                >
                  Calcular mi ROI →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
    </PageShell>
  );
}
