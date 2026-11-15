// Static page builder: wraps fragments in _src/pages/*.html with shared layouts.
// Run:  node _src/build.js   (outputs plain .html files in the project root)
const fs = require('fs'), path = require('path');
const {sprite,iconize,missing}=require('./icons');
const ROOT = path.join(__dirname, '..'), PAGES = path.join(__dirname, 'pages');

const PHOTO = { cv1:'1523987355523-c7b5b0dd90a7', cv2:'1518780664697-55e3ad937233', cv3:'1510798831971-661eb04b3739', cv4:'1537225228614-56cc3556d7ed', cv5:'1506744038136-46273834b3fb', cv6:'1445307806294-bff7f67ff225', cvnew:'1464207687429-7505649dae38',
  cv1a:'1502672260266-1c1ef2d93688', cv1b:'1505691938895-1758d7feb511', cv1c:'1556911220-bff31c812dba', cv1d:'1507525428034-b723cf961d3e',
  cvnew2:'1522708323590-d24dbb6b0267', cvnew3:'1540518614846-7eded433c457', cvnew4:'1502672260266-1c1ef2d93688',
  'coast-hero':'1507525428034-b723cf961d3e', 'login-bg':'1470071459604-3b5ec3a7fe05' };
const img = (seed) => `images/${PHOTO[seed] || PHOTO.cv1}.jpg`;
const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Newsreader:wght@400;500;600&family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">`;

/* ---------- calendar helpers ---------- */
function month(y, m, ranges, pub, todayDay) {
  const name = new Date(y, m, 1).toLocaleString('en-GB', { month: 'long', year: 'numeric' });
  const days = new Date(y, m + 1, 0).getDate(), off = (new Date(y, m, 1).getDay() + 6) % 7;
  let h = `<div class="cal ${pub ? 'pub' : ''}"><div class="cal-title"><a href="#">‹</a><span>${name}</span><a href="#">›</a></div><div class="cal-grid">`;
  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach(d => h += `<div class="cal-dow">${d}</div>`);
  for (let i = 0; i < off; i++) h += `<div class="cal-d e"></div>`;
  for (let d = 1; d <= days; d++) {
    let cls = '', lab = '';
    for (const [a, b, c, l] of ranges) if (d >= a && d <= b) { cls = c; if (!pub && (d === a || (d + off - 1) % 7 === 0)) lab = l; }
    if (d === todayDay) cls += ' today';
    h += pub ? `<div class="cal-d ${cls}">${d}</div>` : `<div class="cal-d ${cls}"><span class="n">${d}</span>${lab ? `<em>${lab}</em>` : ''}</div>`;
  }
  return h + `</div></div>`;
}
const OWNER_R = [[3, 7, 'bk', 'Smith · 4n'], [10, 13, 'ow', 'Owner use'], [18, 21, 'bk', 'Jones · 3n'], [24, 26, 'pn', 'Pending block'], [28, 30, 'bk', 'Patel · 2n']];
const ADMIN_R = [[3, 7, 'bk', 'Smith · 4n'], [8, 9, 'mt', 'Maintenance'], [10, 13, 'ow', 'Owner use'], [15, 16, 'ic', 'Airbnb (iCal)'], [18, 21, 'bk', 'Jones · 3n'], [22, 23, 'hd', 'Hold 28:14'], [24, 26, 'pn', 'Pending block'], [28, 30, 'bk', 'Patel · 2n']];
const LEGEND = `<div class="legend"><span><i style="background:#dcebfc"></i>Booking</span><span><i style="background:#e9defa"></i>Owner block</span><span><i style="background:#fff0c7"></i>Pending approval</span><span><i style="background:#fde0e0"></i>Maintenance</span><span><i style="background:#dff3ea"></i>External iCal</span><span><i style="background:#ffe9b3"></i>Checkout hold</span></div>`;
const PUB_LEGEND = `<div class="legend"><span><i style="background:#eaf6ee"></i>Available</span><span><i style="background:#f1f3f3"></i>Unavailable</span><span><i style="background:var(--brand)"></i>Your stay</span></div>`;

