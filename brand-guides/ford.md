# Ford Brand Guide

> Sourced from live inspection of ford.com CSS files (header.css, base.css, footer.css, ford.css font declarations),
> forddemo.dealerinspire.com (DealerInspire OEM template), brandcolorcode.com, fontsinuse.com, Typotheque blog,
> and the official-fontface npm package. Colors extracted directly from ford.com production stylesheets (March 2026).
> This guide is used directly when building dealer website templates.

---

## 1. Official Logo

### Logo URLs

- **Blue Oval -- Dark Background Version** (white oval for dark nav/headers):
  `https://di-shared-assets.dealerinspire.com/public/logos/ford/ford-dark-no-space-desktop-logo.png`

- **Blue Oval -- Light Background Version** (blue oval for light backgrounds):
  `https://di-shared-assets.dealerinspire.com/public/logos/ford/ford-light-no-space-desktop-logo.png`

- **Blue Oval -- Dark Mobile**:
  `https://di-shared-assets.dealerinspire.com/public/logos/ford/ford-dark-no-space-mobile-logo.png`

- **Blue Oval -- Light Mobile**:
  `https://di-shared-assets.dealerinspire.com/public/logos/ford/ford-light-no-space-mobile-logo.png`

- **Ford.com Internal SVG** (referenced in header CSS, relative path -- not directly fetchable):
  `https://www.ford.com/etc.clientlibs/brand_ford/brand/clientlibs/syn/ford/resources/img/bri-icons/FordOval.svg`

- **OG Image (ford.com social share)**:
  `https://www.ford.com/acslibs/content/dam/na/ford/en_us/images/brand/Ford_OG_1200x630.png`

- **Wikimedia Commons SVG** (public domain, high-res vector):
  `https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg`

### Logo Structure

The Ford logo consists of:
1. **Blue Oval** -- the iconic oval shape with "Ford" in script
2. **Script wordmark** -- Spencerian script originally based on Henry Ford's signature, refined by Bob Noorda/Ralph Eckerstrom (Unimark International) in 1965

### Logo Variations

| Variation | Usage |
|-----------|-------|
| **Blue Oval (standard)** | Primary logo on white/light backgrounds |
| **White Oval** | On dark/navy backgrounds, hero overlays, dark headers |
| **Flat 2D Oval (2024+)** | Simplified, removed 3D chrome gradient -- flatter, darker blue |

### 2024 Logo Update

Ford updated the blue oval for 2024 (debuted on the F-150):
- Removed 3D shading/chrome gradients from the 2003 version
- Returned to a flat 2D aesthetic (closer to the classic 1960s version)
- White script replaced chrome lettering
- Blue background went **darker**

### Logo Usage Rules

- **NEVER fabricate, redraw, or approximate the Ford blue oval.** Always use official assets.
- The oval can stand alone without additional text -- it is universally recognized
- Minimum clear space: at least 50% of oval height on all sides
- For dealer templates, use the DealerInspire CDN logos (confirmed working, all 4 variants)
- Do NOT apply CSS filters to colorize the logo -- use the correct variant

---

## 2. Color Palette

### Primary Brand Colors (from ford.com CSS)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Ford Dark Navy** | `#00095B` | rgb(0, 9, 91) | Primary text color, nav links, icon fills, brand identity |
| **Ford Dark Blue** | `#102B4E` | rgb(16, 43, 78) | Button hover borders, carousel indicators, footer secondary bg |
| **Ford Midnight** | `#00142E` | rgb(0, 20, 46) | Deepest navy, used in flyout menus |
| **Ford Blue (Logo)** | `#003478` | rgb(0, 52, 120) | Official logo blue, Pantone 288 C |

### Interactive / UI Colors (from ford.com CSS)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Ford Accent Blue** | `#1700F4` | rgb(23, 0, 244) | Hover states, active nav underlines, link hover color |
| **Ford Action Blue** | `#0276B3` | rgb(2, 118, 179) | Legacy button fill, focus outlines, secondary links |
| **Ford CTA Blue** | `#0562D2` | rgb(5, 98, 210) | Header CTA buttons |
| **Ford Link Blue** | `#0068D0` | rgb(0, 104, 208) | Inline links, footer links |
| **Ford Sky Blue** | `#37A9E8` | rgb(55, 169, 232) | Light accent, footer secondary link text |
| **Ford Light Blue** | `#0093F0` | rgb(0, 147, 240) | Informational elements |
| **Ford Deeper Blue** | `#0142BD` | rgb(1, 66, 189) | Link states |
| **Ford Info Blue** | `#2096CD` | rgb(32, 150, 205) | Footer icons, info accents |

