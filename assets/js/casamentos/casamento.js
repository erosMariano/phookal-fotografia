import { initMenu } from "../sections/utils/menu.js";
import { initFooter } from "../sections/footer.js";
import { transitionToPage } from "../sections/utils/transitions.js";
import { animateHeroSection, animateCasaisSection, animateCasaisMobile } from "./animations.js";

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

  gsap.delayedCall(0.6, () => {
    animateHeroSection();
    if (window.innerWidth <= 768) {
      animateCasaisMobile();
    } else {
      animateCasaisSection();
    }
    ScrollTrigger.refresh();
  });

  initMenu();
  initFooter();
  transitionToPage();
});