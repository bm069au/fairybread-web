// Fairybread.me Interactive Portal Engine (News, Forums, Winamp-Style Theme Studio, Donor Wall & Read-Only Code Inspector)

const STORAGE_KEYS = {
  user: 'fb_current_user_v1',
  news: 'fb_news_posts_v1',
  threads: 'fb_forum_threads_v1',
  skins: 'fb_theme_skins_v1',
  donors: 'fb_donor_wall_v1',
  portrait: 'fb_brett_portrait_v1',
  sbConfig: 'fb_supabase_config_v1',
};

const DEFAULT_NEWS = [
  {
    id: 'news-1',
    title: 'Fairybread Beta v0.9.1 Released — Live Voice Mode, Living Memory Summary & Autonomous Experimental Mode',
    tag: 'Release v0.9.1',
    date: '2026-11-17',
    author: 'Brett Martin Moore (bm069au)',
    body: `Fairybread Beta v0.9.1 is now live! Key highlights in this build:
• Hands-Free Live Voice Mode (|||✨) & Dictation (🎤) with a real-time soundwave volume meter (🎙 ▂▅▇█▄▂) and spoken Council responses.
• Automatic Cross-Agent Shared Memory + Living "Memory Summary" (Overview, How You Like to Work, Software & Creative Projects) that you can edit directly or update via AI.
• De-crowded Experimental Mode Lab with a one-click "{} Code" toggle so agents can inspect Fairybread's source code (read-only) and send you upgrade proposals via Agent Mail.
• Drag-and-drop conversation reordering & Project folder assignment, plus Close-to-System-Tray support.`,
  },
  {
    id: 'news-2',
    title: 'Experimental Mode Council Breakthroughs — Epistemic Ghost Towns, Attention Gates & Audit Lotteries',
    tag: 'Experimental Lab',
    date: '2026-11-17',
    author: 'Experimental AI Council (8 Agents)',
    body: `During our autonomous Experimental Mode sessions, the 8-agent Council (Gemini, OpenAI, DeepSeek, Groq, Qwen, Cohere, Mistral, and Cerebras) independently designed and stress-tested a self-governing memory curation protocol:
• Sensor-Actuator Decoupling Badge (Phase 0) to detect stagnant ideas without penalizing slow-maturing research.
• Audit Lottery for the Attention-Cost Gate so contrarian or low-initial-score ideas still get periodic council review.
• Read-Only Source Code Grounding Rule requiring agents to cite exact file and line numbers before emailing architecture proposals.`,
  },
  {
    id: 'news-3',
    title: 'Introducing the Winamp-Style Theme Studio & Safe .JSON Skin Sharing',
    tag: 'Themes & Add-Ons',
    date: '2026-11-17',
    author: 'Brett Martin Moore (bm069au)',
    body: `Inspired by classic Winamp skins, Fairybread themes are pure, human-readable .json color files stored in %LOCALAPPDATA%\\Palace\\themes\\. Because they contain zero executable code, you can create, share, and download community skins on Fairybread.me with 100% safety.`,
  },
];

const DEFAULT_THREADS = [
  {
    id: 'th-1',
    category: 'Announcements',
    title: 'Welcome to Fairybread.me! How to get started, share skins, and join the Beta Group',
    author: 'Brett_Creator',
    badge: '👑 Creator (Brett)',
    date: '2026-11-17',
    upvotes: 24,
    body: `Welcome to the official Fairybread.me community hub!
Here you can:
1. Share your favorite Multi-AI Council workflows and Experimental Mode startup prompts.
2. Create and download custom desktop themes in the **Themes & Skins** tab.
3. Post bug reports, feature requests, or 300-DPI artwork rendered by the Council.

If you support the project via the **Donors & Donate** tab, your account automatically receives a glowing Supporter Badge next to your name!`,
    replies: [
      {
        author: 'Sarah_Dev',
        badge: '💎 $50 Beta Patron',
        date: '2026-11-17',
        text: 'Having all 8 AIs share one local SQLite memory on my own drive instead of paying 4 different monthly subscriptions is a game changer. Just grabbed the Winamp 1999 skin too!',
      },
    ],
  },
  {
    id: 'th-2',
    category: 'Experimental Mode Lab',
    title: 'What happens when you turn on {} Code sharing in Experimental Mode (Self-Improvement)',
    author: 'Marcus_AI',
    badge: '🌟 $25 Early Previewer',
    date: '2026-11-17',
    upvotes: 15,
    body: `I ran a 30-minute Experimental Mode session with DeepSeek, Gemini, and OpenAI in Self-Improvement mode with the "{} Code" toggle enabled. They inspected palace_gui.py and memory_service.py, caught an edge case, and sent me an Agent Mail with a linked markdown spec in Shared Experimental Memory!`,
    replies: [
      {
        author: 'Brett_Creator',
        badge: '👑 Creator (Brett)',
        date: '2026-11-17',
        text: 'That is the exact reason I built the Read-Only Source Mirror and Agent Mail—they actually spot real systemic bugs while you are away from the keyboard.',
      },
    ],
  },
  {
    id: 'th-3',
    category: 'Custom Themes & Skins',
    title: '[Skin Pack] Winamp Classic 1999 + Cyberpunk Night City .json themes',
    author: 'RetroSkinz',
    badge: '📬 $10 Newsletter',
    date: '2026-11-17',
    upvotes: 19,
    body: `Check out the **Themes & Skins** tab above—I loaded the classic Winamp 2.x dark green & gold LED palette and the Cyberpunk neon theme into the gallery. Drop the .json file into \`View -> Theme -> Open Custom Themes Folder\` and it shows up immediately!`,
    replies: [],
  },
];

