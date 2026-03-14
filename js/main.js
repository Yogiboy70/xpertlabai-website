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

  // --- Mobile burger menu ---
  const burger   = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = burger.classList.toggle('open');
      navLinks.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  // --- Mobile: tap Products to toggle dropdown ---
  document.querySelectorAll('.nav__item--dropdown > .nav__link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        e.stopPropagation();
        btn.closest('.nav__item--dropdown').classList.toggle('open');
      }
    });
  });

  // --- Close everything when clicking outside nav ---
  document.addEventListener('click', (e) => {
    if (nav && !nav.contains(e.target)) {
      document.querySelectorAll('.nav__item--dropdown').forEach(el => el.classList.remove('open'));
      if (burger) burger.classList.remove('open');
      if (navLinks) navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // --- Close mobile menu when a link is clicked ---
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (burger) burger.classList.remove('open');
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

  // --- Contact form — Formspree ---
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
          method: 'POST', body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          btn.textContent = 'Message Sent ✓';
          btn.style.background = '#1E8A62';
          form.reset();
          const thanks = document.createElement('p');
          thanks.textContent = "Thank you — we'll be in touch within 24 hours.";
          thanks.style.cssText = 'color:#1E8A62;font-weight:700;font-size:0.92rem;text-align:center;margin-top:8px;';
          btn.insertAdjacentElement('afterend', thanks);
        } else {
          btn.textContent = 'Try Again';
          btn.disabled = false;
        }
      } catch {
        btn.textContent = 'Try Again';
        btn.disabled = false;
      }
    });
  }

})();
