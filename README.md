# drhadarics.com

React (Vite + TypeScript) rebuild of the Dr. Hadarics Dóra ügyvéd website, replacing the Framer version.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

- Page copy lives in `src/content/site.ts` (expertise cards, contact details) and `src/content/privacy.json` (Adatkezelési tájékoztató).
- Routes: `/` and `/adatkezelesi-tajekoztato`. The host must rewrite unknown paths to `index.html` (SPA fallback).
