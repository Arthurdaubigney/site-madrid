import { SITE, NAV, CTA, TALLY_FORM_ID, LEGAL, PHONES, phoneText, phoneHref } from "./config.mjs";
import { pic, ratioStyle, imageInfo, fitFor } from "./images.mjs";

export const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const arrow = `<svg class="arrow" width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true"><path d="M1 6h15M11 1l5 5-5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const mark = `<svg class="mark" width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true"><path d="M5 27V13a10 10 0 0 1 20 0v14" stroke="currentColor" stroke-width="1.4"/><circle cx="15" cy="17" r="4.2" stroke="currentColor" stroke-width="1.4"/><circle cx="15" cy="10" r="1.3" fill="currentColor"/></svg>`;

/** Botón o enlace de acción. `kind`: primary | secondary */
export function button(label, href, kind = "primary", { arrowIcon = true, extra = "" } = {}) {
  return `<a class="btn btn--${kind}" href="${href}"${extra}>${esc(label)}${arrowIcon ? arrow : ""}</a>`;
}

export function textLink(label, href) {
  return `<a class="link" href="${href}">${esc(label)}${arrow}</a>`;
}

export const phoneLinks = (cls = "phones") => `<span class="${cls}">${PHONES.map((n) => `<a href="${phoneHref(n)}" aria-label="Llamar al ${phoneText(n)}">${phoneText(n)}</a>`).join('<span aria-hidden="true"> · </span>')}</span>`;

// ── Cabecera ───────────────────────────────────────────────────────────────
export function header(current, formHref) {
  const items = NAV.map((n) => {
    const active = current === n.href || (n.children && current.startsWith(n.href));
    const aria = active ? ' aria-current="page"' : "";
    if (!n.children) return `<li><a class="nav__link" href="${n.href}"${aria}>${esc(n.label)}</a></li>`;
    const sub = n.children.map((c) => `<li><a href="${c.href}"${current === c.href ? ' aria-current="page"' : ""}>${esc(c.label)}</a></li>`).join("");
    return `<li class="nav__item has-sub"><a class="nav__link" href="${n.href}"${aria}>${esc(n.label)}<svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="m1 1 4 4 4-4" stroke="currentColor" stroke-width="1.3"/></svg></a><ul class="nav__sub">${sub}</ul></li>`;
  }).join("");
  const sheet = NAV.map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join("");
  return `<header class="nav" id="top-nav">
  <div class="wrap nav__bar">
    <a class="skip-link" href="#contenido">Saltar al contenido</a>
    <a class="brand" href="/" aria-label="${esc(SITE.brand)}, inicio">${mark}<span class="brand__name">${esc(SITE.brand)}</span></a>
    <nav class="nav__main" aria-label="Principal"><ul>${items}</ul></nav>
    <a class="btn btn--primary nav__cta" href="${formHref}">${esc(CTA)}</a>
    <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="menu-movil" aria-label="Abrir el menú"><span></span><span></span></button>
  </div>
  <div class="sheet" id="menu-movil" hidden>
    <nav aria-label="Menú móvil"><ul>${sheet}<li><a href="/preguntas-frecuentes/">Preguntas frecuentes</a></li><li><a href="/contacto/">Contacto</a></li></ul></nav>
    <a class="btn btn--primary" href="${formHref}">${esc(CTA)}</a>
    <p class="sheet__tel">Llame a la galería: ${phoneLinks()}</p>
  </div>
</header>`;
}

// ── Pie ────────────────────────────────────────────────────────────────────
export function footer() {
  const cats = NAV[1].children.map((c) => `<li><a href="${c.href}">${esc(c.label)}</a></li>`).join("");
  return `<footer class="foot">
  <div class="wrap">
    <div class="foot__top">
      <div class="foot__brand">
        <a class="brand brand--foot" href="/" aria-label="${esc(SITE.brand)}, inicio">${mark}<span class="brand__name">${esc(SITE.brand)}</span></a>
        <p>Galería de antigüedades y gabinete de tasación en ${SITE.locality}. Tasación pericial, compra directa y gestión de herencias con discreción.</p>
        <p class="foot__place">${esc(SITE.district)}, ${SITE.locality}. Visitas con cita previa.</p>
        <p class="foot__tel">Teléfono: ${phoneLinks()}</p>
      </div>
      <div class="foot__col"><h3>Servicios</h3><ul>
        <li><a href="/tasacion-antiguedades-madrid/">Tasación de antigüedades</a></li>
        <li><a href="/compra-antiguedades-madrid/">Compra de antigüedades</a></li>
        <li><a href="/tasacion-herencias-madrid/">Tasación de herencias</a></li>
        <li><a href="/preguntas-frecuentes/">Preguntas frecuentes</a></li>
      </ul></div>
      <div class="foot__col"><h3>Qué compramos</h3><ul>${cats}</ul></div>
      <div class="foot__col"><h3>Dónde trabajamos</h3><ul>
        <li><a href="/tasacion-antiguedades-barrio-de-salamanca/">Barrio de Salamanca</a></li>
        <li><a href="/tasacion-antiguedades-comunidad-de-madrid/">Comunidad de Madrid</a></li>
        <li><a href="/tasacion-antiguedades-toda-espana/">Toda España</a></li>
        <li><a href="/la-galeria/">La galería</a></li>
        <li><a href="/contacto/">Contacto</a></li>
      </ul></div>
    </div>
    <div class="foot__legal">
      <span>© ${SITE.year} ${esc(SITE.brand)}</span>
      <a href="/aviso-legal/">Aviso legal</a>
      <a href="/politica-de-privacidad/">Privacidad</a>
      <span class="foot__credit">Fotografías: The Metropolitan Museum of Art, Open Access (CC0)</span>
    </div>
  </div>
</footer>`;
}

