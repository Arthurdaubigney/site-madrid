import { P, FAQ, crumb, stepsTasacion } from "./shared.mjs";

export default [
{
  path: P.salamanca,
  title: "Tasación de antigüedades en el Barrio de Salamanca, Madrid",
  description: "Tasación y compra de antigüedades en el Barrio de Salamanca, Madrid: peritaje gratuito a domicilio de muebles, pintura, plata y arte con discreción.",
  crumbs: crumb(["Tasación de antigüedades", P.tasacion], ["Barrio de Salamanca", P.salamanca]),
  service: { name: "Tasación de antigüedades en el Barrio de Salamanca", type: "Tasación de antigüedades", free: true, area: [{ "@type": "AdministrativeArea", name: "Barrio de Salamanca, Madrid" }] },
  hero: {
    eyebrow: "Barrio de Salamanca",
    h1: "Tasación y compra de antigüedades en el Barrio de Salamanca",
    lead: "Nuestra galería tiene su sede en el Barrio de Salamanca. Visitamos su vivienda para tasar muebles, pintura, plata y objetos de arte, y le recibimos en la galería con cita previa.",
    img: "salon-luis-xv", ratio: "portrait",
    secondary: ["Cómo es la visita", "#visita"],
  },
  blocks: [
    {
      t: "split", side: "right", ratio: "land", id: "visita",
      h2: "Valoración a domicilio, a pocos minutos",
      paras: [
        "El Barrio de Salamanca concentra muchas viviendas señoriales con mobiliario, pintura y objetos de colección acumulados durante generaciones. Trabajamos en calles como Serrano, Velázquez, Claudio Coello, Jorge Juan, Goya y Lagasca, y en las zonas vecinas.",
        "Acudimos a su vivienda, examinamos las piezas con calma y le damos una valoración clara. Si prefiere, también puede traer la pieza a la galería con cita previa.",
      ],
      list: ["Visita a domicilio gratuita y sin compromiso", "Peritaje de piezas sueltas o de viviendas completas", "Discreción con la comunidad y con los vecinos"],
      img: "consola-dorada",
    },
    { t: "steps", h2: "Cómo funciona la visita", items: stepsTasacion },
    {
      t: "facts", alt: true,
      h2: "Qué solemos valorar en la zona",
      items: [
        { h3: "Salones y comedores", p: "Mobiliario francés, inglés o español de época, espejos, lámparas, consolas y sillería tapizada." },
        { h3: "Pintura y arte decorativo", p: "Óleos antiguos, retratos, bodegones, esculturas y bronces de despacho y biblioteca." },
        { h3: "Plata, porcelana y relojes", p: "Soperas, juegos de té, vajillas, jarrones y relojes de sobremesa de colecciones familiares." },
      ],
    },
    {
      t: "links",
      h2: "Otras zonas",
      items: [
        { label: "Comunidad de Madrid", p: "Pozuelo, La Moraleja, Las Rozas, Majadahonda y Boadilla.", href: P.comunidad },
        { label: "Toda España", p: "Valoración por fotografías y desplazamiento.", href: P.espana },
        { label: "Tasación de herencias", p: "Inventario y valoración de bienes artísticos.", href: P.herencias },
      ],
    },
  ],
  faq: [FAQ.domicilio, FAQ.gratis, FAQ.discrecion],
},
{
  path: P.comunidad,
  title: "Tasación de antigüedades en la Comunidad de Madrid | Aldaba",
  description: "Tasación y compra de antigüedades en la Comunidad de Madrid: Pozuelo, La Moraleja, Las Rozas y Majadahonda. Visita a domicilio gratuita y discreción.",
  crumbs: crumb(["Tasación de antigüedades", P.tasacion], ["Comunidad de Madrid", P.comunidad]),
  service: { name: "Tasación de antigüedades en la Comunidad de Madrid", type: "Tasación de antigüedades", free: true, area: [{ "@type": "AdministrativeArea", name: "Comunidad de Madrid" }] },
  hero: {
    eyebrow: "Comunidad de Madrid",
    h1: "Tasación y compra de antigüedades en la Comunidad de Madrid",
    lead: "Vamos a su casa en Madrid capital y en los municipios de la Comunidad. Valoramos y compramos mobiliario, pintura, plata y objetos de arte en viviendas y fincas.",
    img: "sillon-heurtaut", ratio: "portrait",
  },
  blocks: [
    {
      t: "split", side: "right", ratio: "portrait",
      h2: "Una visita sin salir de su municipio",
      paras: [
        "Trabajamos en Chamberí, Retiro, Chamartín, el centro histórico y en municipios como Pozuelo de Alarcón, Aravaca, La Moraleja, Alcobendas, Las Rozas, Majadahonda y Boadilla del Monte.",
        "Muchas viviendas y fincas de la región conservan colecciones que nunca se han tasado. Las examinamos en su lugar, sin moverlas, y le explicamos qué merece la pena conservar, asegurar o vender.",
      ],
      list: ["Visita gratuita a viviendas y fincas", "Tasación de colecciones y de piezas sueltas", "Coordinación del traslado de las piezas"],
      img: "bronce-yacente",
    },
    {
      t: "facts", alt: true,
      h2: "Zonas donde trabajamos",
      items: [
        { h3: "Madrid capital", p: "Salamanca, Chamberí, Retiro, Chamartín, Centro y el resto de los distritos." },
        { h3: "Zona noroeste", p: "Pozuelo de Alarcón, Aravaca, Las Rozas, Majadahonda y Boadilla del Monte." },
        { h3: "Zona norte", p: "La Moraleja, Alcobendas, San Sebastián de los Reyes y Tres Cantos." },
      ],
    },
    { t: "steps", h2: "Cómo pedir una visita", items: stepsTasacion },
    {
      t: "links", alt: true, h2: "Más información",
      items: [
        { label: "Tasación en el Barrio de Salamanca", p: "Visitas en el barrio de la galería.", href: P.salamanca },
        { label: "Compra de antigüedades", p: "Qué compramos y cómo es el proceso.", href: P.compra },
        { label: "Tasación de herencias", p: "Inventario y valoración de testamentarias.", href: P.herencias },
      ],
    },
  ],
  faq: [FAQ.domicilio, FAQ.gratis, FAQ.vender],
},
{
  path: P.espana,
  title: "Tasación de antigüedades en toda España | Galería Aldaba",
  description: "Tasación y compra de antigüedades en toda España: valoración por fotografías, desplazamiento a su domicilio y traslado seguro de obras de arte.",
  crumbs: crumb(["Tasación de antigüedades", P.tasacion], ["Toda España", P.espana]),
  service: { name: "Tasación y compra de antigüedades en toda España", type: "Tasación de antigüedades", free: true, area: [{ "@type": "Country", name: "España" }] },
  hero: {
    eyebrow: "Toda España",
    h1: "Tasación y compra de antigüedades en toda España",
    lead: "Desde Madrid valoramos piezas y colecciones de cualquier provincia. Empezamos por las fotografías y, cuando la pieza lo justifica, nos desplazamos a verla.",
    img: "goya-toros", ratio: "land",
  },
  blocks: [
    {
      t: "split", side: "right", ratio: "land",
      h2: "Una galería de Madrid, sin importar dónde esté la pieza",
      paras: [
        "Si su pieza o su colección está en Barcelona, Valencia, Sevilla, Bilbao, Málaga, las Islas o cualquier otro punto de España, el proceso empieza igual: nos envía fotografías y le damos una valoración orientativa sin coste.",
        "Si la pieza lo merece, nos desplazamos a examinarla en persona. Para ventas coordinamos el embalaje y el transporte con empresas especializadas en obras de arte.",
      ],
      list: ["Valoración orientativa por fotografías, sin coste", "Desplazamiento a viviendas y colecciones", "Embalaje y transporte especializados"],
      img: "paisaje-koch",
    },
    { t: "steps", h2: "Cómo valoramos a distancia", items: stepsTasacion },
    {
      t: "facts", alt: true, h2: "Qué conviene saber",
      items: [
        { h3: "Fotografías claras", p: "Con buenas imágenes de la pieza, de sus marcas y de su estado, la primera valoración suele ser muy precisa." },
        { h3: "Desplazamiento", p: "Se acuerda antes de viajar y depende de la pieza y de la ubicación. Siempre se le informa con antelación." },
        { h3: "Traslado seguro", p: "Embalaje a medida y transporte con seguro para piezas frágiles, de gran tamaño o de especial valor." },
      ],
    },
    {
      t: "links", h2: "Más información",
      items: [
        { label: "Tasación en la Comunidad de Madrid", p: "Visitas a domicilio en toda la región.", href: P.comunidad },
        { label: "Compra de antigüedades", p: "Qué compramos y cómo es el proceso.", href: P.compra },
        { label: "Preguntas frecuentes", p: "Respuestas sobre tasación, compra y discreción.", href: P.faq },
      ],
    },
  ],
  faq: [FAQ.espana, FAQ.fotos, FAQ.vender],
},
];
