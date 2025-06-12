# Personal Portfolio&nbsp;🌐⚡️


> **Welcome!** This repo is my living playground for modern front-end craft, interactive 3-D, and _baked-in_ security best-practices.  
> **TL;DR** — `git clone`, `npm i`, `npm run dev`, start hacking.

---

## ✨ Key Highlights

| **Area** | **What you’ll find** |
| :-- | :-- |
| **Stack** | Vite + React (⚛️ powered by **SWC**), TypeScript, Tailwind CSS, [shadcn/ui], Three.js |
| **Security** | Strict **Content-Security-Policy**, hardened HTTP headers, dependency auditing via `npm audit`, public **`.well-known/security.txt`** |
| **DX** | Hot-reload dev server (`localhost:8080`), path aliases `@/...`, ESLint + Prettier, **Bun** lock-file for ultra-fast installs |
| **3-D / Canvas** | Lazy-loaded Three.js scene split into a vendor chunk |
| **Accessibility** | Radix UI primitives & semantic HTML throughout |

---

## 🔐 Built-in Security Hardening

* **HTTP headers** – injected by `vite.config.ts`  
  `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and a minimal CSP.
* **CSP helper** – reusable policy constants live in `src/lib/security.ts`.
* **Safe defaults** – no inline `<script>` tags, no `eval` in production, strict MIME sniffing.
* **Vulnerability disclosure** – `public/.well-known/security.txt` advertises a contact channel.
* **Dependency scanning** – run `npm audit --production` before each release (CI stub included).

---
## Repository 

cyber-aura-forge/
├─ src/
│  ├─ components/   # reusable UI
│  ├─ pages/        # routed pages
│  ├─ lib/          # utilities (security, helpers, …)
│  └─ main.tsx      # app entry
├─ public/          # static assets & security.txt
├─ vite.config.ts   # build & dev-server config
└─ README.md        # you are here 🚀
