# Honda Brand Guide

> Sourced from the official Honda Brand Design Style Guide (Schomp/American Honda PDF), Honda Global Brand Playbook (global.honda), DealerInspire Honda demo site inspection, CDN logo assets, and multiple brand color reference databases (March 2026).
> This guide is used directly when building dealer website templates.

---

## 1. Official Logo

### DealerInspire CDN (Recommended for Dealer Templates)

- **Dark Logo (blue "H" + "HONDA" on transparent -- for light backgrounds):**
  `https://di-shared-assets.dealerinspire.com/public/logos/honda/honda-dark-desktop-logo.png`
  `https://di-shared-assets.dealerinspire.com/public/logos/honda/honda-dark-mobile-logo.png`

- **Light Logo (white "H" + "HONDA" on transparent -- for dark backgrounds):**
  `https://di-shared-assets.dealerinspire.com/public/logos/honda/honda-light-desktop-logo.png`
  `https://di-shared-assets.dealerinspire.com/public/logos/honda/honda-light-mobile-logo.png`

### Third-Party SVG Sources

- **Red "H" mark + "HONDA" wordmark (SVG):** `https://static.cdnlogo.com/logos/h/88/honda.svg`
  - "H" mark fill: `#c00` (shorthand for `#CC0000`)
  - "HONDA" wordmark fill: `#221714` (near-black/dark brown)

- **Wikimedia "H" mark only (SVG):** `https://upload.wikimedia.org/wikipedia/commons/3/38/Honda.svg`
  - Fill: `#DA251D` (bright red -- note: this is the Honda Motor "H" emblem only, no wordmark)

### Honda Global Brand Playbook Downloads

- **Corporate Logo (Dark, PNG):** `https://global.honda/en/brandplaybook/assets/dl_data_logo/Honda_d.zip`
- **Corporate Logo (AI/PSD):** `https://global.honda/en/brandplaybook/assets/dl_data_logo/Honda_c.zip`
- **Global Brand Slogan -- Horizontal (PNG):** `https://global.honda/en/brandplaybook/assets/dl_data_logo/GBS_dh_d.zip`
- **Global Brand Slogan -- Vertical (PNG):** `https://global.honda/en/brandplaybook/assets/dl_data_logo/GBS_dv_d.zip`

### Logo Variants Confirmed

| Variant | Color | Use Case |
|---------|-------|----------|
| Dark (blue) | Honda Blue (approx `#2198DD` on DI sites) | Light backgrounds (white, light gray) |
| Light (white) | `#FFFFFF` | Dark backgrounds, hero overlays, dark nav |
| Red "H" mark | `#CC0000` | Official corporate/brand mark |
| Black wordmark | `#221714` | Print, formal corporate uses |

### Logo Usage Rules
- The Honda "H" emblem is always enclosed in a rounded rectangle/trapezoid shield shape
- The "HONDA" wordmark appears below the "H" mark in a clean, custom sans-serif
- Maintain clear space around the logo equal to the height of the "H" in "HONDA"
- Logo dimensions ratio: approximately 1.0 W x 0.6725 H (per official style guide)
- Do NOT alter colors, proportions, or orientation
- Do NOT apply CSS filters to change logo color -- use the correct variant

**NEVER fabricate, redraw, or approximate the Honda logo.** Always use official assets.

---

## 2. Color Palette

### Primary Brand Color

| Name | Hex | RGB | CMYK | Pantone | Usage |
|------|-----|-----|------|---------|-------|
| **Honda Red** | `#CC0000` | rgb(204, 0, 0) | 0, 100, 90, 0 | 186 C | Primary corporate brand color. Logo mark, accent highlights, promotional elements. Represents "passion" and Honda's challenger spirit. |

