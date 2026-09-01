'use strict';

const CONFIG = {

  /* â”€â”€ WHO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  recipientName : 'MARIAM',
  /* â”€â”€ MUSIC (one song, loops site-wide) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
     Accepts EITHER a local file OR an online LINK, e.g.
       music: 'assets/song.m4a',                       â† local file
       music: 'https://example.com/our-song.mp3',      â† direct link
     Google Drive & Dropbox SHARE links are also accepted â€”
     they are converted to direct-stream links automatically.
     The link must point to the audio file itself, not a page. */
  music         : 'assets/song.m4a',

  /* â”€â”€ SCENE 2 Â· ANNIVERSARY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  anniversary: {
    title   : 'HAPPY BIRTHDAY',          // first word becomes the small top line
    subtitle: 'Today is not just another day...It is the day the world became a little more beautiful because you were born.',
    button  : 'THIS MADE ESPECIALLY FOR YOU',
  },

  /* â”€â”€ SCENE 3 Â· MEMORIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  memories: {
    heading : 'OUR MEMORIES',
    subtitle: 'six little moments that mean everything to me \u2661',
    hint    : 'TAP A MEMORY TO OPEN \u2661',
    cta     : 'READ THIS \u2661',
    cards   : [
      {
        image   : 'assets/memory-1.jpg',
        title   : 'CARD 01 â€” THE BEGINNING',
        date    : '',
        message : ' I didn not know it that day, but meeting you would become one of the most beautiful things that ever happened to me.â™¡ ',
      },
      {
        image   : 'assets/memory-2.jpg',
        title   : 'CARD 02 â€” THE CHAOS',
        date    : '',
        message : 'Your smile has this strange way of making everything around me disappear I could look at it forever.',
      },
      {
        image   : 'assets/memory-3.jpg',
        title   : 'CARD 03 â€” THE LAUGHS',
        date    : '',
        message : 'Maybe these moments look ordinary to everyone else... but they are some of my favorite memories because I was sharing them with you.',
      },
      {
        image   : 'assets/memory-4.jpg',
        title   : 'CARD 04 â€” THROUGH EVERYTHING',
        date    : '',
        message : 'Somewhere between all the laughs, late conversations and little moments, you became my favorite part of every day.â™¡',
      },
      {
        image   : 'assets/memory-5.jpg',
        title   : 'CARD 05 â€” MORE TO COME',
        date    : '',
        message : 'I do not need perfect days. I just need more days with you in them. â™¡',
      },
      {
        image   : 'assets/memory-6.jpg',
        title   : 'CARD 06 â€” MY FAVORITE PERSON',
        date    : '',
        message : 'Out of all the people in this world Im still so grateful that somehow I found you.',
      },
    ],
  },

  /* â”€â”€ SCENE 4 Â· LOVE LETTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  letter: {
    intro     : 'Something I\u2019ve been wanting to tell you...',
    title     : 'A LETTER FOR YOU',
    greeting  : 'To my lover {recipientName},',
    paragraphs: [
      'I do not think I\'ll ever find enough words to explain what you mean to me.',
'You came into my life and slowly became a part of everything I love about my days.',
  'Your voice, your smile, your little habits, even the silly things you do that you probably don\'t realize I notice.',    
  'Today, on your birthday, I just want you to know how incredibly special you are to me.',
'I hope this new year of your life brings you happiness, beautiful moments, and everything your heart wishes for.',
'And I hope I get to be there beside you through as many of those moments as possible.',
'Happy birthday, my beautiful girl.',
'I love you more than these little words could ever explain. â™¡',

    ],
    closing   : 'Forever & Always \u2661',
    openButton: 'OPEN MY LETTER \u2661',
    teaser    : 'WAIT... ONE MORE THING',
    button    : 'OPEN MY SURPRISE \u2661',
  },

  /* â”€â”€ SCENE 5 Â· FINAL SURPRISE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  surprise: {
    headTop     : 'WAIT...',
    headMain    : 'ONE MORE THING',
    intro       : 'Because you deserve one last surprise \u2661',
    image       : 'assets/final-photo.jpg',
    title       : 'I WOULD CHOOSE YOU\nIN EVERY LIFETIME \u2661',
    message     : 'Thank you for being one of the most beautiful parts of my life.',
    signaturePre: 'With all my love,',
    madeWith    : 'Made with love \u2661',
  },

  /* â”€â”€ SYSTEM Â· rarely edited â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  system: {
    volume        : 0.8,
    introHoldMs   : 3800,                    // how long the intro stays (~4s)
    transitionMs  : 950,                     // scene cross-fade duration
    decor         : {                        // global background garden
      petals: 9, floatHearts: 7, beatHearts: 4,
      blossoms: 4, buds: 3, silhouettes: 2, sparks: 3,
      mobileBonusPetals: 2,                  // extra life on phones (<600px)
    },
    flow          : {                        // scene graph
      start           : 'scene-anniversary',
      afterAnniversary: 'scene-memory',
      afterMemories   : 'scene-letter',
      afterLetter     : 'scene-surprise',
    },
  },
};


/* ============================================================
   02 Â· ELEMENTS & STATE
   ============================================================ */
const els = {
  recipient  : document.querySelector('[data-recipient]'),
  globalBg   : document.getElementById('global-background'),
  flowerField: document.getElementById('flowerField'),
  heartField : document.getElementById('heartField'),
  audio      : document.getElementById('song'),
  gate      : document.getElementById('musicGate'),
  gateButton: document.getElementById('startMusicBtn'),
  toggle    : document.getElementById('musicToggle'),

  /* anniversary */
  anniTitle   : document.querySelector('[data-anniversary-title]'),
  anniSubtitle: document.querySelector('[data-anniversary-subtitle]'),
  ctaLabel    : document.querySelector('[data-cta-text]'),
  ctaButton   : document.getElementById('ctaAnniversary'),

  /* memories */
  memHeading : document.querySelector('[data-memory-heading]'),
  memSubtitle: document.querySelector('[data-memory-subtitle]'),
  memHint    : document.querySelector('[data-memory-hint]'),
  memGrid    : document.getElementById('memoryGrid'),
  ctaLetter  : document.getElementById('ctaLetter'),

  /* letter */
  letterScene     : document.getElementById('scene-letter'),
  letterHeadTop   : document.querySelector('[data-letter-head-top]'),
  letterHeadMain  : document.querySelector('[data-letter-head-main]'),
  letterIntro     : document.querySelector('[data-letter-intro]'),
  envName         : document.querySelector('[data-env-name]'),
  envelope        : document.getElementById('envelope'),
  openLetterBtn   : document.getElementById('openLetterBtn'),
  openLetterLabel : document.querySelector('[data-open-letter-text]'),
  paperWrap       : document.getElementById('paperWrap'),
  paperTitle      : document.querySelector('[data-paper-title]'),
  paperGreeting   : document.querySelector('[data-paper-greeting]'),
  paperBody       : document.querySelector('[data-paper-body]'),
  paperClosing    : document.querySelector('[data-paper-closing]'),
  surpriseTeaser  : document.querySelector('[data-surprise-teaser]'),
  ctaSurprise     : document.getElementById('ctaSurprise'),
  ctaSurpriseLabel: document.querySelector('[data-surprise-cta-text]'),

  /* surprise */
  giftScene    : document.getElementById('scene-surprise'),
  giftHeadTop  : document.querySelector('[data-gift-head-top]'),
  giftHeadMain : document.querySelector('[data-gift-head-main]'),
  giftIntro    : document.querySelector('[data-gift-intro]'),
  giftBtnLabel : document.querySelector('[data-gift-btn-text]'),
  giftBox      : document.getElementById('giftBox'),
  openGiftBtn  : document.getElementById('openGiftBtn'),
  revealWrap   : document.getElementById('revealWrap'),
  finalPhoto   : document.getElementById('finalPhoto'),
  surpriseTitle: document.querySelector('[data-surprise-title]'),
  surpriseMsg  : document.querySelector('[data-surprise-message]'),
  sigPre       : document.querySelector('[data-sig-pre]'),
  sigName      : document.querySelector('[data-sig-name]'),
  madeWith     : document.querySelector('[data-made-with]'),
  finalFloaters: document.getElementById('finalFloaters'),
};

const REDUCED_MOTION =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const state = {
  playing      : false,
  gatePending  : false,   // true while the music overlay is visible
  introStarted : false,
  sceneBusy    : false,   // true while a scene cross-fade is in progress
};


/* ============================================================
   03 Â· UTILITIES
   ============================================================ */
const rand = (min, max) => min + Math.random() * (max - min);

function styleProps(el, props) {
  for (const [key, value] of Object.entries(props)) {
    el.style.setProperty(key, value);
  }
}

/* Replace {recipientName} tokens in customer copy. */
function fillName(str) {
  return String(str || '').replace(/\{recipientName\}/g, (CONFIG.recipientName || '').trim());
}

/* Smoothly ramp an <audio> element's volume (premium fade-in). */
function fadeVolume(audio, target, duration = 2000) {
  let from;
  try { from = audio.volume; } catch (_) { return Promise.resolve(); }
  if (from === target) return Promise.resolve();

  if (audio._fadeId) cancelAnimationFrame(audio._fadeId);
  const start = performance.now();

  return new Promise((resolve) => {
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      try { audio.volume = from + (target - from) * eased; }
      catch (_) { resolve(); return; }           // iOS ignores volume writes
      if (t < 1) audio._fadeId = requestAnimationFrame(step);
      else resolve();
    };
    audio._fadeId = requestAnimationFrame(step);
  });
}

