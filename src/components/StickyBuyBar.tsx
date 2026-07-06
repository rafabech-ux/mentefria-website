"use client";

import { useEffect, useState } from "react";

/*
  Barra de compra fija (patrón WHOOP/Plunge): aparece al pasar el hero
  y acompaña todo el scroll con nombre · precio · CTA.
*/

export function StickyBuyBar({
  name: _name,
  price,
  href,
}: {
  name: string;
  price: string;
  href: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-buy ${show ? "show" : ""}`}>
      <div className="mwrap flex items-center justify-between gap-4 py-3">
        <div className="flex items-baseline gap-3">
          <span className="text-[15px] font-semibold">
            {price} <span className="text-[11px] font-normal text-[var(--fg-muted)]">MXN</span>
          </span>
        </div>
        <a href={href} target="_blank" rel="noopener noreferrer" className="mbtn mbtn-primary !py-3 !px-6">
          Agregar al carrito
        </a>
      </div>
    </div>
  );
}
