# AGENTS.md

## What is this repo?

This is the source code for [danielrodriguez.name](https://danielrodriguez.name), the personal website of Daniel Rodriguez — an iOS Software Engineer and hobbyist game developer based in NYC.

The site is built with **Astro** and deployed to **GitHub Pages** via GitHub Actions.

## Current State (March 2026 — MVP Launch)

The site is live with 6 sections:

1. **Hero** — Name, tagline, stats (years exp, GGJ streak, BAFTA)
2. **About** — Bio + three track cards (iOS Engineering, Game Development, Creative & Experimental)
3. **Projects** — Filterable project grid with 6 entries (Adapter, Warby Parker, GGJ, Homer, SongPop, CMU ETC)
4. **Achievements** — Featured awards and milestones
5. **Resume** — View inline or download PDF
6. **Contact** — Links to LinkedIn, Mastodon, GitHub, itch.io, GGJ

Persona switching (iOS/GameDev/Creative views) is hidden behind `.feature-hidden` — remove the class to enable.

### Hosting & Infrastructure

- **Host:** GitHub Pages (deployed from `main` branch)
- **Domain:** `danielrodriguez.name`
- **SSL:** Enforced via GitHub Pages (Let's Encrypt)

## Legacy State

The previous version of the site is preserved at git tag **`v1-legacy`**.

```bash
git checkout v1-legacy
```

The old site was:

- Static HTML/CSS/JS built on a Template World theme
- XHTML 1.0 Strict doctype, fixed 747px width (not responsive)
- jQuery 1.9.1 for header/footer injection
- Multi-page structure
- Bio was outdated (no mention of iOS/SwiftUI, AI tooling, or recent work at Adapter)

## About Daniel

- **Current role:** Recently laid off from Adapter (adapter.com), an AI assistant app, where he was the lead and only iOS developer
- **Background:** Carnegie Mellon University (Master's, Entertainment Technology / Game Dev, NYC program)
- **Core skills:** iOS development (Swift, SwiftUI, Swift concurrency), hybrid native+WebView architectures, AI/agentic tooling, developer experience (DevX)
- **Side interests:** Game development (Godot, game jams via Global Game Jam), AR programming, kitesurfing
- **Location:** NYC
- **Handles:** @dornad (GitHub, Mastodon), /in/danielrodc (LinkedIn), dornad.itch.io (itch.io), globalgamejam.org/users/dornad (GGJ)
- **Handle origin:** "dornad" = "Dan Rod" reversed. Internet handle since ~1996 (Bogota, Colombia).
- **Domains:** danielrodriguez.name (primary), danielrodriguez.dev (→ /ios), danielrodriguez.games (→ /gamedev), dornad.studio (TBD)

## Design Direction

**"Clean Portfolio with Game DNA"** — A creative, game-inspired personal site that serves a broad audience. Subtle game references in an otherwise clean, professional portfolio. Equal weight given to iOS engineering and game dev / creative projects.

- **Framework:** Astro (static site generator, component-based, deployed on GitHub Pages)
- **Persona system:** URL-based entry points (`/`, `/ios`, `/gamedev`, `/creative`) that reorder content emphasis from the same content pool
- **Full design spec:** See `docs/DESIGN_SPEC.md` for complete details

## File Structure

```
.
├── src/
│   ├── components/      # Astro components (Hero, About, Projects, etc.)
│   ├── layouts/         # BaseLayout.astro
│   ├── pages/           # Astro pages (index.astro)
│   └── styles/          # Global CSS
├── public/
│   ├── images/          # Project thumbnails, icons
│   └── resumes/         # Resume PDF
├── .github/workflows/   # GitHub Actions
├── docs/                # Design spec and mockup reference
├── AGENTS.md            # This file
└── package.json
```

## Useful Commands

```bash
npm install && npm run dev    # Start local dev server at localhost:4321
npm run build                 # Build for production
npm run preview               # Preview production build
```

## Running Locally

```bash
npm install
npm run dev
```