function timeline() {
  const rows = [
    ['Seaview Retreat', 'cv1', [[3, 7, 'bk', 'Smith'], [18, 21, 'bk', 'Jones'], [28, 30, 'bk', 'Patel']]],
    ['Dune Escape', 'cv2', [[1, 4, 'bk', 'Walker'], [10, 13, 'ow', 'Owner use'], [15, 16, 'ic', 'Airbnb'], [22, 27, 'bk', 'Hughes · 5n']]],
    ['Woodland Lodge', 'cv3', [[5, 9, 'bk', 'Brown'], [12, 14, 'mt', 'Repair'], [20, 24, 'pn', 'Owner req.'], [26, 30, 'bk', 'Davies']]],
    ['Sunset Haven', 'cv4', [[2, 6, 'ic', 'Booking.com'], [8, 15, 'bk', 'Taylor · 7n'], [19, 23, 'bk', 'Evans']]],
    ['Harbour Light', 'cv5', [[4, 8, 'bk', 'Clarke'], [11, 12, 'mt', 'Clean'], [16, 22, 'bk', 'Wilson · 6n'], [25, 29, 'ow', 'Owner use']]],
    ['Pinewood Nook', 'cv6', [[6, 10, 'bk', 'Moore'], [13, 17, 'bk', 'Ali'], [21, 24, 'bk', 'Green']]],
  ];
  let h = `<div class="tchart"><div class="tc-row hd"><div class="nm">Caravan · Nov 2026</div>`;
  for (let d = 1; d <= 30; d++) h += `<span>${d}</span>`;
  h += `</div>`;
  for (const [n, s, bars] of rows) {
    h += `<div class="tc-row"><div class="nm"><img src="${img(s, 60, 60)}" alt="">${n}</div>`;
    for (let d = 1; d <= 30; d++) h += `<div class="cellbg" style="grid-column:${d + 1}"></div>`;
    for (const [a, b, c, l] of bars) h += `<a class="bar ${c}" href="admin-booking-view.html" style="grid-column:${a + 1}/${b + 2}">${l}</a>`;
    h += `</div>`;
  }
  return h + `</div>`;
}

/* ---------- layouts ---------- */
const hubLinks = (on) => `<div class="demobar"><b>🎬 CLIENT DEMO</b>
<a href="index.html" class="${on === 'pub' ? 'on' : ''}">Customer website</a>
<a href="owner-dashboard.html" class="${on === 'owner' ? 'on' : ''}">Owner portal</a><a href="admin-dashboard.html" class="${on === 'admin' ? 'on' : ''}">Admin panel</a>
<span class="sp"></span><a href="demo.html">☰ Demo hub / flow map</a></div>`;

const pubHead = (nav) => `<header class="pub-head"><div class="container"><a class="logo" href="index.html"><span>🚐</span>Caravan Escapes</a>
<nav class="pub-nav"><a href="search.html" class="${nav === 'search.html' ? 'on' : ''}">Our caravans</a><a href="index.html#how">How it works</a><a href="index.html#contact">Contact</a></nav>
<a class="btn btn-ghost btn-sm" href="login.html">Sign in</a><a class="btn btn-accent btn-sm" href="search.html">Book now</a></div></header>`;
const pubFoot = `<footer class="pub-foot" id="contact"><div class="container"><div class="grid g4"><div><div class="logo" style="color:#fff"><span>🚐</span>Caravan Escapes</div><p class="small" style="margin-top:10px">Hand-picked holiday caravans on the Welsh coast. Book direct, pay securely.</p></div>
<div><h4>Explore</h4><a href="search.html">All caravans</a><a href="index.html#how">How it works</a></div>
<div><h4>Guests</h4><a href="search.html">Find a caravan</a><a href="#">Cancellation policy</a></div>
<div><h4>Owners &amp; Staff</h4><a href="owner-dashboard.html">Owner portal</a><a href="admin-dashboard.html">Admin panel</a><a href="demo.html">Demo hub</a></div></div>
<div class="copy">© 2026 Caravan Escapes · 📞 01234 567 890 · hello@caravanescapes.example · Demo UI only</div></div></footer>`;

