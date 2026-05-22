/**
 * nav.js — Shared vertical navigation for all pages
 * Uses Engagement Layer icon assets and expandable hover behavior.
 */
(function() {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
    <nav class="vertical-nav">
      <!-- Logo -->
      <div class="nav-logo">
        <img src="assets/SAP_Logo.svg" alt="SAP" style="height:28px;width:auto"
             onerror="this.style.opacity='0'">
      </div>

      <!-- Nav Items -->
      <div class="nav-center">
        <div class="nav-items">
          <!-- Discover -->
          <a href="discover.html" class="nav-item" data-pages="discover" title="Discover">
            <div class="nav-icon-wrapper">
              <img src="assets/nav-discover.svg" width="20" height="20" alt=""
                   onerror="this.style.display='none';this.parentElement.innerHTML='<svg width=20 height=20 viewBox=&quot;0 0 20 20&quot; fill=&quot;none&quot;><path d=&quot;M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.5&quot; fill=&quot;none&quot;/><circle cx=&quot;10&quot; cy=&quot;8&quot; r=&quot;2&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.3&quot; fill=&quot;none&quot;/></svg>'">
            </div>
            <span class="nav-label">Discover</span>
            <div class="nav-accessories">
              <span class="nav-counter" id="nav-counter-discover">3</span>
            </div>
          </a>

          <!-- Conversations -->
          <a href="conversations.html" class="nav-item" data-pages="conversations,index" title="Conversations">
            <div class="nav-icon-wrapper">
              <img src="assets/nav-conversations.svg" width="20" height="20" alt=""
                   onerror="this.style.display='none';this.parentElement.innerHTML='<svg width=20 height=20 viewBox=&quot;0 0 20 20&quot; fill=&quot;none&quot;><path d=&quot;M3 4h14a1 1 0 011 1v8a1 1 0 01-1 1H6.5L3 17V5a1 1 0 010-1z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.5&quot; fill=&quot;none&quot;/></svg>'">
            </div>
            <span class="nav-label">Conversations</span>
            <div class="nav-accessories">
              <span class="nav-counter" id="nav-counter-conversations">8</span>
              <button class="nav-action-btn" onclick="event.preventDefault();window.location.href='index.html'" title="New">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M5.5 1v9M1 5.5h9" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </a>

          <!-- Spaces -->
          <a href="spaces.html" class="nav-item" data-pages="spaces,dispute,customer" title="Spaces" style="position:relative">
            <div class="notification-dot"></div>
            <div class="nav-icon-wrapper">
              <img src="assets/nav-spaces.svg" width="20" height="20" alt=""
                   onerror="this.style.display='none';this.parentElement.innerHTML='<svg width=20 height=20 viewBox=&quot;0 0 20 20&quot; fill=&quot;none&quot;><rect x=&quot;3&quot; y=&quot;3&quot; width=&quot;6&quot; height=&quot;6&quot; rx=&quot;1&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.5&quot; fill=&quot;none&quot;/><rect x=&quot;11&quot; y=&quot;3&quot; width=&quot;6&quot; height=&quot;6&quot; rx=&quot;1&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.5&quot; fill=&quot;none&quot;/><rect x=&quot;3&quot; y=&quot;11&quot; width=&quot;6&quot; height=&quot;6&quot; rx=&quot;1&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.5&quot; fill=&quot;none&quot;/><rect x=&quot;11&quot; y=&quot;11&quot; width=&quot;6&quot; height=&quot;6&quot; rx=&quot;1&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.5&quot; fill=&quot;none&quot;/></svg>'">
            </div>
            <span class="nav-label">Spaces</span>
            <div class="nav-accessories">
              <span class="nav-counter" id="nav-counter-spaces">4</span>
              <button class="nav-action-btn" onclick="event.preventDefault();window.location.href='spaces.html'" title="New Space">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M5.5 1v9M1 5.5h9" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </a>

          <!-- Jobs -->
          <a href="jobs.html" class="nav-item" data-pages="jobs" title="Jobs">
            <div class="nav-icon-wrapper">
              <img src="assets/nav-agent-hub.svg" width="20" height="20" alt=""
                   onerror="this.style.display='none';this.parentElement.innerHTML='<svg width=20 height=20 viewBox=&quot;0 0 20 20&quot; fill=&quot;none&quot;><circle cx=&quot;7&quot; cy=&quot;6&quot; r=&quot;2.5&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.4&quot; fill=&quot;none&quot;/><path d=&quot;M2 17c0-3 2-5 5-5s5 2 5 5&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.4&quot; stroke-linecap=&quot;round&quot; fill=&quot;none&quot;/><circle cx=&quot;14&quot; cy=&quot;6&quot; r=&quot;2&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.3&quot; fill=&quot;none&quot;/><path d=&quot;M14 11c1.5 0 4 1 4 4&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.3&quot; stroke-linecap=&quot;round&quot; fill=&quot;none&quot;/></svg>'">
            </div>
            <span class="nav-label">Jobs</span>
            <div class="nav-accessories">
              <span class="nav-counter nav-counter-attention" id="nav-counter-jobs">1</span>
            </div>
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div class="nav-footer">
        <div class="nav-footer-items">
          <!-- Bell notification -->
          <button class="nav-footer-btn" title="Notifications" style="position:relative">
            <img src="assets/bell.svg" width="20" height="20" alt=""
                 onerror="this.style.display='none';this.parentElement.innerHTML+='<svg width=18 height=18 viewBox=&quot;0 0 18 18&quot; fill=&quot;none&quot;><path d=&quot;M9 2a5 5 0 00-5 5v3L2.5 13h13L14 10V7a5 5 0 00-5-5z&quot; stroke=&quot;#131E29&quot; stroke-width=&quot;1.4&quot; fill=&quot;none&quot;/><path d=&quot;M7.5 15a1.5 1.5 0 003 0&quot; stroke=&quot;#131E29&quot; stroke-width=&quot;1.4&quot; stroke-linecap=&quot;round&quot;/></svg>'">
          </button>
          <!-- Avatar -->
          <div class="nav-footer-btn" style="cursor:default">
            <div class="nav-avatar">
              <img src="assets/customer-avatar.svg" alt="GG"
                   onerror="this.style.display='none';this.parentElement.style.background='#5d36ff';this.parentElement.style.color='white';this.parentElement.style.fontSize='10px';this.parentElement.style.fontWeight='700';this.parentElement.style.display='flex';this.parentElement.style.alignItems='center';this.parentElement.style.justifyContent='center';this.parentElement.innerHTML='GG'">
            </div>
          </div>
          <!-- Expand -->
          <button class="nav-footer-btn" title="Expand">
            <img src="assets/Expand.svg" width="16" height="16" alt=""
                 onerror="this.style.display='none';this.parentElement.innerHTML+='<svg width=16 height=14 viewBox=&quot;0 0 16 14&quot; fill=&quot;none&quot;><path d=&quot;M4 2l-3 5 3 5M12 2l3 5-3 5&quot; stroke=&quot;#131E29&quot; stroke-width=&quot;1.4&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/></svg>'">
          </button>
        </div>
      </div>
    </nav>
  `;

  // Insert nav
  const container = document.querySelector('.page-container');
  if (container) {
    container.insertAdjacentHTML('afterbegin', navHTML);
  }

  // Apply active states
  setTimeout(() => {
    document.querySelectorAll('.nav-item[data-pages]').forEach(item => {
      const pages = item.getAttribute('data-pages').split(',');
      const active = pages.some(p => page.startsWith(p.trim()));
      if (active) {
        item.classList.add('active');
        item.querySelectorAll('.nav-icon-wrapper img').forEach(img => {
          img.style.filter = 'brightness(0) saturate(100%) invert(27%) sepia(99%) saturate(3089%) hue-rotate(214deg) brightness(97%) contrast(101%)';
        });
      }
    });

    if (page === 'index.html' || page === '') {
      const convItem = document.querySelector('[data-pages*="conversations"]');
      if (convItem) {
        convItem.classList.add('active');
        convItem.querySelectorAll('.nav-icon-wrapper img').forEach(img => {
          img.style.filter = 'brightness(0) saturate(100%) invert(27%) sepia(99%) saturate(3089%) hue-rotate(214deg) brightness(97%) contrast(101%)';
        });
      }
    }
  }, 0);
})();
