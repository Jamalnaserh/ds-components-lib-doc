// Icons page — searchable grid of <ds-icon>. Names come from #ds-icon-names JSON
// (all `src/assets/icon/icon-*.svg` slugs, injected at build time in icons.pug).
// Toolbar "Size" sets the `size` attribute (square px) on each preview icon.
//
// Performance notes:
// - Cards are created up-front (cheap: button + label divs) so search/filter is
//   instant and we don't need to keep a parallel data structure in sync.
// - <ds-icon> elements are only mounted when a card scrolls into view, via
//   IntersectionObserver. This avoids ~600 simultaneous fetches on page load
//   that would otherwise stall the browser.
// - Search filters by toggling a `.is-hidden` class on existing cards instead
//   of rebuilding the DOM, so typing stays smooth.
(function () {
  'use strict';

  var FALLBACK_ICONS = [
    'home-o',
    'search',
    'warning',
    'check-circle',
    'arrow-left',
    'arrow-right',
  ];

  /**
   * Keys must match `fc-*` / `$color-tokens` in foundations/_colors.scss`.
   * Order within groups is display order; titles group the picker UI.
   */
  var TOKEN_GROUPS = [
    {
      title: 'Brand & semantic',
      keys: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    {
      title: 'Neutrals',
      keys: [
        'black',
        'white',
        'off-white',
        'light-grey',
        'grey',
        'dark-grey',
        'grey-50',
        'grey-100',
        'grey-200',
        'grey-400',
        'grey-500',
      ],
    },
    {
      title: 'Purple',
      keys: ['purple-100', 'purple-200', 'purple-300', 'purple-400', 'purple-500'],
    },
    {
      title: 'Coral',
      keys: ['coral-100', 'coral-200', 'coral-300', 'coral-400', 'coral-500'],
    },
    {
      title: 'Moon',
      keys: ['moon-100', 'moon-200', 'moon-300', 'moon-400', 'moon-500'],
    },
    {
      title: 'Orange',
      keys: ['orange-100', 'orange-200', 'orange-300', 'orange-400', 'orange-500'],
    },
    {
      title: 'Yellow',
      keys: ['yellow-100', 'yellow-200', 'yellow-300', 'yellow-500', 'yellow-600'],
    },
    {
      title: 'Sea',
      keys: ['sea-100', 'sea-200', 'sea-300', 'sea-400', 'sea-500'],
    },
    {
      title: 'Success scale',
      keys: ['success-100', 'success-200', 'success-300', 'success-400', 'success-500'],
    },
    {
      title: 'Error scale',
      keys: ['error-100', 'error-200', 'error-300', 'error-400', 'error-500'],
    },
  ];

  function readIconNamesFromPage() {
    var el = document.getElementById('ds-icon-names');
    if (!el || !el.textContent) return [];
    try {
      var parsed = JSON.parse(el.textContent);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  var ICONS = readIconNamesFromPage();
  if (!ICONS.length) ICONS = FALLBACK_ICONS;

  function $(id) {
    return document.getElementById(id);
  }
  function normalize(s) {
    return String(s || '')
      .trim()
      .toLowerCase();
  }

  /** Collapse whitespace so multi-word icon search works ("arrow left"). */
  function normalizeQuery(s) {
    return normalize(s).replace(/\s+/g, ' ').trim();
  }

  function nameMatchesQuery(name, q) {
    if (!q) return true;
    var n = normalize(name);
    var parts = q.split(' ');
    for (var i = 0; i < parts.length; i++) {
      if (!parts[i]) continue;
      if (n.indexOf(parts[i]) === -1) return false;
    }
    return true;
  }

  var cards = [];

  /** fc-* colour token (keys from foundations `_colors.scss` `$color-tokens`) */
  var selectedToken = 'dark-grey';

  function createCard(name) {
    var card = document.createElement('button');
    card.type = 'button';
    card.className = 'icon-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('data-name', name);
    card.setAttribute('aria-label', 'Copy icon name ' + name);

    var iconWrap = document.createElement('div');
    iconWrap.className = 'icon-card__icon';

    var label = document.createElement('div');
    label.className = 'icon-card__label';
    label.textContent = name;

    card.appendChild(iconWrap);
    card.appendChild(label);

    card.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(name).catch(function () {});
      }
    });

    return card;
  }

  /**
   * Apply `.icon-card__icon` on the wrapper; `size` and `color` live on
   * `<ds-icon>` (shadow host sizing / colour).
   */
  function buildWrapClassList() {
    return 'icon-card__icon';
  }

  /**
   * Mount the actual <ds-icon> inside a card. Idempotent — safe to call
   * multiple times; updates `size` and `color` on the icon (square previews).
   */
  function mountIcon(card) {
    var name = card.getAttribute('data-name');
    var wrap = card.querySelector('.icon-card__icon');
    if (!wrap) return;

    wrap.className = buildWrapClassList();

    var icon = wrap.querySelector('ds-icon');
    if (!icon) {
      icon = document.createElement('ds-icon');
      icon.setAttribute('icon', name);
      wrap.appendChild(icon);
    }
    var token = selectedToken || 'dark-grey';
    icon.removeAttribute('width');
    icon.removeAttribute('height');
    icon.setAttribute('size', String(currentSize()));
    icon.setAttribute('color', token);
  }

  function currentSize() {
    var grid = $('iconsGrid');
    var s = grid && grid.dataset.size;
    var n = Number(s);
    return n > 0 ? n : 24;
  }

  function applyAppearance() {
    var size = currentSize();
    var token = selectedToken || 'dark-grey';
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var wrap = card.querySelector('.icon-card__icon');
      if (!wrap) continue;
      wrap.className = buildWrapClassList();
      var icon = wrap.querySelector('ds-icon');
      if (icon) {
        icon.removeAttribute('width');
        icon.removeAttribute('height');
        icon.setAttribute('size', String(size));
        icon.setAttribute('color', token);
      }
    }
  }

  function updateTokenSummary() {
    var tr = $('iconColorPickerTrigger');
    if (!tr) return;
    var token = selectedToken || 'dark-grey';
    var swatch = tr.querySelector('.icon-color-picker__trigger-swatch');
    var nameEl = tr.querySelector('.icon-color-picker__trigger-token');
    if (swatch) swatch.style.setProperty('--icon-token-swatch', 'var(--' + token + ')');
    if (nameEl) nameEl.textContent = token;
    tr.setAttribute('aria-label', 'Colour token ' + token + '. Open picker');
  }

  function setColorPickerOpen(open) {
    var root = document.querySelector('.icon-color-picker');
    var dd = $('iconColorPickerDropdown');
    var tr = $('iconColorPickerTrigger');
    if (!root || !dd || !tr) return;
    if (open) {
      root.classList.add('is-open');
      dd.removeAttribute('hidden');
      tr.setAttribute('aria-expanded', 'true');
      window.requestAnimationFrame(function () {
        var search = $('iconTokenSearch');
        if (search) {
          search.focus();
          search.select();
        }
      });
    } else {
      root.classList.remove('is-open');
      dd.setAttribute('hidden', '');
      tr.setAttribute('aria-expanded', 'false');
    }
  }

  function bindColorPicker() {
    var root = document.querySelector('.icon-color-picker');
    var tr = $('iconColorPickerTrigger');
    if (!root || !tr) return;

    tr.addEventListener('click', function (ev) {
      ev.stopPropagation();
      var dd = $('iconColorPickerDropdown');
      var isOpen = dd && !dd.hasAttribute('hidden');
      setColorPickerOpen(!isOpen);
    });

    document.addEventListener('keydown', function (ev) {
      if (ev.key !== 'Escape') return;
      var dd = $('iconColorPickerDropdown');
      if (!dd || dd.hasAttribute('hidden')) return;
      setColorPickerOpen(false);
      if (tr) tr.focus();
    });

    document.addEventListener('mousedown', function (ev) {
      if (root.contains(ev.target)) return;
      setColorPickerOpen(false);
    });
  }

  function applySelectedToken(token, closePicker) {
    selectedToken = token || 'dark-grey';
    updateTokenSummary();
    syncTokenListActive();
    applyAppearance();
    if (closePicker) setColorPickerOpen(false);
  }

  function selectToken(token) {
    applySelectedToken(token, true);
  }

  function syncTokenListActive() {
    var panel = $('iconTokenPanel');
    if (!panel) return;
    var buttons = panel.querySelectorAll('.icon-token-btn');
    for (var i = 0; i < buttons.length; i++) {
      var b = buttons[i];
      var t = b.getAttribute('data-token');
      var active = t === selectedToken;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    }
  }

  function tokenMatchesFilter(key, q) {
    if (!q) return true;
    return normalize(key).indexOf(q) !== -1;
  }

  function buildTokenList(filterVal) {
    var panel = $('iconTokenPanel');
    if (!panel) return;

    var q = normalize(filterVal);
    panel.innerHTML = '';

    for (var g = 0; g < TOKEN_GROUPS.length; g++) {
      var group = TOKEN_GROUPS[g];
      var visibleKeys = [];
      for (var k = 0; k < group.keys.length; k++) {
        var key = group.keys[k];
        if (tokenMatchesFilter(key, q)) visibleKeys.push(key);
      }
      if (!visibleKeys.length) continue;

      var section = document.createElement('section');
      section.className = 'icon-token-section';
      section.setAttribute('aria-label', group.title);

      var title = document.createElement('h3');
      title.className = 'icon-token-section__title';
      title.textContent = group.title;

      var grid = document.createElement('div');
      grid.className = 'icon-token-section__grid';

      section.appendChild(title);
      section.appendChild(grid);
      panel.appendChild(section);

      for (var i = 0; i < visibleKeys.length; i++) {
        var vk = visibleKeys[i];
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'icon-token-btn';
        btn.setAttribute('data-token', vk);
        btn.setAttribute('aria-pressed', 'false');
        btn.style.setProperty('--icon-token-swatch', 'var(--' + vk + ')');
        btn.innerHTML =
          '<span class="icon-token-btn__swatch" aria-hidden="true"></span>' +
          '<span class="icon-token-btn__name">' +
          vk +
          '</span>';
        btn.addEventListener('click', function (ev) {
          var tok = ev.currentTarget.getAttribute('data-token');
          selectToken(tok);
        });
        grid.appendChild(btn);
      }
    }

    if (!panel.children.length) {
      var empty = document.createElement('p');
      empty.className = 'icon-token-panel__empty';
      empty.textContent = 'No tokens match your filter.';
      panel.appendChild(empty);
    }

    syncTokenListActive();
  }

  var io = null;

  function ensureObserver() {
    if (io) return io;
    if (typeof IntersectionObserver === 'undefined') {
      io = {
        observe: function (card) {
          mountIcon(card);
        },
        unobserve: function () {},
        disconnect: function () {},
      };
      return io;
    }
    io = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i];
          if (!entry.isIntersecting) continue;
          var card = entry.target;
          mountIcon(card);
          io.unobserve(card);
        }
      },
      {
        rootMargin: '200px 0px',
        threshold: 0,
      },
    );
    return io;
  }

  function buildGrid() {
    var grid = $('iconsGrid');
    if (!grid) return;

    grid.setAttribute('aria-busy', 'true');
    grid.innerHTML = '';
    cards = [];

    var observer = ensureObserver();
    var frag = document.createDocumentFragment();

    for (var i = 0; i < ICONS.length; i++) {
      var card = createCard(ICONS[i]);
      cards.push(card);
      frag.appendChild(card);
    }
    grid.appendChild(frag);

    for (var j = 0; j < cards.length; j++) {
      observer.observe(cards[j]);
    }

    grid.setAttribute('aria-busy', 'false');
    updateCount(ICONS.length);
  }

  function updateCount(n) {
    var count = $('iconCount');
    if (count) count.textContent = String(n);
  }

  function applyFilter(ev) {
    var searchToolbar = $('icons-demo-search');
    var searchHeader = $('icon-search');
    if (ev && ev.target && searchToolbar && searchHeader && searchToolbar !== searchHeader) {
      if (ev.target === searchToolbar) searchHeader.value = searchToolbar.value;
      else if (ev.target === searchHeader) searchToolbar.value = searchHeader.value;
    }
    var raw =
      (searchToolbar && searchToolbar.value) ||
      (searchHeader && searchHeader.value) ||
      '';
    var q = normalizeQuery(raw);

    var observer = ensureObserver();
    var visible = 0;

    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var name = card.getAttribute('data-name') || '';
      var match = nameMatchesQuery(name, q);

      if (match) {
        if (card.classList.contains('is-hidden')) {
          card.classList.remove('is-hidden');
          if (!card.querySelector('ds-icon')) {
            observer.observe(card);
          }
        }
        visible++;
      } else if (!card.classList.contains('is-hidden')) {
        card.classList.add('is-hidden');
        observer.unobserve(card);
      }
    }

    updateCount(visible);
  }

  function bindIconSearchInputs(handler) {
    var a = $('icons-demo-search');
    var b = $('icon-search');
    if (a) a.addEventListener('input', handler);
    if (b) b.addEventListener('input', handler);
  }

  function bindSizeSegmentButtons() {
    var grid = $('iconsGrid');
    var toolbar = $('icons-demo-toolbar');
    if (!grid || !toolbar) return;

    var buttons = toolbar.querySelectorAll('button.icon-toolbar__seg-btn[data-size]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var s = btn.getAttribute('data-size');
        grid.dataset.size = s || '24';
        buttons.forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        applyAppearance();
      });
    });
  }

  function bind() {
    var grid = $('iconsGrid');
    if (!grid) return;
    if (!grid.dataset.size) grid.dataset.size = '24';

    bindIconSearchInputs(function (ev) {
      applyFilter(ev);
    });

    var tokenSearch = $('iconTokenSearch');
    if (tokenSearch) {
      tokenSearch.addEventListener('input', function () {
        buildTokenList(tokenSearch.value);
      });
    }

    bindColorPicker();

    buildTokenList('');
    applySelectedToken('dark-grey', false);

    bindSizeSegmentButtons();

    buildGrid();
    applyFilter(null);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
