# SRP (Search Results Page) Template Guide

**Status:** Approved layout. Use this for ALL future demo SRP/inventory pages.
**Reference implementation:** `templates/sendell-mitsubishi/inventory.html`

---

## Page Structure

```
+----------------------------------------------------------+
| HEADER: Logo (left) + Contact (right)                     |
+----------------------------------------------------------+
| NAV BAR: Dark bg (#282828) + white links + promo badge    |
+----------------------------------------------------------+
|                                                            |
| +-------------+  +--------------------------------------+ |
| | FILTER      |  | INVENTORY DETAIL BAR                 | |
| | PANEL       |  | Count | Sort dropdown | View toggle  | |
| | (21% width) |  +--------------------------------------+ |
| |             |  | VEHICLE CARDS GRID (4-col)            | |
| | - Search    |  |                                       | |
| | - Reset All |  | [card] [card] [card] [card]           | |
| | - Type      |  | [card] [card] [card] [card]           | |
| | - Model     |  | [card] [card] [card] [card]           | |
| | - Year      |  |                                       | |
| | - Price     |  +--------------------------------------+ |
| | - Drivetrain|  | PAGINATION                            | |
| | - Color     |  +--------------------------------------+ |
| +-------------+                                            |
+----------------------------------------------------------+
| FOOTER                                                     |
+----------------------------------------------------------+
```

### Layout Widths
| Element | Width | Notes |
|---------|-------|-------|
| Filter panel | 21% | Sticky, `top: 20px` |
| Results area | `calc(79% - 30px)` | `margin-left: 30px` |
| Grid cards | `calc(25% - 15px)` | 4 columns with `gap: 20px` |

### Responsive Breakpoints
| Breakpoint | Filter | Cards | Notes |
|------------|--------|-------|-------|
| > 1430px | 21% | 4 columns | Full layout |
| <= 1429px | 25% | 3 columns (`33.33%`) | Slightly wider filter |
| <= 1199px | 25% | 2 columns (`50%`) | Hide view toggle |
| <= 991px | Hidden | 2 columns, full width | Mobile filter button |
| <= 767px | Hidden | 1 column (`100%`) | Single column stack |

---

## CSS Variables (Required)

```css
:root {
    --bodyfont: 'MMC', sans-serif;    /* or dealer OEM font */
    --headerbg: #bc0600;               /* adapt per OEM */
    --footerbg: #282828;
    --bodycolor: #19183C;
    --secondarycolor: #bc0600;         /* buttons, badges, CTAs */
    --linktextcolor: #0678bc;          /* vehicle titles, links */
    --blackcolor: #000000;
    --whitecolor: #fff;
    --greycolor: #808080;
    --transition: all 0.4s;
}
```

---

## Vehicle Card Structure

Each card uses this exact HTML hierarchy:

```html
<div class="list-item">
  <div class="list-item-inner">

    <!-- IMAGE BLOCK -->
    <div class="image-block">
      <a href="#"><img src="..." alt="..." /></a>
      <div class="watchlist-icon"><svg>♡</svg></div>
    </div>

    <!-- DETAILS BLOCK -->
    <div class="list-item-detail">
      <a class="vehicleCardTitle" href="#">Year Model Trim</a>
      <div class="details-wrapper">
        <div class="details"><div class="label">Ext. Color</div><div class="value">...</div></div>
        <div class="details"><div class="label">Drivetrain</div><div class="value">AWD</div></div>
        <div class="details"><div class="label">Engine</div><div class="value">...</div></div>
        <div class="details"><div class="label">Stock #</div><div class="value">...</div></div>
      </div>
    </div>

    <!-- PRICE BLOCK -->
    <div class="list-item-price">
      <div class="mobile-apr-price-wrapper">
        <div class="price-display">
          <div class="yousave-price">              <!-- omit if no discount -->
            <span class="amount">$X,XXX</span>
            <span class="save-label">Potential Savings</span>
          </div>
          <div class="mobile-price">
            <span class="price">$XX,XXX</span>
            <span class="price-label">Dealer Price*</span>
          </div>
        </div>
      </div>

      <div class="price-toggle">Price Details ▼</div>
      <div class="price-breakup">
        <div class="row"><div class="label">MSRP</div><div class="msrp">XX,XXX</div></div>
        <div class="row"><div class="label">Discount</div><div class="dealersavingsprice">-$X,XXX</div></div>
        <div class="row border-top-dash"><div class="label">Dealer Price*</div><div class="finalprice">$XX,XXX</div></div>
      </div>

      <div class="card-actions">
        <div class="btn_3"><a href="#">Check Availability</a></div>
      </div>
    </div>

  </div>
</div>
```

---

## Card Styling Rules

### Image Block
```css
.list-item .image-block {
    background: #f4f4f4;           /* light gray background for contain */
    position: relative;
    overflow: hidden;
}
.list-item .image-block img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: contain;            /* CONTAIN, not cover — prevents cropping */
    padding: 12px;                  /* breathing room around vehicle image */
    border-radius: 12px 12px 0 0;
    transition: transform 0.4s;
}
.list-item:hover .image-block img {
    transform: scale(1.03);
}
```

**CRITICAL:** Always use `object-fit: contain` with `padding: 12px` for vehicle images. Jellybean/side-profile images (960x420) are wider than 4:3 — using `cover` will crop the front and rear of the vehicle.

### Badges
| Badge | Position | Color | Usage |
|-------|----------|-------|-------|
| Watchlist heart | `bottom: 10px; right: 10px` | White bg circle, gray fill | Always show |

**Do NOT add** year badges or savings badges to cards — they are redundant (year is in the title, savings show in the price section).

### Vehicle Title
- Color: `#0678bc` (link blue)
- Font size: `16px`
- Font weight: `700`
- Hover: underline

