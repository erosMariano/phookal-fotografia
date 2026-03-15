export function transitionToPage() {
  const cols = document.querySelectorAll(".col");
  const logo = document.querySelector(".transition img");

  document.querySelectorAll("a.page-link").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (
        href.startsWith("#") ||
        href.startsWith("mailto") ||
        href.startsWith("tel")
      ) return;

      e.preventDefault();

      const tl = gsap.timeline({
        onComplete: () => {
          window.location.href = href;
        }
      });

      tl
      .to(cols, {
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.inOut"
        })
        .to(logo, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out"
        }); 
    });
  });
}