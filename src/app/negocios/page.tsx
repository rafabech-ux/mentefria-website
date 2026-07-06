import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SectionHeader, CTASection } from "@/components/blocks";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";
import { QuoteForm } from "./QuoteForm";
import { RoiCalculator } from "./RoiCalculator";

/* ─────────────────────────────────────────────────────────────
   PARA NEGOCIOS — Landing B2B
   Hero (dark) → Cotización → Tipos de negocio → Productos →
   Calculadora ROI → Por qué MF → Leasing (dark) → Proceso →
   FAQ B2B → CTA final (dark)
───────────────────────────────────────────────────────────── */

const QUOTE_BULLETS = [
  "Respuesta en menos de 24 horas hábiles",
  "Cotización con leasing y compra directa",
  "Asesoría con un especialista B2B sin compromiso",
  "Descuentos por volumen disponibles",
];

const BUSINESS_TYPES = [
  {
    num: "01",
    title: "Hoteles",
    body: "Cold plunge integrado al circuito de bienestar en hoteles 5 estrellas de Tulum, CDMX y Los Cabos.",
  },
  {
    num: "02",
    title: "Spas",
    body: "Eleva el ritual de tu spa con inmersión fría comercial. Diferenciándote como destino premium.",
  },
  {
    num: "03",
    title: "Centros Wellness",
    body: "Complementa tu oferta de longevidad, biohacking y recuperación con la cold plunge líder del mercado.",
  },
  {
    num: "04",
    title: "Gimnasios",
    body: "Diferénciate de la cadena con un beneficio premium que justifica membresías más altas.",
  },
  {
    num: "05",
    title: "Estudios de Wellness",
    body: "Yoga, pilates, breathwork y meditación. Cierra cada clase con inmersión fría de grado comercial.",
  },
  {
    num: "06",
    title: "CrossFit Boxes",
    body: "Recuperación post-WOD validada por atletas. Aumenta retención y add-ons en tu box.",
  },
  {
    num: "07",
    title: "Clínicas y Fisioterapia",
    body: "Crioterapia y recuperación para medicina deportiva, fisioterapia y rehabilitación.",
  },
  {
    num: "08",
    title: "Equipos Deportivos",
    body: "Solución de recuperación para clubes profesionales, academias y centros de alto rendimiento.",
  },
];

const PRODUCTS = [
  {
    name: "MF Barrel",
    image: "/images/prod-barrel.png",
    price: "$69,000 MXN",
    body: "Sistema de 3 filtros + purificación por ozono. Control WiFi programable. Certificación CE. 6 meses de garantía.",
    href: "/productos/mf-barrel",
  },
  {
    name: "MF Horizon",
    image: "/images/prod-horizon.png",
    price: "$74,000 MXN",
    body: "Sistema de 3 filtros + purificación por ozono. Control WiFi programable. Certificación CE. 6 meses de garantía.",
    href: "/productos/mf-horizon",
  },
  {
    name: "MF ONE",
    image: "/images/prod-mfone.png",
    price: "$169,000 MXN",
    body: "Diseño All-In-One con chiller integrado. Filtro de 20 micrones + ozono. Certificación CE. 1 año de garantía.",
    href: "/productos/mf-one",
  },
];

const WHY_BLOCKS = [
  {
    num: "01",
    tag: "Cold plunge comercial",
    title: "Diseñado para operación intensiva",
    body: "Construido para resistir el uso diario de gimnasios, hoteles y centros de recuperación. Componentes de grado comercial probados en más de 100 instalaciones activas en México.",
    bullets: [
      "Chiller industrial con capacidad de enfriamiento continuo",
      "Filtración de 3 etapas + purificación por ozono",
    ],
  },
  {
    num: "02",
    tag: "Soporte real, personas reales",
    title: "Soporte 24/7 desde México",
    body: "Equipo técnico mexicano disponible por teléfono y WhatsApp. Tiempo de respuesta promedio menor a 2 horas. Sin call centers ni tickets eternos. Hablas con alguien que conoce tu equipo desde el primer minuto.",
    bullets: [
      "Atención 100% en español, sin chatbots",
      "WhatsApp directo con técnico asignado",
    ],
  },
  {
    num: "03",
    tag: "App Mente Fria",
    title: "Monitoreo remoto en tiempo real",
    body: "Dashboard centralizado para administrar uno o varios equipos desde tu celular. Temperatura, ciclos de filtración, ozono y alertas de mantenimiento, con control total desde donde estés.",
    bullets: [
      "Monitoreo multi-sucursal con un solo login",
      "Alertas push cuando algo necesita atención",
    ],
  },
];

