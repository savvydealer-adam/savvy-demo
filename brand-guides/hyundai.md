# Hyundai Brand Guide

> Comprehensive design reference based on hyundaiusa.com, Hyundai's European Website Styleguide,
> official brand color documentation, and the Hyundai Sans typeface specification.
> Last updated: 2026-03-24

---

## 1. Official Logo

- **Primary SVG**: `https://owners.hyundaiusa.com/content/dam/hyundai/us/myhyundai/image/general/logo/hyundai_logo.svg`
- **Global PNG**: `https://www.hyundai.com/etc/designs/hyundai/ww/en/images/common/logo.png`
- **White variant**: Use CSS `filter: brightness(0) invert(1)` on the SVG, or reference the global white logo asset
- Format: SVG (vector) preferred; PNG fallback only when SVG is impossible

**NEVER fabricate, redraw, or approximate the Hyundai logo.** Always use the official SVG above.

### Logo Usage Rules
- Logo must be displayed in **Hyundai Blue (#002C5F)** or **White (#FFFFFF)** only
- Maintain clear space equal to **half the height of the "H"** in the HYUNDAI wordmark
- On dark backgrounds: use the white version
- On light backgrounds: use Hyundai Blue version
- Never rotate, stretch, add effects, or place on busy/patterned backgrounds
- Minimum display width: 80px (digital)

---

## 2. Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Hyundai Blue** | `#002C5F` | rgb(0, 44, 95) | Primary brand color, logo, navigation backgrounds, footer, primary CTAs, headings |
| **Active Blue** | `#00AAD2` | rgb(0, 170, 210) | Interactive elements, links, hover states, accent highlights, secondary CTAs |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Primary backgrounds, text on dark surfaces, button text on blue backgrounds |

### Secondary / Neutral Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Black** | `#000000` | rgb(0, 0, 0) | Primary body text, headings on light backgrounds |
| **Near-Black** | `#1A1A1A` | rgb(26, 26, 26) | Body text alternative, dark section backgrounds |
| **Dark Gray** | `#333333` | rgb(51, 51, 51) | Secondary text, captions |
| **Medium Gray** | `#666666` | rgb(102, 102, 102) | Tertiary text, placeholders, disabled states |
| **Steel Gray** | `#60605B` | rgb(96, 96, 91) | Supporting brand neutral (from brand palette) |
| **Light Gray** | `#E4E4E4` | rgb(228, 228, 228) | Borders, dividers, input field borders |
| **Off-White** | `#F4F4F4` | rgb(244, 244, 244) | Alternate section backgrounds, card backgrounds |
| **Warm Gray** | `#E4DCD3` | rgb(228, 220, 211) | Accent neutral (from brand palette) |
| **Sand** | `#F6F3F2` | rgb(246, 243, 242) | Soft background sections |

### Accent / Extended Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Sky Blue** | `#AACAE6` | rgb(170, 202, 230) | Light accent, info badges, soft highlights |
| **Copper** | `#A36B4F` | rgb(163, 107, 79) | Warm accent (special promotions, limited use) |
| **Alert Red** | `#E63312` | rgb(230, 51, 18) | Errors, urgent alerts, price callouts |

### Color Usage Rules
- **Hyundai Blue** is reserved for the most prominent brand elements: nav, footer, primary buttons, hero overlays
- **Active Blue** is the primary interactive color -- used for text links, hover states, and secondary CTAs
- Never use Active Blue for large background fills; it is an accent/interactive color only
- Maintain a **4.5:1 contrast ratio** minimum for body text (WCAG AA)
- White text on Hyundai Blue (#002C5F) passes AAA contrast (ratio ~8.5:1)
- White text on Active Blue (#00AAD2) passes AA for large text only; avoid for small body copy

---

## 3. Typography

### Font Family: Hyundai Sans

Hyundai's proprietary typeface family, designed by **Hannes von Doehren** and **Livius Dietzel** at **HVD Fonts** (Berlin). Won a **Red Dot Award** in 2017. Supports **103 languages** across Latin, Greek, and Cyrillic scripts. Exclusively licensed to Hyundai Motor Company.

**Two sub-families optimized for different roles:**

| Sub-Family | Role | Weights |
|------------|------|---------|
| **Hyundai Sans Head (Office)** | Headlines, display text, hero titles | Light (300), Regular (400), Medium (500), Bold (700) |
| **Hyundai Sans Text (Office)** | Body copy, paragraphs, UI text, captions | Regular (400), *Italic*, Medium (500), *Medium Italic*, Bold (700), *Bold Italic* |

- **Head** is optimized for large text display (headlines, hero banners)
- **Text** is optimized for readability at smaller sizes (below 12pt / 16px)
- Both are manually hinted and optimized for screen rendering

### Web Fallback Stack

Since Hyundai Sans is a proprietary/licensed font, use this fallback for dealer templates:

```css
/* Primary fallback -- closely matches Hyundai Sans proportions */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Load Inter from Google Fonts** with weights: 400, 500, 600, 700, 800

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Font | Size | Weight | Line-Height | Letter-Spacing | Text Transform |
|---------|------|------|--------|-------------|----------------|----------------|
| **Hero Title** | Head / Inter | 48-64px (3-4rem) | 700-800 | 1.1 | -0.02em | None |
| **Section Title** | Head / Inter | 36-42px (2.25-2.625rem) | 700 | 1.2 | -0.01em | None |
| **Card Title** | Head / Inter | 24-28px (1.5-1.75rem) | 600-700 | 1.3 | -0.005em | None |
| **Subtitle** | Text / Inter | 18-20px (1.125-1.25rem) | 500-600 | 1.4 | 0 | None |
| **Body** | Text / Inter | 16px (1rem) | 400 | 1.6 | 0 | None |
| **Small / Caption** | Text / Inter | 14px (0.875rem) | 400 | 1.5 | 0.01em | None |
| **Button Label** | Text / Inter | 14-16px (0.875-1rem) | 600-700 | 1 | 0.05em | Uppercase |
| **Nav Link** | Text / Inter | 14-16px | 500-600 | 1 | 0.02em | None or Uppercase |
| **Price / Callout** | Head / Inter | 28-36px | 700-800 | 1.2 | -0.01em | None |

---

## 4. Button Styles

### Primary Button (Hyundai Blue)

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  background-color: #002C5F;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid #002C5F;
  border-radius: 0;              /* Hyundai uses sharp rectangular buttons */
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 180px;
  text-align: center;
}

.btn-primary:hover {
  background-color: #001B3D;     /* Darker shade on hover */
  border-color: #001B3D;
}

.btn-primary:active {
  background-color: #001230;
}

.btn-primary:focus-visible {
  outline: 2px solid #00AAD2;
  outline-offset: 2px;
}
```

### Secondary Button (Outline / Ghost)

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  background-color: transparent;
  color: #FFFFFF;                 /* On dark backgrounds */
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid #FFFFFF;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 180px;
  text-align: center;
}

.btn-secondary:hover {
  background-color: #FFFFFF;
  color: #002C5F;
}

/* On light backgrounds */
.btn-secondary--dark {
  color: #002C5F;
  border-color: #002C5F;
}

.btn-secondary--dark:hover {
  background-color: #002C5F;
  color: #FFFFFF;
}
```

### Active Blue Accent Button (Links / Tertiary)

```css
.btn-accent {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: transparent;
  color: #00AAD2;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
}

.btn-accent:hover {
  color: #008BAD;                /* Slightly darker Active Blue */
  text-decoration: underline;
}

/* Arrow indicator after text */
.btn-accent::after {
  content: '\2192';              /* Right arrow → */
  font-size: 16px;
  transition: transform 0.2s ease;
}

.btn-accent:hover::after {
  transform: translateX(4px);
}
```

### Button Design Rules
- **Border-radius: 0** -- Hyundai uses **sharp, rectangular** buttons (no rounded corners)
- Buttons are **uppercase** with generous letter-spacing
- Primary CTA is always Hyundai Blue with white text
- Ghost/outline buttons are used for secondary actions
- Active Blue (#00AAD2) is used for text-link-style CTAs with arrow indicators
- Minimum touch target: 44px height on mobile
- Always pair a primary CTA with a secondary (e.g., "Build & Price" + "View Inventory")

---

## 5. Hero Treatment

### Design Pattern

Hyundai uses **full-width, immersive hero sections** with cinematic vehicle photography:

```css
.hero {
  position: relative;
  width: 100%;
  min-height: 80vh;              /* Near full-viewport height */
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero__background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__background img,
.hero__background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Dark gradient overlay for text legibility */
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0.3) 40%,
    rgba(0, 0, 0, 0.0) 70%
  );
  z-index: 1;
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: 600px;
  padding: 0 5%;
  color: #FFFFFF;
}

