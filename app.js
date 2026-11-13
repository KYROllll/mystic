/* Generated from app.jsx by `npm run build` — edit the .jsx source, not this file. */
// app.jsx — Mystical Tarot landing page
// Hebrew RTL, full single-page site. Sections: Hero, About, Services,
// Card of the Day (interactive), Testimonials, Contact, Footer.

const {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;

// ── Brand ───────────────────────────────────────────────────────────────────
const BRAND = {
  he: 'אור ודרך',
  ru: 'Свет и путь',
  focus: 'ייעוץ רוחני · קלפי טארוט · ניקוי רוחני',
  focusRu: 'Эзотерические консультации и духовные практики',
  langs: 'עברית · רוסית · קווקזית',
  langsRu: 'на русском и иврите'
};

// ── Tweak defaults (persisted by the host on disk) ───────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#0d0a1a", "#d4af6f", "#f0e6d2"],
  "displayFont": "Frank Ruhl Libre",
  "starDensity": 70,
  "showMoon": true,
  "animatedStars": true,
  "heroLayout": "centered"
} /*EDITMODE-END*/;

// Palette options — first is bg, second is gold accent, third is ink
const PALETTES = [["#0d0a1a", "#d4af6f", "#f0e6d2"],
// Cosmic night (default)
["#1a0d1f", "#c89aa8", "#f5e6ec"],
// Twilight rose
["#0a1420", "#b8c7d9", "#e8eef5"],
// Moonlit silver
["#1b1208", "#e0b566", "#f3e7d0"] // Amber dusk
];
const DISPLAY_FONTS = [{
  value: "Frank Ruhl Libre",
  label: "Frank Ruhl"
}, {
  value: "Cormorant Garamond",
  label: "Cormorant"
}, {
  value: "Assistant",
  label: "Assistant"
}];

// ── Decorative SVG glyphs ────────────────────────────────────────────────────
function Divider({
  width = 220
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 220 18",
    width: width,
    height: 18,
    "aria-hidden": "true",
    style: {
      display: 'block',
      margin: '0 auto',
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "9",
    x2: "92",
    y2: "9",
    stroke: "var(--gold)",
    strokeWidth: "0.5",
    strokeOpacity: "0.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "128",
    y1: "9",
    x2: "220",
    y2: "9",
    stroke: "var(--gold)",
    strokeWidth: "0.5",
    strokeOpacity: "0.5"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(110 9)",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -7 L 5 0 L 0 7 L -5 0 Z"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "1.6",
    fill: "var(--gold)"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "9",
    r: "1",
    fill: "var(--gold)",
    fillOpacity: "0.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "9",
    r: "1",
    fill: "var(--gold)",
    fillOpacity: "0.6"
  }));
}
function SmallStar({
  size = 12,
  opacity = 0.7
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 12",
    width: size,
    height: size,
    "aria-hidden": "true",
    style: {
      opacity
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 0 L7.2 4.8 L12 6 L7.2 7.2 L6 12 L4.8 7.2 L0 6 L4.8 4.8 Z",
    fill: "var(--gold)"
  }));
}
function Moon() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 120",
    width: "180",
    height: "180",
    "aria-hidden": "true",
    style: {
      filter: 'drop-shadow(0 0 40px rgba(212,175,111,0.25))'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "moon-grad",
    cx: "60%",
    cy: "40%",
    r: "55%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#fff6e0",
    stopOpacity: "0.95"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "60%",
    stopColor: "#e8d2a0",
    stopOpacity: "0.7"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#d4af6f",
    stopOpacity: "0.2"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "moon-halo",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "40%",
    stopColor: "rgba(212,175,111,0.18)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(212,175,111,0)"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "58",
    fill: "url(#moon-halo)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 78 22 A 42 42 0 1 0 78 98 A 30 30 0 1 1 78 22 Z",
    fill: "url(#moon-grad)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "50",
    r: "3",
    fill: "#000",
    fillOpacity: "0.08"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "48",
    cy: "72",
    r: "2",
    fill: "#000",
    fillOpacity: "0.06"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "65",
    r: "1.5",
    fill: "#000",
    fillOpacity: "0.07"
  }));
}

// Eye-of-Horus-style glyph for section accents — abstract, original
function EyeGlyph() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 60 60",
    width: "60",
    height: "60",
    "aria-hidden": "true",
    style: {
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "30",
    r: "22",
    strokeOpacity: "0.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "30",
    r: "14",
    strokeOpacity: "0.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "30",
    r: "6",
    strokeOpacity: "0.9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "30",
    r: "2",
    fill: "var(--gold)",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 30 4 L 30 12 M 30 48 L 30 56 M 4 30 L 12 30 M 48 30 L 56 30",
    strokeOpacity: "0.7"
  })));
}

