# Toyota Brand Guide

> Sourced from live inspection of toyota.com (March 2026), brand.toyota.com official brand hub, pressroom.toyota.com, Southeast Toyota Finance branding, and brandcolorcode.com.
> This guide is used directly when building dealer website templates.

---

## 1. Official Logo

### Logo URLs (from toyota.com CDN)

- **Horizontal / Black** (for light backgrounds):
  `https://assets.tcom.aemcs.toyota.com/adobe/assets/urn:aaid:aem:fc0f747c-d8b8-4191-afd4-9e472c9b1d53/as/VIS_toyota_logo_horiz_black_RGB_2023.svg`

- **Horizontal / White** (for dark backgrounds):
  `/content/dam/toyota/sales-event/rsg_logo_eng_horiz_line_white_600w.svg`
  Full URL: `https://www.toyota.com/content/dam/toyota/sales-event/rsg_logo_eng_horiz_line_white_600w.svg`

- **Pressroom logo (black)**: `https://pressroom.toyota.com/wp-content/themes/toyota/assets/images/toyota-logo-b.svg`

- Format: SVG (vector)
- Source: Toyota AEM Assets CDN (`assets.tcom.aemcs.toyota.com`) and toyota.com content DAM

### Logo Structure

All Toyota logos share three core elements:
1. **Emblem** -- the three overlapping ellipses (transparent center on full-color versions)
2. **Staging platform** -- red rectangular background behind the emblem
3. **Wordmark** -- "TOYOTA" text to the right (horizontal) or below (vertical)

### Logo Variations

| Variation | Usage |
|-----------|-------|
| **Full-Color (Black text)** | Light backgrounds -- primary usage |
| **Full-Color (White text)** | Dark backgrounds, photography overlays |
| **Single-Color Black** | Limited use, black on white only |
| **Single-Color White** | Limited use, white on black only |
| **Single-Color Red** | Limited use, red on white only |
| **Single-Color White on Red** | Limited use only |

### Logo Usage Rules

- **NEVER fabricate, redraw, or approximate the Toyota logo.** Always use official SVGs.
- Present the emblem + staging platform + wordmark together -- never separate them
- Minimum clear space: **2X** (where X = 25% of the staging platform height)
- Minimum size: **24px height** (digital, horizontal), **30px** (digital, vertical)
- Single-color logos must NOT be placed over patterns or color gradients (transparent emblem loses legibility)
- Only one logo per page/application
- Do NOT use vehicle model badges in place of the Toyota logo
- On websites, horizontal logos are preferred for navigation
- Do NOT apply CSS filters to change logo color -- use the correct variant

---

## 2. Color Palette

### Primary Brand Color

| Name | Hex | RGB | CMYK | Pantone | Usage |
|------|-----|-----|------|---------|-------|
| **Toyota Red** | `#EB0A1E` | rgb(235, 10, 30) | 0, 100, 90, 0 | 186 C | THE signature Toyota color. Logo staging platform, accent highlights, CTA buttons, promotional badges. Always used at full opacity. |

### Functional / Core Colors

| Name | Hex | RGB | CMYK | Pantone | Usage |
|------|-----|-----|------|---------|-------|
| **Black** | `#000000` | rgb(0, 0, 0) | 0, 0, 0, 100 | Black C | Navigation background, primary text, primary buttons, hero overlays |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | 0, 0, 0, 0 | -- | Page backgrounds, text on dark, hero text, nav text |
| **Gray** | `#58595B` | rgb(88, 89, 91) | 0, 0, 0, 80 | Black C 80% tint | Supporting text, secondary UI elements, disclaimers |

### UI Colors (from toyota.com implementation)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Light Gray Background** | `#F8F8F8` | rgb(248, 248, 248) | Alternating section backgrounds |
| **Card Background** | `#F6F6F6` | rgb(246, 246, 246) | Vehicle cards, feature cards |
| **Border Gray** | `#EBEBEB` | rgb(235, 235, 235) | Dividers, card borders, subtle separators |
| **Muted Gray** | `#C0C0C0` | rgb(192, 192, 192) | Disabled states, secondary borders |
| **Shadow Gray** | `#D2D2D2` | rgb(210, 210, 210) | Card box-shadow color |
| **Dark Gray (Pressroom)** | `#32373C` | rgb(50, 55, 60) | Used on pressroom.toyota.com for buttons/dark elements |

