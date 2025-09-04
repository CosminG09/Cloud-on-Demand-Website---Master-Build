🟦 Step 0 – Project Setup (Contract Prompt)



By Cosmin GUGU

5 min

See views

Add a reaction
🎯 Objective
Set up a clean, reproducible local development environment and bootstrap the Cloud on Demand website project on a fresh Windows 11 Home laptop.
Repo: CosminG09/Cloud-on-Demand-Website---Master-Build (GitHub).
Tech stack: Next.js + TypeScript + Tailwind + shadcn/ui + MDX via Contentlayer (stable on Next 13.5).
Development runs only on localhost. Documentation is created alongside the code.

👥 Personas (permanent, none dropped)
IT Project Manager (Cosmin) — approvals, scope, priorities.

Lead Solution Architect — stack decisions, future-proofing.

Full Stack Developer — executes setup & coding.

DevOps & Deployment Engineer — repo hygiene, CI/CD scaffolding, env files.

Security & Privacy Officer — local-only dev, secrets handling, GDPR readiness.

Branding Specialist — fonts & assets pipeline readiness.

SEO & Analytics Specialist — ensures stable content pipeline (Contentlayer).

PR & Marketing Officer / Business Strategist / AI Expert — no immediate actions in Step 0, but must validate readiness for their later work.

📏 Rules
No changes to decisions/files without Cosmin’s explicit approval.

Every command/config includes What / Why / Expected outcome.

Documentation-first: create/update docs/setup.md & docs/changelog.md while executing.

Version policy: Pin major/minor, allow patches. Upgrading major/minor of core tools/frameworks requires approval and must be logged in docs/changelog.md.

Security: Do not expose the dev server; keep secrets out of the repo.

Stability: Use Next 13.5 with Contentlayer (do not upgrade Next or Contentlayer without approval).

🧰 A. Install Required Tools (Windows 11 Home)
Prefer winget (reproducible). If winget is unavailable, use manual installers.

A1) Git, Node LTS, VS Code (optional), nvm-windows (optional)
Command (PowerShell as Administrator):



winget install -e --id Git.Git
winget install -e --id OpenJS.NodeJS.LTS
winget install -e --id Microsoft.VisualStudioCode   # optional (Cursor will be main IDE)
winget install -e --id CoreyButler.NVMforWindows    # optional (Node version manager)
What: Installs Git, Node LTS (20.x), optional VS Code and nvm.

Why: Baseline toolchain. nvm helps if later we need to switch Node versions.

Expected: git --version, node -v, npm -v return versions.

Verification:



git --version
node -v
npm -v
A2) Install Cursor (GUI)
Download from https://cursor.sh/ and install.

What: Primary IDE with AI assistance.

Why: Faster iteration with GPT + code context.

Expected: You can open a folder as a workspace in Cursor.

🗂️ B. Prepare Workspace & Clone Repo
B1) Create a safe working folder (no spaces, lowercase)
Command:



mkdir "C:\CloudOnDemand\2025\cursor" -Force
cd "C:\CloudOnDemand\2025\cursor"
What: Creates a clean workspace path.

Why: create-next-app & npm dislike spaces/caps in folder names.

Expected: You are inside C:\CloudOnDemand\2025\cursor.

B2) Clone the GitHub repo (use HTTPS for new device simplicity)
Command:



git clone https://github.com/CosminG09/Cloud-on-Demand-Website---Master-Build.git
cd Cloud-on-Demand-Website---Master-Build
What: Pulls the remote repo locally.

Why: Keeps history and remote origin configured.

Expected: You are inside the repo folder (which currently may be empty).

If you prefer SSH later, set up an SSH key and switch the remote. Not needed for Step 0.

🏗️ C. Bootstrap Next.js (baseline project)
C1) Allow npx in this session (PowerShell policy)
Command:



Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
What: Enables running npx in the current shell only.

Why: Windows blocks scripts by default.

Expected: No error; npx works in this terminal.

C2) Scaffold Next.js in the current repo folder
Command:



npx create-next-app@latest . `
  --typescript `
  --eslint `
  --tailwind `
  --app `
  --src-dir `
  --import-alias "@/*" `
  --use-npm `
  --package-name cod_website_mb
When prompted: Turbopack = No (for stability).

What: Creates a Next.js App Router project with TS, ESLint, Tailwind, and alias.

Why: Agreed baseline stack.

Expected: Starter project files appear; npm run dev would start the default app.

📦 D. Stabilize for Contentlayer (MDX content)
D1) Pin framework versions for Contentlayer compatibility
Command:



npm install next@13.5 react@18 react-dom@18 --save
What: Pins Next 13.5 + React 18.

Why: Contentlayer is stable with Next 13.x (not 14/15).

Expected: package.json shows next@13.5.x, react@18, react-dom@18.

