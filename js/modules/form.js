/* ──────────────────────────────────────────────────────
   THE BREAK · FORM MODULE
   Contact form handling and validation
   ────────────────────────────────────────────────────── */

export const setupForm = () => {
  const form = document.querySelector('form[name="contacto"]');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    // Netlify handles the form submission automatically
    // This is just for additional feedback
    const formMsg = document.getElementById('formMsg');
    if (formMsg) {
      setTimeout(() => {
        formMsg.style.display = 'block';
        setTimeout(() => {
          formMsg.style.display = 'none';
        }, 6000);
      }, 500);
    }
  });
};
