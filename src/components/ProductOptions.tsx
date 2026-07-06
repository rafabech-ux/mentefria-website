"use client";

import { createContext, useContext, useState } from "react";

/*
  Opciones de producto para los PDPs (patrón Plunge):
  el selector de color y el add-on viven en la columna derecha,
  arriba de los CTAs; la galería del stage (columna izquierda)
  reacciona al color elegido vía contexto. Cada color tiene su
  propio set de imágenes (negro → solo negras, blanco → solo blancas).
*/

type Color = "Negro" | "Blanco";
type Variant = { color: Color; images: string[] };

const Ctx = createContext<{
  color: Color;
  setColor: (c: Color) => void;
  slide: number;
  setSlide: (i: number) => void;
  variants: Variant[];
} | null>(null);

function useProductOptions() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("ProductOptions.* debe usarse dentro de <ProductOptionsProvider>");
  return ctx;
}

export function ProductOptionsProvider({
  variants,
  defaultColor = "Negro",
  children,
}: {
  variants: Variant[];
  defaultColor?: Color;
  children: React.ReactNode;
}) {
  const [color, setColorRaw] = useState<Color>(defaultColor);
  const [slide, setSlide] = useState(0);
  const setColor = (c: Color) => {
    setColorRaw(c);
    setSlide(0); // al cambiar de color, regresa a la foto frontal
  };
  return (
    <Ctx.Provider value={{ color, setColor, slide, setSlide, variants }}>
      {children}
    </Ctx.Provider>
  );
}

/* ---- Columna izquierda: galería (imagen principal + slides) ---- */
export function ProductStage({ alt }: { alt: string }) {
  const { color, variants, slide, setSlide } = useProductOptions();
  const images = (variants.find((v) => v.color === color) ?? variants[0]).images;
  const current = images[Math.min(slide, images.length - 1)];

  return (
    <div>
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[18px] [background:var(--grad-silver)] lg:aspect-square">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current}
          src={current}
          alt={`${alt} — color ${color.toLowerCase()}`}
          className="h-full w-full object-cover mix-blend-multiply duration-500 animate-in fade-in"
        />
      </div>

      {/* Slides (solo si hay más de una imagen) */}
      {images.length > 1 && (
        <div className="no-scrollbar mt-3 flex gap-2.5 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setSlide(i)}
              aria-label={`Foto ${i + 1}`}
              aria-current={slide === i}
              className={`relative aspect-square w-[72px] flex-none overflow-hidden rounded-[10px] transition-all duration-200 ${
                slide === i
                  ? "ring-2 ring-[var(--accent-ice)] ring-offset-2 ring-offset-[var(--bg-metal)]"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---- Columna derecha: selector de color (arriba de los CTAs) ---- */
export function ColorPicker() {
  const { color, setColor, variants } = useProductOptions();
  return (
    <div className="mt-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--fg-muted)]">
        Color · {color}
      </p>
      <div className="mt-3 flex gap-2.5">
        {variants.map((v) => (
          <button
            key={v.color}
            onClick={() => setColor(v.color)}
            aria-label={`Color ${v.color}`}
            aria-pressed={color === v.color}
            className={`h-9 w-9 rounded-full border transition-all duration-200 ${
              v.color === "Negro"
                ? "border-transparent bg-[#0e1013]"
                : "border-[var(--line-2)] bg-white"
            } ${
              color === v.color
                ? "ring-2 ring-[var(--accent-ice)] ring-offset-2 ring-offset-[var(--bg-metal)]"
                : "opacity-70 hover:opacity-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---- Add-on estilo Plunge Basin (solo MF ONE): thumbnail + precio +
        botón checkbox "Sí, agregar". El thumbnail sigue el color elegido. ---- */
export function AddonCard({
  name,
  description,
  price,
  basePrice,
  imgByColor,
}: {
  name: string;
  description: string;
  price: number;
  basePrice: number;
  imgByColor: Record<Color, string>;
}) {
  const { color } = useProductOptions();
  const [added, setAdded] = useState(false);
  const fmt = (n: number) => "$" + n.toLocaleString("en-US");

  return (
    <div className="mt-6 max-w-md">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--fg-muted)]">
        Complemento
      </p>
      <div
        className={`mt-3 rounded-[14px] border bg-white p-4 transition-colors duration-200 ${
          added ? "border-[var(--accent-ice)]" : "border-[var(--line-1)]"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="h-20 w-36 flex-none overflow-hidden rounded-[10px] bg-[var(--bg-panel)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={imgByColor[color]}
              src={imgByColor[color]}
              alt={name}
              className="h-full w-full scale-[1.35] object-cover mix-blend-multiply duration-300 animate-in fade-in"
            />
          </div>
          <div className="min-w-0">
            <p className="text-[14px] font-semibold">{name}</p>
            <p className="mt-0.5 text-[12.5px] leading-snug text-[var(--fg-muted)]">
              {description}
            </p>
            <p className="mt-1 text-[13px] font-semibold">
              {fmt(price)} <span className="font-normal text-[var(--fg-subtle)]">MXN</span>
            </p>
          </div>
        </div>
        <button
          onClick={() => setAdded(!added)}
          aria-pressed={added}
          className={`mt-3 flex w-full items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
            added
              ? "border-transparent bg-[var(--accent-ice)] text-white"
              : "border-[var(--line-2)] text-[var(--fg-metal)] hover:border-[var(--accent-ice)] hover:text-[var(--accent-ice)]"
          }`}
        >
          {added ? "✓ Agregado a tu pedido" : "Sí, quiero agregarlo"}
        </button>
        {added && (
          <p className="mt-2.5 text-center text-[12px] text-[var(--fg-muted)]">
            Total: <span className="font-semibold text-[var(--fg-metal)]">{fmt(basePrice + price)} MXN</span>
          </p>
        )}
      </div>
    </div>
  );
}
