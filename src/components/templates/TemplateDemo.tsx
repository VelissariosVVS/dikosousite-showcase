import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { TemplateDefinition } from "@/types/template";
import { CategoryArtwork } from "./CategoryArtwork";

const categoryCopy = {
  doctor: {
    serviceTitle: "Ιατρικές υπηρεσίες με επίκεντρο τον άνθρωπο",
    serviceEyebrow: "Υπηρεσίες",
    storyEyebrow: "Η προσέγγισή μας",
    storyTitle: "Η σωστή φροντίδα ξεκινά με καθαρή επικοινωνία.",
    storyText:
      "Συνδυάζουμε επιστημονική κατάρτιση, σύγχρονη τεχνολογία και χρόνο για ουσιαστική ακρόαση. Κάθε επίσκεψη οργανώνεται ώστε ο ασθενής να γνωρίζει τι γίνεται και γιατί.",
    ctaTitle: "Κάντε το πρώτο βήμα για την υγεία σας.",
    ctaText: "Στείλτε αίτημα και η γραμματεία θα επικοινωνήσει μαζί σας για επιβεβαίωση.",
  },
  barber: {
    serviceTitle: "Grooming που χτίζεται γύρω από το δικό σου style",
    serviceEyebrow: "The service menu",
    storyEyebrow: "The craft",
    storyTitle: "Κάθε λεπτομέρεια μετράει. Από τη γραμμή μέχρι το τελείωμα.",
    storyText:
      "Δεν δουλεύουμε με ένα look για όλους. Ξεκινάμε από το πρόσωπο, τον τρόπο ζωής και το αποτέλεσμα που θέλεις να διατηρείται σωστά και μετά το ραντεβού.",
    ctaTitle: "Ready for your next cut?",
    ctaText: "Διάλεξε ώρα, barber και υπηρεσία. Η θέση σου επιβεβαιώνεται άμεσα.",
  },
  cafe: {
    serviceTitle: "Αυτό που σε κάνει να επιστρέφεις, κάθε μέρα",
    serviceEyebrow: "Coffee, food & moments",
    storyEyebrow: "Our place",
    storyTitle: "Ένας χώρος με δικό του ρυθμό, γεύση και ιστορία.",
    storyText:
      "Δίνουμε σημασία στον καφέ, στα υλικά και στην ατμόσφαιρα. Η εμπειρία παραμένει απλή: καλό προϊόν, ζεστή εξυπηρέτηση και ένας λόγος να μείνεις λίγο περισσότερο.",
    ctaTitle: "See you around the table.",
    ctaText: "Δείτε το menu, κλείστε τραπέζι ή βρείτε εύκολα τη διαδρομή προς τον χώρο μας.",
  },
} as const;

