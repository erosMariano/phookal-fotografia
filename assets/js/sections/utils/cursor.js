export function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  // Ponto: segue o mouse na hora
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    gsap.to(cursor, { x: mx, y: my, duration: 0.05 });
  });

  // Anel: segue com atraso suave
  (function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  // Expande ao passar em links e botões
  document.querySelectorAll('a, button, input, textarea, .menu-trigger, .close-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor, { scale: 3, duration: 0.3 });
      gsap.to(ring, { width: 60, height: 60, borderColor: 'rgba(184,150,90,.8)', duration: 0.3 });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(ring, { width: 32, height: 32, borderColor: 'rgba(184,150,90,.5)', duration: 0.3 });
    });
  });
}