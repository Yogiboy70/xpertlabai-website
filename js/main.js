/* ============================================================
   XPERT LAB AI — main.js
   ============================================================ */

(function () {
  'use strict';

  // --- Nav scroll shadow ---
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Mobile menu ---
  const burger   = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      navLinks.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        burger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll reveal ---
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  // --- Contact form — Formspree (xlgplzyg) ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn  = form.querySelector('button[type="submit"]');
      const data = new FormData(form);

      btn.textContent = 'Sending…';
      btn.disabled = true;

      try {
        const res = await fetch('https://formspree.io/f/xlgplzyg', {
          method:  'POST',
          body:    data,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          btn.textContent = 'Message Sent ✓';
          btn.style.background = '#1E8A62';
          btn.style.boxShadow  = '0 4px 16px rgba(30,138,98,0.3)';
          form.reset();

          // Insert thank-you note
          const thanks = document.createElement('p');
          thanks.textContent = "Thank you — we'll be in touch within 24 hours.";
          thanks.style.cssText = 'color:#1E8A62;font-weight:700;font-size:0.92rem;text-align:center;margin-top:8px;';
          btn.insertAdjacentElement('afterend', thanks);
        } else {
          const json = await res.json();
          const msg  = json.errors ? json.errors.map(err => err.message).join(', ') : 'Something went wrong.';
          btn.textContent = 'Try Again';
          btn.disabled    = false;
          alert('Error: ' + msg);
        }
      } catch (err) {
        btn.textContent = 'Try Again';
        btn.disabled    = false;
        alert('Network error — please check your connection and try again.');
      }
    });
  }

  // --- Highlight active nav link ---
  const path = window.location.pathname;
  document.querySelectorAll('.nav__link[href], .nav__dropdown-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === path || (href !== '/' && path.endsWith(href)))) {
      link.style.color = 'var(--accent)';
    }
  });

})();
