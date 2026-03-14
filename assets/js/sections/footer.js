export function initFooter() {
  const footer = document.querySelector(".footer");

  if (!footer) return;

  const isMobile = window.innerWidth <= 768;

  const heading = footer.querySelector(".content-contato h2");
  const email = footer.querySelector(".email-link");
  const columns = gsap.utils.toArray(".footer-link-column", footer);
  const logo = footer.querySelector(".container > img");
  const reservedItems = gsap.utils.toArray(".reserved p", footer);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: footer,
      start: isMobile ? "top 92%" : "top 80%",
      once: true,
    },
  });

  if (heading) {
    tl.from(
      heading,
      {
        y: 36,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      0,
    );
  }

  if (email) {
    tl.from(
      email,
      {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      0.15,
    );
  }

  if (columns.length) {
    tl.from(
      columns,
      {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.14,
      },
      0.25,
    );
  }

  if (logo) {
    tl.from(
      logo,
      {
        clipPath: "inset(0% 100% 0% 0%)",
        duration: 2,
        ease: "expo.out",
      },
      0.45,
    );
  }

  if (reservedItems.length) {
    tl.from(
      reservedItems,
      {
        y: 14,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      },
      0.65,
    );
  }
}