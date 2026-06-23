import { Contact, contacts } from "@/data/contacts";

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
