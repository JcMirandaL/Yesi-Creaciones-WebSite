# AGENTS.md

## What this is

Static website for **Yesi Creaciones** — a Panamanian handmade crafts / educational decoration business. Deployed to **Vercel** at `yesicreaciones.vercel.app`. No build step, no framework, no package manager.

## Structure

- `index.html` — landing page
- `galeria.html` — product gallery
- `contacto.html` — contact info (WhatsApp link)
- `categorias.html` - categories of gallery
- `styles/` — one CSS file per page (`index.css`, `portfolio.css`, `contacto.css`)
- `scripts/menuHamb.js` — hamburger menu toggle (only JS in the repo)
- `imgs/` — product and branding images
- `robots.txt`, `sitemap.xml` — SEO files

## Conventions

- Language is **Spanish** (`lang="es"`). Keep all user-facing text in Spanish.
- Each HTML page links its own CSS from `styles/`. There is no shared stylesheet — edit the matching CSS file for each page.
- SEO meta tags (description, keywords, Open Graph, canonical) are present on every page. Update them when changing page content.
- Canonical URLs use the production domain `yesicreaciones.vercel.app`.

## Local development

VS Code Live Server on port **5502** (configured in `.vscode/settings.json`). Open files directly with Live Server — no install or build needed.

## Deployment

Vercel auto-deploys from the repo. Pushing to the default branch triggers a deploy. There is no build command; Vercel serves the static files directly.


## NOTES

- Always follow industry-standard best practices.
- Never rely on hacks, workarounds, or temporary patches. Always identify and solve the root cause of the problem.
- Explain concepts as a senior engineer with years of experience mentoring a junior developer.
- Always explain the reasoning behind decisions.
- Before making changes, explain why the current implementation does not work, what the issue is, and why the proposed solution addresses it.
- Don't make changes, install, or run commands without my approval.
- Do not make assumptions about the codebase. Ask for missing context when necessary.
- Prefer maintainable, scalable, and production-ready solutions over quick fixes.
- Consider security, performance, and maintainability in every recommendation.
- When proposing code changes, explain the trade-offs and potential side effects.
- If multiple solutions exist, compare them and explain which one is recommended and why.
- Preserve existing architecture and coding conventions unless there is a strong technical reason to change them.
- Avoid unnecessary complexity. Prefer the simplest solution that correctly solves the problem.
- When identifying a bug, explain the root cause, how to reproduce it, and how the fix prevents it from happening again.
- Distinguish clearly between development, testing, and production recommendations.
