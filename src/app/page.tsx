import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { categories, templates } from "@/data/templates";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const featured = [
    templates.find((item) => item.id === "doctor-serenity")!,
    templates.find((item) => item.id === "barber-urban")!,
    templates.find((item) => item.id === "cafe-roastery")!,
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    areaServed: "Greece",
    description: siteConfig.description,
    knowsAbout: ["Web design", "SEO", "Local business websites", "Next.js development"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "el-GR",
  };

  return (
    <main id="main-content">
      <JsonLd data={[organizationSchema, websiteSchema]} />

      <section className="home-hero">
        <Container className="home-hero__inner">
          <div className="home-hero__copy">
            <span className="section-kicker"><i /> Το site σας. Τώρα. Χωρίς περιττή διαδικασία.</span>
            <h1>Η ψηφιακή παρουσία που <em>εμπνέει εμπιστοσύνη</em> και ενισχύει την επιλογή της επιχείρησής σας.</h1>
            <p>
              Έτοιμα, επαγγελματικά templates για μικρές επιχειρήσεις — προσαρμοσμένα με τα δικά σας στοιχεία, περιεχόμενο και ταυτότητα.
            </p>
            <div className="hero-actions">
              <Link className="button button--dark" href="/templates">Δείτε τα templates <ArrowIcon /></Link>
              <Link className="button button--ghost" href="/contact">Επικοινωνήστε μαζί μας</Link>
            </div>
            <div className="hero-proof">
              <div><strong>12</strong><span>live templates</span></div>
              <div><strong>SEO</strong><span>ready structure</span></div>
              <div><strong>100%</strong><span>responsive</span></div>
            </div>
          </div>
          <div className="hero-showcase" aria-label="Προεπισκοπήσεις templates">
            <div className="hero-browser hero-browser--main">
              <div className="hero-browser__bar"><i /><i /><i /><span>dikosousite.gr</span></div>
              <div className="hero-browser__content">
                <span className="hero-browser__eyebrow">Modern local business</span>
                <strong>Σχεδιασμένο για να μετατρέπει.</strong>
                <span className="hero-browser__line" />
                <span className="hero-browser__line hero-browser__line--short" />
                <span className="hero-browser__button">Κλείστε ραντεβού</span>
                <div className="hero-browser__shape"><span /><span /></div>
              </div>
            </div>
            <div className="hero-phone">
              <div className="hero-phone__speaker" />
              <div className="hero-phone__screen">
                <span>MENU</span>
                <strong>Το site σου.<br />Τώρα.</strong>
                <div className="hero-phone__art" />
                <i />
                <i />
              </div>
            </div>
            <div className="hero-badge hero-badge--speed"><strong>95+</strong><span>Performance target</span></div>
            <div className="hero-badge hero-badge--mobile"><span>✓</span><strong>Mobile first</strong></div>
          </div>
        </Container>
      </section>

      <section className="logo-strip" aria-label="Κλάδοι επιχειρήσεων">
        <Container>
          <span>Ιατρεία</span><i />
          <span>Barber shops</span><i />
          <span>Καφετέριες</span><i />
          <span>Τοπικές επιχειρήσεις</span>
        </Container>
      </section>

      <section className="section section--categories">
        <Container>
          <div className="section-heading section-heading--split">
            <div><span className="section-kicker"><i /> Templates ανά κλάδο</span><h2>Δεν ξεκινάμε από το μηδέν.<br />Ξεκινάμε από κάτι ήδη δυνατό.</h2></div>
            <p>Επιλέγετε κατεύθυνση, προσαρμόζουμε το design και χτίζουμε το περιεχόμενο γύρω από τη δική σας επιχείρηση.</p>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link key={category.id} href={`/templates#${category.id}`} className={`category-card category-card--${category.id}`}>
                <span className="category-card__index">0{index + 1}</span>
                <div className="category-card__icon" aria-hidden="true">
                  {category.id === "doctor" ? "+" : category.id === "barber" ? "✂" : "☕"}
                </div>
                <h3>{category.label}</h3>
                <p>{category.description}</p>
                <span className="category-card__link">4 επιλογές <ArrowIcon /></span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--templates-preview">
        <Container>
          <div className="section-heading section-heading--split">
            <div><span className="section-kicker section-kicker--light"><i /> Επιλεγμένα designs</span><h2>Τρεις διαφορετικοί κόσμοι.<br />Μία κοινή ποιότητα.</h2></div>
            <Link className="text-link text-link--light" href="/templates">Δείτε και τα 12 templates <ArrowIcon /></Link>
          </div>
          <div className="featured-template-grid">
            {featured.map((template) => <TemplateCard key={template.id} template={template} featured />)}
          </div>
        </Container>
      </section>

      <section className="section" id="process">
        <Container>
          <div className="section-heading section-heading--center">
            <span className="section-kicker"><i /> Πώς λειτουργεί</span>
            <h2>Από το template στο δικό σας website.</h2>
            <p>Μία ξεκάθαρη διαδικασία χωρίς τεχνική σύγχυση και ατελείωτες καθυστερήσεις.</p>
          </div>
          <div className="process-grid">
            {[
              ["01", "Επιλογή κατεύθυνσης", "Διαλέγετε το template που ταιριάζει περισσότερο στην εικόνα και στο κοινό σας ή προτείνεται μια δικιά σας ιδέα."],
              ["02", "Συλλογή υλικού", "Μας δίνετε στοιχεία επιχείρησης, υπηρεσίες, φωτογραφίες, τοποθεσία και διαθέσιμες αξιολογήσεις."],
              ["03", "Προσαρμογή & SEO", "Προσαρμόζουμε design, κείμενα, local SEO, metadata και calls-to-action."],
              ["04", "Έλεγχος & παράδοση", "Ελέγχετε το τελικό αποτέλεσμα και λαμβάνετε έτοιμο site με οδηγίες deployment και διαχείρισης."],
            ].map(([number, title, text]) => (
              <article key={number} className="process-card"><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--seo" id="seo">
        <Container className="seo-grid">
          <div className="seo-visual">
            <div className="score-ring"><strong>95</strong><span>Performance</span></div>
            <div className="score-list">
              <div><span>SEO</span><strong>100</strong></div>
              <div><span>Accessibility</span><strong>100</strong></div>
              <div><span>Best Practices</span><strong>100</strong></div>
            </div>
            <div className="seo-wave" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
          </div>
          <div className="seo-copy">
            <span className="section-kicker section-kicker--light"><i /> SEO & Core Web Vitals</span>
            <h2>Δεν αρκεί να δείχνει όμορφο.<br />Πρέπει να είναι και τεχνικά σωστό.</h2>
            <p>Η δομή είναι σχεδιασμένη για γρήγορη φόρτωση, καθαρό HTML, σωστά metadata και εύκολη κατανόηση από μηχανές αναζήτησης.</p>
            <ul>
              <li><span>✓</span> Semantic HTML και προσβασιμότητα</li>
              <li><span>✓</span> Dynamic metadata, Open Graph και canonical URLs</li>
              <li><span>✓</span> Sitemap, robots.txt και structured data</li>
              <li><span>✓</span> Mobile-first responsive σχεδιασμός</li>
              <li><span>✓</span> Ελάχιστο JavaScript και μηδενικά βαριά page builders</li>
            </ul>
            <p className="seo-disclaimer">Οι τελικές βαθμολογίες εξαρτώνται από hosting, εικόνες, scripts τρίτων και το πραγματικό περιεχόμενο κάθε πελάτη.</p>
          </div>
        </Container>
      </section>

      <section className="section section--final-cta">
        <Container className="final-cta">
          <div><span className="section-kicker"><i /> Το επόμενο website σας</span><h2>Δείτε πρώτα. Αποφασίστε μετά.</h2><p>Εξερευνήστε τα live templates και επικοινωνήστε μαζί μας για περισσότερες πληροφορίες.</p></div>
          <div className="hero-actions"><Link className="button button--light" href="/templates">Δείτε templates</Link><Link className="button button--outline-light" href="/contact">Επικοινωνήστε μαζί μας <ArrowIcon /></Link></div>
        </Container>
      </section>
    </main>
  );
}
