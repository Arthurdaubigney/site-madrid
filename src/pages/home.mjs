import { P, FAQ } from "./shared.mjs";

export default [{
  path: "/",
  title: "Galería de antigüedades en Madrid: tasación y compra de arte",
  description: "Galería de antigüedades en Madrid: tasación pericial gratuita a domicilio, compra directa de arte y mobiliario antiguo y gestión de herencias. Discreción.",
  ogImage: "salon-tesse",
  crumbs: [],
  hero: {
    eyebrow: "Galería y gabinete de tasación · Barrio de Salamanca",
    h1: "Galería de antigüedades en Madrid: tasación, peritaje y compra de obras de arte",
    lead: "Valoramos y compramos mobiliario antiguo, pintura clásica, plata, bronces y piezas de colección. Visitamos su domicilio en Madrid sin coste y nos desplazamos a toda España, con total discreción.",
    img: "salon-tesse",
    secondary: ["Qué compramos", P.compra],
    facts: ["Tasación gratuita a domicilio", "Madrid y toda España", "Compra directa y discreta"],
  },
  blocks: [
    {
      t: "links", id: "servicios",
      h2: "Tasación, compra y herencias",
      intro: "Tres servicios con un mismo criterio: examinar cada pieza en persona y decirle con claridad lo que vale.",
      items: [
        { label: "Tasación de antigüedades y obras de arte", p: "Peritaje de muebles, pintura, plata, bronces y objetos de colección, con informe escrito.", href: P.tasacion },
        { label: "Compra directa de antigüedades", p: "Una oferta clara por la pieza o por el conjunto, sin intermediarios y con discreción.", href: P.compra },
        { label: "Tasación y gestión de herencias", p: "Inventario, valoración para el reparto y compra de los bienes artísticos de una testamentaría.", href: P.herencias },
      ],
    },
    {
      t: "cards", alt: true, cols: 3, id: "que-compramos",
      h2: "Qué antigüedades compramos en Madrid",
      intro: "Seis especialidades, del siglo XVI al XIX, con atención a la autoría, el estado y la procedencia.",
      items: [
        { h3: "Muebles antiguos", p: "Cómodas, consolas, secreteres y sillería de ebanistas de época.", img: "consola-dorada", href: P.muebles, cta: "Ver muebles" },
        { h3: "Pintura antigua", p: "Óleos y tablas de escuelas españolas y europeas, de los siglos XVI al XIX.", img: "goya-toros", href: P.pintura, cta: "Ver pintura" },
        { h3: "Plata antigua", p: "Soperas, juegos de té, candelabros y bandejas con marcas de platero.", img: "sopera-weyhe", href: P.plata, cta: "Ver plata" },
        { h3: "Bronces y esculturas", p: "Bronces patinados, mármoles y bustos de taller o de autor.", img: "bronce-yacente", href: P.bronces, cta: "Ver esculturas" },
        { h3: "Porcelana y cerámica", p: "Sèvres, Meissen, Buen Retiro y otras manufacturas europeas.", img: "sevres-perlas", href: P.porcelana, cta: "Ver porcelana" },
        { h3: "Relojes y objetos de arte", p: "Relojes de sobremesa, tabaqueras, cofres y esmaltes.", img: "caja-oro-bodson", href: P.relojes, cta: "Ver objetos" },
      ],
    },
    {
      t: "steps", id: "como-trabajamos",
      h2: "Cómo es una tasación con nosotros",
      intro: "Un proceso corto, sin compromiso y con una sola persona de contacto desde el primer mensaje.",
      items: [
        { h3: "Nos escribe", p: "Fotografías, medidas y lo que sepa de la pieza, en el formulario." },
        { h3: "Valoración orientativa", p: "Un perito estudia las imágenes y le responde sin coste." },
        { h3: "Visita a domicilio", p: "Examinamos la pieza en persona y la documentamos." },
        { h3: "Informe u oferta", p: "Usted recibe el informe o la oferta y decide con calma." },
      ],
    },
    {
      t: "split", id: "confianza", moment: true, side: "right", ratio: "portrait",
      h2: "Peritaje serio y discreción absoluta",
      paras: [
        "Una galería de antigüedades tiene que ser también un gabinete de tasación fiable. Por eso examinamos cada pieza en persona, estudiamos su documentación y le decimos con franqueza cuándo vale mucho, cuándo vale poco y por qué.",
        "Todo lo que nos confía, la pieza, su propietario y su ubicación, se trata con la máxima reserva.",
      ],
      list: ["Informe pericial por escrito cuando lo necesita", "Sin intermediarios entre usted y quien compra", "Sin compromiso: usted decide si vende"],
      img: "bronce-hercules",
      cta: ["Conocer la galería", P.galeria],
    },
    {
      t: "wall", id: "piezas",
      h2: "Del Renacimiento al siglo XIX",
      intro: "Algunas de las especialidades que valoramos, desde bronces del siglo XVI hasta retratos y porcelana del XVIII.",
      imgs: ["goya-maria-luisa", "bronce-mono", "sevres-elefante", "comoda-laca"],
    },
    {
      t: "links", alt: true, id: "zonas",
      h2: "Dónde trabajamos",
      intro: "Con sede en el Barrio de Salamanca, visitamos viviendas de toda la Comunidad de Madrid y de España.",
      items: [
        { label: "Barrio de Salamanca", p: "Valoración a domicilio en el barrio donde tiene su sede la galería.", href: P.salamanca },
        { label: "Comunidad de Madrid", p: "Pozuelo, La Moraleja, Las Rozas, Majadahonda, Boadilla y el resto de la región.", href: P.comunidad },
        { label: "Toda España", p: "Valoración por fotografías y desplazamiento para piezas y colecciones.", href: P.espana },
      ],
    },
  ],
  faq: [FAQ.gratis, FAQ.fotos, FAQ.discrecion, FAQ.vender, FAQ.espana],
  faqMore: ["Ver todas las preguntas", P.faq],
}];
