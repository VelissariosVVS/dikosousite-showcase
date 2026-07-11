import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { categories, getTemplatesByCategory, templates } from "@/data/templates";
import { siteConfig } from "@/data/site";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Templates για γιατρούς, κουρεία και καφετέριες",
  description: "Δείτε 12 live website templates για μικρές επιχειρήσεις και επιλέξτε την αισθητική που ταιριάζει στο brand σας.",
  alternates: { canonical: "/templates" },
};

export default function TemplatesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Website templates για μικρές επιχειρήσεις",
    numberOfItems: templates.length,
    itemListElement: templates.map((template, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: template.name,
      url: `${siteConfig.url}/templates/${template.category}/${template.id}`,
    })),
  };

  return (
    <main id="main-content" className="templates-page">
      <JsonLd data={itemList} />
      <section className="page-hero page-hero--templates">
        <Container>
          <span className="section-kicker"><i /> 12 live επιλογές</span>
          <h1>Βρείτε την αισθητική που θα γίνει η <em>δική σας</em> ιστοσελίδα.</h1>
          <p>Κάθε design είναι responsive, παραμετροποιήσιμο και σχεδιασμένο γύρω από τις ανάγκες ενός συγκεκριμένου κλάδου.</p>
          <nav className="category-tabs" aria-label="Κατηγορίες templates">
            {categories.map((category) => <a key={category.id} href={`#${category.id}`}>{category.label}<span>04</span></a>)}
          </nav>
        </Container>
      </section>

      {categories.map((category, categoryIndex) => (
        <section className={`template-category template-category--${category.id}`} id={category.id} key={category.id}>
          <Container>
            <div className="template-category__heading">
              <span>0{categoryIndex + 1}</span>
              <div><small>{category.short}</small><h2>{category.label}</h2><p>{category.description}</p></div>
              <Link href="/contact" className="text-link">Επικοινωνία <ArrowIcon /></Link>
            </div>
            <div className="template-grid">
              {getTemplatesByCategory(category.id).map((template) => <TemplateCard key={template.id} template={template} />)}
            </div>
          </Container>
        </section>
      ))}

      <section className="templates-custom-cta">
        <Container>
          <div><span className="section-kicker section-kicker--light"><i /> Δεν βλέπετε τον κλάδο σας;</span><h2>Το ίδιο σύστημα μπορεί να προσαρμοστεί σε οποιαδήποτε τοπική επιχείρηση.</h2></div>
          <Link className="button button--light" href="/contact">Επικοινωνήστε μαζί μας <ArrowIcon /></Link>
        </Container>
      </section>
    </main>
  );
}
