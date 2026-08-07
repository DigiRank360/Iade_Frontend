import SectionHeading from "../components/SectionHeading.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { CONTACT } from "../utils/data.js";

export default function Contact() {
  return (
    <main className="pt-32 pb-24 px-6 sm:px-10 max-w-5xl mx-auto">
      <SectionHeading eyebrow="Contact" title="Let's Talk" />
      <div className="grid sm:grid-cols-2 gap-12 mt-10">
        <div>
          <p className="text-muted leading-relaxed">
            Have a question about a course or batch timing? Send a message or reach out directly —
            we usually reply within a day.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-paper/90">
            <li>{CONTACT.address}</li>
            <li>{CONTACT.email}</li>
            <li>{CONTACT.phone1}</li>
            <li>{CONTACT.phone2}</li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
