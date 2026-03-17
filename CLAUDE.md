# Savvy Demo - Claude Code Instructions

## Project Overview
Demo dealership website gallery showcasing SavvyDealer website templates. Each template is a standalone HTML demo served at `/demo/{template-name}`.

## Deployment
- **GCP Project:** `savvydealer-website`
- **Cloud Run Service:** `savvy-demo`
- **Domain:** `demo.savvydealer.com`
- **Direct URL:** `https://savvy-demo-952362582307.us-central1.run.app`
- **Deploy:** `gcloud builds submit --project=savvydealer-website --config=cloudbuild.yaml --substitutions=COMMIT_SHA=$(git rev-parse --short HEAD)`
- **No Cloud Build trigger** -- must deploy manually via `gcloud builds submit`

## Brand Guides -- CRITICAL

**ALWAYS read the relevant brand guide before creating or modifying a dealer template.**

| OEM | Brand Guide |
|-----|-------------|
| Mitsubishi | `brand-guides/mitsubishi.md` |

When building a new template for a manufacturer that has a brand guide:
1. Read the brand guide FIRST
2. Use the specified fonts, colors, logo SVGs, and image URLs
3. Follow the compliance checklist at the bottom of the guide
4. Do NOT substitute fonts (e.g., don't use Barlow/Inter/Arial for Mitsubishi -- use MMC)

## Template Structure

Each template lives in `templates/{dealer-name}/` with:
- `config.json` -- dealer info, colors, metadata
- `index.html` -- homepage
- `inventory.html` -- SRP (search results page)

### Link Convention
All internal links in templates MUST use absolute paths:
- Homepage: `/demo/{dealer-name}`
- Inventory: `/demo/{dealer-name}/inventory`
- Do NOT use relative paths like `inventory.html` -- they break with Express routing

## Server Architecture
- Express server with routes in `server/routes.ts`
- Static HTML templates served via `sendFile`
- Prestige Imports (React SPA) served from `dist/public/` with client-side path rewrite
- Gallery landing page: `gallery.html` (root `/`)
- SPA catch-all in `server/static.ts` with `{ index: false }` to prevent overriding gallery route

## Gallery
- `gallery.html` is the landing page at `/`
- Update template count when adding/removing templates
- Hidden templates (e.g., Mullinax) are removed from gallery but still accessible via direct URL

## Current Templates

| Template | Path | Status |
|----------|------|--------|
| Prestige Imports | `/demo/prestige-imports` | Featured (React SPA) |
| Jarrett Scott Ford | `/demo/ford-starter` | Featured |
| Mullinax Ford | `/demo/mullinax-ford` | Hidden (not a client) |
| Sendell Mitsubishi | `/demo/sendell-mitsubishi` | Featured |
| 10 JS Style Templates | `/demo/js-*` | Style Showcase |
