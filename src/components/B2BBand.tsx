import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";

/*
  Banda B2B — acceso visible a la landing "Para Negocios" (/negocios).
  Contraste claro (mist) frente al CTA final oscuro del footer, con el
  botón "Cotiza para tu negocio" como acción principal.
*/

export function B2BBand() {
  return (
    <section className="bg-mist text-foreground">
      <div className="container-edge section-y">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Mente Fria para Negocios</p>
            <h2 className="display-md">
              ¿Tienes un gimnasio, hotel, spa o clínica?
            </h2>
            <p className="body-lg mt-4">
              Usa el wellness para incrementar las utilidades de tu negocio.
              Leasing a 12 o 24 meses, calculadora de ROI y soporte 24/7.
            </p>
          </div>
          <Link href="/negocios" className="btn-pill btn-ink shrink-0">
            Cotiza para tu negocio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