### Logo / Print Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Honda Red (Logo)** | `#D81813` | rgb(216, 24, 19) | Alternate red seen in some logo renderings |
| **Honda Red (Alt)** | `#DA251D` | rgb(218, 37, 29) | Wikimedia/global Honda "H" emblem |
| **Honda Red (Alt 2)** | `#CE2129` | rgb(206, 33, 41) | Variant reported by Civic community sources |
| **Black (Wordmark)** | `#221714` | rgb(34, 23, 20) | "HONDA" wordmark text in SVG logo |
| **Pure Black** | `#000000` | rgb(0, 0, 0) | Header text, body text on light backgrounds |
| **Pure White** | `#FFFFFF` | rgb(255, 255, 255) | Text on dark backgrounds, hero text, nav on dark |

### Digital / Website Colors (from DealerInspire Honda demo)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Honda CTA Blue** | `#2198DD` | rgb(33, 152, 221) | Primary CTA buttons, "Learn More" buttons, interactive elements |
| **Honda CTA Blue Hover** | `#3CACEC` | rgb(60, 172, 236) | Button hover state |
| **Honda Teal** | `#5BC5D2` | rgb(91, 197, 210) | Brand accent color seen in official style guide examples (the teal/aqua background on page 2 & 4 of the PDF) |
| **Honda Sky Blue** | `#29ADE4` | rgb(41, 173, 228) | Alternate digital accent blue |

### Neutral / UI Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Body Background** | `#FFFFFF` | rgb(255, 255, 255) | Page background -- Honda uses pure white |
| **Light Gray Background** | `#F5F5F5` | rgb(245, 245, 245) | Alternating section backgrounds, card backgrounds |
| **Off-White** | `#FAFAFF` | rgb(250, 250, 255) | Very subtle tinted background for content areas |
| **Medium Gray** | `#666666` | rgb(102, 102, 102) | Secondary text, descriptions |
| **Dark Gray** | `#333333` | rgb(51, 51, 51) | Primary body text |
| **Near Black** | `#231F20` | rgb(35, 31, 32) | Dark text, footer backgrounds |
| **Border Gray** | `#DDDDDD` | rgb(221, 221, 221) | Card borders, dividers |

### Color System Summary
```
Red accent:      #CC0000 (Honda Red) -- brand mark and sparse accents
Blue CTAs:       #2198DD --> #3CACEC (hover) -- primary interactive color on dealer sites
Teal accent:     #5BC5D2 -- brand accent from official style guide
Dark spectrum:   #000000 --> #231F20 --> #333333 --> #666666
Light spectrum:  #DDDDDD --> #F5F5F5 --> #FAFAFF --> #FFFFFF
```

---

## 3. Typography

### Official Brand Font

**Avenir Next Rounded** is Honda's mandatory typeface for all communications, as specified in the official Honda Brand Design Style Guide.

| Weight | CSS Equivalent | Usage |
|--------|---------------|-------|
| **Avenir Next Rounded Demi** | `font-weight: 600` | Headlines (primary weight for all headings). Set in sentence case. Tracking: minimum -25 (thousandths of an em = approx `-0.025em` in CSS). |
| **Avenir Next Rounded Medium** | `font-weight: 500` | Subheads, taglines, secondary headings |
| **Avenir Next Rounded Regular** | `font-weight: 400` | Body copy, descriptions, legal/footnotes |
| **Avenir Next Rounded Bold** | `font-weight: 700` | Use sparingly and with restraint -- "looks childish in large point sizes." Use at 28pt or less. |

**Purchase:** http://www.fonts.com/font/linotype/avenir-next-rounded

**Fallback:** If Avenir Next Rounded is not available, use **Avenir**.

### Honda Global Font (2025+)

Honda's global corporate site (global.honda) references the **Honda Global Font** as the universal typeface for corporate use, with a CSS fallback stack of:
```css
font-family: "Honda Global Font", Helvetica, Arial, "Hiragino Kaku Gothic W3 JIS2004", sans-serif;
```
This is a proprietary font being rolled out for web starting October 2025, with a UI variant planned for dense text applications.

### Google Fonts Equivalents (for Dealer Templates)

Since Avenir Next Rounded is a premium licensed font, use these free alternatives:

