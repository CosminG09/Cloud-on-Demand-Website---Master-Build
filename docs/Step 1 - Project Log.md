Cloud on Demand Website — Project Log (Confluence-ready)



By Cosmin GUGU

4 min

See views

Add a reaction
1) Executive Summary
Goal: Set up a clean, reproducible local dev environment and bootstrap the Cloud on Demand website with a stable, content-first baseline.
Status: ✅ Completed. We moved beyond the initial bootstrap into MDX runtime, brand fonts, and UI kit.

2) Scope & Objectives
Primary Objective (Step 0): Local-only development on Windows 11 Home; scaffold Next.js app; verify content pipeline and commit baseline to GitHub.

Secondary Outcomes (approved & implemented):

Replace Contentlayer with a native Markdown/MDX runtime approach.

Wire brand typography (Aileron + Audiowide).

Initialize shadcn/ui for consistent UI primitives.

Non-Goals: Public deployment, SEO indexing (robots remain Disallow), production hardening.

3) Team & Roles (multi-persona)
IT Project Manager (Cosmin): approvals, scope, priorities.

Lead Solution Architect: stack decisions, future-proofing (Next 13.5; native MDX).

Full Stack Developer: executes setup & coding.

DevOps & Deployment Engineer: repo hygiene, branching, PRs, CI/CD later.

Security & Privacy Officer: local-only dev; secrets management; GDPR posture.

Branding Specialist: font selection and asset pipeline readiness.

SEO & Analytics Specialist: content pipeline stability; readability.

PR/Marketing, Business Strategist, AI Expert: observers for readiness.

4) Key Decisions (Decision Matrix → Approved)
Topic

Decision

Why

Impact

Framework

Next.js 13.5 (App Router)

Stable for our needs; avoids 14/15 changes

Predictable behavior

Content pipeline

Native MD/MDX runtime (no Contentlayer)

Simpler, fewer moving parts, works great on 13.5

Easier maintenance

ESLint versioning

Pin eslint@8.57.0 + eslint-config-next@13.5.11

Avoid peer conflicts

Stable linting

Fonts

Local fonts with next/font/local

GDPR-friendly, reliable

Faster, private

UI toolkit

shadcn/ui + Tailwind

Composable primitives, consistent UX

Rapid UI building

Robots & sitemap

Disallow + stub sitemap

Prevent premature indexing

SEO-safe during build

Note: Node.js is 22.19.0 on the dev machine (works fine). For CI we can standardize to Node 20 LTS later if needed.

5) Environment Setup (Windows 11 Home)
Installed (winget + manual):

Git 2.51.0, Node.js 22.19.0, npm 10.9.3, Cursor 1.5.9.

PowerShell execution policy handled per-session:



Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
Workspace:



E:\cloudondemand\cursor\Cloud-on-Demand-Website---Master-Build
6) Repository & Branching (GitHub)
Origin: CosminG09/Cloud-on-Demand-Website---Master-Build

Branches & PRs:

feature/step-3-bootstrap-rebase → Merged (baseline scaffold)

feature/step-4-mdx-fonts → Merged (MDX runtime + fonts + typography)

feature/step-5-ui-kit → Merged (shadcn/ui + tokens + UI demo)

Notable Git hygiene:

Rescued a “lost” commit via git reflog and cherry-pick.

Avoided committing .next/ & node_modules/; added .gitignore.

Resolved Node SWC binary >100 MB push rejection by redoing staging correctly.

7) Baseline Scaffold (Next 13.5 + Tailwind + Native MD/MDX)
Configs & files (final state relevant to baseline):

next.config.mjs (MDX extensions enabled via @next/mdx or native MDX runtime approach chosen later).

src/app/insights/page.tsx (list view).

src/app/insights/[slug]/page.tsx (detail view using compiled MDX; see §9).

src/lib/content/posts.ts (front-matter parse + MDX compile).

Sample content: content/posts/primul.mdx.

Safety: src/app/robots.ts (Disallow), src/app/sitemap.ts (stub).

8) Typography & Fonts (Branding)
Local fonts via next/font/local (lean preload):

Aileron: Regular (400), Bold (700) → body text / bold.

Audiowide: Regular (400) → display (headings, logo).

layout.tsx excerpt (paths relative to src/app/):



