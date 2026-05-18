// nav.js — inietta navbar e footer in tutte le pagine
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html',      label: 'HOME' },
    { href: 'servizi.html',    label: 'Servizi Offerti' },
    { href: 'dove-siamo.html', label: 'Dove Siamo' },
    { href: 'blog.html',       label: 'Blog' },
  ];

  const navHTML = `
    <nav id="main-nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <img src="data:image/png;base64,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" alt="Difesa Consumatore" class="logo-img" />
          <div class="logo-text-wrap">
            <span class="logo-top">DIFESA</span>
            <span class="logo-bottom">CONSUMATORE</span>
          </div>
        </a>
        <button class="nav-hamburger" id="navHamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="navLinks">
          ${links.map(l => `<li><a href="${l.href}" class="${currentPage === l.href ? 'active' : ''}">${l.label}</a></li>`).join('')}
          <li><a href="dove-siamo.html#contatti" class="nav-cta ${currentPage === 'dove-siamo.html' ? 'active' : ''}">Contattaci</a></li>
        </ul>
      </div>
    </nav>
  `;

  const footerHTML = `
    <footer>
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="logo-text">DIFESA</div>
            <div class="logo-sub">CONSUMATORE</div>
            <p>Studio specializzato nella tutela del consumatore nei confronti di banche, finanziarie e compagnie aeree. Operiamo da Pisa con esperienza e professionalità.</p>
          </div>
          <div class="footer-col">
            <h4>Link rapidi</h4>
            <ul>
              ${links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
              <li><a href="dove-siamo.html#contatti">Contattaci</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Servizi</h4>
            <ul>
              <li><a href="servizi.html#cqs">Cessione del Quinto</a></li>
              <li><a href="servizi.html#sovraindebitamento">Sovraindebitamento</a></li>
              <li><a href="servizi.html#crif">Segnalazioni CRIF</a></li>
              <li><a href="servizi.html#saldo">Saldo e Stralcio</a></li>
              <li><a href="servizi.html#volo">Rimborso al Volo</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contatti</h4>
            <ul>
              <li><a href="tel:+393296491028">+39 329 649 1028</a></li>
              <li><a href="mailto:info@difesaconsumatore.org">info@difesaconsumatore.org</a></li>
              <li><a href="dove-siamo.html">Via Novecchio 10, Pisa</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-copy">
            © 2024 DC S.r.l. · Via Novecchio 10, Pisa · P.IVA 02285180507
          </div>
          <div class="footer-social">
            <a href="https://www.facebook.com/difesaconsumatoresrls/" class="social-link" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="tel:+393296491028" class="social-link" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            </a>
            <a href="https://www.instagram.com/difesaconsumatore/" class="social-link" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    <a href="#" class="back-top" id="backTop" aria-label="Torna in cima">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
    </a>
  `;

  // Inject nav before body content
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  // Inject footer at end of body
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Hamburger menu toggle
  document.getElementById('navHamburger').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('open');
    this.classList.toggle('active');
  });

  // Back to top
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 400);
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 68;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Favicon
  (function(){
    var l=document.querySelector("link[rel~='icon']")||document.createElement('link');
    l.type='image/png'; l.rel='icon';
    l.href='data:image/png;base64,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';
    document.head.appendChild(l);
  })();
})();
