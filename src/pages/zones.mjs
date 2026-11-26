import { P, FAQ, crumb, stepsTasacion } from "./shared.mjs";

export default [
{
  path: P.comunidad,
  title: "Anticuarios a domicilio en Madrid y su Comunidad | Aldaba",
  description: "Anticuarios a domicilio en Madrid capital y en la Comunidad: Chamberí, Retiro, Chamartín, Pozuelo, La Moraleja y Las Rozas. Tasación y compra sin compromiso.",
  crumbs: crumb(["Tasación de antigüedades", P.tasacion], ["Madrid y Comunidad de Madrid", P.comunidad]),
  service: { name: "Anticuarios a domicilio en Madrid y la Comunidad de Madrid", type: "Tasación y compra de antigüedades", free: true, area: [{ "@type": "AdministrativeArea", name: "Comunidad de Madrid" }] },
  hero: {
    eyebrow: "Madrid y Comunidad de Madrid",
    h1: "Anticuarios a domicilio en <em>Madrid</em> y su Comunidad",
    lead: "Vamos a su casa en cualquier barrio de Madrid y en los municipios de la Comunidad. Valoramos y compramos muebles, cuadros, plata, joyas y objetos antiguos en viviendas y fincas.",
    img: "sillon-heurtaut", ratio: "portrait",
    phone: true,
  },
  blocks: [
    {
      t: "split", side: "right", ratio: "portrait",
      h2: "Vamos a su barrio, a su pueblo o a su finca",
      paras: [
        "Nos desplazamos por Madrid capital, entre otros barrios Chamberí, Retiro, Chamartín, Moncloa, Arganzuela y el Centro, y por municipios como Pozuelo de Alarcón, Aravaca, La Moraleja, Alcobendas, Las Rozas, Majadahonda, Boadilla del Monte, Torrelodones y Alcalá de Henares.",
        "Muchas viviendas y fincas de la región conservan colecciones que nunca se han valorado. Las vemos en su lugar, sin moverlas, y le explicamos qué merece la pena conservar, asegurar o vender.",
      ],
      list: ["Visita gratuita a viviendas y fincas", "Tasación de colecciones y de piezas sueltas", "Coordinación del traslado de las piezas"],
      img: "bronce-yacente",
    },
    {
      t: "facts", alt: true,
      h2: "Zonas por las que nos desplazamos",
      items: [
        { h3: "Madrid capital", p: "Chamberí, Retiro, Chamartín, Moncloa, Arganzuela, Centro y el resto de los distritos." },
        { h3: "Zona noroeste", p: "Pozuelo de Alarcón, Aravaca, Las Rozas, Majadahonda, Boadilla del Monte y Torrelodones." },
        { h3: "Zona norte y este", p: "La Moraleja, Alcobendas, San Sebastián de los Reyes, Tres Cantos y Alcalá de Henares." },
      ],
    },
    { t: "steps", h2: "Cómo pedir una visita", items: stepsTasacion },
    {
      t: "links", alt: true, h2: "Más información",
      items: [
        { label: "Compra de antigüedades", p: "Qué compramos y cómo es el proceso.", href: P.compra },
        { label: "Tasación de herencias", p: "Inventario, valoración y vaciado de viviendas.", href: P.herencias },
        { label: "Anticuarios a domicilio en toda España", p: "Valoración por fotografías y desplazamiento.", href: P.espana },
      ],
    },
  ],
  faq: [FAQ.domicilio, FAQ.local, FAQ.gratis, FAQ.vender],
},
{
  path: P.espana,
  title: "Anticuarios a domicilio en toda España | Tasación | Aldaba",
  description: "Anticuarios a domicilio en toda España: valoración por fotografías, desplazamiento a su casa y traslado cuidado de obras de arte. Tasación sin compromiso.",
  crumbs: crumb(["Tasación de antigüedades", P.tasacion], ["Toda España", P.espana]),
  service: { name: "Anticuarios a domicilio en toda España", type: "Tasación y compra de antigüedades", free: true, area: [{ "@type": "Country", name: "España" }] },
  hero: {
    eyebrow: "Toda España",
    h1: "Anticuarios a domicilio en <em>toda España</em>",
    lead: "Vamos a su casa estén donde estén sus piezas. Empezamos por las fotografías y, cuando la pieza o la colección lo justifican, nos desplazamos a verlas.",
    img: "goya-toros", ratio: "land",
    phone: true,
  },
  blocks: [
    {
      t: "split", side: "right", ratio: "land",
      h2: "Vamos a donde estén sus piezas",
      paras: [
        "Si su pieza o su colección está en Barcelona, Valencia, Sevilla, Bilbao, Málaga, Zaragoza, las islas o cualquier otro punto de España, el proceso empieza igual: nos envía fotografías y le damos una valoración orientativa sin coste.",
        "Si la pieza lo merece, nos desplazamos a verla en persona. Para las compras coordinamos el embalaje y el transporte con empresas especializadas en obras de arte.",
      ],
      list: ["Valoración orientativa por fotografías, sin coste", "Desplazamiento a viviendas y colecciones", "Embalaje y transporte coordinados"],
      img: "paisaje-koch",
    },
    { t: "steps", h2: "Cómo valoramos a distancia", items: stepsTasacion },
    {
      t: "facts", alt: true, h2: "Qué conviene saber",
      items: [
        { h3: "Fotografías claras", p: "Con buenas imágenes de la pieza, de sus marcas y de su estado, la primera valoración suele ser muy ajustada." },
        { h3: "Desplazamiento", p: "Se acuerda antes de viajar y depende de la pieza y de la ubicación. Siempre se le informa con antelación." },
        { h3: "Traslado cuidado", p: "Embalaje a medida y transporte con seguro para piezas frágiles, de gran tamaño o de especial valor." },
      ],
    },
    {
      t: "links", h2: "Más información",
      items: [
        { label: "Anticuarios a domicilio en Madrid y su Comunidad", p: "Visitas a domicilio en toda la región.", href: P.comunidad },
        { label: "Compra de antigüedades", p: "Qué compramos y cómo es el proceso.", href: P.compra },
        { label: "Preguntas frecuentes", p: "Respuestas sobre tasación, compra y discreción.", href: P.faq },
      ],
    },
  ],
  faq: [FAQ.espana, FAQ.fotos, FAQ.local, FAQ.vender],
},
];
