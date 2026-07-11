# Deployment του DikoSouSite

## 1. Προαπαιτούμενα

- Node.js 22.13 ή νεότερο
- GitHub account
- Vercel account
- Ένα domain, όταν αποφασιστεί

## 2. Τοπικός έλεγχος

```bash
npm install
copy .env.local.example .env.local
npm run check
npm run dev
```

## 3. Environment variables

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.gr
NEXT_PUBLIC_BRAND_NAME=DikoSouSite
NEXT_PUBLIC_CONTACT_EMAIL=belisalex9876@gmail.com
```

Δεν χρειάζεται Resend, database ή backend, επειδή η επικοινωνία γίνεται με απλό `mailto:` link.

## 4. GitHub και Vercel

1. Δημιούργησε νέο GitHub repository.
2. Ανέβασε τα αρχεία του project.
3. Στο Vercel επίλεξε **Add New → Project**.
4. Κάνε import το repository.
5. Πρόσθεσε τα environment variables.
6. Πάτησε **Deploy**.

## 5. Domain

1. Πρόσθεσε το domain στο Vercel project.
2. Ακολούθησε τις DNS οδηγίες του Vercel.
3. Άλλαξε το `NEXT_PUBLIC_SITE_URL` στο τελικό URL.
4. Κάνε νέο deployment.

## 6. Τελικός έλεγχος

- Άνοιξε `/`, `/templates`, `/contact`, `/privacy`, `/terms`.
- Δοκίμασε το κουμπί email σε desktop και κινητό.
- Έλεγξε `/sitemap.xml` και `/robots.txt`.
- Πρόσθεσε το domain στο Google Search Console.
