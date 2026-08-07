/**
 * A small stylised "browser screenshot" mock — stands in for a real product
 * screenshot in the coverflow hero. Swap children for an <img> if you have
 * real screens to show.
 */
export default function MockScreen({ kicker, title, tone = "dark" }) {
  const isLight = tone === "light";
  return (
    <div
      className={`w-full h-full rounded-sm overflow-hidden flex flex-col ${
        isLight ? "bg-[#F2F2F2] text-ink" : "bg-surface text-paper"
      }`}
    >
      <div
        className={`flex items-center justify-between px-4 py-3 text-[10px] uppercase tracking-widest ${
          isLight ? "text-ink/50" : "text-paper/40"
        }`}
      >
        <span>IADE</span>
        <span>Menu ≡</span>
      </div>
      <div className="flex-1 flex flex-col justify-end p-4">
        <span className="text-[10px] uppercase tracking-widest mb-1 text-brand">{kicker}</span>
        <span className="text-lg sm:text-xl font-display font-bold leading-tight">{title}</span>
      </div>
    </div>
  );
}
