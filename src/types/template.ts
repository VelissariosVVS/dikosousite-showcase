export type TemplateCategory = "doctor" | "barber" | "cafe";
export type TemplateLayout = "serene" | "editorial" | "bold" | "minimal";

export type TemplateService = {
  title: string;
  text: string;
};

export type TemplateDefinition = {
  id: string;
  category: TemplateCategory;
  categoryLabel: string;
  layout: TemplateLayout;
  name: string;
  businessName: string;
  location: string;
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  primaryAction: string;
  secondaryAction: string;
  description: string;
  services: TemplateService[];
  highlights: string[];
  testimonial: {
    quote: string;
    author: string;
  };
  hours: string;
  phone: string;
  theme: {
    background: string;
    foreground: string;
    accent: string;
    accent2: string;
    surface: string;
    muted: string;
    border: string;
  };
};
