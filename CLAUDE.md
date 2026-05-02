# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal site for Julius Dockwarder ("Fractional Engineering Partner"). Astro 6 + Tailwind CSS 4, package manager is pnpm, Node >= 22.12.

## Commands

- `pnpm dev` — start dev server at `localhost:4321`
- `pnpm build` — production build to `./dist/`
- `pnpm preview` — preview the production build
- `pnpm astro check` — type-check `.astro` files (use this instead of `tsc` for Astro components)

There is no test suite or linter configured.

## Architecture notes

- **Tailwind v4 via Vite plugin**, not the PostCSS pipeline. Configuration lives in CSS via `@theme` in [src/styles/global.css](src/styles/global.css), not in a `tailwind.config.*` file. Add design tokens there.
- **Fonts are loaded through Astro's built-in `fonts` config** in [astro.config.mjs](astro.config.mjs) using `fontProviders.fontsource()`, exposed as CSS variables (`--font-inter`, `--font-inter-tight`) and re-aliased to Tailwind's `--font-sans` / `--font-tight` in `global.css`. The `<Font>` component from `astro:assets` in [src/layouts/Layout.astro](src/layouts/Layout.astro) preloads them — keep this wiring intact when adding fonts.
- **Layout shell**: [Layout.astro](src/layouts/Layout.astro) provides the two-column shell (sidebar + rounded white content card) used by every page. New pages should wrap content in `<Layout>` rather than re-creating the chrome.
- TypeScript config extends `astro/tsconfigs/strict`.
