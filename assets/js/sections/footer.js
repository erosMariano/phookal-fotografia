export function initFooter() {
  const footer = document.querySelector(".footer");

  if (!footer) return;

  const isMobile = window.innerWidth <= 768;

  const heading = footer.querySelector(".content-contato h2");
  const email = footer.querySelector(".email-link");
  const columns = gsap.utils.toArray(".footer-link-column", footer);
  const logo = footer.querySelector(".container > img");
  const reservedItems = gsap.utils.toArray(".reserved p", footer);

  if (heading) gsap.set(heading, { y: 36, opacity: 0 });
  if (email) gsap.set(email, { y: 18, opacity: 0 });
  if (columns.length) gsap.set(columns, { y: 28, opacity: 0 });
  if (logo) gsap.set(logo, { clipPath: "inset(0% 100% 0% 0%)" });
  if (reservedItems.length) gsap.set(reservedItems, { y: 14, opacity: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: footer,
      start: isMobile ? "top 92%" : "top 80%",
      once: true,
    },
  });

  if (heading) {
    tl.to(
      heading,
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      },
      0,
    );
  }

  if (email) {
    tl.to(
      email,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      0.15,
    );
  }

  if (columns.length) {
    tl.to(
      columns,
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.14,
      },
      0.25,
    );
  }

  if (logo) {
    tl.to(
      logo,
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 2,
        ease: "expo.out",
      },
      0.45,
    );
  }

  if (reservedItems.length) {
    tl.to(
      reservedItems,
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      },
      0.65,
    );
  }
}