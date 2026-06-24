import {
  LucideChevronsDown,
  LucideCodeXml,
  LucideExternalLink,
} from "lucide-react";
import Contacts from "@/components/Contacts";
import { Project, projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  );
}

function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,white_50%,transparent_80%)]" />
      <section className="text-center">
        <p className="text-2xl font-bold text-neutral-100">
          Hi! I'm <span className="text-red-400">Darwin Billiano</span>
        </p>
        <h1 className="mt-4 text-6xl font-bold text-neutral-100">
          Software Developer
        </h1>
        <p className="mt-4">
          Based in Indonesia &middot; Open-Source Contributor
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-neutral-900 rounded transition hover:border-white/20 hover:bg-neutral-800"
          >
            Projects
            <LucideChevronsDown size={16} />
          </a>
          <Contacts />
        </div>
      </section>
    </div>
  );
}

function Projects() {
  return (
    <div className="flex flex-col items-center px-16">
      <section id="projects" className="w-full max-w-5xl py-32">
        <div className="flex items-center">
          <h2 className="flex-1 text-3xl font-bold text-neutral-100">
            Projects
          </h2>
          <a
            href="https://github.com/darwinbillian?tab=repositories"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-neutral-900 rounded transition hover:border-white/20 hover:bg-neutral-800"
          >
            View More
            <LucideExternalLink size={16} />
          </a>
        </div>
        <div className="mt-8 flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-8 border border-white/10 bg-neutral-900 rounded-lg">
      <h3 className="text-xl font-bold text-neutral-100">{project.title}</h3>
      {project.description && <p>{project.description}</p>}
      {project.tags && (
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 border border-white/10 bg-neutral-800 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {project.links && (
        <div className="mt-4 flex gap-4">
          {project.links.source_code && (
            <a
              href={project.links.source_code}
              target="_blank"
              className="flex items-center gap-2 transition hover:text-neutral-100 hover:underline"
            >
              <LucideCodeXml size={16} />
              Source Code
            </a>
          )}
        </div>
      )}
    </div>
  );
}
