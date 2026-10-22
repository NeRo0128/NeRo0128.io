# NeRo0128.io

Portafolio y CV personal de Rodolfo Castillo Vega. Sitio totalmente estático con una página
por idioma: español en `/` e inglés en `/en/`.

## Stack

- [Astro 7](https://docs.astro.build) (output estático, sin framework de cliente)
- Tailwind CSS v4 vía `@tailwindcss/vite`; los design tokens viven en `src/styles/global.css`
- TypeScript (`astro/tsconfigs/strict`)
- Fuentes self-hosted con Fontsource e iconos Material Symbols

## Comandos

| Comando | Acción |
| :-- | :-- |
| `npm install` | Instala dependencias (Node >= 22.23.4) |
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npx astro dev --background` | Servidor en segundo plano; se controla con `npx astro dev status\|logs\|stop` |
| `npm run build` | Genera el sitio en `dist/` |
| `npm run preview` | Sirve el build localmente |

No hay scripts de test, lint ni typecheck.

## Estructura

```text
src/
├── components/        # Secciones de la landing + primitivas en ui/
├── data/              # Contenido de servicios, casos y trayectoria (por idioma)
├── i18n/              # Diccionario de textos y helpers de idioma
├── layouts/Layout.astro
├── pages/             # index.astro (es) y en/index.astro (en)
└── styles/global.css  # Tema Tailwind v4 y clases custom
public/                # Favicons e imágenes
```

Las dos páginas están duplicadas a propósito: cualquier cambio de estructura debe aplicarse a
`src/pages/index.astro` y `src/pages/en/index.astro`.

## Despliegue

El sitio se publica en [Vercel](https://vercel.com) desde este repositorio de GitHub (rama
`main`). El preset de Astro se detecta automáticamente: comando `npm run build`, salida
estática en `dist/`. No se necesita adaptador de Astro, `vercel.json` ni variables de entorno
mientras el sitio siga siendo estático.

## Notas

- El formulario de contacto es un stub: simula el envío, no hay backend todavía.
