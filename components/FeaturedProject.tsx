import FlagshipCard from "./FlagshipCard";

export default function FeaturedProject() {
  return (
    <section id="featured" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-sm text-[var(--accent)]">01</span>
        <span className="text-[var(--border)]">/</span>
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text)]">Featured Project</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <FlagshipCard />
    </section>
  );
}