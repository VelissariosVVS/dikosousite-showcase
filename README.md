# DikoSouSite Showcase — Contact Edition

Production-ready Next.js showcase με 12 live templates για γιατρούς, κουρεία και καφετέριες.

## Τι περιλαμβάνει

- Branded landing page DikoSouSite
- 12 responsive live templates
- SEO metadata, sitemap, robots.txt και structured data
- Σελίδα επικοινωνίας χωρίς φόρμα ή τιμοκατάλογο
- Άμεσο email: `info@dikosousite.gr`
- Privacy και terms pages προσαρμοσμένες στην απλή επικοινωνία μέσω email

## Τοπική εκτέλεση

```bash
npm install

npm run dev
```

Άνοιξε `http://localhost:3000`.

## Ρυθμίσεις

```env
NEXT_PUBLIC_SITE_URL=https://dikosousite.gr
NEXT_PUBLIC_BRAND_NAME=DikoSouSite
NEXT_PUBLIC_CONTACT_EMAIL=info@dikosousite.com
```

## Routes

- `/` — αρχική
- `/templates` — κατάλογος templates
- `/templates/[category]/[slug]` — live previews
- `/contact` — επικοινωνία μέσω email
- `/privacy` — πολιτική απορρήτου
- `/terms` — όροι χρήσης

## Έλεγχος πριν το deployment

```bash
npm run check
```

Για αναλυτικές οδηγίες δες `docs/DEPLOYMENT.md`.
