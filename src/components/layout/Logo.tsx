import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BrandMark } from "./BrandMark";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand-logo${inverse ? " brand-logo--inverse" : ""}`} aria-label={`${siteConfig.name} — αρχική σελίδα`}>
      <BrandMark inverse={inverse} className="brand-logo__mark" />
      <span className="brand-logo__copy">
        <strong><span>Diko</span><b>Sou</b><span>Site</span></strong>
        <small>ιστοσελίδες για τοπικές επιχειρήσεις</small>
      </span>
    </Link>
  );
}
