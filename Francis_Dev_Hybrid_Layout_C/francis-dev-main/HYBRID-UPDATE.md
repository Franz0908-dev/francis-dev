# FRANCIS.DEV — Hybrid recruiter-first update

Original purple/black palette, photo assets, routes, and motion retained.

## Changes
- Home: compact hero plus 4 evidence cards, 3 featured projects, tech summary, contact CTA.
- About: closer alignment and shorter portrait height.
- Navbar: simpler primary routes (Home, About, Projects, Tech Stack, Contact). Journey and Playground routes remain valid for direct links and footer.
- Projects: internship filter corrected, academic lab reservation included as **planning only**.
- Existing resume and cover letter remain in `public/documents`.

## Deploy
1. Replace repository source files with this folder's contents, but do not upload `node_modules` or secrets.
2. Vercel project import: Vite, build `npm run build`, output `dist`.
3. Open `/`, `/about`, `/projects`, `/projects/school-laboratory`, `/tech-stack`, and `/contact` after deployment.
4. Test resume download and email contact links.

## Verification limits
Production build could not be executed here: npm cache lacks dependencies, so `npm ci --offline` failed. Test in Vercel and send build errors if any. No real screenshots were invented.
