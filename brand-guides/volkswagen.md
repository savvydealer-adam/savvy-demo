# Volkswagen Brand Guide

**Source:** vw.com (2025-2026 production site), VW Group corporate design guidelines, Landor & Fitch rebrand (2019+).

---

## Official Logo

- **DealerInspire PNG (dark/desktop):** `https://di-shared-assets.dealerinspire.com/public/logos/volkswagen/volkswagen-dark-large-no-space-desktop-logo.png`
- **DealerInspire PNG (dark/mobile):** `https://di-shared-assets.dealerinspire.com/public/logos/volkswagen/volkswagen-dark-no-space-mobile-logo.png`
- **Official SVG:** `https://media.vw.com/logos/vw-logo.svg`

**NEVER fabricate, redraw, or approximate the VW roundel.** Always use official assets above.

### Logo Usage Rules
- VW roundel is the primary mark (circle with V and W)
- On dark backgrounds: white roundel
- On light backgrounds: VW Blue (`#001E50`) roundel
- "Volkswagen" wordmark may accompany the roundel
- Maintain clear space equal to the width of the V stroke
- Logo sizes: 32px (mobile) scaling to 56px (desktop)

---

## Color Palette

### Primary Brand Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **VW Dark Blue** | `#001E50` | (0, 30, 80) | Primary brand color, nav, footer, primary buttons, hero overlays |
| **VW Hover Blue** | `#0040C5` | (0, 64, 197) | Button hover states, interactive accents |
| **VW Cyan** | `#00B0F0` | (0, 176, 240) | Focus rings, interactive highlights, EV accents |
| **White** | `#FFFFFF` | (255, 255, 255) | Backgrounds, text on dark surfaces |
| **Dark Text** | `#000E26` | (0, 14, 38) | Body text on light backgrounds |

### Secondary / UI Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Focus Cyan** | `#4CC7F4` | (76, 199, 244) | Alternate focus ring color |
| **Gray 600** | `#6A767D` | (106, 118, 125) | Muted text, secondary labels |
| **Gray 300** | `#C2CACF` | (194, 202, 207) | Card borders, dividers |
| **Gray 200** | `#DFE4E8` | (223, 228, 232) | Light borders, section dividers |
| **Light Gray BG** | `#F5F5F5` | (245, 245, 245) | Alternate section backgrounds |

### CSS Variables Template
```css
:root {
    --vw-blue: #001E50;
    --vw-blue-hover: #0040C5;
    --vw-cyan: #00B0F0;
    --vw-cyan-focus: #4CC7F4;
    --vw-white: #FFFFFF;
    --vw-dark-text: #000E26;
    --vw-gray-600: #6A767D;
    --vw-gray-300: #C2CACF;
    --vw-gray-200: #DFE4E8;
    --vw-light-bg: #F5F5F5;
}
```

---

## Typography

### VW Head (Headings)

Custom typeface designed by **Hannes von Dohren** and **Livius Dietzel** (2015). Clean, geometric sans-serif -- compact, confident, engineered for large type sizes (16pt+).

| Weight | Value | Usage |
|--------|-------|-------|
| Light | 200 | Hero headings, large display text (primary heading weight) |
| Regular | 400 | Subheadings, secondary headings |
| Bold | 700 | Emphasis, CTAs, badges |

### VW Text (Body)

Companion typeface for body copy and smaller text.

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, descriptions, paragraphs |
| Bold | 700 | Inline emphasis, labels |

### CDN Source
```html
<link href="https://fonts.cdnfonts.com/css/vw-head" rel="stylesheet" />
```

### Font Stack
```css
/* Headings */
h1, h2, h3, h4, h5, h6 {
    font-family: 'VW Head', 'Inter', Helvetica, Arial, sans-serif;
}

/* Body */
body {
    font-family: 'VW Text', 'VW Head', 'Inter', Helvetica, Arial, sans-serif;
}
```