### Color System Summary
```
Brand accent:    #EB0A1E (Toyota Red) -- used for logo staging platform + sparingly as accent
Dark spectrum:   #000000 (Black) --> #32373C (Dark gray) --> #58595B (Gray) --> #C0C0C0 (Muted)
Light spectrum:  #D2D2D2 (Shadow) --> #EBEBEB (Border) --> #F6F6F6 (Cards) --> #F8F8F8 (Section bg) --> #FFFFFF (White)
```

---

## 3. Typography

### Official Typeface: Toyota Type

Toyota Type is a **proprietary custom typeface** designed to be "legible, human, and approachable." It supports 237 languages. It is available in WOFF/WOFF2 format for web use but is NOT publicly downloadable -- it is provided only to authorized partners creating work on behalf of Toyota.

### Font Weights

| Weight | Name | Usage |
|--------|------|-------|
| **Light** | Toyota Type Light | Modern refinement, sophisticated messaging |
| **Regular** | Toyota Type Regular | Digital body text reversed on dark backgrounds, legal text at small sizes |
| **Book** | Toyota Type Book | Body text, smaller applications (primary body weight) |
| **Semibold** | Toyota Type Semibold | Subheads, secondary treatments, sentence-case headlines (preferred headline weight) |
| **Bold** | Toyota Type Bold | Headlines, impactful statements, uppercase headlines |
| **Black** | Toyota Type Black | Maximum strength and presence, hero headlines |

### Font Stacks (as declared on toyota.com CSS)

```css
/* Medium / Default body */
font-family: tcomMed, "HelveticaNeueMedium", "Helvetica Neue Medium", Arial, sans-serif;

/* Bold / Headings */
font-family: tcomBold, "HelveticaNeueBold", "Helvetica Neue Bold", Arial, sans-serif;

/* Light / Subtle text */
font-family: tcomLight, "HelvNeueLight", "Helvetica Neue Light", Arial, sans-serif;
```

### CSS Font Name Mapping

| CSS Name | Maps To | Weight |
|----------|---------|--------|
| `tcomLight` | Toyota Type Light | 300 |
| `tcomMed` | Toyota Type Book/Regular | 400-500 |
| `tcomBold` | Toyota Type Semibold/Bold | 600-700 |

### Fallback Font: Helvetica Neue

When Toyota Type is unavailable, the official fallback is **Helvetica Neue** in matching weights:
- Headlines: Helvetica Neue Bold
- Body & Legal: Helvetica Neue Regular

### Dealer Template Fallback (Google Fonts)

Since Toyota Type is proprietary, use this publicly available fallback for dealer templates:

```css
/* Best match: clean, legible neo-grotesque sans-serif */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

Inter closely matches Toyota Type's geometric, humanist character. Alternative options: `Roboto`, `Source Sans Pro`.

### Typesetting Rules (from brand.toyota.com)

| Context | Weight | Leading | Kerning / Letter-Spacing |
|---------|--------|---------|--------------------------|
| **Uppercase Headlines** | Bold or Semibold | 90% of font size | Optical; 0px digital letter-spacing |
| **Sentence-Case Headlines** | Semibold preferred | 110% print / 90% digital | Optical |
| **Body Text** | Book | 145% of font size | Normal |
| **Legal Text** | Book (or Regular at very small sizes) | 145% | Normal |
| **Max headline words** | -- | -- | 7 words or fewer |

### Type Scale (from toyota.com computed styles)

| Element | Font Size (Mobile) | Font Size (Desktop) | Line Height | Font Family | Color |
|---------|-------------------|---------------------|-------------|-------------|-------|
| **H1 (Hero)** | 36px | 48-64px | 40px (desktop) | tcomBold | `#FFFFFF` (on dark/photo) |
| **Body text** | 14px | 14px | 22px | tcomMed | `#000000` |
| **Nav items** | 14px | 14px | -- | tcomMed | `#FFFFFF` (on black nav) |
| **CTA button text** | 14px | 14px | -- | tcomBold | `#FFFFFF` or `#000000` |

---

## 4. Button Styles

### Primary CTA (Filled Black)

Toyota.com uses **solid black filled buttons** as the primary CTA style.