// ── Starfield background ─────────────────────────────────────────────────────
function StarField({
  density,
  animated,
  showMoon
}) {
  const stars = useMemo(() => {
    return Array.from({
      length: density
    }, (_, i) => ({
      id: i,
      cx: Math.random() * 100,
      cy: Math.random() * 100,
      r: Math.random() * 1.1 + 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      delay: Math.random() * 6,
      duration: 3 + Math.random() * 5
    }));
  }, [density]);
  return /*#__PURE__*/React.createElement("div", {
    className: "starfield",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cosmic-glow"
  }), /*#__PURE__*/React.createElement("svg", {
    className: "stars-svg",
    preserveAspectRatio: "none"
  }, stars.map(s => /*#__PURE__*/React.createElement("circle", {
    key: s.id,
    cx: `${s.cx}%`,
    cy: `${s.cy}%`,
    r: s.r,
    fill: "var(--ink)",
    opacity: s.opacity,
    style: animated ? {
      animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`
    } : undefined
  }))), showMoon && /*#__PURE__*/React.createElement("div", {
    className: "moon-wrap",
    style: {
      animation: 'float 9s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement(Moon, null)), /*#__PURE__*/React.createElement("div", {
    className: "ring ring-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ring ring-2"
  }));
}

// ── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile sheet on Escape, on viewport growth, and lock body scroll
  // while it is open so the page behind it doesn't drift.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = e => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 960) setMenuOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);
  const items = [{
    id: 'about',
    label: 'אודות'
  }, {
    id: 'services',
    label: 'שירותים'
  }, {
    id: 'oracle',
    label: 'קלף היום'
  }, {
    id: 'voices',
    label: 'מילות לקוחות'
  }, {
    id: 'contact',
    label: 'יצירת קשר'
  }];
  const close = () => setMenuOpen(false);
  return /*#__PURE__*/React.createElement("nav", {
    className: `nav ${scrolled || menuOpen ? 'nav-scrolled' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "nav-brand display",
    onClick: close,
    "aria-label": `${BRAND.he} — ${BRAND.ru}`
  }, /*#__PURE__*/React.createElement(SmallStar, {
    size: 14,
    opacity: 0.85
  }), /*#__PURE__*/React.createElement("span", {
    className: "brand-he"
  }, BRAND.he), /*#__PURE__*/React.createElement("span", {
    className: "brand-ru latin",
    dir: "ltr"
  }, BRAND.ru)), /*#__PURE__*/React.createElement("ul", {
    className: "nav-links"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.id
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${it.id}`
  }, it.label)))), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("span", null, "\u05EA\u05D9\u05D0\u05D5\u05DD \u05D9\u05D9\u05E2\u05D5\u05E5")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `nav-burger ${menuOpen ? 'is-open' : ''}`,
    "aria-label": menuOpen ? 'סגירת תפריט' : 'פתיחת תפריט',
    "aria-expanded": menuOpen,
    "aria-controls": "mobile-menu",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), /*#__PURE__*/React.createElement("div", {
    id: "mobile-menu",
    className: `nav-mobile ${menuOpen ? 'is-open' : ''}`,
    hidden: !menuOpen
  }, /*#__PURE__*/React.createElement("ul", null, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.id
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${it.id}`,
    onClick: close
  }, it.label)))), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn-primary btn-block",
    onClick: close
  }, "\u05E7\u05D1\u05D9\u05E2\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05D0\u05D9\u05E9\u05D9"), /*#__PURE__*/React.createElement("p", {
    className: "nav-mobile-fine latin",
    dir: "ltr"
  }, BRAND.focusRu)));
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero({
  tagline,
  layout
}) {
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    className: `hero hero-${layout}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow reveal"
  }, /*#__PURE__*/React.createElement(SmallStar, {
    size: 10,
    opacity: 0.7
  }), /*#__PURE__*/React.createElement("span", {
    className: "latin",
    dir: "ltr"
  }, BRAND.focusRu), /*#__PURE__*/React.createElement(SmallStar, {
    size: 10,
    opacity: 0.7
  })), /*#__PURE__*/React.createElement("h1", {
    className: "hero-title display reveal reveal-delay-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-title-line latin",
    dir: "ltr"
  }, BRAND.ru), /*#__PURE__*/React.createElement("span", {
    className: "hero-title-emph"
  }, BRAND.he)), /*#__PURE__*/React.createElement("p", {
    className: "hero-name display reveal reveal-delay-2"
  }, BRAND.focus), /*#__PURE__*/React.createElement("div", {
    className: "hero-divider reveal reveal-delay-2"
  }, /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub reveal reveal-delay-3"
  }, tagline), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta reveal reveal-delay-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn-primary"
  }, /*#__PURE__*/React.createElement("span", null, "\u05E7\u05D1\u05D9\u05E2\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05D0\u05D9\u05E9\u05D9"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 14 10",
    width: "14",
    height: "10",
    "aria-hidden": "true",
    style: {
      marginInlineStart: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 5 L 8 0 M 14 5 L 8 10 M 14 5 L 0 5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#oracle",
    className: "btn btn-ghost"
  }, "\u05E9\u05DC\u05D9\u05E4\u05EA \u05E7\u05DC\u05E3 \u05D4\u05D9\u05D5\u05DD")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta reveal reveal-delay-4"
  }, /*#__PURE__*/React.createElement("span", null, "28 \u05E9\u05E0\u05D5\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF"), /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", null, BRAND.langs), /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", null, "\u05DE\u05E2\u05E0\u05D4 \u05D0\u05D9\u05E9\u05D9 \u05D5\u05D3\u05D9\u05E1\u05E7\u05E8\u05D8\u05D9"))), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "scroll-hint",
    "aria-label": "\u05D2\u05DC\u05D9\u05DC\u05D4"
  }, /*#__PURE__*/React.createElement("span", null, "\u05D2\u05DC\u05D2\u05DC\u05D9 \u05DE\u05D8\u05D4"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 10 16",
    width: "10",
    height: "16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 0 L5 14 M1 10 L5 14 L9 10",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1"
  }))));
}

// ── Mystic 3D Orb — rotating sacred geometry, floating particles ─────────────
function MysticOrb() {
  // Orbiting particles — fixed positions/angles, randomized once
  const particles = useMemo(() => Array.from({
    length: 14
  }, (_, i) => ({
    id: i,
    radius: 110 + Math.random() * 60,
    angle: i * 360 / 14 + Math.random() * 20,
    size: 1.4 + Math.random() * 2.2,
    duration: 18 + Math.random() * 16,
    delay: -Math.random() * 30,
    direction: i % 2 === 0 ? 1 : -1
  })), []);
  return /*#__PURE__*/React.createElement("div", {
    className: "mystic-orb"
  }, /*#__PURE__*/React.createElement("div", {
    className: "orb-aura"
  }), /*#__PURE__*/React.createElement("div", {
    className: "orb-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "orb-ring orb-ring-1"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "-100 -100 200 200",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "0",
    r: "92",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.4",
    strokeOpacity: "0.55",
    strokeDasharray: "2 6"
  }), Array.from({
    length: 12
  }).map((_, i) => {
    const a = i * 30 * Math.PI / 180;
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: Math.cos(a) * 86,
      y1: Math.sin(a) * 86,
      x2: Math.cos(a) * 96,
      y2: Math.sin(a) * 96,
      stroke: "var(--gold)",
      strokeWidth: "0.6",
      strokeOpacity: "0.8"
    });
  }), [0, 90, 180, 270].map(deg => {
    const a = deg * Math.PI / 180;
    return /*#__PURE__*/React.createElement("g", {
      key: deg,
      transform: `translate(${Math.cos(a) * 78} ${Math.sin(a) * 78})`
    }, /*#__PURE__*/React.createElement("circle", {
      r: "2.4",
      fill: "var(--gold)",
      fillOpacity: "0.85"
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "orb-ring orb-ring-2"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "-100 -100 200 200",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "0",
    r: "74",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.5",
    strokeOpacity: "0.45"
  }), [0, 60, 120, 180, 240, 300].map(deg => {
    const a = deg * Math.PI / 180;
    return /*#__PURE__*/React.createElement("circle", {
      key: deg,
      cx: Math.cos(a) * 26,
      cy: Math.sin(a) * 26,
      r: "26",
      fill: "none",
      stroke: "var(--gold)",
      strokeWidth: "0.4",
      strokeOpacity: "0.45"
    });
  }))), /*#__PURE__*/React.createElement("div", {
    className: "orb-ring orb-ring-3"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "-100 -100 200 200",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "0",
    r: "58",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.5",
    strokeOpacity: "0.7",
    strokeDasharray: "1 4"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "var(--gold)",
    strokeWidth: "0.5",
    strokeOpacity: "0.55",
    fill: "none"
  }, [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map(deg => {
    const a = deg * Math.PI / 180;
    return /*#__PURE__*/React.createElement("line", {
      key: deg,
      x1: Math.cos(a) * -50,
      y1: Math.sin(a) * -50,
      x2: Math.cos(a) * 50,
      y2: Math.sin(a) * 50
    });
  })))), /*#__PURE__*/React.createElement("div", {
    className: "orb-core"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "-50 -50 100 100",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "core-grad",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#fff6e0",
    stopOpacity: "0.95"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "40%",
    stopColor: "var(--gold)",
    stopOpacity: "0.7"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--gold)",
    stopOpacity: "0"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "core-inner",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#fff",
    stopOpacity: "1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#fff6e0",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("circle", {
    r: "44",
    fill: "url(#core-grad)"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "18",
    fill: "url(#core-inner)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M -8 -2 A 10 10 0 1 0 -8 -2.5 A 7 7 0 1 1 -8 -2 Z",
    fill: "var(--bg)",
    fillOpacity: "0.35"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(6 -2)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 -3 L0.8 -0.8 L3 0 L0.8 0.8 L0 3 L-0.8 0.8 L-3 0 L-0.8 -0.8 Z",
    fill: "var(--gold)"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "orb-particles"
  }, particles.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "orbit-track",
    style: {
      width: p.radius * 2,
      height: p.radius * 2,
      marginLeft: -p.radius,
      marginTop: -p.radius,
      animation: `orbitSpin ${p.duration}s linear ${p.delay}s infinite ${p.direction < 0 ? 'reverse' : 'normal'}`,
      transform: `rotate(${p.angle}deg)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "orbit-dot",
    style: {
      width: p.size,
      height: p.size,
      animation: `orbitPulse ${4 + p.id % 4}s ease-in-out infinite`,
      animationDelay: `${p.id * 0.3}s`
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "orb-caption latin"
  }, "\u2014 Aperi Cor Tuum \u2014"));
}

