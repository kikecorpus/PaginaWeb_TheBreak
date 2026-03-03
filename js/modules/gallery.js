/* ──────────────────────────────────────────────────────
   THE BREAK · GALLERY MODULE
   Gallery filtering and item display
   ────────────────────────────────────────────────────── */

export const setupGallery = () => {
  const filterBtns = document.querySelectorAll('.gf-btn');
  const items = document.querySelectorAll('.g-item');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      items.forEach((item) => {
        const match = filter === 'all' || item.dataset.cat === filter;
        if (match) {
          item.classList.remove('hidden');
          item.classList.add('fade-in');
          setTimeout(() => item.classList.remove('fade-in'), 400);
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
};
