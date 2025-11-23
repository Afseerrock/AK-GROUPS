// Basic interactions: 3D card tilt, news carousel, year
document.addEventListener('DOMContentLoaded', () => {
  // card tilt effect
  const card = document.getElementById('card3d');
  if (card) {
    const bounds = () => card.getBoundingClientRect();
    card.addEventListener('pointermove', (e) => {
      const r = bounds();
      const cx = r.left + r.width/2;
      const cy = r.top + r.height/2;
      const dx = (e.clientX - cx) / (r.width/2);
      const dy = (e.clientY - cy) / (r.height/2);
      const rx = dy * 8;
      const ry = dx * -12;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    });
    card.addEventListener('pointerleave', () => card.style.transform = 'rotateX(0) rotateY(0)');
  }

  // news simple carousel scroll
  const strip = document.getElementById('newsStrip');
  const prev = document.getElementById('prevNews');
  const next = document.getElementById('nextNews');
  const step = () => (strip?.firstElementChild?.clientWidth || 320) + 18;
  if (prev && next && strip) {
    prev.addEventListener('click', () => strip.scrollBy({left: -step(), behavior:'smooth'}));
    next.addEventListener('click', () => strip.scrollBy({left: step(), behavior:'smooth'}));
  }

  // parallax hero background on scroll
  const heroBg = document.getElementById('heroBg');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (heroBg) heroBg.style.transform = `translateY(${y * 0.15}px)`;
  }, {passive:true});

  // set year
  const yEl = document.getElementById('year');
  if (yEl) yEl.textContent = new Date().getFullYear();
});