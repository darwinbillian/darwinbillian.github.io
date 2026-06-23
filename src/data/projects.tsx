export interface Project {
  title: string;
  description?: string;
  tags?: string[];
  links?: ProjectLinks;
}

export interface ProjectLinks {
  source_code?: string;
}

export const projects: Project[] = [
  {
    title: "Godot Hub",
    description:
      "Desktop application for managing multiple versions of the Godot Engine.",
    tags: ["React", "Rust", "Tailwind CSS", "Tauri", "TypeScript"],
    links: {
      source_code: "https://github.com/darwinbillian/godot-hub",
    },
  },
];
