import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tolojanahary-portfolio.me",
      lastModified: new Date(),
    },
    {
      url: "https://tolojanahary-portfolio.me/about",
      lastModified: new Date(),
    },
    {
      url: "https://tolojanahary-portfolio.me/projects",
      lastModified: new Date(),
    },
    {
      url: "https://tolojanahary-portfolio.me/experience",
      lastModified: new Date(),
    },
    {
      url: "https://tolojanahary-portfolio.me/contact",
      lastModified: new Date(),
    },
  ];
}