| Priority | Google Font | Why |
|----------|------------|-----|
| **1st choice** | **Nunito** | Closest match to Avenir Next Rounded. Rounded terminals, geometric construction, friendly tone. Available in weights 200-900 + italics. |
| **2nd choice** | **Varela Round** | Single weight but excellent match for the rounded, approachable feel. Good for headlines. |
| **3rd choice** | **Quicksand** | Geometric rounded sans-serif, very similar warmth to Avenir Next Rounded. Weights 300-700. |
| **Fallback (non-rounded)** | **Nunito Sans** | If a non-rounded alternative is preferred, Nunito Sans is the closest Avenir equivalent on Google Fonts. |

### Font Stacks (for Dealer Templates)

```css
/* Primary -- matches Avenir Next Rounded's rounded, friendly feel */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');

/* Heading font stack */
font-family: 'Nunito', 'Avenir Next Rounded', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;

/* Body font stack */
font-family: 'Nunito', 'Avenir Next Rounded', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

### Type Scale (from official Honda style guide, adapted for web)

| Element | Font Weight | Size (print) | Recommended Web Size | Letter Spacing |
|---------|------------|--------------|---------------------|----------------|
| **H1 (Hero headline)** | Demi (600) | 32pt | 42-56px | -0.025em |
| **H2 (Section heading)** | Demi (600) | -- | 28-36px | -0.025em |
| **H3 (Subhead)** | Medium (500) | 13pt | 18-22px | normal |
| **Body copy** | Regular (400) | 9.25/13pt | 16px / line-height 1.6 | normal |
| **Tagline** | Medium (500) | 12pt | 14-16px | 0.02em |
| **Legal/footnotes** | Regular (400) | 6-8pt | 11-12px | normal |
| **CTA button text** | Demi (600) | -- | 14-16px | 0.02em |
| **Nav links** | Medium (500) | -- | 14px | normal |

### Typography Rules
- Headlines should be set in **sentence case** (not ALL CAPS)
- Avenir Next Rounded Bold should be used judiciously -- it looks childish in large point sizes (use at 28pt/~37px or less)
- Honda's tone is friendly, approachable, and clean -- the rounded font reinforces this

---

## 4. Button Styles

### Design Philosophy
Honda's brand uses **rounded rectangles** extensively. Buttons feature rounded corners, clean fills, and friendly styling. This is the opposite of sharp-edged brands like Kia -- Honda is soft, approachable, and curved.

### Digital Button Specs (from DealerInspire Honda demo + official style guide)

#### Primary CTA Button (filled)

```css
.honda-btn-primary {
  display: inline-block;
  background-color: #2198DD;
  color: #FFFFFF;
  font-family: 'Nunito', 'Avenir Next Rounded', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: none;            /* Sentence case, NOT uppercase */
  text-decoration: none;
  padding: 12px 28px;
  border: none;
  border-radius: 10px;             /* Rounded corners -- Honda signature */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.honda-btn-primary:hover {
  background-color: #3CACEC;
}
```

#### Secondary Button (outline)

```css
.honda-btn-secondary {
  display: inline-block;
  background-color: transparent;
  color: #2198DD;
  font-family: 'Nunito', 'Avenir Next Rounded', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: none;
  text-decoration: none;
  padding: 12px 28px;
  border: 2px solid #2198DD;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.honda-btn-secondary:hover {
  background-color: #2198DD;
  color: #FFFFFF;
}
```

#### Red Accent Button (for specials, promotions)

```css
.honda-btn-accent {
  display: inline-block;
  background-color: #CC0000;
  color: #FFFFFF;
  font-family: 'Nunito', 'Avenir Next Rounded', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: none;
  text-decoration: none;
  padding: 12px 28px;
  border: 2px solid #CC0000;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.honda-btn-accent:hover {
  background-color: #A30000;
  border-color: #A30000;
}
```

#### On Dark Backgrounds

```css
.honda-btn-primary-dark {
  background-color: #FFFFFF;
  color: #333333;
  border: none;
  border-radius: 10px;
}

.honda-btn-primary-dark:hover {
  background-color: #F5F5F5;
}

.honda-btn-secondary-dark {
  background-color: transparent;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 10px;
}

.honda-btn-secondary-dark:hover {
  background-color: #FFFFFF;
  color: #333333;
}
```

### iAB Display / Digital Ad Button Specs (from official Honda style guide, p.7)

| Property | Value |
|----------|-------|
| Border width | 3px white + 1px gray stroke |
| Border corner radius | 10px |
| Background | Honda Blue/Teal fill |
| Text | White, Avenir Next Rounded Demi |

---

## 5. Rounded Rectangles -- Honda's Signature Visual Element

Per the official Honda Brand Design Style Guide, **rounded rectangles** are a mandatory brand element:

### Border Treatment
- A **white border treatment with rounded corners** adds a clean, finished look
- This is "a key component in our visual language"
- Used as borders around hero images, ads, and content areas

### Foreground Usage
- Rounded rectangles are used as **containing devices** for type, color, or imagery
- Also used for functional elements like **buttons**

### Specifications (from style guide)

| Context | Border Width | Corner Radius |
|---------|-------------|---------------|
| Print ads (two-page spread) | 0.375 in | 0.1667 in |
| Outdoor/billboard | 12 in | 15 in |
| Digital display ads (iAB) | 3px white + 1px gray | 10px |
| **Web components** | 0-2px | **8-12px** (extrapolated) |

### CSS Implementation for Web

```css
/* Honda rounded rectangle treatment */
.honda-rounded {
  border-radius: 10px;
  overflow: hidden;
}

/* With border (Honda's white border treatment) */
.honda-bordered {
  border-radius: 10px;
  border: 3px solid #FFFFFF;
  box-shadow: 0 0 0 1px #DDDDDD;    /* Simulates the 1px gray stroke */
  overflow: hidden;
}

/* Cards and content containers */
.honda-card {
  border-radius: 10px;
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}
```

---

## 6. Navigation Pattern

### How Honda's Website Nav Works

Honda's navigation is clean, light, and minimal:

- **Background**: White (`#FFFFFF`) -- Honda uses a **light navigation**, not dark
- **Logo**: Blue Honda "H" + "HONDA" mark on the left (`honda-dark-desktop-logo.png` on light background)
- **Text color**: Black (`#000000`)
- **Position**: Sticky at top of page
- **Height**: 60px for main nav items
- **Style**: Clean, minimal, mega-menu dropdowns
- **Mobile**: Responsive hamburger toggle

### Navigation CSS Pattern

```css
.honda-nav {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #FFFFFF;
  color: #000000;
  z-index: 1000;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.honda-nav__logo {
  height: 36px;
  width: auto;
  margin-right: 40px;
}

.honda-nav__links {
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.honda-nav__link {
  color: #000000;
  font-family: 'Nunito', 'Avenir Next Rounded', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  text-transform: none;
  transition: color 0.2s ease;
}

.honda-nav__link:hover {
  color: #2198DD;
}

.honda-nav__link--active {
  color: #2198DD;
  font-weight: 600;
}

/* Dropdown */
.honda-nav__dropdown {
  background-color: #FFFFFF;
  border-top: 2px solid #2198DD;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
}
```

---

## 7. Hero Treatment

### How Honda Does Heroes

- **Full-width photography**: Clean, well-lit vehicle photography as background
- **Light/white overlays**: Unlike dark-themed brands, Honda often uses white or light gradient overlays
- **Text positioning**: Text typically left-aligned or centered, in the lower portion of the hero
- **CTA placement**: Below headline text, using Honda Blue buttons with rounded corners
- **Clean, bright feel**: Heroes project optimism and friendliness -- not dark drama

### Hero CSS Pattern

```css
.honda-hero {
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 60px 40px;
}

.honda-hero__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* Honda uses lighter overlays -- not heavy dark gradients */
.honda-hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(255, 255, 255, 0.4) 40%,
    transparent 70%
  );
  z-index: 1;
}

/* Alternative: dark overlay for dark hero images */
.honda-hero__overlay--dark {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.2) 40%,
    transparent 70%
  );
}

.honda-hero__content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

.honda-hero__subtitle {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #666666;
  margin-bottom: 8px;
}

.honda-hero__title {
  font-size: 48px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: #333333;
  margin-bottom: 16px;
}

/* On dark overlay hero */
.honda-hero--dark .honda-hero__title {
  color: #FFFFFF;
}

.honda-hero--dark .honda-hero__subtitle {
  color: rgba(255, 255, 255, 0.8);
}
```

### Hero Content Structure
```
[Subtitle: "The All-New" -- 14px, medium weight]
[Title: "2026 Accord" -- 48px, demi weight, sentence case]
[CTA buttons: "Explore" | "Build Yours" -- Honda Blue rounded buttons]
```

---

## 8. Card & Grid Patterns

### Vehicle Cards

Honda's vehicle cards are clean, white, with rounded corners (matching the brand's rounded rectangle system):