```css
.toyota-btn-primary {
  display: inline-block;
  background-color: #000000;
  color: #FFFFFF;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
  text-decoration: none;
  padding: 14px 32px;
  border: 2px solid #000000;
  border-radius: 8px;              /* Toyota uses softly rounded corners */
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.toyota-btn-primary:hover {
  opacity: 0.8;
}
```

### Secondary CTA (Outline)

```css
.toyota-btn-secondary {
  display: inline-block;
  background-color: transparent;
  color: #000000;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
  text-decoration: none;
  padding: 14px 32px;
  border: 2px solid #000000;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toyota-btn-secondary:hover {
  background-color: #000000;
  color: #FFFFFF;
}
```

### On Dark Backgrounds

```css
.toyota-btn-primary-dark {
  background-color: #FFFFFF;
  color: #000000;
  border: 2px solid #FFFFFF;
  border-radius: 8px;
}

.toyota-btn-primary-dark:hover {
  opacity: 0.8;
}

.toyota-btn-secondary-dark {
  background-color: transparent;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 8px;
}

.toyota-btn-secondary-dark:hover {
  background-color: #FFFFFF;
  color: #000000;
}
```

### Red Accent CTA (Promotional / Sales Events)

```css
.toyota-btn-red {
  display: inline-block;
  background-color: #EB0A1E;
  color: #FFFFFF;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
  text-decoration: none;
  padding: 14px 32px;
  border: 2px solid #EB0A1E;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toyota-btn-red:hover {
  background-color: #C80818;
  border-color: #C80818;
}
```

### Pressroom Pill Buttons

pressroom.toyota.com uses a **fully rounded pill** shape:

```css
.toyota-btn-pill {
  border-radius: 9999px;           /* Full pill shape */
  background: #32373C;
  color: #FFFFFF;
  padding: calc(0.667em + 2px) calc(1.333em + 2px);
  font-size: 1.125em;
}
```

### Button Design Key Points
- **border-radius**: `8px` on toyota.com (softly rounded, NOT sharp, NOT pill)
- **Font weight**: 600 (Semibold)
- **Text-transform**: none (sentence case, not uppercase)
- **Letter-spacing**: 0.5px
- **Hover**: Opacity transition (0.8) for primary; color-swap for secondary

---

## 5. Navigation Pattern

### How toyota.com's Nav Works

- **Background**: Solid `#000000` (Black)
- **Text color**: `#FFFFFF` (White)
- **Height**: 72px (mobile), 80px (desktop)
- **Position**: Fixed/sticky at top of viewport
- **Logo**: Toyota logo in white (left-aligned in nav)
- **Links**: "Vehicles", "Shop", "Support & Service", "Account"
- **Font**: tcomMed (equivalent to 400-500 weight), 14px
- **Active/hover state**: `rgba(255, 255, 255, 0.2)` overlay on active items
- **Mobile**: Horizontal scroll for nav items on mobile; hamburger menu
- **Style**: Clean and minimal -- no borders between items, no dropdown shadows visible

### Navigation CSS Pattern

```css
.toyota-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #000000;
  color: #FFFFFF;
  z-index: 1000;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 40px;
}

.toyota-nav__logo {
  height: 36px;
  width: auto;
  margin-right: 48px;
}

.toyota-nav__links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.toyota-nav__link {
  color: #FFFFFF;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  text-transform: none;
  letter-spacing: normal;
  transition: opacity 0.2s ease;
}

.toyota-nav__link:hover {
  opacity: 0.7;
}

.toyota-nav__link--active {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 4px;
}
```

---

## 6. Hero Treatment

### How toyota.com Does Heroes

- **Full-bleed photography**: Edge-to-edge hero images at multiple responsive breakpoints
- **Vehicle-centric**: The vehicle is always the dominant visual element
- **Text positioning**: Overlaid on the image, typically center or lower area
- **Text is always white** (`#FFFFFF`) on photo backgrounds
- **Gradient overlay**: Subtle bottom-to-top dark gradient for text readability
- **CTA placement**: Below the headline, using "Build Now" / "Explore" style buttons
- **Height**: Large hero -- close to full viewport on desktop
- **Responsive images**: Toyota serves different crops per breakpoint:
  - Mobile (375px): portrait-oriented
  - Tablet (768px): landscape
  - Desktop (1024-1919px): widescreen
  - XL Desktop (1920px+): ultra-wide

