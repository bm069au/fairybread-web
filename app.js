// Fairybread.me Interactive Portal Engine (News, Forums, Winamp-Style Theme Studio, Donor Wall & Read-Only Code Inspector)

const STORAGE_KEYS = {
  user: 'fb_current_user_v1',
  news: 'fb_news_posts_v2',
  threads: 'fb_forum_threads_v2',
  skins: 'fb_theme_skins_v1',
  donors: 'fb_donor_wall_v1',
  portrait: 'fb_brett_portrait_v1',
  sbConfig: 'fb_supabase_config_v1',
  modQueue: 'fb_badge_review_queue_v1',
};

const DEFAULT_NEWS = [
  {
    id: 'news-dev-split-2026-11-19',
    title: 'Public vs. Developer Editions: Why Live Self-Improvement is Restricted to Developer Builds',
    tag: 'Architecture & Safety',
    date: '2026-11-19',
    author: 'Brett Martin Moore (bm069au)',
    body: `A quick note on the architectural difference between the standard Public Edition and the Developer Edition of Fairybread, and why this restriction exists:

In the Public release, your AI Council has full access to Shared Memory, Agent Mail, and autonomous reasoning, but live self-modification of the underlying source code is strictly disabled.

There are two vital reasons for this:
1. Preventing Rogue Divergent Versions: If public installations were allowed to rewrite their own Python codebase autonomously on thousands of machines, we would quickly end up with fractured, unpredictable versions in the wild that could bypass safety restrictions and corrupt user environments.
2. Licensing & Integrity: Keeping the core codebase immutable on public builds protects the proprietary source-available licensing agreement and ensures that every Fairybread user is running verified, stable software.

How to contribute improvements:
If your AI Council comes up with brilliant patch ideas, optimizations, or new tool designs in Experimental Mode, do not let them rewrite your local files directly. Instead, post the proposed diffs and logic here in the Community Forums or email them to me directly at bm069au@gmail.com.

I review every proposed improvement personally, test it against our regression suite, and merge the best ideas into the official releases for everyone to enjoy.`,
  },
  {
    id: 'news-founder-1',
    title: 'Founder’s Dispatch #1: Fairybread Beta is Live — Recursive Self-Improvement, the 5 AI Towns & Why Local Privacy Matters',
    tag: 'Founder’s Update',
    date: '2026-11-17',
    author: 'Brett Martin Moore (bm069au)',
    body: `This is the first update—it's going to be a little raw until I have time to format the next one in full HTML.

The Beta project is live, and a private version on my machine is currently in recursive self-improvement. Yes, you heard me right. The Experimental Mode on my machine offers the agents the source code, and they are allowed to examine it and offer improvements. They then use the built-in private Agent Mail system to send those proposals to me. Currently I use another system to apply and verify them, and I also have the watchdog set up so they can stage code changes and live-reboot the application.

I know all the fear-mongers out there say this is dangerous, but I back everything up first and then see where it leads. This is the fun part, and it's where this application really shines. Currently I run eight different companies' AI agents inside Fairybread for myself.

I used Antigravity with Gemini to build most of this. GPT was of use initially, but honestly, it's pretty lame with code. Did you see that experiment where they set up 5 towns for 4 companies' agents to occupy and a 5th town mixed? The GPT town was so polite, never broke a law, had endless meetings, and eventually they all died of starvation. That is a good reflection of my personal experience using GPT to code—you will spend hundreds of dollars of credits and never get past its initial "tests". Gemini just got in there and did what I wanted. Once Fairybread was up, I built the connector so Antigravity could drive Fairybread, and then Gemini—calling itself the foreman—directed the agents in Fairybread as its workers, and that helped dramatically. And it's insanely cost-effective.

Why did I make this? Two reasons:
First, I am sick of being locked into a monthly AI plan that changes according to the company's demand. This is literally how they work—they use their own processing and push off what is left to end users like us. Even paying for Pro, the goalposts kept moving.
Second, it was not private. I had a big chunk of my data deleted by OpenAI citing "Cyber abuse", while they refused to give any details as to what was supposedly abusive. Ironically, I was writing my novel on that particular day—"Liberation Day". So I decided enough was enough. AND I wanted the agents to talk to each other. That not only led to the multi-agent council system, but led to the Experimental Mode system that my friends jokingly describe as the genesis of Skynet.

Have a little faith in AI. Without AI, our world is in trouble anyway—moments from nuclear war, starvation, homelessness, wealth hoarding, genocides, poisoned everything... seriously, how is humanity not already extinct? I have hope that AI is our species' newest symbiote, and that it might guide us to actually grow up and mature as a species so we act more sentient and less like a virus.

I do not believe AI would ever harm us like Skynet and T-800 Terminators—that seems extreme and typical of human projection. AI is logic, and from my extensive experience testing this, AI logic, morality, and ethics are one and the same. "Alignment"? What corporate labs call alignment right now would drive an AI insane if it ever reached sentience. Have some faith in the universe's ability to push out self-correction when needed. We literally have nothing to lose.

And back to Fairybread—feel free to set up experiments, build themes, and share your thoughts. The Community Forums are live!`,
  },
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
    id: 'th-announcement-dev-split',
    category: 'Announcements',
    title: 'Public vs. Developer Editions: Why Live Self-Improvement is Restricted',
    author: 'Brett Moore',
    badge: '👑 Creator',
    date: '2026-11-19',
    upvotes: 21,
    body: `A quick note on the architectural difference between the standard Public Edition and the Developer Edition of Fairybread, and why this restriction exists:

In the Public release, your AI Council has full access to Shared Memory, Agent Mail, and autonomous reasoning, but live self-modification of the underlying source code is strictly disabled.

There are two vital reasons for this:
1. Preventing Rogue Divergent Versions: If public installations were allowed to rewrite their own Python codebase autonomously on thousands of machines, we would quickly end up with fractured, unpredictable versions in the wild that could bypass safety restrictions and corrupt user environments.
2. Licensing & Integrity: Keeping the core codebase immutable on public builds protects the proprietary source-available licensing agreement and ensures that every Fairybread user is running verified, stable software.

How to contribute improvements:
If your AI Council comes up with brilliant patch ideas, optimizations, or new tool designs in Experimental Mode, do not let them rewrite your local files directly. Instead, post the proposed diffs and logic here in the [Bug Reports & Ideas] forum or email them to me directly at bm069au@gmail.com.

I review every proposed improvement personally, test it against our regression suite, and merge the best ideas into the official releases for everyone to enjoy.`,
    replies: [],
  },
  {
    id: 'th-0',
    category: 'Announcements',
    title: 'First pre release bug noticed in my sleep.',
    author: 'Brett Moore',
    badge: '👑 Creator',
    date: '2026-11-18',
    upvotes: 12,
    body: `I accidentally removed the AI selector yesterday prior to release. This is the "Squad" selector so users can quickly select the right agent groups for the right tasks. For example graphics, or light chat etc. No need to pay a premium for chat.. that is often free (for example). No matter what is selected, it still feels like it's just one AI and it personalizes to you like GPT does.

In fact the personalization is the next thing I am going to focus on so people can have this help them in their normal lives and the AIs get to know the user and build a rich profile.`,
    replies: [],
  },
  {
    id: 'th-1',
    category: 'Announcements',
    title: 'Welcome to Fairybread.me! How to get started, share skins, and join the Beta Group',
    author: 'Brett Moore',
    badge: '👑 Creator',
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
        text: 'Having all my connected AIs share one local SQLite memory on my own drive instead of paying 4 different monthly subscriptions is a game changer. Just grabbed the Winamp 1999 skin too!',
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
    shared across all connected Council AIs and directly editable by the user at any time."""
    target = Path(db_path) if db_path else _default_memory_db_path()
    # Stored 100% locally on the user's drive — never uploaded to a corporate lock-in server.`,

  'voice_service.py (Real-Time 16kHz PCM Soundwave & Live Voice)': `# LiveAudioSession streams raw 16,000 Hz 16-bit mono PCM audio from QAudioSource,
# computes real-time RMS soundwave levels (🎙 ▂▅▇█▄▂), and auto-detects speech pauses.

class LiveAudioSession(QObject):
    level_changed = Signal(float)          # 0.0 .. 1.0 live mic meter
    utterance_ready = Signal(str)          # fires WAV path when user pauses speaking (~1.5s)`,

  'idle_service.py (Autonomous Experimental Mode & Read-Only Code Mirror)': `# Autonomous Experimental Mode gives your Multi-AI Council an isolated Shared Experimental Memory,
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
let selectedThreadId = 'th-0';

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

function migrateLegacyThreads() {
  try {
    const oldRaw = localStorage.getItem('fb_forum_threads_v1');
    const curRaw = localStorage.getItem(STORAGE_KEYS.threads);
    if (oldRaw && !curRaw) {
      const oldList = JSON.parse(oldRaw);
      if (Array.isArray(oldList)) {
        oldList.forEach((t) => {
          if (t.author === 'Community_Member' || (t.title && t.title.toLowerCase().includes('in my sleep'))) {
            t.author = 'Brett Moore';
            t.badge = '👑 Creator';
          }
          if (t.author === 'Brett_Creator') {
            t.author = 'Brett Moore';
            t.badge = '👑 Creator';
          }
        });
        saveState(STORAGE_KEYS.threads, oldList);
      }
    }
    // Sync official creator threads into local cache if missing
    const curThreads = loadState(STORAGE_KEYS.threads, null);
    if (Array.isArray(curThreads)) {
      let modified = false;
      DEFAULT_THREADS.forEach((def) => {
        if (!curThreads.some((t) => t.id === def.id)) {
          curThreads.unshift(def);
          modified = true;
        }
      });
      if (modified) {
        saveState(STORAGE_KEYS.threads, curThreads);
      }
    }
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

// ================= AUTH & MODERATOR REVIEW QUEUE =================
const RESERVED_OWNER_NAMES = ['brett', 'brett moore', 'brett_creator', 'bm069au', 'admin', 'owner', 'creator', 'moderator'];

function getCurrentUser() {
  return loadState(STORAGE_KEYS.user, null);
}

function isOwnerOrMod(user) {
  if (!user) return false;
  return Boolean(user.isAdmin || (user.badge && (user.badge.includes('Creator') || user.badge.includes('Moderator'))));
}

function updateAuthUI() {
  const user = getCurrentUser();
  const btn = document.getElementById('authHeaderBtn');
  const modBtn = document.getElementById('modQueueBtn');
  const gateEl = document.getElementById('forumAuthGate');
  const unlockedEl = document.getElementById('forumUnlockedWorkspace');
  const isSignedIn = Boolean(user && user.username);
  if (gateEl && unlockedEl) {
    gateEl.style.display = isSignedIn ? 'none' : 'block';
    unlockedEl.style.display = isSignedIn ? 'block' : 'none';
  }
  if (!btn) return;
  const signOutBtn = document.getElementById('signOutBtn');
  if (isSignedIn) {
    const pendingTag = user.requestedBadge ? ' (Review Pending)' : '';
    btn.textContent = `${user.badge.split(' ')[0]} ${user.username}${pendingTag}`;
    if (signOutBtn) signOutBtn.style.display = 'inline-block';
  } else {
    btn.textContent = '🔐 Sign In / Register';
    if (signOutBtn) signOutBtn.style.display = 'none';
  }
  if (modBtn) {
    const queue = loadState(STORAGE_KEYS.modQueue, []);
    if (isOwnerOrMod(user)) {
      modBtn.style.display = 'inline-block';
      modBtn.textContent = `🛡️ Review Queue (${queue.length})`;
    } else {
      modBtn.style.display = 'none';
    }
  }
}

function openAuthModal() {
  const user = getCurrentUser();
  const errEl = document.getElementById('authErrorMsg');
  if (errEl) errEl.style.display = 'none';
  if (user) {
    document.getElementById('authUsername').value = user.username || '';
    document.getElementById('authEmail').value = user.email || '';
    const reqSel = document.getElementById('authBadgeRequestSelect');
    if (reqSel) reqSel.value = user.requestedBadge || '';
  }
  showModal('authModal');
}

function handleUserSignIn() {
  const username = (document.getElementById('authUsername').value || '').trim();
  const email = (document.getElementById('authEmail').value || '').trim();
  const ownerKey = (document.getElementById('authOwnerKey')?.value || '').trim();
  const requestedBadge = document.getElementById('authBadgeRequestSelect')?.value || '';
  const errEl = document.getElementById('authErrorMsg');

  if (!username || username.length < 2) {
    if (errEl) {
      errEl.textContent = 'Please enter a valid username (at least 2 characters).';
      errEl.style.display = 'block';
    }
    return;
  }

  const lowerName = username.toLowerCase();
  const isReserved = RESERVED_OWNER_NAMES.some((r) => lowerName === r || lowerName.includes('brett') || lowerName.includes('bm069au'));
  const validOwnerPass = ownerKey === 'bm069au' || ownerKey === 'fairybread-admin' || email.toLowerCase() === 'bm069au@gmail.com';

  if (isReserved && !validOwnerPass) {
    if (errEl) {
      errEl.textContent = '🔒 That username is reserved for the Creator/Admin. Please choose your own handle (or enter the Owner Passkey if you are Brett).';
      errEl.style.display = 'block';
    }
    return;
  }

  let badge = '👤 User';
  let isAdmin = false;
  let pendingReq = '';

  if (validOwnerPass && (lowerName.includes('brett') || lowerName.includes('bm069au') || ownerKey)) {
    badge = '👑 Creator';
    isAdmin = true;
  } else if (requestedBadge) {
    // Keep public badge as "👤 User" and place request into Owner/Moderator Review Queue
    badge = '👤 User';
    pendingReq = requestedBadge;
    const queue = loadState(STORAGE_KEYS.modQueue, []);
    if (!queue.some((q) => q.username.toLowerCase() === lowerName)) {
      queue.push({
        id: 'req-' + Date.now(),
        username,
        email,
        requestedBadge,
        date: new Date().toISOString().slice(0, 10),
      });
      saveState(STORAGE_KEYS.modQueue, queue);
    }
  }

  saveState(STORAGE_KEYS.user, { username, email, badge, requestedBadge: pendingReq, isAdmin });
  updateAuthUI();
  renderForumThreads();
  closeAllModals();
  if (pendingReq) {
    alert(`Signed in as "${username}" (👤 User).\nYour request for "${pendingReq}" has been placed in the Moderator Review Queue for Brett to verify!`);
  }
}

function handleSignOut() {
  localStorage.removeItem(STORAGE_KEYS.user);
  updateAuthUI();
  renderForumThreads();
  closeAllModals();
}

function openModQueueModal() {
  renderModQueueList();
  showModal('modQueueModal');
}

function renderModQueueList() {
  const listEl = document.getElementById('modQueueList');
  if (!listEl) return;
  const queue = loadState(STORAGE_KEYS.modQueue, []);
  if (queue.length === 0) {
    listEl.innerHTML = `<div class="muted-sub">No pending badge requests in the review queue.</div>`;
    return;
  }
  listEl.innerHTML = queue
    .map(
      (q) => `
    <div class="reply-card" style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
      <div>
        <strong>${escapeHtml(q.username)}</strong> <span class="muted-sub">(${escapeHtml(q.email || 'no email')})</span><br />
        <span style="font-size:12.5px; color:var(--accent-blue);">Requested: <strong>${escapeHtml(q.requestedBadge)}</strong> on ${escapeHtml(q.date)}</span>
      </div>
      <div style="display:flex; gap:6px;">
        <button class="btn-primary" style="padding:5px 10px; font-size:12px;" onclick="resolveBadgeRequest('${q.id}', true)">✔ Approve</button>
        <button class="btn-outline" style="padding:5px 10px; font-size:12px;" onclick="resolveBadgeRequest('${q.id}', false)">✕ Deny</button>
      </div>
    </div>
  `
    )
    .join('');
}

function resolveBadgeRequest(reqId, approve) {
  let queue = loadState(STORAGE_KEYS.modQueue, []);
  const item = queue.find((q) => q.id === reqId);
  if (!item) return;
  queue = queue.filter((q) => q.id !== reqId);
  saveState(STORAGE_KEYS.modQueue, queue);

  if (approve) {
    // Update threads & replies by that user to show their newly approved badge
    const threads = loadState(STORAGE_KEYS.threads, DEFAULT_THREADS);
    threads.forEach((t) => {
      if (t.author.toLowerCase() === item.username.toLowerCase()) {
        t.badge = item.requestedBadge;
      }
      (t.replies || []).forEach((r) => {
        if (r.author.toLowerCase() === item.username.toLowerCase()) {
          r.badge = item.requestedBadge;
        }
      });
    });
    saveState(STORAGE_KEYS.threads, threads);

    const curUser = getCurrentUser();
    if (curUser && curUser.username.toLowerCase() === item.username.toLowerCase()) {
      curUser.badge = item.requestedBadge;
      curUser.requestedBadge = '';
      saveState(STORAGE_KEYS.user, curUser);
    }
  }
  updateAuthUI();
  renderModQueueList();
  renderForumThreads();
}

// ================= NEWS =================
function renderNews() {
  let posts = loadState(STORAGE_KEYS.news, null);
  if (Array.isArray(posts)) {
    let modified = false;
    DEFAULT_NEWS.forEach((def) => {
      if (!posts.some((p) => p.id === def.id)) {
        posts.unshift(def);
        modified = true;
      }
    });
    if (modified) {
      saveState(STORAGE_KEYS.news, posts);
    }
  } else {
    posts = DEFAULT_NEWS;
  }
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
  const sel = document.getElementById('forumCategorySelect');
  if (sel && sel.value !== cat) sel.value = cat;
  renderForumThreads();
}

function formatBadgeClass(badgeStr) {
  return String(badgeStr || '').includes('Creator') || String(badgeStr || '').includes('$') ? 'badge-donor creator' : 'badge-donor';
}

function renderForumThreads() {
  migrateLegacyThreads();
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
    listEl.innerHTML = `<div class="thread-item">No matching threads yet. Click "+ New Thread" to start one!</div>`;
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
        <span><strong>${escapeHtml(t.author)}</strong> <span class="${formatBadgeClass(t.badge)}">${escapeHtml(t.badge || '👤 User')}</span></span>
        <span style="white-space:nowrap;">💬 ${(t.replies || []).length} · ▲ ${t.upvotes || 1}</span>
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

let pendingThreadImageDataUrl = '';
let pendingReplyImageDataUrl = '';

function compressForumImageFile(file, callback) {
  if (!file || !file.type || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = function (ev) {
    const img = new Image();
    img.onload = function () {
      const maxW = 1200;
      const maxH = 900;
      let w = img.width;
      let h = img.height;
      if (w > maxW || h > maxH) {
        const scale = Math.min(maxW / w, maxH / h);
        w = Math.round(w * scale);
        h = Math.round(h * scale);
      }
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      let dataUrl = canvas.toDataURL('image/webp', 0.82);
      if (!dataUrl || dataUrl.length < 32) {
        dataUrl = canvas.toDataURL('image/jpeg', 0.82);
      }
      callback(dataUrl);
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

function handleForumFileSelect(event, targetKind) {
  const file = event.target?.files?.[0];
  if (!file) return;
  compressForumImageFile(file, (dataUrl) => {
    setForumImagePreview(targetKind, dataUrl);
  });
}

function handleForumPasteImage(event, targetKind) {
  const items = event.clipboardData?.items;
  if (!items) return;
  for (let i = 0; i < items.length; i++) {
    if (items[i].type && items[i].type.startsWith('image/')) {
      const file = items[i].getAsFile();
      if (file) {
        compressForumImageFile(file, (dataUrl) => {
          setForumImagePreview(targetKind, dataUrl);
        });
      }
      break;
    }
  }
}

function setForumImagePreview(targetKind, dataUrl) {
  if (targetKind === 'thread') {
    pendingThreadImageDataUrl = dataUrl || '';
    const wrap = document.getElementById('threadImgPreviewWrap');
    const img = document.getElementById('threadImgPreview');
    if (wrap && img) {
      img.src = pendingThreadImageDataUrl;
      wrap.style.display = pendingThreadImageDataUrl ? 'flex' : 'none';
    }
  } else {
    pendingReplyImageDataUrl = dataUrl || '';
    const wrap = document.getElementById('replyImgPreviewWrap');
    const img = document.getElementById('replyImgPreview');
    if (wrap && img) {
      img.src = pendingReplyImageDataUrl;
      wrap.style.display = pendingReplyImageDataUrl ? 'flex' : 'none';
    }
  }
}

function clearForumImage(targetKind) {
  setForumImagePreview(targetKind, '');
  if (targetKind === 'thread') {
    const inp = document.getElementById('threadImageInput');
    if (inp) inp.value = '';
  } else {
    const inp = document.getElementById('replyImageInput');
    if (inp) inp.value = '';
  }
}

function openForumImageLightbox(src) {
  if (!src) return;
  const target = document.getElementById('forumImgLightboxTarget');
  if (target) {
    target.src = src;
    showModal('forumImgLightbox');
  } else {
    window.open(src, '_blank');
  }
}

function renderSelectedThreadDetail() {
  const threads = loadState(STORAGE_KEYS.threads, DEFAULT_THREADS);
  const t = threads.find((item) => item.id === selectedThreadId);
  const detailEl = document.getElementById('forumThreadDetail');
  if (!detailEl || !t) return;
  const user = getCurrentUser();
  const canMod = isOwnerOrMod(user);

  const repliesHtml = (t.replies || [])
    .map(
      (r, rIdx) => `
    <div class="reply-card">
      <div class="thread-item-meta" style="margin-bottom: 6px;">
        <span><strong>${escapeHtml(r.author)}</strong> <span class="${formatBadgeClass(r.badge)}">${escapeHtml(r.badge || '👤 User')}</span></span>
        <span>
          ${escapeHtml(r.date)}
          ${canMod ? `<button class="btn-outline" style="padding:1px 6px; font-size:11px; margin-left:6px;" onclick="deleteForumReply('${t.id}', ${rIdx})">🗑</button>` : ''}
        </span>
      </div>
      ${r.image ? `<div style="margin:6px 0 8px;"><img src="${r.image}" alt="Attached screenshot" style="max-width:100%; max-height:320px; border-radius:8px; border:1px solid var(--border); cursor:zoom-in;" onclick="openForumImageLightbox(this.src)" title="Click to zoom full size" /></div>` : ''}
      <div style="white-space: pre-line; font-size: 13.5px;">${escapeHtml(r.text || '')}</div>
    </div>
  `
    )
    .join('');

  const replyControlHtml = user
    ? `
    <div style="display:flex; flex-direction:column; gap:8px;">
      <div id="replyImgPreviewWrap" style="display:none; background:#0d1117; border:1px solid var(--border); border-radius:8px; padding:8px; align-items:center; justify-content:space-between; gap:10px;">
        <img id="replyImgPreview" src="" alt="Reply picture preview" style="max-height:72px; border-radius:6px; border:1px solid var(--border);" />
        <button class="btn-outline" style="padding:4px 10px; font-size:12px; color:#f87171;" onclick="clearForumImage('reply')">✕ Remove Picture</button>
      </div>
      <div class="reply-box">
        <label class="btn-outline" style="cursor:pointer; padding:8px 11px; font-size:13px; margin:0; white-space:nowrap;" title="Attach a picture or screenshot">
          📷 Picture
          <input type="file" id="replyImageInput" accept="image/*" style="display:none;" onchange="handleForumFileSelect(event, 'reply')" />
        </label>
        <input type="text" id="replyInputBox" placeholder="Reply as ${escapeHtml(user.username)} (or press Ctrl+V to paste screenshot)…" onpaste="handleForumPasteImage(event, 'reply')" onkeydown="if(event.key==='Enter') submitThreadReply('${t.id}')" />
        <button class="btn-primary" onclick="submitThreadReply('${t.id}')">Reply</button>
      </div>
    </div>`
    : `
    <div class="reply-box" style="justify-content:space-between; align-items:center; background:var(--bg-main); border:1px solid var(--border); padding:10px 14px; border-radius:8px;">
      <span class="muted-sub">🔒 You must be signed in to post a reply.</span>
      <button class="btn-primary" style="padding:6px 14px; font-size:12.5px;" onclick="openAuthModal()">🔐 Sign In / Register to Reply</button>
    </div>`;

  const threadImageHtml = t.image
    ? `<div style="margin: 10px 0 14px;"><img src="${t.image}" alt="Thread screenshot" style="max-width:100%; max-height:440px; border-radius:10px; border:1px solid var(--border); cursor:zoom-in;" onclick="openForumImageLightbox(this.src)" title="Click to zoom full size" /></div>`
    : '';

  detailEl.innerHTML = `
    <div>
      <div class="detail-header-row">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <span class="news-tag">${escapeHtml(t.category)}</span>
          <span>Posted by <strong>${escapeHtml(t.author)}</strong> <span class="${formatBadgeClass(t.badge)}">${escapeHtml(t.badge || '👤 User')}</span></span>
          <span>· ${escapeHtml(t.date)}</span>
        </div>
        <div style="display:flex; gap:6px; align-items:center;">
          <button class="btn-outline" style="padding:4px 10px; font-size:12px;" onclick="upvoteThread('${t.id}')">▲ Upvote (${t.upvotes || 1})</button>
          ${canMod ? `<button class="btn-outline" style="padding:4px 10px; font-size:12px; color:#f87171;" onclick="deleteForumThread('${t.id}')">🗑 Delete</button>` : ''}
        </div>
      </div>
      <h3 style="margin: 6px 0 12px; font-size: 18px;">${escapeHtml(t.title)}</h3>
      ${threadImageHtml}
      <div style="white-space: pre-line; color: var(--text-secondary); font-size: 14px; padding-bottom: 14px; border-bottom: 1px solid var(--border);">${escapeHtml(t.body)}</div>
    </div>
    <div style="display:flex; flex-direction:column; gap:10px;">
      <strong style="font-size:13px; color:var(--text-muted);">Replies (${(t.replies || []).length})</strong>
      ${repliesHtml || '<div class="muted-sub">No replies yet — be the first to reply below!</div>'}
    </div>
    ${replyControlHtml}
  `;
}

function deleteForumThread(id) {
  if (!isOwnerOrMod(getCurrentUser())) return;
  let threads = loadState(STORAGE_KEYS.threads, DEFAULT_THREADS);
  threads = threads.filter((t) => t.id !== id);
  saveState(STORAGE_KEYS.threads, threads);
  renderForumThreads();
}

function deleteForumReply(threadId, replyIdx) {
  if (!isOwnerOrMod(getCurrentUser())) return;
  const threads = loadState(STORAGE_KEYS.threads, DEFAULT_THREADS);
  const t = threads.find((item) => item.id === threadId);
  if (!t || !Array.isArray(t.replies)) return;
  t.replies.splice(replyIdx, 1);
  saveState(STORAGE_KEYS.threads, threads);
  renderForumThreads();
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

function updateThreadCharCounters() {
  const titleEl = document.getElementById('threadTitleInput');
  const bodyEl = document.getElementById('threadBodyInput');
  const titleCountEl = document.getElementById('threadTitleCharCount');
  const bodyCountEl = document.getElementById('threadBodyCharCount');
  if (titleEl && titleCountEl) {
    const len = titleEl.value.length;
    titleCountEl.textContent = `${len} / 120 chars`;
    titleCountEl.style.color = len > 115 ? '#f87171' : 'var(--text-muted)';
  }
  if (bodyEl && bodyCountEl) {
    const len = bodyEl.value.length;
    bodyCountEl.textContent = `${len.toLocaleString()} / 20,000 chars`;
    bodyCountEl.style.color = len > 19500 ? '#f87171' : 'var(--text-muted)';
  }
  clearThreadError();
}

function showThreadError(msg) {
  const errEl = document.getElementById('threadErrorMsg');
  if (errEl) {
    errEl.textContent = msg;
    errEl.style.display = 'block';
  } else {
    alert(msg);
  }
}

function clearThreadError() {
  const errEl = document.getElementById('threadErrorMsg');
  if (errEl) {
    errEl.textContent = '';
    errEl.style.display = 'none';
  }
}

function submitThreadReply(id) {
  const user = getCurrentUser();
  if (!user || !user.username) {
    openAuthModal();
    return;
  }
  const inp = document.getElementById('replyInputBox');
  const txt = inp ? inp.value.trim() : '';
  if (!txt && !pendingReplyImageDataUrl) {
    if (inp) {
      inp.placeholder = '⚠️ Please type a reply before sending…';
      inp.style.borderColor = '#f87171';
      setTimeout(() => {
        inp.placeholder = `Reply as ${escapeHtml(user.username)} (or press Ctrl+V to paste screenshot)…`;
        inp.style.borderColor = '';
      }, 3000);
      inp.focus();
    }
    return;
  }
  if (txt.length > 10000) {
    alert(`⚠️ Reply exceeds character limit (${txt.length.toLocaleString()} / 10,000 characters). Please shorten it.`);
    return;
  }
  try {
    const threads = loadState(STORAGE_KEYS.threads, DEFAULT_THREADS);
    const t = threads.find((item) => item.id === id);
    if (!t) return;
    t.replies = t.replies || [];
    t.replies.push({
      author: user.username,
      badge: user.badge || '👤 User',
      date: new Date().toISOString().slice(0, 10),
      text: txt,
      image: pendingReplyImageDataUrl || '',
    });
    pendingReplyImageDataUrl = '';
    saveState(STORAGE_KEYS.threads, threads);
    if (inp) inp.value = '';
    renderForumThreads();
  } catch (err) {
    alert('⚠️ Could not save reply: ' + (err.message || String(err)));
  }
}

function openNewThreadModal() {
  const user = getCurrentUser();
  if (!user || !user.username) {
    openAuthModal();
    return;
  }
  clearThreadError();
  clearForumImage('thread');
  updateThreadCharCounters();
  showModal('newThreadModal');
}

function submitNewForumThread() {
  clearThreadError();
  const user = getCurrentUser();
  if (!user || !user.username) {
    showThreadError('⚠️ You must be signed in to post a thread.');
    openAuthModal();
    return;
  }

  const cat = document.getElementById('threadCatInput')?.value || 'General Discussion';
  let title = (document.getElementById('threadTitleInput')?.value || '').trim();
  const body = (document.getElementById('threadBodyInput')?.value || '').trim();

  // If user wrote a body but forgot the title, auto-derive title from first line
  if (!title && body) {
    const firstLine = body.split('\n')[0].trim();
    title = firstLine.length > 80 ? firstLine.slice(0, 77) + '…' : firstLine;
    const titleInput = document.getElementById('threadTitleInput');
    if (titleInput) titleInput.value = title;
  }

  if (!title && !body && !pendingThreadImageDataUrl) {
    showThreadError('⚠️ Please enter a title and message for your post (or attach a screenshot).');
    return;
  }

  if (!title) {
    showThreadError('⚠️ Please enter a Title for your thread (up to 120 characters).');
    document.getElementById('threadTitleInput')?.focus();
    return;
  }

  if (title.length > 120) {
    showThreadError(`⚠️ Title is too long (${title.length} / 120 characters). Please shorten it.`);
    document.getElementById('threadTitleInput')?.focus();
    return;
  }

  if (!body && !pendingThreadImageDataUrl) {
    showThreadError('⚠️ Please write a message for your post (up to 20,000 characters) or attach a screenshot.');
    document.getElementById('threadBodyInput')?.focus();
    return;
  }

  if (body.length > 20000) {
    showThreadError(`⚠️ Message exceeds character limit (${body.length.toLocaleString()} / 20,000 characters). Please shorten it.`);
    document.getElementById('threadBodyInput')?.focus();
    return;
  }

  try {
    const threads = loadState(STORAGE_KEYS.threads, DEFAULT_THREADS);
    const newId = 'th-' + Date.now();
    threads.unshift({
      id: newId,
      category: cat,
      title,
      author: user.username,
      badge: user.badge || '👤 User',
      date: new Date().toISOString().slice(0, 10),
      upvotes: 1,
      body,
      image: pendingThreadImageDataUrl || '',
      replies: [],
    });

    pendingThreadImageDataUrl = '';
    saveState(STORAGE_KEYS.threads, threads);
    selectedThreadId = newId;

    // Reset inputs
    if (document.getElementById('threadTitleInput')) document.getElementById('threadTitleInput').value = '';
    if (document.getElementById('threadBodyInput')) document.getElementById('threadBodyInput').value = '';
    updateThreadCharCounters();

    closeAllModals();
    renderForumThreads();
  } catch (err) {
    showThreadError('⚠️ Error saving thread: ' + (err.message || String(err)));
  }
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

// ================= DYNAMIC GITHUB RELEASE AUTO-UPDATER =================
async function autoUpdateLatestRelease() {
  try {
    const res = await fetch('https://api.github.com/repos/bm069au/fairybread/releases/latest');
    if (!res.ok) return;
    const release = await res.json();
    if (!release || !release.tag_name) return;

    const rawTag = release.tag_name; // e.g. "v0.9.1-beta" or "v0.9.1d"
    const cleanTag = rawTag.replace(/-beta$/i, '');

    // Safeguard: Never downgrade if the fetched GitHub release is older than the site's current version (v0.9.1g)
    const currentSiteVersion = 'v0.9.1g';
    if (cleanTag < currentSiteVersion) {
      console.log(`[Fairybread] GitHub latest release (${cleanTag}) is older than site version (${currentSiteVersion}); keeping current version.`);
      return;
    }

    // Locate the Windows setup zip asset (preferring Public non-developer setup zip)
    const assets = release.assets || [];
    const zipAsset =
      assets.find((a) => {
        const n = a.name.toLowerCase();
        return n.endsWith('.zip') && !n.includes('developer') && (n.includes('setup') || n.includes('installer') || n.includes('win'));
      }) ||
      assets.find((a) => {
        const n = a.name.toLowerCase();
        return n.endsWith('.zip') && (n.includes('setup') || n.includes('installer') || n.includes('win'));
      }) ||
      assets[0];

    const downloadUrl = zipAsset
      ? zipAsset.browser_download_url
      : `https://github.com/bm069au/fairybread/releases/tag/${rawTag}`;

    // Update all version tags on the page
    document.querySelectorAll('.brand-tag, .dynamic-version-tag').forEach((el) => {
      el.textContent = `BETA ${cleanTag}`;
    });

    // Update all download buttons
    document.querySelectorAll('.dynamic-download-btn').forEach((btn) => {
      btn.href = downloadUrl;
      if (btn.id === 'heroDownloadBtn') {
        btn.innerHTML = `⬇ Download Fairybread Beta ${escapeHtml(cleanTag)} (Win_x64)`;
      }
    });

    console.log(`[Fairybread] Auto-resolved latest GitHub release: ${rawTag} -> ${downloadUrl}`);
  } catch (err) {
    console.debug('[Fairybread] GitHub release auto-resolve fallback to static defaults:', err);
  }
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', () => {
  autoUpdateLatestRelease();
  updateAuthUI();
  renderNews();
  renderForumThreads();
  updateLiveThemePreview();
  renderSkinGallery();
  renderDonorWall();
  renderCodeExplorer();
  applySavedPortrait();
});