/* Release a finished entrance animation so hover/press transforms
   on the element itself start working again (fill-mode would
   otherwise keep overriding them forever). */
function unlockEntrance(el) {
  el.addEventListener('animationend', function handler(e) {
    if (e.target !== el) return;
    el.removeEventListener('animationend', handler);
    el.classList.add('fx-entered');     // kills the fill-mode lock
    el.style.opacity = '1';             // inline: beats the pre-entrance opacity:0
  });
}


/* ============================================================
   04 Â· RECIPIENT NAME & TITLE
   ============================================================ */
function applyRecipient() {
  const name = (CONFIG.recipientName || '').trim();
  if (!name) return;
  if (els.recipient) els.recipient.textContent = name.toUpperCase();
  document.title = `To My Pretty ${name} \u2661`;
}


/* ============================================================
   05 Â· GLOBAL BACKGROUND DECOR
   Built ONCE at boot into #global-background â€” never cleared or
   rebuilt, so the same flowers & hearts continue seamlessly
   behind every scene. All motion lives in CSS (transform/opacity
   only); negative delays pre-scatter pieces so the garden is
   alive the instant the page paints.
   ============================================================ */

/* safe zones â€” decoration hugs the edges / corners / top / bottom
   bands so the centre column (titles, cards, letter, gift) and all
   interactive content stay clean */
