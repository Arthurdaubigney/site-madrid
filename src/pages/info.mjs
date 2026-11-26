import { P, FAQ, crumb } from "./shared.mjs";
import { SITE, LEGAL, PHONES, phoneText, phoneHref } from "../config.mjs";

const faqAll = [
  { q: "¿La tasación es realmente gratuita?", a: FAQ.gratis.a },
  { q: "¿Tasan a domicilio?", a: FAQ.domicilio.a },
  { q: "¿Qué fotografías debo enviar?", a: FAQ.fotos.a },
  { q: "¿Cómo garantizan la discreción?", a: FAQ.discrecion.a },
  { q: "¿Estoy obligado a vender si me hacen una oferta?", a: FAQ.vender.a },
  { q: "¿Qué hace que una antigüedad tenga valor?", a: FAQ.valor.a },
  { q: "¿Pueden valorar los bienes de una herencia?", a: FAQ.herencia.a },
  { q: "¿Trabajan fuera de Madrid?", a: FAQ.espana.a },
  { q: "¿Compran piezas sin documentación?", a: FAQ.procedencia.a },
  { q: "¿Compran piezas restauradas o con desperfectos?", a: FAQ.restauradas.a },
];

export default [
{
  path: P.galeria,
  title: "La galería | Anticuario y tasador en Madrid | Aldaba",
  description: "Conozca la Galería Anticuaria Aldaba: anticuario y gabinete de tasación en Madrid. Peritaje riguroso, examen en persona, trato directo y discreción.",
  schema: "about",
  crumbs: crumb(["La galería", P.galeria]),
  hero: {
    eyebrow: "La galería",
    h1: "Galería anticuaria y gabinete de tasación en Madrid",
    lead: "Somos una galería de antigüedades con sede en Madrid. Tasamos, compramos y asesoramos con un criterio: examinar cada pieza en persona y hablar con claridad.",
    img: "salon-tesse", ratio: "portrait",
  },
  blocks: [
    {
      t: "split", side: "right", ratio: "portrait", moment: false,
      h2: "Una galería con criterio de peritaje",
      paras: [
        "La Galería Anticuaria Aldaba reúne en un mismo lugar el trabajo del anticuario y el del tasador. Conocemos el mercado porque compramos y vendemos, y valoramos con rigor porque cada tasación se apoya en el estudio de la pieza.",
        "Trabajamos con particulares, familias, abogados, notarios y gestores que necesitan una opinión experta y discreta sobre mobiliario, pintura, plata, bronces, porcelana y objetos de colección.",
      ],
      img: "busto-moro",
    },
    {
      t: "facts", alt: true, h2: "Cómo trabajamos",
      items: [
        { h3: "Examen en persona", p: "Siempre que es posible, vemos la pieza en su lugar. Una fotografía orienta, pero el examen directo decide." },
        { h3: "Claridad", p: "Le explicamos cómo hemos llegado al valor y le decimos con franqueza cuándo una pieza tiene poco valor de mercado." },
        { h3: "Discreción", p: "Lo que nos confía, la pieza, su propietario y su ubicación, se trata con la máxima reserva." },
      ],
    },
    {
      t: "wall", h2: "Lo que valoramos",
      intro: "Mobiliario, pintura, plata, bronces, porcelana, relojes y objetos de arte.",
      imgs: ["sevres-parisenfants", "retrato-terborch", "sopera-weyhe", "comoda-piffetti"],
    },
    {
      t: "links", alt: true, h2: "Nuestros servicios",
      items: [
        { label: "Tasación de antigüedades", p: "Peritaje con informe escrito.", href: P.tasacion },
        { label: "Compra de antigüedades", p: "Oferta directa y sin intermediarios.", href: P.compra },
        { label: "Tasación de herencias", p: "Inventario y valoración para el reparto.", href: P.herencias },
      ],
    },
  ],
},
{
  path: P.faq,
  title: "Preguntas frecuentes sobre tasación de antigüedades | Aldaba",
  description: "Respuestas a las preguntas más habituales sobre tasación, compra y venta de antigüedades en Madrid: coste, visita a domicilio, discreción y herencias.",
  schema: "faq",
  crumbs: crumb(["Preguntas frecuentes", P.faq]),
  hero: {
    eyebrow: "Preguntas frecuentes",
    h1: "Preguntas frecuentes sobre tasación y compra de antigüedades",
    lead: "Respuestas claras a lo que más nos preguntan sobre el coste, la visita a domicilio, la discreción, las herencias y la venta de antigüedades.",
    img: "sevres-elefante", ratio: "portrait",
  },
  blocks: [],
  faq: faqAll,
  faqIntro: false,
},
{
  path: P.contacto,
  title: "Contacto | Solicite una tasación gratuita en Madrid | Aldaba",
  description: "Contacte con la Galería Anticuaria Aldaba en Madrid: solicite una tasación gratuita de antigüedades y obras de arte, con visita a domicilio y discreción.",
  schema: "contact",
  crumbs: crumb(["Contacto", P.contacto]),
  hero: {
    eyebrow: "Contacto",
    h1: "Contacte con la galería y solicite su tasación gratuita",
    lead: "Cuéntenos qué pieza desea valorar. Respondemos con una valoración orientativa y, si procede, concertamos una visita a domicilio en Madrid o en toda España.",
    img: "reloj-brockbank", ratio: "portrait",
  },
  blocks: [
    {
      t: "facts", h2: "Cómo contactar",
      items: [
        { h3: "Por teléfono", p: `Llame al <a href="${phoneHref(PHONES[0])}">${phoneText(PHONES[0])}</a> o al <a href="${phoneHref(PHONES[1])}">${phoneText(PHONES[1])}</a> y le atendemos en la galería.` },
        { h3: "Con fotografías", p: "Use el formulario y adjunte imágenes de la pieza, sus medidas y lo que sepa de su origen." },
        { h3: "Visita a la galería", p: `Nos encontramos en ${SITE.locality}. Recibimos con cita previa.` },
        { h3: "Fuera de Madrid", p: "Valoramos por fotografías y nos desplazamos a su domicilio en toda España cuando la pieza lo justifica." },
      ],
    },
  ],
  formCopy: { title: "Solicite su <em>tasación gratuita</em>" },
},
{
  path: "/aviso-legal/",
  title: "Aviso legal y condiciones de uso | Galería Anticuaria Aldaba",
  description: "Aviso legal de la Galería Anticuaria Aldaba en Madrid: titular, condiciones de uso, propiedad intelectual, responsabilidad y legislación aplicable.",
  noindex: false, form: false, bare: true,
  crumbs: crumb(["Aviso legal", "/aviso-legal/"]),
  hero: { img: "salon-tesse" },
  blocks: [
    {
      t: "doc", h1: "Aviso legal",
      sections: [
        ["Titular del sitio web", `<p>Este sitio web pertenece a la ${SITE.brand}, galería de antigüedades y gabinete de tasación con sede en ${SITE.locality}.</p>${LEGAL.razonSocial ? `<p>Razón social: ${LEGAL.razonSocial}.${LEGAL.nif ? ` NIF: ${LEGAL.nif}.` : ""}</p>` : ""}${LEGAL.domicilio ? `<p>Domicilio: ${LEGAL.domicilio}.</p>` : ""}<p>Para cualquier consulta puede utilizar el <a href="/contacto/#formulario">formulario de contacto</a>.</p>`],
        ["Condiciones de uso", "<p>El acceso y el uso de este sitio web atribuyen la condición de usuario e implican la aceptación de este aviso. La información publicada tiene carácter informativo y no constituye una oferta vinculante ni una tasación. Las valoraciones se emiten tras el estudio de cada pieza.</p>"],
        ["Propiedad intelectual", "<p>Los textos y el diseño de este sitio pertenecen a la galería. Las fotografías proceden de la colección de acceso abierto del Metropolitan Museum of Art (licencia CC0). Queda prohibida la reproducción de los contenidos propios sin autorización.</p>"],
        ["Responsabilidad", "<p>La galería procura que la información sea exacta y actual, pero no responde de los errores u omisiones que pudieran existir ni del uso que se haga de ella. Los enlaces a sitios de terceros, como el servicio de formularios, se rigen por sus propias condiciones.</p>"],
        ["Legislación aplicable", "<p>Este aviso se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a derecho.</p>"],
      ],
    },
  ],
},
{
  path: "/politica-de-privacidad/",
  title: "Política de privacidad | Galería Anticuaria Aldaba",
  description: "Política de privacidad de la Galería Anticuaria Aldaba: qué datos trata el formulario de contacto, con qué finalidad y cómo ejercer sus derechos.",
  form: false, bare: true,
  crumbs: crumb(["Política de privacidad", "/politica-de-privacidad/"]),
  hero: { img: "salon-tesse" },
  blocks: [
    {
      t: "doc", h1: "Política de privacidad",
      sections: [
        ["Responsable del tratamiento", `<p>${SITE.brand}, con sede en ${SITE.locality}. Puede contactar a través del <a href="/contacto/#formulario">formulario de contacto</a>.</p>`],
        ["Qué datos tratamos y para qué", "<p>Cuando solicita una tasación o nos escribe, tratamos los datos que usted facilita (nombre, medio de contacto, descripción y fotografías de la pieza) para responder a su solicitud, valorar la pieza y, en su caso, formular una oferta de compra.</p>"],
        ["Base jurídica y conservación", "<p>La base jurídica es su consentimiento y la aplicación de medidas precontractuales a su petición. Conservamos los datos el tiempo necesario para atender su solicitud y durante los plazos legales aplicables.</p>"],
        ["Servicio de formularios", "<p>El formulario de contacto se presta a través de Tally, que actúa como encargado del tratamiento. Los datos que usted introduce se transmiten a ese servicio para que nos lleguen. Consulte su política de privacidad para más información.</p>"],
        ["Sus derechos", "<p>Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiéndonos a través del formulario de contacto. Si considera que no hemos tratado sus datos correctamente, puede reclamar ante la Agencia Española de Protección de Datos.</p>"],
        ["Cookies", "<p>Este sitio no utiliza cookies de seguimiento ni de publicidad. Las tipografías se sirven desde el propio sitio, sin conexiones a terceros.</p>"],
      ],
    },
  ],
},
];
