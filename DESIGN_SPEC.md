# Website Redesign — Design Specification

## Overview

A personal website for Daniel Rodriguez at `danielrodriguez.name`. The site should serve a broad audience (recruiters, clients, game dev community) while expressing a creative, game-inspired identity. Built with Astro, deployed on GitHub Pages.

---

## Design Philosophy

**"Clean Portfolio with Game DNA"**

The site reads as a polished, modern developer portfolio at first glance. But the details reveal the game dev side through subtle references in structure, language, and interaction design — not through literal pixel art or retro aesthetics.

A recruiter sees a clean, professional portfolio. A game dev notices the winks.

### Guiding Principles

- **Subtle over literal** — game references are in the structure and language, not in 8-bit fonts or pixel borders
- **Professional but memorable** — should stand out from template portfolios without feeling gimmicky
- **Equal weight** — iOS engineering and game dev / creative projects are presented at the same level of importance
- **Simple to maintain** — Daniel is an iOS/Swift developer, not a web developer. The site should be easy to update with markdown content and minimal web toolchain friction
- **Let the design dictate the color/mood** — no predetermined palette; the designer should choose what best serves the concept

---

## Persona System

The site supports multiple entry points that shift content emphasis based on the visitor's interest. Same content pool, different ordering and presentation.

### Personas

| Persona | URL | Lead With | Tone |
|---------|-----|-----------|------|
| **General / Balanced** | `/` | Full picture — iOS + game dev + creative | "Here's everything I do" |
| **iOS Engineering** | `/ios` | Adapter, Warby Parker, SwiftUI, AI tooling | Professional, technical depth |
| **Game Development** | `/gamedev` | Game jam entries, Godot, CMU projects, itch.io | Creative, community-oriented |
| **Creative / Side Projects** | `/creative` | Personal experiments, side projects, tinkering | Exploratory, maker energy |

### How It Works

