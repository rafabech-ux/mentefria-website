# Mente Fria — Sitio web

Sitio de marketing y e-commerce de **Mente Fria**, marca mexicana premium de tinas de inmersión en frío (cold plunge). Proyecto de la materia **Negocios Inteligentes y Comercio Digital** (AI-101 Free-Stack Agentic Builder Studio), Universidad Iberoamericana, Verano 2026.

- **Alumno:** Rafael Becherano Chiprut (232870-3)
- **Profesora:** Patricia Navarro Rojas
- **Sitio en vivo:** https://mentefria-website.netlify.app

## Qué es

Una web app que presenta la marca, la línea de productos y el canal B2B de Mente Fria, con la identidad visual "MIND OVER BODY": estética metálica (acero, cromo, plata) sobre papel frío, con acento azul hielo.

## Cómo navegar el sitio

Al entrar, la barra superior (navbar) conecta todas las secciones. Guía rápida de las páginas:

- **`/` (Inicio):** landing principal con la propuesta de valor, la línea de productos, testimonios y llamados a la acción.
- **`/productos`:** vista general de las tinas. De ahí entras al detalle de cada modelo:
  - **`/productos/mf-one`** — modelo tope de línea con chiller integrado.
  - **`/productos/mf-horizon`** — modelo intermedio.
  - **`/productos/mf-barrel`** — modelo barril.
- **`/accesorios`:** motores y complementos.
- **`/negocios`:** canal B2B para hoteles, gimnasios, spas y clínicas. Incluye una **calculadora de ROI** interactiva y un **formulario de cotización**.
- **`/atletas`:** enfoque para deportistas y alto rendimiento.
- **`/aprender`:** contenido educativo sobre la práctica del frío.
- **`/blog`:** artículos de marca.
- **`/resenas`:** testimonios y reseñas de clientes.
- **`/soporte`, `/garantia`, `/devoluciones`:** atención al cliente.
- **`/terminos`, `/privacidad`:** avisos legales.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS** + **shadcn/ui**
- **TypeScript**
- Export estático (`output: "export"`)
- **Netlify** (hosting) + **GitHub** (control de versiones)

Todo en free tier.

## Correr en local

Requiere Node 24+.

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:3000
npm run build    # compila y genera la carpeta out/ (export estático)
```

## Deploy

El sitio se publica en Netlify a partir de la carpeta `out/` que genera `npm run build`. Se puede arrastrar a Netlify Drop o conectar el repo para deploy automático.

## Autor

Rafael Becherano Chiprut — [Mente Fria](https://mentefria.com)
