export function initDepoiments() {
  const isMobile = window.innerWidth <= 768;
  const triggerStart = isMobile ? "top 90%" : "top 60%";

  let currentSlide = 0;
  const slides = gsap.utils.toArray(".depoimento-slide");
  const totalSlides = slides.length;

  // Estado dos carrosséis de cada slide
  const carouselStates = {};

  // ── Inicializar carrosséis para cada slide ────────────────────────
  slides.forEach((slide, slideIndex) => {
    const miniPhotos = gsap.utils.toArray(".mini-foto", slide);
    carouselStates[slideIndex] = {
      photos: miniPhotos,
      currentIndex: 0,
      interval: null,
    };

    // Esconde todas exceto a primeira
    gsap.set(miniPhotos.slice(1), {
      opacity: 0,
      clipPath: "inset(0% 0% 0% 0%)",
    });
    gsap.set(miniPhotos[0], { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" });

    // Definir display correto para cada slide
    if (slideIndex === 0) {
      slide.style.display = "flex";
      // Pre-set elementos no estado "antes da animação" para evitar flicker
      const mainFoto = slide.querySelector(".main-foto");
      const textSpan = slide.querySelector(".content-text span");
      const textP = slide.querySelector(".content-text p");
      const h3 = slide.querySelector("h3");
      gsap.set(mainFoto, { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 });
      gsap.set(miniPhotos[0], { clipPath: "inset(0% 100% 0% 0%)", opacity: 1 });
      gsap.set(textSpan, { scale: 0.3, opacity: 0, rotation: -15 });
      gsap.set(textP, { y: 24, opacity: 0, filter: "blur(4px)" });
      gsap.set(h3, { y: 50, opacity: 0 });
    } else {
      slide.style.display = "none";
    }
  });

  // ── Função para ciclar fotos de um slide específico ───────────────
  function cyclePhoto(slideIndex) {
    const state = carouselStates[slideIndex];
    const outgoing = state.photos[state.currentIndex];
    state.currentIndex = (state.currentIndex + 1) % state.photos.length;
    const incoming = state.photos[state.currentIndex];

    const tl = gsap.timeline();

    tl.to(outgoing, {
      clipPath: "inset(0% 100% 0% 0%)",
      duration: 0.9,
      ease: "expo.inOut",
    });

    tl.fromTo(
      incoming,
      { clipPath: "inset(0% 0% 0% 100%)", opacity: 1 },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "expo.inOut" },
      "-=0.5",
    );

    tl.set(outgoing, { clipPath: "inset(0% 0% 0% 0%)", opacity: 0 });
  }

  // ── Função para iniciar carrossel de um slide ─────────────────────
  function startCarousel(slideIndex) {
    const state = carouselStates[slideIndex];
    if (state.interval) clearInterval(state.interval);

    setTimeout(() => {
      state.interval = setInterval(() => cyclePhoto(slideIndex), 3000);
    }, 0);
  }

  // ── Função para parar carrossel de um slide ───────────────────────
  function stopCarousel(slideIndex) {
    const state = carouselStates[slideIndex];
    if (state.interval) {
      clearInterval(state.interval);
      state.interval = null;
    }
  }

  // ── Animações de entrada inicial ──────────────────────────────────
  function playEntranceAnimations(slide, isTransition = false) {
  const mainFoto = slide.querySelector(".main-foto");
  const miniPhotos = gsap.utils.toArray(".mini-foto", slide);
  const textSpan = slide.querySelector(".content-text span");
  const textP = slide.querySelector(".content-text p");
  const h3 = slide.querySelector("h3");
  const slideIndex = Number.parseInt(slide.dataset.slide);

    // Reset de todos os elementos
  // if (isTransition) {
  //   gsap.set([mainFoto, miniPhotos[0], textSpan, textP, h3], {
  //     clearProps: "all",
  //   });
  // }

    const tl = gsap.timeline();

    // Main foto com clipPath e scale
    tl.fromTo(
      mainFoto,
      { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        duration: 1.4,
        ease: "expo.inOut",
      },
      0,
    );

    // Primeira mini-foto
    tl.fromTo(
      miniPhotos[0],
      { clipPath: "inset(0% 100% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.1,
        ease: "expo.inOut",
        onComplete: () => startCarousel(slideIndex),
      },
      isMobile ? 0 : 0.1,
    );

    // Span de aspas
    tl.fromTo(
      textSpan,
      { scale: 0.3, opacity: 0, rotation: -15 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.4)",
      },
      isMobile ? 0.3 : 0.8,
    );

    // Texto
    tl.fromTo(
      textP,
      { y: 24, opacity: 0, filter: "blur(4px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
      },
      isMobile ? 0.5 : 1.1,
    );

    // H3
    tl.fromTo(
      h3,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      },
      isMobile ? 0.2 : 0.9,
    );

    return tl;
  }

  // ── Animação de transição (efeito de tela abrindo) ────────────────
  function transitionSlide(direction) {
    const prevSlide = slides[currentSlide];

    if (direction === "next") {
      currentSlide = (currentSlide + 1) % totalSlides;
    } else {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }

    const nextSlide = slides[currentSlide];

    stopCarousel(Number.parseInt(prevSlide.dataset.slide));

    // Pre-setar elementos do próximo slide antes de exibir
    const mainFoto = nextSlide.querySelector(".main-foto");
    const miniPhotos = gsap.utils.toArray(".mini-foto", nextSlide);
    const textSpan = nextSlide.querySelector(".content-text span");
    const textP = nextSlide.querySelector(".content-text p");
    const h3 = nextSlide.querySelector("h3");

    gsap.set(mainFoto, { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 });
    gsap.set(miniPhotos[0], { clipPath: "inset(0% 100% 0% 0%)", opacity: 1 });
    gsap.set(textSpan, { scale: 0.3, opacity: 0, rotation: -15 });
    gsap.set(textP, { y: 24, opacity: 0, filter: "blur(4px)" });
    gsap.set(h3, { y: 50, opacity: 0 });

    nextSlide.style.display = "flex";
    nextSlide.classList.add("active");
    gsap.set(nextSlide, {
      clipPath: "inset(100% 0% 0% 0%)",
      opacity: 1,
      scale: 0.95,
      zIndex: 3,
    });
    gsap.set(prevSlide, { zIndex: 2 });

    const tl = gsap.timeline();

    // Animação de saída (efeito de fechar como cortina)
    tl.to(prevSlide, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.8,
      ease: "expo.inOut",
    });

    // Animação de entrada (efeito de abrir como cortina)
    tl.to(
      nextSlide,
      {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        duration: 0.8,
        ease: "expo.inOut",
      },
      "-=0.3",
    );

    // Remove classe active do anterior e reseta após animações completas
    tl.add(() => {
      prevSlide.classList.remove("active");
      prevSlide.style.display = "none";
      gsap.set(prevSlide, {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        zIndex: 1,
      });
      gsap.set(nextSlide, { zIndex: 2 });
    });

    // Iniciar animações de entrada do conteúdo
    tl.add(() => {
      playEntranceAnimations(nextSlide, true); // <- isTransition = true
    }, "-=0.4");
  }

  // ── Event Listeners para botões ───────────────────────────────────
  document.querySelectorAll(".btn-proximo").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      transitionSlide("next");
    });
  });

  document.querySelectorAll(".btn-anterior").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      transitionSlide("prev");
    });
  });

  // ── Animações iniciais (primeira visualização) ────────────────────
  gsap.from(".depoimentos h2", {
    scrollTrigger: {
      trigger: ".depoimentos",
      start: isMobile ? "top 95%" : "top 70%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Animações do primeiro slide ao entrar na viewport
  ScrollTrigger.create({
    trigger: ".depoimentos",
    start: triggerStart,
    once: true,
    onEnter: () => {
      playEntranceAnimations(slides[0]); // <- isTransition = false (padrão)
    },
  });

  // Parallax no desktop
  if (!isMobile) {
    gsap.to(".depoimento-slide.active .main-foto", {
      scrollTrigger: {
        trigger: ".depoimentos",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
      y: -60,
      ease: "none",
    });
  }
}
