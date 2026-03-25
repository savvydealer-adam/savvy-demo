# Nissan Brand Guide

> Sourced from live inspection of nissanusa.com (March 2026), nissanbrandceg.com official Creative Expression Guidelines, Nissan Identity Guidelines, pickcoloronline.com/brands/nissan-motor, codeofcolors.com, brandcolorcode.com, color-hex.com, and GitHub CSS references.
> This guide is used directly when building dealer website templates.

---

## 1. Official Logo

### Logo URLs

- **Nissan 2020 Flat Badge (Black, SVG -- transparent background)**:
  `https://upload.wikimedia.org/wikipedia/commons/2/23/Nissan_2020_logo.svg`
  (1000x837px, 2KB -- the circle-bar emblem + "NISSAN" wordmark, pure black fill, transparent bg)

- **Nissan 2020 Badge (SVG -- from CDN)**:
  `https://cdn.worldvectorlogo.com/logos/nissan-2020-logo.svg`

- **Nissan Motor Corporation Wordmark (Black, SVG)**:
  `https://upload.wikimedia.org/wikipedia/commons/a/a6/Nissan_Motor_Corporation_2020_logo.svg`
  (314x71px -- text-only "NISSAN MOTOR CORPORATION" wordmark)

- **Nissan CEG Mobile Logo (SVG)**:
  `https://cdn.prod.website-files.com/65d78ed0f211802309a86372/65d78ed0f211802309a867c1_mobile_logo.svg`

- **Nissan CEG Logo (PNG)**:
  `https://cdn.prod.website-files.com/65d78ed0f211802309a86372/65d78ed0f211802309a86716_nissan_logo.png`

- **Nissan SeekLogo (PNG, 2000x1673)**:
  `https://images.seeklogo.com/logo-png/38/1/nissan-2020-logo-png_seeklogo-383848.png`

### White / Light Version

The 2020 Nissan logo SVG is black fill on transparent background. For use on dark backgrounds, apply a CSS filter to invert:

```css
/* White logo on dark backgrounds */
.nissan-logo-white {
  filter: brightness(0) invert(1);
}
```

Or use the SVG directly and change the fill to `#FFFFFF` since it is a single-path SVG with no explicit fill attribute (defaults to currentColor/black).

### Logo Structure (2020 Rebrand)

