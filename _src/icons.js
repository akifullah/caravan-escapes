// Inline SVG icon set (Lucide-style strokes). Emoji/symbols in page sources are swapped for these at build time.
const S = {
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  pound: '<path d="M18 7c0-2.8-2.2-4-4.5-4S9 4.2 9 7v10c0 1.7-1 3-3 3h12M6 12h9"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  'check-circle': '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
  check: '<path d="M5 12.5 10 17 19.5 7"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  alert: '<path d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
  camera: '<path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="4"/>',
  move: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M3 12h18"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6"/>',
  bed: '<path d="M3 19V6M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="11" r="2"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/><circle cx="9" cy="7" r="4"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  rocket: '<path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2M14 4c3-1 6-1 6-1s0 3-1 6l-7 7-5-5zM9 14l-4-1 3-3 4 1M15 15l1 4 3-3-1-4"/>',
  pin: '<path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  chart: '<path d="M3 3v18h18M7 15l4-4 3 3 5-6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  caravan: '<path d="M3 16V8a2 2 0 0 1 2-2h11a4 4 0 0 1 4 4v6M3 16h17"/><circle cx="8" cy="17.5" r="2"/><circle cx="16" cy="17.5" r="2"/><path d="M6 10h5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  arrival: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',
  refresh: '<path d="M21 12a9 9 0 0 1-15.5 6.2L3 16M3 12a9 9 0 0 1 15.5-6.2L21 8M3 21v-5h5M21 3v5h-5"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"/>',
  'x-circle': '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  dot: '<circle cx="12" cy="12" r="6" fill="currentColor" stroke="none"/>',
  printer: '<path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  bank: '<path d="M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M2 10l10-6 10 6"/>',
  star: '<path d="m12 2 3 7 7 .6-5.3 4.7 1.7 7.2L12 17.8 5.6 21.5l1.7-7.2L2 9.6 9 9z" fill="currentColor" stroke="none"/>',
  share: '<path d="M7 17 17 7M8 7h9v9"/>',
  paw: '<circle cx="6" cy="10" r="1.6"/><circle cx="10" cy="6" r="1.6"/><circle cx="14" cy="6" r="1.6"/><circle cx="18" cy="10" r="1.6"/><path d="M12 11c-3 0-5 3-5 5.5 0 1.5 1.2 2.5 2.7 2.5 1 0 1.5-.5 2.3-.5s1.3.5 2.3.5c1.5 0 2.7-1 2.7-2.5C17 14 15 11 12 11z"/>',
  wifi: '<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 20h.01"/>',
  flame: '<path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-7-1 2-2 3-3 3 0-3-1-6-4-9 0 5-4 8-4 13 0 4 3 7 7 7z"/>',
  utensils: '<path d="M5 3v7a3 3 0 0 0 3 3v8M8 3v7M11 3v7a3 3 0 0 1-3 3M17 21V3c-2 1-4 4-4 8h4"/>',
  tv: '<rect x="2" y="5" width="20" height="13" rx="2"/><path d="M8 21h8"/>',
  parking: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>',
  home: '<path d="m3 11 9-8 9 8M5 10v10h14V10"/>',
  washer: '<rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="14" r="5"/><path d="M8 6h.01"/>',
  smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
  waves: '<path d="M2 8c2 0 2-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2M2 14c2 0 2-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2M2 20c2 0 2-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2"/>',
  sparkle: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 17v4M17 19h4"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21a2 2 0 0 0 4 0"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
  settings: '<circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
  grip: '<g fill="currentColor" stroke="none"><circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/></g>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  play: '<path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
  'arrow-left': '<path d="M19 12H5M12 5l-7 7 7 7"/>',
  'arrow-right': '<path d="M5 12h14M12 5l7 7-7 7"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 6-10 16-10 0 10-4 17-9 17zM4 21c2-5 5-8 9-10"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
  none: '',
};
// emoji / symbol -> [icon, extra class]
const MAP = {
  '💳': 'card', '💷': 'pound', '📅': 'calendar', '🗓': 'calendar', '✅': 'check-circle', '✓': 'check', '✉': 'mail', '📧': 'mail', '📨': 'mail',
  '🔍': 'search', '🔒': 'lock', '⚠': 'alert', '📷': 'camera', '↔': 'move', '🗑': 'trash', '📄': 'file', '🛏': 'bed', '👥': 'users',
  '🚿': 'drop', '🚀': 'rocket', '📍': 'pin', '👁': 'eye', '📊': 'chart', '📈': 'chart', '☀': 'sun', '📝': 'edit', '🚐': 'caravan',
  '🧑‍💼': 'user', '🧳': 'briefcase', '🛬': 'arrival', '🔄': 'refresh', '🛠': 'wrench', '❌': 'x-circle', 'ℹ': 'info', '💡': 'info',
  '🔴': ['dot', 'dr'], '🟡': ['dot', 'dy'], '🟢': ['dot', 'dg'], '🖨': 'printer', '⏱': 'clock', '⏳': 'clock', '🏦': 'bank',
  '⭐': ['star', 'star'], '★': ['star', 'star'], '↗': 'share', '🐾': 'paw', '📶': 'wifi', '🔥': 'flame', '🍳': 'utensils', '📺': 'tv',
  '🅿': 'parking', '🪑': 'home', '🧺': 'washer', '👶': 'smile', '♨': 'waves', '🌊': 'waves', '🧹': 'sparkle', '🔔': 'bell',
  '📞': 'phone', '🖼': 'image', '⚙': 'settings', '↩': 'logout', '♡': 'heart', '⠿': 'grip', '✕': 'x', '▶': 'play', '🎬': 'play',
  '☰': 'menu', '＋': 'plus', '⬇': 'download', '←': 'arrow-left', '→': 'arrow-right', '🍂': 'leaf', '🌐': 'globe',
  '👋': 'none', '🎉': 'none',
};
const sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">' + Object.entries(S).map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`).join('') + '</svg>';
const RE = /\p{Extended_Pictographic}(?:‍\p{Extended_Pictographic})*️?|[✓✕★♡⠿＋⬇←→▶☰]/gu;
const missing = new Set();
function iconize(html) {
  html = html.replace(/<option[^>]*>[^<]*<\/option>/g, o => o.replace(/＋/g, '+'));
  return html.split(/(<[^>]+>)/).map(seg => seg.startsWith('<') ? seg : seg.replace(RE, m => {
    const key = m.replace(/️/g, '');
    const e = MAP[key]; if (!e) { if (key !== '©') missing.add(key); return m; }
    const [n, c] = Array.isArray(e) ? e : [e, ''];
    return n === 'none' ? '' : `<svg class="sv ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
  })).join('');
}
module.exports = { sprite, iconize, missing };
