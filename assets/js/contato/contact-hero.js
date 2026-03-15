export function initContactHeroAnimations() {
  const heroSection = document.querySelector(".contact_hero");
  if (!heroSection) return;

  const isMobile = window.innerWidth <= 768;
  const heroTitle = heroSection.querySelector(".content_initial h1");
  const heroText = heroSection.querySelector(".content_initial p");
  const heroImages = gsap.utils.toArray(
    ".content_initial .image-hero-1, .content_initial .image-hero-2, .content_initial .image-hero-3, .content_initial .image-hero-4, .content_initial .image-hero-5",
    heroSection,
  );
  const contactLinks = gsap.utils.toArray(
    ".email-me .links-contact",
    heroSection,
  );

  const introTimeline = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: heroSection,
      start: "top 85%",
      once: true,
    },
  });

  introTimeline
    .from(heroText, {
      y: 24,
      opacity: 0,
      duration: 0.65,
      delay: 1,
    })
    .from(
      heroTitle,
      {
        y: 48,
        opacity: 0,
        duration: 0.9,
      },
      "-=0.2",
    );

  if (heroImages.length) {
    introTimeline.from(
      heroImages,
      {
        y: isMobile ? 22 : 38,
        opacity: 0,
        scale: 1.04,
        stagger: isMobile ? 0.08 : 0.12,
        duration: 1,
      },
      "-=0.3",
    );
  }

  if (contactLinks.length) {
    introTimeline.from(
      contactLinks,
      {
        y: 20,
        opacity: 0,
        stagger: 0.14,
        duration: 0.7,
      },
      "-=0.5",
    );
  }
}