### Type Scale (from vw.com)
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero heading | `clamp(2rem, 4vw, 3.25rem)` | 200 (Light) | 120% |
| Section heading | `clamp(1.5rem, 3vw, 2.5rem)` | 200 (Light) | 120% |
| Card heading | `clamp(1.13rem, 2vw, 1.5rem)` | 400 (Regular) | 120% |
| Body text | `1rem` (16px) | 400 (Regular) | 150% |
| Small text / disclaimers | `0.88rem` (14px) | 400 (Regular) | 150% |
| Nav links | `0.88rem` | 700 (Bold) | 100% |

**Key observation:** VW uses Light (200) weight for hero headings, giving them an airy, premium feel. This is a signature VW design choice -- do NOT default to Bold headings.

---

## Button Styles -- PILL BUTTONS

VW uses **pill-shaped buttons** with `border-radius: 100px`. This is a defining characteristic of the VW web design system.

### Primary Button
```css
.btn-primary {
    background-color: #001E50;
    color: #FFFFFF;
    border: none;
    border-radius: 100px;        /* PILL SHAPE */
    padding: 0 32px;
    min-height: 44px;
    font-family: 'VW Head', sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
    cursor: pointer;
    transition: background-color 0.3s cubic-bezier(0.14, 1.12, 0.67, 0.99);
}
.btn-primary:hover {
    background-color: #0040C5;
}
.btn-primary:focus {
    outline: 3px solid #00B0F0;
    outline-offset: 2px;
}
```

### Secondary Button (Outlined)
```css
.btn-secondary {
    background-color: transparent;
    color: #001E50;
    border: 2px solid #001E50;
    border-radius: 100px;        /* PILL SHAPE */
    padding: 0 32px;
    min-height: 44px;
    font-family: 'VW Head', sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.14, 1.12, 0.67, 0.99);
}
.btn-secondary:hover {
    background-color: #001E50;
    color: #FFFFFF;
}
```

### Secondary Button (White -- on dark backgrounds)
```css
.btn-secondary-white {
    background-color: transparent;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 100px;
    padding: 0 32px;
    min-height: 44px;
    font-family: 'VW Head', sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
}
.btn-secondary-white:hover {
    background-color: #FFFFFF;
    color: #001E50;
}
```

### Button Group Spacing
```css
.btn-group {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}
```

---

## Hero Treatment

### Layout
- Full-width background image or video
- Aspect-ratio container (maintains proportion across breakpoints)
- **Gradient overlay:** `linear-gradient(180deg, rgba(0,0,0,0) 60%, #000 97%)` on lifestyle images
- Alternatively: dark gradient from top `linear-gradient(rgba(0,0,0,0.8) 45%, rgba(0,0,0,0))` for model pages
- Text overlaid, centered on mobile, left-aligned on desktop (960px+)
- Pill CTA buttons positioned below hero text

### Hero CSS Pattern
```css
.hero {
    position: relative;
    width: 100%;
    min-height: 60vh;
    overflow: hidden;
}
.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
}
.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 60%, #000 97%);
}
.hero-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 48px clamp(24px, 8.33vw, 213px);
    color: #FFFFFF;
}
.hero-content h1 {
    font-family: 'VW Head', sans-serif;
    font-weight: 200;
    font-size: clamp(2rem, 4vw, 3.25rem);
    line-height: 1.2;
    margin-bottom: 16px;
}
```

### Model Page Hero
- Car on dark navy (`#001E50`) background
- No lifestyle photo -- clean studio-style presentation
- Model name in Light (200) weight, white text
- Starting MSRP below model name
- "Build & Price" and "View Inventory" pill buttons

---

## Navigation

### Structure
- **Sticky** at top of viewport
- **Background:** `#001E50` (VW Dark Blue) or transparent with gradient on hero pages
- **Text:** `#FFFFFF` (white)
- **Logo:** VW roundel, responsive (32px mobile to 56px desktop)
- **Height:** Calculated via CSS custom property (`--s2-one-hub-navigation-top-bar-height`)

