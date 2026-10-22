// src/i18n/utils.ts
import { ui, defaultLang, type Lang, type UIKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if (first in ui) return first as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Devuelve la ruta equivalente en el otro idioma */
export function getOtherLangPath(url: URL): string {
  const lang = getLangFromUrl(url);
  if (lang === "es") return "/en/";
  return "/";
}

/** Devuelve el código del idioma al que se cambiará */
export function getOtherLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}
