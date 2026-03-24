# Kia Brand Guide

> Sourced from live inspection of kia.com (March 2026), Kia CI Guidelines, and official brand documentation.
> This guide is used directly when building dealer website templates.

---

## 1. Official Logo

- **Primary (Midnight Black)**: `https://www.kia.com/us/content/dam/kia/us/common/kia_logo_black.svg`
- **Primary (Polar White)**: `https://www.kia.com/content/dam/kia/us/common/kia_logo_white.svg`
- Format: SVG (vector)
- Source: kia.com official CDN
- The new Kia logo (introduced 2021) is an angular, signature-style wordmark -- it does NOT look like the old oval badge. It symbolizes "symmetry, rhythm, and rising."

**NEVER fabricate, redraw, or approximate the Kia logo.** Always use the official SVGs above.

### Logo Usage Rules
- Present in **Kia Midnight Black** or **Kia Polar White** for highest visibility
- Maintain generous clear space around the logo (minimum 1x the height of the "K")
- Do NOT alter colors, proportions, or orientation
- On dark backgrounds: use the white SVG (`kia_logo_white.svg`)
- On light backgrounds: use the black SVG (`kia_logo_black.svg`)
- Do NOT apply CSS filters to change logo color -- use the correct variant
- Minimum display height: 24px
- Metallic versions exist for physical applications but should NOT be used on web

---

## 2. Color Palette

### Primary Brand Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Kia Midnight Black** | `#05141F` | rgb(5, 20, 31) | Primary brand color. Navigation background, header, hero overlays, body text, dark sections |
| **Kia Polar White** | `#FFFFFF` | rgb(255, 255, 255) | Text on dark backgrounds, hero text, nav links, clean section backgrounds |

### Accent / Point Color

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Kia Live Red** | `#BB162B` | rgb(187, 22, 43) | Vibrant accent for CTAs, energy highlights, promotional badges. NEVER used in logos or motif designs. Used across websites, ads, and typography. |

### Secondary / Auxiliary Colors

| Name | Hex (approximate) | Usage |
|------|-----|-------|
| **Afternoon Yellow** | `#F2A900` | Brand messaging, cheerful/casual experiences |
| **Forest Green** | `#2D6A4F` | Sustainability messaging, eco themes |
| **City Grey** | `#6D6E71` | Supporting text, subtle UI elements |

### Functional / UI Colors (from kia.com)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Light Gray Background** | `#EBECED` | rgb(235, 236, 237) | Page body background, `.body-container` |
| **Section Gray** | `#F0F1F1` | rgb(240, 241, 241) | Trim cards, content cards, alternating section bg |
| **Offer Section Gray** | `#F2F2F2` | rgb(242, 242, 242) | Offers/promo sections |
| **Muted Gray** | `#D0D0D0` | rgb(208, 208, 208) | Secondary nav links ("Show All", "Certified Pre-Owned"), dividers |
| **Secondary Text Gray** | `#6D6E71` | rgb(109, 110, 113) | Trim taglines, supporting descriptions |
| **Footer Text** | `#1F1F1F` | rgb(31, 31, 31) | Footer body text (model pages) |

### Color System Summary
```
Dark spectrum:   #05141F (Midnight Black) --> #1F1F1F (Footer) --> #6D6E71 (Gray text)
Light spectrum:  #D0D0D0 (Muted) --> #EBECED (Body bg) --> #F0F1F1 (Cards) --> #F2F2F2 (Offers) --> #FFFFFF (White)
Accent:          #BB162B (Live Red) -- used sparingly for CTAs
```

---

## 3. Typography

### Font System (from kia.com CSS)

Kia uses a proprietary font family called **Kia Signature** (designed by Sandoll Inc., copyright 2020 KIA MOTORS CORP). On kia.com, it is loaded as three custom `@font-face` declarations:

| CSS Font Name | Maps To | File | Usage |
|---------------|---------|------|-------|
| `designk-bold` | Kia Signature Bold | `KiaSignatureBold.woff` | Headings (h1-h3), nav links, model names, CTAs, pricing |
| `designk-medium` | Kia Signature Regular | `KiaSignatureRegular.woff` | Body text, descriptions, default font |
| `designk-light` | Kia Signature Light | `KiaSignatureLight.woff` | Subtle labels, light-weight text |
| `kia-icons` | Kia Icons | `kia-icons.ttf` | Icon font (carets, arrows, UI icons) |

