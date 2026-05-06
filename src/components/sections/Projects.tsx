import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { useLanguage } from "@/i18n";

const VISUAL_KINDS = ["cms", "meds", "legal", "coach"] as const;

export function Projects() {
  const { dictionary } = useLanguage();
  const projects = dictionary.projects.items;

  return (
    <section id="projects" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={dictionary.projects.eyebrow} title={dictionary.projects.title} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--teal)]/40 hover:bg-card">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-0 transition-opacity group-hover:opacity-100"
                />
                <ProjectVisual kind={VISUAL_KINDS[i] ?? "cms"} />
                <h3 className="mt-5 text-lg font-medium text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
