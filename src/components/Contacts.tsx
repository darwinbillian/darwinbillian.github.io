import { SiGithub } from "@icons-pack/react-simple-icons";
import { LucideMail } from "lucide-react";

interface Contact {
  link: string;
  icon: React.ReactNode;
}

const contacts: Contact[] = [
  {
    link: "https://github.com/darwinbillian",
    icon: <SiGithub />,
  },
  {
    link: "mailto:darwinbillian@outlook.com",
    icon: <LucideMail />,
  },
];

export default function Contacts() {
  return (
    <div className="flex gap-4">
      {contacts.map((contact) => (
        <ContactLink key={contact.link} contact={contact} />
      ))}
    </div>
  );
}

function ContactLink({ contact }: { contact: Contact }) {
  return (
    <a
      href={contact.link}
      target="_blank"
      className="transition hover:text-neutral-100"
    >
      {contact.icon}
    </a>
  );
}
