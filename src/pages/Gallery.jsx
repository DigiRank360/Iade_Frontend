import SectionHeading from "../components/SectionHeading.jsx";

const PLACEHOLDER_COUNT = 9;

export default function Gallery() {
  return (
    <main className="pt-32 pb-24 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeading eyebrow="Our Gallery" title="Life at IADE" />
      <p className="mt-4 text-muted max-w-2xl">
        Drop your campus and classroom photos into <code className="text-brand">/public/gallery</code>{" "}
        and reference them here.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-2xl border border-white/10 bg-surface flex items-center justify-center text-muted text-xs"
          >
            Photo {i + 1}
          </div>
        ))}
      </div>
    </main>
  );
}
