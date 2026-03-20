import { initMenu } from "./sections/utils/menu.js";
import { initPreserved } from "./sections/preserved.js";
import { initHero } from "./sections/hero.js";
import { initCategorias } from "./sections/categorias.js";
import { initParallaxSection } from "./sections/parallax-section.js";
import { initDepoiments } from "./sections/depoimentos.js";
import { initFooter } from "./sections/footer.js";
import { transitionToPage } from "./sections/utils/transitions.js";
document.addEventListener("DOMContentLoaded", function () {
  const hasHashTarget = Boolean(window.location.hash);

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
  initMenu();
  if (hasHashTarget) {
    const loadingScreen = document.querySelector(".loading-screen");
    if (loadingScreen) loadingScreen.style.display = "none";

    document.body.style.overflow = "unset";
    document.documentElement.style.overflow = "unset";
    document.documentElement.style.overflowX = "hidden";
  } else {
    initHero();
  }
  initPreserved();
  initCategorias();
  initParallaxSection();
  initDepoiments();
  initFooter();
  transitionToPage();

  if (hasHashTarget) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const section = document.querySelector(window.location.hash);
        if (section) {
          section.scrollIntoView({ behavior: "auto", block: "start" });
        }
      });
    });
  }
});
