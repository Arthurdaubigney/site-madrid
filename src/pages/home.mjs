import { P, FAQ } from "./shared.mjs";

export default [{
  path: "/",
  title: "Anticuarios a domicilio en Madrid y toda España | Aldaba",
  description: "Somos anticuarios y vamos a su casa: tasación gratuita, compra de muebles, cuadros, joyas y antigüedades, y valoración de herencias en Madrid y toda España.",
  ogImage: "salon-tesse",
  crumbs: [],
  hero: {
    eyebrow: "Compra y tasación de antigüedades",
    h1: "Anticuarios a domicilio en <em>Madrid y toda España</em>",
    lead: "Somos anticuarios y vamos a su casa. Valoramos y compramos muebles, cuadros, plata, bronces, porcelana, joyas, monedas y pieles antiguas en Madrid, en la Comunidad y en toda España.",
    img: "salon-tesse",
    secondary: ["Qué compramos", P.compra],
    facts: ["Tasación gratuita a domicilio", "Madrid y toda España", "Compra directa y discreta"],
    phone: true,
  },
  blocks: [
    {
      t: "links", id: "servicios",
      h2: "Tasación, <em>compra</em> y herencias",
      intro: "Tres servicios, siempre a domicilio: vemos cada pieza en su casa y le decimos con claridad lo que vale.",
      items: [
        { label: "Tasación de antigüedades a domicilio", p: "Muebles, cuadros, plata, joyas y objetos de colección, con valoración por escrito si la necesita.", href: P.tasacion },
        { label: "Compra directa de antigüedades", p: "Una oferta clara por la pieza o por el conjunto, sin intermediarios y con discreción.", href: P.compra },
        { label: "Herencias y vaciado de viviendas", p: "Inventario, valoración para el reparto, compra de lo que tiene valor y vaciado de la vivienda.", href: P.herencias },
      ],
    },
    {
      t: "cards", alt: true, cols: 3, id: "que-compramos",
      h2: "Qué <em>antigüedades</em> compramos",
      intro: "Nueve tipos de piezas, del siglo XVI al XX, con atención a la autoría, el estado y la procedencia.",
      items: [
        { h3: "Muebles antiguos", p: "Vargueños y muebles renacentistas españoles, cómodas, consolas y secreteres.", img: "bargueno-valencia", href: P.muebles, cta: "Ver muebles" },
        { h3: "Pintura antigua", p: "Óleos y tablas de escuelas españolas y europeas, de los siglos XVI al XIX.", img: "goya-toros", href: P.pintura, cta: "Ver pintura" },
        { h3: "Plata antigua", p: "Soperas, juegos de té, candelabros y bandejas con marcas de platero.", img: "sopera-weyhe", href: P.plata, cta: "Ver plata" },
        { h3: "Bronces y esculturas", p: "Bronces patinados, mármoles y bustos de taller o de autor.", img: "bronce-yacente", href: P.bronces, cta: "Ver esculturas" },
        { h3: "Porcelana y cerámica", p: "Sèvres, Meissen, Buen Retiro y otras manufacturas europeas.", img: "sevres-perlas", href: P.porcelana, cta: "Ver porcelana" },
        { h3: "Relojes y objetos de arte", p: "Relojes antiguos españoles, tabaqueras, cofres y esmaltes.", img: "caja-oro-bodson", href: P.relojes, cta: "Ver relojes" },
        { h3: "Joyería española", p: "Perlas de Mallorca, damasquinado de Toledo, azabache y coral.", img: "joya-collar-perlas", href: P.joyeria, cta: "Ver joyería" },
        { h3: "Monedas españolas", p: "Monedas de todas las épocas, materiales y tiradas.", img: "moneda-excelentes", href: P.monedas, cta: "Ver monedas" },
        { h3: "Pieles y abrigos de piel", p: "Abrigos, capas, estolas y manguitos antiguos y vintage.", img: "piel-manguito-marron", href: P.pieles, cta: "Ver pieles" },
      ],
    },
    {
      t: "steps", id: "como-trabajamos",
      h2: "Cómo trabajamos <em>a domicilio</em>",
      intro: "Un proceso corto, sin compromiso y con una sola persona de contacto desde el primer mensaje.",
      items: [
        { h3: "Nos escribe o nos llama", p: "Fotografías, medidas y lo que sepa de la pieza." },
        { h3: "Primera valoración", p: "Estudiamos las imágenes y le respondemos sin coste." },
        { h3: "Vamos a su casa", p: "Vemos la pieza en persona y la fotografiamos." },
        { h3: "Valoración u oferta", p: "Usted recibe el informe o la oferta y decide con calma." },
      ],
    },
    {
      t: "split", id: "anticuarios", moment: true, side: "right", ratio: "portrait",
      h2: "Somos anticuarios y vamos a <em>su casa</em>",
      paras: [
        "Trabajamos siempre a domicilio. Vamos a su vivienda, vemos la pieza en su sitio, le explicamos qué es y qué puede valer y, si quiere vender, le hacemos una oferta.",
        "Todo lo que nos cuenta, la pieza, su propietario y su dirección, se trata con reserva.",
      ],
      list: ["Valoración por escrito cuando la necesita", "Sin intermediarios entre usted y quien compra", "Sin compromiso: usted decide si vende"],
      img: "bronce-hercules",
      cta: ["Quiénes somos", P.nosotros],
    },
    {
      t: "wall", id: "piezas",
      h2: "Del <em>Renacimiento</em> al siglo XIX",
      intro: "Algunas de las piezas que valoramos, desde bronces del siglo XVI hasta retratos y porcelana del XVIII.",
      imgs: ["goya-maria-luisa", "bronce-mono", "sevres-elefante", "comoda-laca"],
    },
    {
      t: "links", alt: true, id: "zonas",
      h2: "Dónde <em>trabajamos</em>",
      intro: "Nos desplazamos a domicilio por toda la Comunidad de Madrid y por España.",
      items: [
        { label: "Madrid y Comunidad de Madrid", p: "Chamberí, Retiro, Chamartín, Pozuelo, La Moraleja, Las Rozas, Majadahonda y Boadilla.", href: P.comunidad },
        { label: "Toda España", p: "Valoración por fotografías y desplazamiento para piezas y colecciones.", href: P.espana },
      ],
    },
  ],
  faq: [FAQ.gratis, FAQ.domicilio, FAQ.fotos, FAQ.vender, FAQ.espana],
  faqMore: ["Ver todas las preguntas", P.faq],
}];