The Nissan logo consists of two elements:
1. **Badge** -- A thin circular ring with a horizontal bar through the center (representing Japan's rising sun and horizon), containing "NISSAN" text centered in the bar
2. **Standalone Wordmark** -- "NISSAN" in custom uppercase geometric sans-serif with generous tracking

The 2020 redesign by Alfonso Albaisa (Senior VP of Global Design) transitioned from a 3D chrome-effect badge to a **flat, minimalist design** optimized for digital platforms and LED illumination on electric vehicles.

### Logo Variations

| Variation | Usage |
|-----------|-------|
| **Primary Badge (Black)** | Light backgrounds -- primary usage for web, print, digital |
| **Primary Badge (White)** | Dark backgrounds, photo overlays, hero sections |
| **Wordmark Only (Black)** | Small applications, nav bars, digital display when badge is too small |
| **Wordmark Only (White)** | Dark backgrounds, footer, nav overlay |
| **Badge on Red** | Exceptional use only -- Nissan Red background with white badge |
| **3D Illuminated** | Physical signage (not for web use) |
| **2D Illuminated** | Physical signage (not for web use) |

### Logo Usage Rules

- **NEVER fabricate, redraw, or approximate the Nissan logo.** Always use official SVGs.
- **Minimum size**: 56px width (digital), 14mm (print)
- **Clear space**: 1.5x the cap height of the "N" in NISSAN from all edges
- **Wordmark minimum width**: 50px -- deploy wordmark-only when space is 70px or smaller
- Only one logo per page/application
- Do NOT apply CSS filters to change logo color when an official variant exists
- Do NOT place the logo over busy patterns or gradients without sufficient contrast

---

## 2. Color Palette

### Primary Brand Colors

| Name | Hex | RGB | CMYK | Pantone | Usage |
|------|-----|-----|------|---------|-------|
| **Nissan Red** | `#C3002F` | rgb(195, 0, 47) | 5, 100, 80, 15 | 200 C | Signature accent. CTA buttons, active states, links, promotional badges. Used sparingly -- never as a dominant section color. |
| **Nissan Black** | `#000000` | rgb(0, 0, 0) | 0, 0, 0, 100 | Black 6 C | Navigation background, primary text, dark sections, footer |
| **Nissan White** | `#FFFFFF` | rgb(255, 255, 255) | 0, 0, 0, 0 | -- | Page background, text on dark, hero overlay text |
| **Nissan Light Gray** | `#EFEFEF` | rgb(239, 239, 239) | 0, 0, 0, 6 | Cool Grey 1 C | Alternating section backgrounds, card backgrounds, subtle dividers |

### Secondary / UI Colors (from nissanusa.com implementation)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Nissan Red (Hover)** | `#C51733` | rgb(197, 23, 51) | Button hover state, active link state |
| **Dark Gray** | `#363636` | rgb(54, 54, 54) | Active nav text, secondary headings |
| **Medium Gray** | `#58595B` | rgb(88, 89, 91) | Supporting text, disclaimers, labels |
| **Silver Gray** | `#C0C0C0` | rgb(192, 192, 192) | Default nav links, disabled states, borders |
| **Border Gray** | `#B9BABD` | rgb(185, 186, 189) | Card borders, subtle dividers |
| **Light Silver** | `#D8D9DB` | rgb(216, 217, 219) | Secondary borders, decorative elements |
| **Section Gray** | `#F5F5F5` | rgb(245, 245, 245) | Info section backgrounds |
| **Card Gray** | `#F1F1F1` | rgb(241, 241, 241) | Detail box backgrounds |
| **Off White** | `#F9F9F9` | rgb(249, 249, 249) | Subtle background tint |
| **Highlight Gray** | `#F3F4F4` | rgb(243, 244, 244) | Selected/highlight backgrounds |
| **Muted Text** | `#939598` | rgb(147, 149, 152) | Muted labels, timestamps |
| **Icon Gray** | `#A7A9AC` | rgb(167, 169, 172) | Icons, secondary elements |

### Color System Summary

```
Brand accent:    #C3002F (Nissan Red) --> #C51733 (hover)
Dark spectrum:   #000000 (Black) --> #363636 (Dark gray) --> #58595B (Medium gray) --> #939598 (Muted)
Mid spectrum:    #A7A9AC (Icon) --> #B9BABD (Border) --> #C0C0C0 (Silver) --> #D8D9DB (Light silver)
Light spectrum:  #EFEFEF (Light gray) --> #F1F1F1 (Card) --> #F3F4F4 (Highlight) --> #F5F5F5 (Section) --> #F9F9F9 (Off white) --> #FFFFFF (White)
```

### Color Usage Notes

- Nissan's palette is **primarily monochrome** -- black, white, and a rich spectrum of grays
- **Nissan Red** is a signature accent used sparingly for CTAs, active states, and brand emphasis
- The site avoids colored section backgrounds -- sections alternate between white and light gray
- Photography drives the color on the page; the UI stays neutral to let vehicle imagery dominate

---

## 3. Typography

### Official Typeface: Nissan Brand

**Nissan Brand** is a proprietary custom typeface designed to reflect "elegance, simplicity, readability and its ability to communicate both drama and a thoughtful intelligence." It is NOT publicly available on Google Fonts.

### Font Weights

| Weight | CSS Name | Usage |
|--------|----------|-------|
| **Light** | `'Nissan Brand Light'` | Refined messaging, secondary text, subtle treatments |
| **Regular** | `'Nissan Brand Regular'` | Body text, descriptions, general content |
| **Bold** | `'Nissan Brand Bold'` | Headlines, CTAs, navigation, emphasis |

### Legacy Web Font: Nissan AG

Older Nissan web properties also reference **NissanAG** (Nissan AG Bold) as a webfont:

```css
font-family: 'NissanBold', Arial, Helvetica, sans-serif;
```

### @font-face Declaration (if you have the font files)

```css
@font-face {
  font-family: 'Nissan Brand';
  src: url('NissanBrand-Light.woff2') format('woff2'),
       url('NissanBrand-Light.woff') format('woff'),
       url('NissanBrand-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Nissan Brand';
  src: url('NissanBrand-Regular.woff2') format('woff2'),
       url('NissanBrand-Regular.woff') format('woff'),
       url('NissanBrand-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Nissan Brand';
  src: url('NissanBrand-Bold.woff2') format('woff2'),
       url('NissanBrand-Bold.woff') format('woff'),
       url('NissanBrand-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### Nissan CEG Website Font: Montserrat

The official Nissan Brand CEG website (nissanbrandceg.com) uses **Montserrat** from Google Fonts with weights 100-900. This is the approved digital-facing font for brand communications.

### Dealer Template Fallback (Google Fonts)

Since Nissan Brand is proprietary, use this publicly available fallback for dealer templates:

```css
/* Primary: Montserrat (used on Nissan's own brand site) */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

**Montserrat** is the best public match because:
- Nissan's own CEG brand guidelines website uses it
- Clean geometric sans-serif with similar proportions to Nissan Brand
- Available in all needed weights (300-800)
- Free on Google Fonts

Alternative options: `Avenir` (commercial), `Gotham` (commercial), `Inter` (free, more humanist).

### Approved Local Language Fonts

| Language | Font Name |
|----------|-----------|
| Japanese | Morisawa Shingo |
| Chinese | Han Yi |
| Korean | Yoon Gothic 100 |
| Thai | PSL-DISPLAY |
| Arabic | AG Regular |

### Typography Scale (from nissanusa.com patterns)

| Element | Font Size (Mobile) | Font Size (Desktop) | Weight | Line Height | Color |
|---------|-------------------|---------------------|--------|-------------|-------|
| **H1 (Hero)** | 27px | 36-48px | 700 (Bold) | 1.1 | `#FFFFFF` (on photo) |
| **H2 (Section)** | 24px | 27px | 700 | 1.2 | `#000000` |
| **H3 (Card title)** | 18px | 19px | 700 | 1.3 | `#000000` |
| **Body** | 14px | 16px | 400 | 1.5 | `#363636` |
| **Small / Legal** | 11px | 12px | 400 | 1.5 | `#939598` |
| **Nav links** | 14px | 14px | 700 | -- | `#C0C0C0` / `#363636` active |
| **CTA button** | 14px | 14px | 700 | -- | `#FFFFFF` |

### Typesetting Rules

- **Headlines**: Bold weight, often uppercase for hero headlines
- **Body text**: Regular weight, sentence case
- **Numbers and model codes**: Always use Nissan Brand font (never fallback)
- **Max headline length**: Keep concise -- 5-7 words for hero headlines
- **Letter spacing**: Normal for body; generous tracking on uppercase headlines

---

## 4. Button Styles

### Primary CTA (Filled Red)

Nissan uses **Nissan Red filled buttons** as the primary CTA.

```css
.nissan-btn-primary {
  display: inline-block;
  background-color: #C3002F;
  color: #FFFFFF;
  font-family: 'Montserrat', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 14px 32px;
  border: none;
  border-radius: 0;                /* Nissan uses sharp/squared corners */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nissan-btn-primary:hover {
  background-color: #C51733;
}
```

### Secondary CTA (Filled Black)

```css
.nissan-btn-secondary {
  display: inline-block;
  background-color: #000000;
  color: #FFFFFF;
  font-family: 'Montserrat', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 14px 32px;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nissan-btn-secondary:hover {
  background-color: #363636;
}
```

### Outline CTA

```css
.nissan-btn-outline {
  display: inline-block;
  background-color: transparent;
  color: #000000;
  font-family: 'Montserrat', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 12px 30px;
  border: 2px solid #000000;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nissan-btn-outline:hover {
  background-color: #000000;
  color: #FFFFFF;
}
```

### On Dark Backgrounds

```css
.nissan-btn-primary-dark {
  background-color: #FFFFFF;
  color: #000000;
  border: none;
  border-radius: 0;
}

.nissan-btn-primary-dark:hover {
  background-color: #EFEFEF;
}

.nissan-btn-outline-dark {
  background-color: transparent;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 0;
}

.nissan-btn-outline-dark:hover {
  background-color: #FFFFFF;
  color: #000000;
}
```

### Text Link / Inline CTA

```css
.nissan-link {
  color: #C3002F;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.nissan-link:hover {
  color: #C51733;
  text-decoration: underline;
}
```

### Button Design Key Points

- **border-radius**: `0` -- Nissan uses **sharp, squared corners** on buttons (modern, architectural feel)
- **Text-transform**: `uppercase` -- buttons use all-caps text
- **Font weight**: 700 (Bold)
- **Letter-spacing**: 0.5px
- **Hover**: Background color shift (not opacity)
- **No box-shadow on buttons** -- flat, clean aesthetic

---

## 5. Navigation Pattern

### How nissanusa.com's Nav Works

- **Background**: White (`#FFFFFF`) with subtle bottom border
- **Text color**: `#C0C0C0` (silver gray) default, `#363636` (dark gray) active/hover
- **Active indicator**: 4px solid bottom border in `#C3002F` (Nissan Red)
- **Height**: ~70px
- **Position**: Sticky at top of viewport
- **Logo**: Nissan badge in black, left-aligned
- **Links**: "Vehicles", "Shopping Tools", "Electrification", "Owners", "Finance"
- **Font**: Bold, 14px
- **Style**: Clean and minimal, nav items spaced with comfortable padding

### Navigation CSS Pattern

```css
.nissan-nav {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #FFFFFF;
  border-bottom: 1px solid #EFEFEF;
  color: #000000;
  z-index: 1000;
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 40px;
}

.nissan-nav__logo {
  height: 40px;
  width: auto;
  margin-right: 48px;
}

.nissan-nav__links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}

.nissan-nav__link {
  color: #C0C0C0;
  font-family: 'Montserrat', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  text-transform: none;
  letter-spacing: normal;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 4px solid transparent;
  transition: all 0.2s ease;
}

.nissan-nav__link:hover {
  color: #363636;
}

.nissan-nav__link--active {
  color: #363636;
  border-bottom: 4px solid #C3002F;
}
```

### Mobile Navigation

- **Breakpoint**: 767px
- **Style**: Hamburger menu with slide-in sidebar from left
- **Sidebar transition**: `left .2s ease`
- **Header auto-hides**: Slides up (`top: -55px`) when scrolling down, reappears scrolling up
- **Scroll threshold**: 5px before triggering hide/show

---

## 6. Hero Treatment

### How nissanusa.com Does Heroes

- **Full-bleed photography**: Edge-to-edge vehicle images, vehicle is always the dominant visual
- **Text positioning**: Overlaid on image, typically left-aligned or centered
- **Text color**: Always white (`#FFFFFF`) on photo backgrounds
- **Gradient overlay**: Dark gradient from bottom for text readability
- **CTA placement**: Below headline, 1-2 buttons (primary red + outline white)
- **Height**: Large hero, near full viewport on desktop (~80-85vh)
- **Style**: Cinematic, dramatic lighting, vehicle showcased in aspirational setting

### Hero CSS Pattern

```css
.nissan-hero {
  position: relative;
  width: 100%;
  height: 85vh;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 80px 60px;
}

.nissan-hero__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.nissan-hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.3) 30%,
    transparent 60%
  );
  z-index: 1;
}

.nissan-hero__content {
  position: relative;
  z-index: 2;
  color: #FFFFFF;
  max-width: 600px;
}

.nissan-hero__title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 1px;
  margin-bottom: 12px;
  text-transform: uppercase;
}

.nissan-hero__subtitle {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 24px;
  opacity: 0.9;
  line-height: 1.4;
}

.nissan-hero__ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
```

### Hero Content Structure

```
[Title: "ALL-NEW ARIYA" -- 48px, bold, uppercase, white]
[Subtitle: "100% Electric. 100% Nissan." -- 18px, regular, white]
[CTA: "Build Yours" (filled white btn) | "Explore" (outline white btn)]
```

---

## 7. Card & Grid Patterns

### Vehicle Cards

```css
.nissan-card {
  background-color: #FFFFFF;
  border-radius: 0;                /* Sharp corners -- consistent with buttons */
  box-shadow: none;                /* Clean, flat -- no shadow by default */
  border: 1px solid #EFEFEF;       /* Subtle border for definition */
  padding: 0;
  transition: box-shadow 0.3s ease;
  overflow: hidden;
}

.nissan-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);  /* Subtle lift on hover */
}

.nissan-card__image {
  width: 100%;
  height: auto;
  display: block;
  background-color: #F5F5F5;       /* Placeholder bg while loading */
}

.nissan-card__body {
  padding: 20px 24px;
}

.nissan-card__name {
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 4px;
}

.nissan-card__price {
  font-size: 16px;
  font-weight: 600;
  color: #000000;
}

.nissan-card__price-label {
  font-size: 12px;
  color: #939598;
  font-weight: 400;
}

.nissan-card__link {
  color: #C3002F;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
  margin-top: 12px;
}

.nissan-card__link:hover {
  color: #C51733;
  text-decoration: underline;
}
```

### Card Grid Layout

```css
.nissan-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 40px;
}

@media (min-width: 768px) {
  .nissan-card-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .nissan-card-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (min-width: 1440px) {
  .nissan-card-grid { grid-template-columns: repeat(4, 1fr); }
}
```

### Key Card Design Points

- **border-radius**: `0` (sharp corners -- Nissan's architectural aesthetic)
- **box-shadow**: None by default, subtle on hover
- **Border**: `1px solid #EFEFEF` for card definition
- **Background**: `#FFFFFF` (pure white cards)
- **Hover**: Subtle shadow lift (`0 4px 16px rgba(0,0,0,0.1)`)
- **Image background**: `#F5F5F5` placeholder

---

## 8. Footer Pattern

### How nissanusa.com's Footer Works

- **Background**: Black (`#000000`)
- **Text color**: `#FFFFFF` (white) for links and headings
- **Legal text**: Muted gray
- **Structure**: Multi-column layout with link categories
- **Logo**: Nissan wordmark in white
- **Social**: Facebook, X (Twitter), Instagram, YouTube icons

### Footer CSS Pattern

```css
.nissan-footer {
  background-color: #000000;
  color: #FFFFFF;
  padding: 60px 40px 40px;
}

.nissan-footer__logo {
  height: 30px;
  margin-bottom: 32px;
  filter: brightness(0) invert(1);    /* White version of black logo */
}

.nissan-footer__columns {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-bottom: 40px;
}

.nissan-footer__heading {
  font-size: 14px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nissan-footer__link {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 8px;
  transition: color 0.2s ease;
}

.nissan-footer__link:hover {
  color: #FFFFFF;
}

.nissan-footer__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 32px 0;
}

.nissan-footer__legal {
  font-size: 11px;
  color: #939598;
  line-height: 1.6;
}

.nissan-footer__social {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.nissan-footer__social a {
  color: #FFFFFF;
  font-size: 18px;
  transition: opacity 0.2s ease;
}

.nissan-footer__social a:hover {
  opacity: 0.7;
}
```

---

## 9. Body / Page Background

- **Body background**: `#FFFFFF` (pure white)
- **Alternating sections**: `#F5F5F5` or `#EFEFEF` for visual separation between content blocks
- **Card/detail sections**: `#F1F1F1` slightly tinted backgrounds behind detailed panels
- **Off-white variant**: `#F9F9F9` for very subtle background tinting
- Nissan uses a **clean white body** with light gray sections for rhythm -- never tinted or colored backgrounds

---

## 10. Design Philosophy

### "Innovation That Excites"

Nissan's visual language projects **modern technological confidence** -- clean, precise, and forward-looking. The 2020 rebrand marked a shift from chrome-heavy 3D styling to flat, digital-first minimalism.

### Core Principles

1. **Vehicle-first**: The car is always the hero. Dramatic photography with cinematic lighting dominates every page. UI elements recede to let the product command attention.

2. **Black, white, and red**: The design system uses a monochrome backbone (black nav accents, white body, black footer) with Nissan Red (`#C3002F`) as a precise, sparing accent.

3. **Sharp and architectural**: Unlike brands that use rounded corners, Nissan uses `border-radius: 0` on buttons and cards -- creating a precise, modern, technology-forward aesthetic.

4. **Flat and clean**: No gradients on UI elements, no heavy shadows. The flat design language mirrors the 2020 logo rebrand philosophy. Surfaces are clean and defined by borders, not shadows.

5. **Gray sophistication**: Nissan employs a rich spectrum of grays (from `#F9F9F9` to `#363636`) to create depth and hierarchy without resorting to color. This gives the site a refined, premium-mainstream feel.

6. **Digital-native**: The entire brand system was rebuilt for digital-first -- from the flat logo optimized for screens to the typography designed for legibility at all sizes.

7. **Confident restraint**: The palette is deliberately limited. Color comes from photography, not from the UI. The interface stays neutral and lets the vehicles speak.

### Design Personality

- **Modern and technological** -- flat design, sharp edges, clean grids
- **Premium mainstream** -- not luxury-exclusive, not economy-basic
- **Confident and precise** -- Nissan Red is used with surgical precision, never splashed
- **Forward-looking** -- the flat logo, EV-ready branding, and minimal UI all point to the future
- **Japanese precision** -- clean lines, intentional whitespace, restrained palette

---

## 11. Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| **Mobile** | max-width: 767px | Single column, hamburger nav, stacked cards |
| **Tablet** | max-width: 991px | 2-column grids, condensed nav |
| **Desktop** | 992px+ | Full nav, 3-4 column grids, full hero |

---

## 12. DO's and DON'Ts

### DO's

- **DO** use `#C3002F` (Nissan Red) sparingly -- as a CTA accent, active state indicator, and link color only
- **DO** use `border-radius: 0` on buttons and cards -- Nissan is sharp-edged and architectural
- **DO** use `#000000` (true black) for footer, dark sections, and primary text
- **DO** use full-bleed vehicle photography with dark gradient overlays for heroes
- **DO** use Montserrat as the web fallback font (Nissan's own CEG site uses it)
- **DO** use the official Nissan 2020 flat badge SVG -- never the old 3D chrome version
- **DO** keep the palette monochrome with Nissan Red as the only color accent
- **DO** use `#F5F5F5` or `#EFEFEF` for alternating section backgrounds
- **DO** use uppercase text on buttons with 0.5px letter-spacing
- **DO** use the 4px red bottom border for active nav states

### DON'Ts

- **DON'T** make Nissan Red the dominant page color -- it is a surgical accent only
- **DON'T** use rounded corners on buttons or cards -- Nissan uses sharp `0` radius
- **DON'T** use heavy drop shadows -- Nissan is flat and clean
- **DON'T** use the old 3D chrome-effect Nissan logo -- always use the 2020 flat version
- **DON'T** use serif fonts -- Nissan's identity is exclusively sans-serif
- **DON'T** use colored section backgrounds (no red backgrounds, no blue) -- stay monochrome
- **DON'T** fabricate or approximate the Nissan logo -- use official SVGs only
- **DON'T** use Nissan Red for body text -- it is for interactive elements and accents only
- **DON'T** center-align body paragraphs -- use left-aligned body text, centered headings only

---

## Brand Tagline

"Innovation That Excites"

## Current Models (2025-2026)

Altima, Sentra, Versa, Maxima, LEAF, Ariya, Rogue, Rogue Sport, Murano, Pathfinder, Kicks, Armada, Frontier, Titan, TITAN XD, GT-R, Z, 400Z

## Vehicle Image Sources

Nissan vehicle images can be sourced from:
- nissanusa.com hero banners and vehicle pages
- Nissan media center: `https://usa.nissannews.com/`
- Vehicle configurator images (Build & Price tool)

---

## Quick Reference: Complete Template Skeleton

```css
/* === NISSAN DEALER TEMPLATE BASE STYLES === */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

:root {
  /* Brand */
  --nissan-red:           #C3002F;
  --nissan-red-hover:     #C51733;

  /* Core */
  --nissan-black:         #000000;
  --nissan-white:         #FFFFFF;
  --nissan-dark-gray:     #363636;
  --nissan-medium-gray:   #58595B;

  /* UI Grays */
  --nissan-body-bg:       #FFFFFF;
  --nissan-section-bg:    #F5F5F5;
  --nissan-section-bg-alt:#EFEFEF;
  --nissan-card-bg:       #F1F1F1;
  --nissan-border:        #EFEFEF;
  --nissan-silver:        #C0C0C0;
  --nissan-muted:         #939598;
  --nissan-off-white:     #F9F9F9;

  /* Typography */
  --nissan-font:          'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --nissan-font-size:     16px;

  /* Radius */
  --nissan-radius:        0;
}

body {
  font-family: var(--nissan-font);
  font-size: var(--nissan-font-size);
  color: var(--nissan-black);
  background-color: var(--nissan-body-bg);
  line-height: 1.5;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0;
}

/* Buttons: sharp corners, bold, uppercase */
button, .btn {
  border-radius: var(--nissan-radius);
  box-shadow: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Cards: sharp corners, flat, border-defined */
.card {
  border-radius: var(--nissan-radius);
  box-shadow: none;
  border: 1px solid var(--nissan-border);
  background-color: var(--nissan-white);
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

/* Links: Nissan Red */
a {
  color: var(--nissan-red);
}

a:hover {
  color: var(--nissan-red-hover);
}

/* Active nav state */
.nav-active {
  border-bottom: 4px solid var(--nissan-red);
}
```

---

## Compliance Checklist (for template review)

- [ ] Uses official Nissan 2020 flat badge SVG (not fabricated, not the old 3D logo)
- [ ] Navigation uses white background with subtle border, black logo, silver/dark gray text
- [ ] Active nav state uses 4px Nissan Red (`#C3002F`) bottom border
- [ ] Hero uses full-bleed vehicle photography with dark gradient overlay
- [ ] Hero text is white, uppercase headline
- [ ] All buttons and cards have `border-radius: 0` (sharp corners)
- [ ] Primary CTA buttons use Nissan Red (`#C3002F`)
- [ ] No box-shadows on cards by default (subtle shadow on hover only)
- [ ] Body background is `#FFFFFF` (pure white)
- [ ] Section alternation uses `#F5F5F5` or `#EFEFEF`
- [ ] Nissan Red used sparingly -- accent and CTA only, never dominant
- [ ] Montserrat font loaded with weights 300-800
- [ ] Footer uses `#000000` background with white text
- [ ] Button text is uppercase with 0.5px letter-spacing
- [ ] Links use `#C3002F` (Nissan Red) color
- [ ] No serif fonts anywhere
- [ ] No colored section backgrounds (stay monochrome)
- [ ] Logo clear space maintained (1.5x cap height of "N")

---

## Sources

- [Nissan Brand CEG - Brand Logos](https://www.nissanbrandceg.com/brand-foundations/nissan-brand-logos)
- [Nissan Brand CEG - Color Palette](https://www.nissanbrandceg.com/brand-foundations/color-palette)
- [Nissan Brand CEG - Brand Fonts](https://www.nissanbrandceg.com/brand-foundations/brand-fonts)
- [Nissan Brand CEG - Digital Display](https://www.nissanbrandceg.com/channel-guidelines/digital-display)
- [Nissan Brand Color Codes - BrandColorCode.com](https://www.brandcolorcode.com/nissan)
- [Nissan Motor Brand Colors - PickColorOnline](https://pickcoloronline.com/brands/nissan-motor/)
- [Nissan Logo Colors - CodeOfColors](https://www.codeofcolors.com/nissan-colors.html)
- [Nissan Color Palette - Color-Hex](https://www.color-hex.com/color-palette/1038233)
- [Nissan 2020 Logo SVG - Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Nissan_2020_logo.svg)
- [Nissan 2020 Logo SVG - WorldVectorLogo](https://worldvectorlogo.com/logo/nissan-2020-logo)
- [Nissan 2020 Logo - SeekLogo](https://seeklogo.com/vector-logo/383848/nissan-2020)
- [Nissan Logo History & Design - DesignYourWay](https://www.designyourway.net/blog/the-nissan-logo/)
- [Nissan Brand Font Info - FontsHub](https://fontshub.pro/font/nissan-brand-download)
- [What Font Does Nissan Use - Subframe](https://www.subframe.com/tips/what-font-does-nissan-use)
- [Nissan CSS Reference - GitHub](https://github.com/schiz/nissan/blob/master/css/styles2.less)
- [Nissan Brand Guidelines - BrandyHQ](https://brandyhq.com/brand-guidelines/nissan/)
- nissanusa.com (live analysis, March 2026)