// ── About ────────────────────────────────────────────────────────────────────
function About({
  name
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "section section-about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow latin"
  }, "\u2014 I \u2014"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title display"
  }, "\u05D0\u05D5\u05D3\u05D5\u05EA\u05D9\u05D9"), /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-portrait"
  }, /*#__PURE__*/React.createElement("div", {
    className: "portrait-frame"
  }, /*#__PURE__*/React.createElement(MysticOrb, null), /*#__PURE__*/React.createElement("div", {
    className: "portrait-glow"
  })), /*#__PURE__*/React.createElement("div", {
    className: "portrait-caption display"
  }, /*#__PURE__*/React.createElement("span", null, name), /*#__PURE__*/React.createElement("span", {
    className: "latin caption-sub",
    dir: "ltr"
  }, "\u2014 Tarot & Spiritual Guidance \u2014"))), /*#__PURE__*/React.createElement("div", {
    className: "about-text"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "\u05D0\u05D5\u05E8 \u05D5\u05D3\u05E8\u05DA \u2014 \u05D9\u05D9\u05E2\u05D5\u05E5 \u05E8\u05D5\u05D7\u05E0\u05D9, \u05E7\u05DC\u05E4\u05D9 \u05D8\u05D0\u05E8\u05D5\u05D8 \u05D5\u05E0\u05D9\u05E7\u05D5\u05D9 \u05E8\u05D5\u05D7\u05E0\u05D9. \u05DB\u05D1\u05E8 28 \u05E9\u05E0\u05D4 \u05D0\u05E0\u05D9 \u05DE\u05DC\u05D5\u05D5\u05D4 \u05D0\u05E0\u05E9\u05D9\u05DD \u05D1\u05DE\u05E1\u05E2 \u05D0\u05DC \u05EA\u05D5\u05DA \u05E2\u05E6\u05DE\u05DD, \u05D1\u05D3\u05E8\u05DA \u05E9\u05DC \u05D0\u05D5\u05E8, \u05D1\u05D4\u05D9\u05E8\u05D5\u05EA \u05D5\u05E8\u05D5\u05D2\u05E2."), /*#__PURE__*/React.createElement("p", null, "\u05D0\u05E0\u05D9 \u05DE\u05E2\u05E0\u05D9\u05E7\u05D4 \u05D9\u05D9\u05E2\u05D5\u05E5 \u05E8\u05D5\u05D7\u05E0\u05D9 \u05D0\u05D9\u05E9\u05D9, \u05E7\u05E8\u05D9\u05D0\u05D4 \u05D1\u05E7\u05DC\u05E4\u05D9 \u05D8\u05D0\u05E8\u05D5\u05D8, \u05E0\u05D9\u05E7\u05D5\u05D9 \u05E8\u05D5\u05D7\u05E0\u05D9 \u05D5\u05D4\u05D2\u05E0\u05D4 \u05DE\u05E2\u05D9\u05DF \u05D4\u05E8\u05E2, \u05D8\u05D9\u05E4\u05D5\u05DC\u05D9 \u05E8\u05D9\u05D9\u05E7\u05D9 \u05DC\u05D0\u05D9\u05D6\u05D5\u05DF \u05D0\u05E0\u05E8\u05D2\u05D8\u05D9, \u05D5\u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05E8\u05D5\u05D7\u05E0\u05D9\u05EA \u05D5\u05E2\u05E1\u05E7\u05D9\u05EA \u05DC\u05E4\u05EA\u05D9\u05D7\u05EA \u05E2\u05E1\u05E7 \u2014 \u05D1\u05D2\u05D9\u05E9\u05D4 \u05DE\u05D7\u05D6\u05E7\u05EA, \u05D1\u05D5\u05E0\u05D4 \u05D5\u05EA\u05D5\u05DE\u05DB\u05EA \u05E9\u05DE\u05E9\u05D9\u05D2\u05D4 \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA."), /*#__PURE__*/React.createElement("p", null, "\u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DE\u05EA\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05D1\u05DE\u05E8\u05D7\u05D1 \u05D1\u05D8\u05D5\u05D7 \u05D5\u05D0\u05D9\u05E0\u05D8\u05D9\u05DE\u05D9 \u2014 \u05D1\u05E4\u05D2\u05D9\u05E9\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA \u05D0\u05D5 \u05D1\u05E9\u05D9\u05D7\u05D4 \u05D8\u05DC\u05E4\u05D5\u05E0\u05D9\u05EA. \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05E0\u05D9\u05EA\u05DF \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05D1\u05E9\u05E4\u05D5\u05EA: \u05E2\u05D1\u05E8\u05D9\u05EA, \u05E8\u05D5\u05E1\u05D9\u05EA \u05D5\u05E7\u05D5\u05D5\u05E7\u05D6\u05D9\u05EA."), /*#__PURE__*/React.createElement("p", {
    className: "about-ru latin",
    dir: "ltr"
  }, "\u042D\u0437\u043E\u0442\u0435\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0438 \u0434\u0443\u0445\u043E\u0432\u043D\u044B\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 \u2014 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u0438 \u0438\u0432\u0440\u0438\u0442\u0435."), /*#__PURE__*/React.createElement("ul", {
    className: "credentials"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "cred-num display"
  }, "28"), /*#__PURE__*/React.createElement("span", {
    className: "cred-lbl"
  }, "\u05E9\u05E0\u05D5\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D5\u05D4\u05E6\u05DC\u05D7\u05D4")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "cred-num display"
  }, "3"), /*#__PURE__*/React.createElement("span", {
    className: "cred-lbl"
  }, "\u05E9\u05E4\u05D5\u05EA: \u05E2\u05D1\u05E8\u05D9\u05EA, \u05E8\u05D5\u05E1\u05D9\u05EA \u05D5\u05E7\u05D5\u05D5\u05E7\u05D6\u05D9\u05EA")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "cred-num display"
  }, "\u221E"), /*#__PURE__*/React.createElement("span", {
    className: "cred-lbl"
  }, "\u05D2\u05D9\u05E9\u05D4 \u05DE\u05D7\u05D6\u05E7\u05EA \u05D5\u05EA\u05D5\u05DE\u05DB\u05EA"))))));
}

