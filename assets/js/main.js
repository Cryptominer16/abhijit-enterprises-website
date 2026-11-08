/**
 * Abhijit Enterprises - Main JavaScript Logic
 * Handles: Mobile Nav, Contact Forms, WhatsApp Actions, Gallery Filter & Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. Mobile Navigation Toggle
  // -------------------------------------------------------------
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', false);
      }
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // -------------------------------------------------------------
  // 2. Active Nav Link Highlighting
  // -------------------------------------------------------------
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // -------------------------------------------------------------
  // 3. Contact & Quick Enquiry Form Handling (WhatsApp Integration)
  // -------------------------------------------------------------
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('formName');
      const phoneInput = document.getElementById('formPhone');
      const serviceInput = document.getElementById('formService');
      const messageInput = document.getElementById('formMessage');
      const statusBox = document.getElementById('formStatus');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const service = serviceInput ? serviceInput.value : '';
      const message = messageInput ? messageInput.value.trim() : '';

      // Reset status
      statusBox.className = 'form-status';
      statusBox.style.display = 'none';

      // Validation
      const currentLang = localStorage.getItem('ae_preferred_lang') || 'en';
      const t = translations[currentLang] || translations.en;

      if (!name) {
        showStatus(t.form_err_name || 'Please enter your name.', 'error');
        nameInput.focus();
        return;
      }

      // Basic Indian 10-digit mobile check
      const phoneDigits = phone.replace(/[^0-9]/g, '');
      if (phoneDigits.length < 10) {
        showStatus(t.form_err_phone || 'Please enter a valid 10-digit mobile number.', 'error');
        phoneInput.focus();
        return;
      }

      if (!service) {
        showStatus(t.form_err_service || 'Please select a service.', 'error');
        serviceInput.focus();
        return;
      }

      if (!message) {
        showStatus(t.form_err_msg || 'Please enter a brief message.', 'error');
        messageInput.focus();
        return;
      }

      // Build formatted WhatsApp message
      const formattedText = 
        `*New Enquiry - Abhijit Enterprises Website*\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `💼 *Service:* ${service}\n` +
        `📝 *Requirement:* ${message}\n\n` +
        `_Sent via www.abhijitenterprises.in_`;

      const encodedText = encodeURIComponent(formattedText);
      const whatsappUrl = `https://wa.me/918208361003?text=${encodedText}`;

      // Show friendly confirmation
      showStatus(t.form_success_msg || 'Enquiry ready! Redirecting to WhatsApp...', 'success');

      // Open WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 700);

      // Reset form
      enquiryForm.reset();
    });
  }

  function showStatus(msg, type) {
    const statusBox = document.getElementById('formStatus');
    if (!statusBox) return;
    statusBox.textContent = msg;
    statusBox.className = `form-status ${type}`;
    statusBox.style.display = 'block';
  }

  // -------------------------------------------------------------
  // 4. Gallery Filtering & Lightbox Modal
  // -------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterButtons.length > 0 && galleryItems.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Modal Lightbox
  const modal = document.getElementById('galleryModal');
  if (modal) {
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalClose = document.querySelector('.modal-close');

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-title');
        const desc = item.querySelector('.gallery-caption');

        if (img && modalImg) modalImg.src = img.src;
        if (title && modalTitle) modalTitle.textContent = title.textContent;
        if (desc && modalDesc) modalDesc.textContent = desc.textContent;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }
});

