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
          <img class="logo-shield" src="logo.png" alt="Difesa Consumatore" width="48" height="48" />
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
            <div class="footer-brand-row">
              <img src="logo.png" alt="" width="40" height="40" />
              <div class="footer-brand-text">
                <div class="logo-top">DIFESA</div>
                <div class="logo-bottom">CONSUMATORE</div>
              </div>
            </div>
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
              <li><a href="mailto:difesaconsumatorepisa@gmail.com">difesaconsumatorepisa@gmail.com</a></li>
              <li><a href="dove-siamo.html">Via Novecchio 10, Pisa</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-copy">
            © 2024 Difesa Consumatore S.r.l.s. · Via Novecchio 10, Pisa · P.IVA 02285180507
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
})();
