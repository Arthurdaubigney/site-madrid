// Utilidades y contenidos compartidos entre páginas.
export const home = { name: "Inicio", href: "/" };
export const crumb = (...items) => [home, ...items.map(([name, href]) => ({ name, href }))];

export const P = {
  tasacion: "/tasacion-antiguedades-madrid/",
  compra: "/compra-antiguedades-madrid/",
  herencias: "/tasacion-herencias-madrid/",
  comunidad: "/tasacion-antiguedades-comunidad-de-madrid/",
  espana: "/tasacion-antiguedades-toda-espana/",
  nosotros: "/quienes-somos/",
  faq: "/preguntas-frecuentes/",
  contacto: "/contacto/",
  muebles: "/compra-antiguedades-madrid/muebles-antiguos/",
  pintura: "/compra-antiguedades-madrid/pintura-antigua/",
  plata: "/compra-antiguedades-madrid/plata-antigua/",
  bronces: "/compra-antiguedades-madrid/bronces-y-esculturas/",
  porcelana: "/compra-antiguedades-madrid/porcelana-y-ceramica/",
  relojes: "/compra-antiguedades-madrid/relojes-y-objetos-de-arte/",
  joyeria: "/compra-antiguedades-madrid/joyeria-espanola/",
  monedas: "/compra-antiguedades-madrid/monedas-espanolas/",
  pieles: "/compra-antiguedades-madrid/pieles-y-abrigos-de-piel/",
  creditos: "/creditos-fotograficos/",
};

export const stepsTasacion = [
  { h3: "Nos escribe o nos llama", p: "Fotografías, medidas y lo que sepa de la pieza, por el formulario o por teléfono." },
  { h3: "Primera valoración", p: "Estudiamos las imágenes y le damos una horquilla de valor, sin coste." },
  { h3: "Vamos a su casa", p: "Si la pieza lo merece, acudimos a su domicilio, la examinamos y la fotografiamos." },
  { h3: "Valoración u oferta", p: "Recibe un informe de valoración o una oferta de compra. Usted decide, sin plazos ni presión." },
];

export const FAQ = {
  gratis: { q: "¿La tasación es gratuita?", a: "La valoración orientativa a partir de fotografías y la primera visita a domicilio en Madrid no tienen coste ni compromiso. Si necesita un informe de valoración por escrito, por ejemplo para un seguro o una herencia, se lo presupuestamos antes de empezar." },
  domicilio: { q: "¿Vienen a mi casa?", a: "Sí, somos anticuarios a domicilio. Vamos a su vivienda en Madrid y en toda la Comunidad de Madrid. Fuera de Madrid empezamos por las fotografías y nos desplazamos cuando la pieza o el conjunto lo justifican." },
  local: { q: "¿Tienen tienda o local abierto al público?", a: "No. Somos anticuarios a domicilio: vamos a su casa en Madrid y en toda España, vemos la pieza en su sitio y le explicamos qué es y qué puede valer." },
  fotos: { q: "¿Qué fotografías debo enviar?", a: "Una vista general de la pieza, el detalle de firmas, marcas, etiquetas o sellos, la parte posterior o inferior y cualquier desperfecto. Añada las medidas y lo que sepa de su procedencia." },
  discrecion: { q: "¿Cómo tratan la información?", a: "Con discreción. No publicamos ni difundimos datos del propietario ni de la pieza, y trabajamos con confidencialidad desde el primer mensaje." },
  vender: { q: "¿Estoy obligado a vender si me hacen una oferta?", a: "No. La tasación y la oferta son independientes y no le comprometen. Puede conservar la pieza, venderla a otro comprador o aceptar nuestra propuesta." },
  valor: { q: "¿Qué hace que una antigüedad tenga valor?", a: "Influyen la autoría o la escuela, la época, la calidad de ejecución, el estado, las restauraciones, la procedencia y la demanda del mercado. Una pieza antigua no siempre es valiosa, y se lo decimos con claridad." },
  herencia: { q: "¿Valoran los bienes de una herencia?", a: "Sí. Hacemos un inventario de los muebles, cuadros, objetos y joyas de la vivienda, los valoramos uno a uno y le entregamos una relación por escrito para el reparto. Consulte con su notario o asesor los requisitos de cada trámite." },
  espana: { q: "¿Se desplazan fuera de Madrid?", a: "Sí, a toda España. Valoramos primero por fotografías y vamos a su domicilio cuando la pieza o la colección lo justifican. El embalaje y el transporte se coordinan con empresas especializadas en obras de arte." },
  procedencia: { q: "¿Compran piezas sin documentación?", a: "Para comprar necesitamos poder acreditar la propiedad y la procedencia legal de la pieza. Le indicamos qué documentación conviene reunir y cómo conseguirla." },
  restauradas: { q: "¿Compran piezas restauradas o con desperfectos?", a: "Sí. El estado influye en el valor, pero muchas piezas restauradas conservan un valor importante. Le explicamos la diferencia entre una restauración cuidadosa y una intervención que perjudica a la pieza." },
};
