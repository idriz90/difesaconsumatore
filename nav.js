// nav.js — navbar, footer, GA4, cookie banner, WhatsApp button
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html',      label: 'HOME' },
    { href: 'servizi.html',    label: 'Servizi Offerti' },
    { href: 'dove-siamo.html', label: 'Dove Siamo' },
    { href: 'blog.html',       label: 'Blog' },
  ];

  // ── NAVBAR ──
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

  // ── FOOTER ──
  const footerHTML = `
    <footer>
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAABQCAYAAACahGxMAAAWEUlEQVR42u16aXRc1ZXut885996aVJpla7I1eZ6wTYAGgywgQBvCCw0yIaQ7Ibykk3RYgQydTkjaVhaBDL3yXtJp0nm8sMIiSROLPFZDSMxgx2KIzeCH8SCQbdmSJas0lEqqueree87uHxIJpAFbxt2/ctaqVeuuqnvud/f47X028Of15/XOa8uWLaKzs1MC7QqABEAABACJ9nYFZvrvR9XZKWdBzKChme83FuEt13IuW9N7kVRXVxcIMADAQKNdveh9VZVV55eXly+NlgRKC8VsMZvPDcZGYnvKwnL7yOG+Ec3/DeAAQEkBp2b5+5esXPp3q5ctuXRJW1PJooZqlIZtpFJp2LaNXGoSR05OYsfv9072DQx9/+Srv7+HiPTsFnzWwW3bts2++wf/2jY5nbrpb2/92NfW1ofhTQ4jNT6ih19/lacmYpT3CEezFmpDkusrAqhuWa72xG28fOjI94+98vzt2hgJQJ81cJ2dnbK7u1u3X3XdBcVC9rnzN1wiOxZafP+3t5qRqbywJKg6bEETwQMh7VsYSPloDRZRKdlUt6zmnnxF8e9u/mDL7bffPsbMRER8lmy/UwJA09pLrv387Xfwj7/6ce+v11XxkkqbleUwhM2wwgwryrBLGcFShhNh4VgsgxEDCF60/qIJZi4HAD6FB6szAZnP5diTkg/vfZaeOZrE+y9chy+vaUXBJxyfzOLEZAbjU3kUikVIYji2Qll1NU3ktJmeSpS2X/fhpQB2b968WbybaucErnt8nABgXnPzirbqEvrBy4N8/uqVuG/LR4CABVj2jIkXfcD3AV/PXAsGquvwUrza3H7nXRZymZsJ2N3d3f2ukhNzEllPDwDAIWqenkqgf9LDhkXzAQsoZPLoe20YwwOTQNGDKRTBRgOKkC74wPQEFtdF6OhYBmRZTUrJU3rrGanV9930WMYHiTBsCzg2OIFNXY8iUzAo5IrY/u2bcG5zJWAp/FP3Hvxg2x7Mq3TwjbvquawsirFEapiNOaVDqjk6BHd3d5M2etfw2OQXKFImkgUD3zX41kc2wqCI6nAQDdEAoA1Ye7hwQQVqb1wP21aIIovysijc1PRzvmFqb29Hz6w23rNaly9fzgRwVX3d+DP7+tjkPBqZTGLxikaMJ8bx5AkbXqgK8+eXwvMMSBCqQxIvpUuA0hpctK6JNAgiVFKipOSamho+OzbHTF1dXXzRp/+hnEb6H7jvlkvpf364g+OZHNjT+M2+OO67/3EcjDNYSvjGA9sW9k74+P5Pt+PJ/iyML0WVDVORGfn+qg3tH3q4u1vP5ua3XaediDt7e2Vvb6+Zcko6Ptca/VzbsVf0sqZqeUF9FI215VixYik8YeGTm85BmcnAUhJJEUEWYbi6gE9sOhcN9TX00CM7zS0NSj0/nq0ai8Ue4IMH6Z0cQ82VJUgt1dDEGD61OOrH86OiqjpKXjaP1eUO7vtCB5BJQvtAdnIK0yf7cOBoCj//8geA6TGMxMawIAKuFr4mOwopBIzW712t27ZtMwzQLZ1/8/wvjyUH7u3Xzt4pQy8OTDKxhnYcjB44BPgGsjQAPZ3EwIHDuOH8BSgkJqE1wWUL+wZi6odDWr7vovZfaN9DZ2cnna3ETwTwHVu+ufSJnp5/TExMt18YyNU9/PHz2T9nDR3rG8DP9o5jcUs9KgICkZIgjsdz4PgI/mbzRn7qKPjj3/jJxObrrvva/9r6hZ8Q0bvGujNhJQSAA7aFfNGdV73knBcf3FDVeNVV6wy3LZa7Dp5EunQNWpavgesWsO/ZJ9BRm0HzyhX+x77zlJrKFW999MH77581Kf+sU6ZZoqkAuOuv/dAN06/v736goxYXXbKa0baIWIXgZn2kklOorgkCjnbv+9ke+19eShzet2v7Ojr3XJdfftk/FSORZwKup6eHAWh0dsr4ow8fajuvY/gnLx/dMD0YC1RNJVDjEHlDh6Diw8gksubuHz+lHjiYnPj6V7/yVyuXtA1u+eQn0dHRcXao0rtJEIAjAVx50yf+VpTW8PoFjf5ly1v5+gtX8Y3nrzHnn7Pe77jhlqdf3Ne78k33/FfS9E4JdBsCWAjCqo1XLs+miw997MbrV04/+yjTxJCY9BV+cmCMK1tadPzg7pVE1LewvT0w2NNTON2niDNxCEHdGgDL6tYLm9e3/0KQ/bJliVWhBcvo5h/+TFz+hS5kK+bj6muv5K13fEoGahY8eOU1m9cNPfNMAQDhNKU3V8kJSykTWrD0upWLFn/2iss7Ls0V8jhyIobBkXEeGx2h3z35OGqiNr5202bMKwnggltv4y9//ZsEScWxgf5vDh05dNesI5zVGkJIIUzruRff9T+u3XTn6tXn4LkX9/H2J57WuXxWVjc00on+flx/7dUQglDzwuNYtHoRHjxewMDIuFl27gXiRF8vitnkjqULF3z6N4/82xFmCMyWlmeu1i1bBAFGlzatuvjCDXc2LmzV3/jn+/3f7vw9RapqFTGTn57C6jXn4LF//zUu2vAXGF96Hv75vm245YYP4qqOjWJgYJid8mp/Q0fHZePTyR3rNlxcO7u5eG/gunYJAlA5v7zz/PPPxWPbd7JfKKqSSAjG96DdIsLRMhTdIkJlZWiqq0HHxktw61+shj/Sj5WrV2FyfJwiwYDqO3rCveKaaxqHY9OfF0QG6HqP4NCjDUBLWpoulbaFwZEJKomE4XkulJRwohXoPXAQnuujvKoGX//Gd3HsxAksWbMIwaHXsGvH71BaGkVACkyMxxUMuHlB0w2brv5EaNbu6IzAzcYlRmlp8+LmlnOHYzFO57JCCoVsehrZdBK19QsQLinD8SOHYTtBFLTAj/71fphiEec5BkcOvAptGEXXhRFK7H1pLy9oaGjae2j3egK4s7NTnBG4rl0zKg2E6y9esmyps/+1fh10AuRqF4n4GKbio/BcF41NrQARDh/aj1BJKVRlPXbtPYzaxiY052KggIXk5CRqKksxNDRoAiUlqJg/7zoG8E5VmDiNXMUA0Nq64OrSsjL0HRmkUDCATCqBQiGPYjGPRDwG7ftoaVsGYqD31f+PxpZWPJyS+H/Pv4ThSAWitsBoYhqXX7YRgYAjxpJJVFeWX33bbbc57xRSxGnEQc1AuGnhgoviiWkkUxkSxJhOxJkZJhAIIpdJYnzsBAqFDJqXLAMZg+OHDyPSvAKfeK4ffUkPxVwOUBZiY+PwPUOjkymuqK5c3P34k6swo1o5J3CdnZ0zKq1tXrdgQUNtb/8gW5YQuUwK6WSSoLXQWrNQEq6Xx/j4MFLJOBYuXgw2GqOjMQTK58EwIZ3OIxQuQbFQgKUkxRNJXVZRg2ikchMAdHeP05zAvXFD9bz6i6uqKmnw5Ig22sfQsSOoraqYWrFs0eF0Og0iYikkCASlJFy3gHkNDbAsG7roQrs+ouVVECxAIEglkZqeooLWqKiu+AAzS6BHz1GtPWAAYSfQwgDS6QwspbSREk2NDTs+eO1fflooRa7rMTFDCgmlbLBhaM+DEwqDlI3Kqhoox4HPBgDD0x5yU3GRyeRRXl6xZu0F7S0A+E8ZyynAtf+BnedzRRAD2vfYsizEpxJ77vriHS8GHcvjmX2YiGakwwSSCtl0Gsw+QiUl0LOFjNEavudDhSKkNcMOONbxoVj4DBxiphoPBAPJeCIFFhKGDQQJDBw/kbn19r+v9w0sYuY/tLMIEESA0SgtjcIJBmEHghAMCGYQM3zPR7SsnJ2ABSIyf/2hDxfOANyM5PKZTGw0noARAmwMjDForK9rO3FibIlhhhBkpJSwLAXPKyCXy4INQwgJKWdiOIMhlUAilUa4JALD4HA4hFQmc+z6D2wcAEBdXV18+uBmtaqUnBqOjcC2JJQSJKREeVnpknQ+s8r3NTzX53zBRSaVQSIeRyqZhGEDIgKI4HsumA0kEQZOjqJu4QKEbMUwGm42e+Cyyy4tzGKZA7jZXoYPdyw5PYXRoSHR39eHzOgYJianI5lsYfmMEyiSQiJUEkUoUoZoWSUsy0FyOgGv4CKTTsNoD2CN8dEYLGXD1gUeGhpAIKh+bwxj/fr1Ym5xbva7tq4hkZwYRUNFCX3x87eJT33pi7xs6bL1nnGvEsTsOLaorJmPeXWNKK2sQDAShtYawXAJhJBwbBvKsiGVREkkCkmEmppq2X/4KL9/0xU7AaClpcXMlWwSAL75ttuifa8P7f/IjdcvFLE+M5aYFj9/eh9GpyYRCDhsOwEqq6mFpWwYniEZzAypFI4f7gXAaFu6BtrzUFpZgUpO6dEjR0R567JXnuj+6ftmmTHPNX0xAPnQvfemkhOjrwR2/xwfrIrznVfU4Y7r13Ahk2WhLFK2DUsKgBlSKihlwbIcTI7HUMjlkM/lceLYERhjEIuNYKxvPxbaOUIw+KAQZNrb2+VcaTqBGds2bxabu7v1J6+5bPuPu264EsrRZmpKimwaN//fV/DQswdRXT8PoVAEStkQQsItupiYiCGTmsb8+mY4oTBODvaDjYZlWyaKoljW1jr12NPbl0SJ4syMtyuw1bupE0S4EdCf2fKd+Qce+8WaI4/8jlvrysShsTi2dO/BtF0NGIPx2ChANKMXbUAEVMyvheUEYbRGRUUlIuEQ4pPjaFlYj6gSpm1Jy2dKhZhob29XROTPpQXGJCSCiy+szaky89i/PfC9RHxi/pX/J6bXhkimSeCpkSmQKoDtCgipQEIiEgkjGg4jWlYOO1SCg/tehO040NqFUgqBYITr6+aLCikSoWLocWamXbt26dmGzruD45kuEj76uc+VTgzGftXWWLvecaQpFhvLA4KYHFvmtUbYkrgyqOB7Pmw7hOd7B/DKzl8DweUoqW0AMWM8NsJeKglRUUWep2FJC57mGTLgFyiROBkCkH4303oLuI3t7RI9Pf6Ova9tPC//+qUL03m4xBASTMYnBQMpFTQTtNZQWoPsEMZOBtARSWJ//iQShYUIKUZQgubV12FiappZexBOgAQRlFAACUpY4pS9EvWfMymQz6RCbnbaZL2UKQJS+KB8VT1cuwKBwQNQNsA048qaPGTSBJKAJQBJlvG9nKguC+2pq606Prb7xZt83/eJoMAEAgFMQolTs/C3tzkf5AgWJhjlfGA+2YvOgU4nUefHsHxtA3btLYPlJmBnRyBtBwYSAgBpDWEpg6IRYcf6ZTyXHZa2c1PRK3LkjXNrMJghJNEpwb3tH8oqStMDOYEEh8gTATgBB9nmdqw9J4nKMhcGgFEh+Ibw7LhGIp2EtASINUgIqQsZvuiCtTtDwdCAkgSvWJR/jLIMNpps3ycA2Lp1K50euI0bDQBUR0PDCeNgx1BWvB6bQlnHR2GqFiHkD2LVigzGk1nsjWXwyIgFv+CiJcTQhqAEjPF9kr5/fOtXv3pg5cqVJ6UQadd1BZlZTsWAAZO2LTojtY5kmVZHGW0iyxknQon9e1AoXYtQmcTL+x1AlqKRhlFVYlAfVnhhEiA2kEqaYjEv6ktCPUIINsYkftn9qxPG6BUAmBgkAGjDyOXzc2yB9fYSAGQzGfJ8DzUhg4ZAEtmXfo1Gby+G5Hr8ZncjGp1xtEQ8rKoGHMWQswHY9bVIT49j2ZKW3zAzbEsVJfMADIPYMEAAM9gYMmmfzsjmHLBlSTI+AF3IIZQ5jtLdD+OlHTZsvwArPQKXBQrazNJIhiHFuWxO6Gw6cd+//GAnADJaw1ZyzDcGBsxEM7RTG0O2reem1k4A3QCCgQh5SSHcAtgIMCbHOJ3LQlmC/VwKJASIIQQzCSJIAizBhoWUjQvr90WCwQQAyzA8y7KHjVeEMQxmgIhgjEG+cGq1qreWgt0GAHVuuvK13z507NXthbI1YB8sQJxwoYwHKaogGDCuB5s0pK3wWsFgzA3yRLAS66srHjlQKGDhwnY5ONjjhaOR8Xg2D20MIAkMgvE1CvkC5uoQDIC+9ZXPTB1k3vDdrf+7jaBDvu8F+o8c9+FmorYly8uqyu0dTz3/tWy+0GSz4rKmStLRKhmcjvmrm2qfeRJA+Lwag0FASo4xG2hjiIhgmGHYkH2G3soAaCVRBsC+t7VJSyHcuvpLKhxAKFLCFVXzORgMCZMd7//u3Xcf+qd77sEKQPcCmFdeOdF/YhRGe0IwgZjBbE5vbuUdDzCZaevWrdQ768EAcKy8XET6+ri0obV15+6XWqRyoCyLpKV0NpsRAaH2WEpqAGr58uUGAKTgKTCz0YaIFDMDWhtMTRXOGBzejjp3dnaiu6dHb7ymqoFIWUoIY1uOUEoim8yiZd78Fw5pg/b29j/cc96685K79/Xm2JgwCcEAkwaROQ1vnVOr/43piKlUtpWJYNmWsWwHxKx0vmAWNdc/N5NoNpo3atBENp7xPT8/c6Y/U1uAGUDgLJ9D9PSAACTTudXMgLQcSKWM72kImKEffu9bfQDw5uL43nvuKToBJ+drH0SAMQaaNSwlxdkFB7CUAr4xC4QgCKVISsWFQh6OJQ4EHNt9U3HMAOA4To6NSTAbkBBsKQkpiCZz0/pUz58LOAJgPF+T6xXrpFRw7ADZtsV+Mc8lweALRddDe3u7eMv+zBCgAhsDX+fx+tF+c2JkTN3yV9fWATDdvb3qPYPbsmULMTMA2EXPjaYSYxgZPIyxkydEJjVFzW2NLzAzzU48/GGmr+i6FA4GpydGx3By4CheeX4nNwZ8bPv33/5o1YbLWnq7u925nwgyC575vMWrbCeAxqWrXt3UbPEHFgU9RKp55SVXDDNPlf3pHuvXr7cIQMvai+6lqlaNqqbikqqg+dT6Ou/Oz36UL7h008krrtl8PTNbs0f1chuzZGbxrqGki8h0/THoiUOHDoVWrFhBt33nR+e8+NO7F6+tBscyLkIBwcuWr3oJKKuNTU5fGYlEjBBSA9D5XLasMhqOX3LtjfXHh0YEAfZhN4DsoRHVOt6tOy6/qu6FgbGHF6w491fMfBMReaeMc8wsRjOZZUUPa0O2clKuNpWNC5vjBo1PP/ari72xEWd3zvL2xxm5oqvKy0trAfylkMoWhCRYayGkFwqHPQ1U//B7335h+47feT5zyRNP71xy6NX9jXuLHu397St+wAlwbVPLVYPTqS37xxN2slhMRC1r1+rXDrxMfwKKiIiZuWQklftyxtfnhSyZIED7WpcVDazPf+krl/f3n6Ciz4gEHbS1Nqf/8R9u/2VVTZWyQScDkiakElmjwUKCjYEKWdLImfN8mQLWvX785KrJZLreKEsopUKVpeHRoJLZ6YK71DeGqwPq0eXzqj9L7zyAwwSgYsp1G9gztZ7vVxaY6xEI1mWyObuQL5SWhsPjbeXhsUnXL81kCzVBW2WIjEdCFQRgGMZmA2MAX3ue6/tGZHxdRUJRUWvHUiLLhrOKEBcCw5Fg+HhtyDpGRFPveaD0jy8SCwPzA7lcLhAKhQgA5wAgl6NQKKRTKbjRKPIAim8aJj2dMZF3eyi/Zcx365t/3LoVwFZ0dZGZ+8vMkAps3YoV3d2Ezs43yC7PNr75LEru9Kanz9rw6J/XKdZ/AB0CxnkNPfBpAAAAAElFTkSuQmCC" alt="Logo" style="height:48px;width:auto;" />
              <div>
                <div class="logo-text">DIFESA</div>
                <div class="logo-sub">CONSUMATORE</div>
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
            &copy; 2025 Difesa Consumatore S.r.l.s. &middot; Via Novecchio 10, Pisa &middot; P.IVA 02285180507
            &nbsp;&middot;&nbsp; <a href="#" style="color:rgba(255,255,255,0.4);text-decoration:none;" onclick="dcOpenPrivacy(event)">Privacy Policy</a>
            &nbsp;&middot;&nbsp; <a href="#" style="color:rgba(255,255,255,0.4);text-decoration:none;" onclick="dcOpenCookie(event)">Cookie Policy</a>
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

    <!-- BACK TO TOP -->
    <a href="#" class="back-top" id="backTop" aria-label="Torna in cima">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
    </a>

    <!-- WHATSAPP FLOATING BUTTON -->
    <a href="https://wa.me/393296491028?text=Salve%2C%20vorrei%20una%20consulenza%20gratuita."
       target="_blank" rel="noopener"
       id="waFloat" class="wa-float" aria-label="Scrivici su WhatsApp">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>

    <!-- COOKIE BANNER -->
    <div id="cookieBanner" style="display:none;">
      <div class="cookie-inner">
        <div class="cookie-text">
          <strong>Questo sito utilizza i cookie</strong>
          <p>Utilizziamo cookie tecnici e, previo consenso, cookie analitici (Google Analytics) per migliorare la tua esperienza.</p>
        </div>
        <div class="cookie-actions">
          <button class="cookie-btn-accept" onclick="dcAcceptCookies()">Accetta tutti</button>
          <button class="cookie-btn-reject" onclick="dcRejectCookies()">Solo necessari</button>
        </div>
      </div>
    </div>

    <!-- MODAL PRIVACY / COOKIE -->
    <div id="dcModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;overflow:auto;padding:20px;">
      <div style="background:#fff;max-width:640px;margin:40px auto;border-radius:10px;padding:40px;position:relative;">
        <button onclick="document.getElementById('dcModal').style.display='none'"
                style="position:absolute;top:16px;right:16px;background:none;border:none;font-size:24px;cursor:pointer;color:#666;line-height:1;">&#x2715;</button>
        <div id="dcModalContent"></div>
      </div>
    </div>
  `;

  // ── EXTRA STYLES ──
  const extraStyles = `<style>
    .logo-img { height: 40px; width: auto; object-fit: contain; }

    .wa-float {
      position: fixed; bottom: 84px; right: 24px;
      width: 56px; height: 56px;
      background: #25d366; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 20px rgba(37,211,102,0.45);
      z-index: 89; text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .wa-float:hover { transform: scale(1.1); box-shadow: 0 6px 28px rgba(37,211,102,0.55); }

    #cookieBanner {
      position: fixed; bottom: 0; left: 0; right: 0;
      background: #1a3a6b; border-top: 3px solid #f5c842;
      z-index: 9000; padding: 16px 32px;
    }
    .cookie-inner {
      max-width: 1200px; margin: 0 auto;
      display: flex; align-items: center; justify-content: space-between;
      gap: 24px; flex-wrap: wrap;
    }
    .cookie-text { flex: 1; }
    .cookie-text strong { color: #f5c842; font-size: 14px; display: block; margin-bottom: 3px; }
    .cookie-text p { color: rgba(255,255,255,0.65); font-size: 12px; line-height: 1.5; margin: 0; }
    .cookie-actions { display: flex; gap: 10px; flex-shrink: 0; }
    .cookie-btn-accept {
      background: #f5c842; color: #1a3a6b;
      border: none; padding: 10px 22px; border-radius: 999px;
      font-size: 13px; font-weight: 700; cursor: pointer;
    }
    .cookie-btn-accept:hover { background: #f9d96a; }
    .cookie-btn-reject {
      background: transparent; color: rgba(255,255,255,0.6);
      border: 1px solid rgba(255,255,255,0.25); padding: 10px 22px; border-radius: 999px;
      font-size: 13px; cursor: pointer;
    }
    .cookie-btn-reject:hover { border-color: white; color: white; }

    @media (max-width: 600px) {
      #cookieBanner { padding: 14px 16px; }
      .cookie-inner { flex-direction: column; gap: 12px; }
      .cookie-actions { width: 100%; }
      .cookie-btn-accept, .cookie-btn-reject { flex: 1; text-align: center; }
      .wa-float { bottom: 16px; right: 16px; width: 50px; height: 50px; }
    }
  </style>`;

  // ── INJECT ──
  document.head.insertAdjacentHTML('beforeend', extraStyles);
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // ── HAMBURGER ──
  document.getElementById('navHamburger').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('open');
    this.classList.toggle('active');
  });

  // ── BACK TO TOP ──
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 400);
  });

  // ── SMOOTH SCROLL ──
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
      }
    });
  });

  // ── GOOGLE ANALYTICS 4 ──
  function dcLoadGA() {
    if (window._gaLoaded) return;
    window._gaLoaded = true;
    const s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-7LZTSSV5M6';
    s.async = true;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-7LZTSSV5M6', { anonymize_ip: true });
  }

  // ── COOKIE LOGIC ──
  window.dcAcceptCookies = function() {
    localStorage.setItem('dc_cookie_consent', 'accepted');
    document.getElementById('cookieBanner').style.display = 'none';
    dcLoadGA();
  };

  window.dcRejectCookies = function() {
    localStorage.setItem('dc_cookie_consent', 'rejected');
    document.getElementById('cookieBanner').style.display = 'none';
  };

  const consent = localStorage.getItem('dc_cookie_consent');
  if (!consent) {
    setTimeout(() => { document.getElementById('cookieBanner').style.display = 'block'; }, 800);
  } else if (consent === 'accepted') {
    dcLoadGA();
  }

  // ── PRIVACY MODAL ──
  window.dcOpenPrivacy = function(e) {
    if (e) e.preventDefault();
    document.getElementById('dcModalContent').innerHTML = `
      <h2 style="font-family:'Playfair Display',serif;color:#1a3a6b;margin-bottom:16px;">Privacy Policy</h2>
      <p style="font-size:14px;color:#555;line-height:1.8;margin-bottom:12px;">
        <strong>Titolare:</strong> Difesa Consumatore S.r.l.s. — Via Novecchio 10, Pisa (PI) — P.IVA 02285180507
      </p>
      <p style="font-size:14px;color:#555;line-height:1.8;margin-bottom:12px;">
        I dati personali forniti tramite il modulo di contatto (nome, email, telefono) vengono utilizzati esclusivamente per rispondere alle richieste e per la gestione delle pratiche. Non vengono ceduti a terzi.
      </p>
      <p style="font-size:14px;color:#555;line-height:1.8;margin-bottom:12px;">
        I dati sono conservati per il tempo strettamente necessario alla gestione del rapporto, nel rispetto degli obblighi di legge.
      </p>
      <p style="font-size:14px;color:#555;line-height:1.8;">
        Ai sensi del GDPR (Reg. UE 2016/679) hai diritto di accesso, rettifica e cancellazione dei tuoi dati. Scrivi a: <a href="mailto:difesaconsumatorepisa@gmail.com" style="color:#1a3a6b;">difesaconsumatorepisa@gmail.com</a>
      </p>
    `;
    document.getElementById('dcModal').style.display = 'block';
  };

  window.dcOpenCookie = function(e) {
    if (e) e.preventDefault();
    document.getElementById('dcModalContent').innerHTML = `
      <h2 style="font-family:'Playfair Display',serif;color:#1a3a6b;margin-bottom:16px;">Cookie Policy</h2>
      <p style="font-size:14px;color:#555;line-height:1.8;margin-bottom:10px;"><strong>Cookie tecnici</strong> — Necessari per il funzionamento del sito. Non richiedono consenso.</p>
      <p style="font-size:14px;color:#555;line-height:1.8;margin-bottom:10px;"><strong>Cookie analitici (Google Analytics 4)</strong> — Raccolgono dati anonimi sul traffico. Attivati solo previo consenso. IP anonimizzato.</p>
      <p style="font-size:14px;color:#555;line-height:1.8;margin-bottom:20px;">Puoi revocare il consenso in qualsiasi momento:</p>
      <button onclick="localStorage.removeItem('dc_cookie_consent');location.reload();"
              style="background:#1a3a6b;color:white;border:none;padding:10px 24px;border-radius:999px;cursor:pointer;font-size:13px;font-weight:600;">
        Reimposta preferenze cookie
      </button>
    `;
    document.getElementById('dcModal').style.display = 'block';
  };

  document.getElementById('dcModal').addEventListener('click', function(e) {
    if (e.target === this) this.style.display = 'none';
  });

})();
