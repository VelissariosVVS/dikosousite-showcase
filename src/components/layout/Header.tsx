import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

const navItems = [
  { href: "/templates", label: "Templates" },
  { href: "/#process", label: "Διαδικασία" },
  { href: "/#seo", label: "SEO & ταχύτητα" },
  { href: "/contact", label: "Επικοινωνία" },
];

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Κύρια πλοήγηση">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="button button--small button--dark" href="/contact">
            Επικοινωνήστε μαζί μας
          </Link>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Άνοιγμα μενού">
            <span />
            <span />
          </summary>
          <div className="mobile-nav__panel">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </Container>
    </header>
  );
}
