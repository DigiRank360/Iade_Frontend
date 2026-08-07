import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { COURSES, CONTACT } from "../utils/data.js";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) return <Navigate to="/courses" replace />;

  return (
    <main className="pt-32 pb-24 px-6 sm:px-10 max-w-4xl mx-auto">
      <Link to="/courses" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted hover:text-brand transition-colors">
        <ArrowLeft className="w-4 h-4" /> All courses
      </Link>

      <p className="mt-8 text-xs uppercase tracking-widest text-brand">
        {course.tag} — {course.duration}
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl font-display font-black uppercase text-paper leading-tight">
        {course.title}
      </h1>
      <p className="mt-6 text-muted leading-relaxed max-w-2xl">{course.summary}</p>

      <div className="mt-10">
        <p className="text-xs uppercase tracking-widest text-muted mb-4">What you'll cover</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {course.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-paper/90">
              <Check className="w-4 h-4 text-brand shrink-0" /> {h}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={CONTACT.whatsapp}
        className="inline-flex mt-12 rounded-full bg-brand text-paper px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
      >
        Enquire on WhatsApp
      </a>
    </main>
  );
}
