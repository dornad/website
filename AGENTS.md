# AGENTS.md

## What is this repo?

This is the source code for [danielrodriguez.name](https://danielrodriguez.name), the personal website of Daniel Rodriguez — an iOS Software Engineer and hobbyist game developer based in NYC.

The site is hosted on **GitHub Pages** with a custom domain, served over HTTPS via Let's Encrypt. No build step, no framework — just static files deployed from the `main` branch root.

## Current State (March 2026)

The site is currently a **placeholder / under-construction page**. It's a single `index.html` file with:

- Name, title, and short tagline (iOS Engineer · Game Dev · NYC)
- A "new site under construction" status badge
- Three contact links: LinkedIn, Mastodon (@dornad@iosdev.space), GitHub (dornad)
- Dark theme with a subtle dev/terminal aesthetic (grid background, blinking cursor prompt, monospace + serif font pairing)
- Fully responsive, no external dependencies beyond Google Fonts (JetBrains Mono, Source Serif 4)

### Hosting & Infrastructure

- **Host:** GitHub Pages (deployed from `main` branch, root `/`)
- **Domain:** `danielrodriguez.name` (registered through A Small Orange)
- **DNS:** A records pointing to GitHub Pages IPs (185.199.108-111.153), www CNAME to `dornad.github.io`
- **SSL:** Enforced via GitHub Pages (Let's Encrypt)
- **Old host:** A Small Orange (shared hosting with cPanel) — DNS still managed there, but hosting is no longer used

## Legacy State

The previous version of the site is preserved at git tag **`v1-legacy`**.

```bash
git checkout v1-legacy
```

The old site was:

- Static HTML/CSS/JS built on a Template World theme
- XHTML 1.0 Strict doctype, fixed 747px width (not responsive)
- jQuery 1.9.1 for header/footer injection
- Legacy Google Analytics (ga.js)
- Multi-page structure: `pages/index.html`, `pages/portfolio.html`, `pages/resume.html`, `pages/contact.html`, `pages/blog.html`
- Root `index.html` was just a meta-refresh redirect to `pages/index.html`
- Portfolio showcased work at: Paperless Post, Homer Learning, FreshPlanet (SongPop), AnyoneGame (JustSingIt), CMU projects, open source
- Resume page embedded a PDF
- Bio was outdated (no mention of iOS/SwiftUI, AI tooling, or recent work at Adapter)

### Legacy Files of Note

- `docs/` — Game design documents from CMU projects (PDFs)
- `images/` — Portfolio screenshots and project images
- `resumes/` — Resume PDF
- `pages/portfolio_*.html` — Individual project detail pages

Some of this content (particularly the portfolio pieces and game design docs) may be worth carrying forward into the new site.

## What We Want to Build

The placeholder is temporary. The goal is a full personal website redesign. Key context for the new site:

### About Daniel

- **Current role:** Recently laid off from Adapter (adapter.com), an AI assistant app, where he was the lead and only iOS developer
- **Background:** Carnegie Mellon University (Master's, Entertainment Technology / Game Dev, NYC program)
- **Core skills:** iOS development (Swift, SwiftUI, Swift concurrency), hybrid native+WebView architectures, AI/agentic tooling, developer experience (DevX)
- **Side interests:** Game development (Godot, game jams via Global Game Jam), AR programming, kitesurfing
- **Location:** NYC
- **Handles:** @dornad (GitHub, Mastodon), /in/danielrodc (LinkedIn)

### Design Direction (TBD — not yet finalized)

Initial brainstorming identified four possible directions:

1. **Interactive Portfolio / Playground** — shows skills through interactive demos and embedded projects
2. **Narrative-Driven Personal Brand** — editorial-style journey through career (CMU → game dev → iOS → AI apps)
3. **Developer-as-Product Landing Page** — single-page, bold hero, key skills, social proof, clear CTA
4. **Creative / Game-Inspired** — leans into game dev side, interactive elements, memorable and unique

The final direction has not been chosen yet. The audience, vibe, and content priorities still need to be decided.

### Content to Include (likely)

- Updated bio reflecting iOS engineering focus and recent work
- Portfolio / case studies (Adapter, Paperless Post, Homer, SongPop, game jam projects)
- Links to GitHub, LinkedIn, Mastodon
- Game dev / side projects section (Global Game Jam entries, itch.io)
- Resume (updated)
- Possibly a blog

### Technical Preferences

- Daniel is an iOS/Swift developer by trade; web dev is not his primary domain
- The site should be simple to maintain — minimal or no build toolchain preferred
- Should remain hostable on GitHub Pages
- AI coding agents will likely be used to build and iterate on the site

## File Structure

```
.
├── AGENTS.md          # This file — context for AI coding agents
├── CLAUDE.md          # Claude-specific instructions (references this file)
├── CNAME              # GitHub Pages custom domain config
├── index.html         # Current placeholder page
└── README.md          # Repo description
```

## Useful Commands

```bash
# View the old site
git checkout v1-legacy

# Return to current
git checkout main

# Test locally
open index.html
# or
python3 -m http.server 8000
```