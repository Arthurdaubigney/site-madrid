import { P, FAQ } from "./shared.mjs";

export default [{
  path: "/",
  title: "Galería de antigüedades en Madrid: tasación y compra de arte",
  description: "Galería de antigüedades en Madrid: tasación pericial gratuita a domicilio, compra directa de arte y mobiliario antiguo y gestión de herencias. Discreción.",
  ogImage: "salon-tesse",
  crumbs: [],
  hero: {
    eyebrow: "Galería de antigüedades y gabinete de tasación en Madrid",
    h1: "Galería de antigüedades en Madrid: <em>tasación, peritaje y compra</em> de obras de arte",
    lead: "Valoramos y compramos mobiliario antiguo, pintura clásica, plata, bronces y piezas de colección. Visitamos su domicilio en Madrid sin coste y nos desplazamos a toda España, con total discreción.",
    img: "salon-tesse",
    secondary: ["Qué compramos", P.compra],
    facts: ["Tasación gratuita a domicilio", "Madrid y toda España", "Compra directa y discreta"],
  },
  blocks: [
    {
      t: "links", id: "servicios",
      h2: "Tasación, <em>compra</em> y herencias",
      intro: "Tres servicios con un mismo criterio: examinar cada pieza en persona y decirle con claridad lo que vale.",
      items: [
        { label: "Tasación de antigüedades y obras de arte", p: "Peritaje de muebles, pintura, plata, bronces y objetos de colección, con informe escrito.", href: P.tasacion },
        { label: "Compra directa de antigüedades", p: "Una oferta clara por la pieza o por el conjunto, sin intermediarios y con discreción.", href: P.compra },
        { label: "Tasación y gestión de herencias", p: "Inventario, valoración para el reparto, compra de bienes artísticos y vaciado de la vivienda.", href: P.herencias },
      ],
    },
    {
      t: "cards", alt: true, cols: 3, id: "que-compramos",
      h2: "Qué <em>antigüedades</em> compramos en Madrid",
      intro: "Nueve especialidades, de piezas del siglo XVI al XX, con atención a la autoría, el estado y la procedencia.",
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
      h2: "Cómo es una <em>tasación</em> con nosotros",
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
      h2: "Peritaje serio y <em>discreción</em> absoluta",
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
      h2: "Del <em>Renacimiento</em> al siglo XIX",
      intro: "Algunas de las especialidades que valoramos, desde bronces del siglo XVI hasta retratos y porcelana del XVIII.",
      imgs: ["goya-maria-luisa", "bronce-mono", "sevres-elefante", "comoda-laca"],
    },
    {
      t: "links", alt: true, id: "zonas",
      h2: "Dónde <em>trabajamos</em>",
      intro: "Con sede en Madrid, visitamos viviendas de toda la Comunidad de Madrid y de España.",
      items: [
        { label: "Comunidad de Madrid", p: "Pozuelo, La Moraleja, Las Rozas, Majadahonda, Boadilla y el resto de la región.", href: P.comunidad },
        { label: "Toda España", p: "Valoración por fotografías y desplazamiento para piezas y colecciones.", href: P.espana },
      ],
    },
  ],
  faq: [FAQ.gratis, FAQ.fotos, FAQ.discrecion, FAQ.vender, FAQ.espana],
  faqMore: ["Ver todas las preguntas", P.faq],
}];
