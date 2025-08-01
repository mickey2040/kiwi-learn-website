// main.js - KiwiLearn
// Handles mobile menu, form validation, and focus states

document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
    });
  }

  // Contact form validation
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      contactForm.querySelectorAll('input, textarea').forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('ring-2', 'ring-error');
          valid = false;
        } else {
          input.classList.remove('ring-2', 'ring-error');
        }
      });
      if (valid) {
        contactForm.reset();
        alert('Thank you for contacting KiwiLearn! We will get back to you soon.');
      }
    });
  }
});