// ── Formulario Tally (componente reutilizable) ─────────────────────────────
/**
 * Contenedor responsive del formulario Tally.
 * Con TALLY_FORM_ID (src/config.mjs) incrusta el iframe de Tally con carga diferida;
 * sin él muestra una tarjeta de contacto por correo lista para sustituir.
 */
export function tallyForm({ title = "Solicite su tasación gratuita", lead } = {}) {
  const intro =
    lead ||
    "Cuéntenos qué pieza desea valorar y adjunte unas fotografías. Le respondemos con una valoración orientativa y, si procede, concertamos una visita a domicilio sin coste.";
  const frame = TALLY_FORM_ID
    ? `<div class="tally" data-tally>
        <iframe data-tally-src="https://tally.so/embed/${esc(TALLY_FORM_ID)}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="520" title="Formulario de solicitud de tasación gratuita" frameborder="0" marginheight="0" marginwidth="0"></iframe>
        <noscript><p>Active JavaScript para ver el formulario o escríbanos a <a href="mailto:${SITE.email}">${SITE.email}</a>.</p></noscript>
      </div>`
    : `<div class="tally tally--fallback" data-tally>
        <!-- TALLY: pegue su ID en src/config.mjs (TALLY_FORM_ID) y vuelva a ejecutar "npm run build". -->
        <h3>Contacto directo con la galería</h3>
        <p>Escríbanos con unas fotografías de la pieza, sus medidas y cualquier dato que conozca de su origen.</p>
        <a class="btn btn--primary" href="mailto:${SITE.email}?subject=Solicitud%20de%20tasaci%C3%B3n">Enviar solicitud por correo${arrow}</a>
      </div>`;
  return `<section class="sec sec--alt form" id="formulario" aria-labelledby="form-h">
  <div class="wrap grid form__grid">
    <div class="form__intro">
      <h2 id="form-h">${esc(title)}</h2>
      <p class="lead">${esc(intro)}</p>
      <ul class="ticks">
        <li>Valoración orientativa gratuita y sin compromiso</li>
        <li>Visita a domicilio en Madrid y desplazamiento a toda España</li>
        <li>Confidencialidad absoluta sobre la pieza y su propietario</li>
      </ul>
      <p class="form__tel">También puede llamarnos: ${phoneLinks()}</p>
    </div>
    <div class="form__frame">${frame}</div>
  </div>
</section>`;
}

// ── Bloques de contenido ───────────────────────────────────────────────────
const paras = (a = []) => a.map((p) => `<p>${p}</p>`).join("");
const secOpen = (b, extra = "") => `<section class="sec${b.dark ? " sec--dark" : b.alt ? " sec--alt" : ""}${extra}"${b.id ? ` id="${b.id}"` : ""}>`;

