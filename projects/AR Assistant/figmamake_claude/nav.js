/**
 * nav.js — Shared vertical navigation for all pages
 * Detects current page and highlights the correct nav item.
 */
(function() {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(pages) {
    return pages.some(p => page.startsWith(p));
  }

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
          <a href="discover.html" class="nav-item" data-pages="discover" title="Discover">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="7" stroke="#131E29" stroke-width="1.5" fill="none"/>
              <path d="M13 7L10.5 11.5L6.5 13L9 8.5L13 7Z" fill="#131E29"/>
            </svg>
          </a>

          <a href="conversations.html" class="nav-item" data-pages="conversations,index" title="Conversations">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4h12a1 1 0 011 1v7a1 1 0 01-1 1H7l-4 3V5a1 1 0 011-1z" stroke="#131E29" stroke-width="1.5" fill="none"/>
              <path d="M7.5 7.5h5M7.5 10h3" stroke="#131E29" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
          </a>

          <a href="spaces.html" class="nav-item" data-pages="spaces,dispute,customer" title="Spaces" style="position:relative">
            <div class="notification-dot"></div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="3" width="6" height="6" rx="1" stroke="#131E29" stroke-width="1.5" fill="none"/>
              <rect x="11" y="3" width="6" height="6" rx="1" stroke="#131E29" stroke-width="1.5" fill="none"/>
              <rect x="3" y="11" width="6" height="6" rx="1" stroke="#131E29" stroke-width="1.5" fill="none"/>
              <path d="M11 14h6M14 11v6" stroke="#131E29" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </a>

          <a href="jobs.html" class="nav-item" data-pages="jobs" title="Jobs">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="7" stroke="#131E29" stroke-width="1.5" fill="none"/>
              <circle cx="10" cy="10" r="2.5" stroke="#131E29" stroke-width="1.3" fill="none"/>
              <path d="M10 3v2M10 15v2M3 10h2M15 10h2" stroke="#131E29" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div class="nav-footer">
        <div class="nav-footer-items">
          <button class="nav-footer-btn" title="Notifications">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2a5 5 0 00-5 5v3l-1.5 2.5h13L14 10V7a5 5 0 00-5-5z" stroke="#131E29" stroke-width="1.5" fill="none"/>
              <path d="M7.5 15.5a1.5 1.5 0 003 0" stroke="#131E29" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
          <div class="nav-footer-btn" style="cursor:default">
            <div class="nav-avatar">
              <img src="assets/space-avatar.png" alt="GG"
                   onerror="this.style.display='none';this.parentElement.style.background='#5d36ff';this.parentElement.style.color='white';this.parentElement.style.fontSize='10px';this.parentElement.style.fontWeight='700';this.parentElement.style.display='flex';this.parentElement.style.alignItems='center';this.parentElement.style.justifyContent='center';this.parentElement.innerHTML='GG'">
            </div>
          </div>
          <button class="nav-footer-btn" title="Expand">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="1" y="1" width="5" height="10" rx="1" stroke="#131E29" stroke-width="1.3" fill="none"/>
              <rect x="10" y="1" width="5" height="10" rx="1" stroke="#131E29" stroke-width="1.3" fill="none"/>
            </svg>
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

  // Apply active states based on current page
  setTimeout(() => {
    document.querySelectorAll('.nav-item[data-pages]').forEach(item => {
      const pages = item.getAttribute('data-pages').split(',');
      const active = pages.some(p => page.startsWith(p.trim()));
      if (active) {
        item.classList.add('active');
        // Update SVG stroke/fill to blue
        item.querySelectorAll('path, circle, rect').forEach(el => {
          if (el.getAttribute('stroke')) el.setAttribute('stroke', '#0070F2');
          if (el.getAttribute('fill') && el.getAttribute('fill') !== 'none') {
            el.setAttribute('fill', '#0070F2');
          }
        });
      }
    });

    // Also mark index.html → conversations active
    if (page === 'index.html' || page === '') {
      const convItem = document.querySelector('[data-pages*="conversations"]');
      if (convItem) {
        convItem.classList.add('active');
        convItem.querySelectorAll('path, circle, rect').forEach(el => {
          if (el.getAttribute('stroke')) el.setAttribute('stroke', '#0070F2');
        });
      }
    }
  }, 0);
})();
