// Generador del sitio estático: ensambla páginas, estilos, scripts, sitemap y robots en dist/.
import { mkdirSync, rmSync, writeFileSync, readFileSync, cpSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { createHash } from "node:crypto";
import { SITE, TALLY_FORM_ID } from "./src/config.mjs";
import { renderPage } from "./src/layout.mjs";
import home from "./src/pages/home.mjs";
import services from "./src/pages/services.mjs";
import categories from "./src/pages/categories.mjs";
import zones from "./src/pages/zones.mjs";
import info from "./src/pages/info.mjs";

const root = dirname(new URL(import.meta.url).pathname);
const dist = join(root, "dist");
const pages = [...home, ...services, ...categories, ...zones, ...info];

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
if (existsSync(join(root, "public"))) cpSync(join(root, "public"), dist, { recursive: true });

// CSS: se incrusta en cada página (sin petición que bloquee el render) tras una minificación sencilla.
const css = readFileSync(join(root, "src/styles/main.css"), "utf8")
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\s+/g, " ")
  .replace(/\s*([{};,>])\s*/g, "$1")
  .replace(/;}/g, "}")
  .trim();

mkdirSync(join(dist, "assets"), { recursive: true });
const js = readFileSync(join(root, "src/scripts/main.js"), "utf8");
// El nombre del script lleva su huella: cada versión tiene una URL nueva y ningún navegador conserva una antigua.
const jsHash = createHash("sha1").update(js).digest("hex").slice(0, 8);
const jsPath = `/assets/main.${jsHash}.js`;
writeFileSync(join(dist, jsPath), js);

const write = (rel, content) => {
  const f = join(dist, rel);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, content);
};

const problems = [];
for (const p of pages) {
  const rel = p.path === "/" ? "index.html" : join(p.path, "index.html");
  write(rel, renderPage(p, css, jsPath));
  const t = p.title.length, d = p.description.length;
  if (t < 50 || t > 62) problems.push(`título ${t} car.: ${p.path}`);
  if (d < 140 || d > 158) problems.push(`descripción ${d} car.: ${p.path}`);
}

// 404
write("404.html", renderPage({
  path: "/404.html", title: "Página no encontrada | Galería Anticuaria Aldaba", description: "La página que busca no existe. Vuelva al inicio de la Galería Anticuaria Aldaba, anticuario y tasador en Madrid.",
  noindex: true, form: false, bare: true, crumbs: [], hero: { img: "salon-tesse" },
  blocks: [{ t: "doc", h1: "Página no encontrada", sections: [["Esta dirección no existe", '<p>Puede que el enlace haya cambiado. Vuelva al <a href="/">inicio</a> o <a href="/contacto/#formulario">solicite una tasación gratuita</a>.</p>']] }],
}, css, jsPath));

// sitemap + robots + favicon
const urls = pages.map((p) => `<url><loc>${SITE.url}${p.path}</loc><changefreq>monthly</changefreq><priority>${p.path === "/" ? "1.0" : p.path.split("/").length > 4 ? "0.6" : "0.8"}</priority></url>`).join("");
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
write("favicon.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><rect width="30" height="30" fill="#f6f1e7"/><g fill="none" stroke="#6e1e2c" stroke-width="1.6"><path d="M5 27V13a10 10 0 0 1 20 0v14"/><circle cx="15" cy="17" r="4.2"/></g><circle cx="15" cy="10" r="1.4" fill="#6e1e2c"/></svg>`);

console.log(`✔ ${pages.length} páginas generadas en dist/ · Tally: ${TALLY_FORM_ID ? "configurado" : "pendiente (tarjeta de contacto)"}`);
if (problems.length) console.log("⚠ SEO:\n  " + problems.join("\n  "));