const blocks = {
  split(b) {
    const list = b.list ? `<ul class="ticks">${b.list.map((i) => `<li>${i}</li>`).join("")}</ul>` : "";
    const cta = b.cta ? `<p class="actions">${button(b.cta[0], b.cta[1], "secondary")}</p>` : "";
    const ratio = b.ratio || "portrait";
    return `${secOpen(b)}<div class="wrap grid split split--${b.side || "right"}">
      <div class="split__text"><h2>${b.h2}</h2>${paras(b.paras)}${list}${cta}</div>
      <figure class="frame split__media${b.moment ? " moment" : ""}" style="${ratioStyle(b.img, 0.78, 1.3)}"${b.moment ? " data-moment" : ""}>${pic(b.img, { sizes: "(min-width:1024px) 44vw, 100vw", fit: fitFor(b.img, 0.78, 1.3) })}</figure>
    </div></section>`;
  },

  cards(b) {
    const cols = b.cols || 3;
    const items = b.items.map((i) => {
      const inner = `<div class="card__media" style="${ratioStyle(i.img, 0.75, 1.4)}">${pic(i.img, { sizes: `(min-width:1024px) ${Math.round(100 / cols)}vw, 100vw`, fit: fitFor(i.img, 0.75, 1.4) })}</div>
        <div class="card__body"><h3>${i.h3}</h3><p>${i.p}</p>${i.href ? `<span class="link">${esc(i.cta || "Ver más")}${arrow}</span>` : ""}</div>`;
      return i.href ? `<a class="card" href="${i.href}">${inner}</a>` : `<div class="card">${inner}</div>`;
    }).join("");
    return `${secOpen(b)}<div class="wrap"><div class="sec__head"><h2>${b.h2}</h2>${b.intro ? `<p class="lead">${b.intro}</p>` : ""}</div><div class="cards cards--${cols}">${items}</div></div></section>`;
  },

  steps(b) {
    const items = b.items.map((i, n) => `<li class="step"><span class="step__n" aria-hidden="true">${String(n + 1).padStart(2, "0")}</span><h3>${i.h3}</h3><p>${i.p}</p></li>`).join("");
    return `${secOpen({ ...b, dark: b.dark !== false })}<div class="wrap"><div class="sec__head"><h2>${b.h2}</h2>${b.intro ? `<p class="lead">${b.intro}</p>` : ""}</div><ol class="steps">${items}</ol></div></section>`;
  },

  facts(b) {
    const items = b.items.map((i) => `<div class="fact"><h3>${i.h3}</h3><p>${i.p}</p></div>`).join("");
    return `${secOpen(b)}<div class="wrap"><div class="sec__head"><h2>${b.h2}</h2>${b.intro ? `<p class="lead">${b.intro}</p>` : ""}</div><div class="facts facts--${b.items.length}">${items}</div></div></section>`;
  },

  wall(b) {
    // Filas de altura común: cada foto ocupa un ancho proporcional a su forma, así nada se recorta.
    const n = b.imgs.length;
    const sizes = n === 3 ? [3] : n === 4 ? [2, 2] : n === 5 ? [3, 2] : n === 6 ? [3, 3] : [n];
    let at = 0;
    const rows = sizes.map((k) => {
      const cells = b.imgs.slice(at, at + k).map((s) => {
        const m = imageInfo(s);
        return `<figure class="wall__item" style="--ar:${(m.w / m.h).toFixed(4)}">${pic(s, { sizes: "(min-width:1024px) 45vw, 100vw" })}</figure>`;
      }).join("");
      at += k;
      return `<div class="wall__row">${cells}</div>`;
    }).join("");
    return `${secOpen(b)}<div class="wrap"><div class="sec__head"><h2>${b.h2}</h2>${b.intro ? `<p class="lead">${b.intro}</p>` : ""}</div><div class="wall">${rows}</div></div></section>`;
  },

  prose(b) {
    return `${secOpen(b)}<div class="wrap grid"><div class="prose"><h2>${b.h2}</h2>${paras(b.paras)}${b.list ? `<ul class="ticks">${b.list.map((i) => `<li>${i}</li>`).join("")}</ul>` : ""}</div></div></section>`;
  },

  links(b) {
    const items = b.items.map((i) => `<li><a class="rowlink" href="${i.href}"><span><strong>${i.label}</strong><span>${i.p}</span></span>${arrow}</a></li>`).join("");
    return `${secOpen(b)}<div class="wrap grid"><div class="sec__head"><h2>${b.h2}</h2>${b.intro ? `<p class="lead">${b.intro}</p>` : ""}</div><ul class="rowlinks">${items}</ul></div></section>`;
  },

  doc(b) {
    const secs = b.sections.map(([h, html]) => `<h2>${esc(h)}</h2>${html}`).join("");
    return `<section class="sec doc"><div class="wrap grid"><div class="prose"><h1>${esc(b.h1)}</h1>${secs}</div></div></section>`;
  },

  faq(b) {
    const items = b.items.map((f, i) => `<div class="acc"><h3><button class="acc__btn" type="button" aria-expanded="false" aria-controls="faq-${b.key || "f"}-${i}" id="faq-${b.key || "f"}-b${i}"><span>${f.q}</span><svg class="acc__chev" width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true"><path d="m1 1 6 6 6-6" stroke="currentColor" stroke-width="1.4"/></svg></button></h3><div class="acc__panel" id="faq-${b.key || "f"}-${i}" role="region" aria-labelledby="faq-${b.key || "f"}-b${i}"><div class="acc__inner"><p>${f.a}</p></div></div></div>`).join("");
    return `${secOpen(b)}<div class="wrap grid faq"><div class="faq__head"><h2>${b.h2}</h2>${b.intro ? `<p class="lead">${b.intro}</p>` : ""}${b.more ? `<p class="actions">${textLink(b.more[0], b.more[1])}</p>` : ""}</div><div class="faq__list">${items}</div></div></section>`;
  },
};

export const renderBlock = (b) => {
  if (!blocks[b.t]) throw new Error(`Bloque desconocido: ${b.t}`);
  return blocks[b.t](b);
};

export const breadcrumbs = (trail) => {
  if (!trail || trail.length < 2) return "";
  const li = trail.map((c, i) => (i === trail.length - 1 ? `<li aria-current="page">${esc(c.name)}</li>` : `<li><a href="${c.href}">${esc(c.name)}</a></li>`)).join("");
  return `<nav class="crumbs" aria-label="Ruta de navegación"><ol>${li}</ol></nav>`;
};

export const legalNote = () => LEGAL;