// ── Services ─────────────────────────────────────────────────────────────────
const SERVICES = [{
  icon: 'mystic',
  tag: 'קריאה וראייה',
  title: 'קלפי טארוט',
  duration: 'קריאה אישית',
  subtitle: 'קלפים · תמונה · כף יד וקפה',
  price: 'מחיר בפרטי',
  topicValue: 'קלפי טארוט — קריאה אישית בקלפים',
  desc: 'קריאה בקלפי טארוט, פריסת קלפים עם תמונה, קריאת כף יד וקפה. חיבור מעמיק לקבלת בהירות, מענה לשאלות הלב והכוונה מדויקת.',
  features: ['קריאה בקלפי טארוט', 'פריסת קלפים עם תמונה', 'קריאת כף היד וקפה', 'ראייה אינטואיטיבית ומענה מעמיק']
}, {
  icon: 'hamsa',
  tag: 'טיהור והגנה',
  title: 'ניקוי רוחני והגנה',
  duration: 'טיהור וברכה',
  subtitle: 'מים קדושים · עין הרע · רייקי',
  price: 'מחיר בפרטי',
  topicValue: 'ניקוי רוחני והגנה — מים קדושים, עין הרע ורייקי',
  desc: 'ניקוי רוחני במים קדושים, הסרת עין הרע וכישופים, ברכה וליווי לפריון וילודה, וטיפולי רייקי לשחרור חסימות ואיזון אנרגטי עמוק.',
  features: ['ניקוי רוחני ופתיחה במים קדושים', 'הגנה והסרת עין הרע וכישופים', 'ברכה וליווי לפריון וילודה', 'טיפולי רייקי ואיזון אנרגטי'],
  featured: true
}, {
  icon: 'star',
  tag: '28 שנות ניסיון',
  title: 'ייעוץ רוחני ועסקי',
  duration: 'ייעוץ ממוקד תוצאות',
  subtitle: 'עברית · רוסית · קווקזית',
  price: 'מחיר בפרטי',
  topicValue: 'ייעוץ רוחני ועסקי (28 שנות ניסיון)',
  desc: 'שיחת ייעוץ מקצועית ורוחנית לפתיחת עסק, ליווי אישי והכוונה בדרך — עם 28 שנות ניסיון. גישה מחזקת, בונה ותומכת, שמשיגה תוצאות.',
  features: ['28 שנות ניסיון בליווי ובהצלחה', 'שיחת ייעוץ מקצועית ורוחנית', 'גישה מחזקת, בונה ותומכת שמשיגה תוצאות', 'דוברת עברית, רוסית וקווקזית']
}];
function ServiceIcon({
  type
}) {
  if (type === 'mystic' || type === 'crescent') return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 60 60",
    width: "48",
    height: "48",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38 12 A 20 20 0 1 0 38 48 A 15 15 0 1 1 38 12 Z",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 27 23 C 27 23 22 29 22 33 A 5 5 0 0 0 32 33 C 32 29 27 23 27 23 Z",
    fill: "var(--gold)",
    fillOpacity: "0.35",
    stroke: "var(--gold)",
    strokeWidth: "0.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "20",
    r: "1.3",
    fill: "var(--gold)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "38",
    r: "1",
    fill: "var(--gold)",
    fillOpacity: "0.7"
  }));
  if (type === 'hamsa' || type === 'sun') return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 60 60",
    width: "48",
    height: "48",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "30",
    r: "23",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.5",
    strokeDasharray: "2 3",
    strokeOpacity: "0.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 23 44 C 19 44 18 38 18 33 C 18 29 16 27 17 24 C 18 21 21 22 22 25 C 22 19 24 16 26 16 C 28 16 29 19 29 23 C 29 19 30 16 32 16 C 34 16 36 19 36 25 C 37 22 40 21 41 24 C 42 27 40 29 40 33 C 40 38 39 44 35 44 Z",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 23 33 Q 29 27 35 33 Q 29 39 23 33 Z",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "29",
    cy: "33",
    r: "2.2",
    fill: "var(--gold)"
  }));
  // star / business guidance
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 60 60",
    width: "48",
    height: "48",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(30 30)",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.9"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "22",
    strokeWidth: "0.5",
    strokeDasharray: "1 3",
    strokeOpacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 -22 L 4.5 -4.5 L 22 0 L 4.5 4.5 L 0 22 L -4.5 4.5 L -22 0 L -4.5 -4.5 Z",
    fill: "var(--gold)",
    fillOpacity: "0.15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 -22 L 4.5 -4.5 L 22 0 L 4.5 4.5 L 0 22 L -4.5 4.5 L -22 0 L -4.5 -4.5 Z"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "3.2",
    fill: "var(--gold)",
    fillOpacity: "0.6",
    stroke: "none"
  })));
}
function Services({
  onSelectService
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "section section-services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow latin"
  }, "\u2014 II \u2014"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title display"
  }, "\u05D4\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD \u05E9\u05DC\u05D9"), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("p", {
    className: "section-sub"
  }, "\u05D9\u05D9\u05E2\u05D5\u05E5 \u05E8\u05D5\u05D7\u05E0\u05D9, \u05E7\u05DC\u05E4\u05D9 \u05D8\u05D0\u05E8\u05D5\u05D8 \u05D5\u05E0\u05D9\u05E7\u05D5\u05D9 \u05E8\u05D5\u05D7\u05E0\u05D9 \u2014 \u05D1\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA, \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA, \u05E8\u05D5\u05E1\u05D9\u05EA \u05D5\u05E7\u05D5\u05D5\u05E7\u05D6\u05D9\u05EA."), /*#__PURE__*/React.createElement("p", {
    className: "section-sub-ru latin",
    dir: "ltr"
  }, BRAND.focusRu)), /*#__PURE__*/React.createElement("div", {
    className: "services-grid"
  }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: `service-card ${s.featured ? 'service-featured' : ''}`
  }, s.tag && /*#__PURE__*/React.createElement("div", {
    className: "service-tag display"
  }, s.tag), /*#__PURE__*/React.createElement("div", {
    className: "service-icon"
  }, /*#__PURE__*/React.createElement(ServiceIcon, {
    type: s.icon
  })), /*#__PURE__*/React.createElement("h3", {
    className: "service-title display"
  }, s.title), /*#__PURE__*/React.createElement("div", {
    className: "service-meta"
  }, /*#__PURE__*/React.createElement("span", null, s.duration), s.subtitle && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", null, s.subtitle)), s.price && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "service-price"
  }, s.price))), /*#__PURE__*/React.createElement("p", {
    className: "service-desc"
  }, s.desc), /*#__PURE__*/React.createElement("ul", {
    className: "service-features"
  }, s.features.map((f, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 12",
    width: "10",
    height: "10",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 0 L 7 5 L 12 6 L 7 7 L 6 12 L 5 7 L 0 6 L 5 5 Z",
    fill: "var(--gold)"
  })), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "service-cta",
    onClick: e => {
      if (onSelectService) {
        e.preventDefault();
        onSelectService(s.topicValue);
      }
    }
  }, "\u05DC\u05EA\u05D9\u05D0\u05D5\u05DD \u05DE\u05E4\u05D2\u05E9 \u2190")))), /*#__PURE__*/React.createElement("p", {
    className: "services-note"
  }, "* \u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05D1\u05E4\u05E8\u05D8\u05D9 \xB7 \u05E0\u05D9\u05EA\u05DF \u05DC\u05EA\u05D0\u05DD \u05E4\u05D2\u05D9\u05E9\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA \u05D0\u05D5 \u05E9\u05D9\u05D7\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05D8\u05DC\u05E4\u05D5\u05E0\u05D9\u05EA \xB7 \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05E0\u05D9\u05EA\u05DF \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA, \u05E8\u05D5\u05E1\u05D9\u05EA \u05D5\u05E7\u05D5\u05D5\u05E7\u05D6\u05D9\u05EA"));
}