.hero__title {
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.hero__subtitle {
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 32px;
  opacity: 0.9;
}

.hero__ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
```

### Hero Characteristics
- **Full-bleed photography** of vehicles in lifestyle/environmental settings
- **Left-aligned text** over a left-to-right dark gradient overlay
- **White headline text** -- large, bold, minimal (model name + tagline)
- **Dual CTAs**: Primary (solid blue) + Secondary (white outline ghost)
- Hero images auto-rotate via carousel (5-second intervals) with subtle crossfade
- Video heroes used for flagship models (IONIQ 5, Palisade)
- On model pages: hero shows a **3/4 front angle** of the vehicle on a neutral/studio background
- Starting MSRP or special pricing displayed in hero on model pages

---

## 6. Navigation

### Design Pattern

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #FFFFFF;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

/* Transparent nav on hero pages (scrolls to white) */
.nav--transparent {
  background-color: transparent;
  box-shadow: none;
}

.nav--transparent.nav--scrolled {
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.nav__logo {
  height: 28px;
  width: auto;
}

.nav__logo--white {
  filter: brightness(0) invert(1);
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-left: 48px;
}

.nav__link {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #002C5F;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;
}

.nav__link:hover,
.nav__link--active {
  border-bottom-color: #00AAD2;
  color: #002C5F;
}

/* On transparent nav (hero pages) */
.nav--transparent .nav__link {
  color: #FFFFFF;
}

.nav--transparent.nav--scrolled .nav__link {
  color: #002C5F;
}
```

### Navigation Characteristics
- **Fixed/sticky** at the top of viewport
- **White background** on most pages, with subtle bottom shadow
- **Transparent** on hero-heavy pages (model pages, homepage) -- transitions to white on scroll
- Logo on the left, nav links centered or left-adjacent, utility links (search, location, hamburger) on the right
- **Active Blue (#00AAD2) underline** on hover and active states
- Links are uppercase, small (14px), weight 600, Hyundai Blue color
- Main categories: Vehicles, Shopping Tools, Owners, Why Hyundai
- **Mega menu dropdowns** for Vehicles showing model cards with thumbnails
- Mobile: hamburger menu with slide-in drawer from the right

---

## 7. Card / Grid Patterns

### Vehicle Card

```css
.vehicle-card {
  background: #FFFFFF;
  border: 1px solid #E4E4E4;
  border-radius: 0;              /* Sharp corners */
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  display: flex;
  flex-direction: column;
}

.vehicle-card:hover {
  box-shadow: 0 8px 24px rgba(0, 44, 95, 0.12);
  transform: translateY(-2px);
}

.vehicle-card__image {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
  background-color: #F4F4F4;     /* Placeholder bg while loading */
}

.vehicle-card__body {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.vehicle-card__name {
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 4px;
}

.vehicle-card__year {
  font-size: 14px;
  font-weight: 500;
  color: #666666;
  margin-bottom: 12px;
}

.vehicle-card__price {
  font-size: 16px;
  font-weight: 600;
  color: #002C5F;
  margin-bottom: 16px;
}

.vehicle-card__cta {
  margin-top: auto;
  font-size: 14px;
  font-weight: 600;
  color: #00AAD2;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.vehicle-card__cta:hover {
  text-decoration: underline;
}
```

### Grid Layout

```css
.vehicle-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 48px 5%;
  max-width: 1440px;
  margin: 0 auto;
}

/* Breakpoints */
@media (max-width: 768px) {
  .vehicle-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 24px 16px;
  }
}
```

### Feature Card (Specs, Technology)

```css
.feature-card {
  background: #F4F4F4;
  padding: 40px 32px;
  border-radius: 0;
  text-align: center;
}

.feature-card__icon {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  color: #002C5F;
}

.feature-card__title {
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 8px;
}

.feature-card__description {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 1.6;
}
```

### Card Design Rules
- **No border-radius** -- cards have sharp rectangular corners
- Subtle hover: lift + shadow, never color-changing backgrounds
- Vehicle images always on a clean/neutral background for consistency
- Grid gap: 24px desktop, 16px mobile
- Max container width: 1440px with 5% side padding

---

## 8. Footer

```css
.footer {
  background-color: #002C5F;
  color: #FFFFFF;
  padding: 64px 5% 32px;
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: 1440px;
  margin: 0 auto 48px;
}

.footer__heading {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 20px;
  color: #FFFFFF;
}

.footer__link {
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.2s ease;
}

.footer__link:hover {
  color: #FFFFFF;
}

.footer__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0 auto 24px;
  max-width: 1440px;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 16px;
}

.footer__logo {
  height: 24px;
  filter: brightness(0) invert(1);  /* White logo */
}

.footer__legal {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
}

.footer__social {
  display: flex;
  gap: 16px;
}

.footer__social-icon {
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s ease;
}

.footer__social-icon:hover {
  color: #FFFFFF;
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

@media (max-width: 480px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
}
```

### Footer Characteristics
- **Hyundai Blue (#002C5F) background** with white text
- 4-column link grid: Vehicles, Shopping Tools, Owners, About Hyundai
- Links are 70% white opacity, full white on hover
- Social icons: Facebook, Instagram, YouTube, Twitter/X
- Bottom bar: logo (white), legal text, social links
- Thin divider line between link grid and bottom bar

---

## 9. Section / Page Patterns

### Alternating Section Backgrounds

```css
/* Pattern: white -> off-white -> white -> dark (Hyundai Blue) */
.section--white    { background: #FFFFFF; color: #000000; }
.section--light    { background: #F4F4F4; color: #000000; }
.section--dark     { background: #002C5F; color: #FFFFFF; }
.section--nearblk  { background: #1A1A1A; color: #FFFFFF; }
```

### Section Spacing

```css
.section {
  padding: 80px 5%;
}

.section__header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 48px;
}

.section__title {
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 700;
  margin-bottom: 16px;
}

.section__subtitle {
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  line-height: 1.6;
}

/* On dark sections */
.section--dark .section__subtitle {
  color: rgba(255, 255, 255, 0.7);
}
```

### Form Inputs (Request a Quote, Contact)

```css
.form-input {
  width: 100%;
  padding: 14px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  background: #FFFFFF;
  border: 1px solid #E4E4E4;
  border-radius: 0;              /* Sharp corners, consistent with brand */
  transition: border-color 0.2s ease;
}

.form-input::placeholder {
  color: #999999;
}

.form-input:focus {
  outline: none;
  border-color: #00AAD2;
  box-shadow: 0 0 0 3px rgba(0, 170, 210, 0.15);
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 6px;
}

.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23666' stroke-width='2' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
}
```

---

## 10. Design Philosophy

### Core Principles

1. **"Progress for Humanity"** -- Hyundai's brand ethos emphasizes optimism, innovation, and human-centered design
2. **Clean Precision** -- Sharp edges (border-radius: 0), structured grids, deliberate whitespace
3. **Dark + Light Contrast** -- Deep navy and white create a premium, authoritative feel
4. **Immersive Vehicle Photography** -- Vehicles are the hero; cinematic lifestyle imagery dominates
5. **Confidence through Simplicity** -- Minimal decoration, no gratuitous gradients or effects; the brand speaks through restraint
6. **Active Blue as Energy** -- The teal accent (#00AAD2) injects dynamism into an otherwise corporate palette

### Visual Language

- **Geometric precision** -- All elements are sharp-cornered and grid-aligned
- **Generous whitespace** -- Sections breathe; content never feels cramped
- **Typography hierarchy** -- Clear size/weight differentiation creates scannable pages
- **Full-bleed imagery** -- Heroes and feature sections use edge-to-edge photography
- **Subtle motion** -- Hover lifts, arrow slides, fade-in scroll reveals (no flashy animation)

---

## 11. DO's and DON'Ts

### DO

- Use **Hyundai Blue (#002C5F)** as the dominant brand color
- Use **Active Blue (#00AAD2)** for links and interactive accents
- Keep buttons **sharp/rectangular** (border-radius: 0)
- Use **uppercase, letter-spaced** button text
- Use **full-bleed vehicle photography** in heroes
- Apply **left-to-right gradient overlays** on hero images for text legibility
- Maintain **generous whitespace** between sections (80px+ vertical padding)
- Use the **official SVG logo** from the CDN
- Pair **primary + secondary CTAs** on hero sections
- Use a **Hyundai Blue footer** with white text and translucent links
- Load **Inter** as the web font fallback for Hyundai Sans
- Keep the nav **fixed/sticky** with a clean white background

### DON'T

- Don't use rounded buttons (no border-radius on CTAs or cards)
- Don't fabricate, redraw, or approximate the Hyundai logo
- Don't use Active Blue (#00AAD2) as a large background fill
- Don't use script, serif, or decorative fonts
- Don't add drop shadows to cards (use only on hover)
- Don't use gradients as decorative fills (only as photo overlays)
- Don't crowd content -- maintain the airy, spacious feel
- Don't place the logo on busy/patterned backgrounds
- Don't use Hyundai Blue for body text (too dark/saturated -- use #000 or #1A1A1A)
- Don't add border-radius to form inputs (keep sharp)
- Don't use colors outside the approved palette
- Don't animate aggressively -- subtle transitions only (0.2-0.3s ease)
- Don't mix the Hyundai logo color (always #002C5F or white, never Active Blue or gray)

---

## 12. Current Models (2025-2026)

**SUVs**: Tucson, Santa Fe, Palisade, Palisade Hybrid, Kona, Venue
**Sedans**: Elantra, Sonata
**Electric (IONIQ)**: IONIQ 5, IONIQ 6, IONIQ 9
**Trucks**: Santa Cruz

---

## 13. Vehicle Image CDN

- **Hyundai Canada**: `https://www.hyundaicanada.com/-/media/hyundai/showroom/{year}/{model}/`
- **Scene7 CDN**: `https://s7d1.scene7.com/is/image/hyundai/`
- **Hyundai USA build images**: `https://www.hyundaiusa.com/content/dam/hyundai/us/www/`

---

## 14. Compliance Checklist

Before shipping any Hyundai-branded template, verify:

- [ ] Official SVG logo used (not fabricated)
- [ ] Logo displayed in Hyundai Blue or White only
- [ ] Primary color is #002C5F (not #00287A or other blues)
- [ ] Active Blue #00AAD2 used only for interactive elements
- [ ] Buttons have border-radius: 0
- [ ] Button text is uppercase with letter-spacing
- [ ] Inter font loaded with weights 400, 500, 600, 700, 800
- [ ] Hero uses full-bleed photography with gradient overlay
- [ ] Footer uses #002C5F background with white text
- [ ] Nav is fixed/sticky with white background
- [ ] Active states use Active Blue underline
- [ ] Form inputs have sharp corners and Active Blue focus ring
- [ ] Minimum 4.5:1 contrast ratio on all text
- [ ] No decorative/script/serif fonts used
- [ ] Grid max-width is 1440px with 5% side padding
