import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-surface p-6 h-64 overflow-hidden hover:border-brand/40 transition-colors"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs tracking-widest text-muted">{course.id}</span>
        <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>
      <div>
        <span className="text-xs uppercase tracking-widest text-brand">{course.tag}</span>
        <h3 className="mt-2 text-xl font-display font-bold text-paper leading-tight">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-muted line-clamp-2">{course.summary}</p>
      </div>
    </Link>
  );
}
