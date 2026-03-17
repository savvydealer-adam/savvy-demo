# Stellantis CDJR Brand Guide

## OEM: Stellantis (Chrysler, Dodge, Jeep, Ram)

## Fonts
- Primary: System fonts stack — Stellantis dealers typically use clean sans-serif: `'Helvetica Neue', Helvetica, Arial, sans-serif`
- No custom OEM webfont required (unlike Mitsubishi MMC or Ford Antenna)

## Brand Colors

### Dealer-Level (Carolina CDJR example)
| Token | Value | Usage |
|-------|-------|-------|
| Primary Blue | `#3363ba` | Top bar, primary CTAs |
| Dark BG | `#252525` | Footer, nav overlays |
| White | `#ffffff` | Header bg, card bg |
| Border | `#f5f5f5` | Header row borders |

### OEM Brand Colors (for tabs/accents)
| Brand | Primary | Accent |
|-------|---------|--------|
| Chrysler | `#000066` | Navy |
| Dodge | `#000000` | Red `#ED1C24` |
| Jeep | `#3A5A28` | Olive/Green |
| Ram | `#000000` | Red `#CE1126` |

### Shared UI Colors
| Token | Value | Usage |
|-------|-------|-------|
| CTA Primary | `#3363ba` | Buttons, links |
| CTA Hover | `#2a52a0` | Button hover |
| Savings Green | `#30770f` | Final price, savings |
| Link Blue | `#0678bc` | Vehicle titles |
| Body Text | `#19183C` | Main text |
| Gray | `#808080` | Secondary text |
| Light BG | `#f4f4f4` | Card backgrounds |

## Logos

### OEM Brand Logos (Desktop - dark bg versions for light headers)
| Brand | URL | Dimensions |
|-------|-----|------------|
| Chrysler | `https://di-shared-assets.dealerinspire.com/public/logos/chrysler/chrysler-dark-large-no-space-desktop-logo.png` | 275x43 |
| Dodge | `https://di-shared-assets.dealerinspire.com/public/logos/dodge/dodge-dark-large-no-space-desktop-logo.png` | 268x35 |
| Jeep | `https://di-shared-assets.dealerinspire.com/public/logos/jeep/jeep-dark-large-no-space-desktop-logo.png` | 265x106 |
| Ram | `https://di-shared-assets.dealerinspire.com/public/logos/ram/ram-dark-large-no-space-desktop-logo.png` | 189x210 |

### OEM Brand Logos (Mobile)
| Brand | URL |
|-------|-----|
| Chrysler | `https://di-shared-assets.dealerinspire.com/public/logos/chrysler/chrysler-dark-no-space-mobile-logo.png` |
| Dodge | `https://di-shared-assets.dealerinspire.com/public/logos/dodge/dodge-dark-no-space-mobile-logo.png` |
| Jeep | `https://di-shared-assets.dealerinspire.com/public/logos/jeep/jeep-dark-no-space-mobile-logo.png` |
| Ram | `https://di-shared-assets.dealerinspire.com/public/logos/ram/ram-dark-no-space-mobile-logo.png` |

### Dealer Logo
| Logo | URL |
|------|-----|
| Carolina CDJR (header) | `https://di-uploads-development.dealerinspire.com/carolinacdjr1/uploads/2025/09/Carolina-CDJR-logo.png` |
| Carolina CDJR (footer) | `https://di-uploads-development.dealerinspire.com/carolinacdjr1/uploads/2019/02/logo-footer.png` |
| Favicon | `https://di-uploads-pod19.dealerinspire.com/carolinacdjr1/uploads/2023/08/CCJDR-SP-082523-Favicon-Flag-2.png` |

## Model Images (Stellantis CDN)

Base URL: `https://di-sitebuilder-assets.dealerinspire.com/Stellantis/modelImages/`

### Chrysler
| Model | Image |
|-------|-------|
| Pacifica | `Chrysler/pacifica.png` |
| Pacifica Plug-In Hybrid | `Chrysler/pacifica-hybrid.png` |

### Dodge
| Model | Image |
|-------|-------|
| Durango | `Dodge/durango.png` |
| Charger | `Dodge/charger.png` |
| Hornet | `Dodge/hornet.png` |

### Jeep
| Model | Image |
|-------|-------|
| Compass | `Jeep/compass.png` |
| Gladiator | `Jeep/gladiator.png` |
| Cherokee | `Jeep/cherokee.png` |
| Grand Cherokee | `Jeep/new-grand-cherokee.png` |
| Grand Cherokee 4xe | `Jeep/grand-cherokee-4xe.png` |
| Grand Cherokee L | `Jeep/grand-cherokee-l.png` |
| Wrangler | `Jeep/wrangler.png` |
| Wrangler 4xe | `Jeep/wrangler-4xe.png` |
| Wagoneer | `Jeep/wagoneer.png` |
| Grand Wagoneer | `Jeep/grand-wagoneer.png` |
| Wagoneer S | `Jeep/wagoneer-s.png` |

### Ram
| Model | Image |
|-------|-------|
| RAM 1500 | `Ram/1500-ram.png` |
| RAM 2500 | `Ram/ram-2500.png` |
| RAM 3500 | `Ram/ram-3500.png` |
| Chassis Cab | `Ram/chassis-cab.png` |
| ProMaster | `Ram/promaster.png` |
| ProMaster EV | `Ram/promaster-ev.png` |

## OEM Banner Images (Seasonal)
Base URL: `https://dealerinspire-shared-assets.s3.us-east-1.amazonaws.com/public/oem/fca/banners/`

These rotate monthly. Example March 2026:
- `2026/MAR/SEBC/pacifica.jpg`
- `2026/MAR/SEBC/grand-cherokee-l.jpg`
- `2026/MAR/SEBC/hornet.jpg`
- `2026/MAR/SEBC/charger.jpg`

## Header Structure (Stellantis Standard)
1. **Top Bar** — Blue bg (`#3363ba`), contains: Phone numbers (Sales/Service/Parts) left, Address right
2. **Main Header** — White bg, contains: OEM logo carousel (Chrysler/Dodge/Jeep/Ram) left, Dealer logo, Main nav, Search icon right
3. **Nav** — Horizontal menu: New, Pre-Owned, Service, Parts, Financing, Specials, About

## Model Lineup Section
- Tabbed interface: Chrysler | Dodge | Jeep | Ram tabs
- Each tab shows a carousel of model cards
- Model card = image + make label + model name
- "View All New Vehicles" CTA button below

## Footer Structure
- Dark bg (`#252525`)
- 4-column layout: Inventory | Service | Financing | About Us
- Dealer logo + Social icons row (X, Facebook, YouTube, Instagram, LinkedIn)
- Copyright + Powered by SavvyDealer

## Compliance Checklist
- [ ] Display all 4 OEM brand logos (Chrysler, Dodge, Jeep, Ram)
- [ ] Use Stellantis CDN model images (not third-party)
- [ ] Include all 4 brand tabs in model lineup
- [ ] Sales, Service, and Parts phone numbers must be visible
- [ ] Address with city/state/zip visible in header
- [ ] Jeep must include registered trademark symbol (Jeep®)
- [ ] Use dealer's primary blue (#3363ba) as accent color
- [ ] Footer includes social media links
- [ ] No custom fonts — use system sans-serif stack
