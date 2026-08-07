import SectionHeading from "../components/SectionHeading.jsx";
import { TRAINERS } from "../utils/data.js";

export default function Trainers() {
  return (
    <main className="pt-32 pb-24 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeading eyebrow="Our Trainer" title="Greatest Teachers Inspire" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {TRAINERS.map((t) => (
          <div key={t.name} className="rounded-2xl border border-white/10 bg-surface p-6">
            <div className="w-16 h-16 rounded-full bg-ink border border-white/10 mb-4" />
            <p className="font-display font-bold text-paper">{t.name}</p>
            <p className="text-xs uppercase tracking-widest text-muted mt-1">{t.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
