import { P, FAQ, crumb, stepsTasacion } from "./shared.mjs";

export default [
{
  path: P.tasacion,
  title: "Tasación de antigüedades a domicilio en Madrid y España",
  description: "Tasación de antigüedades a domicilio en Madrid y toda España: muebles, cuadros, plata, joyas y objetos de colección. Valoración gratuita y sin compromiso.",
  crumbs: crumb(["Tasación de antigüedades", P.tasacion]),
  service: { name: "Tasación de antigüedades a domicilio", type: "Tasación de antigüedades", free: true },
  hero: {
    eyebrow: "Anticuarios a domicilio",
    h1: "Tasación de antigüedades a domicilio en <em>Madrid</em>",
    lead: "Vamos a su casa a ver sus muebles, cuadros, joyas y objetos antiguos. La valoración orientativa por fotografías es gratuita y, si la pieza lo merece, la examinamos en persona.",
    img: "secreter-weisweiler", ratio: "portrait",
    secondary: ["Cómo funciona", "#como"],
    phone: true,
  },
  blocks: [
    {
      t: "split", side: "right", ratio: "land",
      h2: "Qué incluye una tasación",
      paras: [
        "Examinamos la pieza, identificamos su época, su procedencia y su autoría probable, y miramos su estado y su demanda actual en el mercado. Con todo ello fijamos un valor de mercado y un valor de compra.",
        "Si la pieza tiene marcas, firmas, sellos o etiquetas, las fotografiamos y las contrastamos con catálogos y repertorios.",
      ],
      list: ["Época, escuela y autoría probable", "Estado de conservación y restauraciones", "Valor de mercado y valor de compra", "Informe de valoración por escrito si lo necesita"],
      img: "comoda-piffetti",
    },
    {
      t: "facts", alt: true,
      h2: "Tres formas de valorar una pieza",
      items: [
        { h3: "Valoración orientativa", p: "A partir de fotografías, sin coste ni compromiso. Le damos una primera horquilla de valor y le decimos si merece un examen en persona." },
        { h3: "Tasación a domicilio", p: "Vamos a su vivienda, examinamos la pieza y la fotografiamos. La primera visita en Madrid es gratuita." },
        { h3: "Informe de valoración", p: "Documento por escrito para seguros, herencias, particiones, donaciones o ventas. Se presupuesta antes de empezar." },
      ],
    },
    { t: "steps", id: "como", h2: "Cómo pedir una tasación", intro: "Cuatro pasos, sin compromiso en ninguno.", items: stepsTasacion },
    {
      t: "split", side: "left", ratio: "portrait",
      h2: "Para qué sirve una tasación",
      paras: [
        "Muchas personas piden una tasación porque heredan una vivienda con muebles y cuadros. Otras quieren asegurar una colección, repartir bienes entre hermanos, donar una obra o simplemente saber qué tienen en casa.",
        "En todos los casos hacemos lo mismo: ver la pieza, explicarle cómo hemos llegado al valor y dárselo por escrito si lo necesita.",
      ],
      img: "sillon-jacob",
    },
    {
      t: "wall", h2: "Qué tasamos",
      intro: "Muebles, pintura, plata, bronces, porcelana, relojes y objetos de arte.",
      imgs: ["salon-luis-xv", "retrato-terborch", "sopera-lamerie", "reloj-lenoir"],
    },
    {
      t: "links", alt: true,
      h2: "Siga leyendo",
      items: [
        { label: "Compra de antigüedades", p: "Si después de la tasación quiere vender, le hacemos una oferta.", href: P.compra },
        { label: "Tasación de herencias", p: "Inventario y valoración de los bienes de una herencia.", href: P.herencias },
        { label: "Anticuarios a domicilio en la Comunidad de Madrid", p: "Vamos a su domicilio en Madrid capital y en toda la región.", href: P.comunidad },
      ],
    },
  ],
  faq: [FAQ.gratis, FAQ.fotos, FAQ.domicilio, FAQ.valor, FAQ.vender],
},

{
  path: P.compra,
  title: "Compra de antigüedades a domicilio en Madrid y toda España",
  description: "Compramos antigüedades, cuadros, plata, joyas, monedas y muebles antiguos a domicilio en Madrid y toda España. Oferta directa, sin intermediarios y discreta.",
  crumbs: crumb(["Compra de antigüedades", P.compra]),
  service: { name: "Compra de antigüedades a domicilio", type: "Compra de antigüedades" },
  hero: {
    eyebrow: "Compra directa a domicilio",
    h1: "Compra de antigüedades a domicilio en <em>Madrid y toda España</em>",
    lead: "Somos anticuarios y compramos en su casa: muebles, cuadros, plata, bronces, porcelana, joyas, monedas, pieles y objetos de colección. Le presentamos una oferta clara, sin intermediarios y con discreción.",
    img: "sopera-percier", ratio: "portrait",
    secondary: ["Ver qué compramos", "#que-compramos"],
    phone: true,
  },
  blocks: [
    {
      t: "split", side: "right", ratio: "portrait",
      h2: "Vender una antigüedad sin salir de casa",
      paras: [
        "Vamos a su vivienda, examinamos la pieza, la valoramos y le hacemos una oferta por ella o por el conjunto. Así evita desplazamientos, plazos de subasta y la incertidumbre de una venta entre particulares.",
        "Si la oferta no le convence, no pasa nada: la tasación y la compra son independientes y usted decide.",
      ],
      list: ["Una sola persona de contacto", "Oferta por escrito y sin presión", "Retirada de las piezas coordinada con usted"],
      img: "busto-canova",
    },
    {
      t: "cards", alt: true, cols: 3, cardRatio: "square", id: "que-compramos",
      h2: "Qué compramos",
      items: [
        { h3: "Muebles antiguos", p: "Vargueños y muebles renacentistas españoles, cómodas y secreteres.", img: "comoda-laca", href: P.muebles, cta: "Ver muebles" },
        { h3: "Pintura antigua", p: "Óleos, tablas y cobres de escuelas europeas.", img: "paisaje-koch", href: P.pintura, cta: "Ver pintura" },
        { h3: "Plata antigua", p: "Platería civil y de mesa con marcas de contraste.", img: "sopera-lamerie", href: P.plata, cta: "Ver plata" },
        { h3: "Bronces y esculturas", p: "Bronces, mármoles y terracotas de taller o de autor.", img: "bronce-hercules", href: P.bronces, cta: "Ver esculturas" },
        { h3: "Porcelana y cerámica", p: "Manufacturas europeas y de Compañía de Indias.", img: "sevres-bastones", href: P.porcelana, cta: "Ver porcelana" },
        { h3: "Relojes y objetos de arte", p: "Relojes antiguos españoles, tabaqueras, cofres y esmaltes.", img: "reloj-bellver-tempus", href: P.relojes, cta: "Ver relojes" },
        { h3: "Joyería española", p: "Perlas de Mallorca, damasquinado de Toledo, azabache y coral.", img: "joya-collar-perlas", href: P.joyeria, cta: "Ver joyería" },
        { h3: "Monedas españolas", p: "Monedas de todas las épocas, materiales y tiradas.", img: "moneda-cinco-pesetas", href: P.monedas, cta: "Ver monedas" },
        { h3: "Pieles y abrigos de piel", p: "Abrigos, capas, estolas y manguitos antiguos y vintage.", img: "piel-capa-rojiza", href: P.pieles, cta: "Ver pieles" },
      ],
    },
    {
      t: "steps", h2: "Cómo se desarrolla una compra",
      items: [
        { h3: "Fotografías y datos", p: "Nos envía imágenes, medidas y lo que sepa de la pieza." },
        { h3: "Tasación a domicilio", p: "Vamos a verla en persona y fijamos su valor." },
        { h3: "Oferta de compra", p: "Le presentamos una oferta por escrito. Puede aceptarla o no." },
        { h3: "Formalización", p: "Si acepta, firmamos la compraventa y nos llevamos la pieza." },
      ],
    },
    {
      t: "facts", h2: "Compramos con garantías",
      items: [
        { h3: "Discreción", p: "Ni la pieza ni su propietario se difunden. Trabajamos con confidencialidad desde el primer mensaje." },
        { h3: "Sin intermediarios", p: "Habla con quien ve la pieza y con quien decide la compra." },
        { h3: "Procedencia clara", p: "Pedimos la documentación necesaria para formalizar la compraventa con todas las garantías legales." },
      ],
    },
  ],
  faq: [FAQ.vender, FAQ.procedencia, FAQ.restauradas, FAQ.discrecion],
},

{
  path: P.herencias,
  title: "Tasación de herencias y vaciado de viviendas en Madrid",
  description: "Tasación de herencias a domicilio en Madrid y toda España: inventario, valoración y compra de lo que tiene valor, y vaciado de la vivienda con discreción.",
  crumbs: crumb(["Tasación de herencias", P.herencias]),
  service: { name: "Tasación de herencias y vaciado de viviendas", type: "Tasación de bienes de herencias", free: true },
  hero: {
    eyebrow: "Herencias y vaciado de viviendas",
    h1: "Tasación de herencias y vaciado de viviendas en <em>Madrid</em>",
    lead: "Vamos a la vivienda, inventariamos y valoramos lo que tiene interés, compramos lo que quiera vender y nos ocupamos del vaciado. Con respeto por la familia y con discreción.",
    img: "salon-burdeos", ratio: "portrait",
    secondary: ["Cómo trabajamos", "#proceso"],
    phone: true,
  },
  blocks: [
    {
      t: "split", side: "right", ratio: "land",
      h2: "Una herencia con piezas de valor",
      paras: [
        "Al heredar una vivienda con muebles, cuadros, plata, joyas o porcelana suele surgir la misma pregunta: qué vale cada cosa y cómo se reparte. Le ayudamos a responderla sin prisas.",
        "Visitamos la vivienda, hacemos un inventario de lo que tiene interés, lo fotografiamos y lo valoramos. Después le entregamos una relación por escrito que sirve de base para el reparto entre herederos.",
      ],
      list: ["Inventario fotográfico de los bienes de interés", "Valoración de cada pieza", "Relación por escrito para notario, abogado o gestor", "Oferta de compra del conjunto o de piezas sueltas"],
      img: "cofre-esmalte",
    },
    {
      t: "steps", id: "proceso", h2: "Cómo trabajamos en una herencia",
      items: [
        { h3: "Primer contacto", p: "Nos cuenta qué hay en la vivienda y quiénes intervienen en el reparto." },
        { h3: "Visita e inventario", p: "Recorremos la vivienda y fotografiamos las piezas de interés." },
        { h3: "Informe de valoración", p: "Recibe una relación con el valor de cada pieza, lista para el reparto." },
        { h3: "Propuesta de compra", p: "Si los herederos desean vender, presentamos una oferta por las piezas." },
      ],
    },
    {
      t: "facts", alt: true,
      h2: "Lo que conviene saber",
      items: [
        { h3: "Trato respetuoso", p: "Entendemos que una herencia es también un momento personal. Trabajamos sin presión y con tacto." },
        { h3: "Varios herederos", p: "Hablamos con todas las partes que usted indique y entregamos la relación a quien corresponda." },
        { h3: "Reserva total", p: "No difundimos el contenido ni la ubicación de la vivienda. Todo queda entre la familia y nosotros." },
      ],
    },
    {
      t: "split", side: "left", ratio: "portrait", id: "vaciado",
      h2: "Vaciado de la vivienda",
      paras: [
        "Cuando los herederos ya han elegido lo que se quedan, queda una casa llena de objetos. Nos ocupamos del vaciado completo de la vivienda: separamos lo que tiene valor, lo que puede donarse y lo que hay que retirar.",
        "Compramos las piezas de interés, le entregamos la vivienda vacía y coordinamos la retirada del resto con empresas especializadas. Usted decide en cada paso y recibe una relación de todo lo que se ha retirado.",
      ],
      list: ["Clasificación de muebles, cuadros, objetos y enseres", "Compra de las piezas de valor", "Retirada y gestión del resto con empresas especializadas", "Vivienda vacía y lista para vender o alquilar"],
      img: "salon-luis-xv",
    },
    {
      t: "wall",
      h2: "Bienes que valoramos en una herencia",
      imgs: ["secreter-porcelana", "retrato-andaluz", "sopera-roettiers", "caja-oro-heric"],
    },
  ],
  faq: [FAQ.herencia, { q: "¿Pueden vaciar una vivienda completa?", a: "Sí. Clasificamos los bienes, compramos lo que tiene valor y coordinamos la retirada del resto con empresas especializadas, hasta dejar la vivienda vacía. Se acuerda antes de empezar." }, FAQ.gratis, FAQ.discrecion],
},
];
