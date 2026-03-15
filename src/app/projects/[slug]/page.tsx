import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import ProjectClient from "./ProjectClient";

// IMPORTANT: Essential for Next.js `output: export` with dynamic routes
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  
  // Logic for the bottom "Next Project" navigation
  const nextProjectIndex = (projectIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextProjectIndex];

  return <ProjectClient project={project} nextProject={nextProject} />;
}