// ── Oracle: Card of the Day ──────────────────────────────────────────────────
function Oracle() {
  // Three face-down cards; user picks one, it flips
  const [picked, setPicked] = useState(null); // index 0/1/2
  const [card, setCard] = useState(null); // TAROT_DECK entry
  const [flipping, setFlipping] = useState(false);
  const flipTimer = useRef(null);
  const lastCard = useRef(null);

  // Never leave a pending flip timer running after unmount / reset
  useEffect(() => () => clearTimeout(flipTimer.current), []);
  const drawCard = idx => {
    if (picked !== null) return;
    // Draw a different card than the previous reading so a repeat never
    // looks like the deck didn't shuffle.
    let c;
    do {
      c = TAROT_DECK[Math.floor(Math.random() * TAROT_DECK.length)];
    } while (TAROT_DECK.length > 1 && c === lastCard.current);
    lastCard.current = c;
    setPicked(idx);
    setFlipping(true);
    setCard(c);
    clearTimeout(flipTimer.current);
    flipTimer.current = setTimeout(() => setFlipping(false), 900);
  };
  const reset = () => {
    clearTimeout(flipTimer.current);
    setFlipping(false);
    setPicked(null);
    setCard(null);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "oracle",
    className: "section section-oracle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow latin"
  }, "\u2014 III \u2014"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title display"
  }, "\u05E7\u05DC\u05E3 \u05D4\u05D9\u05D5\u05DD"), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("p", {
    className: "section-sub"
  }, "\u05E7\u05D7\u05D9 \u05E8\u05D2\u05E2. \u05E0\u05E9\u05DE\u05D9 \u05E2\u05DE\u05D5\u05E7. \u05D7\u05E9\u05D1\u05D9 \u05E2\u05DC \u05E9\u05D0\u05DC\u05D4 \u05D0\u05D7\u05EA \u2014 \u05D5\u05D1\u05D7\u05E8\u05D9 \u05E7\u05DC\u05E3.")), /*#__PURE__*/React.createElement("div", {
    className: "oracle-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cards-row"
  }, [0, 1, 2].map(i => {
    const isPicked = picked === i;
    const isFaded = picked !== null && !isPicked;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      className: `tarot-card ${isPicked ? 'card-picked' : ''} ${isFaded ? 'card-faded' : ''} ${flipping && isPicked ? 'card-flipping' : ''}`,
      onClick: () => drawCard(i),
      disabled: picked !== null,
      "aria-label": `קלף ${['ראשון', 'שני', 'שלישי'][i]} — שליפת קלף היום`,
      "aria-pressed": isPicked
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-face card-face-back"
    }, /*#__PURE__*/React.createElement(CardBackArt, null)), /*#__PURE__*/React.createElement("div", {
      className: "card-face card-face-front"
    }, isPicked && card && /*#__PURE__*/React.createElement(CardFaceArt, {
      num: card.num,
      name: card.name
    }))), !isPicked && /*#__PURE__*/React.createElement("div", {
      className: "card-hint display"
    }, /*#__PURE__*/React.createElement("span", null, "\u05E7\u05DC\u05E3 ", ['ראשון', 'שני', 'שלישי'][i])));
  })), /*#__PURE__*/React.createElement("div", {
    className: "oracle-live",
    "aria-live": "polite",
    "aria-atomic": "true"
  }, card && !flipping && /*#__PURE__*/React.createElement("div", {
    className: "oracle-reveal reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal-eyebrow latin"
  }, "\u2014 Today's Card \u2014"), /*#__PURE__*/React.createElement("h3", {
    className: "reveal-title display"
  }, /*#__PURE__*/React.createElement("span", {
    className: "latin reveal-num"
  }, card.num), /*#__PURE__*/React.createElement("span", null, " \xB7 "), /*#__PURE__*/React.createElement("span", null, card.name)), /*#__PURE__*/React.createElement("div", {
    className: "reveal-keys"
  }, card.keywords), /*#__PURE__*/React.createElement("p", {
    className: "reveal-text"
  }, card.reading), /*#__PURE__*/React.createElement("button", {
    onClick: reset,
    className: "btn btn-ghost btn-sm"
  }, "\u05E9\u05DC\u05D9\u05E4\u05EA \u05E7\u05DC\u05E3 \u05E0\u05D5\u05E1\u05E3 \u21BB")), !card && /*#__PURE__*/React.createElement("div", {
    className: "oracle-prompt"
  }, /*#__PURE__*/React.createElement(EyeGlyph, null), /*#__PURE__*/React.createElement("p", null, "\u05D4\u05E7\u05DC\u05E4\u05D9\u05DD \u05DE\u05D7\u05DB\u05D9\u05DD. \u05E1\u05DE\u05DB\u05D9 \u05E2\u05DC \u05D4\u05DC\u05D1 \u05E9\u05DC\u05DA \u2014 \u05D4\u05D5\u05D0 \u05D9\u05D5\u05D3\u05E2.")))));
}

// ── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [{
  text: 'הגעתי במצב לב סוער ויצאתי עם בהירות שכבר חודשים חיפשתי. הקריאה הייתה מדויקת, רכה, ובדיוק במקום הנכון. אני חוזרת.',
  name: 'דנה ק.',
  city: 'תל אביב'
}, {
  text: 'הרגשתי שמישהי באמת רואה אותי — לא מנחשת. הקלפים פתחו שיחה שלא ידעתי שאני צריכה. תודה גדולה.',
  name: 'מיכל ב.',
  city: 'חיפה'
}, {
  text: 'באתי סקפטי לחלוטין. יצאתי עם תחושת ביטחון שלא הייתה לי כבר שנים. מעבר לקלפים, יש פה אדם שמקשיב לעומק.',
  name: 'יואב ש.',
  city: 'רעננה'
}];
function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI(p => (p + 1) % TESTIMONIALS.length);
  const prev = () => setI(p => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const t = TESTIMONIALS[i];

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => setI(p => (p + 1) % TESTIMONIALS.length), 8000);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "voices",
    className: "section section-voices"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow latin"
  }, "\u2014 IV \u2014"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title display"
  }, "\u05DE\u05D9\u05DC\u05D9\u05DD \u05E9\u05E0\u05E9\u05D0\u05E8\u05D5\u05EA \u05D0\u05D9\u05EA\u05D9"), /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement("div", {
    className: "voices-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote-mark display",
    "aria-hidden": "true"
  }, "\u05F4"), /*#__PURE__*/React.createElement("blockquote", {
    key: i,
    className: "voice-quote reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "voice-text"
  }, t.text), /*#__PURE__*/React.createElement("footer", {
    className: "voice-cite"
  }, /*#__PURE__*/React.createElement("span", {
    className: "voice-name display"
  }, t.name), /*#__PURE__*/React.createElement("span", {
    className: "voice-city"
  }, t.city))), /*#__PURE__*/React.createElement("div", {
    className: "voice-controls"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: prev,
    className: "voice-arrow",
    "aria-label": "\u05D4\u05E2\u05D3\u05D5\u05EA \u05D4\u05E7\u05D5\u05D3\u05DE\u05EA"
  }, "\u203A"), /*#__PURE__*/React.createElement("div", {
    className: "voice-dots"
  }, TESTIMONIALS.map((_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: `dot-btn ${k === i ? 'on' : ''}`,
    onClick: () => setI(k),
    "aria-label": `עדות ${k + 1}`
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: next,
    className: "voice-arrow",
    "aria-label": "\u05D4\u05E2\u05D3\u05D5\u05EA \u05D4\u05D1\u05D0\u05D4"
  }, "\u2039"))));
}

