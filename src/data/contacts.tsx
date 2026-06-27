import { SiGithub } from "@icons-pack/react-simple-icons";
import { LucideMail } from "lucide-react";

export interface Contact {
  label: string;
  link: string;
  icon: React.ReactNode;
}

export const contacts: Contact[] = [
  {
    label: "GitHub",
    link: "https://github.com/darwinbillian",
    icon: <SiGithub />,
  },
  {
    label: "Email",
    link: "mailto:darwinbillian@outlook.com",
    icon: <LucideMail />,
  },
];