const SAFE_ZONES = [
  { x: [3, 15],  y: [14, 86] },      // left edge
  { x: [85, 96], y: [14, 86] },      // right edge
  { x: [5, 93],  y: [3, 13]  },      // top band
  { x: [5, 93],  y: [85, 94] },      // bottom band
];

function zoneSpot() {
  const z = SAFE_ZONES[(Math.random() * SAFE_ZONES.length) | 0];
  return `${rand(z.x[0], z.x[1]).toFixed(1)}% ${rand(z.y[0], z.y[1]).toFixed(1)}%`;
}

const PETAL_SHADES  = ['shade-petal-a', 'shade-petal-b', 'shade-petal-c'];
const FLOWER_SHADES = ['shade-flower-a', 'shade-flower-b', 'shade-flower-c'];
const HEART_SHADES  = ['shade-heart-a', 'shade-heart-b', 'shade-heart-c'];
const pick = (arr) => arr[(Math.random() * arr.length) | 0];

function spawnPiece(field, className, left, top, vars) {
  const el = document.createElement('span');
  el.className = className;
  el.style.left = left;
  el.style.top = top;
  styleProps(el, vars);
  field.appendChild(el);
  return el;
}

function buildGlobalBackground() {
  const flowers = els.flowerField;
  const hearts  = els.heartField;
  if (!flowers && !hearts) return;

  const D      = CONFIG.system.decor || {};
  const mobile = window.matchMedia('(max-width: 600px)').matches;

  /* â”€â”€ falling petals (motion-only; skipped under reduced motion) */
  if (!REDUCED_MOTION) {
    const petalCount = (D.petals || 0) + (mobile ? (D.mobileBonusPetals || 0) : 0);
    for (let i = 0; i < petalCount; i++) {
      const d = rand(9, 16);                       // every petal its own speedâ€¦
      spawnPiece(flowers, `petal-fall ${pick(PETAL_SHADES)}${i >= (D.petals || 0) ? ' m-only' : ''}`,
        `${rand(2, 96).toFixed(1)}%`, '0', {
          '--w' : `${rand(9, 16).toFixed(1)}px`,
          '--o' : rand(0.45, 0.68).toFixed(2),
          '--d' : `${d.toFixed(1)}s`,
          '--dl': `${(-rand(0, d)).toFixed(1)}s`,    // â€¦and a pre-scattered start
          '--sw': `${Math.round(rand(12, 30))}px`,
          '--r0': `${Math.round(rand(8, 22))}deg`,
        });
    }

    /* â”€â”€ floating hearts drifting slowly upward */
    for (let i = 0; i < (D.floatHearts || 0); i++) {
      const d = rand(18, 34);
      spawnPiece(hearts, `float-heart ${pick(HEART_SHADES)}`, `${rand(3, 95).toFixed(1)}%`, '0', {
        'font-size': `${Math.round(rand(13, 30))}px`,
        '--o' : rand(0.40, 0.58).toFixed(2),
        '--d' : `${d.toFixed(1)}s`,
        '--dl': `${(-rand(0, d)).toFixed(1)}s`,
        '--sw': `${Math.round(rand(8, 22))}px`,
      });
    }

    /* â”€â”€ a few sparkles near edges/top/bottom */
    for (let i = 0; i < (D.sparks || 0); i++) {
      const d = rand(3.5, 7);
      spawnPiece(hearts, 'bg-spark', ...zoneSpot().split(' '), {
        'width' : `${Math.round(rand(4, 7))}px`,
        'height': `${Math.round(rand(4, 7))}px`,
        '--peak': rand(0.5, 0.75).toFixed(2),
        '--d'   : `${d.toFixed(1)}s`,
        '--dl'  : `${(-rand(0, d)).toFixed(1)}s`,
      });
    }
  }

  /* â”€â”€ five-petal blossoms (visible even under reduced motion) */
  for (let i = 0; i < (D.blossoms || 0); i++) {
    const el = spawnPiece(flowers, `blossom ${pick(FLOWER_SHADES)}`, ...zoneSpot().split(' '), {
      '--s' : `${Math.round(rand(22, 34))}px`,
      '--o' : rand(0.50, 0.68).toFixed(2),
      '--d' : `${rand(9, 14).toFixed(1)}s`,
      '--dl': `${(-rand(0, 10)).toFixed(1)}s`,
    });
    for (let p = 0; p < 5; p++) el.appendChild(document.createElement('i'));
  }

  /* â”€â”€ large soft floral silhouettes washing the corners */
  const SILH_SPOTS = ['2% 4%', '76% 78%', '68% 3%', '3% 78%'];
  for (let i = 0; i < (D.silhouettes || 0); i++) {
    const el = spawnPiece(flowers, `blossom silhouette ${pick(FLOWER_SHADES)}`,
      SILH_SPOTS[i % SILH_SPOTS.length].split(' ')[0], SILH_SPOTS[i % SILH_SPOTS.length].split(' ')[1], {
        '--s': `${Math.round(rand(88, 128))}px`,
        '--o': rand(0.30, 0.40).toFixed(2),
        '--d': `${rand(22, 30).toFixed(1)}s`,
      });
    for (let p = 0; p < 5; p++) el.appendChild(document.createElement('i'));
  }

  /* â”€â”€ tiny buds */
  for (let i = 0; i < (D.buds || 0); i++) {
    spawnPiece(flowers, `bud${Math.random() < 0.5 ? ' shade-bud-b' : ''}`, ...zoneSpot().split(' '), {
      '--s'   : `${Math.round(rand(10, 15))}px`,
      '--tilt': `${Math.round(rand(-30, 30))}deg`,
      '--o'   : rand(0.48, 0.66).toFixed(2),
      '--d'   : `${rand(8, 13).toFixed(1)}s`,
      '--dl'  : `${(-rand(0, 8)).toFixed(1)}s`,
    });
  }

  /* â”€â”€ heartbeat hearts (a few, clearly pulsing on mobile) */
  for (let i = 0; i < (D.beatHearts || 0); i++) {
    spawnPiece(hearts, `beat-heart ${pick(HEART_SHADES)}`, ...zoneSpot().split(' '), {
      'font-size': `${Math.round(rand(20, 34))}px`,
      '--o' : rand(0.45, 0.62).toFixed(2),
      '--d' : `${rand(1.6, 2.2).toFixed(2)}s`,
      '--dl': `${(-rand(0, 2)).toFixed(2)}s`,
    });
  }
}


