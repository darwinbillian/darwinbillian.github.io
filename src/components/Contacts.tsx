import { SiGithub } from "@icons-pack/react-simple-icons";
import { LucideMail } from "lucide-react";

export default function Contacts() {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/darwinbillian"
        target="_blank"
        className="transition hover:text-neutral-100"
      >
        <SiGithub />
      </a>
      <a
        href="mailto:darwinbillian@outlook.com"
        className="transition hover:text-neutral-100"
      >
        <LucideMail />
      </a>
    </div>
  );
}
