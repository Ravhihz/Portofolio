import FlagshipCard from "./FlagshipCard";

export default function FeaturedProject() {
  return <section id="featured" className="section-shell border-t border-border py-24"><div className="mb-10 flex items-end justify-between gap-6"><div><p className="section-kicker mb-4">01 / Selected work</p><h2 className="section-title font-bold text-foreground">One project.<br /><span className="text-muted-foreground">Many moving parts.</span></h2></div><p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted-foreground sm:block">A closer look at a product built from zero to production.</p></div><FlagshipCard /></section>;
}