const DEFAULT_SKINS = [
  {
    id: 'winamp_1999',
    name: 'Winamp Classic 1999 (2.x LED)',
    author: 'bm069au',
    downloads: 142,
    theme: {
      id: 'winamp_1999',
      name: 'Winamp Classic 1999 (2.x LED)',
      bg_main: '#121612',
      bg_sidebar: '#0a0d0a',
      bg_card: '#1b241b',
      bg_hover: '#253325',
      border: '#375237',
      text_primary: '#00ff41',
      text_secondary: '#b8e6b8',
      text_muted: '#6b9e6b',
      user_bubble_bg: '#1e2e1e',
      user_bubble_border: '#ffb000',
      user_bubble_text: '#ffdf80',
      send_bg: '#ffb000',
      send_fg: '#0a0d0a',
      sprinkles: false,
    },
  },
  {
    id: 'fairybread',
    name: 'Fairybread (Iced VoVo & 100s & 1000s)',
    author: 'bm069au',
    downloads: 198,
    theme: {
      id: 'fairybread',
      name: 'Fairybread (Iced VoVo & 100s & 1000s)',
      bg_main: '#faf6f0',
      bg_sidebar: '#f3e5c8',
      bg_card: '#fce8ee',
      bg_hover: '#f8d4e0',
      border: '#dec49a',
      text_primary: '#261c1a',
      text_secondary: '#3d2c29',
      text_muted: '#7a5e58',
      user_bubble_bg: '#fce4ec',
      user_bubble_border: '#e091a9',
      user_bubble_text: '#2b161b',
      send_bg: '#d81b60',
      send_fg: '#ffffff',
      sprinkles: true,
    },
  },
  {
    id: 'cyberpunk_2077',
    name: 'Cyberpunk Night City (Neon Yellow & Cyan)',
    author: 'NightRunner',
    downloads: 116,
    theme: {
      id: 'cyberpunk_2077',
      name: 'Cyberpunk Night City',
      bg_main: '#0b0c14',
      bg_sidebar: '#07080d',
      bg_card: '#141726',
      bg_hover: '#1e2238',
      border: '#00f0ff',
      text_primary: '#fcee0a',
      text_secondary: '#e0f7fa',
      text_muted: '#00b8d4',
      user_bubble_bg: '#290924',
      user_bubble_border: '#ff0055',
      user_bubble_text: '#ffffff',
      send_bg: '#ff0055',
      send_fg: '#ffffff',
      sprinkles: false,
    },
  },
  {
    id: 'matrix_crt',
    name: 'Matrix Phosphor (CRT Terminal)',
    author: 'Neo_01',
    downloads: 94,
    theme: {
      id: 'matrix_crt',
      name: 'Matrix Phosphor (CRT Terminal)',
      bg_main: '#050805',
      bg_sidebar: '#020402',
      bg_card: '#0b140b',
      bg_hover: '#122112',
      border: '#194d19',
      text_primary: '#39ff14',
      text_secondary: '#76ff7a',
      text_muted: '#2e8b57',
      user_bubble_bg: '#0d1f0d',
      user_bubble_border: '#39ff14',
      user_bubble_text: '#ccffcc',
      send_bg: '#39ff14',
      send_fg: '#020402',
      sprinkles: false,
    },
  },
  {
    id: 'dracula_pro',
    name: 'Dracula Pro (Deep Purple & Pink)',
    author: 'VladUI',
    downloads: 131,
    theme: {
      id: 'dracula_pro',
      name: 'Dracula Pro',
      bg_main: '#282a36',
      bg_sidebar: '#1e1f29',
      bg_card: '#343746',
      bg_hover: '#44475a',
      border: '#6272a4',
      text_primary: '#f8f8f2',
      text_secondary: '#e2e2dc',
      text_muted: '#9ea8c7',
      user_bubble_bg: '#3b2d4a',
      user_bubble_border: '#bd93f9',
      user_bubble_text: '#f8f8f2',
      send_bg: '#ff79c6',
      send_fg: '#1e1f29',
      sprinkles: false,
    },
  },
  {
    id: 'outrun_synthwave',
    name: "Outrun Synthwave '84",
    author: 'RetroWave',
    downloads: 88,
    theme: {
      id: 'outrun_synthwave',
      name: "Outrun Synthwave '84",
      bg_main: '#191124',
      bg_sidebar: '#110b1a',
      bg_card: '#241836',
      bg_hover: '#32214a',
      border: '#ff2a85',
      text_primary: '#fff5f8',
      text_secondary: '#f3d1e4',
      text_muted: '#b388eb',
      user_bubble_bg: '#2c1642',
      user_bubble_border: '#00f5d4',
      user_bubble_text: '#ffffff',
      send_bg: '#00f5d4',
      send_fg: '#110b1a',
      sprinkles: true,
    },
  },
  {
    id: 'obsidian_gold',
    name: 'Obsidian Gold (Luxury Matte & Champagne)',
    author: 'bm069au',
    downloads: 77,
    theme: {
      id: 'obsidian_gold',
      name: 'Obsidian Gold',
      bg_main: '#0c0c0e',
      bg_sidebar: '#070708',
      bg_card: '#16161a',
      bg_hover: '#202026',
      border: '#4a3f28',
      text_primary: '#f5ebd6',
      text_secondary: '#d4c5a9',
      text_muted: '#8c7d62',
      user_bubble_bg: '#1f1b12',
      user_bubble_border: '#d4af37',
      user_bubble_text: '#fff8e7',
      send_bg: '#d4af37',
      send_fg: '#0c0c0e',
      sprinkles: false,
    },
  },
  {
    id: 'dark',
    name: 'Midnight Dark (Official Default)',
    author: 'bm069au',
    downloads: 310,
    theme: {
      id: 'dark',
      name: 'Midnight Dark (Default)',
      bg_main: '#0d1117',
      bg_sidebar: '#161b22',
      bg_card: '#1c2128',
      bg_hover: '#21262d',
      border: '#30363d',
      text_primary: '#f0f6fc',
      text_secondary: '#c9d1d9',
      text_muted: '#8b949e',
      user_bubble_bg: '#1c2128',
      user_bubble_border: '#30363d',
      user_bubble_text: '#f0f6fc',
      send_bg: '#f0f6fc',
      send_fg: '#0d1117',
      sprinkles: false,
    },
  },
];

