export function transitionToPage() {
  const cols = document.querySelectorAll(".col");
  const logo = document.querySelector(".transition img");
  let isTransitioning = false;

  document.querySelectorAll("a.page-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (!href) return;

      if (
        href.startsWith("#") ||
        href.startsWith("mailto") ||
        href.startsWith("tel") ||
        href.startsWith("javascript:")
      ) return;

      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      const targetUrl = new URL(href, window.location.href);
      const isSamePageTarget =
        targetUrl.pathname === window.location.pathname &&
        targetUrl.search === window.location.search &&
        targetUrl.hash === window.location.hash;

      if (isSamePageTarget) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      isTransitioning = true;

      if (!cols.length || !logo) {
        window.location.assign(targetUrl.toString());
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          window.location.assign(targetUrl.toString());
        },
      });

      tl.to(cols, {
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.inOut",
        })
        .to(logo, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
    });
  });
}