- Each persona is a route in Astro that renders a layout variant
- All personas pull from the same pool of content (projects, bio, skills)
- The **hero section, project ordering, and highlighted achievements** shift per persona
- Navigation between personas is possible (a subtle indicator shows which "path" you're on)
- The default `/` shows the balanced view with no persona bias

### Use Case

Daniel shares specific URLs depending on context:
- Job application for iOS role → `danielrodriguez.name/ios`
- Game dev Discord or GGJ profile → `danielrodriguez.name/gamedev`
- General networking / LinkedIn → `danielrodriguez.name`

---

## Site Structure

### Sections (per page)

1. **Hero** — Name, title, short pitch. Dynamic based on persona. Something more engaging than just text — could incorporate a subtle interactive element or animation.

2. **About** — Brief bio. Dual-track framing in the balanced view (iOS engineer + game dev). Persona views emphasize the relevant track.

3. **Projects / Portfolio** — Grid of work across both tracks. Each project is a card that can expand or link to a detail page. Projects are tagged by category (iOS, Game Dev, Creative, etc.) and filtered/reordered per persona.

4. **Achievements** — Career highlights in a compact, visual format. Think achievement-unlock style cards:
   - "Featured by Apple" (Warby Parker)
   - BAFTA award (SongPop team)
   - Unbroken Global Game Jam streak since 2019
   - "Zero to App Store" (Adapter — sole iOS engineer)
   - Carnegie Mellon ETC graduate

5. **Links / Contact** — LinkedIn, Mastodon, GitHub, itch.io, GGJ profile

6. **Footer** — Minimal

### Potential Detail Pages

Individual project pages for portfolio items that warrant deeper write-ups (case studies). These could be markdown files in Astro's content collections.

---

## Content Inventory

### Projects to Feature

**iOS / Professional:**
- Adapter (adapter.com) — AI assistant app. Sole iOS engineer. Zero to App Store in under a year. Hybrid native + WebView architecture, Share Extension, AI-native workflow.
- Warby Parker — Featured by Apple credential. AR/measurements apps. ~5 years.
- Homer Learning — Children's reading app (ages 3-6). iOS development.
- Paperless Post — Design-driven invitation platform. iOS and Android. ~5 years.

**Game Dev / Creative:**
- Global Game Jam entries (2019–present, unbroken streak). Small teams, Godot engine.
- FreshPlanet / SongPop — Music trivia game. #1 Social Game of 2012. BAFTA award.
- Spa Life — Facebook game.
- CMU ETC projects: Patient Experience, Sketch-It-Up (GameSketching), California Academy of Sciences, Building Virtual Worlds, Game Design coursework.
- AnyoneGame / JustSingIt — Mobile karaoke app.

**Other:**
- Open source contributions (GitHub: dornad)
- Bali Plastici — Panda 3D / Python puppet show project

### Skills / Technologies

- **Core:** Swift, SwiftUI, UIKit, Xcode
- **Specialties:** ARKit, RealityKit, SceneKit, App Store Connect
- **AI/Tooling:** Claude, REST APIs, SSE, agentic workflows
- **Game Dev:** Godot, GDScript, C# (Unity background)
- **Other:** Python (tooling), Git, hybrid native+WebView architectures

### Links

- LinkedIn: linkedin.com/in/danielrodc
- Mastodon: @dornad@iosdev.space
- GitHub: github.com/dornad
- itch.io: https://dornad.itch.io/
- Global Game Jam: https://globalgamejam.org/users/dornad

---

## Game-Inspired Design Elements

These are suggestions for how to weave game DNA into the design without going full "game UI." The implementation should pick the ones that work best together — not all of them.

### Structural Metaphors
- **Achievement cards** for career highlights (unlock/badge aesthetic)
- **Inventory-style grid** for portfolio projects (items with thumbnails)
- **Stat indicators** for skill areas (not literal progress bars — more like elegant visual shorthand)
- **Persona switching as "class selection"** — the persona system itself is a game mechanic

### Interaction Ideas
- **Hover states that feel tactile** — satisfying micro-interactions on project cards
- **Parallax or layered depth** — subtle movement that adds dimensionality
- **Easter egg** — a small hidden interactive somewhere for people who explore
- **Smooth scroll with section transitions** — sections feel like entering new areas
- **Cursor or pointer personality** — subtle custom cursor or trail effect

### Language / Copy
- Section headers could use game-adjacent language where natural (without being forced)
- The "under construction" → "new site" transition could reference a "new game+" concept
- Achievement descriptions written like unlock notifications

### What to Avoid
- Literal pixel art, 8-bit fonts, or retro game aesthetics
- Sound effects or auto-playing audio
- Anything that makes the site feel like a toy rather than a portfolio
- Forced game metaphors that don't serve the content
- Excessive animation that slows down the experience

---

## Technical Specification

### Framework
- **Astro** — static site generator with component-based architecture
- Output: static HTML/CSS/JS
- Interactive islands where needed (Astro's partial hydration)

### Hosting
- **GitHub Pages** — deployed from the repo via GitHub Actions
- Custom domain: `danielrodriguez.name`
- HTTPS enforced via Let's Encrypt

### Content Management
- Project data as Astro content collections (markdown + frontmatter)
- Easy to add new projects by creating a new markdown file
- Images stored in the repo (or optimized via Astro's image pipeline)

### Performance Goals
- Fast initial load — static HTML, minimal JS
- No heavy frameworks shipped to the client
- Responsive across mobile, tablet, desktop
- Accessible (semantic HTML, proper contrast, keyboard navigable)

### Fonts
- The placeholder uses JetBrains Mono + Source Serif 4 — these could carry forward or be reconsidered as part of the design
- Whatever is chosen should feel distinctive without being distracting

### Repository Structure (proposed)

```
website/
├── astro.config.mjs
├── package.json
├── AGENTS.md
├── CLAUDE.md
├── CNAME
├── public/
│   └── (static assets, favicon, etc.)
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── ProjectCard.astro
│   │   ├── AchievementCard.astro
│   │   ├── ContactLinks.astro
│   │   └── Footer.astro
│   ├── content/
│   │   └── projects/
│   │       ├── adapter.md
│   │       ├── warby-parker.md
│   │       ├── ggj-2024.md
│   │       └── ...
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PersonaLayout.astro
│   ├── pages/
│   │   ├── index.astro          (balanced)
│   │   ├── ios.astro             (iOS persona)
│   │   ├── gamedev.astro         (game dev persona)
│   │   └── creative.astro        (creative persona)
│   └── styles/
│       └── global.css
└── .github/
    └── workflows/
        └── deploy.yml
```

### GitHub Actions Deploy

Astro has an official GitHub Pages deployment guide. The workflow builds the site and deploys the `dist/` output to GitHub Pages.

### Feature Flags (Build-Time)

Sections of the site can be shipped incrementally using build-time feature flags. This allows work-in-progress sections to exist in the codebase without appearing on the live site.

**How it works:**

- An environment variable controls which sections are enabled: `PUBLIC_FEATURE_FLAGS=hero,about,projects,achievements,resume,contact`
- A helper function checks whether a section is flagged on:
  ```javascript
  // src/utils/features.js
  const flags = (import.meta.env.PUBLIC_FEATURE_FLAGS || '').split(',');
  export const isEnabled = (feature) => flags.includes(feature);
  ```
- Components conditionally render based on the flag:
  ```astro
  ---
  import { isEnabled } from '../utils/features';
  ---
  {isEnabled('achievements') && <Achievements />}
  ```
- Sections not in the flag list are **omitted from the HTML entirely** at build time — no client-side hiding, no security concerns
- The GitHub Actions deploy workflow sets the production flags (only ready sections)
- Preview deployments (see below) can set all flags to show everything

**Workflow:**
1. Build a new section on a feature branch
2. Preview it with all flags enabled on the preview deployment
3. When ready, add the section's flag to the production environment
4. Deploy to `main` — section goes live

### Preview Deployments

Development and in-progress work is previewed via a separate deployment service (Netlify or Cloudflare Pages, free tier) connected to the same GitHub repo.

- **Production (GitHub Pages):** `danielrodriguez.name` — deploys from `main`, only flagged-on sections
- **Preview (Netlify/Cloudflare Pages):** Auto-deploys from feature branches and PRs — all sections enabled, accessible via obscure preview URLs (e.g., `feature-achievements--dornad-website.netlify.app`)

Preview URLs are not password-protected but are not indexed or publicly linked — only people with the direct link can access them. This is sufficient for development previews.

### Domain Mapping

Daniel has multiple domains registered on Namecheap that map to persona entry points:

| Domain | Persona | Route | Status |
|--------|---------|-------|--------|
| `danielrodriguez.name` | General / Balanced | `/` | Active — primary domain, hosted on GitHub Pages |
| `danielrodriguez.dev` | iOS Engineering | `/ios` | Registered — to be configured |
| `danielrodriguez.games` | Game Development | `/gamedev` | Registered — to be configured |
| `dornad.studio` | TBD | TBD | Registered — reserved for creative persona or future game dev studio |

**Other owned domains (not currently mapped):**
- `pekgames.studio` — originally for a game dev studio concept
- `fediverse-play.dev` — unused concept domain

**Implementation approach (Phase 1):** Simple 301 redirects from each domain to the corresponding persona URL on `danielrodriguez.name`. Configured via Namecheap's URL redirect settings or Cloudflare. No hosting changes needed.

**Implementation approach (Phase 2, optional):** If we want the persona domains to show in the URL bar natively (e.g., visitor stays on `danielrodriguez.dev` while viewing iOS content), hosting would need to move to Netlify or Cloudflare Pages, which support multiple custom domains per site. Not a priority for v1.

---

## Resolved Questions

- **itch.io:** https://dornad.itch.io/
- **Global Game Jam:** https://globalgamejam.org/users/dornad
- **Legacy docs to feature:** Game Design course work and BVW (Building Virtual Worlds) projects. Photos and videos exist for most projects except one.
- **Blog:** Deferred to a future iteration. Not in v1 scope.
- **Color preferences:** None — designer's choice.
- **Resume:** Both downloadable PDF and rendered on-page.
- **Legacy assets:** Preserve screenshots/assets for projects that make it into the new site, particularly the Game Design and BVW content. Decision on which projects to feature will determine which assets to carry forward.

---

## Next Steps

1. Review and finalize this spec
2. Build a visual mockup / prototype of the balanced (`/`) view
3. Get feedback and iterate on design
4. Scaffold the Astro project
5. Build out components and content
6. Implement persona routing
7. Deploy and test
8. Migrate DNS (already done) and go live
