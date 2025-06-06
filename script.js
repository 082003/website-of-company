 // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple validation
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.classList.remove('text-green-600');
        formMessage.classList.add('text-red-600');
        return;
      }

      // Basic email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.remove('text-green-600');
        formMessage.classList.add('text-red-600');
        return;
      }

      // Simulate form submission success
      formMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
      formMessage.classList.remove('text-red-600');
      formMessage.classList.add('text-green-600');

      contactForm.reset();
    });
