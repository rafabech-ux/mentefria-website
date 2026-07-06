"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

/*
  Calculadora de ROI para leasing B2B de Mente Fria.
  Cálculos en tiempo real, sin backend ni gráficas.
*/

const MODELS = [
  { name: "Barrel Pro", price: 69000 },
  { name: "Barrel Premium", price: 84000 },
  { name: "Barrel Comercial", price: 114000 },
  { name: "Horizon Pro", price: 74000 },
  { name: "Horizon Premium", price: 89000 },
  { name: "Horizon Comercial", price: 119000 },
  { name: "MF ONE", price: 169000 },
];

const mxn = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

function StatCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-background p-6">
      <p className="eyebrow !text-[11px]">{label}</p>
      <p className="mt-3 text-3xl font-medium tracking-tight text-foreground">
        {value}
      </p>
      <p className="mt-2 text-xs text-ink-faint">{note}</p>
    </div>
  );
}

export function RoiCalculator() {
  const [modelIndex, setModelIndex] = useState(3); // Horizon Pro por default
  const [plazo, setPlazo] = useState<12 | 24>(24);
  const [inmDia, setInmDia] = useState(5);
  const [precioInm, setPrecioInm] = useState(200);

  const results = useMemo(() => {
    const precio = MODELS[modelIndex].price;
    const inversionInicial = precio * 0.12;
    const rentaMensual = (precio * 0.9 * (plazo === 24 ? 1.3 : 1.15)) / plazo;
    const ingresoMensual = inmDia * 30 * precioInm;
    const utilidadMensual = ingresoMensual - rentaMensual;
    const breakEvenInmDia = Math.ceil(rentaMensual / (30 * precioInm));
    const mesesRecuperarEnganche = Math.ceil(
      inversionInicial / Math.max(utilidadMensual, 1),
    );
    const flujoAcumuladoFinal = utilidadMensual * plazo - inversionInicial;
    return {
      inversionInicial,
      rentaMensual,
      ingresoMensual,
      utilidadMensual,
      breakEvenInmDia,
      mesesRecuperarEnganche,
      flujoAcumuladoFinal,
    };
  }, [modelIndex, plazo, inmDia, precioInm]);

  const inputClasses =
    "w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-black/20";

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* ── Panel de parámetros ─────────────────────────────── */}
      <div className="rounded-3xl border border-line bg-warm p-8">
        <p className="eyebrow mb-6">Parámetros</p>

        <div className="space-y-6">
          {/* Modelo */}
          <div>
            <label htmlFor="roi-modelo" className="eyebrow mb-2 block !text-[11px]">
              Modelo
            </label>
            <select
              id="roi-modelo"
              value={modelIndex}
              onChange={(e) => setModelIndex(Number(e.target.value))}
              className={inputClasses}
            >
              {MODELS.map((m, i) => (
                <option key={m.name} value={i}>
                  {m.name} · {mxn.format(m.price)}
                </option>
              ))}
            </select>
          </div>

          {/* Plazo */}
          <div>
            <p className="eyebrow mb-2 !text-[11px]">Plazo del leasing</p>
            <div className="grid grid-cols-2 gap-2 rounded-xl border border-line bg-background p-1">
              {([12, 24] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPlazo(p)}
                  className={cn(
                    "rounded-lg py-2.5 text-sm font-medium transition-colors",
                    plazo === p
                      ? "bg-black text-white"
                      : "text-ink-soft hover:text-foreground",
                  )}
                >
                  {p} meses
                </button>
              ))}
            </div>
          </div>

          {/* Inmersiones por día */}
          <div>
            <div className="mb-2 flex items-baseline justify-between">
              <label htmlFor="roi-inmersiones" className="eyebrow !text-[11px]">
                Inmersiones por día
              </label>
              <span className="text-sm font-medium text-foreground">
                {inmDia}/día
              </span>
            </div>
            <input
              id="roi-inmersiones"
              type="range"
              min={1}
              max={40}
              value={inmDia}
              onChange={(e) => setInmDia(Number(e.target.value))}
              className="w-full accent-black"
            />
            <p className="mt-2 text-xs text-ink-faint">
              Contando 30 días al mes. Una sesión dura ~3 minutos.
            </p>
          </div>

          {/* Precio promedio por inmersión */}
          <div>
            <label htmlFor="roi-precio" className="eyebrow mb-2 block !text-[11px]">
              Precio promedio por inmersión (MXN)
            </label>
            <input
              id="roi-precio"
              type="number"
              min={1}
              value={precioInm}
              onChange={(e) =>
                setPrecioInm(Math.max(1, Number(e.target.value) || 1))
              }
              className={inputClasses}
            />
            <p className="mt-2 text-xs text-ink-faint">
              Cobro por sesión individual de cold plunge.
            </p>
          </div>
        </div>
      </div>

      {/* ── Tu proyección ───────────────────────────────────── */}
      <div>
        <p className="eyebrow mb-6">Tu proyección</p>

        <div className="grid gap-4 sm:grid-cols-2">
          <StatCard
            label="Inversión inicial"
            value={mxn.format(results.inversionInicial)}
            note="Anticipo 10% + comisión 2%"
          />
          <StatCard
            label="Renta mensual"
            value={mxn.format(results.rentaMensual)}
            note={`${plazo} meses`}
          />
          <StatCard
            label="Ingreso mensual"
            value={mxn.format(results.ingresoMensual)}
            note="Inm/día × 30 × precio"
          />
          <StatCard
            label="Utilidad mensual neta"
            value={mxn.format(results.utilidadMensual)}
            note="Ingreso − Renta"
          />
        </div>

        {/* Puntos de equilibrio */}
        <div className="mt-4 rounded-2xl border border-line bg-background p-6">
          <p className="eyebrow !text-[11px]">Puntos de equilibrio</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li className="flex items-baseline justify-between gap-4">
              <span>Inmersiones/día para cubrir la renta:</span>
              <span className="font-medium text-foreground">
                {results.breakEvenInmDia}/día
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-4">
              <span>Meses para recuperar tu enganche:</span>
              <span className="font-medium text-foreground">
                ~{results.mesesRecuperarEnganche} meses
              </span>
            </li>
          </ul>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-ink-soft">
          Al final de los {plazo} meses tu flujo acumulado es{" "}
          <strong className="text-foreground">
            {mxn.format(results.flujoAcumuladoFinal)}
          </strong>{" "}
          después de pagar el leasing y recuperar el enganche.
        </p>

        <a href="#cotizar" className="btn-pill btn-ink mt-6">
          Quiero esta proyección para mi negocio
        </a>

        <p className="mt-5 text-xs leading-relaxed text-ink-faint">
          Cifras informativas. La proyección asume que cada inmersión se cobra
          al precio definido y que tu negocio absorbe la renta del equipo. No
          incluye costos operativos ni impuestos. La cotización formal se
          entrega tras evaluación crediticia.
        </p>
      </div>
    </div>
  );
}
