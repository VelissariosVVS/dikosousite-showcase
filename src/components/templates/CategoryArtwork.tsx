import type { TemplateCategory, TemplateLayout } from "@/types/template";

export function CategoryArtwork({ category, layout }: { category: TemplateCategory; layout: TemplateLayout }) {
  if (category === "doctor") {
    return (
      <svg className={`demo-art demo-art--${layout}`} viewBox="0 0 640 650" role="img" aria-label="Αφηρημένη ιατρική εικονογράφηση">
        <rect x="60" y="58" width="520" height="540" rx={layout === "editorial" ? 8 : 240} fill="var(--demo-surface)" />
        <circle cx="320" cy="222" r="92" fill="var(--demo-accent-2)" opacity=".72" />
        <path d="M216 500c12-108 42-166 104-166s92 58 104 166" fill="var(--demo-accent)" opacity=".94" />
        <path d="M251 373c9 73 31 115 69 115s60-42 69-115" fill="none" stroke="var(--demo-bg)" strokeWidth="16" strokeLinecap="round" />
        <path d="M282 470c-6 48 4 80 38 80s44-32 38-80" fill="none" stroke="var(--demo-fg)" strokeWidth="10" strokeLinecap="round" />
        <circle cx="320" cy="557" r="17" fill="var(--demo-fg)" />
        <path d="M191 157h58M220 128v58" stroke="var(--demo-accent)" strokeWidth="13" strokeLinecap="round" opacity=".9" />
        <path d="M456 178c27 0 49 22 49 49s-22 49-49 49" fill="none" stroke="var(--demo-border)" strokeWidth="12" />
      </svg>
    );
  }

  if (category === "barber") {
    return (
      <svg className={`demo-art demo-art--${layout}`} viewBox="0 0 640 650" role="img" aria-label="Αφηρημένη εικονογράφηση κουρείου">
        <rect x="70" y="65" width="500" height="525" rx={layout === "bold" ? 42 : 250} fill="var(--demo-surface)" />
        <circle cx="320" cy="205" r="92" fill="var(--demo-accent-2)" opacity=".75" />
        <path d="M243 187c13-76 145-75 155 5-35-26-119-24-155-5Z" fill="var(--demo-fg)" />
        <path d="M231 439c14-91 42-139 89-139s75 48 89 139" fill="var(--demo-accent)" />
        <path d="M278 268c8 37 22 58 42 58s34-21 42-58" fill="none" stroke="var(--demo-fg)" strokeWidth="12" strokeLinecap="round" />
        <path d="M179 153l104 104M283 153 179 257" stroke="var(--demo-accent)" strokeWidth="9" strokeLinecap="round" />
        <circle cx="165" cy="139" r="24" fill="none" stroke="var(--demo-accent)" strokeWidth="9" />
        <circle cx="297" cy="139" r="24" fill="none" stroke="var(--demo-accent)" strokeWidth="9" />
        <path d="M439 144v182M463 144v182M487 144v182" stroke="var(--demo-border)" strokeWidth="10" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={`demo-art demo-art--${layout}`} viewBox="0 0 640 650" role="img" aria-label="Αφηρημένη εικονογράφηση καφέ">
      <rect x="68" y="68" width="504" height="520" rx={layout === "editorial" ? 12 : 210} fill="var(--demo-surface)" />
      <path d="M190 255h258v103c0 94-58 151-129 151s-129-57-129-151V255Z" fill="var(--demo-accent)" />
      <path d="M448 292h32c57 0 57 102 0 102h-38" fill="none" stroke="var(--demo-accent)" strokeWidth="30" strokeLinecap="round" />
      <path d="M242 200c-29-44 30-52 4-99M320 200c-29-44 30-52 4-99M398 200c-29-44 30-52 4-99" fill="none" stroke="var(--demo-accent-2)" strokeWidth="14" strokeLinecap="round" />
      <path d="M176 516h293" stroke="var(--demo-fg)" strokeWidth="13" strokeLinecap="round" />
      <circle cx="482" cy="171" r="35" fill="var(--demo-accent-2)" opacity=".8" />
      <path d="M132 338c-42-4-58-42-40-78 34 10 54 40 40 78Z" fill="var(--demo-accent-2)" />
    </svg>
  );
}
