// Paginate the comprehensive button matrix (one color × shape block per "page").
(function () {
  'use strict';

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $$(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function init() {
    var pages = $$('.js-btn-matrix-page');
    if (!pages.length) return;

    var prev = $('#btn-matrix-prev');
    var next = $('#btn-matrix-next');
    var label = $('#btn-matrix-label');
    var idx = 0;

    for (var i = 0; i < pages.length; i++) {
      pages[i].classList.toggle('is-active', i === 0);
    }

    function render() {
      for (var j = 0; j < pages.length; j++) {
        pages[j].classList.toggle('is-active', j === idx);
      }
      var cur = pages[idx];
      var shape = cur && cur.getAttribute('data-shape-label');
      var color = cur && cur.getAttribute('data-color-label');
      if (label) {
        label.textContent =
          'Showing ' + (idx + 1) + ' of ' + pages.length + (shape && color ? ' · ' + shape + ' — ' + color : '');
      }
      if (prev) prev.setAttribute('status', idx <= 0 ? 'disabled' : 'default');
      if (next) next.setAttribute('status', idx >= pages.length - 1 ? 'disabled' : 'default');
    }

    if (prev) {
      prev.addEventListener('click', function () {
        if (idx > 0) {
          idx--;
          render();
        }
      });
    }
    if (next) {
      next.addEventListener('click', function () {
        if (idx < pages.length - 1) {
          idx++;
          render();
        }
      });
    }

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