/* ============================================================
   06 Â· MUSIC SYSTEM
   One audio element for the whole experience.
   1. Try autoplay on load.
   2. If blocked â†’ show the "PLAY OUR SONG â™¡" overlay.
   3. Corner toggle pauses / resumes anytime.

   MOBILE NOTE: iOS Safari / some Android browsers refuse to stream a
   remote .mp3 when the host does not support HTTP Range requests or
   sends the wrong Content-Type (common on cheap static hosts, and the
   reason the song can play on a laptop but stay silent on a phone).
   playAsBlob() sidesteps that by downloading the whole file once into
   memory and playing it from a blob â€” no Range needed.
   ============================================================ */
/* Turn a pasted share-link (Drive / Dropbox) into a direct
   audio-stream URL; plain links & local paths pass through. */
function normalizeSongUrl(url) {
  const u = String(url || '').trim();

  /* Google Drive  â€¦/file/d/<ID>/view  â†’  direct stream */
  const drive = u.match(/^https?:\/\/drive\.google\.com\/file\/d\/([^/&#?]+)/);
  if (drive) return `https://drive.google.com/uc?export=download&id=${drive[1]}`;

  /* Dropbox share link â†’ raw file */
  if (/^https?:\/\/(www\.)?dropbox\.com\//.test(u)) {
    let out = u.replace(/[?&]dl=0/g, '').replace(/\?&/, '?').replace(/[?&]+$/, '');
    if (!/[?&]raw=1/.test(out)) out += (out.includes('?') ? '&' : '?') + 'raw=1';
    return out;
  }

  return u;
}

function setupMusic() {
  const a = els.audio;
  if (!a) return;

  /* song source comes from CONFIG â€” local path OR online link */
  const src = normalizeSongUrl(CONFIG.music);
  if (src && a.getAttribute('src') !== src) {
    a.setAttribute('src', src);
  }

  try { a.volume = 0; } catch (_) {}

  a.addEventListener('play',  () => setPlaying(true));
  a.addEventListener('pause', () => setPlaying(false));
  a.addEventListener('error', () => {
    console.warn(
      '[music] Could not load the song. CONFIG.music must be a DIRECT audio ' +
      'link (.mp3 / .m4a / .ogg) or a Google Drive / Dropbox share link.'
    );
    /* the user already asked for playback â†’ try a fresh in-memory copy */
    if (!state.gatePending) playAsBlob(a);
  });

  /* attempt autoplay (may be rejected by the browser) */
  const attempt = a.play();
  if (attempt && typeof attempt.catch === 'function') {
    attempt
      .then(() => fadeVolume(a, CONFIG.system.volume, 2600))
      .catch(() => openGate());
  }
}

function setPlaying(isPlaying) {
  state.playing = isPlaying;
  if (!els.toggle) return;
  els.toggle.dataset.playing = String(isPlaying);
  els.toggle.setAttribute('aria-pressed', String(isPlaying));
  els.toggle.setAttribute('aria-label', isPlaying ? 'Pause our song' : 'Play our song');
}

/* Called from a user gesture â€” the browser allows playback now. */
function startMusicFromGesture() {
  const a = els.audio;
  if (!a) { closeGate(); return; }
  try { a.volume = 0; } catch (_) {}
  playAudioRobust(a).then(() => fadeVolume(a, CONFIG.system.volume, 1600));
  closeGate();
}

/* Play normally; if the browser refuses (no Range support on the host,
   iOS quirk, â€¦), fall back to a blob we fetched ourselves. */
function playAudioRobust(a) {
  const attempt = a.play();
  if (attempt && typeof attempt.catch === 'function') {
    return attempt.catch(() => playAsBlob(a).catch(() => {}));
  }
  return playAsBlob(a).catch(() => {});
}

/* Download the full file once and play from memory. */
function playAsBlob(a) {
  const src = a.currentSrc || a.getAttribute('src');
  if (!src || a._blobTried) return Promise.resolve();
  a._blobTried = true;
  return fetch(src)
    .then((r) => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.blob();
    })
    .then((blob) => {
      if (a._blobUrl) URL.revokeObjectURL(a._blobUrl);
      a._blobUrl = URL.createObjectURL(blob);
      a.src = a._blobUrl;
      return a.play() || Promise.resolve();
    })
    .catch(() => {
      /* restore the plain URL and give it one final chance */
      a.src = src;
      return a.play() || Promise.resolve();
    });
}

function onToggleClick() {
  if (state.gatePending) { startMusicFromGesture(); return; }
  const a = els.audio;
  if (!a) return;
  if (a.paused) {
    playAudioRobust(a).then(() => fadeVolume(a, CONFIG.system.volume, 900));
  } else {
    a.pause();
  }
}

function openGate() {
  state.gatePending = true;
  if (!els.gate) return;
  els.gate.hidden = false;
  /* double rAF so the transition runs after display changes */
  requestAnimationFrame(() =>
    requestAnimationFrame(() => els.gate.classList.add('is-open'))
  );
}

function closeGate() {
  state.gatePending = false;
  if (els.gate) {
    els.gate.classList.remove('is-open');
    window.setTimeout(() => { els.gate.hidden = true; }, 700);
  }
  startIntro();   // "continue the intro normally" once the song is sorted
}


/* ============================================================
   SCENE 2 Â· ANNIVERSARY
   ============================================================ */
function applyAnniversaryCopy() {
  const A  = CONFIG.anniversary || {};
  const words = String(A.title || '').trim().split(/\s+/).filter(Boolean);

  if (els.anniTitle) {
    els.anniTitle.textContent = '';
    if (words.length > 1) {
      /* first word small + enters first, the rest becomes the main focus */
      const top = document.createElement('span');
      top.className = 'anni-top fx2 dA1';
      top.textContent = words[0];

      const main = document.createElement('span');
      main.className = 'anni-main fx2 dA2';
      main.textContent = words.slice(1).join(' ');

      els.anniTitle.append(top, main);
    } else if (words[0]) {
      const main = document.createElement('span');
      main.className = 'anni-main fx2 dA2';
      main.textContent = words[0];
      els.anniTitle.appendChild(main);
    }
  }

  if (els.anniSubtitle) els.anniSubtitle.textContent = A.subtitle || '';
  if (els.ctaLabel)     els.ctaLabel.textContent     = A.button || '';
}

/* tiny hearts bursting outward from a CTA */
function spawnHeartBurst(layer) {
  if (!layer) return;
  for (let i = 0; i < 9; i++) {
    const p = document.createElement('span');
    p.className = 'burst-particle';
    p.textContent = Math.random() < 0.5 ? '\u2665' : '\u2661';

    const angle = rand(0, Math.PI * 2);
    const dist  = rand(46, 92);
    styleProps(p, {
      '--tx' : `${Math.round(Math.cos(angle) * dist)}px`,
      '--ty' : `${Math.round(Math.sin(angle) * dist - 18)}px`, // slight upward bias
      '--rot': `${Math.round(rand(-40, 40))}deg`,
      '--sc' : rand(0.8, 1.35).toFixed(2),
      'font-size': `${Math.round(rand(9, 15))}px`,
      'animation-duration': `${Math.round(rand(700, 1000))}ms`,
    });
    layer.appendChild(p);
  }
  window.setTimeout(() => {
    layer.querySelectorAll('.burst-particle').forEach((p) => p.remove());
  }, 1200);
}

function bindAnniversaryScene() {
  const btn = els.ctaButton;
  if (!btn) return;
  unlockEntrance(btn);

  btn.addEventListener('click', () => {
    if (btn.dataset.busy) return;          // guard double taps
    btn.dataset.busy = '1';
    btn.classList.add('is-tapped');

    spawnHeartBurst(btn.querySelector('.btn-burst'));

    window.setTimeout(() => goToScene(CONFIG.system.flow.afterAnniversary), 420);
  });
}


/* ============================================================
   SCENE 3 Â· MEMORIES
   ============================================================ */

/* static decorative icon â€” never fed customer content */
const HEART_SVG =
  '<svg viewBox="0 0 32 32" fill="none" stroke="#c98b98" stroke-width="1.4" ' +
  'stroke-linejoin="round" aria-hidden="true" focusable="false">' +
  '<path d="M23.6 2.5c-2.9 0-5.4 2.3-6.5 4.8-1.1-2.5-3.6-4.8-6.5-4.8-4 0-7.1 3.1-7.1 7 ' +
  '0 8 8.1 10.2 13.6 16.4 5.2-6.2 13.6-8.5 13.6-16.4 0-3.9-3.1-7-7.1-7z"/></svg>';

function applyMemoryCopy() {
  const M = CONFIG.memories || {};
  if (els.memHeading)  els.memHeading.textContent  = M.heading  || '';
  if (els.memSubtitle) els.memSubtitle.textContent = M.subtitle || '';
  if (els.memHint)     els.memHint.textContent     = M.hint     || '';
  if (els.ctaLetter) {
    const label = els.ctaLetter.querySelector('[data-memory-cta-text]');
    if (label) label.textContent = M.cta || '';
  }
}

function renderMemoryCards() {
  const grid = els.memGrid;
  if (!grid) return;
  grid.textContent = '';

  ((CONFIG.memories && CONFIG.memories.cards) || []).forEach((card, idx) => {
    const num = String(idx + 1).padStart(2, '0');

    /* the whole card is one accessible <button> */
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mem-card fx3';
    btn.style.setProperty('--i', idx);
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label',
      `Open memory ${idx + 1}${card.title ? ': ' + card.title : ''}`);

    const inner = document.createElement('span');
    inner.className = 'mem-inner';

    /* FRONT Â· photo + number + title */
    const front = document.createElement('span');
    front.className = 'face face--front';

    const photo = document.createElement('span');
    photo.className = 'mem-photo';
    const img = document.createElement('img');
    img.alt = card.title || `Memory ${num}`;
    img.loading = 'lazy';                 // below the fold when the scene opens
    img.decoding = 'async';
    if (card.image) {
      img.src = card.image;
      img.addEventListener('error', () => photo.classList.add('no-photo'), { once: true });
    } else {
      photo.classList.add('no-photo');    // elegant fallback, no broken icons
    }
    photo.appendChild(img);

    const meta = document.createElement('span');
    meta.className = 'mem-meta';
    const no = document.createElement('span');
    no.className = 'mem-no';
    no.textContent = num;
    const title = document.createElement('span');
    title.className = 'mem-title';
    title.textContent = (card.title || '').toUpperCase();
    meta.append(no, title);

    front.append(photo, meta);

    /* BACK Â· heart + message + optional date */
    const back = document.createElement('span');
    back.className = 'face face--back';
    const heartWrap = document.createElement('span');
    heartWrap.className = 'mem-back-heart';
    heartWrap.innerHTML = HEART_SVG;      // static trusted markup only
    back.appendChild(heartWrap);

    const msg = document.createElement('span');
    msg.className = 'mem-message';
    msg.textContent = card.message || '';
    back.appendChild(msg);

    if (card.date) {
      const date = document.createElement('span');
      date.className = 'mem-date';
      date.textContent = card.date;
      back.appendChild(date);
    }

    inner.append(front, back);
    btn.appendChild(inner);
    unlockEntrance(btn);

    /* flip â€” idempotent toggle, safe under rapid taps */
    btn.addEventListener('click', () => {
      const open = btn.classList.toggle('is-flipped');
      btn.setAttribute('aria-pressed', String(open));
      btn.setAttribute('aria-label',
        `${open ? 'Close' : 'Open'} memory ${idx + 1}${card.title ? ': ' + card.title : ''}`);
    });

    grid.appendChild(btn);
  });
}

function bindMemoryScene() {
  const btn = els.ctaLetter;
  if (!btn) return;
  unlockEntrance(btn);

  btn.addEventListener('click', () => {
    if (btn.dataset.busy) return;          // guard double taps
    btn.dataset.busy = '1';
    btn.classList.add('is-tapped');

    spawnHeartBurst(btn.querySelector('.btn-burst'));

    window.setTimeout(() => goToScene(CONFIG.system.flow.afterMemories), 420);
  });
}


/* ============================================================
   SCENE 4 Â· LOVE LETTER
   ============================================================ */
function applyLetterCopy() {
  const L     = CONFIG.letter || {};
  const name  = (CONFIG.recipientName || '').trim();
  const words = String(L.title || '').trim().split(/\s+/).filter(Boolean);

  /* "A LETTER / FOR YOU" â€” last word becomes the main focus line */
  if (els.letterHeadTop && els.letterHeadMain && words.length > 1) {
    els.letterHeadTop.textContent  = words.slice(0, -1).join(' ');
    els.letterHeadMain.textContent = words[words.length - 1];
  } else if (els.letterHeadMain && words[0]) {
    els.letterHeadMain.textContent = words[0];
  }

  if (els.letterIntro) els.letterIntro.textContent = L.intro || '';
  if (els.envName)     els.envName.textContent     = `For ${name} \u2661`;
  if (els.envelope)    els.envelope.setAttribute('aria-label', `Sealed love letter for ${name}`);
  if (els.openLetterLabel) els.openLetterLabel.textContent = L.openButton || '';

  if (els.paperTitle)    els.paperTitle.textContent    = L.title || '';
  if (els.paperGreeting) els.paperGreeting.textContent = fillName(L.greeting);

  if (els.paperBody) {
    els.paperBody.textContent = '';
    (L.paragraphs || []).forEach((text) => {
      const p = document.createElement('p');
      p.className = 'paper-p fxP';
      p.textContent = fillName(text);
      els.paperBody.appendChild(p);
    });
  }

  if (els.paperClosing)     els.paperClosing.textContent     = L.closing || '';
  if (els.surpriseTeaser)   els.surpriseTeaser.textContent   = L.teaser || '';
  if (els.ctaSurpriseLabel) els.ctaSurpriseLabel.textContent = L.button || '';
}

/* Letter opening sequence -------------------------------------
   tâ‰ˆ0.15s seal fades Â· tâ‰ˆ0.32s flap opens Â· tâ‰ˆ0.56s paper rises
   tâ‰ˆ1.08s envelope dims down Â· tâ‰ˆ1.18s real letter unfolds,
   paragraphs fade in one by one Â· then the outro CTA reveals.  */
function openLetterSequence() {
  const scene = els.letterScene;
  if (!scene) return;

  if (REDUCED_MOTION) {
    /* show everything at once, fully functional */
    ['is-seal', 'is-flap', 'is-rise', 'is-dim', 'is-unfold', 'is-revealed', 'is-complete']
      .forEach((c) => scene.classList.add(c));
    return;
  }

  const beat = (cls, delay) => window.setTimeout(() => scene.classList.add(cls), delay);

  beat('is-seal', 150);
  beat('is-flap', 320);
  beat('is-rise', 560);
  beat('is-dim', 1080);
  beat('is-unfold', 1180);

  /* paragraphs appear one by one as the paper unfolds */
  const step = 330, base = 1450;
  scene.querySelectorAll('.fxP').forEach((el, i) => {
    el.style.transitionDelay = `${base + i * step}ms`;
  });
  beat('is-revealed', base);

  /* outro + tidy-up once the message is on screen */
  const paras = scene.querySelectorAll('.fxP').length;
  beat('is-complete', Math.max(2300, base + paras * step + 450));

  /* gently bring the paper into view */
  window.setTimeout(() => {
    try {
      const top = els.paperWrap ? els.paperWrap.offsetTop - 14 : 0;
      scene.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    } catch (_) { /* older browsers: fine without smooth scroll */ }
  }, 1750);
}

function bindLetterScene() {
  const btn = els.openLetterBtn;
  if (!btn) return;
  unlockEntrance(btn);

  btn.addEventListener('click', () => {
    if (btn.dataset.busy) return;          // guard double taps
    btn.dataset.busy = '1';
    btn.classList.add('is-gone');          // gentle compress + fade away
    openLetterSequence();
  });
}

function bindSurpriseCta() {
  const btn = els.ctaSurprise;
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (btn.dataset.busy) return;          // guard double taps
    btn.dataset.busy = '1';
    btn.classList.add('is-tapped');

    spawnHeartBurst(btn.querySelector('.btn-burst'));

    window.setTimeout(() => goToScene(CONFIG.system.flow.afterLetter), 420);
  });
}