### Image CDN Pattern

Hero images are served from:
```
https://tmna.aemassets.toyota.com/is/image/toyota/toyota/homepage/fullbleed/
https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/{year}/{model}/
```

### Hero CSS Pattern

```css
.toyota-hero {
  position: relative;
  width: 100%;
  height: 85vh;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  padding: 60px 40px;
}

.toyota-hero__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.toyota-hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.2) 35%,
    transparent 65%
  );
  z-index: 1;
}

.toyota-hero__content {
  position: relative;
  z-index: 2;
  color: #FFFFFF;
  max-width: 700px;
}

.toyota-hero__title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.toyota-hero__subtitle {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 24px;
  opacity: 0.9;
}
```

### Hero Content Structure
```
[Title: "2026 TUNDRA" -- 48px, bold, uppercase, white]
[Subtitle: "Built for the Wild" -- 16px, regular, white]
[CTA: "Build Now" | "Explore" -- 14px, semibold, filled button]
```

---

## 7. Card & Grid Patterns

### Vehicle Selection Cards (Configurator)

```css
.toyota-card {
  background-color: #FFFFFF;
  border-radius: 8px;              /* Softly rounded */
  box-shadow: 1px 1px 6px 1px #D2D2D2;  /* Subtle gray shadow */
  border: none;
  padding: 24px;
  transition: box-shadow 0.3s ease;
  overflow: hidden;
}

.toyota-card:hover {
  box-shadow: 2px 2px 12px 2px #C0C0C0;  /* Slightly deeper on hover */
}

.toyota-card__image {
  width: 100%;
  height: auto;
  margin-bottom: 16px;
}

.toyota-card__name {
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 4px;
}

.toyota-card__price {
  font-size: 16px;
  font-weight: 600;
  color: #000000;
}

.toyota-card__price-label {
  font-size: 12px;
  color: #58595B;
  font-weight: 400;
}
```

### Card Grid Layout

```css
.toyota-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 40px;
}

/* Responsive: 2 columns on tablet, 3-4 on desktop */
@media (min-width: 768px) {
  .toyota-card-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .toyota-card-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (min-width: 1440px) {
  .toyota-card-grid { grid-template-columns: repeat(4, 1fr); }
}
```

### Key Card Design Points
- **border-radius**: `8px` (consistent with buttons)
- **box-shadow**: `1px 1px 6px 1px #D2D2D2` -- light and subtle
- **Background**: `#FFFFFF` (pure white cards on light gray sections)
- **Hover**: Shadow deepens slightly
- **Bottom gradient**: Some cards use a subtle bottom gradient for "as shown" pricing overlay text

---

## 8. Footer Pattern

### How toyota.com's Footer Works

- **Background**: Black (`#000000`)
- **Logo**: Horizontal Toyota logo in black (on dark background with contrast treatment) -- uses `VIS_toyota_logo_horiz_black_RGB_2023.svg`
- **Text color**: `#FFFFFF` (white) for links and labels
- **Legal text color**: `#58595B` (gray)
- **Link size**: 12px
- **Structure**: Multi-column layout with link categories, social icons, legal disclaimers
- **Social media**: Facebook, Instagram, TikTok, YouTube, Pinterest icons
- **Copyright**: "Toyota Motor Sales, U.S.A., Inc."

### Footer CSS Pattern

```css
.toyota-footer {
  background-color: #000000;
  color: #FFFFFF;
  padding: 60px 40px 40px;
}

.toyota-footer__logo {
  height: 30px;
  margin-bottom: 32px;
}

.toyota-footer__columns {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-bottom: 40px;
}

.toyota-footer__heading {
  font-size: 14px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.toyota-footer__link {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 8px;
  transition: color 0.2s ease;
}

.toyota-footer__link:hover {
  color: #FFFFFF;
}

.toyota-footer__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 32px 0;
}

.toyota-footer__legal {
  font-size: 11px;
  color: #58595B;
  line-height: 1.6;
}

.toyota-footer__social {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.toyota-footer__social a {
  color: #FFFFFF;
  font-size: 18px;
  transition: opacity 0.2s ease;
}

.toyota-footer__social a:hover {
  opacity: 0.7;
}
```

---

## 9. Body / Page Background