### Detail Rows
- Label: `color: #999` (left-aligned)
- Value: `font-weight: 600` (right-aligned)
- Standard fields: Ext. Color, Drivetrain, Engine, Stock #
- Font size: `13px`

### Price Display
| Element | Style |
|---------|-------|
| Savings amount | `font-size: 16px; font-weight: 800; color: --secondarycolor` |
| Savings label | `font-size: 11px; color: --linktextcolor; uppercase` |
| Selling price | `font-size: 20px; font-weight: 700; color: --bodycolor` |
| Price label | `font-size: 11px; color: --linktextcolor; uppercase` |
| MSRP (in breakdown) | `text-decoration: line-through` with `$` prefix via `::before` |
| Discount | `color: --secondarycolor; font-weight: 700` |
| Final price | `color: #30770f; font-weight: 700; font-size: 16px` |

### Expandable Price Breakdown
- Toggle trigger: `onclick="this.classList.toggle('open');this.nextElementSibling.classList.toggle('show')"`
- Default state: `display: none` — breakdown is **always hidden** until user clicks
- Shown state: `.price-breakup.show { display: block; }`
- Arrow rotates on open: `.price-toggle.open svg { transform: rotate(180deg); }`
- Separator: `border-top: 1px dashed #ddd`

**CRITICAL:** The price summary (savings + dealer price) is the only pricing visible by default. The MSRP/discount breakdown is HIDDEN behind "Price Details" — this matches the original St. Pete Mitsubishi template exactly.

### CTA Buttons
```css
/* Primary (filled) */
.btn_3 a {
    background: var(--secondarycolor);
    color: #fff;
    border: 1px solid var(--secondarycolor);
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 12px 16px;
}
.btn_3 a:hover { background: transparent; color: var(--secondarycolor); }

/* Secondary (outline) */
.btn_4 a {
    background: transparent;
    color: var(--secondarycolor);
    border: 1px solid var(--secondarycolor);
    /* same border-radius, font, padding as btn_3 */
}
.btn_4 a:hover { background: var(--secondarycolor); color: #fff; }
```

---

## Filter Panel

### Structure
1. **Header** — "Filters" title + "Share" link
2. **Search input** — Text search with magnifying glass button
3. **Reset All** — Filled button with refresh icon
4. **Accordion filters** — Each with title, chevron toggle, count badges

### Standard Filters (in order)
1. Type (New / Used / Certified)
2. Model (with inventory counts)
3. Year
4. Price ranges
5. Drivetrain
6. Exterior Color

### Filter Styling
- Panel: `background: #fff; border-radius: 12px; padding: 24px 20px; position: sticky; top: 20px`
- Accordion items: `border-bottom: 1px solid #eee; padding: 12px 0`
- Title: `14px; font-weight: 700; uppercase` with CSS chevron `::after`
- Badge counts: `background: #f0f0f0; color: #808080; font-size: 12px; padding: 2px 8px; border-radius: 10px`

---

## Inventory Detail Bar

```html
<div class="inventory-detail">
    <div class="count"><strong>XX Vehicles Found</strong></div>
    <div class="sort-by">
        <span><strong>Sort Results</strong></span>
        <select>
            <option>Price (low to high)</option>
            <option>Price (high to low)</option>
            <option>Year (newest)</option>
            <option>Year (oldest)</option>
            <option>Mileage (low to high)</option>
        </select>
    </div>
    <div class="filter-buttons">
        <!-- List view SVG icon -->
        <!-- Grid view SVG icon (active) -->
    </div>
</div>
```

Styling: `background: #fff; border: 1px solid rgba(36,39,44,.1); box-shadow: 0 6px 10px rgba(0,0,0,.05); border-radius: 12px; padding: 16px 24px; margin-bottom: 20px`

---

## Pagination

```html
<ul class="pagination">
    <li class="disabled"><span>Prev</span></li>
    <li class="active"><span>1</span></li>
    <li><span>2</span></li>
    <li><span>3</span></li>
    <li><span>Next</span></li>
</ul>
```

Styling: `padding: 8px 14px; border: 1px solid #ddd; border-radius: 6px`
Active: `background: --secondarycolor; color: #fff`

---

## Container Widths

```css
.search-page-main .container { width: 100%; max-width: 1630px; }
/* Standard container breakpoints: 750, 970, 1170, 1400, 1630px */
```

---

## Card Container (Shared)

All panels/bars use this base:
```css
background: #fff;
border: 1px solid rgba(36,39,44,.1);
box-shadow: 0 6px 10px rgba(0,0,0,.05);
border-radius: 12px;
```

---

## Checklist for New SRP Pages

- [ ] Copy card HTML structure exactly from reference implementation
- [ ] Use `object-fit: contain` (NOT cover) for vehicle images
- [ ] Include `padding: 12px` on images to prevent edge cropping
- [ ] Set `background: #f4f4f4` on `.image-block` for clean image backdrop
- [ ] Do NOT include year badges or savings badges on cards (redundant)
- [ ] Include watchlist heart icon on every card
- [ ] Price summary (savings + price) visible by default in summary bar
- [ ] Price breakdown (MSRP/discounts) HIDDEN behind "Price Details" toggle
- [ ] MSRP is struck through, discount in red, final price in green (#30770f)
- [ ] Filter panel has correct accordion structure with badge counts
- [ ] All internal links use absolute paths (`/demo/dealer-name/inventory`)
- [ ] Responsive breakpoints match specification (4/3/2/1 columns)
- [ ] Use OEM font per brand guide (MMC for Mitsubishi, etc.)
- [ ] Adapt `--secondarycolor` and `--headerbg` per dealer/OEM brand