### Font Stacks (as declared on kia.com)

```css
/* Body / default */
font-family: designk-medium, "Helvetica Neue", Helvetica, Arial, sans-serif;

/* Headings / bold text */
font-family: designk-bold, "Helvetica Neue", Helvetica, Arial, sans-serif;

/* Light text */
font-family: designk-light, "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### Dealer Template Fallback

Since Kia Signature is proprietary and cannot be redistributed, use this fallback for dealer templates:

```css
/* Primary: clean geometric sans-serif that matches Kia Signature's feel */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

### Type Scale (from kia.com computed styles)

| Element | Font Size | Line Height | Letter Spacing | Font Family | Color |
|---------|-----------|-------------|----------------|-------------|-------|
| **H1 (Hero, Homepage)** | 80px | 80px | -0.5px | designk-bold | `#FFFFFF` (white on dark) |
| **H1 (Hero, Model page)** | 50px | 50px | -2px | designk-bold | `#FFFFFF` |
| **H2 (Section title)** | 40px | 46px | normal | designk-bold | `#05141F` or `#FFFFFF` |
| **H3 (Subheading)** | 26px | 30px | normal | designk-bold | `#05141F` |
| **H3 (Feature stat)** | 36px | normal | normal | designk-bold | `#FFFFFF` |
| **H3 (Card heading)** | 20px | 28px | normal | designk-bold | `#05141F` or `#FFFFFF` |
| **Subtitle / H3 (small)** | 12px | 20px | normal | designk-bold | `#FFFFFF` |
| **H2 (Feature subtitle)** | 18px | normal | normal | designk-medium | `#FFFFFF` |
| **Body text** | 16px | 16px | normal | designk-medium | `#05141F` |
| **Nav links** | 12px | normal | normal | designk-bold | `#FFFFFF` |
| **Model name (vehicle list)** | 30px | normal | normal | designk-bold | `#05141F` |
| **CTA link text** | 16px | normal | normal | designk-bold | `#05141F` or `#FFFFFF` |
| **MSRP price** | 18px | normal | normal | designk-bold | `#05141F` |
| **Price label text** | 12px | normal | normal | designk-bold | `#05141F` |
| **Footer links** | 12px | normal | normal | designk-medium | `#FFFFFF` or `#05141F` |

---

## 4. Button Styles

### Design Philosophy
Kia's buttons on kia.com are **minimal and text-based** -- they do NOT use traditional filled button shapes. Instead, CTAs are styled as plain text links with underlines or arrows, relying on the bold font weight and color contrast for visual weight. This is a deliberate design choice aligned with "movement-inspired" minimalism.

### Primary CTA (text-link style, as used on kia.com)

```css
.kia-cta-primary {
  display: inline;
  background-color: transparent;
  color: #05141F;                /* On light backgrounds */
  /* color: #FFFFFF;             /* On dark backgrounds */
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 700;             /* Bold */
  text-decoration: none;
  text-transform: none;
  letter-spacing: normal;
  border: none;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
}

.kia-cta-primary:hover {
  text-decoration: underline;
  opacity: 0.8;
}
```

### For Dealer Templates: Enhanced Button Styles

Since dealer sites need more prominent CTAs than kia.com's minimal text links, use these Kia-inspired button styles:

