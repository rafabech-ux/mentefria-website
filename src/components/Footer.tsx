import Link from "next/link";
import { Logo } from "@/components/Logo";

/*
  Footer (ported from Claude Design site_v2): giant MIND OVER BODY cta,
  newsletter pill, four link columns, hairline bottom bar.
*/

const cols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Productos",
    links: [
      { label: "MF ONE", href: "/productos/mf-one" },
      { label: "MF Horizon", href: "/productos/mf-horizon" },
      { label: "MF Barrel", href: "/productos/mf-barrel" },
      { label: "Motores & Accesorios", href: "/accesorios" },
      { label: "Para Negocios", href: "/negocios" },
    ],
  },
  {
    title: "Aprender",
    links: [
      { label: "La Ciencia", href: "/aprender" },
      { label: "Atletas", href: "/atletas" },
      { label: "Reseñas", href: "/resenas" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Centro de Ayuda", href: "/soporte" },
      { label: "Garantía", href: "/garantia" },
      { label: "Devoluciones", href: "/devoluciones" },
      { label: "Términos y Condiciones", href: "/terminos" },
      { label: "Aviso de Privacidad", href: "/privacidad" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mfooter">
      <div className="mwrap">
        <div className="mfooter-cta">
          <h2>Mind over body.</h2>
          <Link href="/productos/mf-one" className="mbtn mbtn-blue">
            Compra el MF ONE
          </Link>
          <form className="mfooter-news" action="#">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              aria-label="Correo electrónico"
            />
            <button
              type="submit"
              className="mbtn mbtn-chrome !px-[22px] !py-[14px]"
              aria-label="Suscribirme"
            >
              →
            </button>
          </form>
        </div>

        <div className="mfooter-cols">
          <div>
            <Logo variant="white" className="h-6 w-auto" />
            <p className="blurb">
              La Cold Plunge #1 en México. Recuperarte y rendir al máximo desde
              casa.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h5>{c.title}</h5>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mfooter-bot">
          <span>© 2026 Mente Fria · Hecho en México</span>
          <span>@mentefria.therapy · TikTok @mentefria___</span>
        </div>
      </div>
    </footer>
  );
}