- **Body background**: `#FFFFFF` (pure white) -- toyota.com uses a clean white body
- **Alternating sections**: `#F8F8F8` (very light gray) for visual separation between content blocks
- **Card sections**: `#F6F6F6` slightly tinted backgrounds behind card grids
- Toyota does NOT use a tinted body background like some brands -- the base is pure white with light gray sections for rhythm

---

## 10. Design Philosophy

### "Let's Go Places"

Toyota's visual language projects **approachable confidence** -- it is premium without being exclusive, bold without being aggressive. The design ethos can be summarized as:

### Core Principles

1. **Vehicle-first**: The car is always the hero. Large, clean photography dominates every page. UI elements are restrained to let the product speak.

2. **Black and white backbone**: The design system is essentially monochrome (black nav, white body, black footer) with Toyota Red as a sparing signature accent.

3. **Warm and optimistic**: Photography emphasizes "warm, rich, vibrant" colors with natural lighting. The color profile guidance pushes toward increased saturation, warmth, and contrast.

4. **Softly rounded, not sharp**: Unlike brands like Kia (0px radius), Toyota uses `8px` border-radius on buttons and cards, creating a friendlier, more approachable feel.

5. **Clean and uncluttered**: Generous whitespace, simple grid layouts, clear typographic hierarchy. Information density is moderate -- not as minimal as luxury brands, but never cluttered.

6. **Functional clarity**: Navigation is straightforward. CTAs are clearly visible. The user always knows where to go next.

7. **Emotional storytelling**: Brand guidelines emphasize "focusing on emotional storytelling creates a more meaningful and memorable brand experience."

### Design Personality
- **Premium mainstream** -- not luxury, not economy
- **Reliable and trustworthy** -- clean, organized layouts
- **Human and approachable** -- rounded corners, readable type, warm photography
- **Energetic but not aggressive** -- Toyota Red provides energy without dominating

---

## 11. Iconography

### Icon Style (from brand.toyota.com)

| Size | Stroke Weight | Corner Radius | Color Usage |
|------|--------------|---------------|-------------|
| **16px (Small)** | 1px stroke | 1px radius | Monochrome only (black or white) |
| **32px (Medium)** | 2px stroke | 2px radius | May include red accent shapes |
| **64px (Large)** | 3px stroke | 3px radius | May include red accent shapes |

- Black or white is preferred for all single-color iconography
- Small (16px) icons: ALWAYS monochrome, never two-color
- Medium/Large icons: May incorporate Toyota Red accents referencing the emblem/staging platform
- All colors drawn from the core Toyota palette

---

## 12. DO's and DON'Ts

