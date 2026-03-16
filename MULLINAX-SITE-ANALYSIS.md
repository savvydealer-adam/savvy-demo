# Mullinax Ford Site Analysis — Lessons for SavvyDealer

**Date:** 2026-03-12
**Analyzed:** mullinaxfordfl.com (Homepage + SRP)
**Platform:** Remora Inc v3.0.5, Semantic UI, jQuery 2.2.4
**Purpose:** Identify speed and styling improvements SavvyDealer can adopt

---

## Table of Contents

1. [Platform Overview](#platform-overview)
2. [Speed — What to Adopt](#speed--what-to-adopt)
3. [Speed — What to Avoid](#speed--what-to-avoid)
4. [Styling & UX — What to Adopt](#styling--ux--what-to-adopt)
5. [Styling — What to Skip](#styling--what-to-skip)
6. [Priority Implementation Matrix](#priority-implementation-matrix)
7. [Technical Reference](#technical-reference)

---

## Platform Overview

Mullinax runs on **Remora Inc v3.0.5** — a dealer platform using Semantic UI's 16-column grid, jQuery 2.2.4, and server-rendered HTML with AJAX overlays.

| Component | Mullinax (Remora) | SavvyDealer |
|-----------|-------------------|-------------|
| CSS Framework | Semantic UI (16-col) | Bootstrap 4 (12-col) |
| JS Library | jQuery 2.2.4 | jQuery 3.5.1 |
| Theming | `!important` overrides | CSS custom properties (`:root`) |
| Image Format | AVIF (SRP), WebP (homepage) | JPEG/WebP |
| Fonts | Ford Antenna (CDN) | Dealer-configurable |
| Template Engine | Server-rendered PHP | `{{placeholder}}` system |

**Takeaway:** Our `:root` CSS variable theming and Bootstrap 4 grid are already more maintainable than Remora's approach. The wins are in their image pipeline, structured data, and SRP UX patterns.

---

## Speed — What to Adopt

### 1. AVIF Images with Two-Tier Loading (High Impact)

Mullinax's SRP uses AVIF exclusively — **40-50% smaller than WebP, 70%+ smaller than JPEG.**

They split image loading into two tiers:

**Above-fold vehicles** — immediate loading with priority hints:
```html
<picture>
  <source type="image/avif" srcset="https://vimg.remora.inc/vehicle-photo.avif">
  <img src="fallback.jpg" fetchpriority="high" alt="2025 Ford Maverick">
</picture>
```

**Below-fold vehicles** — deferred loading with data attributes:
```html
<img class="lazy" data-src="https://vimg.remora.inc/vehicle-photo.avif"
     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
     alt="2025 Ford Explorer">
```

**Implementation for SavvyDealer:**
- Generate AVIF variants for all vehicle images (use `sharp` or a CDN transform like Cloudflare Images)
- Use `<picture>` with AVIF source + WebP/JPEG fallback
- First 6 vehicles on SRP: `fetchpriority="high"`, no lazy-load
- Remaining vehicles: `data-src` lazy-load pattern (we already have lazySizes — just need AVIF sources)
- **Expected LCP improvement: 300-800ms** depending on connection speed

### 2. Preload Critical Assets (Quick Win)

Mullinax loads **18 JS files and 12 CSS files synchronously** with zero preload hints. Their FCP suffers for it. We can do better.

Add to `<head>` before any stylesheets:
```html
<!-- Preload hero image (biggest LCP element) -->
<link rel="preload" as="image" href="{{heroImage}}" type="image/avif">

<!-- Preload primary font (prevents FOIT) -->
<link rel="preload" as="font" href="/fonts/dealer-font.woff2" type="font/woff2" crossorigin>

<!-- Preload critical CSS -->
<link rel="preload" as="style" href="/css/critical.css">
```

**Expected FCP improvement: 200-400ms**

### 3. `font-display: swap` on All Custom Fonts (Quick Win)

Mullinax does this correctly — Ford Antenna fonts load with `swap` so text renders immediately with a system fallback:

```css
@font-face {
  font-family: 'Ford Antenna Bold';
  src: url('https://r.remorainc.com/new/c/f/FordAntennaWGL-Bold.woff2') format('woff2');
  font-display: swap;
}
```

**Implementation:** Audit all `@font-face` declarations across dealer templates. Ensure every one has `font-display: swap`. If any dealer fonts are loaded via Google Fonts URL, append `&display=swap`.

### 4. AJAX Inventory Filtering with pushState (Medium Effort)

Mullinax's SRP filters without full page reloads:

1. User clicks a filter (e.g., "2025", "Maverick")
2. JS sends POST to `/search-filter` with filter params
3. Server returns HTML fragment of matching vehicles
4. JS replaces the vehicle grid and calls `history.pushState()` to update the URL

```javascript
// Their pattern (simplified)
$.post('/search-filter', filterData, function(html) {
  $('#vehicle-grid').html(html);
  history.pushState(filterData, '', buildFilterUrl(filterData));
});

// Back button works:
window.onpopstate = function(e) {
  if (e.state) applyFilters(e.state);
};
```

**Benefits:**
- No full page reload on filter change (faster, smoother UX)
- URLs are bookmarkable and shareable (`/used?make=ford&model=maverick&year=2025`)
- Back button works correctly
- Google can crawl filter URLs for long-tail SEO

**Implementation:** This requires API endpoints that return HTML fragments or JSON for the vehicle grid. If SavvyDealer's inventory is already API-driven, the frontend work is straightforward.

### 5. Defer Non-Critical JavaScript (Quick Win)

Mullinax loads scripts synchronously in `<head>` — render-blocking everything:
```html
<!-- BAD: blocks rendering -->
<script src="/js/analytics.js"></script>
<script src="/js/chat-widget.js"></script>
```

We should use `defer` for anything not needed for initial render:
```html
<!-- GOOD: downloads in parallel, executes after DOM parse -->
<script defer src="/js/analytics.js"></script>
<script defer src="/js/chat-widget.js"></script>
```

**Rule of thumb:** Only the CSS framework, critical layout JS, and hero carousel need to be synchronous. Everything else gets `defer`.

---

## Speed — What to Avoid

### 1. Analytics Bloat

Mullinax's page loads **4 GTM containers, 3 GA4 properties, and 10+ tracking tools** including:
- Google Tag Manager (multiple containers)
- Google Analytics 4 (multiple properties)
- Facebook Pixel
- TikTok Pixel
- Bing UET
- Marchex call tracking
- FullStory
- Clarity
- Dealer.com/Remora tracking
- Various retargeting scripts

**This adds 500KB+ of JavaScript.** Every tracking script competes for main thread time.

**Our approach:** Cap at 1 GTM container per dealer site. All pixels and tracking go inside GTM — never as standalone `<script>` tags. This gives dealers full analytics control without bloating the page.

### 2. Duplicate Library Loading

Mullinax loads jQuery **twice** (2.2.4 from their CDN + another instance from a widget). This wastes ~90KB and can cause conflicts.

**Our approach:** Single jQuery 3.5.1 instance. Widget system should require plugins to use the page's jQuery, not bundle their own.

### 3. No Responsive Image Sizes

Despite using AVIF, Mullinax serves the **same image dimensions to all devices**. No `srcset`, no `sizes`. A 1200px hero image downloads on a 375px phone.

```html
<!-- What they do (bad) -->
<img src="hero-1200.avif" alt="...">

<!-- What we should do -->
<img srcset="hero-400.avif 400w, hero-800.avif 800w, hero-1200.avif 1200w"
     sizes="(max-width: 600px) 100vw, (max-width: 1000px) 80vw, 1200px"
     src="hero-1200.avif" alt="...">
```

**Implementation:** Image processing pipeline should generate 3 sizes (small/medium/large) for hero images and vehicle photos. CDN transform services (Cloudflare Images, Imgix) can do this on-the-fly.

### 4. Synchronous Third-Party Scripts

Multiple chat widgets, review aggregators, and specials engines load synchronously. Some inject their own CSS that forces layout recalculations.

**Our approach:** All third-party integrations load via `defer` or dynamic `import()`. Chat widgets load after `DOMContentLoaded`. Review widgets load when scrolled into viewport (Intersection Observer).

---

## Styling & UX — What to Adopt

### 1. Schema.org AutoDealer Structured Data (High Priority)

This is the single most impactful SEO/AI-visibility improvement. Mullinax has comprehensive structured data:

```json
{
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "name": "Mullinax Ford of Central Florida",
  "telephone": "(407) 794-7942",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1551 E Semoran Blvd",
    "addressLocality": "Apopka",
    "addressRegion": "FL",
    "postalCode": "32703"
  },
  "department": [
    {
      "@type": "AutoRepair",
      "name": "Service Department",
      "openingHoursSpecification": [...]
    }
  ],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://mullinaxfordfl.com/search?q={search_term}",
    "query-input": "required name=search_term"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Vehicle Inventory",
    "itemListElement": [
      { "@type": "Offer", "name": "New Vehicles", "itemCount": 1247 },
      { "@type": "Offer", "name": "Used Vehicles", "itemCount": 412 }
    ]
  }
}
```

**Implementation for SavvyDealer:** Auto-generate this from `config.json`. Every field we need is already there (dealer name, phone, address, hours, departments). The `hasOfferCatalog` counts can come from the inventory API. This should be injected as a `<script type="application/ld+json">` block in every page's `<head>`.

**Why it matters:** Google rich results, Google Maps knowledge panels, and AI assistants (ChatGPT, Gemini, Claude) all consume Schema.org data. This directly powers "find a Ford dealer near me" queries.

### 2. Three-Tier Pricing on Vehicle Cards

Mullinax shows pricing in layers — not just a single number:

```
┌─────────────────────────────┐
│  UP FRONT PRICE             │
│  $32,495                    │  ← Hero price (large, bold)
│                             │
│  Total Savings: $4,200      │  ← Savings line (green, medium)
│                             │
│  ▼ See Price Breakdown      │  ← Expandable detail
│    MSRP:        $36,695     │
│    Rebates:     -$2,500     │
│    Discount:    -$1,700     │
│    Dealer Fee:  $0          │
└─────────────────────────────┘
```

**Why it works:** The hero price is what buyers care about. The savings line creates urgency. The expandable breakdown builds trust. The $0 dealer fee is a competitive differentiator for Mullinax specifically.

**Implementation:** Vehicle card component gets three pricing slots:
- `{{price}}` — primary displayed price (largest font)
- `{{savings}}` — calculated savings line (conditional, only shows if > $0)
- `{{priceBreakdown}}` — collapsible `<details>` element with line items

### 3. Inline Thumbnail Carousel on Vehicle Cards

Each SRP card has a mini image gallery — **no heavy carousel library per card.** Just vanilla JS that swaps the main image `src`:

```html
<div class="vehicle-card">
  <img id="main-img-123" src="photo-1.avif" alt="2025 Ford Maverick">
  <div class="thumb-dots">
    <span data-image-1="photo-1.avif" class="active"></span>
    <span data-image-2="photo-2.avif"></span>
    <span data-image-3="photo-3.avif"></span>
    <!-- hover/click swaps main img src -->
  </div>
</div>
```

**Why it works:** Users can preview multiple angles without leaving the SRP. No extra page load, no heavy JS. Just DOM manipulation.

**Implementation:** Store first 5 image URLs as data attributes on the card. On hover/click of dot indicators, swap `main-img` src. Preload next image on hover for instant transition.

### 4. Vehicle Quickview Sidebar

Clicking "Quick View" on a vehicle card opens a slide-in panel from the right — loaded via AJAX:

```
┌──────────────────────┬─────────────────┐
│                      │  QUICK VIEW     │
│   SRP Grid           │  2025 Maverick  │
│   (dimmed)           │  [Photo Gallery]│
│                      │  $32,495        │
│                      │  Key Specs...   │
│                      │  [View Details] │
│                      │  [Get E-Price]  │
└──────────────────────┴─────────────────┘
```

**Why it works:** Users explore vehicles without leaving the search results. Reduces bounce rate. If they're not interested, they close the panel and keep browsing — no back-button needed.

**Implementation:** This is the highest-effort item on this list. Requires:
- AJAX endpoint returning vehicle detail HTML/JSON
- Slide-in panel component with overlay
- Photo gallery within the panel
- CTA buttons (schedule test drive, get e-price, view full details)
- Keyboard accessibility (Escape to close, focus trap)

### 5. Headroom.js Auto-Hide Header (Quick Win)

The header slides up when scrolling down and reappears on scroll-up. ~2KB library.

```javascript
import Headroom from 'headroom.js';
const header = document.querySelector('.site-header');
const headroom = new Headroom(header, {
  offset: 100,
  tolerance: 5,
  classes: {
    pinned: 'header--pinned',
    unpinned: 'header--unpinned'
  }
});
headroom.init();
```

```css
.header--unpinned { transform: translateY(-100%); transition: transform 0.3s ease; }
.header--pinned   { transform: translateY(0);     transition: transform 0.3s ease; }
```

**Why it matters:** On mobile, the header can eat 60-80px of viewport. Auto-hiding reclaims that space for content while keeping navigation one scroll-up away.

### 6. CSS Class Encoding on Vehicle Elements (Quick Win)

Mullinax encodes vehicle metadata as CSS classes:

```html
<li class="vehicle-card v-new v-2025 v-ford v-maverick v-xl v-awd">
```

This enables **CSS-only conditional styling** — no JS needed:

```css
/* Highlight all 2025 models */
.v-2025 { border-left: 3px solid #2BA343; }

/* Badge for certified pre-owned */
.v-certified::before { content: "CPO"; background: gold; }

/* Different background for used */
.v-used { background: #f9f9f9; }
```

**Implementation:** When rendering vehicle cards, join condition/year/make/model/trim into CSS classes with a `v-` prefix. Zero performance cost, enables powerful dealer-specific styling without template changes.

### 7. Filter Count Badges

Mullinax shows the number of matching vehicles next to each filter option:

```
Make
  ☑ Ford (1,247)
  ☐ Lincoln (89)

Model
  ☑ Maverick (142)
  ☐ F-150 (387)
  ☐ Explorer (201)
```

**Why it works:** Users immediately see how many results they'll get. Eliminates "0 results" dead ends. Counts update dynamically as filters are applied.

**Implementation:** Inventory API returns faceted counts alongside results. Filter UI updates counts on each AJAX response.

---

## Styling — What to Skip

| Pattern | Why We Skip It |
|---------|---------------|
| Semantic UI 16-column grid | Bootstrap 4's 12-column is standard, more widely understood |
| CSS theming via `!important` | Our `:root` CSS variables are cleaner, more maintainable |
| URL shortener for share links | Nice-to-have, low priority for now |
| Overlay chat popups on every page | Hurts mobile UX, use a persistent but minimal chat trigger |
| Multiple GTM containers | One container, all tags managed inside it |

---

## Priority Implementation Matrix

| # | Improvement | Category | Impact | Effort | Sprint |
|---|------------|----------|--------|--------|--------|
| 1 | Schema.org AutoDealer from config.json | SEO/AI | **High** | Low | 1 |
| 2 | `font-display: swap` on all fonts | Speed | Medium | Low | 1 |
| 3 | Preload hints (hero, fonts, critical CSS) | Speed | **High** | Low | 1 |
| 4 | CSS class encoding on vehicle cards | Styling | Medium | Low | 1 |
| 5 | Headroom.js auto-hide header | Mobile UX | Medium | Low | 1 |
| 6 | Defer non-critical JS | Speed | **High** | Low | 1 |
| 7 | AVIF images + two-tier loading | Speed | **High** | Medium | 2 |
| 8 | Responsive images (srcset/sizes) | Speed | **High** | Medium | 2 |
| 9 | Three-tier pricing display | UX/Trust | **High** | Medium | 2 |
| 10 | Inline thumbnail carousel on cards | UX | Medium | Medium | 2 |
| 11 | AJAX filtering + pushState | Speed/UX | **High** | Medium | 3 |
| 12 | Filter count badges | UX | Medium | Medium | 3 |
| 13 | Vehicle quickview sidebar | UX | **High** | High | 3 |
| 14 | Single GTM container policy | Speed | Medium | Low | Ongoing |

**Sprint 1** (quick wins): Items 1-6 can all ship in a single sprint. Low effort, high cumulative impact.

**Sprint 2** (image pipeline + cards): Items 7-10 require image processing infrastructure and vehicle card component updates.

**Sprint 3** (SRP overhaul): Items 11-13 are the SRP experience upgrade — filtering, facets, and quickview.

---

## Technical Reference

### Mullinax Asset CDN Structure

| CDN | Purpose | Example |
|-----|---------|---------|
| `images.remorainc.com` | Dealer-uploaded images (logos, banners) | `/uploads/k1o/d/...` |
| `r.remorainc.com` | Static assets (fonts, icons, CSS) | `/new/c/f/FordAntennaWGL-Bold.woff2` |
| `s3.remora.inc` | S3-hosted dealer uploads | `/uploads/k1o/...` |
| `vimg.remora.inc` | Vehicle images (AVIF) | `/vehicle-photo.avif` |

### Color Palette (Mullinax / Ford)

| Token | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#1f76b3` | Links, buttons, accents |
| Dark Blue | `#003478` | Header background |
| Red | `#dd2334` | CTAs, urgency |
| Green | `#2BA343` | Savings, positive indicators |
| Yellow | `#ffd900` | Value props, badges, borders |
| Body Text | `#333333` | Default text |
| Footer BG | `#222222` | Dark footer |

### Key Libraries Used by Mullinax

| Library | Version | Purpose | Adopt? |
|---------|---------|---------|--------|
| jQuery | 2.2.4 | DOM manipulation | No (we use 3.5.1) |
| Semantic UI | 2.x | CSS framework | No (we use Bootstrap 4) |
| Headroom.js | latest | Auto-hide header | **Yes** |
| Slick Carousel | 1.x | Image carousels | Already have it |
| lazySizes | latest | Lazy loading | Already have it |

---

*Analysis performed 2026-03-12 by reviewing full page source and rendered DOM of mullinaxfordfl.com homepage and SRP.*
