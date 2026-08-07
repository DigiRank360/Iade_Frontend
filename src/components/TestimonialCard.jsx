export default function TestimonialCard({ testimonial }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface p-6 h-full flex flex-col justify-between">
      <p className="text-paper/90 leading-relaxed">"{testimonial.quote}"</p>
      <div className="mt-6">
        <p className="font-display font-bold text-paper">{testimonial.name}</p>
        <p className="text-xs uppercase tracking-widest text-muted mt-1">{testimonial.role}</p>
      </div>
    </div>
  );
}
