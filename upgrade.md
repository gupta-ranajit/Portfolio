# 🚀 Portfolio Upgrade Plan — Full Audit & Implementation Guide
> **Project:** Ranajit Gupta — Developer Portfolio
> **Audited:** November 13, 2026
> **Status:** Read-only audit completed. No files modified. Awaiting approval before changes.

---

## 📋 TABLE OF CONTENTS

1. [Current Architecture](#1-current-architecture)
2. [All Components & Files](#2-all-components--files)
3. [Features to Preserve](#3-features-to-preserve)
4. [Critical Issues](#4-critical-issues)
5. [Quality & UX Issues](#5-quality--ux-issues)
6. [Missing Functionality](#6-missing-functionality)
7. [Existing Dependencies](#7-existing-dependencies)
8. [Recommended New Dependencies](#8-recommended-new-dependencies)
9. [Outdated Packages](#9-outdated-packages)
10. [Phase-Wise Implementation Plan](#10-phase-wise-implementation-plan)
11. [Priority Matrix](#11-priority-matrix)
12. [Preserved vs Changed Summary](#12-preserved-vs-changed-summary)

---

## 1. Current Architecture

### Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Build Tool | Vite | 6.4.3 |
| Framework | React | 18.3.1 |
| Language | TypeScript | 5.9.3 |
| Styling | Tailwind CSS | 3.4.19 |
| Icons | Lucide React | 0.475.0 |
| Animation | canvas-confetti | 1.9.4 |
| Deployment | Vercel | — |
| Routing | None — SPA with hash anchors | — |
| State Management | React Context (theme only) | — |
| Fonts | Inter (sans) + Caveat (handwriting) via Google Fonts CDN | — |

### Architecture Type
- **Single-page application** — all sections on one HTML page
- Navigation uses `scrollIntoView()` with smooth behavior
- No React Router, no multi-page setup
- All portfolio content centralized in one data file (`portfolioData.ts`)
- TypeScript interfaces defined in `types/index.ts`

### Directory Structure

```
Portfolio/
├── public/
│   ├── favicon.svg
│   ├── hero-person.jpeg          ← 205 KB (DUPLICATE — same as .jpg)
│   ├── hero-person.jpg           ← 205 KB (DUPLICATE — same as .jpeg)
│   └── projects/
│       ├── expense-tracker.jpg   ← 8 KB  (placeholder quality)
│       ├── github-analysis.jpg   ← 5 KB  (placeholder quality)
│       └── gym-fitness.jpg       ← 10 KB (placeholder quality)
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            ← Scrollspy, mobile menu, dark toggle, CV modal trigger
│   │   ├── Hero.tsx              ← Name, tagline, social links, stat cards
│   │   ├── About.tsx             ← Bio, trait badges, quote, personal info + copy-to-clipboard
│   │   ├── Skills.tsx            ← Filterable tech icon grid (7 categories)
│   │   ├── Projects.tsx          ← 3-card grid + project modal trigger
│   │   ├── ProjectModal.tsx      ← Full project detail modal
│   │   ├── Experience.tsx        ← Work, leadership, education, certifications
│   │   ├── Contact.tsx           ← Contact form (fake mailto) + social links + confetti
│   │   ├── Footer.tsx            ← Logo, quick nav links, copyright
│   │   ├── CvModal.tsx           ← CV preview, print, PDF download (broken)
│   │   └── TechIcons.tsx         ← Inline SVG switch for 18 tech icons
│   │
│   ├── context/
│   │   └── ThemeContext.tsx      ← Light/dark theme, localStorage + system-pref detection
│   │
│   ├── data/
│   │   └── portfolioData.ts      ← All content: personal info, skills, projects, experience, certs
│   │
│   ├── types/
│   │   └── index.ts              ← TypeScript interfaces for all data shapes
│   │
│   ├── App.tsx                   ← Layout composer, CV modal state
│   ├── index.css                 ← Tailwind directives + scrollbar + fadeIn + handwriting class
│   └── main.tsx                  ← ReactDOM.createRoot entry point
│
├── index.html                    ← Meta, Google Fonts, title (HAS "okkkk" BUG)
├── tailwind.config.js            ← brand/accent color tokens, fontFamily, custom shadows
├── vite.config.ts                ← Minimal — only React plugin, no optimizations
├── vercel.json                   ← SPA rewrite rule, build config
├── postcss.config.js
├── tsconfig.json
├── tsconfig.tsbuildinfo          ← Build artifact — SHOULD NOT be in git
├── package.json
├── package-lock.json
└── WhatsApp Image 2026-09-24 at 12.04.02 PM.jpeg  ← Stray file at root (205 KB)
```

### Sections (scroll-based, single page)
1. **Hero** — name, tagline, social links, 4 stat cards
2. **About** — bio paragraph, trait badges, inspirational quote, personal info card
3. **Skills** — filterable grid with 18 inline SVG tech icons across 7 categories
4. **Projects** — 3-card grid, each opens a detail modal
5. **Experience** — internship card, leadership card, education list, certifications
6. **Contact** — contact form + social link buttons + confetti on submit

### Git Status
- Branch: `main`
- Remote: `origin/main` connected
- 2 commits: `Initial commit of portfolio` + `modified index`
- Working tree: clean (up to date)
- **Problem:** `dist/` and `tsconfig.tsbuildinfo` are committed despite being in `.gitignore`

---

## 2. All Components & Files

| File | Size | Purpose |
|---|---|---|
| `src/App.tsx` | 1,384 B | Root layout, holds CV modal open/close state |
| `src/main.tsx` | 260 B | ReactDOM entry, StrictMode wrapper |
| `src/index.css` | 1,299 B | Tailwind base + custom scrollbar + animations |
| `src/components/Navbar.tsx` | 7,814 B | Fixed top nav, scrollspy, theme toggle, mobile drawer |
| `src/components/Hero.tsx` | 9,958 B | Hero section with photo, name, tagline, stats |
| `src/components/About.tsx` | 9,372 B | About section with bio, traits, info card |
| `src/components/Skills.tsx` | 4,083 B | Skills filter + grid |
| `src/components/TechIcons.tsx` | 9,947 B | 18 inline SVG tech icons via switch statement |
| `src/components/Projects.tsx` | 5,990 B | Project cards grid |
| `src/components/ProjectModal.tsx` | 3,869 B | Project detail modal |
| `src/components/Experience.tsx` | 7,245 B | Experience, education, certifications |
| `src/components/Contact.tsx` | 8,788 B | Contact form + social links |
| `src/components/Footer.tsx` | 2,334 B | Footer with nav links and copyright |
| `src/components/CvModal.tsx` | 7,501 B | CV preview modal with print and download |
| `src/context/ThemeContext.tsx` | 1,624 B | Theme context provider |
| `src/data/portfolioData.ts` | 6,717 B | All portfolio content data |
| `src/types/index.ts` | 1,392 B | TypeScript interfaces |

---

## 3. Features to Preserve

> These must remain fully functional after every change.

| Feature | File(s) | Notes |
|---|---|---|
| ✅ Dark / Light theme toggle | `ThemeContext.tsx`, `Navbar.tsx` | Saves to localStorage, respects system preference |
| ✅ Scrollspy active nav highlight | `Navbar.tsx` | Highlights current section in nav pill |
| ✅ Mobile hamburger menu + drawer | `Navbar.tsx` | Full mobile navigation |
| ✅ Skills category filter | `Skills.tsx` | 7 category tabs filter the icon grid |
| ✅ Project detail modal | `Projects.tsx`, `ProjectModal.tsx` | Click card → open modal with full description |
| ✅ CV preview modal | `CvModal.tsx` | Opens formatted CV with print button |
| ✅ Copy-to-clipboard (email & phone) | `About.tsx` | Click icon → copies contact info |
| ✅ Confetti on contact submit | `Contact.tsx` | canvas-confetti fires on success |
| ✅ Centralized data architecture | `portfolioData.ts`, `types/index.ts` | Single source of truth for all content |
| ✅ Vercel SPA rewrite | `vercel.json` | Required for client-side navigation to work |
| ✅ Handwriting font accents | `index.css`, `tailwind.config.js` | Caveat font for decorative text |
| ✅ Custom scrollbar styling | `index.css` | Dark/light mode scrollbar |
| ✅ Favicon | `public/favicon.svg` | SVG favicon |
| ✅ Smooth scroll behavior | `index.css`, `index.html` | `scroll-behavior: smooth` |

---

## 4. Critical Issues

> These are actively broken or publicly embarrassing right now.

### Issue 1 — Page title contains debug text
- **File:** `index.html` — line 7
- **Problem:** `<title>Ranajit Gupta | Full-Stack Developer okkkk</title>`
- **Impact:** Shows in browser tab, Google search results, social share previews — extremely unprofessional
- **Fix:** Remove "okkkk" from the title

### Issue 2 — WhatsApp URL is malformed
- **File:** `src/data/portfolioData.ts` — line 26
- **Problem:** `"whatsapp": "https://wa.me/9193320121093"` — has `91` repeated twice (`91` is the country code, then `93320121093` starts with `9` making it appear doubled)
- **Impact:** Clicking WhatsApp button opens wrong number or fails
- **Fix:** Correct to `https://wa.me/91XXXXXXXXXX` with the actual 10-digit number

### Issue 3 — GitHub and LinkedIn are generic placeholders
- **File:** `src/data/portfolioData.ts` — lines 23–24
- **Problem:** Both set to `"https://github.com"` and `"https://linkedin.com"` — no real profile
- **Impact:** Social links go to homepage, not personal profiles
- **Fix:** Set real profile URLs

### Issue 4 — Phone number has wrong digit count
- **File:** `src/data/portfolioData.ts` — line 13
- **Problem:** `"+91 93320121093"` — 11 digits after country code (should be 10)
- **Impact:** Wrong contact information displayed publicly
- **Fix:** Verify and correct the actual phone number

### Issue 5 — CV Download PDF is broken
- **File:** `src/components/CvModal.tsx` — line 20
- **Problem:** `link.href = '/resume.pdf'` — this file does not exist in `public/`
- **Impact:** Clicking "Download PDF" in the CV modal silently fails or throws 404
- **Fix:** Either add `resume.pdf` to `public/`, or replace button with print-only action

### Issue 6 — Contact form does not send real messages
- **File:** `src/components/Contact.tsx` — line 55
- **Problem:** On submit, `window.location.href = mailtoUrl` navigates the browser away using the user's local email client. No actual form submission occurs.
- **Impact:** Visitors who don't have a mail client configured get no feedback. Messages are never received if they abandon the mailto dialog.
- **Fix:** Integrate EmailJS or Formspree for real server-side email delivery

### Issue 7 — All project live URLs are example.com
- **File:** `src/data/portfolioData.ts` — lines 68, 79, 90
- **Problem:** `"liveUrl": "https://example.com/gym"` etc.
- **Impact:** "Live Demo" buttons on all project cards go to example.com
- **Fix:** Replace with real deployed project URLs or remove the live demo button if not deployed

---

## 5. Quality & UX Issues

| # | Issue | File | Impact |
|---|---|---|---|
| 8 | Duplicate hero images — `.jpeg` and `.jpg` both 205 KB (410 KB total wasted) | `public/` | Unnecessary bandwidth |
| 9 | Project images are 5–10 KB placeholder quality — not real screenshots | `public/projects/` | Poor visual impression |
| 10 | Stray WhatsApp image at project root (`WhatsApp Image 2026-09-24...jpeg`) | Root dir | Dev clutter |
| 11 | No scroll-triggered entrance animations — sections appear statically | All section components | Feels flat / unpolished |
| 12 | No initial loading state or skeleton screens | `App.tsx` | Jarring layout shift |
| 13 | No `robots.txt` or `sitemap.xml` in `public/` | `public/` | Search engines can't crawl properly |
| 14 | No Open Graph or Twitter Card meta tags | `index.html` | Link previews on social media are blank |
| 15 | No canonical URL `<link>` tag | `index.html` | SEO duplicate content risk |
| 16 | No keyboard focus trap in modals | `CvModal.tsx`, `ProjectModal.tsx` | Accessibility — Tab key escapes modal |
| 17 | Several interactive elements missing `aria-label` | Various | Accessibility — screen reader gaps |
| 18 | `animate-spin-slow` defined only in `index.css` — not in Tailwind config | `Navbar.tsx`, `index.css` | May be purged in production build |
| 19 | No `loading="lazy"` on project images | `Projects.tsx` | Loads all images on page load |
| 20 | Google Fonts loaded synchronously — render-blocking | `index.html` | Delays First Contentful Paint |
| 21 | `vite.config.ts` has no build optimizations (chunking, compression) | `vite.config.ts` | Larger bundle, slower loads |
| 22 | `tsconfig.tsbuildinfo` committed to git | Root | Build artifact in version control |
| 23 | Email and phone hardcoded in source — no `.env` | `portfolioData.ts` | Privacy and flexibility concern |
| 24 | "View All Projects" button just opens the first project modal | `Projects.tsx` line 35 | Misleading — user expects to see all projects |
| 25 | Tailwind `brand.*` and `accent.*` tokens defined but rarely used — code uses hardcoded `blue-600` | Various | Inconsistent design tokens |
| 26 | No `<link rel="preload">` for the hero image | `index.html` | Hero image discovered late, hurts LCP |
| 27 | `dist/` folder is committed to git despite being in `.gitignore` | Root / `.gitignore` | Repo bloat, unnecessary binary files |

---

## 6. Missing Functionality

| # | Missing Feature | Benefit |
|---|---|---|
| A | Scroll-triggered section entrance animations | Premium, modern feel |
| B | Animated typing effect in hero tagline | Engagement and personality |
| C | Page loading / transition state | Polished first impression |
| D | 3D interactive hero section (Three.js / WebGL) | Major visual differentiator |
| E | Vertical timeline for experience section | Better storytelling, more visual |
| F | Real contact form backend (EmailJS / Formspree) | Messages actually delivered |
| G | Scroll-to-top floating button | Navigation convenience |
| H | Scroll progress indicator bar at top | Premium UX touch |
| I | Custom 404 error page | Better Vercel setup |
| J | PWA manifest and service worker | App installability |
| K | Analytics (Plausible or GA4) | Understand visitor traffic |
| L | Skills proficiency bars / levels | Richer tech showcase |
| M | Testimonials or achievements section | Social proof and credibility |

---

## 7. Existing Dependencies

### Production

| Package | Version | Purpose |
|---|---|---|
| `react` | 18.3.1 | UI framework |
| `react-dom` | 18.3.1 | DOM renderer |
| `lucide-react` | 0.475.0 | Icon library |
| `canvas-confetti` | 1.9.4 | Confetti animation on form submit |

### Development

| Package | Version | Purpose |
|---|---|---|
| `vite` | 6.4.3 | Build tool and dev server |
| `@vitejs/plugin-react` | 4.7.0 | React fast refresh for Vite |
| `typescript` | 5.9.3 | Type checking |
| `tailwindcss` | 3.4.19 | Utility CSS framework |
| `postcss` | 8.5.28 | CSS processing |
| `autoprefixer` | 10.6.1 | CSS vendor prefixing |
| `@types/react` | 18.3.31 | React TypeScript types |
| `@types/react-dom` | 18.3.7 | React DOM TypeScript types |
| `@types/canvas-confetti` | 1.9.0 | Confetti TypeScript types |

---

## 8. Recommended New Dependencies

> All compatible with Vite 6 + React 18 + Tailwind 3 + TypeScript 5.

### Production

| Package | Purpose | Bundle Size |
|---|---|---|
| `framer-motion` | Scroll animations, stagger entrances, gestures, layout animations | ~50 KB gzip |
| `three` | 3D WebGL rendering engine | ~150 KB gzip — lazy-load only |
| `@react-three/fiber` | React renderer for Three.js | ~30 KB gzip — lazy-load only |
| `@react-three/drei` | Three.js helpers (Float, Environment, Text3D) | ~20 KB gzip — lazy-load only |
| `react-type-animation` | Typing/deleting text effect in hero | ~3 KB |
| `react-countup` | Animated number counters for stat cards | ~5 KB |
| `react-intersection-observer` | Trigger animations when elements enter viewport | ~3 KB |
| `emailjs-com` | Send emails from contact form without a backend | ~10 KB |

### Development Only

| Package | Purpose |
|---|---|
| `vite-plugin-compression` | Brotli + gzip output for production build |
| `vite-plugin-pwa` | Auto-generate PWA manifest + service worker |
| `eslint` | Code linting |
| `prettier` | Code formatting |

> **Important:** Three.js / R3F must be lazy-loaded via `React.lazy()` + `Suspense` to avoid blocking the initial page render. The 3D canvas should only appear in the Hero section.

---

## 9. Outdated Packages

| Package | Installed | Latest | Recommendation |
|---|---|---|---|
| `react` / `react-dom` | 18.3.1 | 19.3.1 | ⚠️ **Stay on v18** — v19 has breaking changes, not worth migrating now |
| `tailwindcss` | 3.4.19 | 4.3.5 | ⚠️ **Stay on v3** — v4 has completely different config syntax |
| `vite` | 6.4.3 | 8.3.8 | ⚠️ Optional major upgrade — v6 is stable and sufficient |
| `typescript` | 5.9.3 | 7.0.2 | ⚠️ **Stay on v5** — v7 uses native Go parser (breaking ecosystem) |
| `lucide-react` | 0.475.0 | 1.72.0 | 🟡 Safe to upgrade — only icon shape changes |
| `@vitejs/plugin-react` | 4.7.0 | 6.3.0 | 🟡 Safe minor upgrade |
| `autoprefixer` | 10.6.1 | 10.6.2 | ✅ Patch — upgrade freely |
| `postcss` | 8.5.28 | 8.5.32 | ✅ Patch — upgrade freely |

---

## 10. Phase-Wise Implementation Plan

---

### Phase 0 — Hotfixes
> **~2 hours | Zero new dependencies | No layout changes**
> Fix all broken and embarrassing content first.

- [ ] Fix `index.html` title — remove "okkkk" from line 7
- [ ] Add Open Graph meta tags (`og:title`, `og:description`, `og:image`, `og:url`) to `index.html`
- [ ] Add Twitter Card meta tags to `index.html`
- [ ] Add `<link rel="canonical" href="https://yourdomain.com" />` to `index.html`
- [ ] Add `<link rel="preload">` for `/hero-person.jpg` in `index.html`
- [ ] Switch Google Fonts `<link>` to non-render-blocking pattern (`media="print"` trick)
- [ ] Fix WhatsApp URL in `src/data/portfolioData.ts` line 26
- [ ] Set real GitHub profile URL in `portfolioData.ts` line 23
- [ ] Set real LinkedIn profile URL in `portfolioData.ts` line 24
- [ ] Verify and correct phone number in `portfolioData.ts` line 13
- [ ] Fix all project `liveUrl` and `githubUrl` values in `portfolioData.ts` lines 68–92
- [ ] Either add `resume.pdf` to `public/` or change `CvModal.tsx` to print-only
- [ ] Fix "View All Projects" button in `Projects.tsx` line 35 to scroll to projects section or show all
- [ ] Add `loading="lazy"` to `<img>` tags in `Projects.tsx`
- [ ] Delete `public/hero-person.jpeg` (keep `.jpg`, remove `.jpeg` duplicate)
- [ ] Create `public/robots.txt` with `Allow: /` and `Sitemap:` reference
- [ ] Create `public/sitemap.xml` with the site URL
- [ ] Remove `dist/` from git tracking: `git rm -r --cached dist/`
- [ ] Remove `tsconfig.tsbuildinfo` from git tracking
- [ ] Delete or move `WhatsApp Image 2026-09-24 at 12.04.02 PM.jpeg` from project root

---

### Phase 1 — UI Enhancement & Animations
> **~1 day | New deps: framer-motion, react-intersection-observer, react-type-animation, react-countup**
> Elevate from static to animated. No structural layout changes.

- [ ] `npm install framer-motion react-intersection-observer react-type-animation react-countup`
- [ ] Add `<motion.div>` scroll entrance animations to each section (fade + slide up, staggered)
- [ ] Add slide-up + fade entrance animation to Hero name and tagline
- [ ] Replace hero tagline static text with `TypeAnimation` component (loops through roles)
- [ ] Add `CountUp` to the 4 stat numbers in Hero (3+, 1, B.Tech, etc.)
- [ ] Add hover tilt micro-animation to skill cards using Framer Motion
- [ ] Add scroll-triggered scale + shadow animation to project cards
- [ ] Add Framer Motion `AnimatePresence` to both modals (scale + fade in/out)
- [ ] Add fixed scroll progress bar at top of page (thin colored line)
- [ ] Add scroll-to-top floating action button (appears after scrolling 300px)
- [ ] Add keyboard focus trap to `CvModal.tsx` and `ProjectModal.tsx`
- [ ] Add `aria-modal="true"`, `role="dialog"`, `aria-labelledby` to both modals
- [ ] Align component color usage to `brand.*` Tailwind tokens (replace hardcoded `blue-600`)
- [ ] Register `animate-spin-slow` in `tailwind.config.js` under `extend.animation`

---

### Phase 2 — 3D Hero Section
> **~1.5 days | New deps: three, @react-three/fiber, @react-three/drei**
> Interactive 3D canvas as hero background. Fully lazy-loaded, mobile-safe.

- [ ] `npm install three @react-three/fiber @react-three/drei`
- [ ] Create `src/components/three/HeroCanvas.tsx` — floating particle field or abstract 3D mesh
- [ ] Wrap `HeroCanvas` in `React.lazy()` + `<Suspense fallback={<GradientPlaceholder />}>`
- [ ] Add mouse-parallax interaction — mesh subtly follows cursor movement
- [ ] Use `<Float>` from drei to add gentle floating animation to hero profile image card
- [ ] Add ambient + directional lighting with `<Environment>` preset
- [ ] Add `prefers-reduced-motion` check — disable 3D animation if user has motion sensitivity
- [ ] On mobile / low-end devices (check `navigator.hardwareConcurrency`), skip WebGL and show static gradient
- [ ] Run Lighthouse after adding 3D — verify LCP stays under 2.5 seconds
- [ ] Confirm Three.js chunk is code-split separately from main bundle

---

### Phase 3 — Real Contact Form
> **~4 hours | New dep: emailjs-com**
> Replace the broken mailto hack with real email delivery.

- [ ] Create free account at emailjs.com
- [ ] Create email service and template in EmailJS dashboard (fields: `from_name`, `from_email`, `message`, `subject`)
- [ ] Store EmailJS `serviceId`, `templateId`, `publicKey` in `.env.local` file
- [ ] `npm install emailjs-com`
- [ ] Rewrite `handleSubmit` in `Contact.tsx` to call `emailjs.sendForm()`
- [ ] Keep confetti firing on successful send (preserve existing feature)
- [ ] Add subject line `<input>` field to the contact form
- [ ] Add honeypot hidden field to deter spam bots
- [ ] Replace text-only loading state with animated spinner on the submit button
- [ ] Auto-dismiss success/error message after 5 seconds
- [ ] Add `.env.local` to `.gitignore` to protect API keys

---

### Phase 4 — Content & Section Upgrades
> **~1.5 days | No new deps required**
> More professional content presentation across all sections.

- [ ] **Skills Section:** Add a proficiency percentage bar below each skill name, animated on scroll with `react-intersection-observer`
- [ ] **Experience Section:** Restyle static cards into a vertical timeline with alternating left/right layout, dotted connector line, and date badges
- [ ] **Projects Section:** Add category filter tabs above the grid (e.g. Web, Mobile, API)
- [ ] **Projects Section:** Replace placeholder project images with real screenshots or proper mockups
- [ ] **Hero Section:** Add an `"Available for work"` or `"Open to opportunities"` pill badge with a green pulsing dot
- [ ] **About Section:** Add a "Currently" status row (e.g. "Building X at Y") to the info card
- [ ] Update all project `liveUrl` to real deployed URLs
- [ ] Update all `githubUrl` to real repository links
- [ ] Review and tighten all bio and description text in `portfolioData.ts`
- [ ] Add more certifications or achievements to `portfolioData.ts` if available

---

### Phase 5 — Performance & SEO
> **~4 hours | New dev deps: vite-plugin-compression, vite-plugin-pwa**
> Production-grade optimization and search engine setup.

- [ ] Convert `hero-person.jpg` to WebP format (target: under 60 KB)
- [ ] Convert all 3 project images to WebP, optimized under 100 KB each
- [ ] Update `Hero.tsx` to use `<picture>` element with WebP + JPG fallback
- [ ] `npm install -D vite-plugin-compression vite-plugin-pwa`
- [ ] Add Brotli + gzip compression to `vite.config.ts`
- [ ] Configure `build.rollupOptions.output.manualChunks` to split `react`, `three`, and app code
- [ ] Add `vite-plugin-pwa` with app `manifest.json` (name, short_name, icons, theme_color, background_color)
- [ ] Add JSON-LD `Person` structured data schema in `index.html` (name, jobTitle, email, url, sameAs)
- [ ] Verify Lighthouse scores: Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 90, Best Practices ≥ 95
- [ ] Add Plausible Analytics script to `index.html` (privacy-first, no cookies)
- [ ] Add Vercel cache headers for `/assets/*` in `vercel.json`
- [ ] Create `public/404.html` custom error page

---

### Phase 6 — Code Quality & Final Polish
> **~3 hours | New dev deps: eslint, prettier**
> Clean, maintainable, production-ready codebase.

- [ ] Extract the repeated section header pattern (badge + h2 + description) into a shared `<SectionHeader />` component
- [ ] Extract the repeated social link icon buttons into a shared `<SocialLinks />` component
- [ ] Extract the common modal backdrop + container into a shared `<Modal />` wrapper component
- [ ] `npm install -D eslint prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin`
- [ ] Add `.eslintrc.json` and `.prettierrc` config files
- [ ] Run lint and fix all issues
- [ ] Remove any `console.log()` or debug statements
- [ ] Add JSDoc comments to all interfaces in `src/types/index.ts`
- [ ] Update `README.md` with new feature list, tech stack, and screenshots
- [ ] Final cross-browser test: Chrome, Firefox, Safari on both desktop and mobile
- [ ] Deploy to Vercel and verify all features work on live URL
- [ ] Verify custom domain if configured

---

## 11. Priority Matrix

```
╔══════════════════════════════════════════════════════════════╗
║           HIGH IMPACT + LOW EFFORT → Do First                ║
╠══════════════════════════════════════════════════════════════╣
║  ✓ Fix title "okkkk" bug                                      ║
║  ✓ Fix broken WhatsApp, GitHub, LinkedIn, phone URLs          ║
║  ✓ Fix broken project URLs (example.com)                      ║
║  ✓ Fix broken CV PDF download                                 ║
║  ✓ Add OG meta tags, canonical, robots.txt                    ║
║  ✓ Fix "View All Projects" misleading button                  ║
║  ✓ Delete duplicate hero image (410 KB wasted)                ║
╠══════════════════════════════════════════════════════════════╣
║           HIGH IMPACT + MEDIUM EFFORT → Core Upgrade         ║
╠══════════════════════════════════════════════════════════════╣
║  ✓ Scroll entrance animations (framer-motion)                 ║
║  ✓ Real contact form (EmailJS)                                ║
║  ✓ 3D hero canvas (Three.js / R3F)                            ║
║  ✓ Experience vertical timeline redesign                      ║
║  ✓ Skills proficiency bars                                    ║
║  ✓ Real project screenshots                                   ║
╠══════════════════════════════════════════════════════════════╣
║           MEDIUM IMPACT + LOW EFFORT → Polish                 ║
╠══════════════════════════════════════════════════════════════╣
║  ✓ Scroll-to-top button                                       ║
║  ✓ Scroll progress bar                                        ║
║  ✓ Typing effect in hero                                      ║
║  ✓ Animated stat counters                                     ║
║  ✓ Image conversion to WebP                                   ║
║  ✓ Keyboard trap + ARIA roles on modals                       ║
╠══════════════════════════════════════════════════════════════╣
║           LOWER PRIORITY → Nice to Have                       ║
╠══════════════════════════════════════════════════════════════╣
║  ✓ PWA manifest                                               ║
║  ✓ Analytics integration                                      ║
║  ✓ Testimonials section                                       ║
║  ✓ Blog / articles section                                    ║
║  ✓ Custom 404 page                                            ║
╚══════════════════════════════════════════════════════════════╝
```

---

## 12. Preserved vs Changed Summary

| Aspect | Status | Notes |
|---|---|---|
| React 18 framework | ✅ Preserved | No version change |
| Vite 6 build tool | ✅ Preserved | No version change |
| Tailwind CSS v3 | ✅ Preserved | Minor token cleanup only |
| TypeScript v5 | ✅ Preserved | No version change |
| `portfolioData.ts` data layer | ✅ Preserved | Content corrections only, structure unchanged |
| `types/index.ts` interfaces | ✅ Preserved | May be extended with new fields |
| `ThemeContext.tsx` | ✅ Preserved | No changes |
| `vercel.json` | ✅ Preserved | Minor cache headers addition only |
| All 11 existing components | ✅ Preserved | Enhanced in-place, not replaced |
| Hash-anchor single-page routing | ✅ Preserved | No routing library added |
| Confetti effect on form submit | ✅ Preserved | Kept as a personality feature |
| CvModal functionality | ✅ Preserved | Minor accessibility improvements only |
| Fonts (Inter + Caveat) | ✅ Preserved | Load strategy improved (non-blocking) |
| Favicon SVG | ✅ Preserved | No changes |
| Custom scrollbar | ✅ Preserved | No changes |

---

> ## ⚠️ No files have been modified.
> This document is the full audit result only.
> **Confirm which phase to begin and implementation will start immediately.**
