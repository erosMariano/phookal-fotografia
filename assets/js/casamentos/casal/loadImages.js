export function generateImageCards(images) {
  var PLACEHOLDER_IMAGE =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 533'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0%25' stop-color='%23e5ddd0'/%3E%3Cstop offset='100%25' stop-color='%23d8ccba'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='533' fill='url(%23g)'/%3E%3Ccircle cx='220' cy='220' r='42' fill='%23c8baa5'/%3E%3Cpath d='M120 430l150-150 90 90 120-120 200 180z' fill='%23c1b29e'/%3E%3C/svg%3E";

  images.slice(0, 3).forEach(function (src) {
    var link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });

  /* ─── 3. Monta os itens via DocumentFragment (1 único reflow) ──────── */
  var scrollWrapper = document.querySelector(".scroll-wrapper");
  if (!scrollWrapper) {
    console.warn(
      "gallery-otimizado.js: elemento .scroll-wrapper não encontrado.",
    );
    return;
  }

  var fragment = document.createDocumentFragment();

  function loadRealImage(img) {
    if (!img || !img.dataset.src || img.dataset.loading === "1") return;

    img.dataset.loading = "1";

    var nextImage = new Image();
    nextImage.decoding = "async";
    nextImage.src = img.dataset.src;

    nextImage.onload = function () {
      img.src = img.dataset.src;
      img.classList.add("loaded");
      img.dataset.loading = "0";
      delete img.dataset.src;
    };

    nextImage.onerror = function () {
      img.src = PLACEHOLDER_IMAGE;
      img.dataset.loading = "0";
    };
  }

  images.forEach(function (src, index) {
    var div = document.createElement("div");
    div.className = "item";

    var img = document.createElement("img");
    img.src = PLACEHOLDER_IMAGE;
    img.dataset.src = src;

    if (index < 3) {
      loadRealImage(img);
    }

    img.alt = "Foto do casamento de Luiza e Gabriel";
    img.loading = "lazy";
    img.decoding = "async";
    img.width = 800;
    img.height = 533;

    div.appendChild(img);
    fragment.appendChild(div);
  });

  scrollWrapper.appendChild(fragment); /* único toque no DOM */

  /* ─── 4. IntersectionObserver: carrega src quando entra na tela ────── */
  if ("IntersectionObserver" in window) {
    var lazyImages = scrollWrapper.querySelectorAll("img[data-src]");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          var img = entry.target;
          loadRealImage(img);

          observer.unobserve(img);
        });
      },
      {
        rootMargin:
          "200px 0px" /* começa a carregar 200 px antes de aparecer */,
        threshold: 0,
      },
    );

    lazyImages.forEach(function (img) {
      observer.observe(img);
    });
  } else {
    /* Fallback para browsers sem suporte a IntersectionObserver */
    scrollWrapper.querySelectorAll("img[data-src]").forEach(function (img) {
      loadRealImage(img);
    });
  }
}