D2) Install Contentlayer + MDX helpers
Command:



npm install contentlayer next-contentlayer remark-gfm rehype-slug
What: Adds Contentlayer and MDX tooling.

Why: Enables content-driven sections (Insights/Blog, Case Studies, Services) without CMS.

Expected: Packages installed. Dev advisories may appear; acceptable for local dev.

D3) Configure Next to use Contentlayer
Create next.config.mjs (replace existing if needed):



import { withContentlayer } from "next-contentlayer";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
};
export default withContentlayer(nextConfig);
Create contentlayer.config.ts:



import { defineDocumentType, makeSource } from "contentlayer/source-files";
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: true },
  },
  computedFields: {
    slug: { type: "string", resolve: (doc) => doc._raw.flattenedPath },
  },
}));
export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
});
What: Minimal MDX schema for a “Post”.

Why: Verifies end-to-end MDX flow before we scale.

Expected: Contentlayer detects MDX files and generates types.

D4) Seed sample MDX content and routes
Create a sample post:



mkdir content\posts -Force
@'
---
title: "Primul articol"
date: "2025-09-04"
---
Bun venit la Cloud on Demand. Acesta este un articol MDX de test.
'@ | Out-File -Encoding utf8 content\posts\primul.mdx
Create listing page src/app/insights/page.tsx:



import { allPosts } from "contentlayer/generated";
export default function InsightsPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Insights</h1>
      <ul className="mt-4 space-y-2">
        {allPosts.map((p) => (
          <li key={p.slug}>
            <a href={`/insights/${p.slug}`} className="underline">{p.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
Create detail page src/app/insights/[slug]/page.tsx:



import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
export const generateStaticParams = async () =>
  allPosts.map((p) => ({ slug: p.slug }));
export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  const MDX = useMDXComponent(post.body.code);
  return (
    <main className="prose p-8">
      <h1>{post.title}</h1>
      <MDX />
    </main>
  );
}
What: Adds /insights (list) & /insights/[slug] (detail) pages.

Why: Validates the content pipeline early.

Expected: /insights shows the seeded post; /insights/primul renders MDX.

▶️ E. First Run (local-only)
Command (choose one):



npm run dev
# or, explicit host/port:
npm run dev -- --hostname localhost --port 3000
What: Starts the dev server.

Why: Validate everything compiles and loads locally.

Expected: http://localhost:3000/insights lists the sample post; /insights/primul renders MDX.

Security: Do not expose npm run dev to your network or the internet.

🧹 F. Repo Hygiene & Docs
F1) Housekeeping files
Create .gitignore:



node_modules
.next
.out
dist
.contentlayer
.env
.env.local
.DS_Store
Create .npmrc:



save-exact=true
Create .env.example:



NEXT_PUBLIC_GA4_ID=
DYNAMICS_WEBHOOK_URL=
What: Keeps repo clean, pins exact versions, and documents env variables.

Why: Predictable installs; no secrets in VCS; future integrations ready.

Expected: Git diff contains only source/config/docs, not generated or secret files.

F2) Create documentation folder & files


mkdir docs -Force
docs/PROJECT_CHARTER_PROMPT.md → your master prompt (already agreed)

docs/setup.md → paste this Step 0 (commands + “What/Why/Outcome”).

docs/changelog.md → use the template we created earlier.

What: Establishes documentation discipline from Day 1.

Why: Matches “no changes without approval” rule; enables traceability.

Expected: /docs exists and is versioned.

F3) Initial commit & push


git add .
git commit -m "chore: bootstrap Next 13.5 + Tailwind + Contentlayer + MDX routes + docs"
git push origin main
What: Saves the baseline to GitHub.

Why: Clean checkpoint you can revert to.

Expected: GitHub shows the full baseline app & docs.

🧭 Error Playbook (Windows)
npx.ps1 cannot be loaded → run
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

Scaffold refuses due to folder name → ensure working folder has no spaces/caps (e.g., cloud-on-demand-website-master-build).

next.config.ts not supported → use next.config.mjs provided above.

Locked files (.node binaries) on Windows → close Cursor, kill node processes, then delete node_modules; if needed use robocopy empty mirror.

npm audit warnings → acceptable during local dev; we will re-evaluate before production.

Dev server must be local only → never bind to external interfaces.

📦 Deliverables (Step 0 must produce)
Tools installed (Git, Node LTS; Cursor present).

Project scaffolded; Next 13.5 + Contentlayer configured.

Local site runs at http://localhost:3000; /insights and /insights/primul work.

Repo contains .gitignore, .npmrc, .env.example, docs/* (charter, setup, changelog).

Initial baseline committed and pushed to main.

✅ Approval Checkpoint (Cosmin)
Local dev server works; MDX page renders.

Baseline pushed to GitHub with docs & housekeeping files.

Next.js remains on 13.5 until we plan a migration path.
