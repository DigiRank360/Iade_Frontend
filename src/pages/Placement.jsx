import SectionHeading from "../components/SectionHeading.jsx";

export default function Placement() {
  return (
    <main className="pt-32 pb-24 px-6 sm:px-10 max-w-5xl mx-auto">
      <SectionHeading eyebrow="Placement" title="Digital Marketing Assistance" />
      <p className="mt-6 text-muted leading-relaxed max-w-2xl">
        100% placement support with hiring partners after course completion — resume reviews, mock
        interviews, and direct introductions to agencies and businesses hiring for digital roles.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        <div className="rounded-2xl border border-white/10 bg-surface p-6">
          <p className="font-display font-bold text-paper mb-2">For Students</p>
          <p className="text-sm text-muted leading-relaxed">
            Get matched with roles that fit the skills you trained in — from SEO executive to
            performance marketer.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-surface p-6">
          <p className="font-display font-bold text-paper mb-2">Hire a Fresher Through IADE</p>
          <p className="text-sm text-muted leading-relaxed">
            Looking to hire? Reach out and we'll connect you with job-ready graduates from our current
            batches.
          </p>
        </div>
      </div>
    </main>
  );
}
