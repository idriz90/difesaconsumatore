// nav.js — inietta navbar e footer in tutte le pagine
(function() {
  // Normalizza un percorso per il confronto: toglie "index.html" e la barra finale.
  // Es: "/servizi/" -> "/servizi", "/" -> "/", "/dove-siamo/index.html" -> "/dove-siamo"
  function normPath(p) {
    return p.replace(/index\.html$/, '').replace(/\/+$/, '') || '/';
  }
  const currentPath = normPath(window.location.pathname);

  const SUBSTACK_URL = 'https://difesaconsumatore.substack.com';
  const WHATSAPP_URL = 'https://wa.me/393296491028';

  // Link interni del sito (percorsi ASSOLUTI dalla radice: funzionano da ogni pagina)
  const links = [
    { href: '/',            label: 'HOME' },
    { href: '/servizi/',    label: 'Servizi Offerti' },
    { href: '/difesa-impresa/', label: 'Difesa Impresa' },
    { href: '/dove-siamo/', label: 'Dove Siamo' },
  ];
  // Footer mostra anche il Blog (Substack)
  const footerLinks = links.concat([{ href: SUBSTACK_URL, label: 'Blog', external: true }]);

  const navHTML = `
    <nav id="main-nav">
      <div class="nav-inner">
        <a href="/" class="nav-logo">
          <img class="logo-shield" src="/logo.png" alt="Difesa Consumatore" width="48" height="48" />
          <div class="logo-text-wrap">
            <span class="logo-top">DIFESA</span>
            <span class="logo-bottom">CONSUMATORE</span>
          </div>
        </a>
        <button class="nav-hamburger" id="navHamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="navLinks">
          ${links.map(l => `<li><a href="${l.href}" class="${normPath(l.href) === currentPath ? 'active' : ''}">${l.label}</a></li>`).join('')}
          <li><a href="${SUBSTACK_URL}" target="_blank" rel="noopener" class="nav-cta">Blog &amp; Newsletter</a></li>
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
              <img src="/logo.png" alt="" width="40" height="40" />
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
              ${footerLinks.map(l => l.external
                ? `<li><a href="${l.href}" target="_blank" rel="noopener">${l.label}</a></li>`
                : `<li><a href="${l.href}">${l.label}</a></li>`
              ).join('')}
            </ul>
          </div>
          <div class="footer-col">
            <h4>Servizi</h4>
            <ul>
              <li><a href="/servizi/#cqs">Cessione del Quinto</a></li>
              <li><a href="/servizi/#sovraindebitamento">Sovraindebitamento</a></li>
              <li><a href="/servizi/#crif">Segnalazioni CRIF</a></li>
              <li><a href="/servizi/#saldo">Saldo e Stralcio</a></li>
              <li><a href="/servizi/#volo">Rimborso al Volo</a></li>
              <li><a href="/difesa-impresa/">Servizi per imprese</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contatti</h4>
            <ul>
              <li><a href="tel:+393296491028">+39 329 649 1028</a></li>
              <li><a href="mailto:difesaconsumatorepisa@gmail.com">difesaconsumatorepisa@gmail.com</a></li>
              <li><a href="/dove-siamo/">Via Novecchio 10, Pisa</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-copy">
            © 2018-2026 DC S.r.l. · Via Novecchio 10, Pisa · P.IVA 02285180507
            <span style="margin: 0 8px; opacity: 0.4;">·</span>
            <a href="/privacy/" style="color: inherit; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.3);">Privacy &amp; Cookie</a>
            <button type="button" class="dc-consent-manage" data-dc-consent-open style="margin-left: 12px;">Gestisci cookie</button>
            <span style="margin-left: 12px;">Powered by IS</span>
          </div>
          <div class="footer-social">
            <a href="https://www.facebook.com/difesaconsumatoresrls/" class="social-link" target="_blank" rel="noopener" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://wa.me/393296491028" class="social-link" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.695.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
            </a>
            <a href="https://www.instagram.com/difesaconsumatore/" class="social-link" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    <a href="#" class="back-top" id="backTop" aria-label="Torna in cima">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
    </a>
    <div class="fab-stack">
      <a href="tel:+393296491028" class="fab fab-call" aria-label="Chiamaci ora">
        <span class="fab-tooltip">Chiamaci ora</span>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
      <a href="https://www.google.com/maps/dir/?api=1&destination=Via%20Novecchio%2010%2C%2056121%20Pisa" class="fab fab-nav" target="_blank" rel="noopener" aria-label="Come raggiungerci">
        <span class="fab-tooltip">Come raggiungerci</span>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
      </a>
      <a href="${WHATSAPP_URL}" class="fab fab-wa" target="_blank" rel="noopener" aria-label="Scrivici su WhatsApp">
        <span class="fab-tooltip">Scrivici su WhatsApp</span>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.695.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
      </a>
    </div>
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

  // Gestore cookie pronto per servizi futuri: nessuno script facoltativo
  // viene caricato finché la relativa categoria non è stata accettata.
  const consentConfig = window.DC_CONSENT_CONFIG || {
    version: '2026-07-25-1',
    retentionDays: 180,
    services: []
  };
  const consentStorageKey = 'dc_cookie_preferences';
  const optionalServices = Array.isArray(consentConfig.services) ? consentConfig.services : [];
  const hasOptionalServices = optionalServices.length > 0;
  let consentLayer = null;

  function readConsent() {
    try {
      const saved = JSON.parse(localStorage.getItem(consentStorageKey));
      if (!saved || saved.version !== consentConfig.version || Date.now() >= saved.expiresAt) return null;
      return saved;
    } catch (_) {
      return null;
    }
  }

  function saveConsent(categories, mode) {
    const retention = Number(consentConfig.retentionDays) || 180;
    const record = {
      version: consentConfig.version,
      mode,
      categories,
      decidedAt: Date.now(),
      expiresAt: Date.now() + retention * 86400000
    };
    try { localStorage.setItem(consentStorageKey, JSON.stringify(record)); } catch (_) {}
    return record;
  }

  function categoryIds() {
    return [...new Set(optionalServices.map(service => service.category).filter(Boolean))];
  }

  function loadAcceptedServices(record) {
    if (!record || !record.categories) return;
    optionalServices.forEach(service => {
      if (record.categories[service.category] === true && typeof service.load === 'function' && !service.__loaded) {
        service.__loaded = true;
        try { service.load(); } catch (error) { console.error('Servizio cookie non caricato:', service.id, error); }
      }
    });
  }

  function closeConsentLayer() {
    if (consentLayer) {
      consentLayer.remove();
      consentLayer = null;
    }
  }

  function decideAll(allowed) {
    const categories = Object.fromEntries(categoryIds().map(id => [id, allowed]));
    const mustUnload = !allowed && optionalServices.some(service => service.__loaded);
    const record = saveConsent(categories, allowed ? 'accepted' : 'rejected');
    closeConsentLayer();
    if (mustUnload) window.location.reload();
    else if (allowed) loadAcceptedServices(record);
  }

  function renderTechnicalNotice() {
    return `
      <div class="dc-consent-card dc-cookie-notice" role="dialog" aria-modal="true" aria-labelledby="dc-consent-title">
        <button type="button" class="dc-consent-close" data-dc-action="ack" aria-label="Chiudi l'avviso">×</button>
        <div class="dc-consent-copy">
          <h2 id="dc-consent-title">Cookie tecnici</h2>
          <p>Questo sito utilizza esclusivamente strumenti tecnici necessari al funzionamento. Non vengono usati cookie di profilazione o Analytics.</p>
          <a href="/privacy/">Leggi l'informativa Privacy &amp; Cookie</a>
        </div>
        <div class="dc-consent-actions">
          <button type="button" class="dc-consent-primary" data-dc-action="ack">Ho capito</button>
        </div>
      </div>`;
  }

  function renderConsentBanner() {
    const groups = categoryIds().map(category => {
      const services = optionalServices.filter(service => service.category === category);
      const label = services[0]?.categoryLabel || category;
      const description = services.map(service => `${service.name}: ${service.purpose}`).join(' ');
      return `<label class="dc-consent-option">
        <span><strong>${label}</strong><small>${description}</small></span>
        <input type="checkbox" data-dc-category="${category}">
      </label>`;
    }).join('');
    return `
      <div class="dc-consent-card dc-consent-banner" role="dialog" aria-modal="true" aria-labelledby="dc-consent-title">
        <button type="button" class="dc-consent-close" data-dc-action="reject" aria-label="Rifiuta i cookie facoltativi e chiudi">×</button>
        <div class="dc-consent-copy">
          <h2 id="dc-consent-title">La tua privacy, la tua scelta</h2>
          <p>Usiamo strumenti tecnici necessari. Gli strumenti facoltativi restano bloccati finché non esprimi il consenso.</p>
          <a href="/privacy/">Leggi l'informativa Privacy &amp; Cookie</a>
        </div>
        <div class="dc-consent-preferences" data-dc-preferences hidden>${groups}</div>
        <div class="dc-consent-actions">
          <button type="button" class="dc-consent-secondary" data-dc-action="reject">Rifiuta tutti</button>
          <button type="button" class="dc-consent-secondary" data-dc-action="customize">Personalizza</button>
          <button type="button" class="dc-consent-primary" data-dc-action="accept">Accetta tutti</button>
          <button type="button" class="dc-consent-primary" data-dc-action="save" hidden>Salva preferenze</button>
        </div>
      </div>`;
  }

  function openConsentLayer(force = false) {
    closeConsentLayer();
    const saved = readConsent();
    if (!force && saved) return;
    consentLayer = document.createElement('div');
    consentLayer.className = 'dc-consent-layer';
    consentLayer.innerHTML = hasOptionalServices ? renderConsentBanner() : renderTechnicalNotice();
    document.body.appendChild(consentLayer);

    consentLayer.addEventListener('click', event => {
      const button = event.target.closest('[data-dc-action]');
      if (!button) return;
      const action = button.dataset.dcAction;
      if (action === 'ack') {
        saveConsent({}, 'technical-notice');
        closeConsentLayer();
      } else if (action === 'accept') {
        decideAll(true);
      } else if (action === 'reject') {
        decideAll(false);
      } else if (action === 'customize') {
        consentLayer.querySelector('[data-dc-preferences]').hidden = false;
        button.hidden = true;
        consentLayer.querySelector('[data-dc-action="save"]').hidden = false;
      } else if (action === 'save') {
        const categories = {};
        consentLayer.querySelectorAll('[data-dc-category]').forEach(input => {
          categories[input.dataset.dcCategory] = input.checked;
        });
        const mustUnload = optionalServices.some(service =>
          service.__loaded && categories[service.category] !== true
        );
        const record = saveConsent(categories, 'custom');
        closeConsentLayer();
        if (mustUnload) window.location.reload();
        else loadAcceptedServices(record);
      }
    });
  }

  document.querySelectorAll('[data-dc-consent-open]').forEach(button => {
    button.addEventListener('click', () => openConsentLayer(true));
  });

  const savedConsent = readConsent();
  if (savedConsent) loadAcceptedServices(savedConsent);
  else openConsentLayer();

  window.DCConsent = {
    open: () => openConsentLayer(true),
    hasConsent: category => readConsent()?.categories?.[category] === true
  };

})();
