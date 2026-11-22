// Supabase > Project Settings > API : paste your Project URL and the "anon / public" key.
const SUPABASE_URL = 'https://gcrxlkcdumnbogjcmgzt.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_iz5Xw2CFHU75-uHWmEAHhA_8-Zq3_mc';

// Paste your Google review link between the quotes (Google Business Profile > Read reviews > Get more reviews > Copy)
const GOOGLE_REVIEW_URL = 'PASTE-YOUR-GOOGLE-REVIEW-LINK-HERE';

async function rpc(fn, args) {
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: 'POST',
      headers: SUPABASE_ANON_KEY.startsWith('eyJ')
        ? { apikey: SUPABASE_ANON_KEY, Authorization: 'Bearer ' + SUPABASE_ANON_KEY, 'Content-Type': 'application/json' }
        : { apikey: SUPABASE_ANON_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify(args || {})
    });
    const d = await r.json();
    return r.ok ? d : { error: d.message || 'Server error' };
  } catch (e) { return { error: 'No connection. Check your internet and try again.' }; }
}
const $ = s => document.querySelector(s);
function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('on'), 3200); }

// Seasonal theme (public pages and the app only; admin and cashier pages are not themed)
(function () {
  const el = document.documentElement; if (!el.hasAttribute('data-theme')) return;
  const SEA = { christmas: '❄', valentines: '♥', halloween: '🦇' };
  function fx(season, on) {
    const old = document.getElementById('season-fx'); if (old) old.remove();
    if (!on || !SEA[season] || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const d = document.createElement('div'); d.id = 'season-fx';
    for (let i = 0; i < 16; i++) { const s = document.createElement('span'); s.textContent = SEA[season];
      s.style.cssText = `left:${Math.random() * 100}%;animation-duration:${9 + Math.random() * 9}s;animation-delay:${-Math.random() * 14}s;font-size:${12 + Math.random() * 14}px`; d.append(s); }
    document.body.append(d);
  }
  let cached = {}; try { cached = JSON.parse(localStorage.getItem('kb_season') || '{}'); } catch (e) {}
  fx(cached.theme, cached.fx);
  rpc('get_theme').then(r => { if (!r || r.error) return; el.dataset.season = r.theme || ''; localStorage.setItem('kb_season', JSON.stringify(r)); fx(r.theme, r.fx); });
})();
// Seasonal theme (public pages and the app only; admin and cashier pages are not themed)
(function () {
  const el = document.documentElement; if (!el.hasAttribute('data-theme')) return;
  const SEA = { christmas: '❄', valentines: '♥', halloween: '🦇' };
  function fx(season, on) {
    const old = document.getElementById('season-fx'); if (old) old.remove();
    if (!on || !SEA[season] || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const d = document.createElement('div'); d.id = 'season-fx';
    for (let i = 0; i < 16; i++) { const s = document.createElement('span'); s.textContent = SEA[season];
      s.style.cssText = `left:${Math.random() * 100}%;animation-duration:${9 + Math.random() * 9}s;animation-delay:${-Math.random() * 14}s;font-size:${12 + Math.random() * 14}px`; d.append(s); }
    document.body.append(d);
  }
  let cached = {}; try { cached = JSON.parse(localStorage.getItem('kb_season') || '{}'); } catch (e) {}
  fx(cached.theme, cached.fx);
  rpc('get_theme').then(r => { if (!r || r.error) return; el.dataset.season = r.theme || ''; localStorage.setItem('kb_season', JSON.stringify(r)); fx(r.theme, r.fx); });
})();