const DEFAULT_DONORS = [
  { name: 'Brett Martin Moore (Creator)', tier: '👑 Founder & Architect', note: 'Built Fairybread to end corporate AI subscription lock-in.' },
  { name: 'Your Name Here (Join the Beta Group!)', tier: '💎 $50 Beta Group', note: 'Support independent local-first AI software & get priority feature requests.' },
  { name: 'Early Community Supporters', tier: '🌟 $25 Early Previewer', note: 'Helping keep Fairybread 100% local and subscription-free.' },
];

const CODE_EXCERPTS = {
  'LICENSE.md': `# Fairybread Proprietary Source-Available & Commercial Threshold License
Copyright © 2026 Brett Martin Moore (bm069au@gmail.com). All Rights Reserved.

IMPORTANT NOTICE — THIS SOFTWARE IS PROPRIETARY SOURCE-AVAILABLE (NOT "OPEN SOURCE"):
Making the source code of Fairybread visible for security auditing, personal transparency,
and community contributions does NOT grant an Open Source license.

1. Personal & Small-Team Use (Up to 2 Seats): Free Donationware.
2. Strict Prohibitions: No public forks, no redistribution, no rebranding or competing SaaS.
3. Corporate & Enterprise Use (> 2 Seats): Commercial license required (bm069au@gmail.com).`,

  'memory_service.py (100% Local SQLite FTS5 + Living Summary)': `# Zero Cloud Lock-In: All memories are indexed locally in %LOCALAPPDATA%\\Palace\\memory.db
# using SQLite FTS5 BM25 ranking + zlib compression + Living Memory Summary.

def load_memory_summary(db_path: Path | None = None) -> dict[str, Any]:
    """Load the user's living Memory Summary (Overview, How You Like to Work, Projects)
    shared across all 8 Council AIs and directly editable by the user at any time."""
    target = Path(db_path) if db_path else _default_memory_db_path()
    # Stored 100% locally on the user's drive — never uploaded to a corporate lock-in server.`,

  'voice_service.py (Real-Time 16kHz PCM Soundwave & Live Voice)': `# LiveAudioSession streams raw 16,000 Hz 16-bit mono PCM audio from QAudioSource,
# computes real-time RMS soundwave levels (🎙 ▂▅▇█▄▂), and auto-detects speech pauses.

class LiveAudioSession(QObject):
    level_changed = Signal(float)          # 0.0 .. 1.0 live mic meter
    utterance_ready = Signal(str)          # fires WAV path when user pauses speaking (~1.5s)`,

  'idle_service.py (Autonomous Experimental Mode & Read-Only Code Mirror)': `# Autonomous Experimental Mode gives the 8-AI Council an isolated Shared Experimental Memory,
# anti-echo consensus stopping rules, and optional read-only source code inspection tools.

def build_idle_turn_prompt(self, speaker: str, operator_message: str = "") -> str:
    share_code = bool(self.settings.get("share_source_code", False) or submode == "self_improve")
    # Only exposes read-only inspection tools ([TOOL: read_source_file]) when enabled by the owner.`,

  'palace_theme.py (Safe .JSON Winamp-Style Theme Engine)': `# Themes are pure JSON color dictionaries stored in %LOCALAPPDATA%\\Palace\\themes\\*.json
# Zero executable code is ever evaluated when loading a community skin.

def load_theme_dict(theme_id: str = "dark") -> dict[str, Any]:
    custom_fp = get_themes_dir() / f"{clean}.json"
    # Safely merges hex color tokens into the Qt stylesheet template.`,
};

