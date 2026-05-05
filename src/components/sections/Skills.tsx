import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TechBadge } from "@/components/ui/TechBadge";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// Stack" title="Tools I reach for." />
        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <RevealOnScroll key={g.label} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {g.label}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <TechBadge key={s}>{s}</TechBadge>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}