import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/socials";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;

  const projectRoutes = projects
    .filter((p) => p.caseStudy)
    .map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