/* ============================================================
   SCENE 5 Â· FINAL SURPRISE
   ============================================================ */
function applySurpriseCopy() {
  const S      = CONFIG.surprise || {};
  const name   = (CONFIG.recipientName || '').trim();
  const sender = (CONFIG.senderName || '').trim();

  if (els.giftHeadTop)  els.giftHeadTop.textContent  = S.headTop || '';
  if (els.giftHeadMain) els.giftHeadMain.textContent = S.headMain || '';
  if (els.giftIntro)    els.giftIntro.textContent    = S.intro || '';
  if (els.giftBtnLabel) els.giftBtnLabel.textContent = CONFIG.letter.button || '';

  /* final title â€” "\n" splits the emotional centerpiece lines */
  if (els.surpriseTitle) {
    els.surpriseTitle.textContent = '';
    String(S.title || '').split('\n').filter(Boolean).forEach((line, i) => {
      const span = document.createElement('span');
      span.className = 'st-line' + (i > 0 ? ' accent' : '');
      span.textContent = line;
      els.surpriseTitle.appendChild(span);
    });
  }

  if (els.surpriseMsg) els.surpriseMsg.textContent = S.message || '';

  /* final photo (graceful fallback if the file is missing).
     Eager-loaded on purpose: it should be ready by the time the
     gift opens, not pop in afterwards.                           */
  if (els.finalPhoto) {
    els.finalPhoto.alt = name && sender ? `${name} & ${sender} \u2661` : 'Our final moment';
    els.finalPhoto.decoding = 'async';
    const figure = els.finalPhoto.closest('.reveal-photo');
    if (S.image) {
      els.finalPhoto.addEventListener('error', () => figure && figure.classList.add('no-photo'), { once: true });
      els.finalPhoto.src = S.image;
    } else if (figure) {
      figure.classList.add('no-photo');
    }
  }

  if (els.sigPre)   els.sigPre.textContent   = S.signaturePre || '';
  if (els.sigName)  els.sigName.textContent  = sender ? `${sender} \u2661` : '\u2661';
  if (els.madeWith) els.madeWith.textContent = S.madeWith || '';
}

