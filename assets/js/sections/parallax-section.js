export function initParallaxSection() {
  gsap.to(".parallax-img", {
    y: 500,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".parallax-section .content", {
    maxWidth: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: ".depoimentos",
      start: "top +=50%",
      end: "top top",
      scrub: true,
    },
  });
}
