// nav.js — inietta navbar e footer in tutte le pagine
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html',      label: 'HOME' },
    { href: 'servizi.html',    label: 'Servizi Offerti' },
    { href: 'chi-siamo.html',  label: 'Chi Siamo' },
    { href: 'dove-siamo.html', label: 'Dove Siamo' },
    { href: 'blog.html',       label: 'Blog' },
  ];

  const navHTML = `
    <nav id="main-nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <svg class="logo-shield" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 2L4 8v14c0 10 7 18.5 15 21 8-2.5 15-11 15-21V8L19 2z" fill="#1a3a6b" stroke="#1a3a6b" stroke-width="1"/>
            <path d="M19 6L7 11v11c0 8 5.5 14.5 12 17 6.5-2.5 12-9 12-17V11L19 6z" fill="white" opacity="0.15"/>
            <path d="M13 22l4 4 8-8" stroke="#f5c842" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
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
          <li><a href="dove-siamo.html#prenota" class="nav-cta ${currentPage === 'dove-siamo.html' ? 'active' : ''}">Prenota</a></li>
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
              <li><a href="dove-siamo.html#prenota">Prenota Appuntamento</a></li>
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
            © 2025 Difesa Consumatore S.r.l.s. · Via Novecchio 10, Pisa · P.IVA 02285180507
          </div>
          <div class="footer-social">
            <a href="https://www.facebook.com/difesaconsumatoresrls/" class="social-link" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://wa.me/393296491028" class="social-link" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            </a>
            <a href="https://www.instagram.com/difesaconsumatore/" class="social-link" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    <a href="https://wa.me/393296491028" class="wa-float" target="_blank" rel="noopener" aria-label="Scrivici su WhatsApp">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      <span>Scrivici su WhatsApp</span>
    </a>
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
