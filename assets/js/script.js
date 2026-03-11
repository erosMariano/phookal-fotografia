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

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  gsap.to(".loading-screen-imgs > img", {
    clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    duration: 2,
    ease: "power4.inOut",
    stagger: 0.25,
    delay: 0,
  });

  gsap.to(".loading-screen", {
    duration: 3,
    ease: "power3.inOut",
    delay: 0,
    onComplete: function () {
      // Ativar scroll após a animação
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      document.documentElement.style.overflowX = "hidden";
    },
  });

  gsap.to(".apresentation", {
    y: 0,
    duration: 1,
    ease: "power3.out",
    opacity: 1,
    delay: 2,
  });

  gsap.to(".website-content p", {
    y: 0,
    duration: 1,
    ease: "power3.out",
    opacity: 1,
    delay: 2.5,
  });

  gsap.to(".website-content h1", {
    y: 0,
    duration: 1.5,
    ease: "power3.out",
    opacity: 1,
    delay: 3,
  });
});


