import { PageShell } from "@/components/PageShell";
import { SubHero } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Garantía | Mente Fria",
  description: "Conoce la cobertura de garantía de los productos Mente Fria.",
};

export default function GarantiaPage() {
  return (
    <PageShell>
      <SubHero
        eyebrow="Soporte"
        title="Garantía"
        subtitle="Tu inversión está protegida. Fabricamos para durar y respaldamos cada unidad."
        tone="warm"
      />

      <section className="section-y bg-background">
        <div className="container-edge">
          <Reveal>
            <article className="container-prose">
              <p className="body-lg text-ink-soft mb-10">
                <em>Texto de ejemplo — pendiente de revisión legal.</em>
              </p>

              <h2 className="heading-sm mb-4">Cobertura por producto</h2>
              <p className="body-lg text-ink-soft mb-6">
                Todos los productos Mente Fria pasan un control de calidad antes de enviarse. La garantía cubre
                defectos de fabricación o materiales bajo uso normal:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-ink-soft body-lg">
                <li>
                  <strong>MF ONE</strong> — 1 año (12 meses) a partir de la fecha de entrega.
                </li>
                <li>
                  <strong>MF Barrel / MF Horizon</strong> — 6 meses a partir de la fecha de entrega.
                </li>
              </ul>

              <h2 className="heading-sm mb-4">Qué cubre la garantía</h2>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-ink-soft body-lg">
                <li>Defectos de fabricación en materiales o mano de obra.</li>
                <li>Fallas atribuibles al proceso de manufactura bajo uso normal.</li>
                <li>Piezas o componentes que fallen por causas imputables a la producción.</li>
              </ul>

              <h2 className="heading-sm mb-4">Qué no cubre la garantía</h2>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-ink-soft body-lg">
                <li>Daños por caídas, golpes o uso inadecuado del producto.</li>
                <li>Daños causados por mal uso o negligencia.</li>
                <li>Desgaste natural de consumibles y accesorios.</li>
                <li>Modificaciones no autorizadas.</li>
              </ul>

              <h2 className="heading-sm mb-4">Cómo hacer válida la garantía</h2>
              <p className="body-lg text-ink-soft mb-4">
                Notifica lo antes posible a través de cualquiera de nuestros medios de contacto. Si el producto
                llegó dañado, contáctanos dentro de las <strong>24 horas</strong> posteriores a la recepción.
              </p>
              <p className="body-lg text-ink-soft mb-6">
                Mente Fria cubre todos los costos de envío de devolución y reemplazo por defecto de fabricación.
                Ofrecemos atención de por vida por los mismos medios de comunicación.
              </p>

              <div className="border border-line rounded-xl p-6 mt-8">
                <p className="body-lg text-ink-soft">
                  <strong>Contacto:</strong>{" "}
                  <a href="/soporte" className="underline">mentefria.com/soporte</a>
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