export function TemplateDemo({ template }: { template: TemplateDefinition }) {
  const copy = categoryCopy[template.category];
  const style = {
    "--demo-bg": template.theme.background,
    "--demo-fg": template.theme.foreground,
    "--demo-accent": template.theme.accent,
    "--demo-accent-2": template.theme.accent2,
    "--demo-surface": template.theme.surface,
    "--demo-muted": template.theme.muted,
    "--demo-border": template.theme.border,
  } as React.CSSProperties;

  return (
    <div className="preview-shell">
      <div className="preview-toolbar">
        <Link href="/templates" className="preview-toolbar__back">← Όλα τα templates</Link>
        <div>
          <span>{template.categoryLabel}</span>
          <strong>{template.name}</strong>
        </div>
        <Link href="/contact" className="button button--small button--light">
          Επικοινωνία <ArrowIcon size={15} />
        </Link>
      </div>

      <main className={`demo-site demo-site--${template.layout} demo-site--${template.category}`} style={style}>
        <header className="demo-header">
          <Link href="#" className="demo-logo" aria-label={template.businessName}>
            <span className="demo-logo__symbol" aria-hidden="true">
              {template.category === "doctor" ? "+" : template.category === "barber" ? "✦" : "○"}
            </span>
            <span>{template.businessName}</span>
          </Link>
          <nav aria-label="Demo navigation">
            <a href="#services">Υπηρεσίες</a>
            <a href="#about">Σχετικά</a>
            <a href="#reviews">Αξιολογήσεις</a>
            <a href="#contact">Επικοινωνία</a>
          </nav>
          <a href="#contact" className="demo-button demo-button--compact">{template.primaryAction}</a>
        </header>

        <section className="demo-hero">
          <div className="demo-hero__copy">
            <span className="demo-eyebrow">{template.eyebrow}</span>
            <h1>{template.heroTitle}</h1>
            <p>{template.heroText}</p>
            <div className="demo-actions">
              <a href="#contact" className="demo-button">{template.primaryAction}</a>
              <a href="#about" className="demo-text-link">{template.secondaryAction} <ArrowIcon /></a>
            </div>
            <div className="demo-mini-contact">
              <span>{template.location}</span>
              <a href={`tel:${template.phone.replace(/\s/g, "")}`}>{template.phone}</a>
            </div>
          </div>
          <div className="demo-hero__art">
            <CategoryArtwork category={template.category} layout={template.layout} />
            <div className="demo-floating-card">
              <span className="demo-floating-card__icon">✓</span>
              <span><strong>Άμεση εξυπηρέτηση</strong><small>{template.hours}</small></span>
            </div>
          </div>
        </section>

        <section className="demo-highlight-bar" aria-label="Βασικά πλεονεκτήματα">
          {template.highlights.map((highlight, index) => (
            <div key={highlight}>
              <span>0{index + 1}</span>
              <strong>{highlight}</strong>
            </div>
          ))}
        </section>

        <section className="demo-section demo-services" id="services">
          <div className="demo-section__heading">
            <span className="demo-eyebrow">{copy.serviceEyebrow}</span>
            <h2>{copy.serviceTitle}</h2>
            <p>Οι βασικές πληροφορίες παρουσιάζονται καθαρά, ώστε ο επισκέπτης να καταλαβαίνει γρήγορα τι προσφέρει η επιχείρηση.</p>
          </div>
          <div className="demo-service-grid">
            {template.services.map((service, index) => (
              <article key={service.title}>
                <span className="demo-service-grid__number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact">Περισσότερα <ArrowIcon size={15} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="demo-story" id="about">
          <div className="demo-story__visual">
            <div className="demo-story__shape">
              <CategoryArtwork category={template.category} layout={template.layout} />
            </div>
            <span>{template.location}</span>
          </div>
          <div className="demo-story__copy">
            <span className="demo-eyebrow">{copy.storyEyebrow}</span>
            <h2>{copy.storyTitle}</h2>
            <p>{copy.storyText}</p>
            <ul>
              {template.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <a href="#contact" className="demo-text-link">Γνωρίστε μας καλύτερα <ArrowIcon /></a>
          </div>
        </section>

        <section className="demo-testimonial" id="reviews">
          <span className="demo-testimonial__quote">“</span>
          <blockquote>{template.testimonial.quote}</blockquote>
          <cite>{template.testimonial.author}</cite>
          <div className="demo-stars" aria-label="5 στα 5 αστέρια">★★★★★</div>
        </section>

        <section className="demo-contact" id="contact">
          <div>
            <span className="demo-eyebrow">Επικοινωνία</span>
            <h2>{copy.ctaTitle}</h2>
            <p>{copy.ctaText}</p>
          </div>
          <div className="demo-contact__card">
            <div><span>Τοποθεσία</span><strong>{template.location}</strong></div>
            <div><span>Ωράριο</span><strong>{template.hours}</strong></div>
            <div><span>Τηλέφωνο</span><strong>{template.phone}</strong></div>
            <a href="#" className="demo-button">{template.primaryAction}</a>
          </div>
        </section>

        <footer className="demo-footer">
          <strong>{template.businessName}</strong>
          <span>© {new Date().getFullYear()} · Demo website</span>
          <div><a href="#">Instagram</a><a href="#">Facebook</a><a href="#">Google Maps</a></div>
        </footer>
      </main>
    </div>
  );
}
