import { P, FAQ, crumb } from "./shared.mjs";
import { SITE, LEGAL, PHONES, phoneText, phoneHref } from "../config.mjs";
import { allImages } from "../images.mjs";

const creditRows = Object.entries(allImages()).filter(([, m]) => m.credit).map(([, m]) => `<li><a href="${m.credit.page}" rel="noopener">${m.alt}</a>. ${m.credit.by.replace(/</g, "&lt;")}, licencia ${m.credit.licence}.</li>`).join("");

const faqAll = [
  FAQ.gratis, FAQ.domicilio, FAQ.local, FAQ.fotos, FAQ.discrecion, FAQ.vender, FAQ.valor, FAQ.herencia, FAQ.espana, FAQ.procedencia, FAQ.restauradas,
];

export default [
{
  path: P.nosotros,
  title: "Quiénes somos | Anticuarios a domicilio en Madrid | Aldaba",
  description: "Somos anticuarios y trabajamos siempre a domicilio: vamos a su casa en Madrid y en toda España a ver, valorar y comprar sus antigüedades con discreción.",
  schema: "about",
  crumbs: crumb(["Quiénes somos", P.nosotros]),
  hero: {
    eyebrow: "Quiénes somos",
    h1: "Somos anticuarios y vamos a <em>su casa</em>",
    lead: "Compramos y valoramos antigüedades a domicilio en Madrid y en toda España. No tenemos tienda: nos desplazamos a su vivienda, vemos cada pieza en su sitio y hablamos con claridad.",
    img: "salon-tesse", ratio: "portrait",
    phone: true,
  },
  blocks: [
    {
      t: "split", side: "right", ratio: "portrait", moment: false,
      h2: "Anticuarios a domicilio",
      paras: [
        "Trabajamos siempre en casa del cliente. Eso nos permite ver las piezas en su lugar, con su luz y su historia, y evitarle desplazamientos y trámites.",
        "Atendemos a particulares y familias que quieren saber qué tienen en casa, vender una pieza, valorar una colección o repartir una herencia: muebles, cuadros, plata, bronces, porcelana, joyas, monedas, pieles y objetos de colección.",
      ],
      img: "busto-moro",
    },
    {
      t: "facts", alt: true, h2: "Cómo trabajamos",
      items: [
        { h3: "Vemos la pieza en persona", p: "Siempre que es posible, la vemos en su lugar. Una fotografía orienta, pero verla de cerca es lo que decide." },
        { h3: "Claridad", p: "Le explicamos cómo hemos llegado al valor y le decimos con franqueza cuándo una pieza tiene poco valor de mercado." },
        { h3: "Discreción", p: "Lo que nos cuenta, la pieza, su propietario y su ubicación, se trata con reserva." },
      ],
    },
    {
      t: "wall", h2: "Lo que valoramos",
      intro: "Muebles, pintura, plata, bronces, porcelana, relojes y objetos de arte.",
      imgs: ["sevres-parisenfants", "retrato-terborch", "sopera-weyhe", "comoda-piffetti"],
    },
    {
      t: "links", alt: true, h2: "Nuestros servicios",
      items: [
        { label: "Tasación de antigüedades", p: "A domicilio, con valoración por escrito si la necesita.", href: P.tasacion },
        { label: "Compra de antigüedades", p: "Oferta directa y sin intermediarios.", href: P.compra },
        { label: "Tasación de herencias", p: "Inventario, valoración y vaciado de la vivienda.", href: P.herencias },
      ],
    },
  ],
},
{
  path: P.faq,
  title: "Preguntas frecuentes sobre tasación de antigüedades | Aldaba",
  description: "Respuestas a las preguntas más habituales sobre tasación, compra y venta de antigüedades a domicilio en Madrid y toda España: coste, discreción y herencias.",
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
  title: "Contacto | Anticuarios a domicilio en Madrid y España | Aldaba",
  description: "Contacte con nosotros para pedir una tasación gratuita de antigüedades a domicilio en Madrid y toda España. Llámenos o escríbanos con fotografías de la pieza.",
  schema: "contact",
  crumbs: crumb(["Contacto", P.contacto]),
  hero: {
    eyebrow: "Contacto",
    h1: "Contacte con nosotros y solicite su <em>tasación gratuita</em>",
    lead: "Cuéntenos qué pieza desea valorar. Respondemos con una valoración orientativa y, si procede, vamos a su domicilio en Madrid o en toda España.",
    img: "reloj-brockbank", ratio: "portrait",
  },
  blocks: [
    {
      t: "facts", h2: "Cómo contactar",
      items: [
        { h3: "Por teléfono", p: `Llame al <a href="${phoneHref(PHONES[0])}">${phoneText(PHONES[0])}</a> o al <a href="${phoneHref(PHONES[1])}">${phoneText(PHONES[1])}</a> y le atendemos.` },
        { h3: "Con fotografías", p: "Use el formulario y adjunte imágenes de la pieza, sus medidas y lo que sepa de su origen." },
        { h3: "A domicilio", p: "Vamos a su casa en Madrid y en toda España cuando la pieza o la colección lo justifican." },
      ],
    },
  ],
  formCopy: { title: "Solicite su <em>tasación gratuita</em>" },
},
{
  path: "/aviso-legal/",
  title: "Aviso legal y condiciones de uso | Aldaba Anticuarios",
  description: "Aviso legal de Aldaba Anticuarios: titular del sitio web, alojamiento, condiciones de uso, propiedad intelectual, responsabilidad y legislación aplicable.",
  noindex: false, form: false, bare: true,
  crumbs: crumb(["Aviso legal", "/aviso-legal/"]),
  hero: { img: "salon-tesse" },
  blocks: [
    {
      t: "doc", h1: "Aviso legal",
      sections: [
        ["Titular del sitio web", `<p>Este sitio web es titularidad de la persona que se indica a continuación y opera bajo la marca ${SITE.brand}, servicio de anticuarios a domicilio.</p><ul class="legal-data">${LEGAL.titular ? `<li><strong>Titular:</strong> ${LEGAL.titular}${LEGAL.forma ? `, ${LEGAL.forma}` : ""}.</li>` : ""}${LEGAL.siren ? `<li><strong>SIREN:</strong> ${LEGAL.siren}.</li>` : ""}${LEGAL.siret ? `<li><strong>SIRET del establecimiento principal:</strong> ${LEGAL.siret}.</li>` : ""}${LEGAL.iva ? `<li><strong>Número de IVA intracomunitario:</strong> ${LEGAL.iva}.</li>` : ""}${LEGAL.sede ? `<li><strong>Domicilio:</strong> ${LEGAL.sede}.</li>` : ""}${LEGAL.email ? `<li><strong>Correo electrónico:</strong> <a href="mailto:${LEGAL.email}">${LEGAL.email}</a></li>` : ""}</ul><p>También puede utilizar el <a href="/contacto/#formulario">formulario de contacto</a>.</p>`],
        ["Alojamiento web", `<p>Este sitio está alojado por ${LEGAL.hosting}, ${LEGAL.hostingAddress}. Sitio web: <a href="${LEGAL.hostingUrl}" rel="noopener">${LEGAL.hostingUrl.replace("https://", "")}</a>.</p>`],
        ["Condiciones de uso", "<p>El acceso y el uso de este sitio web atribuyen la condición de usuario e implican la aceptación de este aviso. La información publicada tiene carácter informativo y no constituye una oferta vinculante ni una tasación. Las valoraciones se emiten tras ver cada pieza.</p>"],
        ["Propiedad intelectual", "<p>Los textos y el diseño de este sitio pertenecen a su titular. Las fotografías proceden de la colección de acceso abierto del Metropolitan Museum of Art (licencia CC0) y de Wikimedia Commons; los <a href='/creditos-fotograficos/'>créditos</a> detallan autores y licencias. Queda prohibida la reproducción de los contenidos propios sin autorización.</p>"],
        ["Responsabilidad", "<p>Procuramos que la información sea exacta y actual, pero no respondemos de los errores u omisiones que pudieran existir ni del uso que se haga de ella. Los enlaces a sitios de terceros, como el servicio de formularios, se rigen por sus propias condiciones.</p>"],
        ["Legislación aplicable", "<p>Este aviso se rige por la legislación aplicable al titular del sitio y, para los usuarios consumidores, por las normas imperativas de su país de residencia.</p>"],
      ],
    },
  ],
},
{
  path: P.creditos,
  title: "Créditos de las fotografías | Aldaba Anticuarios a domicilio",
  description: "Autores, licencias y procedencia de las fotografías de Aldaba Anticuarios, anticuarios a domicilio: Metropolitan Museum of Art (CC0) y Wikimedia Commons.",
  form: false, bare: true,
  crumbs: crumb(["Créditos de las fotografías", P.creditos]),
  hero: { img: "salon-tesse" },
  blocks: [
    {
      t: "doc", h1: "Créditos de las fotografías",
      sections: [
        ["Metropolitan Museum of Art", "<p>Muchas fotografías proceden de la colección de acceso abierto del Metropolitan Museum of Art de Nueva York, publicada en dominio público bajo licencia CC0.</p>"],
        ["Wikimedia Commons", `<p>Otras fotografías proceden de Wikimedia Commons, con las licencias y autores que se indican a continuación. Las imágenes de dominio público o CC0 no exigen atribución, pero se citan igualmente.</p><ul class="credits">${creditRows}</ul>`],
      ],
    },
  ],
},
{
  path: "/politica-de-privacidad/",
  title: "Política de privacidad | Aldaba Anticuarios, a domicilio",
  description: "Política de privacidad de Aldaba Anticuarios: qué datos trata el formulario de contacto, con qué finalidad, durante cuánto tiempo y cómo ejercer sus derechos.",
  form: false, bare: true,
  crumbs: crumb(["Política de privacidad", "/politica-de-privacidad/"]),
  hero: { img: "salon-tesse" },
  blocks: [
    {
      t: "doc", h1: "Política de privacidad",
      sections: [
        ["Responsable del tratamiento", `<p>El responsable es el titular identificado en el <a href="/aviso-legal/">aviso legal</a>. Puede contactar a través del <a href="/contacto/#formulario">formulario de contacto</a>.</p>`],
        ["Qué datos tratamos y para qué", "<p>Cuando solicita una tasación o nos escribe, tratamos los datos que usted facilita (nombre, medio de contacto, descripción y fotografías de la pieza) para responder a su solicitud, valorar la pieza y, en su caso, formular una oferta de compra.</p>"],
        ["Base jurídica y conservación", "<p>La base jurídica es su consentimiento y la aplicación de medidas precontractuales a su petición. Conservamos los datos el tiempo necesario para atender su solicitud y durante los plazos legales aplicables.</p>"],
        ["Servicio de formularios", "<p>El formulario de contacto se presta a través de Tally, que actúa como encargado del tratamiento. Los datos que usted introduce se transmiten a ese servicio para que nos lleguen. Consulte su política de privacidad para más información.</p>"],
        ["Sus derechos", "<p>Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiéndonos a través del formulario de contacto. Si considera que no hemos tratado sus datos correctamente, puede reclamar ante la autoridad de protección de datos competente.</p>"],
        ["Cookies", "<p>Este sitio no utiliza cookies de seguimiento ni de publicidad. Las tipografías se sirven desde el propio sitio, sin conexiones a terceros.</p>"],
      ],
    },
  ],
},
];
