export function initContactFormAnimations() {
  const formSection = document.querySelector(".form-contato");
  if (!formSection) return;

  const isMobile = window.innerWidth <= 768;
  const formInner = formSection.querySelector(".form-contato__inner");
  const eyebrow = formSection.querySelector(".eyebrow");
  const title = formSection.querySelector(".form-contato__title");
  const subtitle = formSection.querySelector(".form-contato__subtitle");
  const divider = formSection.querySelector(".divider");
  const groups = gsap.utils.toArray(".form-group", formSection);
  const actions = formSection.querySelector(".form-actions");

  const formTimeline = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: formSection,
      start: isMobile ? "top 88%" : "top 75%",
      once: true,
    },
  });

  formTimeline.from(formInner, {
    x: isMobile ? 0 : 40,
    y: isMobile ? 30 : 0,
    opacity: 0,
    duration: 0.95,
  });

  formTimeline
    .from(
      [eyebrow, title, subtitle],
      {
        y: 18,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
      },
      "-=0.55",
    )
    .from(
      divider,
      {
        scaleX: 0,
        transformOrigin: "left center",
        opacity: 0,
        duration: 0.6,
      },
      "-=0.3",
    )
    .from(
      groups,
      {
        y: 16,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      },
      "-=0.2",
    )
    .from(
      actions,
      {
        y: 14,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.2",
    );
}