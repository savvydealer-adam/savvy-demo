# Chevrolet Brand Guide

> Sourced from live inspection of chevroletdemo.dealerinspire.com (DealerInspire OEM template), gmauthority.com (2024 rebrand coverage), Wikimedia Commons (2023 monochrome bowtie), brand color databases (brandcolorcode.com, codeofcolors.com, designyourway.net), font archives (cufonfonts.com, font.download), and the Logan Mills Walters Chevrolet 2024 redesign case study.
> chevrolet.com was fully down for maintenance during research (March 2026). Design details below combine the OEM dealer template, confirmed brand assets, and documented brand guidelines.
> This guide is used directly when building dealer website templates.

---

## 1. Official Logo

### Logo URLs

- **3D Gold Bowtie -- Dark Background Version** (for dark nav/header):
  `https://di-shared-assets.dealerinspire.com/public/logos/chevrolet/chevrolet-dark-desktop-logo.png`

- **3D Gold Bowtie -- Light Background Version** (for light backgrounds):
  `https://di-shared-assets.dealerinspire.com/public/logos/chevrolet/chevrolet-light-desktop-logo.png`

- **3D Gold Bowtie -- Dark Mobile**:
  `https://di-shared-assets.dealerinspire.com/public/logos/chevrolet/chevrolet-dark-mobile-logo.png`

- **3D Gold Bowtie -- Light Mobile**:
  `https://di-shared-assets.dealerinspire.com/public/logos/chevrolet/chevrolet-light-mobile-logo.png`

- **2D Monochrome Bowtie (2023+)** -- flat dark charcoal, current chevrolet.com style:
  `https://upload.wikimedia.org/wikipedia/commons/a/a8/Chevrolet_bowtie_2023.svg`
  - Color: `#262626` (dark charcoal/near-black)
  - ViewBox: `0 0 94 30`
  - Dimensions: 94x30

- **Simple Bowtie -- Black** (Wikimedia, 512x239):
  `https://upload.wikimedia.org/wikipedia/commons/5/55/Chevrolet_simple_logo.svg`

- **CDN Logo (3rd party vector)**:
  `https://static.cdnlogo.com/logos/c/75/chevrolet.svg`
  `https://cdn.worldvectorlogo.com/logos/chevrolet-logo.svg`

### Logo Structure

The Chevrolet logo consists of:
1. **Bowtie emblem** -- the iconic cross/bowtie shape (~2.5:1 aspect ratio)
2. **Wordmark** (optional) -- "CHEVROLET" text below or beside the bowtie

### Logo Variations