```css
/* Primary Button (filled) -- for "Build & Price", "View Inventory" */
.kia-btn-primary {
  display: inline-block;
  background-color: #05141F;
  color: #FFFFFF;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
  text-decoration: none;
  padding: 14px 32px;
  border: 2px solid #05141F;
  border-radius: 0;             /* Sharp corners -- Kia uses 0 border-radius */
  cursor: pointer;
  transition: all 0.3s ease;
}

.kia-btn-primary:hover {
  background-color: #FFFFFF;
  color: #05141F;
  border-color: #05141F;
}

/* Secondary Button (outline) -- for "Learn More", "Compare" */
.kia-btn-secondary {
  display: inline-block;
  background-color: transparent;
  color: #05141F;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
  text-decoration: none;
  padding: 14px 32px;
  border: 2px solid #05141F;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.kia-btn-secondary:hover {
  background-color: #05141F;
  color: #FFFFFF;
}

/* On dark backgrounds */
.kia-btn-primary-dark {
  background-color: #FFFFFF;
  color: #05141F;
  border: 2px solid #FFFFFF;
}

.kia-btn-primary-dark:hover {
  background-color: transparent;
  color: #FFFFFF;
}

.kia-btn-secondary-dark {
  background-color: transparent;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
}

.kia-btn-secondary-dark:hover {
  background-color: #FFFFFF;
  color: #05141F;
}

/* Accent Button (red CTA) -- for "Special Offers", "Schedule Service" */
.kia-btn-accent {
  display: inline-block;
  background-color: #BB162B;
  color: #FFFFFF;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
  text-decoration: none;
  padding: 14px 32px;
  border: 2px solid #BB162B;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.kia-btn-accent:hover {
  background-color: #9E1224;
  border-color: #9E1224;
}

/* Text Link CTA (matches kia.com exactly) */
.kia-text-link {
  display: inline;
  color: #05141F;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  position: relative;
}

.kia-text-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #05141F;
  transition: width 0.3s ease;
}

.kia-text-link:hover::after {
  width: 100%;
}
```

---

## 5. Hero Treatment

### How kia.com Does Heroes

- **Full-bleed photography**: Heroes use full-width vehicle photography as background, edge to edge
- **Dark overlay**: Images have a subtle dark gradient/overlay to ensure white text readability
- **Text positioning**: Text is positioned in the **lower-left** quadrant of the hero, with generous padding (80px left, 75px bottom on desktop)
- **Hero text is always white** (`#FFFFFF`) on the dark/photo background
- **No colored backgrounds**: Heroes never use solid colored backgrounds -- always photography
- **Height**: Heroes are full viewport height or very large (close to 100vh)
- **Model pages**: Feature the vehicle prominently, with the model name as the primary heading

### Hero CSS Pattern

```css
.kia-hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 75px 80px;
}

.kia-hero__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.kia-hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(5, 20, 31, 0.6) 0%,
    rgba(5, 20, 31, 0.2) 40%,
    transparent 70%
  );
  z-index: 1;
}

.kia-hero__content {
  position: relative;
  z-index: 2;
  color: #FFFFFF;
  max-width: 600px;
}

.kia-hero__subtitle {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.kia-hero__title {
  font-size: 50px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -2px;
  margin-bottom: 16px;
}

/* Homepage hero -- larger treatment */
.kia-hero--home .kia-hero__title {
  font-size: 80px;
  letter-spacing: -0.5px;
}
```

### Hero Content Structure
```
[Subtitle: "THE ALL-NEW" -- 12px, bold, uppercase]
[Title: "2027 Telluride" -- 50px, bold]
[CTA links: "Build" | "Find Nearby" -- 16px, bold, text links]
```

---

## 6. Navigation Pattern

### How kia.com's Nav Works

- **Background**: Solid `#05141F` (Kia Midnight Black)
- **Logo**: White Kia logo on the left side, padded (`0px 63px 0px 80px`)
- **Links**: White text (`#FFFFFF`), 12px, `designk-bold`, no text-decoration, no text-transform
- **Link items**: Vehicles, Shopping Assist, Inventory, Kia Innovation, Owners, Find a Dealer
- **Position**: Fixed/sticky at top
- **Style**: Minimal, no borders between links, no background hover color -- just clean white text on dark
- **Sub-navigation**: Secondary links appear in `#D0D0D0` (muted gray) -- e.g., "Show All", "Certified Pre-Owned"
- **Dropdown**: White background (`#FFFFFF`) with dark text
- **Mobile**: Hamburger menu button

### Navigation CSS Pattern

```css
.kia-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #05141F;
  color: #FFFFFF;
  z-index: 1000;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 80px;
}

.kia-nav__logo {
  height: 30px;
  width: auto;
  margin-right: 60px;
}

.kia-nav__links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.kia-nav__link {
  color: #FFFFFF;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  text-transform: none;
  letter-spacing: normal;
  transition: opacity 0.2s ease;
}

.kia-nav__link:hover {
  opacity: 0.7;
}

.kia-nav__link--secondary {
  color: #D0D0D0;
}
```

