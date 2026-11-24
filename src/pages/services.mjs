import { P, FAQ, crumb, stepsTasacion } from "./shared.mjs";

export default [
{
  path: P.tasacion,
  title: "Tasación de antigüedades en Madrid | Peritaje gratuito",
  description: "Tasación de antigüedades y obras de arte en Madrid: peritaje de muebles, pintura, plata y bronces. Valoración gratuita a domicilio e informe pericial.",
  crumbs: crumb(["Tasación de antigüedades", P.tasacion]),
  service: { name: "Tasación de antigüedades y obras de arte", type: "Tasación pericial de antigüedades", free: true },
  hero: {
    eyebrow: "Tasación pericial",
    h1: "Tasación de antigüedades y obras de arte en Madrid",
    lead: "Peritaje de mobiliario, pintura, plata, bronces y objetos de colección. La valoración orientativa es gratuita y, si la pieza lo merece, vamos a su domicilio a examinarla.",
    img: "secreter-weisweiler", ratio: "portrait",
    secondary: ["Cómo funciona", "#como"],
  },
  blocks: [
    {
      t: "split", side: "right", ratio: "land",
      h2: "Qué incluye una tasación pericial",
      paras: [
        "Examinamos la pieza, identificamos su época, su procedencia y su autoría probable, y valoramos su estado de conservación y su demanda actual en el mercado. Con todo ello fijamos un valor de mercado y un valor de compra.",
        "Si la pieza tiene marcas, firmas, sellos o etiquetas, las documentamos y las contrastamos con fuentes especializadas.",
      ],
      list: ["Identificación de época, escuela y autoría", "Estado de conservación y restauraciones", "Valor de mercado y valor de compra", "Informe escrito si lo necesita para un trámite"],
      img: "comoda-piffetti",
    },
    {
      t: "facts", alt: true,
      h2: "Tres formas de tasar una pieza",
      items: [
        { h3: "Valoración orientativa", p: "A partir de fotografías, sin coste ni compromiso. Le damos una primera horquilla de valor y le decimos si merece un examen en persona." },
        { h3: "Tasación a domicilio", p: "Un perito acude a su vivienda, examina la pieza y la fotografía. La primera visita en Madrid es gratuita." },
        { h3: "Informe pericial", p: "Documento escrito y firmado para seguros, herencias, particiones, donaciones o ventas. Se presupuesta antes de empezar." },
      ],
    },
    { t: "steps", id: "como", h2: "Cómo pedir una tasación", intro: "Cuatro pasos, sin compromiso en ninguno.", items: stepsTasacion },
    {
      t: "split", side: "left", ratio: "portrait",
      h2: "Para qué sirve una tasación",
      paras: [
        "Muchas personas piden una tasación porque heredan una vivienda con muebles y cuadros. Otras quieren asegurar una colección, repartir bienes entre hermanos, donar una obra o simplemente saber qué tienen en casa.",
        "En todos los casos el criterio es el mismo: una opinión experta, por escrito si hace falta, y una explicación clara de cómo se ha llegado al valor.",
      ],
      img: "sillon-jacob",
    },
    {
      t: "wall", h2: "Qué tasamos",
      intro: "Mobiliario, pintura, plata, bronces, porcelana, relojes y objetos de arte.",
      imgs: ["salon-luis-xv", "retrato-terborch", "sopera-lamerie", "reloj-lenoir"],
    },
    {
      t: "links", alt: true,
      h2: "Siga leyendo",
      items: [
        { label: "Compra de antigüedades", p: "Si después de la tasación quiere vender, le hacemos una oferta.", href: P.compra },
        { label: "Tasación de herencias", p: "Inventario y valoración de los bienes artísticos de una testamentaría.", href: P.herencias },
        { label: "Tasación en la Comunidad de Madrid", p: "Visitas a domicilio en Madrid capital y en toda la región.", href: P.comunidad },
      ],
    },
  ],
  faq: [FAQ.gratis, FAQ.fotos, FAQ.domicilio, FAQ.valor, FAQ.vender],
},

{
  path: P.compra,
  title: "Compra de antigüedades y obras de arte en Madrid | Aldaba",
  description: "Compramos antigüedades, pintura, plata, bronces y mobiliario antiguo en Madrid y toda España. Oferta directa, sin intermediarios y con total discreción.",
  crumbs: crumb(["Compra de antigüedades", P.compra]),
  service: { name: "Compra de antigüedades y obras de arte", type: "Compra de antigüedades" },
  hero: {
    eyebrow: "Compra directa",
    h1: "Compra de antigüedades y obras de arte en Madrid",
    lead: "Compramos mobiliario antiguo, pintura, plata, bronces, porcelana y objetos de colección. Le presentamos una oferta clara, sin intermediarios y con total discreción.",
    img: "sopera-percier", ratio: "portrait",
    secondary: ["Ver especialidades", "#especialidades"],
  },
  blocks: [
    {
      t: "split", side: "right", ratio: "portrait",
      h2: "Vender una antigüedad a una galería",
      paras: [
        "Vender a una galería evita los plazos y las incertidumbres de una subasta o de una venta entre particulares. Examinamos la pieza, la valoramos y le hacemos una oferta por ella o por el conjunto.",
        "Si la oferta no le convence, no pasa nada: la tasación y la compra son independientes y usted decide.",
      ],
      list: ["Una sola persona de contacto", "Oferta por escrito y sin presión", "Retirada de las piezas coordinada con usted"],
      img: "busto-canova",
    },
    {
      t: "cards", alt: true, cols: 3, cardRatio: "square", id: "especialidades",
      h2: "Especialidades que compramos",
      items: [
        { h3: "Muebles antiguos", p: "Cómodas, consolas, secreteres, sillería y mesas de época.", img: "comoda-laca", ratio: "portrait", href: P.muebles, cta: "Ver muebles" },
        { h3: "Pintura antigua", p: "Óleos, tablas y cobres de escuelas europeas.", img: "paisaje-koch", ratio: "portrait", href: P.pintura, cta: "Ver pintura" },
        { h3: "Plata antigua", p: "Platería civil y de mesa con marcas de contraste.", img: "sopera-lamerie", ratio: "portrait", href: P.plata, cta: "Ver plata" },
        { h3: "Bronces y esculturas", p: "Bronces, mármoles y terracotas de taller o de autor.", img: "bronce-hercules", ratio: "portrait", href: P.bronces, cta: "Ver esculturas" },
        { h3: "Porcelana y cerámica", p: "Manufacturas europeas y de Compañía de Indias.", img: "sevres-bastones", ratio: "portrait", href: P.porcelana, cta: "Ver porcelana" },
        { h3: "Relojes y objetos de arte", p: "Pendulas, tabaqueras, cofres, esmaltes y miniaturas.", img: "estuche-te", ratio: "portrait", href: P.relojes, cta: "Ver objetos" },
      ],
    },
    {
      t: "steps", h2: "Cómo se desarrolla una compra",
      items: [
        { h3: "Fotografías y datos", p: "Nos envía imágenes, medidas y lo que sepa de la pieza." },
        { h3: "Tasación", p: "La examinamos, en persona si es posible, y fijamos su valor." },
        { h3: "Oferta de compra", p: "Le presentamos una oferta por escrito. Puede aceptarla o no." },
        { h3: "Formalización", p: "Si acepta, firmamos la compraventa y coordinamos la recogida." },
      ],
    },
    {
      t: "facts", h2: "Compramos con garantías",
      items: [
        { h3: "Discreción", p: "Ni la pieza ni su propietario se difunden. Trabajamos con confidencialidad desde el primer mensaje." },
        { h3: "Sin intermediarios", p: "Habla con quien examina la pieza y con quien decide la compra." },
        { h3: "Procedencia clara", p: "Pedimos la documentación necesaria para formalizar la compraventa con todas las garantías legales." },
      ],
    },
  ],
  faq: [FAQ.vender, FAQ.procedencia, FAQ.restauradas, FAQ.discrecion],
},

{
  path: P.herencias,
  title: "Tasación de herencias y testamentarias en Madrid | Aldaba",
  description: "Tasación de herencias en Madrid: inventario y valoración de muebles, pintura, plata y objetos de arte para el reparto, con informe pericial y discreción.",
  crumbs: crumb(["Tasación de herencias", P.herencias]),
  service: { name: "Tasación de herencias y testamentarias", type: "Tasación de bienes artísticos de herencias", free: true },
  hero: {
    eyebrow: "Herencias y testamentarias",
    h1: "Tasación de herencias y testamentarias en Madrid",
    lead: "Inventariamos y valoramos los bienes artísticos de una herencia: mobiliario, pintura, plata, bronces y objetos de colección. Con respeto por la familia y con total discreción.",
    img: "salon-burdeos", ratio: "portrait",
    secondary: ["Cómo trabajamos", "#proceso"],
  },
  blocks: [
    {
      t: "split", side: "right", ratio: "land",
      h2: "Una herencia con piezas de valor",
      paras: [
        "Al heredar una vivienda con muebles, cuadros, plata o porcelana suele surgir la misma pregunta: qué vale cada cosa y cómo se reparte. Nuestro trabajo es responderla con criterio y sin prisas.",
        "Visitamos la vivienda, inventariamos lo que tiene interés, lo fotografiamos y lo valoramos. Después emitimos un informe pericial que sirve de base para el reparto entre herederos.",
      ],
      list: ["Inventario fotográfico de los bienes de interés", "Valoración individual de cada pieza", "Informe pericial para notario, abogado o gestor", "Oferta de compra del conjunto o de piezas sueltas"],
      img: "cofre-esmalte",
    },
    {
      t: "steps", id: "proceso", h2: "Cómo trabajamos en una herencia",
      items: [
        { h3: "Primer contacto", p: "Nos cuenta qué hay en la vivienda y quiénes intervienen en el reparto." },
        { h3: "Visita e inventario", p: "Un perito recorre la vivienda y fotografía las piezas de interés." },
        { h3: "Informe de valoración", p: "Recibe un informe con el valor de cada pieza, listo para el reparto." },
        { h3: "Propuesta de compra", p: "Si los herederos desean vender, presentamos una oferta por las piezas." },
      ],
    },
    {
      t: "facts", alt: true,
      h2: "Lo que conviene saber",
      items: [
        { h3: "Trato respetuoso", p: "Entendemos que una herencia es también un momento personal. Trabajamos sin presión y con tacto." },
        { h3: "Varios herederos", p: "Hablamos con todas las partes que usted indique y entregamos el informe a quien corresponda." },
        { h3: "Reserva total", p: "No difundimos el contenido ni la ubicación de la vivienda. Todo queda entre la familia y la galería." },
      ],
    },
    {
      t: "wall",
      h2: "Bienes que valoramos en una testamentaría",
      imgs: ["secreter-porcelana", "retrato-andaluz", "sopera-roettiers", "caja-oro-heric"],
    },
  ],
  faq: [FAQ.herencia, FAQ.gratis, FAQ.discrecion, FAQ.domicilio],
},
];
