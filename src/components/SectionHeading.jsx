export default function SectionHeading({ eyebrow, title, className = "" }) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-brand mb-3">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-5xl font-display font-black uppercase leading-tight text-paper">
        {title}
      </h2>
    </div>
  );
}
