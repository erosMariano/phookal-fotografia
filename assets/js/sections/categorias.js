export function initCategorias() {
  const isMobile = window.innerWidth <= 768;
  const cards = document.querySelectorAll(".categorias a");

  cards.forEach((card, index) => {
    const border = card.querySelector(".border-card");
    const sides = ["top", "right", "bottom", "left"];

    // Borda de entrada (scroll)
    sides.forEach((side) => {
      const line = document.createElement("span");
      line.classList.add("border-line", `border-line--${side}`);
      card.appendChild(line);
    });

    // Segunda borda (hover)
    sides.forEach((side) => {
      const line = document.createElement("span");
      line.classList.add("border-hover", `border-hover--${side}`);
      card.appendChild(line);
    });

    if (border) border.remove();

    // Animação de entrada (scroll)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        once: true,
      },
    });

    const delay = index * 0.15;

    tl.fromTo(
      card.querySelector(".border-line--top"),
      { scaleX: 0 },
      { scaleX: 1, duration: 0.5, ease: "power2.out", delay },
    )
      .fromTo(
        card.querySelector(".border-line--right"),
        { scaleY: 0 },
        { scaleY: 1, duration: 0.5, ease: "power2.out" },
        "-=0.25",
      )
      .fromTo(
        card.querySelector(".border-line--bottom"),
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: "power2.out" },
        "-=0.25",
      )
      .fromTo(
        card.querySelector(".border-line--left"),
        { scaleY: 0 },
        { scaleY: 1, duration: 0.5, ease: "power2.out" },
        "-=0.25",
      );

    // Animação hover (segunda borda)
    const hoverTl = gsap.timeline({ paused: true });

    hoverTl
      .fromTo(
        card.querySelector(".border-hover--top"),
        { scaleX: 0 },
        { scaleX: 1, duration: 0.35, ease: "power2.out" },
      )
      .fromTo(
        card.querySelector(".border-hover--right"),
        { scaleY: 0 },
        { scaleY: 1, duration: 0.35, ease: "power2.out" },
        "-=0.2",
      )
      .fromTo(
        card.querySelector(".border-hover--bottom"),
        { scaleX: 0 },
        { scaleX: 1, duration: 0.35, ease: "power2.out" },
        "-=0.2",
      )
      .fromTo(
        card.querySelector(".border-hover--left"),
        { scaleY: 0 },
        { scaleY: 1, duration: 0.35, ease: "power2.out" },
        "-=0.2",
      );

    card.addEventListener("mouseenter", () => {
      hoverTl.play();
    });

    card.addEventListener("mouseleave", () => {
      hoverTl.reverse();
    });

    const imgDelay = isMobile ? 0 : index * 0.2;

    gsap.to(card.querySelector("img"), {
      translateY: "0%",
      duration: 1.5,
      ease: "power3.out",
      delay: imgDelay,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        once: true,
      },
    });
  });
}