```css
.honda-vehicle-card {
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: none;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.honda-vehicle-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.honda-vehicle-card__image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.honda-vehicle-card__body {
  padding: 20px;
}

.honda-vehicle-card__name {
  font-size: 22px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 4px;
}

.honda-vehicle-card__price {
  font-size: 16px;
  font-weight: 600;
  color: #CC0000;
  margin-bottom: 4px;
}

.honda-vehicle-card__price-label {
  font-size: 12px;
  font-weight: 400;
  color: #666666;
}

.honda-vehicle-card__cta {
  display: inline-block;
  margin-top: 12px;
  color: #2198DD;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.honda-vehicle-card__cta:hover {
  color: #3CACEC;
  text-decoration: underline;
}
```

### Grid Layout

```css
.honda-vehicle-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 40px;
}
```

---

## 9. Footer Pattern

### How Honda's Footer Works

Honda's footer is clean and organized in a multi-column layout:

- **Background**: Dark -- `#231F20` (near-black) or `#333333` (dark gray)
- **Text color**: `#FFFFFF` (white) for links, `#999999` for secondary/legal text
- **Logo**: White Honda logo variant
- **Layout**: Multi-column with grouped link sections
- **Bottom bar**: Copyright and legal links

### Footer CSS Pattern

```css
.honda-footer {
  background-color: #231F20;
  color: #FFFFFF;
  padding: 60px 40px 30px;
}

.honda-footer__logo {
  height: 40px;
  margin-bottom: 32px;
}

.honda-footer__columns {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-bottom: 40px;
}

.honda-footer__column-title {
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
  text-transform: none;
}

.honda-footer__link {
  display: block;
  color: #CCCCCC;
  font-size: 13px;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 8px;
  transition: color 0.2s ease;
}

.honda-footer__link:hover {
  color: #FFFFFF;
}

.honda-footer__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 24px 0;
}

.honda-footer__legal {
  font-size: 11px;
  color: #999999;
  line-height: 1.6;
}

.honda-footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
}
```

