// =============================================================================
// ds-nav.js — Injects shared sidebar nav HTML into every doc page.
// Include BEFORE ds-shell.js.  Call: DsNav.inject()
// Version string is the single source of truth for the whole doc site.
// =============================================================================
var DsNav = (function () {
    var VERSION = 'v0.1.0';
  
    var NAV_HTML = /* html */`
  <a href="index.html" class="ds-sidebar__logo" aria-label="STC Design System home">
    <span class="ds-brand__stc ds-brand__stc--lg" aria-hidden="true">stc</span>
    <div class="ds-sidebar__logo-divider" aria-hidden="true"></div>
    <span class="ds-sidebar__logo-label">Design System</span>
  </a>
  <nav class="ds-sidebar__nav" aria-label="Documentation sections">
    <div class="ds-nav-group">
      <div class="ds-nav-section-title" aria-hidden="true">
        <span class="ds-diamond"></span>Foundations
      </div>
      <a class="ds-nav-item" href="colors.html"     data-nav="colors">Colors</a>
      <a class="ds-nav-item" href="spacing.html"    data-nav="spacing">Spacing</a>
      <a class="ds-nav-item" href="typography.html" data-nav="typography">Typography</a>
      <a class="ds-nav-item" href="icons.html"      data-nav="icons">Icons &amp; Logos</a>
      <a class="ds-nav-item" href="shadows.html"    data-nav="shadows">Shadows &amp; Blurs</a>
      <a class="ds-nav-item" href="radius.html"     data-nav="radius">Border Radius</a>
      <a class="ds-nav-item" href="grid.html"       data-nav="grid">Grid</a>
    </div>
    <div class="ds-nav-divider" role="separator"></div>
    <div class="ds-nav-group">
      <div class="ds-nav-section-title" aria-hidden="true">
        <span class="ds-diamond"></span>Components
      </div>
      <a class="ds-nav-item" href="#" data-nav="">Buttons</a>
      <a class="ds-nav-item" href="#" data-nav="">Status</a>
      <a class="ds-nav-item" href="#" data-nav="">Tags</a>
      <a class="ds-nav-item" href="#" data-nav="">Tabs</a>
      <a class="ds-nav-item" href="#" data-nav="">Input Fields</a>
      <a class="ds-nav-item" href="#" data-nav="">Toggles</a>
      <a class="ds-nav-item" href="#" data-nav="">Checkbox</a>
      <a class="ds-nav-item" href="#" data-nav="">Calendar <span class="ds-nav-badge">New</span></a>
      <a class="ds-nav-item" href="#" data-nav="">Radio Button</a>
      <a class="ds-nav-item" href="#" data-nav="">Pagination</a>
      <a class="ds-nav-item" href="#" data-nav="">Tooltips</a>
      <a class="ds-nav-item" href="#" data-nav="">Progress Bar</a>
      <a class="ds-nav-item" href="#" data-nav="">Dropdowns</a>
      <a class="ds-nav-item" href="#" data-nav="">Breadcrumbs</a>
    </div>
    <div class="ds-nav-divider" role="separator"></div>
    <div class="ds-nav-group">
      <div class="ds-nav-section-title" aria-hidden="true">
        <span class="ds-diamond"></span>Examples
      </div>
      <a class="ds-nav-item" href="dashboard.html" data-nav="dashboard">Dashboard</a>
      <a class="ds-nav-item" href="#" data-nav="">Table</a>
      <a class="ds-nav-item" href="#" data-nav="">Alerts</a>
      <a class="ds-nav-item" href="#" data-nav="">Toaster Notifications</a>
      <a class="ds-nav-item" href="#" data-nav="">Stepper</a>
      <a class="ds-nav-item" href="#" data-nav="">File Uploader</a>
      <a class="ds-nav-item" href="#" data-nav="">Modals</a>
      <a class="ds-nav-item" href="#" data-nav="">Charts</a>
    </div>
  </nav>`;
  
    var BRAND_HTML = /* html */`
  <div class="ds-brand" role="img" aria-label="STC Design System ${VERSION}">
    <span class="ds-brand__stc" aria-hidden="true">stc</span>
    <div class="ds-brand__divider" aria-hidden="true"></div>
    <span class="ds-brand__label">Design System</span>
    <span class="ds-brand__version">${VERSION}</span>
  </div>`;
  
    function inject() {
      // Sidebar
      var sidebar = document.getElementById('ds-sidebar');
      if (sidebar) sidebar.innerHTML = NAV_HTML;
  
      // Header right brand
      var brandSlots = document.querySelectorAll('.ds-header__brand-slot');
      brandSlots.forEach(function (el) { el.innerHTML = BRAND_HTML; });
    }
  
    return { inject: inject, VERSION: VERSION };
  }());
  
  // Auto-inject when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', DsNav.inject);
  } else {
    DsNav.inject();
  }