/* shared particle: one soft rising heart / spark ---------------- */
function makeRiser(container, opts) {
  const p = document.createElement('span');
  p.className = opts.className;
  if (opts.char) p.textContent = opts.char;
  styleProps(p, {
    'left'          : opts.left,
    'top'           : opts.top,
    'width'         : `${opts.size}px`,
    'height'        : `${opts.size}px`,
    'font-size'     : `${opts.size}px`,
    '--tx'          : opts.tx,
    '--ty'          : opts.ty,
    '--rot'         : `${Math.round(rand(-30, 30))}deg`,
    '--sc'          : rand(0.8, 1.25).toFixed(2),
    '--o'           : rand(opts.oMin, opts.oMax).toFixed(2),
    'animation-duration': `${Math.round(rand(opts.durMin, opts.durMax))}ms`,
    'animation-delay': opts.delay || '0ms',
    'animation-iteration-count': opts.once === false ? 'infinite' : '1',
  });
  container.appendChild(p);
  return p;
}

/* tiny hearts & sparkles blooming from the opened gift ---------- */
function spawnGiftMagic(box) {
  if (!box || REDUCED_MOTION) return;
  let layer = box.querySelector('.gift-magic');
  if (!layer) {
    layer = document.createElement('span');
    layer.className = 'gift-magic';
    layer.setAttribute('aria-hidden', 'true');
    box.appendChild(layer);
  }
  for (let i = 0; i < 6; i++) {
    const el = makeRiser(layer, {
      className: 'magic-p magic-heart',
      char: Math.random() < 0.5 ? '\u2665' : '\u2661',
      left: '50%', top: '40%',
      tx: `${Math.round(rand(-64, 64))}px`,
      ty: `${Math.round(rand(-130, -70))}px`,
      size: Math.round(rand(9, 15)),
      oMin: 0.5, oMax: 0.85, durMin: 950, durMax: 1550,
      delay: `${Math.round(rand(0, 450))}ms`,
    });
    el.style.color = 'var(--rose-deep)';
  }
  for (let i = 0; i < 5; i++) {
    makeRiser(layer, {
      className: 'magic-p magic-spark',
      left: `${rand(38, 62)}%`, top: `${rand(34, 52)}%`,
      tx: `${Math.round(rand(-46, 46))}px`,
      ty: `${Math.round(rand(-95, -45))}px`,
      size: Math.round(rand(4, 7)),
      oMin: 0.5, oMax: 0.9, durMin: 800, durMax: 1250,
      delay: `${Math.round(rand(0, 500))}ms`,
    });
  }
  window.setTimeout(() => { layer.textContent = ''; }, 3400);
}