---

## 10. Design Philosophy

### "Start Something Special" -- Friendly, Approachable, Optimistic

Honda's visual language is built on **friendliness, reliability, and approachability**:

- **Rounded, not sharp**: Rounded corners on everything -- cards, buttons, borders, containers. This is Honda's most distinctive visual trait and is a mandatory brand element.
- **Clean and bright**: White backgrounds, well-lit photography, airy layouts. Honda projects optimism.
- **Approachable typography**: The rounded font (Avenir Next Rounded) reinforces friendliness. No harsh geometric edges.
- **Blue as the digital action color**: While Honda Red is the corporate brand color, blue (`#2198DD`) is the primary interactive/CTA color on digital properties -- it's trustworthy and inviting.
- **Red used sparingly**: Honda Red (`#CC0000`) appears in the logo and as a sparse accent for prices or special promotions, but it is NOT the dominant UI color.
- **Photography-forward**: Clean, aspirational vehicle photography with natural lighting.
- **White space**: Generous padding and breathing room between elements.

### Core Principles
1. **Rounded corners everywhere**: Cards, buttons, image containers, badges -- all get `border-radius: 10px`
2. **Light navigation**: White nav bar with dark text -- friendly and open, not dark and imposing
3. **Blue CTAs**: `#2198DD` is the primary action color -- trustworthy and distinct from Honda Red
4. **Pure white body**: The background is `#FFFFFF`, with `#F5F5F5` for alternating sections
5. **Sentence case**: Headlines use sentence case, not ALL CAPS. This keeps the tone conversational.
6. **Rounded font**: The typeface itself has rounded terminals -- this matters. Use Nunito (Google Fonts) to match.
7. **Teal/aqua accent**: Honda uses a teal-blue (`#5BC5D2`) as a secondary brand accent, especially in advertising

