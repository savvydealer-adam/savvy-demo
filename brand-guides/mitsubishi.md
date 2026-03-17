# Mitsubishi Motors Brand Guide

**Source:** MMNA (Mitsubishi Motors North America) dealer compliance guidelines, mitsubishicars.com, Kontrapunkt 2018 rebrand.

---

## Typography

### Official Typeface: MMC (Mitsubishi Motors Corporation)
Custom typeface designed by **Kontrapunkt** (2018 global rebrand). Copyright Mitsubishi Motors Corporation.

| Weight | Font Family | CDN Source |
|--------|-------------|------------|
| Regular (400) | `MMC` / `MMC OFFICE` | `https://fonts.cdnfonts.com/css/mmc` |
| Medium (500) | `MMC` / `MMC OFFICE` | Same CDN or self-hosted |
| Bold (700) | `MMC` / `MMC OFFICE` | Same CDN or self-hosted |

**Implementation:**
```html
<link href="https://fonts.cdnfonts.com/css/mmc" rel="stylesheet" />
```

```css
body {
    font-family: 'MMC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

**Rules:**
- Use MMC for ALL text on Mitsubishi dealer sites (body, headings, nav, buttons)
- Do NOT substitute with Barlow, Arial, Helvetica, or other fonts
- Historical reference: Pre-2018 sites used Avant Garde Gothic Condensed (no longer current)

### Official Font Files (Mitsubishi CDN)
- `https://www.mitsubishicars.com/content/dam/mitsubishi-motors/fonts/MMC-Regular.woff2`
- `https://www.mitsubishicars.com/content/dam/mitsubishi-motors/fonts/MMC-Medium.woff2`
- `https://www.mitsubishicars.com/content/dam/mitsubishi-motors/fonts/MMC-Bold.woff2`

### Dealer Site Variant (MMC OFFICE)
Dealer platform sites use `MMC OFFICE` with the same weights. Available at:
- `/Content/fonts/MMCOFFICE-Regular.woff2`
- `/Content/fonts/MMCOFFICE-Medium.woff2`
- `/Content/fonts/MMCOFFICE-Bold.woff2`

---

## Colors

### Primary Brand Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Mitsubishi Red** (logo) | `#ED0000` | (237, 0, 0) | Three-diamond mark, primary brand color |
| **Black** | `#000000` | (0, 0, 0) | Text, backgrounds |
| **White** | `#FFFFFF` | (255, 255, 255) | Backgrounds, reverse text |

### Secondary / UI Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **UI Red** (headers/CTAs) | `#BC0600` | (188, 6, 0) | Header backgrounds, buttons, accents |
| **Body Text** | `#19183C` | (25, 24, 60) | Primary body text color |
| **Link Blue** | `#0678BC` | (6, 120, 188) | Hyperlinks, vehicle titles on SRP |
| **Final Price Green** | `#30770F` | (48, 119, 15) | Selling price on inventory cards |
| **Light Gray** | `#E2E5E6` | (226, 229, 230) | Borders, dividers |
| **Medium Gray** | `#BFC2C3` | (191, 194, 195) | Secondary borders |
| **Dark Gray** | `#696D71` | (105, 109, 113) | Muted text, labels |
| **Footer Dark** | `#282828` | (40, 40, 40) | Footer background |

### CSS Variables Template
```css
:root {
    --red: #ED0000;          /* Logo/brand red */
    --red-ui: #BC0600;       /* UI elements (headers, buttons) */
    --black: #000000;
    --white: #FFFFFF;
    --body-text: #19183C;
    --link-blue: #0678BC;
    --price-green: #30770F;
    --gray-light: #E2E5E6;
    --gray-medium: #BFC2C3;
    --gray-dark: #696D71;
    --footer-bg: #282828;
}
```

---

## Logo: Three-Diamond Mark

### Official SVG (from mitsubishicars.com)
```xml
<svg viewBox="0 0 75 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon fill="#ED0000" points="37.34,0.19 30.35,12.32 37.34,24.44 44.33,12.32"/>
    <polygon fill="#ED0000" points="37.34,24.44 51.31,24.44 58.30,36.56 44.33,36.56"/>
    <polygon fill="#ED0000" points="37.34,24.44 23.36,24.44 16.37,36.56 30.35,36.56"/>
</svg>
```

### Full Logo with Wordmark (Nav Logo)
- Light variant: `https://www.mitsubishicars.com/content/dam/mitsubishi-motors/images/logos/nav-logo-light.svg`
- Dark variant: `https://www.mitsubishicars.com/content/dam/mitsubishi-motors/images/logos/nav-logo-black.svg`

### Logo Usage Rules (MMNA Compliance)