---

## 7. Card & Grid Patterns

### Vehicle List (Homepage)

The homepage displays vehicles in a **vertical scroll list** (not a traditional grid). Each vehicle entry shows:
- Vehicle name: 30px, `designk-bold`, `#05141F`
- CTAs below: "Build" and "Find Nearby" as text links, 16px, `designk-bold`
- MSRP: 18px, `designk-bold`, `#05141F` with "starting MSRP*" label at 12px
- Full-width vehicle image

### Trim Cards (Model Pages)

Trim cards use a horizontal **carousel/slider** (Slick slider):

```css
.kia-trim-card {
  background-color: #F0F1F1;
  border-radius: 0;              /* No rounded corners */
  box-shadow: none;              /* No shadow */
  border: none;
  padding: 24px;
  text-align: left;
}

.kia-trim-card__name {
  font-size: 26px;
  font-weight: 700;
  line-height: 30px;
  color: #05141F;
  margin-bottom: 4px;
}

.kia-trim-card__tagline {
  font-size: 14px;
  color: #6D6E71;
  margin-bottom: 16px;
}

.kia-trim-card__image {
  width: 100%;
  height: auto;
  margin-bottom: 16px;
}

.kia-trim-card__price {
  font-size: 18px;
  font-weight: 700;
  color: #05141F;
}

.kia-trim-card__price-label {
  font-size: 12px;
  font-weight: 700;
  color: #05141F;
}
```

### Feature Sections (Model Pages)

Feature sections use an **animated tile** pattern:
- Full-width background images
- White text overlay
- No border-radius on any container
- Padding: `33px 90px 75px 80px` on wrapper

---

## 8. Footer Pattern

### How kia.com's Footer Works

The footer on kia.com is relatively minimal:

- **Background**: Transitions from content area -- on homepage uses dark sections, on model pages lighter
- **Text color**: `#1F1F1F` (near-black) on light backgrounds, `#FFFFFF` on dark
- **Link color**: `#FFFFFF` or `#05141F` depending on section
- **Link size**: 12px
- **Font weight**: 400 (regular)
- **Padding**: 40px bottom padding

### Footer CSS Pattern (for dealer templates)

```css
.kia-footer {
  background-color: #05141F;
  color: #FFFFFF;
  padding: 60px 80px 40px;
}

.kia-footer__logo {
  height: 30px;
  margin-bottom: 32px;
}

.kia-footer__links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.kia-footer__link {
  color: #D0D0D0;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.2s ease;
}

.kia-footer__link:hover {
  color: #FFFFFF;
}

.kia-footer__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 24px 0;
}

.kia-footer__legal {
  font-size: 11px;
  color: #6D6E71;
  line-height: 1.6;
}
```

---

## 9. Design Philosophy

### "Movement that Inspires" -- Opposites United

Kia's visual language is built on the concept of **Opposites United** -- taking contrasting elements and harmonizing them:

- **Bold yet minimal**: Large dramatic typography paired with generous whitespace
- **Dark yet inviting**: Midnight Black creates sophistication without coldness
- **Sharp yet flowing**: Zero border-radius (sharp corners) combined with smooth transitions
- **Photographic yet clean**: Full-bleed imagery with restrained UI chrome

