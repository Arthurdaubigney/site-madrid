// Configuración central del sitio. Todo lo que el cliente debe completar vive aquí.

export const SITE = {
  brand: "Galería Anticuaria Aldaba",
  short: "Aldaba",
  // Dominio público definitivo. Mientras no exista, se usa un dominio de reserva (.example).
  // Se puede fijar al compilar:  SITE_URL=https://www.midominio.es npm run build
  url: (process.env.SITE_URL || "https://galeria-aldaba.example").replace(/\/$/, ""),
  lang: "es-ES",
  locality: "Madrid",
  region: "Comunidad de Madrid",
  country: "ES",
  // Correo de reserva que usa el módulo de contacto mientras no haya formulario Tally.
  email: "contacto@galeria-aldaba.example",
  year: new Date().getFullYear(),
};

// ── Formulario Tally ───────────────────────────────────────────────────────
// Pegue aquí el ID de su formulario (la parte final de https://tally.so/r/XXXXXX)
// o compile con:  TALLY_FORM_ID=XXXXXX npm run build
export const TALLY_FORM_ID = process.env.TALLY_FORM_ID || "PRzLpb";

// ── Datos legales (Aviso legal, LSSI) ──────────────────────────────────────
// Rellene estos campos y aparecerán en /aviso-legal/. Vacíos, no se muestran.
export const LEGAL = {
  razonSocial: "",
  nif: "",
  domicilio: "",
};

export const NAV = [
  { label: "Tasación", href: "/tasacion-antiguedades-madrid/" },
  {
    label: "Qué compramos",
    href: "/compra-antiguedades-madrid/",
    children: [
      { label: "Muebles antiguos", href: "/compra-antiguedades-madrid/muebles-antiguos/" },
      { label: "Pintura antigua", href: "/compra-antiguedades-madrid/pintura-antigua/" },
      { label: "Plata antigua", href: "/compra-antiguedades-madrid/plata-antigua/" },
      { label: "Bronces y esculturas", href: "/compra-antiguedades-madrid/bronces-y-esculturas/" },
      { label: "Porcelana y cerámica", href: "/compra-antiguedades-madrid/porcelana-y-ceramica/" },
      { label: "Relojes y objetos de arte", href: "/compra-antiguedades-madrid/relojes-y-objetos-de-arte/" },
    ],
  },
  { label: "Herencias", href: "/tasacion-herencias-madrid/" },
  { label: "La galería", href: "/la-galeria/" },
];

// Teléfonos de la galería (9 dígitos). Formato español +34 000 000 000; el enlace tel: lleva el prefijo +34.
export const PHONES = ["625201148", "625201448"];
export const phoneText = (n) => `+34 ${n.slice(0, 3)} ${n.slice(3, 6)} ${n.slice(6)}`;
export const phoneHref = (n) => `tel:+34${n}`;

export const CTA = "Solicitar tasación gratuita";