const ADMIN_NAV = [
  ['Overview', [['📊', 'Dashboard', 'admin-dashboard.html']]],
  ['Caravans', [['🚐', 'Caravans', 'admin-caravans.html'], ['🧑‍💼', 'Owners &amp; staff', 'admin-people.html']]],
  ['Bookings', [['📅', 'Bookings', 'admin-bookings.html'], ['🗓️', 'Calendar', 'admin-calendar.html'], ['📝', 'Date-block requests', 'admin-requests.html', 2], ['🔄', 'iCal sync', 'admin-ical.html']]],
  ['Money', [['💷', 'Prices', 'admin-pricing.html'], ['💳', 'Payments', 'admin-payments.html'], ['📈', 'Reports', 'admin-reports.html']]],
  ['Other', [['✉️', 'Automatic emails', 'admin-emails.html']]],
];
const OWNER_NAV = [
  ['My caravans', [['📊', 'Dashboard', 'owner-dashboard.html'], ['🗓️', 'Calendar', 'owner-calendar.html'], ['🔒', 'Block dates', 'owner-block.html'], ['📅', 'Bookings', 'owner-bookings.html']]],
];
function sidebar(navDef, nav, role, who) {
  let h = `<aside class="side"><a class="logo" href="index.html"><span>🚐</span>Caravan Escapes</a><div class="role">Signed in as<b>${who}</b>${role}</div>`;
  for (const [g, items] of navDef) {
    h += `<h6>${g}</h6>`;
    for (const [ic, l, href, c] of items) h += `<a href="${href}" class="${href === nav ? 'on' : ''}"><span>${ic}</span>${l}${c ? `<span class="cnt">${c}</span>` : ''}</a>`;
  }
  return h + `<h6>Account</h6><a href="login.html"><span>↩️</span>Sign out</a></aside>`;
}
function shell(kind, nav, body) {
  const adm = kind === 'admin';
  const side = adm ? sidebar(ADMIN_NAV, nav, 'Super Administrator', 'Sarah Mitchell') : sidebar(OWNER_NAV, nav, 'Caravan Owner · 2 caravans', 'David Roberts');
  const me = adm ? ['SM', 'Sarah Mitchell', 'Super Admin'] : ['DR', 'David Roberts', 'Owner'];
  return `${hubLinks(kind)}<input type="checkbox" id="navtoggle"><div class="shell">${side}<div class="main">
<div class="topbar"><label for="navtoggle" class="ico burger">☰</label><div class="search"><input type="text" placeholder="${adm ? 'Search bookings, guests, caravans…' : 'Search your bookings…'}"></div><span class="grow"></span>
<a class="ico" href="${adm ? 'admin-requests.html' : 'owner-dashboard.html#alerts'}">🔔<i></i></a><div class="me"><span class="avatar">${me[0]}</span><div><b>${me[1]}</b><br><small>${me[2]}</small></div></div></div>
<div class="content">${body}</div></div></div>`;
}

/* ---------- build ---------- */
function expand(s) {
  return s
    .replace(/\{\{IMG:([\w-]+):(\d+):(\d+)\}\}/g, (_, a, w, h) => img(a, w, h))
    .replace('{{CAL:owner}}', month(2026, 10, OWNER_R, false, 14) + LEGEND)
    .replace('{{CAL:admin}}', month(2026, 10, ADMIN_R, false, 14) + LEGEND)
    .replace('{{CAL:pub1}}', month(2026, 10, [[3, 7, 'na'], [10, 13, 'na'], [18, 21, 'na'], [22, 22, 'sel'], [23, 26, 'mid'], [27, 27, 'sel'], [28, 30, 'na'], [1, 2, 'na']], true))
    .replace('{{CAL:pub2}}', month(2026, 11, [[4, 8, 'na'], [18, 31, 'na']], true) + PUB_LEGEND)
    .replace('{{TIMELINE}}', timeline());
}
let count = 0;
for (const f of fs.readdirSync(PAGES).filter(f => f.endsWith('.html'))) {
  let src = fs.readFileSync(path.join(PAGES, f), 'utf8');
  const m = src.match(/^<!--(.*?)-->/s); const meta = {};
  if (m) { m[1].split('|').forEach(p => { const i = p.indexOf(':'); meta[p.slice(0, i).trim()] = p.slice(i + 1).trim(); }); src = src.slice(m[0].length); }
  const kind = f.startsWith('admin-') ? 'admin' : f.startsWith('owner-') ? 'owner' : (meta.layout || 'pub');
  const nav = meta.nav || f;
  let body = expand(src), out;
  if (kind === 'admin' || kind === 'owner') out = shell(kind, nav, body);
  else if (kind === 'auth') out = hubLinks('') + body;
  else out = hubLinks(meta.on || 'pub') + pubHead(nav) + body + pubFoot;
  const title = (meta.title || f) + ' · Caravan Escapes';
  fs.writeFileSync(path.join(ROOT, f), `<!DOCTYPE html>\n<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>${FONTS}<link rel="stylesheet" href="css/style.css"></head><body>\n${sprite}${iconize(out)}\n</body></html>\n`);
  count++;
}
if(missing.size)console.log('unmapped',[...missing]);console.log('built', count, 'pages');