### Neutral Colors (from ford.com CSS)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Near Black** | `#010203` | rgb(1, 2, 3) | Body text, footer search text |
| **Dark Charcoal** | `#22292B` | rgb(34, 41, 43) | Card text, secondary headings |
| **Dark Gray** | `#333333` | rgb(51, 51, 51) | Footer search bar background |
| **Medium Gray** | `#5E5E5E` | rgb(94, 94, 94) | Muted text, focus states |
| **Text Gray** | `#4D4D4D` | rgb(77, 77, 77) | Dealer distance text, secondary nav text |
| **Slate** | `#485B65` | rgb(72, 91, 101) | Tertiary text, captions |
| **Gray** | `#6E6E6E` | rgb(110, 110, 110) | Disabled states, tertiary labels |
| **Silver** | `#9C9C9C` | rgb(156, 156, 156) | Footer dividers, light borders |
| **Light Gray** | `#B3B3B3` | rgb(179, 179, 179) | Subtle text |
| **Footer Link Gray** | `#A7A7A7` | rgb(167, 167, 167) | Footer navigation link text |

### Background Colors (from ford.com CSS)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Page background, navbar background, buttons |
| **Eyebrow Gray** | `#F2F2F2` | rgb(242, 242, 242) | Top eyebrow bar, alternating sections |
| **Light Section** | `#F7F7F7` | rgb(247, 247, 247) | Subtle section backgrounds |
| **Off White** | `#F5F5F5` | rgb(245, 245, 245) | Card backgrounds, input fields |
| **Border Gray** | `#E5E5E5` | rgb(229, 229, 229) | Card borders, dividers |
| **Light Border** | `#F0F0F0` | rgb(240, 240, 240) | Subtle borders |
| **Input Border** | `#DDDDDD` | rgb(221, 221, 221) | Form field borders |

### Footer Colors (from ford.com CSS)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Footer Search** | `#333333` | rgb(51, 51, 51) | Search bar section background |
| **Footer Main** | `#242424` | rgb(36, 36, 36) | Primary footer background |
| **Footer Secondary** | `#102B4E` | rgb(16, 43, 78) | Secondary footer (social + utilities) |
| **Footer Divider** | `#3A3A3A` | rgb(58, 58, 58) | Column heading borders |

### Alert / Status Colors (from ford.com CSS)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Alert Orange** | `#F26147` | rgb(242, 97, 71) | Warnings, notices |
| **Error Red** | `#D92E14` | rgb(217, 46, 20) | Error states |
| **Warning Amber** | `#E08700` | rgb(224, 135, 0) | Cautionary notices |
| **Notification Gold** | `#F0B537` | rgb(240, 181, 55) | Info badges |
| **Success Green** | `#008200` | rgb(0, 130, 0) | Confirmation states |

### Color System Summary
```
Brand identity:  #00095B (Ford Dark Navy) --> primary text + nav color on ford.com
Dark spectrum:   #00142E --> #00095B --> #102B4E --> #010203 --> #22292B --> #333 --> #5E5E5E
Interactive:     #1700F4 (Accent Blue / hover) --> #0562D2 (CTA) --> #0276B3 (Action) --> #0068D0 (Link)
Light blues:     #37A9E8 (Sky) --> #2096CD (Info) --> #0093F0 (Light)
Light spectrum:  #9C9C9C --> #B3B3B3 --> #DDD --> #E5E5E5 --> #F0F0F0 --> #F2F2F2 --> #F7F7F7 --> #FFF
Footer layers:   #333 (search) --> #242424 (main) --> #102B4E (secondary)
Logo blue:       #003478 (Pantone 288 C -- heritage logo fill)
```

---

## 3. Typography

### Current Typeface: FordMotion (Ford F1)

