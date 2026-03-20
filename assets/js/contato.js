import { initMenu } from "./sections/utils/menu.js";
import { initFooter } from "./sections/footer.js";
import { transitionToPage } from "./sections/utils/transitions.js";
import { initContactHeroAnimations } from "./contato/contact-hero.js";
import { initContactFormAnimations } from "./contato/contact-form.js";



document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis({
    duration: 2, 
    smoothWheel: true, 
    smoothTouch: true, 
    lerp: 0.08, 
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  gsap.registerPlugin(ScrollTrigger);
  initMenu(0);
  initFooter();
  initContactHeroAnimations();
  initContactFormAnimations();
  transitionToPage()
});