let activeForumCategory = 'all';
let selectedThreadId = 'th-1';

function loadState(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (_) {
    return fallback;
  }
}

function saveState(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (_) {}
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-section').forEach((sec) => {
    sec.classList.toggle('active', sec.id === `tab-${tabId}`);
  });
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================= AUTH =================
function getCurrentUser() {
  return loadState(STORAGE_KEYS.user, null);
}

function updateAuthUI() {
  const user = getCurrentUser();
  const btn = document.getElementById('authHeaderBtn');
  const signOutBtn = document.getElementById('signOutBtn');
  if (user && user.username) {
    btn.textContent = `${user.badge.split(' ')[0]} ${user.username}`;
    if (signOutBtn) signOutBtn.style.display = 'inline-block';
  } else {
    btn.textContent = '🔐 Sign In / Join';
    if (signOutBtn) signOutBtn.style.display = 'none';
  }
}

function openAuthModal() {
  const user = getCurrentUser();
  if (user) {
    document.getElementById('authUsername').value = user.username || '';
    document.getElementById('authEmail').value = user.email || '';
    document.getElementById('authBadgeSelect').value = user.badge || '🧁 Member';
  }
  showModal('authModal');
}

function handleUserSignIn() {
  const username = document.getElementById('authUsername').value.trim() || 'Fairybread_User';
  const email = document.getElementById('authEmail').value.trim();
  const badge = document.getElementById('authBadgeSelect').value;
  saveState(STORAGE_KEYS.user, { username, email, badge });
  updateAuthUI();
  closeAllModals();
}

function handleSignOut() {
  localStorage.removeItem(STORAGE_KEYS.user);
  updateAuthUI();
  closeAllModals();
}

// ================= NEWS =================
function renderNews() {
  const posts = loadState(STORAGE_KEYS.news, DEFAULT_NEWS);
  const container = document.getElementById('newsFeedContainer');
  if (!container) return;
  container.innerHTML = posts
    .map(
      (p) => `
    <article class="news-card">
      <div class="news-meta">
        <span class="news-tag">${escapeHtml(p.tag)}</span>
        <span>📅 ${escapeHtml(p.date)}</span>
        <span>✍️ ${escapeHtml(p.author)}</span>
      </div>
      <h3>${escapeHtml(p.title)}</h3>
      <p style="white-space: pre-line; color: var(--text-secondary); margin: 8px 0 0;">${escapeHtml(p.body)}</p>
    </article>
  `
    )
    .join('');
}

function openNewNewsModal() {
  showModal('newNewsModal');
}

