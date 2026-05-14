import { useEffect, useMemo, useState } from 'react';

function useRootCssVars() {
  const [vars, setVars] = useState<{ name: string; value: string }[]>([]);

  useEffect(() => {
    const root = document.documentElement;
    const styles = getComputedStyle(root);
    const list: { name: string; value: string }[] = [];
    for (let i = 0; i < styles.length; i += 1) {
      const name = styles[i];
      if (!name || !name.startsWith('--')) continue;
      const value = styles.getPropertyValue(name).trim();
      list.push({ name, value });
    }
    setVars(list);
  }, []);

  return vars;
}

function isColorLike(value: string) {
  const v = String(value || '').trim();
  if (!v) return false;
  if (v.startsWith('#')) return true;
  if (/^rgb\(/i.test(v) || /^rgba\(/i.test(v) || /^hsl\(/i.test(v) || /^hsla\(/i.test(v))
    return true;
  if (/^var\(--/.test(v)) return true;
  return false;
}

function Swatch({ token, value }: { token: string; value: string }) {
  return (
    <div
      style={{
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: 12,
        overflow: 'hidden',
        background: 'var(--white)',
      }}
    >
      <div style={{ height: 56, background: `var(${token})` }} />
      <div
        style={{
          padding: 12,
          fontFamily: 'var(--font-family-base)',
          fontSize: 13,
          display: 'grid',
          gap: 4,
        }}
      >
        <div style={{ fontWeight: 600 }}>{token}</div>
        <div style={{ opacity: 0.75 }}>{value}</div>
      </div>
    </div>
  );
}

function ColorsAutoGrid({ filter }: { filter: string }) {
  const vars = useRootCssVars();
  const items = useMemo(() => {
    const q = String(filter || '').trim().toLowerCase();
    return vars
      .filter((x) => isColorLike(x.value))
      .filter((x) => (q ? x.name.toLowerCase().includes(q) : true))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [vars, filter]);

  return (
    <div style={{ display: 'grid', gap: 10 }}>
      <div style={{ fontFamily: 'var(--font-family-base)', fontSize: 13, color: 'var(--dark-grey)' }}>
        Found <strong>{items.length}</strong> color-like tokens on <code>:root</code>.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
        {items.map((x) => (
          <Swatch key={x.name} token={x.name} value={x.value} />
        ))}
      </div>
    </div>
  );
}

function ColorFilter() {
  const [q, setQ] = useState('');
  return (
    <div style={{ display: 'grid', gap: 12, width: '100%' }}>
      <input
        type="search"
        value={q}
        placeholder="Search token (example: primary, purple, grey, rgb, error-300)…"
        onChange={(e) => setQ(e.target.value)}
        style={{
          width: 'min(720px, 100%)',
          padding: '10px 12px',
          borderRadius: 12,
          border: '1px solid rgba(0,0,0,0.12)',
          outline: 'none',
          background: 'var(--white)',
          fontFamily: 'var(--font-family-base)',
        }}
      />
      <ColorsAutoGrid filter={q} />
    </div>
  );
}

const SEMANTIC = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'white',
  'black',
  'off-white',
  'light-grey',
  'grey',
  'dark-grey',
] as const;

const SCALES = [
  ['coral-100', 'coral-200', 'coral-300', 'coral-400', 'coral-500'],
  ['purple-100', 'purple-200', 'purple-300', 'purple-400', 'purple-500'],
  ['sea-100', 'sea-200', 'sea-300', 'sea-400', 'sea-500'],
  ['success-100', 'success-200', 'success-300', 'success-400', 'success-500'],
  ['error-100', 'error-200', 'error-300', 'error-400', 'error-500'],
] as const;

/** Docs page for Storybook MDX — keeps heavy JSX out of `.mdx` so Vite dev lazy-loads reliably. */
export function ColorsDocs() {
  return (
    <>
      <h2>Colors</h2>
      <p>These swatches are rendered from the library CSS variables (from <code>:root</code>).</p>

      <h3>Semantic colors</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12,
        }}
      >
        {SEMANTIC.map((t) => (
          <div
            key={t}
            style={{
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 12,
              overflow: 'hidden',
              background: 'var(--white)',
            }}
          >
            <div style={{ height: 56, background: `var(--${t})` }} />
            <div style={{ padding: 12, fontFamily: 'var(--font-family-base)', fontSize: 13 }}>
              <div style={{ fontWeight: 600 }}>{`--${t}`}</div>
              <div style={{ opacity: 0.7 }}>{`background: var(--${t})`}</div>
            </div>
          </div>
        ))}
      </div>

      <h3>Palette scales (examples)</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12,
        }}
      >
        {SCALES.map((scale, idx) => (
          <div
            key={idx}
            style={{
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 12,
              overflow: 'hidden',
              background: 'var(--white)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${scale.length}, 1fr)` }}>
              {scale.map((t) => (
                <div key={t} style={{ height: 40, background: `var(--${t})` }} title={`--${t}`} />
              ))}
            </div>
            <div style={{ padding: 12, fontFamily: 'var(--font-family-base)', fontSize: 13 }}>
              <div style={{ fontWeight: 600 }}>Scale</div>
              <div style={{ opacity: 0.7 }}>{scale.map((t) => `--${t}`).join(', ')}</div>
            </div>
          </div>
        ))}
      </div>

      <h3>All color tokens (auto)</h3>
      <div style={{ display: 'grid', gap: 12 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--font-family-base)', fontSize: 13, color: 'var(--dark-grey)' }}>
            Filter:
          </div>
          <ColorFilter />
        </div>
      </div>
    </>
  );
}
