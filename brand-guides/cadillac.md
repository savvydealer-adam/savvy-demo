# Cadillac Brand Guide

> **Last researched:** 2026-03-24 from cadillac.com live site analysis
>
> **CRITICAL CORRECTION:** Our previous template used a dark+gold theme (#1A1A1A background
> with #C4A265 gold CTAs). This was WRONG. Cadillac's actual website uses a **dual-theme
> approach** -- the homepage and shopping pages are LIGHT (white backgrounds), while individual
> model pages (Escalade, LYRIQ, etc.) are DARK (black backgrounds). Gold is NOT used as a
> button or CTA color anywhere on cadillac.com.

---

## Official Logo

- **2D Crest SVG (monochrome black):**
  `https://www.cadillac.com/content/dam/cadillac/na/us/english/gmit-assets/primary-navigation-icons/cadillac-2dcrest.svg`
- The official SVG is **solid black (#000000)** on transparent background
- On dark backgrounds: apply `filter: brightness(0) invert(1)` to render white
- On light backgrounds: use as-is (black)
- This is the simplified 2021+ crest designed by Mother Design -- no wreath, flat/geometric

**NEVER fabricate, redraw, or approximate the Cadillac crest.** Always use the official SVG above.

---

## Theme: DUAL (Light + Dark)

This is the most important correction. Cadillac.com does NOT use a single theme:

| Page Type | Theme | Background |
|-----------|-------|------------|
| Homepage (cadillac.com) | **LIGHT** | White (#FFFFFF) and light gray |
| Shopping / CPO / Tools | **LIGHT** | White with subtle gray sections |
| Model pages (Escalade, LYRIQ, XT4, etc.) | **DARK** | Black (#000000) / near-black |
| Electric hub (/electric) | **DARK** | Black with dramatic photography |
| Digital brochures | **DARK** | Deep black/charcoal |
| Footer (all pages) | **DARK** | Near-black |

**For dealer website templates:** Use the **LIGHT theme** as the primary approach. The homepage,
inventory/SRP, shopping tools, and general content pages should be light. Reserve dark sections
for hero areas, vehicle showcases, or dramatic feature callouts -- matching how Cadillac uses
dark backgrounds specifically to showcase vehicles with high-contrast photography.

---

## Color Palette

### What cadillac.com ACTUALLY uses

| Name | Hex | Usage |
|------|-----|-------|
| White | #FFFFFF | Primary background (homepage, shopping pages) |
| Black | #000000 | Model page backgrounds, footer, primary text |
| Near Black | #0D0D0D | Body text on light backgrounds |
| Dark Charcoal | #1E1C1D | Deep UI elements, secondary dark surfaces |
| Medium Gray | #71747D | Secondary text, metadata, captions |
| Light Gray | #F5F5F5 | Alternating section backgrounds on light pages |

### Cadillac Crest Heritage Colors (from official brand identity)

These are the crest/brand colors -- used in brand materials, gradients, and photography art direction.
They are **NOT used as UI element colors** (not on buttons, links, or backgrounds).

| Name | Hex | Where It Appears |
|------|-----|-----------------|
| Cadillac Red | #97140C | Crest accent; photography color grading |
| Cadillac Gold | #CBAA4D | Crest accent only; NOT used in web UI |
| Steel Gray | #71747D | Crest accent; UI-safe for secondary text |

### Colors NOT on cadillac.com

| Color | Hex | Status |
|-------|-----|--------|
| ~~"Cadillac Gold" as CTA~~ | ~~#C4A265~~ | **WRONG.** Gold is never used for buttons or CTAs |
| ~~Rich Black background~~ | ~~#1A1A1A~~ | **WRONG for homepage.** Homepage is white. Model pages use #000000, not #1A1A1A |
| ~~Gold divider lines~~ | — | **WRONG.** No gold dividers exist on cadillac.com |

---

## Typography

### Primary: Cadillac Gothic

- **Designed by:** Colophon Foundry, commissioned by Mother Design (2021)
- **Type:** Sans-serif, geometric, multiple widths (at least 3), multiple weights
- **Characteristics:** Wide, bold presence inspired by Cadillac vehicle proportions
- **Availability:** Proprietary to GM -- NOT publicly licensed or available
- **Usage on cadillac.com:** All headings, body text, navigation, buttons

### Web Fallback Stack

Since Cadillac Gothic is not available for third-party use:

```css
font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

- **DM Sans** (Google Fonts) -- best available match for Cadillac Gothic's geometric proportions
- Load weights: 300, 400, 500, 600, 700

### Typography Patterns on cadillac.com

| Element | Style |
|---------|-------|
| Hero headlines | Large, bold, uppercase, generous letter-spacing (2-4px) |
| Section headings | Uppercase, medium weight, tracked out |
| Body text | Regular weight, sentence case, comfortable line-height (~1.6) |
| CTAs / button text | Uppercase, medium weight, letter-spacing (~1-2px) |
| Navigation links | Uppercase, regular weight |
| Pricing | Large, bold, tight tracking |

---

## Button Styles

### What cadillac.com ACTUALLY uses for CTAs

Cadillac uses **text-link style CTAs with arrow icons**, NOT traditional filled buttons in most contexts.

#### Primary CTA Pattern (most common)

```css
/* Text-link CTA with arrow */
.cta-link {
    color: #000000;                    /* Black text on light pages */
    /* OR */
    color: #FFFFFF;                    /* White text on dark pages */
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: none;
    background: none;
    padding: 12px 0;
    cursor: pointer;
}
/* Arrow icon follows the text (SVG arrow pointing right) */
.cta-link::after {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url("data:image/svg+xml,..."); /* right arrow */
    transition: transform 0.2s ease;
}
.cta-link:hover::after {
    transform: translateX(4px);
}
```

#### Secondary CTA Pattern (outlined button, used sparingly)

```css
.cta-button-outline {
    color: #FFFFFF;
    background: transparent;
    border: 1px solid #FFFFFF;
    padding: 12px 28px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border-radius: 0;              /* SHARP corners -- no rounding */
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;
}
.cta-button-outline:hover {
    background: #FFFFFF;
    color: #000000;
}
```

### Key button facts

- **NO gold buttons.** Zero. None. Cadillac does not use gold (#C4A265 or #CBAA4D) for any interactive element.
- **NO rounded buttons.** Border-radius is 0 or near-0. Sharp, architectural corners.
- **NO filled/solid color buttons** as the primary CTA pattern. The main CTA style is a text link with an arrow.
- Buttons are either **text+arrow links** or **outlined rectangles with sharp corners**.
- On light pages: black text/borders. On dark pages: white text/borders.

---

## Hero Treatment

### Homepage (Light)
- Full-width vehicle photography on white/light backgrounds
- Vehicle images with offer text overlays (pricing, APR)
- Clean, uncluttered -- vehicle is the hero
- No dramatic gradients or color washes on the homepage

### Model Pages (Dark)
- Full-bleed dramatic photography against black/dark backgrounds
- Bold uppercase tagline (e.g., "NEVER STOP ARRIVING" for Escalade, "ELECTRIFYING SOPHISTICATION" for LYRIQ)
- Prominent pricing display
- Gradient overlays (blue-to-black, red-to-black) used as section transitions
- High-contrast treatment emphasizes vehicle details

### For dealer templates
- Use a light hero with high-quality vehicle photography for homepage
- Dark hero sections are acceptable for featured vehicle spotlights
- Keep it clean -- let the vehicle be the star, not gradients or overlays

---

## Vehicle Presentation

| Context | Background | Treatment |
|---------|------------|-----------|
| Homepage lineup | White/light | Clean product shots, grid/carousel |
| Model page hero | Black/dark | Dramatic three-quarter view, environment shots |
| Shopping/inventory | White/light | Standard product photography |
| Feature highlights | Dark with gradient | Detail shots, color-graded photography |

- Cadillac uses **blue, red, and black gradient overlays** as visual separators between sections on model pages
- Vehicles are shown in both studio (white) and environmental (dramatic lighting) settings
- Three-quarter front view is the dominant angle for hero shots

---

## Navigation

### Homepage / Light Pages
- **Background:** White or transparent (over hero images)
- **Text:** Dark/black navigation links
- **Style:** Minimal, clean horizontal nav
- **Logo:** Black crest on left
- **Pattern:** Uppercase text links, no background fills on nav items

### Model Pages / Dark Pages
- **Background:** Transparent over dark content, or dark/black
- **Text:** White navigation links
- **Style:** Sticky horizontal nav with section tabs (OVERVIEW, FEATURES, GALLERY, SPECS)
- **Logo:** White crest (inverted)

### Navigation categories observed
`ALL VEHICLES | ELECTRIC | ESCALADE | SUVS | SEDANS | PERFORMANCE`

Sub-navigation on model pages:
`[MODEL NAME] | FEATURES | GALLERY | SPECS | V-SERIES | OWNER RESOURCES`

---

## Footer

- **Background:** Dark/near-black (#1E1C1D or #000000)
- **Text:** White/light gray
- **Style:** Minimal, text-based layout
- **Content:** Legal links, country selector, social links, copyright
- **Consistent across ALL pages** (dark footer even on light-themed pages)

---

## Spacing and Layout

- **Section padding:** 80-100px vertical padding (generous whitespace)
- **Container max-width:** ~1400px centered
- **Grid:** Responsive grid system, often 2-3 column on desktop
- **Card spacing:** Generous gaps between cards/tiles
- **Overall feel:** Spacious, unhurried -- luxury through whitespace

---

## Design Language Summary

Cadillac's web design is **monochromatic and architectural**:

1. **Black and white dominate.** The palette is essentially two-tone with gray for secondary elements.
2. **No decorative colors in UI.** The crest colors (red, gold, blue) appear in brand materials and photography art direction, but NOT in buttons, links, borders, or UI elements.
3. **Sharp geometry.** Square corners on buttons, angular layouts, clean lines.
4. **Photography carries the color.** Vehicle images and environmental photography provide visual richness -- the UI stays neutral.
5. **Typography does the heavy lifting.** Large uppercase headlines, generous letter-spacing, and bold weights create hierarchy without color.
6. **Dual-theme approach.** Light for browsing/shopping; dark for immersive vehicle experiences.

---

## CRITICAL CORRECTIONS from Previous Template

| What We Had Wrong | What Cadillac.com Actually Does |
|---|---|
| Dark background (#1A1A1A) everywhere | Homepage and shopping pages are WHITE. Only model pages are dark. |
| Gold (#C4A265) accent buttons/CTAs | Gold is NEVER used for buttons. CTAs are black text+arrow or white outlined. |
| Gold divider lines between sections | No gold dividers. Section breaks use whitespace or subtle gray lines. |
| "Luxury = dark + gold" assumption | Cadillac's luxury = monochrome minimalism + sharp geometry + photography |
| Filled gold CTA buttons | No filled buttons at all. Primary CTAs are text links with arrows. Secondary CTAs are outlined with sharp corners. |
| Font color hierarchy using gold | All text is black, white, or gray. No gold text. |

---

## DO's and DON'Ts

### DO
- Use a **white/light background** for homepage, inventory, and general pages
- Use **dark/black backgrounds** for vehicle showcase sections and hero spotlights
- Use **sharp-cornered** (border-radius: 0) elements throughout
- Use **uppercase text with letter-spacing** for headings and CTAs
- Use **text-link + arrow** as the primary CTA style
- Use **monochromatic** UI (black, white, grays only)
- Let **photography** provide the visual richness and color
- Use **generous whitespace** to convey luxury
- Keep the **dark footer** consistent on all pages
- Use **DM Sans** as the Cadillac Gothic fallback font

### DON'T
- Use gold (#C4A265, #CBAA4D, or any gold) for buttons, CTAs, links, or UI accents
- Use gold divider lines or gold decorative elements
- Make the entire site dark-themed -- the homepage should be light
- Use rounded/pill-shaped buttons (border-radius > 2px)
- Use filled/solid background buttons as primary CTAs
- Use warm luxury colors (champagne, bronze, amber) in the UI
- Add gratuitous gradients -- Cadillac uses them subtly and only on model pages
- Use serif fonts or script fonts -- Cadillac Gothic is a geometric sans-serif
- Over-decorate -- Cadillac's design language is restrained and architectural

---

## Current Models (2025-2026)

Escalade, LYRIQ, OPTIQ, CT5, XT4, XT5, XT6, CELESTIQ, VISTIQ

---

## Vehicle Image CDN

- Base: `https://www.cadillac.com/content/dam/cadillac/na/us/english/models/`
- Gallery images: append `?imwidth=960` for high-res, `?imwidth=300` for thumbnails

---

## Quick Reference: Dealer Template Setup

```css
:root {
    /* Light theme (default for homepage/shopping/inventory) */
    --bg-primary: #FFFFFF;
    --bg-secondary: #F5F5F5;
    --text-primary: #0D0D0D;
    --text-secondary: #71747D;
    --border-color: #E0E0E0;

    /* Dark theme (for hero sections, vehicle spotlights) */
    --bg-dark: #000000;
    --bg-dark-secondary: #1E1C1D;
    --text-on-dark: #FFFFFF;
    --text-on-dark-secondary: #A0A0A0;

    /* Buttons and interactive */
    --cta-color: #000000;         /* Text CTAs on light bg */
    --cta-color-dark: #FFFFFF;    /* Text CTAs on dark bg */
    --cta-border: #FFFFFF;        /* Outlined button border on dark bg */

    /* Typography */
    --font-primary: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --letter-spacing-heading: 2px;
    --letter-spacing-cta: 1.5px;

    /* Spacing */
    --section-padding: 80px;
    --container-max-width: 1400px;
}
```

---

## Compliance Checklist

Before shipping a Cadillac dealer template, verify:

- [ ] Homepage uses WHITE background, not dark
- [ ] NO gold (#C4A265 or similar) used for any buttons, links, or UI accents
- [ ] CTAs are text+arrow links or sharp-cornered outlined buttons
- [ ] Border-radius on buttons is 0 (sharp corners)
- [ ] Headings are uppercase with letter-spacing
- [ ] DM Sans is loaded (weights 300-700)
- [ ] Official crest SVG is used (not fabricated)
- [ ] Footer is dark (near-black)
- [ ] Generous whitespace between sections (80px+)
- [ ] Vehicle images on clean backgrounds (white for browsing, dark for showcases)
- [ ] Overall feel is monochrome, architectural, and restrained