/* a few very subtle hearts drifting up at the very end ---------- */
function spawnFinalFloaters(container) {
  if (!container || REDUCED_MOTION) return;
  container.textContent = '';
  for (let i = 0; i < 5; i++) {
    const dur = rand(11000, 17000);
    const el = makeRiser(container, {
      className: 'magic-p floater-h',
      char: Math.random() < 0.5 ? '\u2665' : '\u2661',
      left: `${rand(8, 92)}%`, top: '88%',
      tx: `${Math.round(rand(-30, 30))}px`,
      ty: `${-Math.round(rand(150, 210))}px`,
      size: Math.round(rand(10, 17)),
      oMin: 0.10, oMax: 0.18, durMin: dur, durMax: dur,
      once: false,
      delay: `${-Math.round(rand(0, dur))}ms`,
    });
    el.style.color = 'var(--rose)';
  }
}

/* Gift opening sequence ----------------------------------------
   tâ‰ˆ0.12s gift grows Â· tâ‰ˆ0.48s lid lifts + glow blooms + magic
   tâ‰ˆ1.4s backdrop brightens & reveal unfolds Â· tâ‰ˆ1.75s+ the
   photo, title, message and signature fade in one by one.       */
function openGiftSequence() {
  const scene = els.giftScene;
  if (!scene) return;

  if (REDUCED_MOTION) {
    ['is-growing', 'is-open', 'is-reveal', 'is-revealed', 'is-complete']
      .forEach((c) => scene.classList.add(c));
    document.body.classList.add('gift-open');     // brighter backdrop immediately
    return;
  }

  const beat = (cls, delay) => window.setTimeout(() => scene.classList.add(cls), delay);

  beat('is-growing', 120);
  beat('is-open', 480);
  window.setTimeout(() => spawnGiftMagic(els.giftBox), 640);

  beat('is-reveal', 1400);
  window.setTimeout(() => document.body.classList.add('gift-open'), 1450);

  const step = 300, base = 1750;
  scene.querySelectorAll('.fxR').forEach((el, i) => {
    el.style.transitionDelay = `${base + i * step}ms`;
  });
  beat('is-revealed', base);

  const items = scene.querySelectorAll('.fxR').length;
  const doneAt = Math.max(3400, base + items * step + 500);
  beat('is-complete', doneAt);
  window.setTimeout(() => spawnFinalFloaters(els.finalFloaters), doneAt + 150);

  /* gently bring the reveal into view */
  window.setTimeout(() => {
    try {
      const top = els.revealWrap ? els.revealWrap.offsetTop - 14 : 0;
      scene.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    } catch (_) { /* older browsers: fine without smooth scroll */ }
  }, 2000);
}

