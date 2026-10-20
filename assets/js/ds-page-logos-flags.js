// Logos & flags sections on icons.pug — lazy-mounted <ds-logo> / <ds-flag> grids.
(function () {
  'use strict';

  function readJson(id) {
    var el = document.getElementById(id);
    if (!el || !el.textContent) return [];
    try {
      var parsed = JSON.parse(el.textContent);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  var LOGO_SLUGS = readJson('ds-logo-slugs');
  var FLAG_CODES = readJson('ds-flag-codes');

  function $(id) {
    return document.getElementById(id);
  }
  function normalize(s) {
    return String(s || '')
      .trim()
      .toLowerCase();
  }

  function createCard(label, attrName) {
    var card = document.createElement('button');
    card.type = 'button';
    card.className = 'icon-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute(attrName, label);
    card.setAttribute('aria-label', 'Copy ' + label);

    var iconWrap = document.createElement('div');
    iconWrap.className = 'icon-card__icon';

    var lbl = document.createElement('div');
    lbl.className = 'icon-card__label';
    lbl.textContent = label;

    card.appendChild(iconWrap);
    card.appendChild(lbl);

    card.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(label).catch(function () {});
      }
    });

    return card;
  }

  // ─── logos ────────────────────────────────────────────────────────────────

  var logoCards = [];
  var logoIo = null;

  function ensureLogoIo() {
    if (logoIo) return logoIo;
    if (typeof IntersectionObserver === 'undefined') {
      logoIo = {
        observe: function (card) {
          mountLogo(card);
        },
        unobserve: function () {},
      };
      return logoIo;
    }
    logoIo = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i];
          if (!entry.isIntersecting) continue;
          var card = entry.target;
          mountLogo(card);
          logoIo.unobserve(card);
        }
      },
      { rootMargin: '200px 0px', threshold: 0 },
    );
    return logoIo;
  }

  function currentLogoSize() {
    var g = $('logosGrid');
    var s = g && g.dataset.size;
    var n = Number(s);
    return n > 0 ? n : 64;
  }

  function mountLogo(card) {
    var slug = card.getAttribute('data-logo');
    var wrap = card.querySelector('.icon-card__icon');
    if (!wrap || !slug) return;

    var el = wrap.querySelector('ds-logo');
    if (!el) {
      el = document.createElement('ds-logo');
      el.setAttribute('logo', slug);
      wrap.appendChild(el);
    }
    el.setAttribute('size', String(currentLogoSize()));
  }

  function bindLogoToolbar() {
    var grid = $('logosGrid');
    if (!grid) return;

    document.querySelectorAll('[data-logo-size]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var s = btn.getAttribute('data-logo-size');
        grid.dataset.size = s || '64';
        document.querySelectorAll('[data-logo-size]').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        for (var i = 0; i < logoCards.length; i++) {
          var lg = logoCards[i].querySelector('ds-logo');
          if (lg) lg.setAttribute('size', String(currentLogoSize()));
        }
      });
    });

    var search = $('logo-search');
    if (search) search.addEventListener('input', applyLogoFilter);
  }

  function applyLogoFilter() {
    var q = normalize(($('logo-search') && $('logo-search').value) || '');
    var observer = ensureLogoIo();
    var visible = 0;

    for (var i = 0; i < logoCards.length; i++) {
      var card = logoCards[i];
      var name = card.getAttribute('data-logo') || '';
      var match = !q || normalize(name).indexOf(q) !== -1;

      if (match) {
        if (card.classList.contains('is-hidden')) {
          card.classList.remove('is-hidden');
          if (!card.querySelector('ds-logo')) {
            observer.observe(card);
          }
        }
        visible++;
      } else if (!card.classList.contains('is-hidden')) {
        card.classList.add('is-hidden');
        observer.unobserve(card);
      }
    }

    var c = $('logoCount');
    if (c) c.textContent = String(visible);
  }

  function buildLogoGrid() {
    var grid = $('logosGrid');
    if (!grid) return;

    if (!LOGO_SLUGS.length) {
      grid.innerHTML =
        '<p class="icons-empty">No logo PNGs in <code>assets/logo/</code>.</p>';
      return;
    }

    if (!grid.dataset.size) grid.dataset.size = '64';

    grid.setAttribute('aria-busy', 'true');
    grid.innerHTML = '';
    logoCards = [];
    var observer = ensureLogoIo();
    var frag = document.createDocumentFragment();

    for (var i = 0; i < LOGO_SLUGS.length; i++) {
      var card = createCard(LOGO_SLUGS[i], 'data-logo');
      logoCards.push(card);
      frag.appendChild(card);
    }
    grid.appendChild(frag);

    for (var j = 0; j < logoCards.length; j++) {
      observer.observe(logoCards[j]);
    }

    grid.setAttribute('aria-busy', 'false');
    var count = $('logoCount');
    if (count) count.textContent = String(LOGO_SLUGS.length);
    bindLogoToolbar();
  }

  // ─── flags ────────────────────────────────────────────────────────────────

  var flagCards = [];
  var flagIo = null;

  function ensureFlagIo() {
    if (flagIo) return flagIo;
    if (typeof IntersectionObserver === 'undefined') {
      flagIo = {
        observe: function (card) {
          mountFlag(card);
        },
        unobserve: function () {},
      };
      return flagIo;
    }
    flagIo = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i];
          if (!entry.isIntersecting) continue;
          var card = entry.target;
          mountFlag(card);
          flagIo.unobserve(card);
        }
      },
      { rootMargin: '200px 0px', threshold: 0 },
    );
    return flagIo;
  }

  function currentFlagSize() {
    var g = $('flagsGrid');
    var s = g && g.dataset.size;
    var n = Number(s);
    return n > 0 ? n : 28;
  }

  function mountFlag(card) {
    var code = card.getAttribute('data-flag');
    var wrap = card.querySelector('.icon-card__icon');
    if (!wrap || !code) return;

    var el = wrap.querySelector('ds-flag');
    if (!el) {
      el = document.createElement('ds-flag');
      el.setAttribute('code', code);
      wrap.appendChild(el);
    }
    el.setAttribute('size', String(currentFlagSize()));
  }

  function bindFlagToolbar() {
    var grid = $('flagsGrid');
    if (!grid) return;

    document.querySelectorAll('[data-flag-size]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var s = btn.getAttribute('data-flag-size');
        grid.dataset.size = s || '28';
        document.querySelectorAll('[data-flag-size]').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        for (var i = 0; i < flagCards.length; i++) {
          var fg = flagCards[i].querySelector('ds-flag');
          if (fg) fg.setAttribute('size', String(currentFlagSize()));
        }
      });
    });

    var search = $('flag-search');
    if (search) search.addEventListener('input', applyFlagFilter);
  }

  function applyFlagFilter() {
    var q = normalize(($('flag-search') && $('flag-search').value) || '');
    var observer = ensureFlagIo();
    var visible = 0;

    for (var i = 0; i < flagCards.length; i++) {
      var card = flagCards[i];
      var name = card.getAttribute('data-flag') || '';
      var match = !q || normalize(name).indexOf(q) !== -1;

      if (match) {
        if (card.classList.contains('is-hidden')) {
          card.classList.remove('is-hidden');
          if (!card.querySelector('ds-flag')) {
            observer.observe(card);
          }
        }
        visible++;
      } else if (!card.classList.contains('is-hidden')) {
        card.classList.add('is-hidden');
        observer.unobserve(card);
      }
    }

    var c = $('flagCount');
    if (c) c.textContent = String(visible);
  }

  function buildFlagGrid() {
    var grid = $('flagsGrid');
    if (!grid) return;

    if (!FLAG_CODES.length) {
      grid.innerHTML =
        '<p class="icons-empty">No flag PNGs in <code>assets/flag/</code>.</p>';
      return;
    }

    if (!grid.dataset.size) grid.dataset.size = '28';

    grid.setAttribute('aria-busy', 'true');
    grid.innerHTML = '';
    flagCards = [];
    var observer = ensureFlagIo();
    var frag = document.createDocumentFragment();

    for (var i = 0; i < FLAG_CODES.length; i++) {
      var card = createCard(FLAG_CODES[i], 'data-flag');
      flagCards.push(card);
      frag.appendChild(card);
    }
    grid.appendChild(frag);

    for (var j = 0; j < flagCards.length; j++) {
      observer.observe(flagCards[j]);
    }

    grid.setAttribute('aria-busy', 'false');
    var count = $('flagCount');
    if (count) count.textContent = String(FLAG_CODES.length);
    bindFlagToolbar();
  }

  // ─── init ─────────────────────────────────────────────────────────────────

  function init() {
    buildLogoGrid();
    buildFlagGrid();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
