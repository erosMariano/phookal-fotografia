import { initPreserved } from "./sections/preserved.js";
import { initHero } from "./sections/hero.js";
import { initCategorias } from "./sections/categorias.js";

document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis({
    duration: 2, // duração da animação do scroll
    smoothWheel: true, // suaviza scroll do mouse
    smoothTouch: true, // suaviza scroll no touch
    lerp: 0.08, // quanto menor, mais suave
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Registrar ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  initHero();
  initPreserved();
  initCategorias();
});
