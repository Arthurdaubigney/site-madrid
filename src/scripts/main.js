/* Aldaba — comportamiento mínimo: menú móvil, preguntas frecuentes, momento de foto y Tally diferido. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // Menú móvil
  const toggle = $(".nav__toggle"), sheet = $("#menu-movil");
  if (toggle && sheet) {
    const set = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar el menú" : "Abrir el menú");
      sheet.hidden = !open;
      document.body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", () => set(toggle.getAttribute("aria-expanded") !== "true"));
    sheet.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
    matchMedia("(min-width:1024px)").addEventListener("change", (m) => m.matches && set(false));
  }

  // Preguntas frecuentes
  $$(".acc__btn").forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      panel.classList.toggle("is-open", !open);
    });
  });

  // Momento: revelación única de la foto
  const moments = $$("[data-moment]");
  if (moments.length && "IntersectionObserver" in window) {
    // Se observa la sección contenedora: el clip-path del propio elemento lo dejaría sin área visible.
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.querySelector("[data-moment]").classList.add("is-in"); io.unobserve(e.target); }
    }), { threshold: 0.3 });
    moments.forEach((m) => io.observe(m.parentElement));
  } else moments.forEach((m) => m.classList.add("is-in"));

  // Tally: se carga su script cuando el formulario se acerca a la pantalla; él mismo asigna el iframe
  // y ajusta su altura (dynamicHeight), así que no hay barra de desplazamiento interior.
  const frames = $$("iframe[data-tally-src]");
  if (frames.length) {
    let started = false;
    const direct = () => frames.forEach((f) => { if (!f.src) f.src = f.dataset.tallySrc; });
    const start = () => {
      if (started) return;
      started = true;
      const s = document.createElement("script");
      s.src = "https://tally.so/widgets/embed.js";
      s.onload = () => (window.Tally ? window.Tally.loadEmbeds() : direct());
      s.onerror = direct;
      document.body.appendChild(s);
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { start(); io.disconnect(); } }, { rootMargin: "400px" });
      frames.forEach((f) => io.observe(f));
    } else start();
  }
})();
