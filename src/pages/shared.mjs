// Utilidades y contenidos compartidos entre páginas.
export const home = { name: "Inicio", href: "/" };
export const crumb = (...items) => [home, ...items.map(([name, href]) => ({ name, href }))];

export const P = {
  tasacion: "/tasacion-antiguedades-madrid/",
  compra: "/compra-antiguedades-madrid/",
  herencias: "/tasacion-herencias-madrid/",
  comunidad: "/tasacion-antiguedades-comunidad-de-madrid/",
  espana: "/tasacion-antiguedades-toda-espana/",
  galeria: "/la-galeria/",
  faq: "/preguntas-frecuentes/",
  contacto: "/contacto/",
  muebles: "/compra-antiguedades-madrid/muebles-antiguos/",
  pintura: "/compra-antiguedades-madrid/pintura-antigua/",
  plata: "/compra-antiguedades-madrid/plata-antigua/",
  bronces: "/compra-antiguedades-madrid/bronces-y-esculturas/",
  porcelana: "/compra-antiguedades-madrid/porcelana-y-ceramica/",
  relojes: "/compra-antiguedades-madrid/relojes-y-objetos-de-arte/",
};

export const stepsTasacion = [
  { h3: "Nos escribe", p: "Envíe fotografías de la pieza, sus medidas y lo que sepa de su origen mediante el formulario." },
  { h3: "Valoración orientativa", p: "Un perito estudia las imágenes y le responde con una primera horquilla de valor, sin coste." },
  { h3: "Visita a domicilio", p: "Si la pieza lo merece, vamos a verla en persona, la examinamos y la documentamos." },
  { h3: "Informe u oferta", p: "Recibe un informe de tasación o una oferta de compra. Usted decide, sin plazos ni presión." },
];

export const FAQ = {
  gratis: { q: "¿La tasación es realmente gratuita?", a: "La valoración orientativa por fotografías y la primera visita a domicilio en Madrid no tienen coste ni compromiso. Solo se presupuesta, antes de empezar, el informe pericial por escrito cuando usted lo necesita para un seguro, una herencia o un trámite." },
  domicilio: { q: "¿Tasan a domicilio?", a: "Sí. Vamos a su vivienda en Madrid y en la Comunidad de Madrid para examinar la pieza en persona. Fuera de Madrid empezamos por las fotografías y valoramos el desplazamiento según la pieza." },
  fotos: { q: "¿Qué fotografías debo enviar?", a: "Una vista general de la pieza, el detalle de firmas, marcas, etiquetas o sellos, la parte posterior o inferior y cualquier desperfecto. Añada las medidas y lo que sepa de su procedencia." },
  discrecion: { q: "¿Cómo garantizan la discreción?", a: "No publicamos ni difundimos datos del propietario ni de la pieza. Trabajamos con confidencialidad desde el primer mensaje, también en tasaciones de herencias." },
  vender: { q: "¿Estoy obligado a vender si me hacen una oferta?", a: "No. La tasación y la oferta son independientes y no le comprometen. Puede conservar la pieza, venderla a otro comprador o aceptar nuestra propuesta." },
  valor: { q: "¿Qué hace que una antigüedad tenga valor?", a: "Pesan la autoría o la escuela, la época, la calidad de ejecución, el estado de conservación, las restauraciones, la procedencia documentada y la demanda actual del mercado. Una pieza antigua no es siempre una pieza valiosa, y se lo decimos con claridad." },
  herencia: { q: "¿Pueden valorar los bienes de una herencia?", a: "Sí. Inventariamos y tasamos mobiliario, pintura, plata y objetos de arte de una herencia y emitimos un informe pericial para el reparto. Consulte con su notario o asesor los requisitos de cada trámite." },
  espana: { q: "¿Trabajan fuera de Madrid?", a: "Sí, en toda España. Valoramos por fotografías, nos desplazamos cuando la pieza o el conjunto lo justifican y coordinamos el embalaje y el transporte con empresas especializadas en obras de arte." },
  procedencia: { q: "¿Compran piezas sin documentación?", a: "Para comprar necesitamos poder acreditar la propiedad y la procedencia legal de la pieza. Le indicamos qué documentación conviene reunir y cómo conseguirla." },
  restauradas: { q: "¿Compran piezas restauradas o con desperfectos?", a: "Sí. El estado influye en el valor, pero muchas piezas restauradas conservan un valor importante. Distinguimos entre una restauración correcta y una intervención que perjudica a la pieza." },
};
