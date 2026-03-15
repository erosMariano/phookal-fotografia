export function initMenu(delay) {
  const trigger = document.getElementById("menuTrigger");
  const overlay = document.getElementById("menuOverlay");
  const closeBtn = document.getElementById("closeBtn");
  const navItems = document.querySelectorAll(".nav-item");
  let current = 0;

  function setImages(idx) {
    if (idx === current) return;
    // verifica se imagens estão visíveis (desktop/tablet)
    const leftEl = document.getElementById(`left-${current}`);
    if (!leftEl) return;
    ["left", "right"].forEach((side) => {
      const old = document.getElementById(`${side}-${current}`);
      old.classList.remove("active");
      old.classList.add("exit-up");
      setTimeout(() => old.classList.remove("exit-up"), 500);
      document.getElementById(`${side}-${idx}`).classList.add("active");
    });
    current = idx;
  }

  function open() {
    overlay.classList.add("open");
    trigger.classList.add("open");
  }
  function close() {
    overlay.classList.remove("open");
    trigger.classList.remove("open");
  }

  trigger.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  gsap.to(trigger, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: delay && 3,
    ease: "power3.out",
  })

  // hover em desktop, touch em mobile
  navItems.forEach((item) => {
    item.addEventListener("mouseenter", () => setImages(+item.dataset.index));
    item.addEventListener("touchstart", () => setImages(+item.dataset.index), {
      passive: true,
    });
    item.addEventListener("click", close);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
