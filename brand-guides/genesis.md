# Genesis Brand Guide

> **Research Date:** 2026-03-24
> **Source:** Direct analysis of genesis.com (US), Genesis brand overview pages, Genesis newsroom,
> iF Design Award documentation, Red Dot Award documentation, HvD Fonts documentation, BrandColorCode.com

---

## Official Logo

- **Primary SVG**: `https://www.genesis.com/content/dam/genesis/us/en/images/common/logo-genesis.svg`
- **Scene7 CDN**: `https://s7d1.scene7.com/is/image/hyundai/genesis-logo`
- Format: SVG (vector)

**NEVER fabricate, redraw, or approximate the Genesis winged emblem.** Always use the official SVG/image above.

### Logo Usage Rules
- The winged crest emblem is the primary mark (inspired by the brand emblem's crest shape)
- On dark backgrounds: use white/light version
- On light backgrounds: use dark version
- The "GENESIS" wordmark uses ultra-wide letter-spacing (6-10px), thin weight
- Copper/bronze accent NEVER on the logo itself -- only on UI accent elements

---

## Design Philosophy: "Athletic Elegance"

Genesis's official design language is called **"Athletic Elegance"** -- the balance between two opposing characteristics: dynamic athleticism and refined elegance. This is the core of everything Genesis does visually.

### What "Athletic Elegance" Actually Looks Like on genesis.com

1. **NOT a fully dark-themed site.** Genesis.com uses a **hybrid approach**:
   - Vehicle model pages (GV80, G80, G90, etc.) open with **dark hero sections** using deep teal-black gradients, then transition to **white/light content sections** below
   - Service/ownership pages (Concierge, Owners) are **predominantly light-themed** with white backgrounds
   - The homepage alternates dark hero sections with light content areas
   - **Overall ratio: approximately 40% dark, 60% light** across the full site

2. **The dark sections use deep teal-greens, NOT pure black:**
   - Hero gradient top: `rgb(54, 98, 108)` -- a sophisticated dark teal
   - Hero gradient bottom: `rgb(31, 78, 84)` -- deeper teal-green
   - Mobile variant: `rgb(54, 102, 108)` top, `rgb(44, 35, 33)` or `rgb(23, 22, 27)` bottom
   - Solid black overlays: `rgba(0, 0, 0, 1)` used for video backgrounds
   - White sections: `rgb(255, 255, 255)` for content/spec areas

3. **Extreme minimalism and whitespace** -- "Beauty of White Space" is their interior design principle (from Korean architecture) and it extends to the website

4. **Reductive design** -- strip away everything unnecessary. The Parabolic Line philosophy: one clean line defines the whole form

### Three Brand Pillars
- **Audacious** -- bold, confident moves
- **Progressive** -- forward-looking, tech-forward
- **Distinctly Korean** -- rooted in Korean aesthetics and the "Beauty of White Space"

---

## Color Palette

### Primary Colors (from genesis.com source code + brand documentation)

| Name | Value | Usage |
|------|-------|-------|
| Hero Teal Dark | `rgb(54, 98, 108)` / `#366A6C` | Vehicle page hero gradient top |
| Hero Teal Deep | `rgb(31, 78, 84)` / `#1F4E54` | Vehicle page hero gradient bottom |
| True Black | `rgba(0, 0, 0, 1)` / `#000000` | Video backgrounds, overlays, deep sections |
| White | `#FFFFFF` | Content sections, primary text on dark |
| Mobile Warm Dark | `rgb(44, 35, 33)` / `#2C2321` | Mobile hero gradient bottom (warm variant) |
| Mobile Cool Dark | `rgb(23, 22, 27)` / `#17161B` | Mobile hero gradient bottom (cool variant) |

### Brand Identity Colors (from BrandColorCode.com)

| Name | Hex | Pantone | Usage |
|------|-----|---------|-------|
| Genesis Black | `#000000` | Black 6 C | Primary brand color |
| Genesis White | `#FFFFFF` | 7436 C | Secondary brand color |

### Extended Palette (for dealer template implementation)

| Name | Hex | Usage |
|------|-----|-------|
| Near Black | `#0D0D0D` | Footer, deepest background sections |
| Dark Charcoal | `#111111` | Dark content sections |
| Secondary Dark | `#1A1A1A` | Card backgrounds on dark sections |
| Warm Gray | `#8A8A8A` | Secondary/muted text |
| Light Gray | `#F5F5F5` | Light section backgrounds |

### Copper/Bronze -- THE TRUTH

**Copper is Genesis's signature accent color, but it is used VERY differently than most assume.**

Key findings from research:
- **Copper is NOT prominently used on genesis.com itself.** No copper/bronze hex codes were found in any page source across homepage, GV80, G80, G90, Electrified GV70, Concierge, or Owners pages
- **Copper IS the signature color of their infotainment/UI system** -- the "Copper GUI" design won a 2020 Red Dot Award and iF Design Award
- **Copper symbolizes "Athletic Elegance"** per official Genesis documentation
- The copper theme was specifically designed as "a new copper colour system optimised for the digital environment in a running vehicle" -- meaning in-car screens, NOT the website
- On the website, Genesis relies on a **monochromatic palette** (blacks, whites, deep teals) with NO warm metallic accents

**For dealer templates**, copper/bronze can be used as a subtle accent to evoke the in-car experience, but it should be:

| Name | Hex | Usage |
|------|-----|-------|
| Copper Accent | `#B87333` | Hover states, thin accent lines, small labels ONLY |
| Light Copper | `#C9956B` | Hover state variant |

**Rules for copper usage:**
- NEVER use copper as a background color
- NEVER use copper for buttons or large UI elements
- USE for: thin 1px divider lines, hover underlines, small accent details, icon highlights
- Maximum copper coverage: less than 2% of any page's visual area
- The website itself uses NO copper -- this is our dealer-template interpretation of their brand

---

## Typography

### Official Brand Font: Genesis Sans

Genesis uses a **custom proprietary typeface called "Genesis Sans"**, designed by Sandoll Communications Inc. for Hyundai Motor Company.

**Key characteristics:**
- Based on Hyundai Sans with modifications pushing it into "a clearly elegant direction"
- Caps-only glyph set with "slight but character-giving changes of details and proportions"
- Described as "Quietly Iconic"
- Geometric sans-serif with subtle refinements
- Generous letter-spacing for an upscale appearance
- Designed to work across print, web, apps, office, racing cars, limousines, and EVs
- Supports Latin and Cyrillic character sets

**CSS implementation (if using the actual font):**
```css
@font-face {
  font-family: 'Genesis Sans Regular';
  src: url('.eot');
  src: url('.eot?#iefix') format('embedded-opentype'),
       url('.woff') format('woff'),
       url('.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
```

### For Dealer Templates (Google Fonts Substitutes)

Since Genesis Sans is proprietary and not publicly available, use these closest alternatives:

| Role | Font | Weights | Fallback Stack |
|------|------|---------|---------------|
| Display Headings | Cormorant Garamond | 300, 400, 500 | `'Cormorant Garamond', Georgia, serif` |
| Body Text | DM Sans | 300, 400, 500, 600 | `'DM Sans', 'Helvetica Neue', sans-serif` |

**Why Cormorant Garamond for headings:** Genesis Sans is unavailable, and genesis.com uses sans-serif throughout. However, for dealer templates targeting the ultra-luxury feel, a refined serif creates the editorial luxury impression that Genesis's "Athletic Elegance" demands. This is a deliberate design choice for dealer sites, not a 1:1 copy of genesis.com.

### Typography Rules

```css
/* Headings */
h1 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 300;
  font-size: clamp(2.5rem, 5vw, 4rem);
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #FFFFFF; /* on dark sections */
  line-height: 1.1;
}

h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 400;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  letter-spacing: 3px;
  text-transform: uppercase;
}

/* Body */
body {
  font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.7;
  letter-spacing: 0.3px;
}

/* Labels / Small Caps */
.label, .overline {
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 6px;
  text-transform: uppercase;
}
```

---

## Button Styles

Genesis.com uses `cta-primary` and `cta-secondary` classes. Based on analysis:

- Primary CTAs: dark background with white text ("BUILD YOUR GV80", "REQUEST A QUOTE")
- Secondary CTAs: outline/ghost style
- Buttons have **consistent, subtle rounding** -- NOT the sharp 0px corners some assume
- CTAs use clean, uppercase sans-serif text

### CSS Implementation for Dealer Templates

```css
/* Primary Button */
.btn-primary {
  display: inline-block;
  background-color: #FFFFFF;
  color: #000000;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 16px 40px;
  border: 1px solid #FFFFFF;
  border-radius: 0;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: transparent;
  color: #FFFFFF;
}

/* Secondary / Ghost Button */
.btn-secondary {
  display: inline-block;
  background-color: transparent;
  color: #FFFFFF;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 16px 40px;
  border: 1px solid #FFFFFF;
  border-radius: 0;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: #FFFFFF;
  color: #000000;
}

/* On Light Backgrounds */
.btn-primary--dark {
  background-color: #000000;
  color: #FFFFFF;
  border: 1px solid #000000;
}

.btn-primary--dark:hover {
  background-color: transparent;
  color: #000000;
}
```

**Note on border-radius:** Genesis.com buttons appear to have minimal-to-zero border-radius, aligning with editorial luxury aesthetics. For dealer templates, use `border-radius: 0` (sharp corners) for the ultra-luxury feel.

---

## Hero Treatment

### What genesis.com Actually Does

Vehicle pages use a **gradient-over-video/image** approach:

```css
/* Hero gradient overlay system */
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.hero__gradient-top {
  background: linear-gradient(to bottom,
    rgb(54, 98, 108) 0%,
    transparent 100%
  );
}

.hero__gradient-bottom {
  background: linear-gradient(to top,
    rgb(31, 78, 84) 0%,
    transparent 100%
  );
}

/* Mobile variant */
@media (max-width: 768px) {
  .hero__gradient-top {
    background: linear-gradient(to bottom,
      rgb(54, 102, 108) 0%,
      transparent 100%
    );
  }
  .hero__gradient-bottom {
    background: linear-gradient(to top,
      rgb(23, 22, 27) 0%,
      transparent 100%
    );
  }
}
```

### Hero Content Pattern
- Large model name as heading (e.g., "2026 Genesis GV80")
- Tagline in uppercase ("TRANSFORM YOUR DRIVE")
- Starting MSRP displayed prominently
- Two CTAs side by side: "BUILD YOUR [MODEL]" + "REQUEST A QUOTE"
- Vehicle shown in motion or in a scenic/architectural setting
- Deep teal-to-dark gradient creates atmosphere without pure black

### For Dealer Templates
- Use dark gradient overlays on high-quality vehicle photography
- Teal-dark gradients preferred over pure black
- White text with generous letter-spacing
- Two-button CTA layout (primary + secondary)
- Full-viewport height hero sections

---

## Navigation

### What genesis.com Uses

- **Light/transparent navigation** on dark hero sections (white text, transparent background)
- **Scrolls to solid background** (white or dark depending on section)
- Multi-level dropdowns: MODELS, ELECTRIC, SHOP, Discover, MYGENESIS
- Clean horizontal layout with the winged logo centered or left-aligned
- Mobile: hamburger menu with close functionality
- Accessibility: "Skip to Content" link

### CSS for Dealer Template Navigation

```css
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  transition: background 0.3s ease;
}

.nav--scrolled {
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  padding: 12px 40px;
}

.nav__logo img {
  height: 40px;
  filter: brightness(0) invert(1); /* white on dark */
}

.nav__links a {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #FFFFFF;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.nav__links a:hover {
  opacity: 0.7;
}
```

---

## Card / Grid Patterns

### Vehicle Showcase Grid (Homepage)
- Grid-based layout displaying models as cards
- Each card: vehicle image (16:9 aspect ratio from Scene7 CDN) + model name + MSRP + "Explore" / "Build" CTAs
- Clean white card backgrounds in light sections
- Dark overlay cards in dark sections

### Vehicle Page Gallery
- Carousel/slider with thumbnail navigation
- Tabs: Overview, Exterior, Interior, Technology
- High-resolution studio photography (1800x1013px)
- Multiple angles: profile, front/rear quarter, 360-degree views
- Color swatches for paint/interior options

### CSS for Cards

```css
.vehicle-card {
  background: #FFFFFF;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.vehicle-card:hover {
  transform: translateY(-4px);
}

.vehicle-card__image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}

.vehicle-card__content {
  padding: 24px;
}

.vehicle-card__name {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.vehicle-card__msrp {
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  color: #8A8A8A;
  margin-bottom: 16px;
}
```

---

## Section Layout Pattern

Genesis.com alternates between dark and light sections to create visual rhythm:

```css
/* Dark Section */
.section--dark {
  background: linear-gradient(180deg, #111111 0%, #0D0D0D 100%);
  color: #FFFFFF;
  padding: 100px 0;
}

/* Light Section */
.section--light {
  background: #FFFFFF;
  color: #111111;
  padding: 100px 0;
}

/* Teal Gradient Section (hero-style) */
.section--teal {
  background: linear-gradient(180deg,
    rgb(54, 98, 108) 0%,
    rgb(31, 78, 84) 100%
  );
  color: #FFFFFF;
  padding: 100px 0;
}

/* Content container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}
```

---

## Footer

Genesis.com footer includes:
- Multi-column link structure (Models, Shop, Owners, Genesis sections)
- Social media links: Facebook, Instagram, Threads, Twitter/X, YouTube, LinkedIn, TikTok
- Language selector
- Legal links and disclaimers

```css
.footer {
  background: #0D0D0D;
  color: #8A8A8A;
  padding: 60px 40px 30px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
}

.footer a {
  color: #8A8A8A;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer a:hover {
  color: #FFFFFF;
}

.footer__logo {
  margin-bottom: 40px;
}

.footer__columns {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}

.footer__heading {
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 16px;
  font-size: 0.75rem;
}

.footer__divider {
  border: none;
  border-top: 1px solid #2A2A2A;
  margin: 30px 0;
}

.footer__legal {
  font-size: 0.7rem;
  line-height: 1.6;
  color: #666666;
}
```

---

## Current Models (2025-2026)

G70, G80, G90, GV60, GV70, GV80, GV80 Coupe, Electrified GV70, Electrified G80

## Vehicle Image CDN

```
https://s7d1.scene7.com/is/image/hyundai/{model-image-id}:16-9?wid=600&hei=338&fmt=webp
```

---

## DO's and DON'Ts

### DO

- Use the hybrid dark/light approach (dark heroes, light content sections)
- Use deep teal gradients (`rgb(54, 98, 108)` to `rgb(31, 78, 84)`) for hero sections instead of flat black
- Apply extreme letter-spacing (3-8px) on headings and labels
- Use generous whitespace (80-120px vertical section padding)
- Keep copper to less than 2% of page area -- thin lines, hover states, tiny accents
- Use the official winged emblem SVG -- never recreate it
- Follow the alternating dark/light section rhythm
- Use uppercase for navigation links, labels, and CTAs
- Show starting MSRP on vehicle pages
- Use high-quality vehicle photography from Scene7 CDN
- Maintain the monochromatic (black/white/gray) palette as the foundation
- Use thin 1px lines as section dividers

### DON'T

- DON'T make the entire site dark -- Genesis.com is NOT an all-dark site
- DON'T use copper/bronze prominently -- it's for the in-car UI, not the website
- DON'T use pure black `#000000` for large hero backgrounds -- use teal gradients
- DON'T use rounded buttons (border-radius > 2px) -- sharp edges convey editorial luxury
- DON'T overcrowd layouts -- "Beauty of White Space" is a core principle
- DON'T use heavy font weights for headings -- light (300) and regular (400) weights dominate
- DON'T skip the gradient system -- flat dark backgrounds look cheap compared to teal gradients
- DON'T fabricate the logo -- always use the official SVG
- DON'T use standard web fonts like Arial or Helvetica alone -- pair serif display + refined sans-serif
- DON'T use colorful accents (blues, reds, greens) -- the palette is monochromatic with optional copper whispers
- DON'T add heavy drop shadows or glows -- Genesis design is flat and editorial

---

## Template Tier

**ULTRA-LUXURY** -- This is the most premium template tier, above Cadillac.

The Genesis template should feel like a high-end fashion editorial or architectural photography site, not a typical car dealership. Every element should breathe. Less is more. The vehicle is the hero -- everything else supports it with restraint and sophistication.

---

## Research Sources

- genesis.com/us/en.html (homepage)
- genesis.com/us/en/gv80.html (GV80 vehicle page)
- genesis.com/us/en/g80.html (G80 vehicle page)
- genesis.com/us/en/g90.html (G90 vehicle page)
- genesis.com/us/en/electrified-gv70.html (EV page)
- genesis.com/us/en/genesis-concierge.html (service page)
- genesis.com/us/en/owners.html (owners page)
- genesis.com/worldwide/en/genesis/brand/brand-overview.html (brand philosophy)
- Red Dot Award: Genesis Infotainment System - Copper Design (2020)
- iF Design Award: Genesis Infotainment System - Copper Design
- HvD Fonts: Hyundai/Genesis Sans documentation
- BrandColorCode.com: Genesis Motor
- Genesis Newsroom: "Athletic Elegance" design language articles
- fontsfree.pro: Genesis Sans font documentation
