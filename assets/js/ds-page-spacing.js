// Spacing page script — renders spacing scale rows from CSS variables.
(function () {
  'use strict';

  function getCssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function toPx(value) {
    // value like "1.5rem", "24px", or "0"
    if (value == null || value === '') return null;
    const t = String(value).trim();
    if (t === '0') return 0;
    const m = t.match(/^(-?[\d.]+)(rem|px)$/);
    if (!m) return null;
    const n = Number(m[1]);
    if (!Number.isFinite(n)) return null;
    return m[2] === 'rem' ? n * 16 : n;
  }

  function fmtRem(px) {
    const rem = px / 16;
    // keep neat: 0.25, 0.5, 0.75, 1, 1.25, 1.5, ...
    return `${Number(rem.toFixed(4)).toString()}rem`;
  }

  function appendSectionHeading(frag, label) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = 4;
    td.className = 'spacing-table__section';
    td.textContent = label;
    tr.appendChild(td);
    frag.appendChild(tr);
  }

  function appendSpacingRow(frag, key, nameLabel) {
    const css = getCssVar(`--spacing-${key}`);
    const px = toPx(css);
    if (px == null) return;

    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.className = 'col-name';
    tdName.textContent = nameLabel;

    const tdSize = document.createElement('td');
    tdSize.className = 'col-size';
    tdSize.textContent = fmtRem(px);

    const tdPx = document.createElement('td');
    tdPx.className = 'col-px';
    tdPx.textContent = `${Math.round(px)}px`;

    const tdPrev = document.createElement('td');
    const barWrap = document.createElement('div');
    barWrap.className = 'spacing-preview';
    const bar = document.createElement('div');
    bar.className = 'spacing-preview__bar';
    bar.style.width = px > 0 ? `${px}px` : '0';
    bar.textContent = `${Math.round(px)} px`;
    barWrap.appendChild(bar);
    tdPrev.appendChild(barWrap);

    tr.appendChild(tdName);
    tr.appendChild(tdSize);
    tr.appendChild(tdPx);
    tr.appendChild(tdPrev);

    frag.appendChild(tr);
  }

  function build() {
    const tbody = document.getElementById('spacing-rows');
    if (!tbody) return;

    const semanticKeys = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];
    const numericKeys = [
      '0',
      '4',
      '8',
      '12',
      '16',
      '20',
      '24',
      '32',
      '36',
      '48',
      '64',
      '80',
      '96',
      '112',
      '128',
      '144',
      '160',
    ];

    const frag = document.createDocumentFragment();

    appendSectionHeading(frag, 'Semantic (--spacing-xs, --spacing-md, …)');
    semanticKeys.forEach((k) => {
      appendSpacingRow(frag, k, `--spacing-${k}`);
    });

    appendSectionHeading(frag, 'Numeric scale (--spacing-4 … --spacing-160)');
    numericKeys.forEach((k) => {
      appendSpacingRow(frag, k, `Spacing-${k}`);
    });

    tbody.textContent = '';
    tbody.appendChild(frag);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();

