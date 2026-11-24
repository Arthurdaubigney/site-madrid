import { SITE, CTA, PHONES } from "./config.mjs";
import { esc, header, footer, tallyForm, renderBlock, breadcrumbs, button, arrow } from "./components.mjs";
import { pic, imageInfo, ratioStyle, fitFor, frameRatio } from "./images.mjs";

const abs = (p) => `${SITE.url}${p}`;
const BIZ_ID = `${SITE.url}/#galeria`;

const areaServed = [
  { "@type": "City", name: "Madrid" },
  { "@type": "AdministrativeArea", name: "Comunidad de Madrid" },
  { "@type": "Country", name: "España" },
];

export const businessNode = (page) => ({
  "@type": ["AntiqueStore", "LocalBusiness", "ProfessionalService"],
  "@id": BIZ_ID,
  name: SITE.brand,
  url: abs("/"),
  image: abs(`/img/${page?.ogImage || "salon-tesse"}-1200.webp`),
  description:
    "Galería de antigüedades y gabinete de tasación en Madrid: tasación pericial, compra directa de obras de arte y antigüedades, y gestión de herencias con discreción en toda España.",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    addressCountry: SITE.country,
  },
  telephone: `+34 ${PHONES[0].slice(0, 3)} ${PHONES[0].slice(3, 6)} ${PHONES[0].slice(6)}`,
  contactPoint: PHONES.map((n) => ({ "@type": "ContactPoint", telephone: `+34 ${n.slice(0, 3)} ${n.slice(3, 6)} ${n.slice(6)}`, contactType: "atención al cliente", areaServed: "ES", availableLanguage: ["es"] })),
  areaServed,
  knowsAbout: ["Antigüedades", "Tasación de arte", "Mobiliario antiguo", "Pintura antigua", "Plata antigua", "Bronces y esculturas", "Porcelana antigua", "Relojes antiguos"],
  openingHours: undefined,
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tasación pericial de antigüedades y obras de arte", serviceType: "Tasación de antigüedades" }, price: "0", priceCurrency: "EUR", description: "Valoración orientativa gratuita y visita a domicilio" },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Compra directa de antigüedades y obras de arte", serviceType: "Compra de antigüedades" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tasación de herencias y testamentarias", serviceType: "Tasación de herencias" } },
  ],
});

function schemaGraph(page) {
  const url = abs(page.path);
  const graph = [];
  if (page.path === "/" || page.schema === "contact" || page.schema === "about") graph.push(businessNode(page));
  const provider = { "@id": BIZ_ID };
  if (page.path === "/") {
    graph.push({ "@type": "WebSite", "@id": `${SITE.url}/#web`, url: abs("/"), name: SITE.brand, inLanguage: SITE.lang, publisher: provider });
  }
  const webPage = { "@type": page.schema === "contact" ? "ContactPage" : page.schema === "about" ? "AboutPage" : page.schema === "faq" ? "FAQPage" : "WebPage", "@id": `${url}#pagina`, url, name: page.title, description: page.description, inLanguage: SITE.lang, isPartOf: { "@id": `${SITE.url}/#web` }, about: provider, primaryImageOfPage: { "@type": "ImageObject", url: abs(`/img/${page.hero.img}-1200.webp`) } };
  if (page.faq) webPage.mainEntity = page.faq.map((f) => ({ "@type": "Question", name: f.q.replace(/<[^>]+>/g, ""), acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") } }));
  graph.push(webPage);
  if (page.service) {
    graph.push({ "@type": "Service", "@id": `${url}#servicio`, name: page.service.name, serviceType: page.service.type, description: page.description, provider: { "@id": BIZ_ID, "@type": "AntiqueStore", name: SITE.brand }, areaServed: page.service.area || areaServed, url, ...(page.service.free ? { offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Valoración orientativa gratuita" } } : {}) });
  }
  if (page.crumbs?.length > 1) {
    graph.push({ "@type": "BreadcrumbList", itemListElement: page.crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.href) })) });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

function hero(page) {
  const h = page.hero;
  const home = page.path === "/";
  const facts = h.facts ? `<ul class="hero__facts">${h.facts.map((f) => `<li>${f}</li>`).join("")}</ul>` : "";
  const second = h.secondary ? button(h.secondary[0], h.secondary[1], "secondary", { arrowIcon: false }) : "";
  return `<section class="hero${home ? " hero--home" : ""}" data-enter>
  <div class="wrap grid hero__grid">
    <div class="hero__text">
      ${home ? "" : breadcrumbs(page.crumbs)}
      ${h.eyebrow ? `<p class="eyebrow">${h.eyebrow}</p>` : ""}
      <h1>${h.h1.includes("<em>") ? h.h1 : h.h1.replace(/ en ([^<]+)$/, " en <em>$1</em>")}</h1>
      <p class="lead">${h.lead}</p>
      <p class="actions">${button(CTA, page.formHref)}${second}</p>
      ${facts}
    </div>
    <figure class="frame hero__media${frameRatio(h.img, 0.78, 1.3) < 1.05 ? " arch" : ""}" style="${ratioStyle(h.img, 0.78, 1.3)}">${pic(h.img, { sizes: "(min-width:1024px) 44vw, 100vw", eager: true, fit: fitFor(h.img, 0.78, 1.3) })}</figure>
  </div>
</section>`;
}

export function renderPage(page, css, js) {
  const hasForm = page.form !== false;
  page.formHref = hasForm ? "#formulario" : "/contacto/#formulario";
  const url = abs(page.path);
  const ogImg = abs(`/og/${page.ogImage || page.hero.img}.jpg`);
  const heroInfo = imageInfo(page.hero.img);
  const heroSrc = `/img/${page.hero.img}-${heroInfo.widths.includes(800) ? 800 : heroInfo.widths.at(-1)}.webp`;
  const faq = page.faq ? renderBlock({ t: "faq", key: "p", h2: "Preguntas <em>frecuentes</em>", intro: page.faqIntro === false ? "" : "Lo que más nos preguntan antes de pedir una tasación.", more: page.faqMore, items: page.faq }) : "";
  const main = (page.bare ? "" : hero(page)) + (page.blocks || []).map(renderBlock).join("\n") + faq + (hasForm ? tallyForm(page.formCopy) : "");
  return `<!doctype html>
<html lang="es" data-motion="on">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="${page.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}">
<link rel="alternate" hreflang="es-ES" href="${url}">
<meta name="theme-color" content="#f8f1e4">
<meta property="og:type" content="${page.path === "/" ? "website" : "article"}">
<meta property="og:locale" content="es_ES">
<meta property="og:site_name" content="${esc(SITE.brand)}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImg}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(heroInfo.alt)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/cormorant-garamond-latin-500-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/hanken-grotesk-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
${page.bare ? "" : `<link rel="preload" as="image" href="${heroSrc}" imagesrcset="${heroInfo.widths.map((w) => `/img/${page.hero.img}-${w}.webp ${w}w`).join(", ")}" imagesizes="(min-width:1024px) 44vw, 100vw" fetchpriority="high">`}
<script>document.documentElement.classList.add("js")</script>
<style>${css}</style>
<script type="application/ld+json">${JSON.stringify(schemaGraph(page))}</script>
</head>
<body>
${header(page.path, page.formHref)}
<main id="contenido">
${main}
</main>
${footer()}
<script src="${js}" defer></script>
</body>
</html>
`;
}
