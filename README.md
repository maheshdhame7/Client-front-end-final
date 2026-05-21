# Team Task Manager (Front-End)

React + Vite client for the Team Task Manager app.

## Live site

After deployment, the app is hosted at:

**https://maheshdhame7.github.io/Front-End/**

Deployment runs automatically on every push to `main` via GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

The dev server proxies `/api` to `http://localhost:5000`. Start the backend from the `server` folder in the parent project.

## Production API

GitHub Pages serves only the static frontend. Login and data APIs need a separately hosted backend. Set `VITE_API_URL` in the GitHub Actions workflow (or repository secrets) to your backend URL, for example:

```
VITE_API_URL=https://your-api.example.com/api
```

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start Vite dev server    |
| `npm run build`| Production build to `dist` |
| `npm run preview` | Preview production build |
