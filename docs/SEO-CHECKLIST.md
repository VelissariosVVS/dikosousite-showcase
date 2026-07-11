# SEO και performance checklist

## Ήδη υλοποιημένα στο showcase

- Server-rendered και statically generated pages όπου γίνεται
- Semantic HTML
- Responsive mobile-first CSS
- Ελάχιστο client-side JavaScript
- Metadata API του Next.js
- Canonical URLs
- Open Graph / social preview
- `sitemap.xml`
- `robots.txt`
- Organization, WebSite και ItemList JSON-LD
- `noindex` στα fictional demo websites
- Security headers
- Accessible labels και skip link
- Χωρίς εξωτερικά fonts ή βαριές stock εικόνες

## Για κάθε τελικό client site

- Μοναδικό title και meta description ανά σελίδα
- Μία κύρια πρόθεση αναζήτησης ανά landing page
- LocalBusiness subtype: MedicalBusiness, BarberShop ή CafeOrCoffeeShop
- Πραγματικό NAP: name, address, phone
- Ίδια στοιχεία σε website και Google Business Profile
- Service pages με πρωτότυπο περιεχόμενο
- Σωστά headings χωρίς τεχνητό keyword stuffing
- WebP/AVIF εικόνες με πραγματικές διαστάσεις και alt text
- Εσωτερικά links προς υπηρεσίες και τοποθεσία
- Google Maps link και σαφές CTA
- Search Console και sitemap submission
- Analytics μόνο με κατάλληλο consent setup

## Core Web Vitals

Οι τελικοί στόχοι πρέπει να ελέγχονται σε πραγματικό production URL και πραγματικές συσκευές. Ιδιαίτερη προσοχή σε:

- LCP: η βασική εικόνα/hero να είναι μικρή και άμεσα διαθέσιμη
- CLS: πάντα διαστάσεις σε εικόνες και embeds
- INP: περιορισμός third-party scripts και βαριών client components

Δεν είναι επαγγελματικά σωστό να εγγυηθεί κάποιος μόνιμο Lighthouse 100. Οι βαθμολογίες αλλάζουν ανά συσκευή, δίκτυο, hosting, εικόνες και scripts. Ο σωστός στόχος είναι σταθερά καλό real-user performance και τεχνική βάση χωρίς περιττό βάρος.
