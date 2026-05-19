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
          <li><a href="https://difesaconsumatore.substack.com" target="_blank" rel="noopener" class="nav-cta">Newsletter</a></li>
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
              <li><a href="https://difesaconsumatore.substack.com" target="_blank" rel="noopener">Newsletter Substack</a></li>
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
            © 2024 DC S.r.l.· Via Novecchio 10, Pisa · P.IVA 02285180507
            <span style="margin: 0 8px; opacity: 0.4;">·</span>
            <a href="privacy.html" style="color: inherit; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.3);">Privacy &amp; Cookie</a>
          </div>
          <div class="footer-social">
            <a href="https://www.facebook.com/difesaconsumatoresrls/" class="social-link" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://wa.me/393296491028" class="social-link" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.695.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
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

  // ── COOKIE BANNER ──
  function showCookieBanner() {
    if (localStorage.getItem('cookieConsent')) return;
    if (document.getElementById('cookie-banner')) return; // già presente

    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Banner cookie');
    banner.innerHTML = `
      <div class="cb-inner">
        <div class="cb-text">
          <strong>Rispettiamo la tua privacy.</strong>
          Usiamo solo cookie tecnici per il funzionamento del sito. Cliccando "Accetta" autorizzi eventuali cookie analitici anonimi.
          <a href="privacy.html">Leggi l'informativa completa →</a>
        </div>
        <div class="cb-actions">
          <button type="button" class="cb-btn cb-reject" id="cb-reject">Rifiuta</button>
          <button type="button" class="cb-btn cb-accept" id="cb-accept">Accetta</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);

    function setConsent(value) {
      try { localStorage.setItem('cookieConsent', value); } catch (e) {}
      // Stop watcher prima di rimuovere
      if (window.__cbObserver) {
        try { window.__cbObserver.disconnect(); } catch (e) {}
        window.__cbObserver = null;
      }
      banner.classList.add('cb-hidden');
      setTimeout(() => banner.remove(), 300);
    }

    document.getElementById('cb-accept').addEventListener('click', () => setConsent('accepted'));
    document.getElementById('cb-reject').addEventListener('click', () => setConsent('rejected'));

    requestAnimationFrame(() => banner.classList.add('cb-visible'));
  }

  showCookieBanner();

  // Protezione: se qualcosa rimuove il banner senza che l'utente abbia scelto,
  // il banner viene ri-creato. Si ferma da solo quando l'utente accetta/rifiuta.
  if (!localStorage.getItem('cookieConsent') && 'MutationObserver' in window) {
    window.__cbObserver = new MutationObserver(() => {
      if (localStorage.getItem('cookieConsent')) {
        window.__cbObserver.disconnect();
        window.__cbObserver = null;
        return;
      }
      if (!document.getElementById('cookie-banner')) {
        showCookieBanner();
      }
    });
    window.__cbObserver.observe(document.body, { childList: true });
  }
})();
