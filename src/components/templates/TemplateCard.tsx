import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { TemplateDefinition } from "@/types/template";

export function TemplateCard({ template, featured = false }: { template: TemplateDefinition; featured?: boolean }) {
  const style = {
    "--card-bg": template.theme.background,
    "--card-fg": template.theme.foreground,
    "--card-accent": template.theme.accent,
    "--card-surface": template.theme.surface,
    "--card-muted": template.theme.muted,
    "--card-border": template.theme.border,
  } as React.CSSProperties;

  return (
    <article className={`template-card${featured ? " template-card--featured" : ""}`}>
      <Link href={`/templates/${template.category}/${template.id}`} className="template-card__preview" style={style}>
        <div className={`mini-site mini-site--${template.layout}`}>
          <div className="mini-site__top">
            <span className="mini-site__logo">{template.businessName.split(" ")[0]}</span>
            <span className="mini-site__nav"><i /><i /><i /></span>
          </div>
          <div className="mini-site__hero">
            <div>
              <span className="mini-site__eyebrow">{template.eyebrow}</span>
              <strong>{template.heroTitle}</strong>
              <span className="mini-site__button" />
            </div>
            <div className={`mini-art mini-art--${template.category}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="mini-site__cards">
            <span />
            <span />
            <span />
          </div>
        </div>
        <span className="template-card__open">Live preview <ArrowIcon size={16} /></span>
      </Link>
      <div className="template-card__body">
        <div>
          <span className="tag">{template.categoryLabel}</span>
          <span className="template-card__variant">{template.layout}</span>
        </div>
        <h3>{template.name}</h3>
        <p>{template.description}</p>
        <div className="template-card__actions">
          <Link href={`/templates/${template.category}/${template.id}`}>Προεπισκόπηση</Link>
          <Link href="/contact">Επικοινωνία <ArrowIcon size={16} /></Link>
        </div>
      </div>
    </article>
  );
}
