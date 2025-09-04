# 📜 Cloud on Demand Website – Changelog

This file records **all key project decisions, approvals, and changes**.  
Each entry must include date, author, description, and impact.  

---

## Format
- **Date**: YYYY-MM-DD  
- **Author**: Name / Role  
- **Decision/Change**: What was decided or changed  
- **Reasoning**: Why it was made  
- **Impact**: Consequences (technical, business, design, scope)  
- **Approval**: Confirmed by Cosmin (Yes/No)  

---

## Entries

### [YYYY-MM-DD] – Example Entry
- **Author**: Cosmin – IT Project Manager  
- **Decision/Change**: Added "AI Expert Consultant" as permanent persona.  
- **Reasoning**: Needed for AI feature planning and lead scoring.  
- **Impact**: Expanded team composition, future AI scope enabled.  
- **Approval**: ✅ Yes – confirmed by Cosmin

# 📜 Cloud on Demand Website – Changelog

This file tracks all **decisions, approvals, and structural changes** for the project.  
Each entry must include: **Date, Section, Decision, Made by, Approved by (Cosmin), Notes**.  

---

## 🔹 2025-09-04
**Section**: Project Setup  
- **Decision**: Documentation will be kept in **Confluence** (workspace: Cloud on Demand Website – Master Build) and **GitHub** (repo: Cloud-on-Demand-Website---Master-Build).  
- **Made by**: Assistant  
- **Approved by**: Cosmin  
- **Notes**: Jira will not be used at this stage. README.md will be created later when working environment is set.  

---

## 🔹 2025-09-04
**Section**: Project Overview  
- **Decision**: Confluence *Project Overview* page will include only Objectives, Team Roles, Core Documents (Initial Framework only), Roadmap (Initial Framework only), and GitHub Integration.  
- **Made by**: Assistant  
- **Approved by**: Cosmin  
- **Notes**: Other documents/roadmap items will be added progressively.  

---

## 🔹 2025-09-04
**Section**: Initial Framework  
- **Decision**: *Initial Framework* page added as first child page under Confluence Project Overview.  
- **Made by**: Assistant  
- **Approved by**: Cosmin  
- **Notes**: Contains team roles, objectives, rules, and workflow.  

[2025-09-04] Step 4 � MDX runtime + brand fonts + typography
- Added MDX runtime (next-mdx-remote/rsc) with remark-gfm, rehype-slug, autolink-headings
- Refactored loader: list uses front-matter; detail compiles MDX ? React
- Wired local brand fonts via next/font/local (Aileron 400/700, Audiowide 400)
- Tailwind Typography enabled; added `.font-display` utility
- Verified: /insights/primul renders JSX block; H1 uses Audiowide; body uses Aileron
- Safety: robots.txt still Disallow; sitemap is stubbed (update before launch)
