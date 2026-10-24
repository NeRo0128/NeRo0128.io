// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://neroporfolio.vercel.app",

  // ─── i18n (ES por defecto, EN en /en/) ───
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false, // ES en `/`, EN en `/en/`
    },
  },

  // ─── Integraciones ───
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          en: "en-US",
        },
      },
    }),
  ],

  // ─── Tailwind v4 vía Vite ───
  vite: {
    plugins: [tailwindcss()],
  },
});