// ── Contact ──────────────────────────────────────────────────────────────────
function Contact({
  name,
  phone,
  selectedTopic
}) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    topic: selectedTopic || 'קלפי טארוט — קריאה אישית בקלפים',
    message: ''
  });

  // Automatically sync form topic when user selects a package from services
  useEffect(() => {
    if (selectedTopic) {
      setForm(prev => ({
        ...prev,
        topic: selectedTopic
      }));
    }
  }, [selectedTopic]);
  const [sent, setSent] = useState(false);
  const submit = e => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    const messageLines = [`שלום מרים, פנייה חדשה מאתר ${BRAND.he}:`, `• שם מלא: ${form.name}`, `• טלפון: ${form.phone}`, `• שירות מבוקש: ${form.topic}`];
    if (form.message && form.message.trim()) {
      messageLines.push(`• פרטים / שאלות: ${form.message.trim()}`);
    }
    const fullMessage = messageLines.join('\n');
    const targetPhone = (phone || '053-964-6269').replace(/[^\d]/g, '').replace(/^0/, '972');
    const waUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(fullMessage)}`;
    setSent(true);
    // Direct navigation bypasses browser popup blockers on mobile and desktop
    window.location.href = waUrl;
    setTimeout(() => setSent(false), 4000);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "section section-contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow latin"
  }, "\u2014 V \u2014"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title display"
  }, "\u05EA\u05D9\u05D0\u05D5\u05DD \u05D9\u05D9\u05E2\u05D5\u05E5"), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("p", {
    className: "section-sub"
  }, "\u05D4\u05E9\u05D0\u05D9\u05E8\u05D9 \u05E4\u05E8\u05D8\u05D9\u05DD \u05D5\u05D0\u05D7\u05D6\u05D5\u05E8 \u05D0\u05DC\u05D9\u05D9\u05DA \u05D1\u05EA\u05D5\u05DA 24 \u05E9\u05E2\u05D5\u05EA. \u05D0\u05DD \u05D6\u05D4 \u05D3\u05D7\u05D5\u05E3 \u2014 \u05D0\u05E4\u05E9\u05E8 \u05D2\u05DD \u05D1\u05D8\u05DC\u05E4\u05D5\u05DF.")), /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-card-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "contact-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-label latin"
  }, "\u2014 Telephone \u2014"), phone ? /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/[^\d+]/g, '')}`,
    className: "contact-value display"
  }, phone) : /*#__PURE__*/React.createElement("span", {
    className: "contact-value display contact-pending"
  }, "\u2014 \u05D9\u05EA\u05E2\u05D3\u05DB\u05DF \u05D1\u05E7\u05E8\u05D5\u05D1 \u2014"), /*#__PURE__*/React.createElement("div", {
    className: "contact-hint"
  }, "\u05D6\u05DE\u05D9\u05E0\u05D4 \u05D9\u05DE\u05D9\u05DD \u05D0\u05F3\u2013\u05D4\u05F3 \xB7 10:00\u201321:00")), phone && /*#__PURE__*/React.createElement("a", {
    href: `https://wa.me/${phone.replace(/[^\d]/g, '').replace(/^0/, '972')}`,
    target: "_blank",
    rel: "noopener",
    className: "whatsapp-cta",
    "aria-label": "\u05E4\u05EA\u05D9\u05D7\u05EA \u05E6'\u05D0\u05D8 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "whatsapp-icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: "22",
    height: "22"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-2c1.8 1 3.9 1.5 6.3 1.5 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-2 0-3.9-.5-5.5-1.5l-.4-.2-4.6 1.2 1.2-4.5-.3-.4C5.4 18 5 16.5 5 15c0-6.1 4.9-11 11-11s11 4.9 11 11-4.9 11-11 11zm6.1-8.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4 0-.1-.3-.2-.6-.4z"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "whatsapp-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "whatsapp-title display"
  }, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4"), /*#__PURE__*/React.createElement("span", {
    className: "whatsapp-sub"
  }, "\u05DE\u05E2\u05E0\u05D4 \u05DE\u05D4\u05D9\u05E8 \xB7 \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05E6'\u05D0\u05D8")), /*#__PURE__*/React.createElement("span", {
    className: "whatsapp-arrow",
    "aria-hidden": "true"
  }, "\u2190")))), /*#__PURE__*/React.createElement("form", {
    className: "contact-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "form-label"
  }, "\u05E9\u05DD \u05DE\u05DC\u05D0"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    }),
    placeholder: "\u05E9\u05DE\u05DA \u05DB\u05D0\u05DF"
  })), /*#__PURE__*/React.createElement("label", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "form-label"
  }, "\u05D8\u05DC\u05E4\u05D5\u05DF"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    required: true,
    value: form.phone,
    onChange: e => setForm({
      ...form,
      phone: e.target.value
    }),
    placeholder: "053-964-6269"
  })), /*#__PURE__*/React.createElement("label", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "form-label"
  }, "\u05E1\u05D5\u05D2 \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA"), /*#__PURE__*/React.createElement("select", {
    value: form.topic,
    onChange: e => setForm({
      ...form,
      topic: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", null, "\u05E7\u05DC\u05E4\u05D9 \u05D8\u05D0\u05E8\u05D5\u05D8 \u2014 \u05E7\u05E8\u05D9\u05D0\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA \u05D1\u05E7\u05DC\u05E4\u05D9\u05DD"), /*#__PURE__*/React.createElement("option", null, "\u05E0\u05D9\u05E7\u05D5\u05D9 \u05E8\u05D5\u05D7\u05E0\u05D9 \u05D5\u05D4\u05D2\u05E0\u05D4 \u2014 \u05DE\u05D9\u05DD \u05E7\u05D3\u05D5\u05E9\u05D9\u05DD, \u05E2\u05D9\u05DF \u05D4\u05E8\u05E2 \u05D5\u05E8\u05D9\u05D9\u05E7\u05D9"), /*#__PURE__*/React.createElement("option", null, "\u05D9\u05D9\u05E2\u05D5\u05E5 \u05E8\u05D5\u05D7\u05E0\u05D9 \u05D5\u05E2\u05E1\u05E7\u05D9 (28 \u05E9\u05E0\u05D5\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF)"), /*#__PURE__*/React.createElement("option", null, "\u05D0\u05D7\u05E8 \u2014 \u05D0\u05E1\u05D1\u05D9\u05E8 \u05D1\u05D4\u05D5\u05D3\u05E2\u05D4"))), /*#__PURE__*/React.createElement("label", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "form-label"
  }, "\u05DE\u05E9\u05D4\u05D5 \u05E9\u05EA\u05E8\u05E6\u05D9 \u05DC\u05E9\u05EA\u05E3 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05E4\u05D2\u05D9\u05E9\u05D4?"), /*#__PURE__*/React.createElement("textarea", {
    rows: "4",
    value: form.message,
    onChange: e => setForm({
      ...form,
      message: e.target.value
    }),
    placeholder: "\u05E9\u05D0\u05DC\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05EA, \u05D4\u05E2\u05D3\u05E4\u05EA \u05E9\u05E2\u05D5\u05EA, \u05D0\u05D5 \u05DB\u05DC \u05D3\u05D1\u05E8 \u05E9\u05D9\u05E8\u05D2\u05D9\u05E9 \u05DC\u05DA \u05E0\u05DB\u05D5\u05DF..."
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-block"
  }, sent ? '✓ פותח שיחת WhatsApp לשליחה...' : 'שליחה ישירה לוואטסאפ'), /*#__PURE__*/React.createElement("p", {
    className: "form-fine"
  }, "\u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05E9\u05DC\u05D9\u05D7\u05D4 \u05EA\u05D9\u05E4\u05EA\u05D7 \u05E9\u05D9\u05D7\u05EA WhatsApp \u05E2\u05DD \u05DB\u05DC \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05E9\u05DE\u05D9\u05DC\u05D0\u05EA \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05DC \u05DE\u05E8\u05D9\u05DD."))));
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand display"
  }, /*#__PURE__*/React.createElement(SmallStar, {
    size: 12
  }), /*#__PURE__*/React.createElement("span", {
    className: "brand-he"
  }, BRAND.he), /*#__PURE__*/React.createElement(SmallStar, {
    size: 12
  })), /*#__PURE__*/React.createElement("p", {
    className: "footer-brand-ru latin",
    dir: "ltr"
  }, BRAND.ru), /*#__PURE__*/React.createElement("p", {
    className: "footer-tag"
  }, "\u05D9\u05D9\u05E2\u05D5\u05E5 \u05E8\u05D5\u05D7\u05E0\u05D9 \xB7 \u05E7\u05DC\u05E4\u05D9 \u05D8\u05D0\u05E8\u05D5\u05D8 \xB7 \u05E0\u05D9\u05E7\u05D5\u05D9 \u05E8\u05D5\u05D7\u05E0\u05D9 \u05D5\u05D4\u05D2\u05E0\u05D4"), /*#__PURE__*/React.createElement("p", {
    className: "footer-tag footer-tag-ru latin",
    dir: "ltr"
  }, BRAND.focusRu, " \xB7 ", BRAND.langsRu), /*#__PURE__*/React.createElement(Divider, {
    width: 180
  }), /*#__PURE__*/React.createElement("p", {
    className: "footer-fine"
  }, "\xA9 ", new Date().getFullYear(), " \xB7 \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA \xB7 \u05E0\u05D1\u05E0\u05D4 \u05D1\u05D0\u05D4\u05D1\u05D4 \u05D1\u05DC\u05D9\u05DC\u05D4 \u05DB\u05D5\u05DB\u05D1\u05D9\u05DD")));
}

