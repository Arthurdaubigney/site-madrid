# Galería Anticuaria Aldaba — sitio web

Sitio institucional estático para una galería de antigüedades y gabinete de tasación en Madrid.
HTML semántico, sin frameworks en el cliente, CSS incrustado, ~2,7 KiB de JS y tipografías autoalojadas.

## Uso

```bash
npm install          # solo las tipografías (fuentes de desarrollo)
npm run build        # genera dist/ (20 páginas + créditos y 404, sitemap.xml, robots.txt)
npm run preview      # sirve dist/ en http://localhost:4173
```

`dist/` está versionado: se puede publicar tal cual en cualquier hosting estático (Netlify, Cloudflare Pages, Vercel, GitHub Pages con dominio propio).

## Lo que debe completar el cliente

| Qué | Dónde |
| --- | --- |
| **ID del formulario Tally** (la parte final de `https://tally.so/r/XXXXXX`) | `TALLY_FORM_ID` en `src/config.mjs`, o `TALLY_FORM_ID=XXXXXX npm run build` |
| **Dominio definitivo** (canonical, sitemap, Schema.org, Open Graph) | `SITE_URL=https://www.midominio.es npm run build` o `SITE.url` en `src/config.mjs` |
| Correo de contacto de reserva (hasta que exista Tally) | `SITE.email` en `src/config.mjs` |
| Datos legales (titular, SIREN, SIRET, IVA, correo y alojamiento) para el Aviso legal | `LEGAL` en `src/config.mjs` |
| Nombre de marca | `SITE.brand` / `SITE.short` (marca provisional «Aldaba»: verifique disponibilidad) |

El formulario Tally (`https://tally.so/r/PRzLpb`) ya está configurado en `TALLY_FORM_ID`. Si se vaciara, el módulo mostraría una tarjeta de contacto por correo.
Con el ID, `TallyForm` (`tallyForm()` en `src/components.mjs`) incrusta el iframe con carga diferida y ajuste automático de altura.

## Estructura

```
build.mjs                 generador (páginas, CSS inline, sitemap, robots, favicon)
src/config.mjs            marca, dominio, Tally, datos legales, navegación
src/components.mjs        cabecera, pie, TallyForm, bloques (split, cards, steps, facts, wall, links, faq, doc)
src/layout.mjs            <head> SEO, Open Graph, JSON-LD (AntiqueStore + LocalBusiness + ProfessionalService)
src/pages/*.mjs           contenido de cada página (datos, no HTML)
src/styles/main.css       sistema visual (marfil, tinta, granate; movimiento de transitions.dev)
src/scripts/main.js       menú móvil, acordeón FAQ, revelación de foto, carga diferida de Tally
public/                   imágenes (webp responsive), og/ (1200×630), fuentes
tools/                    fetch-images.py, og-images.py, preview.mjs
```

## SEO

- Un solo `<h1>` por página, jerarquía `h2`/`h3` estricta, `<title>` de 54–61 caracteres y `meta description` de ~145–155.
- JSON-LD: `AntiqueStore`/`LocalBusiness`/`ProfessionalService` (Madrid), `WebSite`, `WebPage`/`AboutPage`/`ContactPage`/`FAQPage`, `Service` y `BreadcrumbList`.
- Cada imagen lleva `alt` y `title` descriptivos, `width`/`height`, `srcset` y carga diferida (salvo la imagen principal, precargada).
- Páginas locales: Comunidad de Madrid, toda España; nueve especialidades (muebles y vargueños, pintura, plata, bronces, porcelana, relojes españoles, joyería española, monedas españolas, pieles); herencias con vaciado de vivienda; FAQ.

## Fotografías

Las fotografías proceden de la colección de acceso abierto del Metropolitan Museum of Art (dominio público, CC0) y de Wikimedia Commons (autores y licencias en `/creditos-fotograficos/`; `tools/import-commons.py`), descargadas y optimizadas con `npm run images`; después `python3 tools/image-meta.py` calcula el color de fondo de cada foto y `python3 tools/og-images.py` genera las vistas previas sociales. Todas se muestran enteras (sin recortar la pieza).
Son piezas de museo que sirven de ilustración: **sustitúyalas por fotografías propias de la galería** antes de presentar el sitio como inventario real.
