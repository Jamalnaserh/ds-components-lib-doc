// =============================================================================
// ds-shell.js — STC Design System · App shell behaviour
// Handles: sidebar toggle, active nav state, keyboard navigation
// No external dependencies — pure vanilla JS, < 2 KB.
// =============================================================================
(function () {
  'use strict';

  // ── Active navigation item ─────────────────────────────────────────────────
  var page = document.body.dataset.page || '';
  document.querySelectorAll('[data-nav]').forEach(function (el) {
    if (el.dataset.nav && el.dataset.nav === page) {
      el.classList.add('is-active');
    }
  });

  // ── Sidebar toggle (mobile) ────────────────────────────────────────────────
  var toggleBtn = document.getElementById('ds-sidebar-toggle');
  var sidebar   = document.getElementById('ds-sidebar');
  var overlay   = document.querySelector('.ds-sidebar-overlay');

  function openSidebar() {
    sidebar.classList.add('is-open');
    overlay.classList.add('is-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      var isOpen = sidebar.classList.contains('is-open');
      isOpen ? closeSidebar() : openSidebar();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('is-open')) {
      closeSidebar();
      if (toggleBtn) toggleBtn.focus();
    }
  });

  // Close sidebar when a nav link is tapped on mobile
  document.querySelectorAll('.ds-nav-item').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) closeSidebar();
    });
  });
}());