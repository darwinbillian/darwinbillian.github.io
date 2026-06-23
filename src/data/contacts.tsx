import { SiGithub } from "@icons-pack/react-simple-icons";
import { LucideMail } from "lucide-react";

export interface Contact {
  link: string;
  icon: React.ReactNode;
}

export const contacts: Contact[] = [
  {
    link: "https://github.com/darwinbillian",
    icon: <SiGithub />,
  },
  {
    link: "mailto:darwinbillian@outlook.com",
    icon: <LucideMail />,
  },
];
