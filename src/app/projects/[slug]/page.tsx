import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import type { Metadata } from "next";
import ProjectDetails from "./ProjectDetails";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({
      slug: project.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Raghavendra Singh`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study by Raghavendra Singh`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