---

## 11. DO's and DON'Ts

### DO's
- **DO** use rounded corners (`border-radius: 10px`) on buttons, cards, and containers -- this is Honda's signature
- **DO** use white/light backgrounds as the primary page background
- **DO** use `#2198DD` (Honda Blue) as the primary CTA/button color
- **DO** use `#CC0000` (Honda Red) sparingly -- for logo, prices, or 1-2 accent elements
- **DO** use Nunito as the Google Fonts fallback (it matches Avenir Next Rounded)
- **DO** set headlines in sentence case (not ALL CAPS)
- **DO** use the official Honda logo from DealerInspire CDN or authorized sources
- **DO** keep the navigation white/light with a subtle shadow
- **DO** use clean, bright vehicle photography
- **DO** add subtle box shadows to cards (`0 2px 8px rgba(0, 0, 0, 0.08)`)
- **DO** use the Honda white border treatment (white border + rounded corners) around hero images

### DON'Ts
- **DON'T** use sharp corners (`border-radius: 0`) on buttons or cards -- Honda is rounded
- **DON'T** use a dark/black navigation bar -- Honda nav is white/light
- **DON'T** make Honda Red the primary button color -- use Honda Blue for CTAs
- **DON'T** use ALL CAPS for headlines -- Honda uses sentence case
- **DON'T** use heavy, dark overlays on heroes -- Honda prefers light, bright imagery
- **DON'T** use angular/geometric sans-serif fonts (like Inter or Montserrat) -- Honda's identity uses rounded fonts
- **DON'T** fabricate, trace, or approximate the Honda logo in any way
- **DON'T** use bold weight (700) for large headings -- it looks "childish" per Honda's own style guide
- **DON'T** use serif fonts -- Honda is exclusively sans-serif
- **DON'T** skip the rounded rectangle treatment -- it's a mandatory brand element

---

## Brand Tagline
**"Start something special."**

(Internal + external. Set in Avenir Next Rounded Medium / Nunito weight 500.)

## Current Models (2025-2026)
Accord, Civic, CR-V, HR-V, Pilot, Passport, Odyssey, Ridgeline, Prologue (EV), CR-V Hybrid, Accord Hybrid, Civic Hybrid, Honda 0 Series (upcoming EV)

## Vehicle Image Sources
- **automobiles.honda.com**: `https://automobiles.honda.com/2025/{model}` (official model pages)
- **Honda Newsroom**: `https://hondanews.com` (press images)
- **DealerInspire shared assets**: `https://di-shared-assets.dealerinspire.com/`

---

## Quick Reference: Complete Template Skeleton

