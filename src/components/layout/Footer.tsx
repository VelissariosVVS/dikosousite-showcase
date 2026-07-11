import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <div>
            <Logo inverse />
            <p>
              Websites για μικρές επιχειρήσεις που δείχνουν επαγγελματικά, φορτώνουν γρήγορα και παρουσιάζουν καθαρά τις υπηρεσίες τους.
            </p>
          </div>
          <div>
            <strong>Templates</strong>
            <Link href="/templates#doctor">Γιατροί</Link>
            <Link href="/templates#barber">Κουρεία</Link>
            <Link href="/templates#cafe">Καφετέριες</Link>
          </div>
          <div>
            <strong>Επικοινωνία</strong>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>{siteConfig.location}</span>
          </div>
          <div>
            <strong>Πληροφορίες</strong>
            <Link href="/contact">Επικοινωνήστε μαζί μας</Link>
            <Link href="/privacy">Πολιτική απορρήτου</Link>
            <Link href="/terms">Όροι χρήσης</Link>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} {siteConfig.name}. Με επιφύλαξη δικαιωμάτων.</span>
          <span>Designed & built in Greece.</span>
        </div>
      </Container>
    </footer>
  );
}
