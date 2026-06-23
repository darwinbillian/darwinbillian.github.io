import { SiGithub } from "@icons-pack/react-simple-icons";
import { LucideMail } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Hero />
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
      </section>
    </div>
  );
}
