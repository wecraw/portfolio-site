# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server at http://localhost:4200 (auto-reloads)
npm run build      # production build → dist/portfolio/
npm test           # unit tests via Karma/Jasmine (opens Chrome)
npm run watch      # dev build in watch mode
ng generate component src/app/<name>/<name>  # scaffold a new component (uses scss by default)
```

No linter is configured; formatting is enforced by Prettier (`npm run prettier` is not scripted — run `npx prettier --write .`).

## Architecture

Angular 21 NgModule-based app (not standalone components — all components declare `standalone: false` and are registered in `AppModule`).

**Routing** (`app-routing.module.ts`): four flat routes — `/` (Home), `/about`, `/resume`, `/portfolio`. No lazy loading.

**Component tree:**
- `AppComponent` — shell, just `<router-outlet>`
- `HomeComponent` — full-page landing; owns `menuItems` data, renders `<app-header>` + `<app-menu>` + a footer
- `HeaderComponent` — fixed top bar showing "Will Crawford"; accepts a `[navRoute]` input to navigate on click
- `MenuComponent` — the interactive mountain navigation; accepts `[menuItems]` and `[useCompactSize]`, emits `(onFade)` when a destination is selected
- `AboutComponent`, `ResumeComponent`, `PortfolioComponent` — individual page views

**Navigation UX pattern:** clicking a menu item in `MenuComponent` triggers CSS fade/puff-out animations on the other items, emits `onFade` so the parent can fade the header/footer, then navigates after a 1500ms delay (`timeoutNav`). The `fadeOuts` / `puffOuts` boolean arrays in `MenuComponent` drive `[ngClass]` bindings for the CSS animation classes.

**`menuItem` interface** (`src/app/menuItem.ts`): `{ label, route, altitude }` — altitude is a display string (e.g. `"14,423 ft."`) used as a decorative label on each mountain column.

**Styling:** global styles in `src/styles.scss` import Bootstrap 5 SCSS and two Google Fonts (Roboto, Space Mono). Each component has its own `.scss` file. Bootstrap grid (`col-4` / `container` / `row`) structures the three-column mountain layout; `full-height-row` fills `calc(100vh - 88px)` to account for the fixed header.

**Assets:** `src/assets/mountain.png` is the single image reused for all three columns (middle column uses `.flip` to mirror it horizontally).