**FordMotion** is Ford's current primary digital typeface, commissioned from **Typotheque** (designed by Peter Biľak and team). It replaced the previous "Ford Antenna" on ford.com. The font was developed starting in 2019 and deployed to vehicles (HMI) in 2025-2026.

On ford.com, the font is loaded via `ford.css` with the following `@font-face` declarations:

```css
/* Primary font -- FordMotion */
@font-face {
    font-family: FordMotion;
    font-weight: 100 300;
    src: url(//www.ford.com/shared/fonts/f1/light.woff2) format("woff2");
}
@font-face {
    font-family: FordMotion;
    font-weight: 400;
    src: url(//www.ford.com/shared/fonts/f1/regular.woff2) format("woff2");
}
@font-face {
    font-family: FordMotion;
    font-weight: 500;
    src: url(//www.ford.com/shared/fonts/f1/medium.woff2) format("woff2");
}
@font-face {
    font-family: FordMotion;
    font-weight: 600;
    src: url(//www.ford.com/shared/fonts/f1/semibold.woff2) format("woff2");
}
@font-face {
    font-family: FordMotion;
    font-weight: 700 900;
    src: url(//www.ford.com/shared/fonts/f1/bold.woff2) format("woff2");
}

/* Alias -- FordFont (identical sources) */
@font-face { font-family: FordFont; /* same sources as FordMotion */ }

/* Legacy aliases used in base.css */
@font-face { font-family: 'FordF1'; src: url('...f1/regular.woff2'); }
@font-face { font-family: 'FordF1Bold'; src: url('...f1/bold.woff2'); }
@font-face { font-family: 'FordF1Lt'; src: url('...f1/light.woff2'); }
@font-face { font-family: 'FordF1SBold'; src: url('...f1/semibold.woff2'); }
```

### Font CDN URLs (ford.com hosted)

| Weight | URL |
|--------|-----|
| **Light (100-300)** | `https://www.ford.com/shared/fonts/f1/light.woff2` |
| **Regular (400)** | `https://www.ford.com/shared/fonts/f1/regular.woff2` |
| **Medium (500)** | `https://www.ford.com/shared/fonts/f1/medium.woff2` |
| **Semibold (600)** | `https://www.ford.com/shared/fonts/f1/semibold.woff2` |
| **Bold (700-900)** | `https://www.ford.com/shared/fonts/f1/bold.woff2` |

### Root Font Variable (from ford.com base.css)

```css
:root {
    --root__font-default: 'FordFont', Arial, sans-serif;
}
```

### Previous Typeface: Ford Antenna (2011-2023)

Ford Antenna was Ford's corporate typeface from 2011, originally Occupant Fonts' "Antenna" published by Font Bureau, distributed by Type Network. It has been replaced by FordMotion on ford.com but may still appear on some dealer sites.

**Ford Antenna weights (from official-fontface npm package):**

| Weight | Name | CSS Font Weight |
|--------|------|-----------------|
| Light | FordAntenna-Light | 300 |
| Regular | FordAntenna-Regular | 400 |
| Medium | FordAntenna-Medium | 500 |
| Semibold | FordAntenna-Semibold | 600 |
| Bold | FordAntenna-Bold | 700 |
| Black | FordAntenna-Black | 900 |
| Condensed Regular | FordAntennaCond-Regular | 400 |
| Condensed Medium | FordAntennaCond-Medium | 500 |
| Condensed Bold | FordAntennaCond-Bold | 700 |
| Compressed Black | FordAntennaComp-Black | 900 |

### Legacy Font Reference (found in ford.com button CSS)

```css
/* Legacy buttons still reference Antenna */
font-family: 'fordngbs-antenna-light', arial, sans-serif;
font-family: 'fordngbs-antenna-medium', 'fordngbs-antenna-re', arial, sans-serif;
```

### Licensing

FordMotion is **proprietary to Ford Motor Company**, commissioned from Typotheque. Not available for public purchase. Ford Antenna is licensed from Occupant Fonts/Type Network -- also not freely available.

### Dealer Template Fallback (Google Fonts)

Since FordMotion and Ford Antenna are proprietary, use this publicly available stack for dealer templates:

