/** Honour &lt;base href&gt; if set, else `${origin}/`. */
function getDocumentBase() {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
        return '/';
    }
    const baseEl = document.querySelector('base[href]');
    if (baseEl?.href)
        return baseEl.href;
    return `${window.location.origin}/`;
}
/** Normalise a path into a directory URL ending with `/`. */
function normaliseDirPath(raw) {
    const withSlash = raw.endsWith('/') ? raw : `${raw}/`;
    if (typeof document === 'undefined' || typeof window === 'undefined') {
        return withSlash;
    }
    try {
        return new URL(withSlash, getDocumentBase()).href;
    }
    catch {
        return withSlash;
    }
}

export { normaliseDirPath as n };