function bindGiftScene() {
  const btn = els.openGiftBtn;
  if (!btn) return;
  unlockEntrance(btn);

  btn.addEventListener('click', () => {
    if (btn.dataset.busy) return;          // guard double taps
    btn.dataset.busy = '1';
    btn.classList.add('is-gone');          // gentle compress + fade away
    openGiftSequence();
  });
}


/* ============================================================
   07 Â· SCENE MANAGER / INTRO TIMELINE
   One reliable system for the whole flow:
   intro â†’ anniversary â†’ memories â†’ letter â†’ surprise.
   ============================================================ */
function goToScene(id) {
  if (state.sceneBusy) return;             // never overlap transitions

  const next = document.getElementById(id);
  const current = document.querySelector('.scene.is-active');
  if (!next || next === current) return;

  state.sceneBusy = true;

  if (current) {
    current.classList.add('is-leaving');
    current.classList.remove('is-active');
    window.setTimeout(
      () => current.classList.remove('is-leaving'),
      CONFIG.system.transitionMs
    );
  }

  /* slight overlap keeps the hand-off dreamy rather than abrupt */
  window.setTimeout(() => {
    next.classList.add('is-active');
    next.scrollTop = 0;                    // reset internally-scrolling scenes
    document.body.setAttribute('data-scene', id);   // per-scene backdrop mood
  }, 260);

  /* release the lock once both fades have fully settled */
  window.setTimeout(() => { state.sceneBusy = false; }, CONFIG.system.transitionMs + 400);
}

function startIntro() {
  if (state.introStarted) return;
  state.introStarted = true;

  document.body.classList.add('experience-live');

  const hold = REDUCED_MOTION ? 1500 : CONFIG.system.introHoldMs;
  window.setTimeout(() => goToScene(CONFIG.system.flow.start), hold);
}

/* Wait (briefly) for webfonts so the name animates with its true face. */
function beginWhenReady() {
  const kick = () => { if (!state.gatePending) startIntro(); };

  if (document.fonts && document.fonts.ready) {
    let settled = false;
    const once = () => { if (settled) return; settled = true; kick(); };
    document.fonts.ready.then(once);
    window.setTimeout(once, 900);          // safety net
  } else {
    window.setTimeout(kick, 250);
  }
}


/* ============================================================
   08 Â· BOOT
   ============================================================ */
(function boot() {
  applyRecipient();
  applyAnniversaryCopy();
  applyMemoryCopy();
  applyLetterCopy();
  applySurpriseCopy();
  buildGlobalBackground();
  setupMusic();

  document.body.dataset.scene = 'scene-intro';  // backdrop mood per scene

  if (els.gateButton) els.gateButton.addEventListener('click', startMusicFromGesture);
  if (els.gate)       els.gate.addEventListener('click', (e) => {
    if (e.target === els.gate) startMusicFromGesture();
  });
  if (els.toggle)     els.toggle.addEventListener('click', onToggleClick);

  bindAnniversaryScene();
  renderMemoryCards();
  bindMemoryScene();
  bindLetterScene();
  bindSurpriseCta();
  bindGiftScene();
  beginWhenReady();
})();