const LEASING_STATS = [
  {
    value: "100%",
    label: "Beneficio fiscal",
    body: "Renta deducible al 100%. Aprovecha el beneficio fiscal del leasing según el régimen aplicable a tu empresa.",
  },
  {
    value: "5%",
    label: "Valor residual",
    body: "Opción de compra al final del plazo con solo 5% del valor del equipo.",
  },
  {
    value: "24",
    label: "Hasta 24 meses",
    body: "Elige el plazo que se ajuste a tu flujo de caja: 12 o 24 mensualidades.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Cotización personalizada",
    body: "Llenas el formulario, Rafa te contacta en menos de 24 horas hábiles y arma tu propuesta con modelo recomendado, plan de leasing y proyección de ROI.",
  },
  {
    num: "02",
    title: "Aprobación crediticia",
    body: "Integramos juntos el expediente de leasing (RFC, comprobantes, estados financieros). Aprobación en 3 a 7 días hábiles sin tocar tu línea bancaria.",
  },
  {
    num: "03",
    title: "Entrega e instalación",
    body: "Coordinamos entrega a nivel nacional. Plug-and-play: no requiere obra civil. Tu equipo queda operando el mismo día de la entrega.",
  },
  {
    num: "04",
    title: "Capacitación y soporte",
    body: "Entrenamos a tu staff en operación, limpieza y protocolos de seguridad. Soporte técnico 24/7 incluido durante todo el plazo del leasing.",
  },
];

const FAQ_ITEMS = [
  {
    q: "¿Cómo funciona el esquema de leasing y su beneficio fiscal?",
    a: "Adquieres el equipo a 12 o 24 meses con un anticipo del 10% más una comisión de apertura del 2%. Al final del plazo ejerces la opción de compra con un valor residual del 5%. La renta mensual es deducible al 100% según el régimen fiscal aplicable a tu empresa — consulta con tu contador el tratamiento exacto para tu caso.",
  },
  {
    q: "¿Necesito buró de crédito empresarial?",
    a: "Realizamos una evaluación crediticia sencilla con tu RFC, comprobantes y estados financieros. La aprobación toma de 3 a 7 días hábiles y no toca tu línea de crédito bancaria.",
  },
  {
    q: "¿Incluye instalación y entrega?",
    a: "Sí. Coordinamos entrega a nivel nacional y los equipos son plug-and-play: no requieren obra civil ni plomería. Tu equipo queda operando el mismo día de la entrega.",
  },
  {
    q: "¿Qué pasa si necesito soporte durante el leasing?",
    a: "El soporte técnico 24/7 desde México está incluido durante todo el plazo del leasing. Tienes WhatsApp directo con un técnico asignado que conoce tu equipo, con tiempo de respuesta promedio menor a 2 horas.",
  },
  {
    q: "¿Puedo adquirir varias unidades para múltiples sucursales?",
    a: "Sí. Ofrecemos descuentos por volumen para proyectos multi-unidad y la app Mente Fria te permite monitorear todas tus sucursales desde un solo login, con alertas y control centralizado.",
  },
  {
    q: "¿Qué modelo me conviene según el uso?",
    a: "MF Barrel es ideal para espacios compactos, MF Horizon ofrece mayor espacio de inmersión, y MF ONE es la opción de grado comercial all-in-one para operación intensiva. Un especialista B2B te recomienda el modelo según el flujo de usuarios de tu negocio.",
  },
];

