import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Πολιτική απορρήτου",
  description: "Πληροφορίες σχετικά με την προστασία προσωπικών δεδομένων κατά τη χρήση της ιστοσελίδας.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="legal-page">
      <Container>
        <span className="section-kicker"><i /> Νομικές πληροφορίες</span>
        <h1>Πολιτική απορρήτου</h1>
        <p className="legal-page__lead">Τελευταία ενημέρωση: 11 Ιουλίου 2026</p>
        <section>
          <h2>1. Επικοινωνία</h2>
          <p>Η ιστοσελίδα δεν διαθέτει φόρμα συλλογής στοιχείων. Η επικοινωνία πραγματοποιείται απευθείας μέσω email στο {siteConfig.email}.</p>
        </section>
        <section>
          <h2>2. Δεδομένα email</h2>
          <p>Όταν επικοινωνείτε μέσω email, επεξεργαζόμαστε μόνο τα στοιχεία και τις πληροφορίες που επιλέγετε να μας αποστείλετε, αποκλειστικά για να απαντήσουμε στο μήνυμά σας.</p>
        </section>
        <section>
          <h2>3. Τεχνικά δεδομένα</h2>
          <p>Ο πάροχος φιλοξενίας ενδέχεται να καταγράφει βασικά τεχνικά δεδομένα ασφαλείας και λειτουργίας, όπως διεύθυνση IP και στοιχεία αιτήματος, σύμφωνα με τη δική του πολιτική απορρήτου.</p>
        </section>
        <section>
          <h2>4. Δικαιώματα</h2>
          <p>Μπορείτε να ζητήσετε πρόσβαση, διόρθωση ή διαγραφή δεδομένων που έχετε αποστείλει επικοινωνώντας στο {siteConfig.email}.</p>
        </section>
        <p className="legal-note">Το παρόν αποτελεί γενικό πρότυπο και πρέπει να ελεγχθεί από νομικό σύμβουλο πριν από εμπορική χρήση.</p>
      </Container>
    </main>
  );
}