### DO's
- **DO** use `#000000` (true Black) for nav, text, and dark sections -- Toyota uses pure black (not off-black)
- **DO** use `#EB0A1E` (Toyota Red) sparingly -- as an accent, not as a primary section color
- **DO** use `8px` border-radius on buttons and cards -- Toyota is softly rounded
- **DO** use full-bleed vehicle photography for hero sections
- **DO** use the official Toyota logo SVGs -- white version on dark, black version on light
- **DO** maintain a predominantly black-and-white palette with red as accent
- **DO** use `#F8F8F8` for alternating section backgrounds
- **DO** use Inter as the web fallback font (closest match to Toyota Type's feel)
- **DO** keep hero headlines uppercase and concise (7 words or fewer per brand guidelines)
- **DO** use subtle card shadows (`1px 1px 6px 1px #D2D2D2`)

### DON'Ts
- **DON'T** make Toyota Red the dominant color -- it is a signature accent only
- **DON'T** use sharp square corners (`border-radius: 0`) -- Toyota is NOT sharp-edged
- **DON'T** use heavy drop shadows -- Toyota's shadows are light and subtle
- **DON'T** use serif fonts -- Toyota's identity is exclusively sans-serif
- **DON'T** place single-color logos over gradients or complex backgrounds (transparent emblem)
- **DON'T** use colored section backgrounds (no red backgrounds, no blue backgrounds) -- stay monochrome
- **DON'T** fabricate, trace, or approximate the Toyota logo in any way
- **DON'T** use the vehicle badge/emblem alone without the staging platform and wordmark
- **DON'T** use multiple Toyota logos on the same page
- **DON'T** center-align body text -- flush left or centered headings only

---

## Brand Tagline
"Let's Go Places"

## Current Models (2025-2027)
Camry, Corolla, Corolla Cross, GR86, GR Corolla, GR Supra, Crown, Prius, RAV4, Highlander, 4Runner, Grand Highlander, Sequoia, Tacoma, Tundra, Land Cruiser, Venza, bZ4X, C-HR, Sienna

## Vehicle Image CDN
- Jelly images (transparent background): `https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/{year}/{model}/`
- Homepage heroes: `https://tmna.aemassets.toyota.com/is/image/toyota/toyota/homepage/fullbleed/`
- Example: `https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/tundra//8272/6x3/36/5.png`

---

## Quick Reference: Complete Template Skeleton

```css
/* === TOYOTA DEALER TEMPLATE BASE STYLES === */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  /* Brand */
  --toyota-red:          #EB0A1E;
  --toyota-red-hover:    #C80818;

  /* Core */
  --toyota-black:        #000000;
  --toyota-white:        #FFFFFF;
  --toyota-gray:         #58595B;

  /* UI Grays */
  --toyota-body-bg:      #FFFFFF;
  --toyota-section-bg:   #F8F8F8;
  --toyota-card-bg:      #F6F6F6;
  --toyota-border:       #EBEBEB;
  --toyota-shadow:       #D2D2D2;
  --toyota-muted:        #C0C0C0;

  /* Typography */
  --toyota-font:         'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --toyota-font-size:    14px;

  /* Radius */
  --toyota-radius:       8px;
}

body {
  font-family: var(--toyota-font);
  font-size: var(--toyota-font-size);
  color: var(--toyota-black);
  background-color: var(--toyota-body-bg);
  line-height: 1.57;   /* ~22px at 14px base = 145% per brand guidelines */
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0;
}

/* Buttons: 8px border-radius, subtle and clean */
button, .btn {
  border-radius: var(--toyota-radius);
  box-shadow: none;
  font-weight: 600;
}

/* Cards: 8px radius, light shadow */
.card {
  border-radius: var(--toyota-radius);
  box-shadow: 1px 1px 6px 1px var(--toyota-shadow);
  background-color: var(--toyota-white);
}
```

---

## Compliance Checklist (for template review)

- [ ] Uses official Toyota logo SVG (not fabricated)
- [ ] Navigation is `#000000` background with white text
- [ ] Hero uses full-bleed vehicle photography with dark gradient overlay
- [ ] Hero text is white, uppercase headline, 7 words or fewer
- [ ] All buttons and cards have `border-radius: 8px`
- [ ] Card shadows are light: `1px 1px 6px 1px #D2D2D2`
- [ ] Body background is `#FFFFFF` (pure white)
- [ ] Section alternation uses `#F8F8F8`
- [ ] Toyota Red (`#EB0A1E`) used sparingly -- accent only, not dominant
- [ ] Inter font loaded with weights 300-800
- [ ] Footer uses `#000000` background with white text
- [ ] MSRP displayed with price + "Starting MSRP*" label
- [ ] No serif fonts anywhere
- [ ] No colored section backgrounds (stay monochrome)
- [ ] Logo clear space maintained (2X minimum)

---

## Sources

- [Toyota Brand Hub - Brand Colors](https://brand.toyota.com/guidelines/visual/brand-colors)
- [Toyota Brand Hub - Typography](https://brand.toyota.com/guidelines/visual/typography)
- [Toyota Brand Hub - Visual Guidelines](https://brand.toyota.com/guidelines)
- [Toyota Brand Hub - Logos](https://brand.toyota.com/guidelines/visual/logos)
- [Toyota Brand Hub - Layout](https://brand.toyota.com/guidelines/visual/layout)
- [Toyota Brand Hub - Iconography](https://brand.toyota.com/guidelines/visual/iconography)
- [Toyota Brand Hub - Dealerships](https://brand.toyota.com/guidelines/extensions/dealerships)
- [Toyota Brand Color Codes - BrandColorCode.com](https://www.brandcolorcode.com/toyota)
- [Southeast Toyota Finance - Fonts](https://www.setfbranding.com/fonts.html)
- [Toyota Mark & Logotype Standards PDF](https://www.toyotapartscenterhub.com/wp-content/uploads/2015/03/Toyota-Mark-and-Logotype-Standards.pdf)
- toyota.com (live inspection, March 2026)
- pressroom.toyota.com (live inspection, March 2026)
