import SectionHeading from "../components/SectionHeading.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { TESTIMONIALS } from "../utils/data.js";

export default function Reviews() {
  return (
    <main className="pt-32 pb-24 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeading eyebrow="IADE Reviews" title="What Students Say About Our Platform" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </main>
  );
}
