import { P, FAQ } from "./shared.mjs";
import { make } from "./categories.mjs";

const pages = [
{
  path: P.joyeria, name: "Joyería española", what: "una joya española antigua", service: "Compra y tasación de joyería española antigua a domicilio",
  title: "Compra de joyería española antigua: perlas y damasquinado",
  description: "Compramos joyas españolas antiguas a domicilio en Madrid y España: perlas de Mallorca, damasquinado de Toledo, azabache, coral y camafeos. Tasación gratuita.",
  eyebrow: "Joyería española", h1: "Compra de joyería española antigua a <em>domicilio</em>",
  lead: "Vamos a su casa a ver perlas de Mallorca, damasquinado de Toledo, azabache, coral, camafeos y joyas de época. Piezas que cuentan la tradición artesana de cada región española.",
  hero: "joya-colgante-perlas", heroRatio: "portrait",
  h2: "Perlas de Mallorca, Toledo y joyería regional", img: "joya-collar-perlas", ratio: "square",
  paras: [
    "La joyería española es muy variada. Las perlas de Mallorca, fabricadas en Manacor y célebres desde finales del siglo XIX, se compran por su calidad, su lustre y sus estuches de la casa. El damasquinado de Toledo, con sus dibujos de inspiración árabe, es una de las artesanías más reconocibles del país.",
    "También compramos azabache, coral, camafeos, esmaltes, conjuntos de época isabelina y bisutería antigua con firma. Miramos collares, pulseras, broches, pendientes y colgantes, sueltos o en juegos completos.",
  ],
  list: ["Perlas de Mallorca: collares, pulseras y pendientes", "Damasquinado de Toledo: broches, pulseras y colgantes", "Azabache, coral y camafeos", "Joyas de época isabelina y bisutería antigua"],
  factors: [
    { h3: "Origen y firma", p: "Buscamos marcas de la casa, estuches y etiquetas que confirmen el origen de la pieza, como los de las perlas de Manacor o los talleres toledanos." },
    { h3: "Calidad y estado", p: "Miramos el lustre y el tamaño de las perlas, la finura del damasquinado, los cierres y que no falten piezas del juego." },
    { h3: "Época y conjunto", p: "Un juego completo con su estuche vale más que las piezas sueltas. Distinguimos la joya de época de la reproducción posterior." },
  ],
  wallH2: "Colgantes, perlas y joyas de época", wallIntro: "Joyería con perlas barrocas, coral y esmalte de los siglos XVI al XIX.",
  wall: ["joya-colgante-coral", "joya-colgante-loro", "joya-colgante-gato"],
  related: [["Relojes y objetos de arte", "Relojes, tabaqueras, cofres y esmaltes.", P.relojes], ["Monedas españolas", "Monedas de todas las épocas y materiales.", P.monedas], ["Tasación de antigüedades", "Cómo es una tasación a domicilio.", P.tasacion]],
  faq: [
    { q: "¿Compran perlas de Mallorca?", a: "Sí. Compramos collares, pulseras y pendientes de perlas de Mallorca, con preferencia por las piezas con estuche de la casa y los juegos completos." },
    { q: "¿Compran joyas de damasquinado de Toledo?", a: "Sí. Miramos broches, pulseras, colgantes y otros objetos damasquinados, la finura del dibujo y el estado del acabado." },
    FAQ.fotos, FAQ.gratis,
  ],
},
{
  path: P.monedas, name: "Monedas españolas", what: "una moneda española", service: "Compra y tasación de monedas españolas antiguas a domicilio",
  title: "Compra de monedas españolas antiguas a domicilio | Aldaba",
  description: "Compramos monedas españolas de todas las épocas, materiales y tiradas, de Al-Ándalus a las pesetas, a domicilio en Madrid y toda España. Tasación gratuita.",
  eyebrow: "Numismática española", h1: "Compra de monedas españolas antiguas a <em>domicilio</em>",
  lead: "Vamos a su casa a ver monedas españolas de todas las épocas, materiales y tiradas: de los visigodos y Al-Ándalus a los Reyes Católicos, los reales de a ocho y las pesetas.",
  hero: "moneda-excelentes", heroRatio: "land",
  h2: "Una colección, una moneda o un tesorillo", img: "moneda-cuatro-reales", ratio: "square",
  paras: [
    "La numismática española abarca más de mil años de acuñaciones. Compramos monedas sueltas, colecciones completas y tesorillos heredados, de oro, plata, vellón y cobre, de cecas peninsulares y de ultramar.",
    "El valor de una moneda depende de su época, su ceca, su año, su tirada y su estado de conservación. Una moneda común puede valer poco y una emisión escasa puede valer mucho, y se lo explicamos con claridad.",
  ],
  list: ["Visigodos, Al-Ándalus y reinos medievales", "Reyes Católicos, Austrias y Borbones", "Reales de a ocho y monedas de cecas de América", "Siglos XIX y XX: Isabel II, pesetas y emisiones de Franco"],
  extra: [
    {
      t: "cards", cols: 3, cardRatio: "square", id: "epocas",
      h2: "Épocas, materiales y tiradas que compramos",
      intro: "Cada época y cada material tiene su mercado. Estas son algunas de las series que compramos.",
      items: [
        { h3: "Visigodos y Al-Ándalus", p: "Tremises visigodos, dinares y dírhams de Al-Ándalus, de oro y plata.", img: "moneda-tremis" },
        { h3: "Reyes Católicos", p: "Excelentes de oro, reales de plata y monedas de la unión de las coronas.", img: "moneda-excelentes" },
        { h3: "Plata de América", p: "Reales de a ocho y de menor valor de las cecas de México, Potosí y Lima.", img: "moneda-reales-carlos-iv" },
        { h3: "Columnarios y Borbones", p: "Monedas columnarias del siglo XVIII y acuñaciones con el busto del rey.", img: "moneda-dos-reales-1754" },
        { h3: "Cobre y vellón", p: "Maravedís y monedas menudas de cobre y vellón de los siglos XVI y XVII.", img: "moneda-maravedis" },
        { h3: "Siglos XIX y XX", p: "Duros, pesetas del Gobierno Provisional y emisiones de Alfonso XII a Franco.", img: "moneda-cinco-pesetas" },
      ],
    },
  ],
  factors: [
    { h3: "Época, ceca y año", p: "La ceca y la fecha identifican cada emisión. Contrastamos cada moneda con catálogos de referencia de numismática española." },
    { h3: "Tirada y rareza", p: "Una tirada corta, una variante o un error de acuñación pueden multiplicar el valor de una moneda común." },
    { h3: "Material y conservación", p: "Miramos el material, el peso, el brillo original y el desgaste, y detectamos limpiezas, agujeros y falsificaciones." },
  ],
  wallH2: "Monedas de oro, plata y cobre", wallIntro: "Anverso y reverso de monedas españolas de distintas épocas y materiales.",
  wall: ["moneda-reyes-catolicos", "moneda-dirham", "moneda-ocho-reales-1759", "moneda-pesetas-1870"],
  related: [["Joyería española", "Perlas de Mallorca, damasquinado de Toledo y joyas de época.", P.joyeria], ["Relojes y objetos de arte", "Relojes, tabaqueras, cofres y esmaltes.", P.relojes], ["Tasación de antigüedades", "Cómo es una tasación a domicilio.", P.tasacion]],
  faq: [
    { q: "¿Compran colecciones completas de monedas?", a: "Sí. Valoramos colecciones enteras, con sus álbumes, estuches y catálogos, además de monedas sueltas y tesorillos heredados." },
    { q: "¿Compran monedas de distintos materiales?", a: "Sí. Compramos monedas de oro, plata, vellón, cobre y bronce, y las valoramos por su rareza y estado además de por su material." },
    { q: "¿Cómo saben si una moneda es falsa?", a: "Miramos el peso, el módulo, el relieve y el desgaste, y los comparamos con ejemplares documentados. Si hay dudas, se lo decimos con claridad." },
    FAQ.gratis,
  ],
},
{
  path: P.pieles, name: "Pieles y abrigos de piel", what: "un abrigo de piel antiguo", service: "Compra y tasación de abrigos de piel y pieles antiguas a domicilio",
  title: "Compra de abrigos de piel y pieles antiguas a domicilio",
  description: "Compramos abrigos de piel, capas, estolas y manguitos antiguos y vintage a domicilio en Madrid y toda España. Tasación gratuita, sin compromiso y discreta.",
  eyebrow: "Pieles y abrigos de piel", h1: "Compra de abrigos de piel y pieles antiguas a <em>domicilio</em>",
  lead: "Vamos a su casa a ver abrigos de piel, capas, estolas, manguitos y cuellos antiguos o vintage. Miramos la piel, la confección y la conservación.",
  hero: "piel-capa-negra", heroRatio: "portrait",
  h2: "Abrigos, capas y complementos de piel", img: "piel-capa-rojiza", ratio: "portrait",
  paras: [
    "Muchas casas conservan un abrigo de piel heredado que no se ha vuelto a usar. Compramos abrigos largos y cortos, capas, estolas, chaquetas, cuellos y manguitos, de peleteros conocidos o de confección anónima.",
    "El valor depende de la calidad y la especie de la piel, de la firma del peletero, de la época y del estado. Comprobamos también la documentación que exige la normativa vigente sobre especies protegidas.",
  ],
  list: ["Abrigos y chaquetas de visón, zorro, astracán y otras pieles", "Capas, estolas y cuellos de época", "Manguitos y complementos", "Piezas con firma de peletero o de casa de moda"],
  factors: [
    { h3: "Piel y confección", p: "Miramos la calidad de la piel, su pelo y su flexibilidad, la simetría de la confección y la firma del peletero." },
    { h3: "Conservación", p: "Revisamos la piel por el lado del cuero, el forro, las costuras y las zonas de roce, y detectamos la sequedad y las polillas." },
    { h3: "Documentación y legalidad", p: "Comprobamos la especie y la documentación necesaria. Solo compramos piezas que se puedan comercializar con arreglo a la ley." },
  ],
  wallH2: "Abrigos, capas y manguitos", wallIntro: "Piezas de piel de los siglos XIX y XX.",
  wall: ["piel-manguito-marron", "piel-abrigo-blanco", "piel-manguito-negro", "piel-abrigo-gris"],
  related: [["Joyería española", "Perlas de Mallorca, damasquinado de Toledo y joyas de época.", P.joyeria], ["Relojes y objetos de arte", "Relojes, tabaqueras, cofres y esmaltes.", P.relojes], ["Tasación de herencias", "Inventario, valoración y vaciado de viviendas.", P.herencias]],
  faq: [
    { q: "¿Compran abrigos de piel antiguos?", a: "Sí. Miramos abrigos, capas, estolas y manguitos antiguos o vintage, con atención a la piel, la confección y el estado." },
    { q: "¿Qué ocurre con las pieles de especies protegidas?", a: "Solo compramos piezas que se puedan comercializar legalmente. Comprobamos la especie y la documentación, y le indicamos qué se necesita en cada caso." },
    { q: "¿Cómo debo guardar un abrigo de piel?", a: "En un lugar fresco, seco y ventilado, sobre una percha ancha y en una funda transpirable. Evite el plástico, la humedad y la luz directa." },
    FAQ.gratis,
  ],
},
];
export default pages.map(make);
