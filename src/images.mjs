import { readFileSync } from "node:fs";

const manifest = JSON.parse(readFileSync(new URL("./data/images.json", import.meta.url), "utf8"));

export const imageInfo = (slug) => {
  const m = manifest[slug];
  if (!m) throw new Error(`Imagen desconocida: ${slug}`);
  return m;
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

/**
 * <img> responsive con alt y title descriptivos (SEO), dimensiones intrínsecas (sin CLS)
 * y carga diferida salvo que sea la imagen principal (LCP).
 */
export function pic(slug, { sizes = "100vw", eager = false, alt, cls = "", pos } = {}) {
  const m = imageInfo(slug);
  const text = esc(alt || m.alt);
  const srcset = m.widths.map((w) => `/img/${slug}-${w}.webp ${w}w`).join(", ");
  const src = `/img/${slug}-${m.widths.includes(800) ? 800 : m.widths.at(-1)}.webp`;
  const style = pos ? ` style="object-position:${pos}"` : "";
  return `<img${cls ? ` class="${cls}"` : ""} src="${src}" srcset="${srcset}" sizes="${sizes}" width="${m.w > 1800 ? 1800 : m.w}" height="${Math.round((m.w > 1800 ? 1800 : m.w) * m.h / m.w)}" alt="${text}" title="${text}"${eager ? ' fetchpriority="high" decoding="async"' : ' loading="lazy" decoding="async"'}${style}>`;
}
