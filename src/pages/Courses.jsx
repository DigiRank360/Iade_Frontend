import SectionHeading from "../components/SectionHeading.jsx";
import CourseCard from "../components/CourseCard.jsx";
import { COURSES } from "../utils/data.js";

export default function Courses() {
  return (
    <main className="pt-32 pb-24 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeading eyebrow="Courses" title="Next-Gen Education & Teaching Courses" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {COURSES.map((c) => (
          <CourseCard key={c.slug} course={c} />
        ))}
      </div>
    </main>
  );
}
