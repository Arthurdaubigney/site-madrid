import { readFileSync } from "node:fs";

const manifest = JSON.parse(readFileSync(new URL("./data/images.json", import.meta.url), "utf8"));

export const imageInfo = (slug) => {
  const m = manifest[slug];
  if (!m) throw new Error(`Imagen desconocida: ${slug}`);
  return m;
};

/** Proporción de marco: la natural de la foto, limitada para que ninguna pieza quede minúscula. */
export const frameRatio = (slug, min = 0.75, max = 1.4) => {
  const m = imageInfo(slug);
  return Math.min(max, Math.max(min, m.w / m.h)).toFixed(4);
};
/** "cover" si el marco respeta la forma de la foto (sin recorte apreciable); "contain" si hubo que limitarla. */
export const fitFor = (slug, min = 0.75, max = 1.4) => {
  const r = imageInfo(slug).w / imageInfo(slug).h;
  return r >= min - 0.03 && r <= max + 0.03 ? "cover" : "contain";
};
export const ratioStyle = (slug, min, max) => `aspect-ratio:${frameRatio(slug, min, max)};--ar:${frameRatio(slug, min, max)}`;

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

/**
 * <img> responsive con alt y title descriptivos (SEO), dimensiones intrínsecas (sin CLS)
 * y carga diferida salvo que sea la imagen principal (LCP).
 */
export function pic(slug, { sizes = "100vw", eager = false, alt, cls = "", pos, fit } = {}) {
  const m = imageInfo(slug);
  const text = esc(alt || m.alt);
  const srcset = m.widths.map((w) => `/img/${slug}-${w}.webp ${w}w`).join(", ");
  const src = `/img/${slug}-${m.widths.includes(800) ? 800 : m.widths.at(-1)}.webp`;
  // La pieza se muestra entera (object-fit: contain); el sobrante toma el color del fondo de la foto.
  const bg = `background:linear-gradient(${m.bgt},${m.bgb})`;
  const style = ` style="${bg}${fit ? `;object-fit:${fit}` : ""}${pos ? `;object-position:${pos}` : ""}"`;
  return `<img${cls ? ` class="${cls}"` : ""} src="${src}" srcset="${srcset}" sizes="${sizes}" width="${m.w > 1800 ? 1800 : m.w}" height="${Math.round((m.w > 1800 ? 1800 : m.w) * m.h / m.w)}" alt="${text}" title="${text}"${eager ? ' fetchpriority="high" decoding="async"' : ' loading="lazy" decoding="async"'}${style}>`;
}
