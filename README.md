# This website is organized around three core surfaces:

- `Home` for a concise introduction and selected featured pieces
- `Work` for bio, affiliations, and contact
- `Media` for notes, features, publications, and talks

## Stack

- React
- Vite
- React Router
- CSS with a small shared palette/token system
- Netlify for deployment and form handling

## Notes

- The navigation is route-based and lives in [src/App.jsx](/src/App.jsx).
- `Home` and `Media` use image-card layouts tuned for lighter loading.
- The contact form on `Work` is set up for Netlify Forms.
- The design leans on a dark editorial surface with a softer off-white secondary band.

## Commands

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Run lint checks:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This site is deployed on Netlify.
