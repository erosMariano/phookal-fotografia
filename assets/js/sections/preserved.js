export function initPreserved() {
  const isMobile = window.innerWidth <= 768;

  gsap.from(".preserved h2", {
    scrollTrigger: {
      trigger: ".preserved h2",
      start: isMobile ? "top 90%" : "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".content-left img", {
    scrollTrigger: {
      trigger: ".content-left img",
      start: isMobile ? "top 90%" : "top 75%",
    },
    clipPath: "inset(100% 0% 0% 0%)",
    duration: 1.2,
    ease: "power4.inOut",
    delay: isMobile ? 0 : 0.2,
  });

  gsap.from(".content-left > div p", {
    scrollTrigger: {
      trigger: ".content-left > div",
      start: isMobile ? "top 90%" : "top 70%",
    },
    y: 30,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.2,
    delay: isMobile ? 0 : 0.4,
  });

  gsap.from(".container-right > div img", {
    scrollTrigger: {
      trigger: ".container-right > div img",
      start: isMobile ? "top 90%" : "top 70%",
    },
    clipPath: "inset(0% 0% 100% 0%)",
    duration: 1.2,
    ease: "power4.inOut",
    delay: isMobile ? 0 : 0.3,
  });

  gsap.from(".container-right > div p", {
    scrollTrigger: {
      trigger: ".container-right > div p",
      start: isMobile ? "top 90%" : "top 65%",
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: isMobile ? 0 : 0.6,
  });

  gsap.from(".container-right > img", {
    scrollTrigger: {
      trigger: ".container-right > img",
      start: isMobile ? "top 90%" : "top 60%",
    },
    clipPath: "inset(0% 100% 0% 0%)",
    duration: 1.4,
    ease: "power4.inOut",
    delay: isMobile ? 0 : 0.1,
  });
}
