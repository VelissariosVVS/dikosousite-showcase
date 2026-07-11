import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TemplateDemo } from "@/components/templates/TemplateDemo";
import { getTemplate, templates } from "@/data/templates";

export const dynamicParams = false;

export function generateStaticParams() {
  return templates.map((template) => ({ category: template.category, slug: template.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const template = getTemplate(category, slug);
  if (!template) return {};

  return {
    title: `${template.name} — ${template.categoryLabel} website demo`,
    description: template.description,
    robots: { index: false, follow: true },
    alternates: { canonical: "/templates" },
    openGraph: {
      title: `${template.name} | Live website template`,
      description: template.description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

export default async function TemplatePreviewPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const template = getTemplate(category, slug);
  if (!template) notFound();
  return <TemplateDemo template={template} />;
}
