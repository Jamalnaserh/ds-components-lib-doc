// Colors page script — click/keyboard copy for swatches.
(function () {
  'use strict';

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (_) {}
    document.body.removeChild(ta);
    return Promise.resolve();
  }

  function markCopied(el) {
    el.classList.add('is-copied');
    window.clearTimeout(el.__copyTimer);
    el.__copyTimer = window.setTimeout(function () {
      el.classList.remove('is-copied');
    }, 900);
  }

  function onActivate(el) {
    var hex = el.getAttribute('data-hex');
    if (!hex) return;
    copyToClipboard(hex).finally(function () {
      markCopied(el);
    });
  }

  function bind() {
    document.querySelectorAll('.swatch-card').forEach(function (el) {
      el.addEventListener('click', function () { onActivate(el); });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onActivate(el);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();