1. **Isolation Space:** 40% of the three-diamond height must be maintained on ALL sides
2. **Background:** Must be on a plain, solid color background -- NO graphics, patterns, or gradients behind it
3. **No intrusion:** No design elements may be placed within the isolation space
4. **No distortion:** Must not be stretched, rotated, recolored, or modified in any way
5. **Color:** Only `#ED0000` (red on light backgrounds) or `#FFFFFF` (white on dark backgrounds)

### Dealer Name (DBA) Display Rules

1. Must use the **required MMC font**
2. Must display the **full DBA** of the dealership
3. May be one or two lines (side-by-side or stacked)
4. Must be "in series" -- single font style, same color, same case
5. **No borders, patterns, or 3D effects** on the dealer name
6. Isolation space of 40% around the DBA
7. A **hyphen** should separate dealer name from location (e.g., "Sendell Mitsubishi - Greensburg")

### Dealer Custom Logo Rules

1. Custom dealer logos ARE permitted in the header
2. The dealer logo **MAY NOT contain** the word "MITSUBISHI" or the three-diamond mark
3. Isolation space of 40% around the dealer logo

---

## Vehicle Images

### Official Model Images (mitsubishicars.com CDN)

**Side Profile / "Jellybean" Images (960x420, transparent background):**

| Model | URL |
|-------|-----|
| 2026 Outlander | `https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/cars/outlander/2026/primary/hero/OTL-SE-white-diamond-jellybean.png` |
| 2025 Outlander PHEV | `https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/cars/outlander-phev/2025/primary/hero/2025-PHEV-SEL-Premium-graphite.png` |
| 2026 Eclipse Cross | `https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/cars/eclipse-cross/2026/primary/hero/2025-2026-mitsubishi-eclipse-cross-es-red-diamond-side-profile.png` |
| 2026 Outlander Sport | `https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/cars/outlander-sport/2026/primary/hero/W85_0_26OTL-Sport-03-side.png` |

**Hero / Lifestyle Images (high-res):**

| Model | URL | Dimensions |
|-------|-----|------------|
| 2026 Outlander | `.../siteimages/cars/outlander/my26/pfa/2026-mitsubishi-outlander-white-d.jpg` | 3840x2200 |
| 2026 Eclipse Cross | `.../siteimages/cars/eclipse-cross/my26/2026-mitsubishi-eclipse-cross-red-driving-d.jpg` | 3840x2561 |
| 2026 Outlander Sport | `.../siteimages/cars/outlander-sport/my26/pfa/2026-mitsubishi-outlander-sport-suv-d.jpg` | 1920x1281 |

All URLs prefixed with: `https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/`

**URL Pattern Notes:**
- `-d.jpg` = desktop resolution (up to 3840px)
- `-m.jpg` = mobile resolution (375-1000px)
- `?width=1920&quality=70&auto=webp` can be appended for optimization

---

## SRP (Search Results Page) Design Pattern

Based on the standard Mitsubishi dealer SRP layout (St. Pete Mitsubishi reference):

### Card Layout
- **Horizontal rows** (image | details | price), NOT grid tiles
- Three-column on desktop, stacks vertically on mobile at 991px breakpoint

### Card Structure
```
[ IMAGE (left) | DETAILS (center) | PRICING (right) ]
```

- **Image block:** Vehicle photo, year badge (top-left), heart/favorites icon (top-right)
- **Details block:** Title (year + make + model + trim) in link blue, specs with icons (drivetrain, doors, mileage), stock # and VIN
- **Price block:** MSRP, discounts/rebates, final price in green, CTA buttons

### Price Display
- MSRP: standard weight
- Discounts: red, prefixed with `-`
- **Final/Selling Price:** bold, large, green (`#30770F`)

### Navigation
- Red header bar (`#BC0600`) with white text
- Promotional nav item (e.g., "$8K OFF PHEV Models!") in white bg with red text, right-aligned

---

## Checklist for New Mitsubishi Dealer Templates

- [ ] Load MMC font from CDN (`fonts.cdnfonts.com/css/mmc`)
- [ ] Use `#ED0000` for logo, `#BC0600` for UI elements
- [ ] Use official three-diamond SVG (not custom approximations)
- [ ] Maintain 40% isolation space around the three-diamond mark
- [ ] Dealer name in MMC font with location
- [ ] Body text in `#19183C`
- [ ] Links in `#0678BC`
- [ ] SRP final prices in `#30770F`
- [ ] Use official jellybean images from mitsubishicars.com CDN for model cards
- [ ] All internal links use absolute paths (`/demo/dealer-name/inventory`), not relative (`inventory.html`)
- [ ] Footer background: `#282828`
- [ ] Mobile breakpoint at 991px for SRP card stacking