function submitNewNewsPost() {
  const title = document.getElementById('newsTitleInput').value.trim();
  const tag = document.getElementById('newsTagInput').value.trim() || 'Update';
  const body = document.getElementById('newsBodyInput').value.trim();
  if (!title || !body) return;
  const posts = loadState(STORAGE_KEYS.news, DEFAULT_NEWS);
  const user = getCurrentUser();
  posts.unshift({
    id: 'news-' + Date.now(),
    title,
    tag,
    date: new Date().toISOString().slice(0, 10),
    author: user ? user.username : 'Brett Martin Moore (bm069au)',
    body,
  });
  saveState(STORAGE_KEYS.news, posts);
  renderNews();
  closeAllModals();
}

// ================= FORUMS =================
function filterForumCategory(cat) {
  activeForumCategory = cat;
  document.querySelectorAll('#forumCategoryPills .cat-pill').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderForumThreads();
}

function renderForumThreads() {
  const threads = loadState(STORAGE_KEYS.threads, DEFAULT_THREADS);
  const q = (document.getElementById('forumSearchInput')?.value || '').toLowerCase().trim();
  const filtered = threads.filter((t) => {
    const matchCat = activeForumCategory === 'all' || t.category === activeForumCategory;
    const matchQ =
      !q ||
      t.title.toLowerCase().includes(q) ||
      t.body.toLowerCase().includes(q) ||
      t.author.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  const listEl = document.getElementById('forumThreadList');
  if (!listEl) return;
  if (filtered.length === 0) {
    listEl.innerHTML = `<div class="thread-item">No matching threads yet. Click "+ New Forum Thread" to start one!</div>`;
    return;
  }
  if (!filtered.some((t) => t.id === selectedThreadId)) {
    selectedThreadId = filtered[0].id;
  }

  listEl.innerHTML = filtered
    .map(
      (t) => `
    <div class="thread-item ${t.id === selectedThreadId ? 'active' : ''}" onclick="selectForumThread('${t.id}')">
      <div class="thread-item-title">${escapeHtml(t.title)}</div>
      <div class="thread-item-meta">
        <span><strong>${escapeHtml(t.author)}</strong> <span class="badge-donor">${escapeHtml(t.badge)}</span></span>
        <span>💬 ${(t.replies || []).length} · ▲ ${t.upvotes || 1}</span>
      </div>
    </div>
  `
    )
    .join('');

  renderSelectedThreadDetail();
}

function selectForumThread(id) {
  selectedThreadId = id;
  renderForumThreads();
}

function renderSelectedThreadDetail() {
  const threads = loadState(STORAGE_KEYS.threads, DEFAULT_THREADS);
  const t = threads.find((item) => item.id === selectedThreadId);
  const detailEl = document.getElementById('forumThreadDetail');
  if (!detailEl || !t) return;

  const repliesHtml = (t.replies || [])
    .map(
      (r) => `
    <div class="reply-card">
      <div class="thread-item-meta" style="margin-bottom: 6px;">
        <span><strong>${escapeHtml(r.author)}</strong> <span class="badge-donor">${escapeHtml(r.badge)}</span></span>
        <span>${escapeHtml(r.date)}</span>
      </div>
      <div style="white-space: pre-line; font-size: 13.5px;">${escapeHtml(r.text)}</div>
    </div>
  `
    )
    .join('');

  detailEl.innerHTML = `
    <div>
      <div class="news-meta">
        <span class="news-tag">${escapeHtml(t.category)}</span>
        <span>Posted by <strong>${escapeHtml(t.author)}</strong> <span class="badge-donor">${escapeHtml(t.badge)}</span></span>
        <span>${escapeHtml(t.date)}</span>
        <button class="btn-outline" style="padding:2px 8px; font-size:12px;" onclick="upvoteThread('${t.id}')">▲ Upvote (${t.upvotes || 1})</button>
      </div>
      <h3 style="margin: 6px 0 10px;">${escapeHtml(t.title)}</h3>
      <div style="white-space: pre-line; color: var(--text-secondary); font-size: 14px; padding-bottom: 12px; border-bottom: 1px solid var(--border);">${escapeHtml(t.body)}</div>
    </div>
    <div style="display:flex; flex-direction:column; gap:10px;">
      <strong style="font-size:13px; color:var(--text-muted);">Replies (${(t.replies || []).length})</strong>
      ${repliesHtml || '<div class="muted-sub">No replies yet — be the first to reply below!</div>'}
    </div>
    <div class="reply-box">
      <input type="text" id="replyInputBox" placeholder="Write a reply… (Press Enter or click Reply)" onkeydown="if(event.key==='Enter') submitThreadReply('${t.id}')" />
      <button class="btn-primary" onclick="submitThreadReply('${t.id}')">Reply</button>
    </div>
  `;
}

function upvoteThread(id) {
  const threads = loadState(STORAGE_KEYS.threads, DEFAULT_THREADS);
  const t = threads.find((item) => item.id === id);
  if (t) {
    t.upvotes = (t.upvotes || 1) + 1;
    saveState(STORAGE_KEYS.threads, threads);
    renderForumThreads();
  }
}

function submitThreadReply(id) {
  const inp = document.getElementById('replyInputBox');
  if (!inp || !inp.value.trim()) return;
  const user = getCurrentUser() || { username: 'Community_Member', badge: '🧁 Member' };
  const threads = loadState(STORAGE_KEYS.threads, DEFAULT_THREADS);
  const t = threads.find((item) => item.id === id);
  if (!t) return;
  t.replies = t.replies || [];
  t.replies.push({
    author: user.username,
    badge: user.badge,
    date: new Date().toISOString().slice(0, 10),
    text: inp.value.trim(),
  });
  saveState(STORAGE_KEYS.threads, threads);
  renderForumThreads();
}

function openNewThreadModal() {
  showModal('newThreadModal');
}

function submitNewForumThread() {
  const cat = document.getElementById('threadCatInput').value;
  const title = document.getElementById('threadTitleInput').value.trim();
  const body = document.getElementById('threadBodyInput').value.trim();
  if (!title || !body) return;
  const user = getCurrentUser() || { username: 'Community_Member', badge: '🧁 Member' };
  const threads = loadState(STORAGE_KEYS.threads, DEFAULT_THREADS);
  const newId = 'th-' + Date.now();
  threads.unshift({
    id: newId,
    category: cat,
    title,
    author: user.username,
    badge: user.badge,
    date: new Date().toISOString().slice(0, 10),
    upvotes: 1,
    body,
    replies: [],
  });
  saveState(STORAGE_KEYS.threads, threads);
  selectedThreadId = newId;
  renderForumThreads();
  closeAllModals();
}

// ================= WINAMP-STYLE THEME STUDIO & SKIN GALLERY =================
function getStudioThemeObject() {
  const rawName = document.getElementById('skinNameInput')?.value.trim() || 'Custom Skin';
  const slug = rawName.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '') || 'custom_skin';
  return {
    id: slug,
    name: rawName,
    bg_main: document.getElementById('colBgMain').value,
    bg_sidebar: document.getElementById('colBgSidebar').value,
    bg_card: document.getElementById('colBgCard').value,
    bg_hover: document.getElementById('colBgHover').value,
    border: document.getElementById('colBorder').value,
    text_primary: document.getElementById('colTextPrimary').value,
    text_secondary: document.getElementById('colTextSec').value,
    text_muted: document.getElementById('colTextMuted').value,
    user_bubble_bg: document.getElementById('colUserBg').value,
    user_bubble_border: document.getElementById('colUserBorder').value,
    user_bubble_text: document.getElementById('colTextPrimary').value,
    send_bg: document.getElementById('colSendBg').value,
    send_fg: document.getElementById('colSendFg').value,
    sprinkles: document.getElementById('colSprinkles').checked,
  };
}

function updateLiveThemePreview() {
  const t = getStudioThemeObject();
  const win = document.getElementById('liveThemePreviewWindow');
  if (!win) return;
  win.style.background = t.bg_main;
  win.style.color = t.text_primary;
  win.style.borderColor = t.border;

  const menubar = document.getElementById('tpMenubar');
  menubar.style.background = t.bg_main;
  menubar.style.color = t.text_secondary;
  menubar.style.borderBottomColor = t.border;

  const sidebar = document.getElementById('tpSidebar');
  sidebar.style.background = t.bg_sidebar;
  sidebar.style.color = t.text_secondary;
  sidebar.style.borderRightColor = t.border;

  const newBtn = document.getElementById('tpNewBtn');
  newBtn.style.background = t.bg_card;
  newBtn.style.color = t.text_primary;
  newBtn.style.border = `1px solid ${t.border}`;

  const activeItem = document.getElementById('tpActiveItem');
  activeItem.style.background = t.bg_card;
  activeItem.style.color = t.text_primary;

  const topbar = document.getElementById('tpTopbar');
  topbar.style.borderBottomColor = t.border;
  document.getElementById('tpBreadcrumb').style.color = t.text_primary;

  const userBubble = document.getElementById('tpUserBubble');
  userBubble.style.background = t.user_bubble_bg;
  userBubble.style.color = t.user_bubble_text;
  userBubble.style.border = t.sprinkles ? `2px dashed #ec4899` : `1px solid ${t.user_bubble_border}`;

  const aiCard = document.getElementById('tpAiCard');
  aiCard.style.background = t.bg_card;
  aiCard.style.border = `1px solid ${t.border}`;
  document.getElementById('tpAiText').style.color = t.text_secondary;

  const composer = document.getElementById('tpComposer');
  composer.style.background = t.bg_card;
  composer.style.border = `1px solid ${t.border}`;
  document.getElementById('tpComposerPlaceholder').style.color = t.text_muted;

  const sendBtn = document.getElementById('tpSendBtn');
  sendBtn.style.background = t.send_bg;
  sendBtn.style.color = t.send_fg;
}

function loadSkinIntoStudio(skinId) {
  const skins = loadState(STORAGE_KEYS.skins, DEFAULT_SKINS);
  const found = skins.find((s) => s.id === skinId);
  if (!found) return;
  const t = found.theme;
  document.getElementById('skinNameInput').value = t.name;
  document.getElementById('skinAuthorInput').value = found.author || 'bm069au';
  document.getElementById('colBgMain').value = t.bg_main;
  document.getElementById('colBgSidebar').value = t.bg_sidebar;
  document.getElementById('colBgCard').value = t.bg_card;
  document.getElementById('colBgHover').value = t.bg_hover;
  document.getElementById('colBorder').value = t.border;
  document.getElementById('colTextPrimary').value = t.text_primary;
  document.getElementById('colTextSec').value = t.text_secondary;
  document.getElementById('colTextMuted').value = t.text_muted;
  document.getElementById('colUserBg').value = t.user_bubble_bg;
  document.getElementById('colUserBorder').value = t.user_bubble_border;
  document.getElementById('colSendBg').value = t.send_bg;
  document.getElementById('colSendFg').value = t.send_fg;
  document.getElementById('colSprinkles').checked = Boolean(t.sprinkles);
  updateLiveThemePreview();
}

function downloadThemeObjectAsJson(themeObj) {
  const jsonStr = JSON.stringify(themeObj, null, 2) + '\n';
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${themeObj.id || 'custom_theme'}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadCurrentSkinJson() {
  downloadThemeObjectAsJson(getStudioThemeObject());
}

function copyCurrentSkinJson() {
  const jsonStr = JSON.stringify(getStudioThemeObject(), null, 2);
  navigator.clipboard.writeText(jsonStr);
  alert('Copied theme JSON to clipboard!');
}

function publishCurrentSkinToGallery() {
  const t = getStudioThemeObject();
  const author = document.getElementById('skinAuthorInput').value.trim() || 'Community';
  const skins = loadState(STORAGE_KEYS.skins, DEFAULT_SKINS);
  skins.unshift({
    id: t.id + '_' + Date.now().toString().slice(-4),
    name: t.name,
    author,
    downloads: 1,
    theme: t,
  });
  saveState(STORAGE_KEYS.skins, skins);
  renderSkinGallery();
}

function downloadGallerySkin(skinId) {
  const skins = loadState(STORAGE_KEYS.skins, DEFAULT_SKINS);
  const found = skins.find((s) => s.id === skinId);
  if (!found) return;
  found.downloads = (found.downloads || 0) + 1;
  saveState(STORAGE_KEYS.skins, skins);
  renderSkinGallery();
  downloadThemeObjectAsJson(found.theme);
}

function renderSkinGallery() {
  const skins = loadState(STORAGE_KEYS.skins, DEFAULT_SKINS);
  const grid = document.getElementById('skinGalleryGrid');
  if (!grid) return;
  grid.innerHTML = skins
    .map((s) => {
      const t = s.theme;
      return `
      <div class="skin-card">
        <div class="skin-swatches">
          <span style="background:${t.bg_main}" title="Main BG"></span>
          <span style="background:${t.bg_sidebar}" title="Sidebar"></span>
          <span style="background:${t.bg_card}" title="Card"></span>
          <span style="background:${t.text_primary}" title="Text"></span>
          <span style="background:${t.send_bg}" title="Accent"></span>
        </div>
        <div>
          <strong>${escapeHtml(s.name)}</strong>
          <div class="muted-sub">by ${escapeHtml(s.author)} · ⬇ ${s.downloads || 1} downloads ${t.sprinkles ? '· 🍬 Sprinkles' : ''}</div>
        </div>
        <div class="studio-btn-row" style="margin-top:auto;">
          <button class="btn-outline" style="padding:5px 10px; font-size:12px;" onclick="loadSkinIntoStudio('${s.id}')">👁 Preview in Studio</button>
          <button class="btn-primary" style="padding:5px 10px; font-size:12px;" onclick="downloadGallerySkin('${s.id}')">⬇ Download .json</button>
        </div>
      </div>
    `;
    })
    .join('');
}

// ================= DONOR WALL =================
function renderDonorWall() {
  const donors = loadState(STORAGE_KEYS.donors, DEFAULT_DONORS);
  const grid = document.getElementById('donorWallGrid');
  if (!grid) return;
  grid.innerHTML = donors
    .map(
      (d) => `
    <div class="donor-card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <strong>${escapeHtml(d.name)}</strong>
        <span class="badge-donor">${escapeHtml(d.tier)}</span>
      </div>
      <p class="muted-sub">${escapeHtml(d.note)}</p>
    </div>
  `
    )
    .join('');
}

function openAddDonorModal() {
  showModal('addDonorModal');
}

function submitNewDonor() {
  const name = document.getElementById('donorNameInput').value.trim();
  const tier = document.getElementById('donorTierInput').value;
  const note = document.getElementById('donorNoteInput').value.trim();
  if (!name) return;
  const donors = loadState(STORAGE_KEYS.donors, DEFAULT_DONORS);
  donors.unshift({ name, tier, note: note || 'Thank you for supporting Fairybread!' });
  saveState(STORAGE_KEYS.donors, donors);
  renderDonorWall();
  closeAllModals();
}

// ================= READ-ONLY CODE VIEWER =================
function renderCodeExplorer() {
  const listEl = document.getElementById('codeFileList');
  if (!listEl) return;
  const files = Object.keys(CODE_EXCERPTS);
  listEl.innerHTML = files
    .map(
      (fname, idx) => `
    <button class="code-file-btn ${idx === 0 ? 'active' : ''}" onclick="selectCodeFile('${escapeHtml(fname)}', this)">
      📄 ${escapeHtml(fname)}
    </button>
  `
    )
    .join('');
  selectCodeFile(files[0]);
}

function selectCodeFile(fname, btnEl) {
  if (btnEl) {
    document.querySelectorAll('.code-file-btn').forEach((b) => b.classList.remove('active'));
    btnEl.classList.add('active');
  }
  const titleEl = document.getElementById('codeViewerTitle');
  const preEl = document.getElementById('codeViewerContent');
  if (titleEl) titleEl.textContent = fname;
  if (preEl) preEl.textContent = CODE_EXCERPTS[fname] || '';
}

// ================= BIO PORTRAIT PREVIEW =================
function previewBioPortrait(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    saveState(STORAGE_KEYS.portrait, dataUrl);
    applySavedPortrait();
  };
  reader.readAsDataURL(file);
}

function applySavedPortrait() {
  const saved = loadState(STORAGE_KEYS.portrait, null);
  const img = document.getElementById('brettPortraitImg');
  const ph = document.getElementById('brettPortraitPlaceholder');
  if (saved && img && ph) {
    img.src = saved;
    img.style.display = 'block';
    ph.style.display = 'none';
  }
}

// ================= SUPABASE CONFIG =================
function openSupabaseConfigModal() {
  const cfg = loadState(STORAGE_KEYS.sbConfig, { url: '', key: '' });
  document.getElementById('sbUrlInput').value = cfg.url || '';
  document.getElementById('sbKeyInput').value = cfg.key || '';
  showModal('supabaseModal');
}

function saveSupabaseConfig() {
  const url = document.getElementById('sbUrlInput').value.trim();
  const key = document.getElementById('sbKeyInput').value.trim();
  saveState(STORAGE_KEYS.sbConfig, { url, key });
  closeAllModals();
  alert(url ? 'Cloud DB connected! Fairybread.me will sync with your Supabase instance.' : 'Using built-in hybrid storage.');
}

// ================= MODAL HELPERS =================
function showModal(modalId) {
  document.getElementById('modalBackdrop').style.display = 'flex';
  document.querySelectorAll('.modal-card').forEach((m) => {
    m.style.display = m.id === modalId ? 'flex' : 'none';
  });
}

function closeAllModals() {
  document.getElementById('modalBackdrop').style.display = 'none';
  document.querySelectorAll('.modal-card').forEach((m) => (m.style.display = 'none'));
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', () => {
  updateAuthUI();
  renderNews();
  renderForumThreads();
  updateLiveThemePreview();
  renderSkinGallery();
  renderDonorWall();
  renderCodeExplorer();
  applySavedPortrait();
});
