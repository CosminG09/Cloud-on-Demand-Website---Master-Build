# ⚙️ Cloud on Demand Website – Environment Setup Log

This file documents all environment setup steps, so the project can be reproduced by any developer in the future.  

---

## 1. Local Development
- [ ] Install Node.js (LTS vXX.X.X)  
- [ ] Install package manager: PNPM or Yarn  
- [ ] Install Git  
- [ ] Install Cursor (or VSCode)  

---

## 2. Project Initialization
- [ ] Create Next.js project with TypeScript:  
  ```bash
  npx create-next-app@latest cloud-on-demand --typescript --eslint

  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

  npx shadcn-ui init
