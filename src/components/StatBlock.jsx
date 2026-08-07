export default function StatBlock({ value, label }) {
  return (
    <div className="border-t border-white/10 pt-4">
      <p className="text-3xl sm:text-4xl font-display font-bold text-paper">{value}</p>
      <p className="text-xs text-muted uppercase tracking-wide mt-1">{label}</p>
    </div>
  );
}
