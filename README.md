# Team Task Manager — Front-End

Production-ready React + Vite app for [GitHub Pages](https://maheshdhame7.github.io/Front-End/).

## Live URL

**https://maheshdhame7.github.io/Front-End/**

(Routes use hash URLs, e.g. `https://maheshdhame7.github.io/Front-End/#/login`)

## Deploy to GitHub (one-time setup)

### 1. Push code (use Personal Access Token)

GitHub does not accept account passwords for `git push`. Create a token:

1. Log in as **maheshdhame7** → [Tokens](https://github.com/settings/tokens)
2. **Generate new token (classic)** → scope: **repo**
3. In Terminal:

```bash
cd /path/to/client
printf "protocol=https\nhost=github.com\n\n" | git credential-osxkeychain erase
git push origin main
```

- **Username:** `maheshdhame7`
- **Password:** paste the **token** (not your email password)

### 2. Enable GitHub Pages

1. Repo: https://github.com/maheshdhame7/Front-End
2. **Settings → Pages**
3. **Build and deployment → Source:** **GitHub Actions**

Every push to `main` runs `.github/workflows/deploy.yml` and publishes `dist/`.

## Local development

```bash
npm install
npm run dev
```

API proxy: `/api` → `http://localhost:5000` (start backend from parent `server/` folder).

## Test production build locally

```bash
npm run preview:gh
```

Open http://localhost:4173/Front-End/

## Production API (optional)

GitHub Pages hosts **static files only**. For login and data, deploy the Node backend (`../server`) to Render/Railway/etc., then:

1. Repo **Settings → Secrets and variables → Actions**
2. New secret: `VITE_API_URL` = `https://your-api.example.com/api`
3. Push again to rebuild

Without a backend URL, the UI loads but API calls will fail.

## Project structure

| Path | Purpose |
|------|---------|
| `src/` | React app (pages, components, API) |
| `vite.config.js` | Base path `/Front-End/` for GitHub Pages |
| `.github/workflows/deploy.yml` | CI deploy to Pages |
| `public/.nojekyll` | Disable Jekyll on GitHub Pages |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview build |
| `npm run preview:gh` | Build + preview with GitHub base path |
