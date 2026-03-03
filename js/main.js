/* ──────────────────────────────────────────────────────
   THE BREAK · MAIN ENTRY POINT
   Initialize all modules when DOM is ready
   ────────────────────────────────────────────────────── */

import { setupNavbar } from './modules/navbar.js';
import { setupAnimations } from './modules/animations.js';
import { setupGallery } from './modules/gallery.js';
import { setupLightbox } from './modules/lightbox.js';
import { setupForm } from './modules/form.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  setupAnimations();
  setupGallery();
  setupLightbox();
  setupForm();
});
