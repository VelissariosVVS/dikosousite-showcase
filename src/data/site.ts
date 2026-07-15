export const siteConfig = {
  name: process.env.NEXT_PUBLIC_BRAND_NAME || "DikoSouSite",
  title: "Ιστοσελίδες για μικρές επιχειρήσεις και επαγγελματίες.",
  description:
    "Επιλέξτε ένα από τα διαθέσιμα templates ή ελάτε με τη δική σας ιδέα και θα δημιουργήσουμε μια ιστοσελίδα προσαρμοσμένη στην επιχείρησή σας.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@dikosousite.gr",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://dikosousite.gr",
  location: "Ελλάδα",
};