const brandSans = localFont({
  variable: "--font-brand-sans",
  display: "swap",
  preload: true,
  src: [
    { path: "../../public/fonts/aileron/Aileron-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/aileron/Aileron-Bold.otf",    weight: "700", style: "normal" },
  ],
});
const brandDisplay = localFont({
  variable: "--font-brand-display",
  display: "swap",
  preload: true,
  src: [{ path: "../../public/fonts/audiowide/Audiowide-Regular.ttf", weight: "400", style: "normal" }],
});
Tailwind mapping (tailwind.config.ts):



fontFamily: {
  sans: ["var(--font-brand-sans)", "system-ui", "sans-serif"],
  display: ["var(--font-brand-display)", "var(--font-brand-sans)", "system-ui", "sans-serif"],
},
Utility class (in globals.css):



.font-display {
  font-family: var(--font-brand-display), var(--font-brand-sans), system-ui, sans-serif !important;
}
9) Content Runtime (MDX with JSX)
Why: Render rich posts with MDX and React components—no Contentlayer needed.

Loader (src/lib/content/posts.ts):

List: parse front-matter only (fast)

Detail: gray-matter front-matter ➜ compileMDX (JSX enabled)

Detail page (src/app/insights/[slug]/page.tsx):

Uses getCompiledPost(slug) and renders {content} (React from MDX).

Verified: /insights/primul renders a styled JSX block inside MDX.

10) UI Kit (shadcn/ui) + Tailwind
Packages: class-variance-authority, tailwind-merge, tailwindcss-animate, lucide-react.

Tokens & plugins:

globals.css: CSS variables for colors/radius (light/dark).

tailwind.config.ts: shadcn color tokens mapping to CSS vars, typography, tailwindcss-animate.

postcss.config.js: Tailwind & autoprefixer.

Demo route: /ui-demo with Card, Inputs, Button — styled & accessible.

11) Error Playbook (encountered & fixed)
PowerShell execution policy blocked npx ➜ used per-process bypass.

ESLint peer conflict ➜ pinned eslint@8.57.0 + eslint-config-next@13.5.11.

next.config.ts unsupported on 13.5 ➜ switched to next.config.mjs.

Fonts 404 / module not found ➜ fixed to relative filesystem paths for next/font/local.

Missing globals.css & TS alias @/* ➜ added src/app/globals.css and tsconfig.json paths.

Pushed .next/ / node_modules accidentally ➜ reset, add .gitignore, restage.

GitHub “Different root histories” ➜ cherry-pick onto branch created from origin/main.

12) Repository Snapshot (key files)


/content/posts/primul.mdx
/src/app/globals.css
/src/app/insights/page.tsx
/src/app/insights/[slug]/page.tsx
/src/components/ui/{button,card,input,label}.tsx
/src/lib/content/posts.ts
/public/fonts/aileron/*.otf
/public/fonts/audiowide/Audiowide-Regular.ttf
/tailwind.config.ts
/postcss.config.js
/tsconfig.json
/next.config.mjs
/docs/{setup.md, changelog.md, project-overview.md, PROJECT_CHARTER_PROMPT.md}
13) Deliverables Checklist (Step 0)
Tools installed (Git, Node, Cursor): ✅

Project scaffolded (Next 13.5): ✅

Content configured: ✅ Native MD/MDX (per your approval; Contentlayer not used)

Local run: ✅ http://localhost:3000

/insights (list) & /insights/primul (MDX with JSX) ✅

Repo hygiene: ✅ .gitignore, docs/*, env placeholders

Initial baseline committed & pushed: ✅ via merged PRs

14) Documentation & Changelog
docs/setup.md — contains the Step 0 commands and outcomes.

docs/changelog.md — updated with:

[2025-09-04] Step 4: MDX runtime + brand fonts + typography

[2025-09-04] Step 5: UI kit (shadcn/ui) + tokens + demo

15) Security & Privacy
Dev server local-only (no external exposure).

Robots Disallow ensures no indexing during development.

Local fonts reduce external calls (GDPR-friendly).

No secrets committed; .env.example present for future envs.

16) Next Steps (proposal)
Step 6 – App Shell (Header/Footer/Nav)

Add responsive Header (brand logo + nav) and Footer (legal stubs).

Keep robots Disallow until launch window.

Later: Brand color tokens, core pages (Home/Services/Contact), SEO metadata defaults, legal pages (GDPR/ToS/Cookies), CI/CD.