### Implementation Pattern
```css
.nav {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: #001E50;
    color: #FFFFFF;
    padding: 0 clamp(16px, 4vw, 48px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 64px;
}
.nav-logo {
    width: clamp(32px, 5vw, 56px);
    height: auto;
}
.nav-links a {
    color: #FFFFFF;
    text-decoration: none;
    font-family: 'VW Head', sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
    padding: 8px 16px;
}
.nav-links a:hover {
    opacity: 0.8;
}
```

### Mobile Navigation
- Hamburger menu icon
- Expands vertically with `max-height: 60vh`
- Smooth transition animation

---

## Card & Grid Patterns

### Grid System
VW uses a **24-column responsive grid** system with breakpoints at:
- **560px** (small tablets)
- **960px** (tablets/small desktop)
- **1280px** (desktop)
- **1920px** (large screens)

### Feature Cards
```css
.card {
    border: 1px solid #C2CACF;
    border-radius: 8px;
    padding: 12px;
    max-width: clamp(240px, 70vw, 320px);
    background: #FFFFFF;
    transition: transform 0.3s ease;
}
.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 30, 80, 0.1);
}
.card:focus-within {
    outline: 2px solid #00B0F0;
    outline-offset: 2px;
}
```

### Image Treatment in Cards
```css
.card-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 0;             /* Sharp corners on images */
    transition: transform 2.2s cubic-bezier(0.14, 1.12, 0.67, 0.99);
}
.card:hover .card-image {
    transform: scale(1.03);       /* Subtle zoom on hover */
}
```

### Model Carousel
- Scroll-snap for horizontal galleries: `scroll-snap-type: x mandatory`
- Lentil/dot indicators below carousel
- Navigation arrows on desktop

---

## Spacing System

VW uses a dynamic spacing scale via CSS custom properties:

| Token | Default | Breakpoint Scaled | Usage |
|-------|---------|-------------------|-------|
| `--size-dynamic0020` | 4px | -- | Micro gaps |
| `--size-dynamic0050` | 12px | -- | Small gaps |
| `--size-dynamic0100` | 20px | 24px | Component padding |
| `--size-dynamic0130` | 24px | 28px | Card gaps |
| `--size-dynamic0150` | 28px | 32-64px | Section inner padding |
| `--size-dynamic0250` | 44px | 48-56px | Section gaps |
| `--size-dynamic0270` | 56px | 64px | Large section gaps |
| `--size-dynamic0300` | 72px | 80-100px | Page section separators |

### Page Container Padding
```css
.container {
    padding-left: clamp(24px, 8.33vw, 213px);
    padding-right: clamp(24px, 8.33vw, 213px);
}
```

---

## Footer

### Design
- **Background:** `#001E50` (VW Dark Blue)
- **Text:** `#FFFFFF`
- **Top border:** `solid 2px #001E50`
- Multi-column layout: link groups organized by category
- Language switcher positioned right-aligned
- Copyright text: `0.88rem` font size

### Footer CSS Pattern
```css
.footer {
    background-color: #001E50;
    color: #FFFFFF;
    padding: 48px clamp(24px, 8.33vw, 213px);
}
.footer a {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 0.88rem;
    opacity: 0.8;
}
.footer a:hover {
    opacity: 1;
    text-decoration: underline;
}
.footer-columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 32px;
    margin-bottom: 48px;
}
.footer-copyright {
    font-size: 0.88rem;
    opacity: 0.7;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 24px;
}
```

---

## EV Pages (ID.4, ID. Buzz)

EV pages use the **same design system** as ICE vehicle pages -- VW does NOT use a separate "green" or "eco" palette for EVs. Key observations:

- Same `#001E50` primary color throughout
- **VW Cyan (`#00B0F0`)** appears slightly more as an accent on EV pages (focus states, highlights)
- No green sustainability colors -- VW positions EVs as modern/tech rather than eco
- Same pill buttons, same typography, same grid system
- EV-specific content (range, charging times) displayed in the standard card/section layout
- Hero treatment identical to ICE model pages

---

