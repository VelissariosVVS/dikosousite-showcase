import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description: `Επικοινωνήστε με το ${siteConfig.name} μέσω email.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const subject = encodeURIComponent("Επικοινωνία μέσω DikoSouSite");
  const mailHref = `mailto:${siteConfig.email}?subject=${subject}`;

  return (
    <main id="main-content" className="contact-page">
      <section className="page-hero contact-hero">
        <Container className="contact-hero__inner">
          <div>
            <span className="section-kicker"><i /> Επικοινωνία</span>
            <h1>Ας συζητήσουμε για τη δική σας online παρουσία.</h1>
            <p>
              Στείλτε μας email αναφέροντας την επιχείρησή σας και είτε το template που σας ενδιαφέρει είτε κάποια δικιά σας ιδέα.
            </p>
          </div>
          <div className="contact-card">
            <span>Email επικοινωνίας</span>
            <a href={mailHref}>{siteConfig.email}</a>
            <p>Θα απαντήσουμε απευθείας στο email σας.</p>
            <a className="button button--dark" href={mailHref}>
              Αποστολή email <ArrowIcon />
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
