# Gemino AI — New Landing Page

Static landing page. No build step. Just HTML + CSS + JSX (loaded in the browser via Babel Standalone) + React via CDN.

## Files

- `index.html` — entry point
- `app.jsx` — all React components
- `styles.css` — layout & component styles
- `colors_and_type.css` — design tokens (colors, fonts)
- `fonts/` — Inter + IBM Plex Mono
- `assets/logos/` — Gemino logo files
- `vercel.json` — Vercel config (clean URLs + cache headers)

## Deploy to Vercel

### Option A — Drag & drop (no install)

1. Open https://vercel.com/new
2. Click **"Deploy"** → choose the **"Other"** template, or just drop this folder onto the page.
3. When asked for framework preset, pick **"Other"** (or **"Static"**).
4. Build command: leave **blank**.
5. Output directory: leave **blank** (uses repo root).
6. Click **Deploy**.

### Option B — Vercel CLI (recommended)

```bash
npm i -g vercel       # install once
cd gemino-landing     # cd into this folder
vercel                # follow prompts; first run links/creates a project
vercel --prod         # publish to production URL
```

When the CLI asks:
- **Set up and deploy?** → `Y`
- **Which scope?** → your account/team
- **Link to existing project?** → `N` (first time)
- **Project name?** → `gemino-ai` (or anything)
- **In which directory is your code?** → `./`
- **Override settings?** → `N`

### Option C — Push to GitHub, then import

1. `git init && git add . && git commit -m "init"`
2. Create a new repo on GitHub and push.
3. In Vercel, **New Project → Import** the repo. Defaults are correct.

## After deploy

- Production URL will look like `https://gemino-ai.vercel.app`
- Add a custom domain (e.g. `gemino.ai`) in **Project → Settings → Domains** and point your DNS as Vercel instructs.

## Notes

- The page loads React, ReactDOM, and Babel from `unpkg.com` at runtime. This works fine but adds ~300KB to first load. For better performance later, pre-compile `app.jsx` with esbuild/vite and replace the babel script.
- All images in `philosophy` / `ecosystem` sections currently point to `https://gemino.ai/*.jpg`. Self-host them by downloading and placing under `assets/` if you don't want to depend on the live site.
