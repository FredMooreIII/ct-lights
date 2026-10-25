// Northern CT Lights HQ -- applies data/team.js to the page (name, colors, logo,
// coaches, resources, tournaments). Runs before app.js. No team data lives here.
(function(){
  const T = (typeof TEAM !== 'undefined') ? TEAM : {};
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const $ = id => document.getElementById(id);
  const setText = (sel, txt) => document.querySelectorAll(sel).forEach(el => { el.textContent = txt; });

  // ---- Colors -------------------------------------------------------------
  function hexToRgb(h){ const m = String(h||'').replace('#','').match(/^([0-9a-f]{6})$/i); if(!m) return null; const n = parseInt(m[1],16); return [(n>>16)&255,(n>>8)&255,n&255]; }
  function shade(h, amt){ const c = hexToRgb(h); if(!c) return h; return '#' + c.map(v => Math.max(0, Math.min(255, Math.round(v + (amt>0 ? (255-v)*amt : v*amt))))).map(v => v.toString(16).padStart(2,'0')).join(''); }
  function lum(h){ const c = hexToRgb(h); if(!c) return 0; const [r,g,b] = c.map(v => { v/=255; return v<=0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055,2.4); }); return 0.2126*r + 0.7152*g + 0.0722*b; }
  const C = Object.assign({ primary:'#14213d', accent:'#f2b705', secondary:'#7cc6f2' }, T.colors || {});
  const root = document.documentElement.style;
  // The stylesheet's variable names are historical (--navy/--red/--ice); they now mean primary/accent/secondary.
  root.setProperty('--navy', C.primary);
  root.setProperty('--navy-2', shade(C.primary, 0.08));
  root.setProperty('--navy-3', shade(C.primary, 0.16));
  root.setProperty('--red', C.accent);
  root.setProperty('--red-2', shade(C.accent, 0.12));
  root.setProperty('--ice', C.secondary);
  root.setProperty('--ice-2', shade(C.secondary, 0.3));
  root.setProperty('--loss', '#c8102e'); // losses stay red no matter the team colors
  root.setProperty('--on-accent', lum(C.accent) > 0.45 ? '#101826' : '#ffffff');
  root.setProperty('--accent-ink', lum(C.accent) > 0.35 ? C.primary : C.accent);
  root.setProperty('--jersey-text', lum(C.primary) > 0.45 ? '#101826' : '#f5f2eb');

  // ---- Auto-drawn jersey (used when TEAM.jersey is null) --------------------
  function jerseySvg(){
    const P = C.primary, A = C.accent, S = '#ffffff';
    const body = 'M220 110 L380 70 Q500 112 620 70 L780 110 L760 430 L772 940 Q500 972 228 940 L240 430 Z';
    const sleeveL = 'M220 110 L240 430 L214 592 L38 560 L52 300 Z';
    const sleeveR = 'M780 110 L760 430 L786 592 L962 560 L948 300 Z';
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
      <defs>
        <clipPath id="b"><path d="${body}"/></clipPath>
        <clipPath id="s"><path d="${sleeveL}"/><path d="${sleeveR}"/></clipPath>
        <linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".18"/><stop offset=".5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></linearGradient>
      </defs>
      <path d="${sleeveL}" fill="${P}"/><path d="${sleeveR}" fill="${P}"/>
      <g clip-path="url(#s)"><rect x="0" y="440" width="1000" height="26" fill="${A}"/><rect x="0" y="466" width="1000" height="18" fill="${S}"/><rect x="0" y="484" width="1000" height="26" fill="${A}"/></g>
      <path d="${body}" fill="${P}"/>
      <g clip-path="url(#b)"><rect x="0" y="790" width="1000" height="34" fill="${A}"/><rect x="0" y="824" width="1000" height="22" fill="${S}"/><rect x="0" y="846" width="1000" height="34" fill="${A}"/></g>
      <path d="${body}" fill="url(#g)"/>
      <path d="M380 70 Q500 112 620 70" fill="none" stroke="${A}" stroke-width="16"/>
      <path d="M240 430 L228 940 M760 430 L772 940" stroke="#000" stroke-opacity=".12" stroke-width="4" fill="none"/>
    </svg>`;
  }
  window.TEAM_JERSEY = T.jersey || ('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(jerseySvg()));

  // ---- Names, logo, footer ---------------------------------------------------
  document.title = (T.wordmark || T.name || 'Team') + ' HQ';
  setText('[data-team="name"]', T.name || '');
  setText('[data-team="wordmark"]', T.wordmark || T.name || '');
  setText('[data-team="short"]', T.short || T.name || 'Us');
  setText('[data-team="level"]', T.level || '');
  setText('[data-team="emoji"]', T.emoji || '🏒');
  setText('[data-team="season"]', T.season || '');
  setText('[data-team="gate-title"]', [T.name, T.level].filter(Boolean).join(' '));
  setText('[data-team="clock"]', String(T.periodMinutes || 12).padStart(2,'0') + ':00');

  const crest = $('team-crest');
  if (crest) {
    const initials = String(T.name || T.short || '?').split(/\s+/).map(w => w[0]).join('').slice(0,3).toUpperCase();
    crest.innerHTML = T.crest
      ? `<img src="${esc(T.crest)}" alt="${esc(T.name)} logo">`
      : `<span class="crest-fallback">${esc(initials)}</span>`;
  }

  // ---- Gate logo + no-bench mode -------------------------------------------
  const gateEmoji = document.querySelector('.gate-emoji');
  if (gateEmoji && T.crest) gateEmoji.innerHTML = `<img src="${esc(T.crest)}" alt="${esc(T.name)}" class="gate-crest">`;
  if (!T.benchPasscode) {
    const link = $('scores-gate-link');
    const card = link && link.closest('.res-card');
    if (card) card.remove();
  }

  // ---- MHR rating -----------------------------------------------------------
  document.querySelectorAll('[data-team="mhr"]').forEach(el => {
    const has = T.mhr && T.mhr.url;
    el.hidden = !has;
    if (!has) return;
    el.href = T.mhr.url;
    const num = el.querySelector('.num');
    if (num) num.textContent = (T.mhr.rating != null && T.mhr.rating !== '') ? T.mhr.rating : '—';
  });
  const mhrNote = $('mhr-note');
  if (mhrNote) {
    if (T.mhr && T.mhr.url) {
      mhrNote.innerHTML = `📈 <span>${T.mhr.rating != null ? 'Current MHR rating: <strong>' + esc(T.mhr.rating) + '</strong>. ' : ''}MyHockeyRankings updates ratings weekly. <a href="${esc(T.mhr.url)}" target="_blank" rel="noopener">See it on MyHockeyRankings ↗</a></span>`;
    } else {
      $('mhr-section') && ($('mhr-section').hidden = true);
    }
  }

  // ---- Instagram CTA ---------------------------------------------------------
  const ig = $('team-ig-cta');
  if (ig) {
    if (T.instagram) {
      ig.href = 'https://www.instagram.com/' + encodeURIComponent(T.instagram) + '/';
      ig.textContent = `${T.emoji || '📣'} Follow @${T.instagram} on Instagram →`;
    } else { ig.parentElement.hidden = true; }
  }

  // ---- Coaching staff --------------------------------------------------------
  const staffEl = $('team-staff');
  if (staffEl) {
    const staff = (T.staff || []).filter(s => s && s.role);
    staffEl.innerHTML = staff.map(s => `
      <div class="card res-card">
        <h4>${/manager/i.test(s.role) ? '📋' : '🧊'} ${esc(s.role)}</h4>
        <dd style="font-size:16px;font-weight:800;margin:0;">${esc(s.name || 'TBD')}</dd>
      </div>`).join('');
    if (!staff.length) $('team-staff-section').hidden = true;
  }

  // ---- Resources -------------------------------------------------------------
  const res = $('team-resources');
  if (res) {
    const cards = [];
    if (T.homeRink && T.homeRink.name) {
      const q = encodeURIComponent(T.homeRink.address || T.homeRink.name);
      cards.push(`<div class="card res-card"><h4>📍 Home Rink</h4><dl>
        <dt>Rink</dt><dd>${esc(T.homeRink.name)}</dd>
        ${T.homeRink.address ? `<dt>Address</dt><dd style="font-weight:600;font-size:13.5px;">${esc(T.homeRink.address)}</dd>` : ''}
      </dl><a class="cta" href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener">Directions →</a></div>`);
    }
    if (T.fund) {
      cards.push(`<div class="card res-card"><h4>💵 Team Fund</h4><dl>
        ${T.fund.balance ? `<dt>Current Balance</dt><dd>${esc(T.fund.balance)}</dd>` : ''}
        ${T.fund.venmo ? `<dt>Send via Venmo</dt><dd><a href="https://venmo.com/u/${encodeURIComponent(T.fund.venmo)}" target="_blank" rel="noopener">@${esc(T.fund.venmo)} ↗</a></dd>` : ''}
        ${T.fund.other ? `<dt>Or</dt><dd>${esc(T.fund.other)}</dd>` : ''}
      </dl><p class="muted" style="font-size:11px;margin:8px 0 0;">Updated manually &mdash; not a live sync.</p></div>`);
    }
    const lg = T.league || {};
    if (lg.name || lg.division || (T.mhr && T.mhr.url) || (T.orgSite && T.orgSite.url)) {
      cards.push(`<div class="card res-card"><h4>${esc(T.emoji || '🏒')} League &amp; Club</h4><dl>
        ${T.orgSite && T.orgSite.url ? `<dt>Club</dt><dd><a href="${esc(T.orgSite.url)}" target="_blank" rel="noopener">${esc(T.orgSite.name || 'Club site')} ↗</a></dd>` : ''}
        ${lg.name ? `<dt>League</dt><dd>${lg.url ? `<a href="${esc(lg.url)}" target="_blank" rel="noopener">${esc(lg.name)} ↗</a>` : esc(lg.name)}</dd>` : ''}
        ${lg.division ? `<dt>Division</dt><dd>${esc(lg.division)}</dd>` : ''}
        ${T.mhr && T.mhr.url ? `<dt>Rankings</dt><dd><a href="${esc(T.mhr.url)}" target="_blank" rel="noopener">MyHockeyRankings ↗</a></dd>` : ''}
        ${T.scheduleSource ? `<dt>Official schedule</dt><dd><a href="${esc(T.scheduleSource)}" target="_blank" rel="noopener">Schedule source ↗</a></dd>` : ''}
      </dl></div>`);
    }
    if (T.funForm && T.funForm.url) {
      cards.push(`<div class="card res-card"><h4>${esc(T.emoji || '⭐')} ${esc(T.funForm.title || 'Get to Know the Team')}</h4>
        <p style="font-size:13.5px;color:var(--ink-dim);line-height:1.5;margin:0;">${esc(T.funForm.blurb || '')}</p>
        <a class="cta" href="${esc(T.funForm.url)}" target="_blank" rel="noopener">Fill it out →</a></div>`);
    }
    if (T.instagram) {
      cards.push(`<div class="card res-card"><h4>📣 Follow the Team</h4><dl><dt>Instagram</dt><dd><a href="https://www.instagram.com/${encodeURIComponent(T.instagram)}/" target="_blank" rel="noopener">@${esc(T.instagram)} ↗</a></dd></dl></div>`);
    }
    res.insertAdjacentHTML('beforeend', cards.join(''));
  }

  // ---- Tournaments -----------------------------------------------------------
  const tourn = $('team-tournaments');
  if (tourn) {
    const list = (T.tournaments || []).filter(t => t && t.name);
    if (!list.length) { $('team-tournaments-section').hidden = true; tourn.hidden = true; }
    tourn.innerHTML = list.map(t => `
      <div class="card res-card" style="padding:20px 22px;">
        <h4>🏆 ${esc(t.name)}</h4>
        <div class="muted" style="font-size:13px;margin:-4px 0 10px;">${esc([t.dates, t.location].filter(Boolean).join(' · '))}</div>
        <dl>
          ${t.url ? `<dt>Event info</dt><dd><a href="${esc(t.url)}" target="_blank" rel="noopener">${esc(t.urlLabel || 'Event site')} ↗</a></dd>` : ''}
          ${t.rinks ? `<dt>Rinks</dt><dd style="font-weight:600;font-size:13.5px;">${esc(t.rinks)}</dd>` : ''}
          ${t.hotelUrl ? `<dt>Hotel Block</dt><dd><a href="${esc(t.hotelUrl)}" target="_blank" rel="noopener">Book your room ↗</a></dd>` : ''}
        </dl>
      </div>`).join('');
  }

  // ---- Roster / goalie counts --------------------------------------------------
  if (typeof ROSTER !== 'undefined') {
    const cnt = $('roster-count');
    if (cnt) cnt.textContent = ROSTER.length ? ROSTER.length + ' players' : 'Roster coming soon';
    const gl = $('goalie-count');
    if (gl) { const g = ROSTER.filter(p => p.pos === 'G'); gl.textContent = g.map(p => p.name.split(/\s+/)[0]).join(' + '); }
  }
})();