```css
/* === HONDA DEALER TEMPLATE BASE STYLES === */

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');

:root {
  /* Primary Brand */
  --honda-red:          #CC0000;
  --honda-red-hover:    #A30000;
  --honda-blue:         #2198DD;
  --honda-blue-hover:   #3CACEC;
  --honda-teal:         #5BC5D2;

  /* Neutrals */
  --honda-white:        #FFFFFF;
  --honda-off-white:    #F5F5F5;
  --honda-border:       #DDDDDD;
  --honda-gray-text:    #666666;
  --honda-dark-text:    #333333;
  --honda-black:        #000000;
  --honda-footer-bg:    #231F20;

  /* Typography */
  --honda-font:         'Nunito', 'Avenir Next Rounded', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --honda-font-size:    16px;

  /* Shapes */
  --honda-radius:       10px;
  --honda-radius-sm:    6px;
  --honda-radius-lg:    16px;

  /* Shadows */
  --honda-shadow:       0 2px 8px rgba(0, 0, 0, 0.08);
  --honda-shadow-hover: 0 4px 16px rgba(0, 0, 0, 0.12);
}

body {
  font-family: var(--honda-font);
  font-size: var(--honda-font-size);
  color: var(--honda-dark-text);
  background-color: var(--honda-white);
  line-height: 1.6;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;          /* Demi -- Honda's preferred heading weight */
  line-height: 1.15;
  letter-spacing: -0.025em;
  text-transform: none;       /* Sentence case always */
}

/* Buttons: ALWAYS rounded corners */
button, .btn {
  border-radius: var(--honda-radius);
  box-shadow: none;
  font-family: var(--honda-font);
  font-weight: 600;
  text-transform: none;
}

/* Cards: ALWAYS rounded with subtle shadow */
.card {
  border-radius: var(--honda-radius);
  box-shadow: var(--honda-shadow);
  overflow: hidden;
}

.card:hover {
  box-shadow: var(--honda-shadow-hover);
}
```

---

## Compliance Checklist (for template review)

- [ ] Uses official Honda logo from DealerInspire CDN (not fabricated)
- [ ] Navigation is white/light background with dark text and subtle shadow
- [ ] Hero uses bright photography with light overlay (or dark overlay if needed)
- [ ] All buttons and cards have `border-radius: 10px` (rounded corners)
- [ ] Primary CTA buttons are Honda Blue (`#2198DD`), not Honda Red
- [ ] Honda Red (`#CC0000`) used sparingly (logo + 1-2 accents only)
- [ ] Nunito font loaded with weights 400, 500, 600, 700
- [ ] Headlines in sentence case (not ALL CAPS)
- [ ] Body background is `#FFFFFF` (pure white)
- [ ] Cards have subtle box shadow (`0 2px 8px rgba(0, 0, 0, 0.08)`)
- [ ] Footer uses dark background (`#231F20`) with white text
- [ ] No serif fonts anywhere
- [ ] Rounded corners on ALL containers, cards, buttons, and image frames
- [ ] White border treatment applied to hero images where applicable
- [ ] Text set in Avenir Next Rounded Demi (or Nunito 600) for headlines

---

## Sources

- [Honda Brand Design Style Guide (PDF)](https://marketing.schomp.com/wp-content/uploads/2025/03/hondastyleguide.pdf)
- [Honda Global Brand Playbook - Visual Identity](https://global.honda/en/brandplaybook/vi_guidelines/)
- [Honda Global Brand Playbook - Downloads](https://global.honda/en/brandplaybook/vi_guidelines/download/)
- [Honda Brand Color Codes](https://www.brandcolorcode.com/honda)
- [Honda Logo Colors](https://www.codeofcolors.com/honda-colors.html)
- [DealerInspire Honda Demo Site](https://www.hondademo.dealerinspire.com/)
- [Brandfetch Honda Assets](https://brandfetch.com/honda.com)
- [CDNLogo Honda SVG](https://static.cdnlogo.com/logos/h/88/honda.svg)
- [Kelly Honda - New Logo Analysis](https://www.kelly-honda.com/hondas-new-logo-brings-a-modern-take-on-a-classic-design/)
- [Learn UI Design - Avenir Alternatives](https://www.learnui.design/blog/avenir-similar-fonts.html)
