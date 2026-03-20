export function animateHeroSection() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const heroHeading = hero.querySelector("h1");
  const heroDescription = hero.querySelector("p");
  const heroLinks = hero.querySelectorAll("nav ul li");

  gsap.set([heroHeading, heroDescription, heroLinks], {
    opacity: 0,
    y: 28,
  });

  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTimeline
    .to(heroHeading, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    })
    .to(
      heroDescription,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.45"
    )
    .to(
      heroLinks,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.08,
      },
      "-=0.35"
    );
}

export function animateCasaisSection() {
  const casaisSection = document.querySelector(".casais");
  if (!casaisSection) return;

  const contents = casaisSection.querySelectorAll(".content-1, .content-2, .content-3");

  contents.forEach((content) => {
    const images = content.querySelectorAll(".img-wrapper");
    const texts = content.querySelectorAll("h2, h3, h4, p");

    gsap.set(content, { opacity: 0, y: 90 });
    gsap.set(images, { scale: 1.08, opacity: 0 });
    gsap.set(texts, { opacity: 0, y: 24 });

    const contentTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        start: "top 100%",
        end: "bottom 35%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    contentTimeline
      .to(content, {
        opacity: 1,
        y: 0,
        duration: 0.9,
      })
      .to(
        images,
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
        },
        "<+0.1"
      )
      .to(
        texts,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.03,
        },
        "<+0.1"
      );
  });
}

export function animateCasaisMobile() {
  const casaisSection = document.querySelector(".casais");
  if (!casaisSection) return;

  const casais = casaisSection.querySelectorAll(".casal-1, .casal-2");

  casais.forEach((casal) => {
    const mainCard = casal.querySelector(".card-main");
    const smallCards = casal.querySelectorAll(".card-small");

    if (!mainCard) return;

    gsap.set(mainCard, { opacity: 0, y: 40, scale: 1.04 });
    gsap.set(smallCards, { opacity: 0, y: 24 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: casal,
        start: "top 92%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    tl.to(mainCard, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.85,
    }).to(
      smallCards,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.1,
      },
      "-=0.4"
    );
  });
}