## Design Philosophy

**"Progressive, digital-first, approachable premium."**

VW's web presence strikes a balance between premium automotive and accessible mass-market. Key principles:

1. **High contrast** -- Dark navy (`#001E50`) against bright white creates immediate visual impact
2. **Generous whitespace** -- Breathing room between sections; never cluttered
3. **Light typography** -- VW Head at weight 200 for headings gives an airy, modern feel (not heavy/aggressive)
4. **Pill buttons** -- Soft, rounded CTAs (`border-radius: 100px`) feel approachable and clickable
5. **Minimal decoration** -- No gradients on UI elements, no drop shadows on cards, no border embellishments
6. **Accessibility-first** -- 44px minimum touch targets, visible focus rings (`#00B0F0`), skip navigation, ARIA labels
7. **Subtle animation** -- Hover zoom (`scale(1.03)`), smooth transitions using `cubic-bezier(0.14, 1.12, 0.67, 0.99)`

---

## Animation & Transition Defaults

```css
/* VW signature easing curve */
--vw-ease: cubic-bezier(0.14, 1.12, 0.67, 0.99);

/* Standard transitions */
.transition-color { transition: background-color 0.3s var(--vw-ease); }
.transition-transform { transition: transform 0.3s var(--vw-ease); }
.transition-opacity { transition: opacity 0.3s ease-out; }

/* Image hover zoom */
.image-zoom { transition: transform 2.2s var(--vw-ease); }
.image-zoom:hover { transform: scale(1.03); }
```

---

## Current Models (2025-2026)

Atlas, Atlas Cross Sport, Tiguan, Taos, Jetta, Jetta GLI, GTI, Golf R, ID.4, ID. Buzz

## Vehicle Image CDN
- KBB: `https://file.kelleybluebookimages.com/kbb/base/house/{year}/{year}-Volkswagen-{Model}-FrontSide_{code}.jpg`

---

## DO's and DON'Ts

### DO
- Use pill buttons (`border-radius: 100px`) for ALL CTAs
- Use VW Head Light (200) for hero and section headings
- Use `#001E50` as the dominant dark color (nav, footer, primary buttons)
- Keep layouts clean with generous whitespace
- Use the official VW roundel logo from authorized sources
- Apply subtle hover animations (scale 1.03, color transitions)
- Maintain 44px minimum button height for accessibility
- Use `#00B0F0` cyan for focus states and interactive highlights

### DON'T
- Use square or slightly-rounded buttons -- VW buttons are ALWAYS pills
- Use Bold (700) for hero headings -- VW uses Light (200) for display text
- Use green/eco colors for EV models -- VW treats EVs the same as ICE visually
- Add heavy drop shadows, gradients, or decorative borders to cards
- Fabricate or redraw the VW roundel logo
- Use dark/black backgrounds for sections -- VW uses navy `#001E50` or white `#FFFFFF`
- Overcrowd layouts -- VW's spacing is generous (72-100px between page sections)
- Use generic fonts -- always load VW Head; fallback to Inter, not Arial

---

## Checklist for New VW Dealer Templates

- [ ] Load VW Head from CDN (`fonts.cdnfonts.com/css/vw-head`)
- [ ] Use `#001E50` for nav, footer, and primary buttons
- [ ] All buttons are pill-shaped (`border-radius: 100px`)
- [ ] Hero headings use VW Head weight 200 (Light)
- [ ] Body text color is `#000E26`
- [ ] Focus states use `#00B0F0` cyan outline
- [ ] Button hover state uses `#0040C5`
- [ ] Official VW roundel logo from DealerInspire or media.vw.com
- [ ] Sticky navigation with dark blue background
- [ ] Footer uses `#001E50` background with white text
- [ ] Cards have `border-radius: 8px` and `1px solid #C2CACF` border
- [ ] Images have subtle hover zoom (`scale(1.03)`)
- [ ] Minimum 44px button height
- [ ] Page sections separated by 72-100px spacing
- [ ] No fabricated logos -- use official assets only
