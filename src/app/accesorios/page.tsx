import { PageShell } from "@/components/PageShell";
import { SubHero, SectionHeader, FeatureCards, CTASection } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";

const maintenanceSchedule = [
  {
    interval: "Cada 3 a 5 semanas",
    task: "Drenar y rellenar el agua",
    detail: "Uso residencial típico. Con buen mantenimiento el agua puede durar hasta un mes completo.",
  },
  {
    interval: "Cada 3 a 4 semanas",
    task: "Limpiar el interior",
    detail: "Usa material NO abrasivo. Sin detergentes fuertes ni cloro — su uso invalida la garantía.",
  },
  {
    interval: "En cada cambio de agua",
    task: "Cambiar el filtro del motor",
    detail: "Obligatorio. El Kit de filtros incluye filtro de papel, filtro metálico y red de protección.",
  },
  {
    interval: "Continuo",
    task: "Desinfección por ozono",
    detail: "El sistema integrado elimina bacterias sin químicos. No agregar cloro ni productos externos.",
  },
];

const accessories = [
  {
    title: "MFONE PRO DECK",
    body: "Plataforma oficial para el MF ONE. Eleva y estabiliza el setup; integración perfecta con el equipo.",
    tag: "$6,900 MXN",
    tone: "warm" as const,
  },
  {
    title: "MF Mat",
    body: "Tapete antideslizante para tu setup. Previene caídas al salir con pies mojados y completa la experiencia visual. Recomendado.",
    tag: "Consultar",
    tone: "cool" as const,
  },
  {
    title: "Kit de Filtros",
    body: "Filtración de 3 etapas: filtro de papel, filtro metálico y red de protección. Cambiar con cada cambio de agua.",
    tag: "Consultar",
    tone: "ink" as const,
  },
  {
    title: "Cubierta protectora",
    body: "Mantiene el agua limpia y conserva la temperatura entre sesiones. Compatible con todos los modelos MF.",
    tag: "Consultar",
    tone: "warm" as const,
  },
  {
    title: "Cobertores para motores",
    body: "Protección extra para uso en exterior. Evitan la exposición directa y prolongan la vida del motor.",
    tag: "Consultar",
    tone: "cool" as const,
  },
  {
    title: "Mochila de transporte",
    body: "Para los modelos inflables Barrel y Horizon desinflados. Traslado fácil, protección total.",
    tag: "Consultar",
    tone: "ink" as const,
  },
  {
    title: "Bomba de doble acción",
    body: "Incluida con los modelos inflables. Lista en minutos para inflar tu tina sin esfuerzo.",
    tag: "Consultar",
    tone: "warm" as const,
  },
  {
    title: "Kit de reparación",
    body: "Para ajustes básicos de los modelos inflables. Mantén tu tina en condiciones óptimas en cualquier lugar.",
    tag: "Consultar",
    tone: "cool" as const,
  },
];

export default function AccesoriosPage() {
  return (
    <PageShell>
      <SubHero
        eyebrow="Accesorios"
        title="Protege y potencia tu equipo."
        subtitle="Complementos de mantenimiento y cuidado diseñados para que tu tina Mente Fria rinda al máximo sesión tras sesión."
        cta={{ label: "Ver catálogo", href: "#catalogo" }}
        tone="warm"
      />

      {/* Catálogo de accesorios */}
      <section id="catalogo" className="section-y bg-background">
        <div className="container-edge">
          <SectionHeader
            eyebrow="Tienda"
            title="Accesorios y consumibles"
            subtitle="Cada pieza está seleccionada para mantener la calidad del agua, la eficiencia del sistema y tu experiencia intacta."
            center
            className="mb-12"
          />
          <FeatureCards cards={accessories} columns={3} />
        </div>
      </section>

      {/* Calendario de mantenimiento */}
      <section className="section-y bg-warm">
        <div className="container-edge">
          <SectionHeader
            eyebrow="Cuidado"
            title="Calendario de mantenimiento"
            subtitle="Sigue estas frecuencias y tu tina estará siempre lista. Agua turbia o con olor: cambia el agua por completo y realiza mantenimiento del motor."
            center
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenanceSchedule.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex flex-col gap-3 rounded-2xl border border-line bg-background p-6 h-full">
                  <span className="eyebrow text-xs">{item.interval}</span>
                  <h3 className="text-lg font-semibold text-foreground leading-snug">
                    {item.task}
                  </h3>
                  <p className="body-lg text-ink-soft text-sm leading-relaxed flex-1">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Dudas sobre tu equipo?"
        body="Nuestro equipo técnico te orienta sobre mantenimiento, compatibilidad de accesorios y cualquier pregunta sobre tu tina Mente Fria."
        cta={{ label: "Ir a Soporte", href: "/soporte" }}
        dark
      />
    </PageShell>
  );
}
