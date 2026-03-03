/* ──────────────────────────────────────────────────────
   THE BREAK · LIGHTBOX MODULE
   Image lightbox modal with navigation
   ────────────────────────────────────────────────────── */

export const setupLightbox = () => {
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');
  const items = document.querySelectorAll('.g-item');

  let visibleItems = [];
  let currentIdx = 0;

  const getVisible = () => {
    return [...items].filter((i) => !i.classList.contains('hidden'));
  };

  const openLightbox = (idx) => {
    visibleItems = getVisible();
    currentIdx = idx;
    lbImg.src = visibleItems[currentIdx].querySelector('img').src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  const navLightbox = (dir) => {
    visibleItems = getVisible();
    currentIdx =
      (currentIdx + dir + visibleItems.length) % visibleItems.length;
    lbImg.style.opacity = '0';
    setTimeout(() => {
      lbImg.src = visibleItems[currentIdx].querySelector('img').src;
      lbImg.style.opacity = '1';
    }, 120);
  };

  // Set up transition
  lbImg.style.transition = 'opacity .15s';

  // Gallery items click
  items.forEach((item) => {
    item.addEventListener('click', () => {
      const visible = getVisible();
      const idx = visible.indexOf(item);
      openLightbox(idx);
    });
  });

  // Close button
  lbClose.addEventListener('click', closeLightbox);

  // Navigation buttons
  lbPrev.addEventListener('click', () => navLightbox(-1));
  lbNext.addEventListener('click', () => navLightbox(1));

  // Click on background to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navLightbox(-1);
    if (e.key === 'ArrowRight') navLightbox(1);
  });
};
