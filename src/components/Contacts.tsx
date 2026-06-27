import { Contact, contacts } from "@/data/contacts";

export default function Contacts() {
  return (
    <div>
      <ul className="flex gap-4">
        {contacts.map((contact) => (
          <li key={contact.link}>
            <ContactLink contact={contact} />
          </li>
        ))}
      </ul>
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
