import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

const base = process.env.STORYBOOK_BASE_PATH ?? '';

// Lib design tokens (mirror of `src/assets/style/foundations/_colors.scss`
// and the v1.0 swatch sheet).
const TOKEN = {
  // Purple ramp
  purple100: '#e9ccff',
  purple200: '#d399ff',
  purple500: '#4f008c',

  // Greys
  black:     '#1d252d',
  darkGrey:  '#89979f',
  grey:      '#e6e9eb',
  lightGrey: '#f7f8f9',
  offWhite:  '#fbfbfc',
  white:     '#ffffff',

  // Status
  error:   '#cf2544',
  success: '#00c48c',
};

const theme = create({
  base: 'light',

  // Brand — full stylised `stc` wordmark in primary purple `#4f008c`,
  // served from `doc/public/stc-logo.svg` (Storybook's `public` static dir).
  brandTitle: 'STC Design System',
  // Brand link must honour the deploy sub-path so clicking the wordmark on
  // gh-pages (e.g. `/<repo>/pr-7/`) lands on this Storybook's index, not the
  // org root. `${base}/` reduces to `/` in dev when the env var is empty.
  brandUrl: `${base}/`,
  brandImage: `${base}/stc-logo.svg`,
  brandTarget: '_self',

  // Surfaces — the canvas/app chrome stays sharp (radius 0); the sidebar
  // overrides this with rounded rows in `manager-head.html` to match the
  // current spec sheet.
  colorPrimary:    TOKEN.purple500,
  colorSecondary:  TOKEN.purple500,
  appBg:           TOKEN.offWhite,
  appContentBg:    TOKEN.white,
  appPreviewBg:    TOKEN.white,
  appBorderColor:  TOKEN.grey,
  appBorderRadius: 0,

  // Text
  textColor:        TOKEN.black,
  textInverseColor: TOKEN.white,
  textMutedColor:   TOKEN.darkGrey,

  // Toolbar
  barTextColor:     TOKEN.darkGrey,
  barHoverColor:    TOKEN.purple500,
  barSelectedColor: TOKEN.purple500,
  barBg:            TOKEN.white,

  // Inputs — sharp
  inputBg:           TOKEN.white,
  inputBorder:       TOKEN.grey,
  inputTextColor:    TOKEN.black,
  inputBorderRadius: 0,

  // Typography
  fontBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  fontCode:
    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
});

addons.setConfig({
  theme,

  // Sidebar — render section folders cleanly without root labels.
  sidebar: {
    showRoots: false,
  },

  // Toolbar trims — hide noise that doesn't apply to this DS catalogue.
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: true },
    copy: { hidden: false },
    fullscreen: { hidden: false },
    'storybook/background': { hidden: false },
    'storybook/viewport': { hidden: false },
    'storybook/measure': { hidden: true },
    'storybook/outline': { hidden: true },
  },

  // Keep the UI quiet.
  enableShortcuts: false,
  showToolbar: true,
  initialActive: 'sidebar',
});

// ─── Sidebar icon masks (base-path aware) ─────────────────────────────────
// `STORYBOOK_BASE_PATH` is empty in dev and `/<repo>` (or `/<repo>/pr-N` for
// PR previews) in prod. We need asset URLs in the mask CSS to honour that
// prefix, so we inject the rules here at runtime instead of in
// `manager-head.html` where the value can't be interpolated.

type IconMap = Readonly<Record<string, string>>;

const COMPONENT_ICONS: IconMap = {
  'components-alert':            'icon-warning-2',
  'components-avatar':           'icon-user-o',
  'components-avatar-group':     'icon-users-o',
  'components-breadcrumb':       'icon-chevron-right',
  'components-button':           'icon-tag-o',
  'components-card':             'icon-card-1',
  'components-file-uploader':    'icon-upload-to-cloud',
  'components-file-upload-item': 'icon-file-o',
  'components-flag':             'icon-flag-o',
  'components-icon':             'icon-tag-o',
  'components-logo':             'icon-stc-logo',
  'components-message':          'icon-chat-o',
  'components-sla':              'icon-chart-o',
  'components-status':           'icon-check-circle-o',
  'components-user-card':        'icon-user-o',
};

const GROUP_ICONS: IconMap = {
  foundations: 'icon-home-o',
  utilities:   'icon-info-o',
};

const buildMaskRule = (itemId: string, iconId: string): string => {
  const url = `url("${base}/assets/icon/${iconId}.svg")`;
  return (
    `[data-item-id="${itemId}"] > svg:first-of-type,` +
    `[data-item-id="${itemId}"] > a > svg:first-of-type{` +
    `-webkit-mask-image:${url} !important;` +
    `mask-image:${url} !important;}`
  );
};

if (typeof document !== 'undefined') {
  const css =
    Object.entries(COMPONENT_ICONS).map(([id, icon]) => buildMaskRule(id, icon)).join('\n') +
    '\n' +
    Object.entries(GROUP_ICONS).map(([id, icon]) => buildMaskRule(id, icon)).join('\n');

  const styleId = 'stc-storybook-sidebar-icons';
  const existing = document.getElementById(styleId);
  if (existing) existing.remove();

  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = css;
  document.head.appendChild(style);
}
