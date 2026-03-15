export function initCarrossel() {
  const wrapper = document.querySelector(".scroll-wrapper");
  const container = document.querySelector(".carrossel-container");
  const isMobile = window.matchMedia("(max-width: 900px)").matches;
  const animationDelay = 1.3;

  const animateMobileEntries = () => {
    if (!isMobile) return;

    const titles = document.querySelectorAll(
      ".item-1 h2, .item-1 h1, .item:last-child h3",
    );
    const texts = document.querySelectorAll(".item-1 p, .item:last-child button");
    const images = document.querySelectorAll(".item > img, .item .right-wrap img");

    titles.forEach((element) => {
      gsap.from(element, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: animationDelay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true,
        },
      });
    });

    texts.forEach((element) => {
      gsap.from(element, {
        y: 30,
        opacity: 0,
        duration: 0.75,
        delay: animationDelay + 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          once: true,
        },
      });
    });

    images.forEach((image, index ) => {
      gsap.from(image, {
        y: 42,
        opacity: 0,
        scale: 0.98,
        duration: 1,
        delay:  index === 0 ? animationDelay + .4 : 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: image,
          start: "top 90%",
          once: true,
        },
      });
    });
  };

  const openImageOnMobile = () => {
    if (!isMobile) return;

    const images = document.querySelectorAll(".item > img, .item .right-wrap img");
    if (!images.length) return;

    let lightbox = document.querySelector(".mobile-lightbox");

    if (!lightbox) {
      lightbox = document.createElement("div");
      lightbox.className = "mobile-lightbox";
      lightbox.innerHTML = `
        <button type="button" aria-label="Fechar imagem">x</button>
        <img src="" alt="Imagem ampliada" />
      `;

      document.body.appendChild(lightbox);
    }

    const lightboxImg = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector("button");

    const closeLightbox = () => {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    };

    closeButton?.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeLightbox();
    });

    images.forEach((image) => {
      image.style.cursor = "zoom-in";

      image.addEventListener("click", () => {
        if (!lightboxImg) return;

        lightboxImg.src = image.currentSrc || image.src;
        lightboxImg.alt = image.alt || "Imagem ampliada";
        lightbox.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    });
  };

  if (wrapper && container && !isMobile) {
    gsap.to(wrapper, {
      // Move o wrapper para a esquerda
      x: () => -(wrapper.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true, // Trava o container na tela
        scrub: 1, // Sincroniza o progresso com o scroll
        invalidateOnRefresh: true, // Recalcula ao redimensionar
        // A duração do scroll é proporcional à largura do conteúdo
        end: () => "+=" + (wrapper.scrollWidth - window.innerWidth),
      },
    });
  }

  openImageOnMobile();
  animateMobileEntries();
}
