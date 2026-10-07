(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = () => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('inert', '');
  };
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const shouldOpen = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(shouldOpen));
      menuButton.setAttribute('aria-label', shouldOpen ? 'Close navigation' : 'Open navigation');
      mobileMenu.classList.toggle('open', shouldOpen);
      if (shouldOpen) mobileMenu.removeAttribute('inert');
      else mobileMenu.setAttribute('inert', '');
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    document.addEventListener('click', e => {
      if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) closeMenu();
    });
    window.matchMedia('(min-width: 1021px)').addEventListener('change', closeMenu);
  }
  const rail = document.querySelector('.contact-rail');
  const railToggle = document.querySelector('.rail-toggle');
  if (rail && railToggle) {
    railToggle.addEventListener('click', () => {
      const collapsed = rail.classList.toggle('collapsed');
      railToggle.setAttribute('aria-expanded', String(!collapsed));
      railToggle.setAttribute('aria-label', collapsed ? 'Expand quick contacts' : 'Collapse quick contacts');
    });
  }
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    const preselect = new URLSearchParams(window.location.search).get('matter');
    const matters = { mediation: 'Mediation / ADR', succession: 'Succession / Probate', property: 'Property / Conveyancing', commercial: 'Commercial / Corporate', data: 'Data Protection / IP', litigation: 'Litigation / Legal Advisory' };
    if (preselect && matters[preselect]) form.elements.matter.value = matters[preselect];
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = encodeURIComponent(`Website enquiry: ${data.get('matter') || 'Legal matter'}`);
      const body = encodeURIComponent(`Name: ${data.get('name') || ''}\nPhone: ${data.get('phone') || 'Not provided'}\nEmail: ${data.get('email') || ''}\nArea: ${data.get('matter') || ''}\n\nMessage:\n${data.get('message') || ''}`);
      const feedback = form.querySelector('.form-feedback');
      if (feedback) {
        feedback.hidden = false;
        feedback.textContent = 'Your email application should open with a prepared enquiry. If nothing happens, email joycendehiadvocates@gmail.com directly.';
      }
      window.location.href = `mailto:joycendehiadvocates@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