export default function NegociosPage() {
  return (
    <PageShell>
      {/* ── 1. HERO (dark) ─────────────────────────────────── */}
      <section className="relative flex min-h-[80vh] items-center bg-black text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-mfone.png"
            alt="Cold plunge Mente Fria en un espacio comercial"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="container-edge relative z-10 py-24">
          <Reveal>
            <p className="eyebrow mb-4 !text-white">Cold Plunge #1 en México</p>
            <h1 className="display-lg mb-6 max-w-3xl text-white">
              Usa el wellness para incrementar las utilidades de tu negocio
            </h1>
            <p className="body-lg mb-10 max-w-lg !text-white/70">
              La cold-plunge comercial #1 en México.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#cotizar"
                className="btn-pill bg-white text-black hover:bg-white/90"
              >
                Cotiza ahora
              </a>
              <Link
                href="/productos"
                className="btn-pill border border-white/40 text-white hover:bg-white/10"
              >
                Ver productos
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. COTIZACIÓN B2B ──────────────────────────────── */}
      <section id="cotizar" className="section-y bg-warm">
        <div className="container-edge">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4">Cotización B2B</p>
              <h2 className="display-md mb-6">
                Recibe tu plan personalizado en 24 horas
              </h2>
              <p className="body-lg mb-8">
                Cuéntanos sobre tu negocio y te enviamos una propuesta con el
                modelo recomendado, plan de leasing personalizado y proyección
                de ROI.
              </p>
              <ul className="space-y-4">
                {QUOTE_BULLETS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span className="body-lg !text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <QuoteForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. PARA TODO TIPO DE NEGOCIO ───────────────────── */}
      <section className="section-y bg-background">
        <div className="container-edge">
          <SectionHeader
            eyebrow="Para todo tipo de negocio"
            title="Diseñado para los espacios más exigentes de México"
            subtitle="De hoteles 5 estrellas a gimnasios boutique, spas, centros wellness y equipos profesionales. Mente Fria se adapta a la operación premium de cada espacio."
            center
            className="mb-14"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BUSINESS_TYPES.map((b, i) => (
              <Reveal
                key={b.num}
                delay={(i % 4) * 80}
                className="rounded-2xl border border-line p-7"
              >
                <p className="text-4xl font-light text-ink-faint">{b.num}</p>
                <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {b.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PRODUCTOS ───────────────────────────────────── */}
      <section className="section-y bg-warm">
        <div className="container-edge">
          <SectionHeader
            title="Encuentra la cold plunge perfecta para tu negocio"
            center
            className="mb-14"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal
                key={p.name}
                delay={(i % 3) * 80}
                className="flex flex-col overflow-hidden rounded-3xl border border-line bg-background"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="400px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow mb-2">{p.price}</p>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {p.body}
                  </p>
                  <Link
                    href={p.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
                  >
                    Ver detalles
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CALCULADORA ROI ─────────────────────────────── */}
      <section id="roi" className="section-y bg-background">
        <div className="container-edge">
          <SectionHeader
            eyebrow="Calculadora ROI"
            title="Calcula cuándo recuperas tu inversión"
            subtitle="Simula tu retorno con base en el modelo, plazo del leasing y cuántas inmersiones cobras al mes. Los números se actualizan en tiempo real."
            center
            className="mb-14"
          />
          <RoiCalculator />
        </div>
      </section>

      {/* ── 6. POR QUÉ MENTE FRIA ──────────────────────────── */}
      <section className="section-y bg-warm">
        <div className="container-edge">
          <SectionHeader
            eyebrow="Por qué Mente Fria"
            title="El #1 Cold Plunge Comercial en México"
            subtitle="Soporte 24/7, garantía extendida, app de monitoreo y diseño pensado para operación intensiva. Todo lo que necesitas para escalar sin sobresaltos."
            className="mb-14"
          />
          <div className="space-y-5">
            {WHY_BLOCKS.map((w, i) => (
              <Reveal
                key={w.num}
                delay={i * 80}
                className="rounded-3xl border border-line bg-background p-8 sm:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-14">
                  <p className="text-5xl font-light text-ink-faint">{w.num}</p>
                  <div>
                    <p className="eyebrow mb-3">{w.tag}</p>
                    <h3 className="heading-sm">{w.title}</h3>
                    <p className="body-lg mt-4 max-w-3xl">{w.body}</p>
                    <ul className="mt-6 space-y-3">
                      {w.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                          <span className="text-sm text-ink-soft">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. LEASING (dark) ──────────────────────────────── */}
      <section className="section-y bg-black text-white">
        <div className="container-edge">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4 !text-white">Leasing Mente Fria</p>
            <h2 className="display-md">
              Beneficio fiscal para tu empresa. Sin descapitalizarte.
            </h2>
            <p className="body-lg mt-5 !text-white/70">
              Adquiere tu equipo a 12 o 24 meses sin descapitalizarte. Al final
              del plazo, ejerces opción de compra con valor residual del 5%.
              Sin tocar tu línea de crédito bancaria.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-10 border-t border-white/15 pt-12 sm:grid-cols-3">
            {LEASING_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <p className="display-lg text-white">{s.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                  {s.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-white/15 pt-8">
            {[
              ["Anticipo", "10%"],
              ["Valor residual", "5%"],
              ["Comisión apertura", "2%"],
            ].map(([label, value]) => (
              <p
                key={label}
                className="text-xs uppercase tracking-[0.16em] text-white/60"
              >
                {label} <span className="ml-1 font-semibold text-white">{value}</span>
              </p>
            ))}
          </Reveal>
          <Reveal className="mt-10">
            <a
              href="#roi"
              className="btn-pill bg-white text-black hover:bg-white/90"
            >
              Calcular mi ROI
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-white/50">
              Montos en pesos mexicanos. Sujeto a aprobación crediticia. Cifras
              informativas. El tratamiento fiscal del leasing depende del
              régimen contable elegido; consulta a tu contador.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 8. PROCESO ─────────────────────────────────────── */}
      <section className="section-y bg-background">
        <div className="container-edge">
          <SectionHeader
            eyebrow="Proceso paso a paso"
            title="Así de simple es equipar tu negocio"
            subtitle="De la primera llamada a tu equipo operando: proceso transparente en menos de 3 semanas."
            center
            className="mb-14"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal
                key={s.num}
                delay={(i % 4) * 80}
                className="rounded-2xl border border-line p-7"
              >
                <p className="text-4xl font-light text-ink-faint">{s.num}</p>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ B2B ─────────────────────────────────────── */}
      <section className="section-y bg-warm">
        <div className="container-edge">
          <SectionHeader
            eyebrow="Preguntas frecuentes B2B"
            title="Todo lo que necesitas saber antes de cotizar"
            center
            className="mb-14"
          />
          <FAQ items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ── 10. CTA FINAL (dark) ───────────────────────────── */}
      <CTASection
        title="Mente Fria para Negocios"
        body="Equipa tu espacio con la tecnología de recuperación que están adoptando las marcas más exigentes de México."
        cta={{ label: "Cotiza ahora", href: "#cotizar" }}
        dark
      />
    </PageShell>
  );
}