### Core Principles
1. **Photography-first**: The vehicle is always the hero. UI gets out of the way.
2. **High contrast**: Dark backgrounds (#05141F) with white text create dramatic, premium feel
3. **Typographic hierarchy**: Bold headlines carry the visual weight; body text stays light
4. **Flat design**: No shadows, no rounded corners, no gradients on UI elements
5. **Restrained color**: The palette is essentially black, white, and gray. Red is used sparingly.
6. **Generous spacing**: Wide padding (80px horizontal on desktop), tall sections

---

## 10. DO's and DON'Ts

### DO's
- **DO** use `#05141F` (Midnight Black) as the primary dark color -- it is NOT pure black (`#000000`)
- **DO** use full-bleed vehicle photography for hero sections
- **DO** keep border-radius at 0 on all buttons, cards, and containers
- **DO** use the official Kia logo SVGs -- black on light, white on dark
- **DO** maintain high contrast: white text on dark, dark text on light
- **DO** use generous horizontal padding (80px on desktop, 24px on mobile)
- **DO** use `#EBECED` or `#F0F1F1` for light section backgrounds (not pure white for body)
- **DO** keep CTAs as text-link style where possible -- Kia's aesthetic is minimal
- **DO** use Inter as the web fallback font (it closely matches Kia Signature's geometric feel)
- **DO** use `#BB162B` (Live Red) sparingly -- for one or two key CTAs only

### DON'Ts
- **DON'T** use rounded corners (`border-radius`) on buttons or cards -- Kia is sharp-edged
- **DON'T** use box shadows on cards or components -- Kia's design is flat
- **DON'T** use pure black (`#000000`) for text or backgrounds -- always use `#05141F`
- **DON'T** use gradients on buttons or UI elements (gradients are only for photo overlays)
- **DON'T** overuse Kia Live Red -- it's an accent, not a primary color
- **DON'T** use the red in the logo or as a section background
- **DON'T** center hero text -- Kia positions hero content in the lower-left
- **DON'T** use light or pastel backgrounds for the navigation -- it must be `#05141F`
- **DON'T** use serif fonts -- Kia's identity is exclusively sans-serif
- **DON'T** fabricate, trace, or approximate the Kia logo in any way

---

## Brand Tagline
"Movement that Inspires"

## Current Models (2025-2027)
Telluride, Sportage, EV6, EV9, Sorento, Forte, K5, Seltos, Soul, Carnival MPV, Niro

## Vehicle Image CDN
- Gallery images: `https://www.kia.com/content/dam/kia/us/en/vehicles/{model}/{year}/mep/gallery/`
- Example: `https://www.kia.com/content/dam/kia/us/en/vehicles/telluride/2027/mep/gallery/l2q-telluride-ice-gallery-carousel-1.jpg`

## CSS Stylesheets (kia.com reference)
- Base: `https://www.kia.com/us/etc.clientlibs/UI/clientlibs/clientlib-base-release-{version}.css`
- Home: `https://www.kia.com/us/etc.clientlibs/UI/clientlibs/clientlib-home-release-{version}.css`
- Model pages: `https://www.kia.com/us/etc.clientlibs/UI/clientlibs/clientlib-mep-release-{version}.css`

---

## Quick Reference: Complete Template Skeleton

```css
/* === KIA DEALER TEMPLATE BASE STYLES === */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  /* Primary */
  --kia-midnight:    #05141F;
  --kia-white:       #FFFFFF;

  /* Accent */
  --kia-red:         #BB162B;
  --kia-red-hover:   #9E1224;

  /* Grays */
  --kia-body-bg:     #EBECED;
  --kia-card-bg:     #F0F1F1;
  --kia-offer-bg:    #F2F2F2;
  --kia-muted:       #D0D0D0;
  --kia-gray-text:   #6D6E71;
  --kia-footer-text: #1F1F1F;

  /* Typography */
  --kia-font:        'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --kia-font-size:   16px;
}

body {
  font-family: var(--kia-font);
  font-size: var(--kia-font-size);
  color: var(--kia-midnight);
  background-color: var(--kia-body-bg);
  line-height: 1.5;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.5px;
}

/* Buttons: NO border-radius, NO shadows */
button, .btn {
  border-radius: 0;
  box-shadow: none;
}
```

---

## Compliance Checklist (for template review)

- [ ] Uses official Kia logo SVG (not fabricated)
- [ ] Navigation is `#05141F` background with white text
- [ ] Hero uses full-bleed photography with dark gradient overlay
- [ ] Hero text is white, positioned lower-left
- [ ] All buttons and cards have `border-radius: 0`
- [ ] No box shadows on UI elements
- [ ] Body text color is `#05141F` (not `#000000`)
- [ ] Page background is `#EBECED` (not pure white)
- [ ] Inter font loaded with weights 300-800
- [ ] Red (`#BB162B`) used sparingly (1-2 accent elements max)
- [ ] Footer uses `#05141F` background with light text
- [ ] Pricing displayed in 18px bold with 12px "starting MSRP*" label
- [ ] No serif fonts anywhere
- [ ] No rounded corners on any component
