import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Όροι χρήσης",
  description: "Βασικοί όροι χρήσης του website showcase και των demo templates.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main id="main-content" className="legal-page">
      <Container>
        <span className="section-kicker"><i /> Νομικές πληροφορίες</span>
        <h1>Όροι χρήσης</h1>
        <p className="legal-page__lead">Τελευταία ενημέρωση: 11 Ιουλίου 2026</p>
        <section><h2>1. Χαρακτήρας του περιεχομένου</h2><p>Τα templates και τα demo δεδομένα είναι ενδεικτικά. Επωνυμίες, αξιολογήσεις, διευθύνσεις και πρόσωπα που εμφανίζονται στα demos είναι φανταστικά και χρησιμοποιούνται μόνο για παρουσίαση σχεδιαστικών δυνατοτήτων.</p></section>
        <section><h2>2. Επικοινωνία</h2><p>Η επικοινωνία μέσω email έχει ενημερωτικό χαρακτήρα και δεν αποτελεί από μόνη της παραγγελία, σύμβαση ή δεσμευτική συμφωνία.</p></section>
        <section><h2>3. Πνευματική ιδιοκτησία</h2><p>Ο σχεδιασμός, ο κώδικας και τα στοιχεία του showcase προστατεύονται από την ισχύουσα νομοθεσία. Η χρήση ή αντιγραφή τους χωρίς άδεια δεν επιτρέπεται.</p></section>
        <section><h2>4. Διαθεσιμότητα</h2><p>Καταβάλλεται προσπάθεια για συνεχή και ασφαλή λειτουργία, χωρίς να παρέχεται εγγύηση αδιάλειπτης διαθεσιμότητας ή απουσίας τεχνικών σφαλμάτων.</p></section>
        <section><h2>5. Εξωτερικές υπηρεσίες</h2><p>Η λειτουργία μπορεί να βασίζεται σε hosting, domain ή άλλες υπηρεσίες τρίτων, οι οποίες διέπονται από τους δικούς τους όρους.</p></section>
        <p className="legal-note">Το παρόν αποτελεί γενικό πρότυπο και χρειάζεται νομικό έλεγχο πριν από εμπορική χρήση.</p>
      </Container>
    </main>
  );
}
