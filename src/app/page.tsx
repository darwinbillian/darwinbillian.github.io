import { LucideCodeXml, LucideExternalLink } from "lucide-react";
import Contacts from "@/components/Contacts";

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
    <div className="min-h-screen flex flex-col items-center justify-center px-16">
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
        <div className="mt-6 flex justify-center">
          <Contacts />
        </div>
      </section>
    </div>
  );
}

function Projects() {
  return (
    <div className="flex flex-col items-center px-16">
      <section className="w-full max-w-5xl py-32">
        <div className="flex items-center">
          <h2 className="flex-1 text-3xl font-bold text-neutral-100">
            Projects
          </h2>
          <a
            href="https://github.com/darwinbillian?tab=repositories"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-neutral-900 rounded hover:border-white/20 hover:bg-neutral-800"
          >
            View More
            <LucideExternalLink size={16} />
          </a>
        </div>
        <div className="mt-8 flex flex-col gap-6">
          <div className="p-8 border border-white/10 bg-neutral-900 rounded-lg">
            <h3 className="text-xl font-bold text-neutral-100">Godot Hub</h3>
            <p>
              Desktop application for managing multiple versions of the Godot
              Engine.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-1 border border-white/10 bg-neutral-800 rounded">
                React
              </span>
              <span className="px-1 border border-white/10 bg-neutral-800 rounded">
                Rust
              </span>
              <span className="px-1 border border-white/10 bg-neutral-800 rounded">
                Tailwind CSS
              </span>
              <span className="px-1 border border-white/10 bg-neutral-800 rounded">
                Tauri
              </span>
              <span className="px-1 border border-white/10 bg-neutral-800 rounded">
                TypeScript
              </span>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/darwinbillian/godot-hub"
                target="_blank"
                className="flex items-center gap-2 hover:text-neutral-100 hover:underline"
              >
                <LucideCodeXml size={16} />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