| Variation | Usage |
|-----------|-------|
| **3D Gold/Silver Bowtie** | Traditional dealer websites, premium/heritage contexts |
| **2D Monochrome Dark (#262626)** | Modern chevrolet.com (2024+ rebrand), clean/minimal contexts |
| **White Bowtie** | On dark backgrounds, overlays, hero sections |
| **Black Bowtie** | On light backgrounds, print applications |

### Logo Usage Rules

- **NEVER fabricate, redraw, or approximate the Chevrolet bowtie.** Always use official assets.
- The bowtie can stand alone (without wordmark) -- it is one of the most recognized logos in the world
- Minimum clear space around the bowtie: at least 50% of the bowtie height on all sides
- For dealer templates, prefer the 3D gold bowtie (DealerInspire CDN) for traditional feel, or the 2D monochrome for modern feel
- Do NOT apply CSS filters to colorize the logo -- use the correct variant

---

## 2. Color Palette

### Primary Brand Colors (Logo)

| Name | Hex | RGB | Pantone | Usage |
|------|-----|-----|---------|-------|
| **Chevrolet Gold** | `#D4AF37` | rgb(212, 175, 55) | 117 C | Bowtie primary fill, premium accent, heritage branding |
| **Logo Gold (Web)** | `#D1AD57` | rgb(209, 173, 87) | -- | Bowtie as rendered on web/screen |
| **Chrome Silver** | `#C0C0C0` | rgb(192, 192, 192) | 877 C (metallic) | Bowtie border/chrome accent |
| **Logo Gray** | `#9FA8A7` | rgb(159, 168, 167) | -- | Bowtie secondary/outline tone |
| **Black** | `#000000` | rgb(0, 0, 0) | Black C | Wordmark, text, backgrounds |

### Website / UI Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Charcoal (Monochrome Bowtie)** | `#262626` | rgb(38, 38, 38) | 2024+ monochrome bowtie, dark text |
| **Nav/Header Dark** | `#333333` | rgb(51, 51, 51) | Navigation background, dark UI elements |
| **Dark Text** | `#222222` | rgb(34, 34, 34) | Headings, primary body text |
| **Body Text** | `#333333` | rgb(51, 51, 51) | Standard body copy |
| **Title Text** | `#1A1A1A` | rgb(26, 26, 26) | Vehicle titles, prominent headings |
| **Link Blue** | `#0066CC` | rgb(0, 102, 204) | Hyperlinks, interactive elements |
| **Link Blue Hover** | `#0052A3` | rgb(0, 82, 163) | Link/button hover state |
| **CTA Blue** | `#1976D2` | rgb(25, 118, 210) | Informational accents, notices |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Page backgrounds, text on dark |
| **Light Gray Background** | `#F5F5F5` | rgb(245, 245, 245) | Alternating section backgrounds, filter panels |
| **Info Blue Background** | `#E3F2FD` | rgb(227, 242, 253) | Notice/info backgrounds |
| **Border Gray** | `#DDDDDD` | rgb(221, 221, 221) | Card borders, dividers |
| **Light Border** | `#E5E5E5` | rgb(229, 229, 229) | Subtle borders, separators |
| **Muted Gray** | `#999999` | rgb(153, 153, 153) | Disabled text, tertiary labels |
| **Footer Link Gray** | `#808080` | rgb(128, 128, 128) | Footer navigation links |
| **Footer Text Dark** | `#393839` | rgb(57, 56, 57) | Footer menu items |
| **Price Green** | `#2E7D32` | rgb(46, 125, 50) | Price display, savings callouts |
| **Alert Red** | `#F44336` | rgb(244, 67, 54) | Video play buttons, alerts, urgency elements |
| **GM Gold** | `#A87A25` | rgb(168, 122, 37) | GM corporate gold accent |

### Color System Summary
```
Brand accent:    #D4AF37 (Chevrolet Gold) --> used for bowtie + premium accents
Monochrome:      #262626 (Charcoal) --> modern bowtie, dark charcoal alternative to pure black
Dark spectrum:   #000000 (Black) --> #1A1A1A --> #222222 --> #333333 --> #808080 --> #999999
Light spectrum:  #C0C0C0 (Silver) --> #DDDDDD (Border) --> #E5E5E5 --> #F5F5F5 (Sections) --> #FFFFFF (White)
Interactive:     #0066CC (Blue) --> #0052A3 (Hover) --> #1976D2 (Info)
Status:          #2E7D32 (Price Green) | #F44336 (Alert Red)
```

---

## 3. Typography

### Official Typeface: Louis

**Louis** is a custom sans-serif typeface designed by **Rodrigo Cavazos** for General Motors / Chevrolet. Copyright 2011 GM. This is the primary brand typeface used across Chevrolet advertising, dealership materials, and web properties.

### Louis Font Weights

| Weight | Name | Usage |
|--------|------|-------|
| **Regular** | Louis Regular | Body text, standard copy, UI elements |
| **Regular Italic** | Louis Italic | Emphasis, quotes |
| **Bold** | Louis Bold | Subheadings, buttons, nav items |
| **Bold Italic** | Louis Bold Italic | Bold emphasis contexts |
| **Heavy** | Louis Heavy | Headlines, hero text, strong impact |
| **Heavy Italic** | Louis Heavy Italic | Headline emphasis |

### New Brand Typeface: Chevy Sans (2024+)

As part of the 2024 chevrolet.com redesign (designed by Logan Mills Walters), a new custom typeface called **Chevy Sans** was developed. Multiple weight variations exist. This is the successor/companion to Louis on chevrolet.com.

### GM Sans UI

GM also has a shared UI typeface called **GM Sans UI** (designed by URW++ Design & Development, 2014) used across GM digital products. Weights include Regular and Medium.

### Licensing

All three typefaces (Louis, Chevy Sans, GM Sans UI) are **proprietary to General Motors**. The license states: *"This font software may only be used by authorized agents and representatives of GM."*

### Font Stack (as found on DealerInspire OEM templates)

```css
/* DealerInspire Chevrolet dealer templates use system fonts */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

/* Fallback from Chevrolet OEM template */
font-family: "Open Sans", sans-serif;

/* Internal site builder */
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### Dealer Template Fallback (Google Fonts)

Since Louis and Chevy Sans are proprietary, use this publicly available stack for dealer templates:

```css
/* Best match for Louis: clean, geometric sans-serif with humanist character */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap');

font-family: 'Barlow', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

**Why Barlow?** Louis is a simplified, legible grotesque gothic. Barlow is a slightly rounded, low-contrast grotesk designed by Jeremy Tribby -- it shares Louis's approachable-yet-sturdy character, geometric proportions, and automotive feel. It is free on Google Fonts and supports full weight range.

**Alternative options:** `Montserrat` (more geometric), `Inter` (more neutral), `Roboto` (Android-native feel).

### Type Scale (from DealerInspire template)

| Element | Font Size | Font Weight | Color |
|---------|-----------|-------------|-------|
| **H1 (Hero)** | 36-48px | 700-800 | `#FFFFFF` (on dark/photo) or `#1A1A1A` |
| **H2 (Section)** | 24-30px | 700 | `#1A1A1A` |
| **H3 (Card Title)** | 18-20px | 700 | `#1A1A1A` |
| **H4 (Subtitle)** | 16px | 600 | `#333333` |
| **Body text** | 14-16px | 400 | `#333333` |
| **Nav items** | 14px | 500 | `#FFFFFF` |
| **Price** | 18-20px | 700 | `#2E7D32` |
| **CTA button text** | 14px | 600 | `#FFFFFF` |
| **Footer links** | 13px | 400 | `#808080` |

---

## 4. Button Styles

### Primary CTA (Filled Blue)

```css
.chevy-btn-primary {
  display: inline-block;
  background-color: #0066CC;
  color: #FFFFFF;
  font-family: 'Barlow', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.chevy-btn-primary:hover {
  background-color: #0052A3;
}
```

### Secondary CTA (Outline)

```css
.chevy-btn-secondary {
  display: inline-block;
  background-color: transparent;
  color: #333333;
  font-family: 'Barlow', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid #333333;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.chevy-btn-secondary:hover {
  background-color: #333333;
  color: #FFFFFF;
}
```

### Gold Accent CTA (Premium / Heritage)

```css
.chevy-btn-gold {
  display: inline-block;
  background-color: #D4AF37;
  color: #FFFFFF;
  font-family: 'Barlow', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.chevy-btn-gold:hover {
  background-color: #B8941F;
}
```

### On Dark Backgrounds

```css
.chevy-btn-primary-dark {
  background-color: #FFFFFF;
  color: #000000;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
}

.chevy-btn-primary-dark:hover {
  opacity: 0.85;
}

.chevy-btn-secondary-dark {
  background-color: transparent;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
}

.chevy-btn-secondary-dark:hover {
  background-color: #FFFFFF;
  color: #000000;
}
```

### Button Design Key Points
- **border-radius**: `5px` (slightly rounded -- Chevrolet is a mainstream brand, not ultramodern pill shapes)
- **Font weight**: 600 (Semibold)
- **Text-transform**: `uppercase` (Chevrolet buttons typically use uppercase text)
- **Letter-spacing**: `0.3px`
- **Hover**: Background color shift or opacity change
- **No heavy box-shadows on buttons** -- clean and flat

---

## 5. Navigation Pattern

### How DealerInspire Chevrolet Nav Works

- **Background**: Dark -- `#333333` or near-black
- **Text color**: `#FFFFFF` (White)
- **Logo**: Chevrolet bowtie (gold 3D or monochrome) positioned left
- **Nav SVG icon fill**: `rgba(255, 255, 255, 1.00)` (pure white)
- **Active state**: `background: #333333`
- **Position**: Standard header (not fixed by default on DI templates)
- **Height**: Standard desktop nav (~60-80px) with mobile collapse at 767px
- **Links**: New, Pre-Owned, Service, Finance, Specials, About Us
- **Phone numbers**: Prominently displayed -- Sales + Service numbers visible
- **Mobile**: Hamburger menu with slide-in panel

### Navigation CSS Pattern

```css
.chevy-nav {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333333;
  color: #FFFFFF;
  z-index: 1000;
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 24px;
}

.chevy-nav__logo {
  height: 40px;
  width: auto;
  margin-right: 32px;
}

.chevy-nav__links {
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.chevy-nav__link {
  color: #FFFFFF;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: opacity 0.2s ease;
}

.chevy-nav__link:hover {
  opacity: 0.7;
}

.chevy-nav__phone {
  margin-left: auto;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
}
```

---

## 6. Hero Treatment

### How Chevrolet Does Heroes

- **Full-bleed photography**: Edge-to-edge hero images featuring vehicles
- **Slider/Carousel**: Swiper-based carousel with 5-second auto-play
- **Vehicle-centric**: The vehicle is always the dominant visual element
- **Dark overlay**: `rgba(0, 0, 0, 0.5)` gradient over images for text readability
- **Text positioning**: Flex-centered with `.diSliderContent`
- **Text color**: Always white (`#FFFFFF`) on photo backgrounds
- **CTA buttons**: Scale transform on mobile (`transform: scale(0.8)`)
- **Hero image dimensions**: 1800x760px desktop, 600x400px mobile

### Hero CSS Pattern

```css
.chevy-hero {
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 450px;
  max-height: 760px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.chevy-hero__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.chevy-hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 1;
}

.chevy-hero__content {
  position: relative;
  z-index: 2;
  color: #FFFFFF;
  max-width: 800px;
  padding: 40px 24px;
}

.chevy-hero__title {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
  text-transform: uppercase;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.chevy-hero__subtitle {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 24px;
  opacity: 0.9;
}

@media (max-width: 767px) {
  .chevy-hero__title { font-size: 28px; }
  .chevy-hero__subtitle { font-size: 14px; }
  .chevy-hero .chevy-btn-primary { transform: scale(0.8); }
}
```

### Hero Image CDN (DealerInspire)
```
https://di-uploads-pod24.dealerinspire.com/chevydemo/uploads/
```

---

## 7. Card & Grid Patterns

### Vehicle Cards

```css
.chevy-card {
  background-color: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  transition: box-shadow 0.3s ease;
  overflow: hidden;
}

.chevy-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.chevy-card__image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 12px;
}

.chevy-card__title {
  font-size: 1.2em;
  font-weight: 700;
  color: #1A1A1A;
  text-decoration: none;
  margin-bottom: 8px;
}

.chevy-card__title:hover {
  color: #0066CC;
}

.chevy-card__price {
  font-size: 1.3em;
  font-weight: 700;
  color: #2E7D32;
}

.chevy-card__details {
  font-size: 14px;
  color: #666666;
  margin-bottom: 12px;
}
```

### Filter Panel

```css
.chevy-filters {
  padding: 15px;
  border-radius: 8px;
  background: #F5F5F5;
  margin-bottom: 20px;
}

.chevy-notice {
  padding: 15px;
  border-radius: 8px;
  background: #E3F2FD;
  border-left: 4px solid #1976D2;
  margin-bottom: 15px;
}
```

### Card Grid Layout

```css
.chevy-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 24px;
}

@media (min-width: 768px) {
  .chevy-card-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .chevy-card-grid { grid-template-columns: repeat(3, 1fr); }
}
```

### Key Card Design Points
- **border-radius**: `8px` (cards) -- slightly more rounded than buttons (5px)
- **border**: `1px solid #DDDDDD` -- Chevrolet uses bordered cards, not shadow-only
- **box-shadow**: None by default, subtle shadow on hover
- **Background**: `#FFFFFF` (white cards on white or light gray sections)
- **Hover**: Shadow appears + title color shifts to link blue

---

## 8. Footer Pattern

### How Chevrolet Dealer Footers Work

- **Background**: Neutral/dark (varies by template -- typically `#333333` or `#222222`)
- **Text color**: Gray tones for links (`#808080`), darker for labels (`#393839`)
- **Logo**: Chevrolet bowtie in appropriate contrast version
- **Structure**: Multi-column layout with link categories:
  - Inventory (New/Used vehicles, specials)
  - Service (Department, scheduling, parts)
  - About (Contact, testimonials, careers)
- **Copyright**: Dealership name + year
- **Branding**: "Together Let's Drive" dealership branding element
- **Social icons**: White on dark background
- **Legal**: Privacy Policy, Contact, Sitemap links

### Footer CSS Pattern

```css
.chevy-footer {
  background-color: #222222;
  color: #CCCCCC;
  padding: 48px 24px 32px;
}

.chevy-footer__columns {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-bottom: 32px;
}

.chevy-footer__heading {
  font-size: 14px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.chevy-footer__link {
  display: block;
  color: #808080;
  font-size: 13px;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 8px;
  transition: color 0.2s ease;
}

.chevy-footer__link:hover {
  color: #FFFFFF;
}

.chevy-footer__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 24px 0;
}

.chevy-footer__legal {
  font-size: 11px;
  color: #666666;
  line-height: 1.6;
}

.chevy-footer__social {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.chevy-footer__social a {
  color: #FFFFFF;
  font-size: 18px;
  transition: opacity 0.2s;
}

.chevy-footer__social a:hover {
  opacity: 0.7;
}

@media (max-width: 767px) {
  .chevy-footer__columns {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## 9. Body / Page Background

- **Body background**: `#FFFFFF` (pure white) -- Chevrolet uses a clean white body
- **Alternating sections**: `#F5F5F5` (very light gray) for visual separation between content blocks
- **Filter/tool sections**: `#F5F5F5` background
- **Info notices**: `#E3F2FD` (light blue tint) with `#1976D2` left border
- Chevrolet does NOT use a tinted body background -- the base is pure white with light gray sections for rhythm

---

## 10. Design Philosophy

### "Find New Roads"

Chevrolet's visual language projects **American confidence and approachability** -- it is trustworthy mainstream, bold but not aggressive, modern but not avant-garde. The design ethos can be summarized as:

### Core Principles

1. **Vehicle-first**: The car/truck is always the hero. Large photography dominates hero sections. The bowtie takes a supporting role -- the vehicles sell themselves.

2. **Dark and authoritative nav**: Dark navigation header (#333) creates a strong visual anchor. White text and icons on dark backgrounds feel premium without being luxury.

3. **Gold as heritage accent**: The Chevrolet Gold (#D4AF37) is the brand's signature -- used in the bowtie and sparingly as an accent. It connotes quality, tradition, and American craftsmanship.

4. **Modern simplification**: The 2024 rebrand moved toward a 2D monochrome bowtie (#262626) and the custom Chevy Sans typeface -- signaling a shift toward cleaner, more digital-native design.

5. **Blue for interaction**: Interactive elements (links, CTAs) use a clean blue (#0066CC) that feels reliable and trustworthy -- reminiscent of American industrial design.

6. **Slightly rounded, never sharp**: `5px` radius on buttons, `8px` on cards. Friendly but not playful. This positions Chevrolet between the sharp edges of luxury brands and the pill shapes of tech companies.

7. **Functional clarity**: Navigation is straightforward with clear categories. Phone numbers are prominently displayed. The user always knows how to take the next action.

8. **Price in green**: Vehicle pricing uses green (#2E7D32) to convey value and positive action -- a common automotive convention that Chevrolet embraces.

### Design Personality
- **American mainstream** -- not luxury, not economy
- **Trustworthy and strong** -- dark nav, bold typography, gold heritage
- **Modern but grounded** -- clean layouts with traditional automotive conventions
- **Approachable** -- rounded corners, readable type, clear CTAs
- **Value-conscious** -- green pricing, prominent specials/offers

---

## 11. DO's and DON'Ts

### DO's
- **DO** use `#333333` (dark charcoal) for navigation background -- Chevrolet uses dark but not pure black
- **DO** use Chevrolet Gold (`#D4AF37`) sparingly -- as an accent, in the bowtie, not as a section background
- **DO** use `#0066CC` (blue) for interactive elements, links, and primary CTAs
- **DO** use `5px` border-radius on buttons and `8px` on cards
- **DO** use full-bleed vehicle photography for hero sections with dark overlay
- **DO** use the official bowtie logo from DealerInspire CDN or Wikimedia -- never fabricate
- **DO** use `#F5F5F5` for alternating section backgrounds
- **DO** display phone numbers prominently in the header
- **DO** use green (`#2E7D32`) for pricing
- **DO** use `uppercase` text-transform on buttons and nav items
- **DO** use Barlow as the web fallback font (closest match to Louis's character)

### DON'Ts
- **DON'T** use Chevrolet Gold as a dominant section color -- it is a heritage accent only
- **DON'T** use pure black (`#000000`) for the nav background -- Chevrolet uses `#333333` (softer)
- **DON'T** use pill-shaped buttons (`border-radius: 9999px`) -- not Chevrolet's style
- **DON'T** use serif fonts -- Chevrolet's identity is exclusively sans-serif
- **DON'T** use heavy drop shadows -- Chevrolet's design is clean with subtle borders
- **DON'T** fabricate, trace, or approximate the Chevrolet bowtie in any way
- **DON'T** use colored section backgrounds (no blue, red, or gold backgrounds) -- stay neutral
- **DON'T** neglect the phone number display -- dealer customers expect prominent contact info
- **DON'T** use a light/transparent nav -- Chevrolet dealer sites use solid dark navigation

---

## Brand Tagline
"Find New Roads"

## Current Models (2025-2026)
Silverado 1500, Silverado HD, Colorado, Equinox, Equinox EV, Blazer, Blazer EV, Traverse, Trax, Trailblazer, Tahoe, Suburban, Camaro, Corvette, Corvette E-Ray, Malibu, Bolt EV, Bolt EUV, Express

## Vehicle Image CDN (DealerInspire)
```
https://di-uploads-pod24.dealerinspire.com/chevydemo/uploads/
```

---

## Quick Reference: Complete Template Skeleton

```css
/* === CHEVROLET DEALER TEMPLATE BASE STYLES === */

@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap');

:root {
  /* Brand Heritage */
  --chevy-gold:          #D4AF37;
  --chevy-gold-hover:    #B8941F;
  --chevy-silver:        #C0C0C0;

  /* Core */
  --chevy-black:         #000000;
  --chevy-charcoal:      #262626;
  --chevy-dark:          #333333;
  --chevy-white:         #FFFFFF;

  /* Text */
  --chevy-title:         #1A1A1A;
  --chevy-body:          #333333;
  --chevy-muted:         #666666;
  --chevy-disabled:      #999999;

  /* Interactive */
  --chevy-blue:          #0066CC;
  --chevy-blue-hover:    #0052A3;
  --chevy-info:          #1976D2;

  /* Status */
  --chevy-price:         #2E7D32;
  --chevy-alert:         #F44336;

  /* UI Grays */
  --chevy-body-bg:       #FFFFFF;
  --chevy-section-bg:    #F5F5F5;
  --chevy-info-bg:       #E3F2FD;
  --chevy-border:        #DDDDDD;
  --chevy-border-light:  #E5E5E5;

  /* Footer */
  --chevy-footer-bg:     #222222;
  --chevy-footer-link:   #808080;
  --chevy-footer-text:   #393839;

  /* Typography */
  --chevy-font:          'Barlow', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --chevy-font-size:     14px;

  /* Radius */
  --chevy-radius-btn:    5px;
  --chevy-radius-card:   8px;
}

body {
  font-family: var(--chevy-font);
  font-size: var(--chevy-font-size);
  color: var(--chevy-body);
  background-color: var(--chevy-body-bg);
  line-height: 1.6;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--chevy-title);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 0.3px;
}

a {
  color: var(--chevy-blue);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--chevy-blue-hover);
}

/* Buttons: 5px border-radius, uppercase, clean */
button, .btn {
  border-radius: var(--chevy-radius-btn);
  box-shadow: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

/* Cards: 8px radius, bordered */
.card {
  border-radius: var(--chevy-radius-card);
  border: 1px solid var(--chevy-border);
  background-color: var(--chevy-white);
}
```

---

## Compliance Checklist (for template review)

- [ ] Uses official Chevrolet bowtie logo (not fabricated)
- [ ] Navigation is `#333333` background with white text
- [ ] Phone number(s) visible in header
- [ ] Hero uses full-bleed vehicle photography with dark gradient overlay
- [ ] Hero text is white, bold, on dark overlay
- [ ] Buttons have `border-radius: 5px` and `text-transform: uppercase`
- [ ] Cards have `border-radius: 8px` with `1px solid #DDDDDD` border
- [ ] Body background is `#FFFFFF` (pure white)
- [ ] Section alternation uses `#F5F5F5`
- [ ] Chevrolet Gold (`#D4AF37`) used only as accent, not dominant
- [ ] Interactive elements use `#0066CC` blue
- [ ] Barlow font loaded with weights 300-800
- [ ] Footer uses `#222222` background with `#808080` link color
- [ ] Pricing displayed in green (`#2E7D32`)
- [ ] No serif fonts anywhere
- [ ] No colored section backgrounds (stay neutral white/gray)
- [ ] Logo clear space maintained

---

## Sources

- [DealerInspire Chevrolet Demo](https://www.chevroletdemo.dealerinspire.com/) -- live OEM template inspection
- [DealerInspire Site Builder Internal](https://sitebuilderinternal.dealerinspire.com/) -- CSS framework details
- [GM Authority - Chevrolet Website Gets New 2D Monochrome Bow Tie (Jan 2024)](https://gmauthority.com/blog/2024/01/chevrolet-website-gets-new-2d-monochrome-bow-tie/)
- [Logan Mills Walters - Chevrolet Redesign 2024](http://www.loganmillswalters.com/chevrolet-redesign-2024) -- Chevy Sans, Figma libraries
- [Chevrolet Bowtie 2023 SVG - Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chevrolet_bowtie_2023.svg)
- [Louis Font - CufonFonts](https://www.cufonfonts.com/font/louis) -- weight catalog, designer credit
- [Louis Font - Font.Download](https://font.download/font/louis) -- weight catalog
- [Chevrolet Logo Colors - CodeOfColors](https://www.codeofcolors.com/chevrolet-colors.html) -- #D1AD57, #9FA8A7, #000000
- [Chevrolet Brand Color - BrandColorCode](https://www.brandcolorcode.com/chevrolet) -- #363636
- [Chevrolet Logo History, Colors, Font - DesignYourWay](https://www.designyourway.net/blog/the-chevrolet-logo/) -- #D4AF37, #C0C0C0, Pantone codes
- [GM Gold - Encycolorpedia](https://encycolorpedia.com/a87a25) -- #A87A25
- [Chevrolet Simple Logo SVG - Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chevrolet_simple_logo.svg)
- [CDN Logo - Chevrolet SVG](https://cdnlogo.com/logo/chevrolet_8164.html)
- [DaFont Forum - Chevrolet Font ID](https://www.dafont.com/forum/read/207662/could-someone-tell-me-what-font-chevrolet-is-please)