// ── App ──────────────────────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [selectedTopic, setSelectedTopic] = useState('קלפי טארוט — קריאה אישית בקלפים');
  const handleSelectService = topic => {
    setSelectedTopic(topic);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Persistent placeholder content the user will fill — kept in tweaks so it
  // can be edited from the panel and survives reload
  const [details, setDetails] = useState({
    name: 'מרים',
    tagline: 'מרחב של אור, בהירות ורוגע — ייעוץ רוחני אישי, קריאה בקלפים וניקוי אנרגטי, בעברית, רוסית וקווקזית.',
    phone: '053-964-6269'
  });

  // Apply palette to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    const [bg, gold, ink] = t.palette;
    root.style.setProperty('--bg', bg);
    root.style.setProperty('--bg-2', shade(bg, 0.08));
    root.style.setProperty('--ink', ink);
    root.style.setProperty('--ink-soft', hexA(ink, 0.72));
    root.style.setProperty('--ink-faint', hexA(ink, 0.45));
    root.style.setProperty('--gold', gold);
    root.style.setProperty('--gold-soft', hexA(gold, 0.4));
    root.style.setProperty('--gold-faint', hexA(gold, 0.15));
    root.style.setProperty('--line', hexA(gold, 0.22));
    root.style.setProperty('--display-font', `'${t.displayFont}', serif`);
  }, [t.palette, t.displayFont]);
  return /*#__PURE__*/React.createElement("div", {
    className: "site"
  }, /*#__PURE__*/React.createElement(StarField, {
    density: t.starDensity,
    animated: t.animatedStars,
    showMoon: t.showMoon
  }), /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, {
    tagline: details.tagline,
    layout: t.heroLayout
  }), /*#__PURE__*/React.createElement(About, {
    name: details.name
  }), /*#__PURE__*/React.createElement(Services, {
    onSelectService: handleSelectService
  }), /*#__PURE__*/React.createElement(Oracle, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Contact, {
    name: details.name,
    phone: details.phone,
    selectedTopic: selectedTopic
  }), /*#__PURE__*/React.createElement(Footer, null), details.phone && /*#__PURE__*/React.createElement("a", {
    href: `https://wa.me/${details.phone.replace(/[^\d]/g, '').replace(/^0/, '972')}`,
    target: "_blank",
    rel: "noopener",
    className: "whatsapp-float",
    "aria-label": "\u05E4\u05EA\u05D9\u05D7\u05EA \u05E6'\u05D0\u05D8 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4",
    title: "\u05E9\u05DC\u05D9\u05D7\u05EA \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: "28",
    height: "28",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-2c1.8 1 3.9 1.5 6.3 1.5 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-2 0-3.9-.5-5.5-1.5l-.4-.2-4.6 1.2 1.2-4.5-.3-.4C5.4 18 5 16.5 5 15c0-6.1 4.9-11 11-11s11 4.9 11 11-4.9 11-11 11zm6.1-8.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4 0-.1-.3-.2-.6-.4z"
  })), /*#__PURE__*/React.createElement("span", {
    className: "whatsapp-float-pulse",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "whatsapp-float-label"
  }, "\u05E6'\u05D0\u05D8 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4")), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "\u05E2\u05D9\u05E6\u05D5\u05D1"
  }, /*#__PURE__*/React.createElement(TweakColor, {
    label: "\u05E4\u05DC\u05D8\u05D4",
    value: t.palette,
    options: PALETTES,
    onChange: v => setTweak('palette', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "\u05E4\u05D5\u05E0\u05D8 \u05DB\u05D5\u05EA\u05E8\u05EA",
    value: t.displayFont,
    options: DISPLAY_FONTS,
    onChange: v => setTweak('displayFont', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "\u05E4\u05E8\u05D9\u05E1\u05EA \u05D4\u05D9\u05E8\u05D5",
    value: t.heroLayout,
    options: [{
      value: 'centered',
      label: 'מרכזית'
    }, {
      value: 'split',
      label: 'מפוצלת'
    }],
    onChange: v => setTweak('heroLayout', v)
  })), /*#__PURE__*/React.createElement(TweakSection, {
    label: "\u05D0\u05D5\u05D5\u05D9\u05E8\u05D4"
  }, /*#__PURE__*/React.createElement(TweakSlider, {
    label: "\u05E6\u05E4\u05D9\u05E4\u05D5\u05EA \u05DB\u05D5\u05DB\u05D1\u05D9\u05DD",
    value: t.starDensity,
    min: 20,
    max: 160,
    step: 5,
    onChange: v => setTweak('starDensity', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "\u05D9\u05E8\u05D7",
    value: t.showMoon,
    onChange: v => setTweak('showMoon', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "\u05DB\u05D5\u05DB\u05D1\u05D9\u05DD \u05E0\u05D5\u05E6\u05E6\u05D9\u05DD",
    value: t.animatedStars,
    onChange: v => setTweak('animatedStars', v)
  })), /*#__PURE__*/React.createElement(TweakSection, {
    label: "\u05E4\u05E8\u05D8\u05D9 \u05D4\u05DE\u05E7\u05E8\u05D0/\u05D4"
  }, /*#__PURE__*/React.createElement(TweakText, {
    label: "\u05E9\u05DD",
    value: details.name,
    onChange: v => setDetails({
      ...details,
      name: v
    })
  }), /*#__PURE__*/React.createElement(TweakText, {
    label: "\u05D8\u05DC\u05E4\u05D5\u05DF",
    value: details.phone,
    onChange: v => setDetails({
      ...details,
      phone: v
    })
  }))));
}

// ── tiny color helpers ───────────────────────────────────────────────────────
function hexA(hex, a) {
  const h = hex.replace('#', '');
  const x = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  const r = parseInt(x.slice(0, 2), 16),
    g = parseInt(x.slice(2, 4), 16),
    b = parseInt(x.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}
function shade(hex, amount) {
  // lighten by amount (0..1)
  const h = hex.replace('#', '');
  const x = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  const r = parseInt(x.slice(0, 2), 16),
    g = parseInt(x.slice(2, 4), 16),
    b = parseInt(x.slice(4, 6), 16);
  const ch = n => Math.round(n + (255 - n) * amount);
  const hex2 = n => n.toString(16).padStart(2, '0');
  return `#${hex2(ch(r))}${hex2(ch(g))}${hex2(ch(b))}`;
}

// Clear the pre-mount loader from index.html before React takes over.
document.querySelector('#root .boot')?.remove();
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
