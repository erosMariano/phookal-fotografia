import { initMenu } from "./sections/utils/menu.js";
import { initFooter } from "./sections/footer.js";
import { initCursor } from "./sections/utils/cursor.js"
import { transitionToPage } from "./sections/utils/transitions.js";
import { initContactHeroAnimations } from "./contato/contact-hero.js";
import { initContactFormAnimations } from "./contato/contact-form.js";



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
  initCursor();
  initMenu(0);
  initFooter();
  initContactHeroAnimations();
  initContactFormAnimations();
  transitionToPage()
});