```css
/* Best match: clean, rounded sans-serif similar to FordMotion's character */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

font-family: 'Inter', Arial, sans-serif;
```

**Why Inter?** FordMotion is a clean, contemporary sans-serif with generous spacing and humanist proportions. Inter matches this character: it's highly legible, has a full weight range, excellent screen rendering, and a professional/modern feel that aligns with Ford's design direction.

**Alternative options:**
- `Barlow` (slightly more condensed, automotive feel)
- `Source Sans 3` (Adobe's open-source humanist sans)
- `DM Sans` (geometric, modern)

If you can load the actual Ford fonts (for authorized dealer use):
```css
font-family: 'FordMotion', 'FordFont', 'Ford Antenna Regular', Arial, sans-serif;
```

### Type Scale (from ford.com)

| Element | Font Size | Font Weight | Font Family |
|---------|-----------|-------------|-------------|
| **H1 (Hero)** | 36-48px | 700 (Bold) | FordMotion |
| **H2 (Section)** | 24-32px | 600-700 | FordMotion |
| **H3 (Subsection)** | 18-24px | 600 | FordMotion |
| **Body** | 16px (1rem) | 400 (Regular) | FordMotion |
| **Nav links** | 14-16px | 400-500 | FordMotion |
| **Eyebrow text** | 12px | 500 (Medium) | FordMotion |
| **Footer search input** | 24px | 200 (Light) | FordMotion |
| **Buttons** | 16px | 400 | Antenna (legacy) / FordMotion (new DS) |
| **Footer headings** | 16px | 700 | FordMotion |
| **Footer links** | 14px | 400 | FordMotion |

---

## 4. Navigation

### Structure (from ford.com)

Ford.com uses a **three-layer navigation**:

1. **Eyebrow Bar** (top): Light gray background (`#F2F2F2`), 40px height, contains "Ford" / "Lincoln" toggle, dealer locator, language selector
2. **Main Nav** (middle): White background (`#FFFFFF`), contains Ford oval logo + vehicle categories + utility links (search, account, saved items)
3. **Vehicle Mega Menu** (dropdown): Full-width flyout with vehicle images organized by type (SUVs, Trucks, Cars, Electric, etc.)

### Nav Styling

```css
/* Navbar */
background-color: #fff;           /* white background */
position: fixed;                   /* sticky at top */
z-index: 2001;                     /* above overlay */
box-shadow: 0 5px 5px rgba(0,0,0,0.2);  /* mobile shadow */

/* Eyebrow */
background-color: #f2f2f2;        /* light gray */
height: 40px;                      /* desktop */
color: #00095b;                    /* dark navy text */
font-family: 'fordngbs-antenna-medium', arial, sans-serif;

/* Nav text */
color: #00095b;                    /* dark navy */
hover color: #1700f4;              /* bright accent blue */
active underline: 2px solid #1700f4;  /* accent blue underline */

/* Hamburger lines (mobile) */
background: #00095b;               /* dark navy */
height: 2px;
border-radius: 2px;

/* Logo */
width: 80px;
height: 30px;
background-image: url('FordOval.svg');
```

---

## 5. Buttons

### New Design System (brand-ds-style, bri-style)

Ford.com has transitioned to a **pill-shaped button** design system:

```css
/* Primary Button (new DS) */
border-radius: 2rem;              /* pill shape */
min-height: 44px;
max-height: 44px;
background-color: #00095b;        /* Ford Dark Navy fill */
border: 1px solid #00095b;
color: #fff;                       /* white text */
font-family: FordMotion;
font-weight: 600;

/* Primary Button hover */
background-color: #fff;
color: #102b4e;
border: 1px solid #102b4e;

/* Primary Outline Button */
background-color: transparent;
border: 1px solid #00095b;
color: #00095b;

/* Secondary Button */
background-color: #fff;
border: 1px solid #0276b3;
color: #0276b3;
border-radius: 2rem;

/* Button - small variant */
border-radius: 1.25rem;
```

### Legacy Button System (still in production CSS)

```css
/* Legacy Primary */
background-color: #0276b3;        /* Ford Action Blue */
border: 1px solid #0276b3;
color: #fff;
border-radius: 0;                 /* square edges */
min-height: 50px;
width: 270px;
font-family: 'fordngbs-antenna-light', arial, sans-serif;
font-size: 16px;

/* Legacy Secondary */
background-color: #fff;
border: 1px solid #0276b3;
color: #0276b3;

/* Legacy Secondary Alt (ghost on dark) */
background-color: transparent;
border: 1px solid #fff;
color: #fff;

/* Hover (Ford brand) */
color: #102b4e;
background-color: #fff;
border: 1px solid #102b4e;
```

### Button Guidelines for Dealer Templates

- Use **pill-shaped buttons** (`border-radius: 2rem`) to match the current ford.com direction
- Primary fill: `#00095B` with white text
- Primary hover: white background, `#102B4E` text and border
- Secondary: white fill, `#0276B3` border and text
- All caps is NOT used on ford.com buttons -- use **sentence case** or **title case**
- Letter-spacing: `1px` on footer/utility CTAs

---

## 6. Hero Section

### Hero Treatment (from ford.com)

Ford.com uses **full-bleed hero images/video** with:
- Full-width carousel (Swiper.js)
- Image dimensions: 1800x675px (desktop), 15:16 ratio (mobile)
- Content overlaid on left or center, text on dark/photo backgrounds
- Dark gradient overlays on images for text legibility
- White text on dark overlays

### Gradient Overlay Pattern

```css
/* Common hero overlay for Ford dealer sites */
background: linear-gradient(135deg, #00095b 0%, #102b4e 40%, rgba(16,43,78,0.7) 100%);

/* Alternative: solid dark navy */
background: #00095b;

/* Existing ford-starter template gradient */
background: linear-gradient(135deg, #0a1628 0%, #0d2847 30%, #0071b2 70%, #004d7a 100%);
```

### Hero Text Styling

```css
color: #fff;
font-family: FordMotion;
font-weight: 700;
font-size: 42px;            /* desktop H1 */
text-shadow: 1px 1px 3px rgba(0,0,0,0.3);  /* subtle depth */
```

---

## 7. Cards

### Card Styling (from ford.com)

```css
/* Standard card */
background-color: #fff;
border: 1px solid #e5e5e5;
border-radius: 0;                 /* ford.com uses sharp corners on cards */
box-shadow: 0 1px 5px rgba(0,0,0,0.175);  /* subtle shadow */

/* Review card (existing ford-starter template -- good pattern) */
background: #fff;
box-shadow: 0 2px 8px rgba(0,0,0,0.08);
border-radius: 8px;               /* dealer templates can be slightly softer */
border-left: 3px solid #0276b3;   /* blue accent stripe */

/* Dropdown menus */
border-radius: 0;                 /* sharp corners */
box-shadow: 0 6px 12px rgba(0,0,0,0.175);
```

### Card Guidelines for Dealer Templates

- Ford.com itself uses **sharp corners** (`border-radius: 0`) on most cards
- For dealer templates, `border-radius: 4-8px` is acceptable for a friendlier feel
- Use subtle shadows: `box-shadow: 0 2px 8px rgba(0,0,0,0.08)`
- Left accent border in brand blue is a nice Ford-specific touch

---

## 8. Footer

### Footer Structure (from ford.com)

Ford.com footer has **three layers**:

1. **Search Section** (`#333333`): Full-width search bar, "Popular Searches" links
2. **Main Footer** (`#242424`): Multi-column navigation, column headings with top borders (`#3A3A3A`), white heading text, gray link text (`#A7A7A7`)
3. **Secondary Footer** (`#102B4E`): Social media icons, "Get Updates" CTA, utility links (white text, `#37A9E8` link color)

### Footer Styling

```css
/* Search section */
background-color: #333;
color: #010203;
font-family: FordMotion, arial, sans-serif;

/* Main footer */
background-color: #242424;
color: #a7a7a7;                    /* link text */
color: #fff;                       /* heading text */
font-size: 16px;                   /* heading size */
border-top: 1px solid #3a3a3a;     /* column heading borders */

/* Secondary footer */
background-color: #102b4e;
color: #fff;                       /* heading text */
link color: #37a9e8;               /* sky blue links */
icon color: #2096cd;               /* icons */

/* Social icons */
color: #fff;
width: 40px;
height: 40px;
```

---

## 9. Body & Page Background

### Background

```css
background-color: #fff;           /* pure white -- ford.com body background */
```

Ford.com uses **pure white** (`#FFFFFF`) as the page background. Section alternation uses `#F2F2F2` or `#F7F7F7` for contrast.

---

## 10. Overall Design Ethos

Ford.com projects:

- **Confident authority** -- dark navy (`#00095B`) dominates, conveying trust and American heritage
- **Clean and modern** -- white backgrounds, generous whitespace, minimal ornamentation
- **Bright, electric accents** -- the vivid accent blue (`#1700F4`) adds energy and modernity
- **Dual personality** -- the design bridges heritage (dark navy, oval logo) and future-forward (electric blue, pill buttons, FordMotion typeface)
- **Photography-led** -- hero sections are dominated by large, cinematic vehicle photography
- **Professional but accessible** -- not luxury-austere like Lincoln, not sporty like performance brands -- a middle ground of trustworthy capability

---

## 11. Existing ford-starter Template Assessment

The current template at `templates/ford-starter/` uses:

### What's Correct
- Ford Antenna font references (valid for legacy -- many dealer sites still use it)
- Footer dark background (`#282828` -- close to ford.com's `#242424`)
- White header background
- Blue primary navigation
- Green accent for CTA elements (dealer-specific, acceptable)

### What Needs Updating

| Property | Current | Should Be |
|----------|---------|-----------|
| **Primary color** | `#0071B2` | `#00095B` (Ford Dark Navy -- the actual ford.com primary) |
| **Nav background** | `#0071B2` (blue bar) | `#FFFFFF` (white -- ford.com uses white nav) |
| **Nav text color** | `#FFFFFF` (white) | `#00095B` (dark navy on white) |
| **Link color** | `#0678BC` | `#0068D0` or `#0276B3` |
| **Font family** | `'Ford Antenna Regular'` | `'FordMotion', 'FordFont', Arial, sans-serif` |
| **Heading font** | `'Ford Antenna Bold'` | `'FordMotion', Arial, sans-serif` (weight: 700) |
| **Button radius** | `0.25rem` (Bootstrap default) | `2rem` (pill) for primary CTAs |
| **Footer bg** | `#282828` | `#242424` |
| **Body color** | `#19183C` | `#010203` or `#22292B` |
| **Hover color** | Generic | `#1700F4` (Ford accent blue) |

### Recommended Updated CSS Variables

```css
:root {
    --header-bg: #ffffff;
    --nav-bg: #ffffff;
    --eyebrow-bg: #f2f2f2;
    --primary-color: #00095b;
    --secondary-color: #0276b3;
    --accent-color: #1700f4;
    --cta-color: #0562d2;
    --footer-bg: #242424;
    --footer-secondary-bg: #102b4e;
    --body-color: #010203;
    --link-color: #0068d0;
    --link-hover: #1700f4;
    --font-family: 'FordMotion', 'FordFont', Arial, sans-serif;
    --heading-font: 'FordMotion', 'FordFont', Arial, sans-serif;
    --border-color: #e5e5e5;
    --section-bg: #f2f2f2;
    --button-radius: 2rem;
}
```

---

## 12. Compliance Checklist

Before shipping a Ford dealer template, verify:

- [ ] Logo is from DealerInspire CDN or Wikimedia -- NEVER fabricated
- [ ] Primary text/nav color is `#00095B` (Ford Dark Navy)
- [ ] Accent hover color is `#1700F4` (bright blue)
- [ ] Buttons use `#00095B` fill with pill shape (`border-radius: 2rem`)
- [ ] Navigation is white background with dark navy text (not blue bar with white text)
- [ ] Font stack includes FordMotion or Inter fallback -- NOT generic Arial alone
- [ ] Footer uses dark layers: `#333` (search) / `#242424` (main) / `#102B4E` (secondary)
- [ ] Body background is `#FFFFFF` (pure white)
- [ ] No 3D chrome gradient logos -- use flat 2D oval
- [ ] Hero sections use dark overlay with white text
- [ ] All internal links use absolute paths (`/demo/{dealer-name}/...`)
