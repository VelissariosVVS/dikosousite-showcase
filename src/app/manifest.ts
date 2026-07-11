import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "DikoSouSite",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f8fc",
    theme_color: "#0f7ae5",
    lang: "el",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
