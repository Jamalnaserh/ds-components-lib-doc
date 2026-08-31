// Typography page script — renders type scale rows from CSS variables.
(function () {
  'use strict';

  function getCssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function parseNum(value) {
    const m = String(value).trim().match(/^(-?[\d.]+)(rem|px)?$/);
    if (!m) return null;
    const n = Number(m[1]);
    return Number.isFinite(n) ? n : null;
  }

  function remToPx(remStr) {
    const n = parseNum(remStr);
    if (n == null) return null;
    return `${Math.round(n * 16)}px`;
  }

  function titleize(key) {
    const [group, size] = key.split('-');
    const g = group === 'display' ? 'Display' : 'Text';
    const s = (size || '').toUpperCase();
    return `${g} ${s}`;
  }

  function el(tag, className, text) {
    const n = document.createElement(tag);
    if (className) n.className = className;
    if (text != null) n.textContent = text;
    return n;
  }

  function buildRow(key) {
    const size = getCssVar(`--font-size-${key}`);
    const lh = getCssVar(`--lh-${key}`);
    const ls = getCssVar(`--ls-${key}`);

    const row = el('div', 'scale-row');

    const meta = el(
      'div',
      'scale-meta',
      `Font size: ${size} (${remToPx(size) || '—'}) · Line height: ${lh || '—'} · Letter spacing: ${ls || '—'}`,
    );
    row.appendChild(meta);

    const weights = [
      { label: 'Regular', w: '400' },
      { label: 'Medium', w: '500' },
      { label: 'Bold', w: '700' },
    ];

    weights.forEach((w) => {
      const cell = el('div', 'scale-cell');
      const sample = el('div', 'scale-cell__sample');
      sample.style.fontSize = `var(--font-size-${key})`;
      sample.style.lineHeight = `var(--lh-${key})`;
      sample.style.letterSpacing = `var(--ls-${key})`;
      sample.style.fontWeight = w.w;

      const t = titleize(key);
      // Two-line label like the screenshot.
      sample.appendChild(document.createTextNode(t));
      sample.appendChild(document.createElement('br'));
      sample.appendChild(document.createTextNode(w.label));

      cell.appendChild(sample);
      row.appendChild(cell);
    });

    return row;
  }

  function build() {
    const root = document.getElementById('scale-table');
    if (!root) return;

    // Mirrors `foundations/_typography.scss` $type-scale keys.
    const keys = [
      'display-xxl',
      'display-xl',
      'display-lg',
      'display-md',
      'display-sm',
      'display-xs',
      'text-xl',
      'text-lg',
      'text-md',
      'text-sm',
      'text-xs',
      'text-xxs',
    ];

    const frag = document.createDocumentFragment();
    let lastGroup = '';

    keys.forEach((k) => {
      const group = k.startsWith('display-') ? 'Display' : 'Text';
      if (group !== lastGroup) {
        frag.appendChild(el('div', 'scale-group-label', group));
        lastGroup = group;
      }
      frag.appendChild(buildRow(k));
    });

    root.textContent = '';
    root.appendChild(frag);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();

