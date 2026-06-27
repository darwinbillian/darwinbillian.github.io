import { LucideCodeXml } from "lucide-react";
import React from "react";

export interface Project {
  title: string;
  description?: React.ReactNode;
  tags?: string[];
  links?: ProjectLink[];
}

export interface ProjectLink {
  label: string;
  link: string;
  icon: React.ReactNode;
}

export const projects: Project[] = [
  {
    title: "Godot Hub",
    description: (
      <p>
        Desktop application for managing multiple versions of the Godot Engine.
      </p>
    ),
    tags: ["React", "Rust", "Tailwind CSS", "Tauri", "TypeScript"],
    links: [
      {
        label: "Source Code",
        link: "https://github.com/darwinbillian/godot-hub",
        icon: <LucideCodeXml size={16} />,
      },
    ],
  },
];
