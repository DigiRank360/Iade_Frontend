import SectionHeading from "../components/SectionHeading.jsx";
import { CONTACT } from "../utils/data.js";

export default function OfflineClasses() {
  return (
    <main className="pt-32 pb-24 px-6 sm:px-10 max-w-4xl mx-auto">
      <SectionHeading eyebrow="Classes" title="Offline Classes" />
      <p className="mt-6 text-muted leading-relaxed max-w-2xl">
        In-person, hands-on training at our Bhopal campus with direct mentor access and a lab-based
        learning environment.
      </p>
      <p className="mt-6 text-sm text-muted">{CONTACT.address}</p>
    </main>
  );
}
