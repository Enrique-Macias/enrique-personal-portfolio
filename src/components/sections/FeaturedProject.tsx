import { ArrowUpRight, Github } from "lucide-react";
import { NodeCanvas } from "@/components/ui/NodeCanvas";
import { TechBadge } from "@/components/ui/TechBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { featuredProject } from "@/data/projects";

export function FeaturedProject() {
  return (
    <section id="featured" className="relative px-6 py-24 sm:py-32">
      {/* gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-full max-w-7xl"
      >
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-gradient-brand opacity-[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <RevealOnScroll className="mb-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gradient">
            // Featured build
          </p>
          <h2 className="mt-3 text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {featuredProject.title}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="relative rounded-3xl p-[1px] bg-gradient-brand">
            <div className="rounded-3xl bg-card/90 p-6 sm:p-10">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
                    {featuredProject.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredProject.tech.map((t) => (
                      <TechBadge key={t}>{t}</TechBadge>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      disabled
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-[var(--background)] opacity-60"
                    >
                      Live demo
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <button
                      disabled
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground"
                    >
                      <Github className="h-4 w-4" />
                      Source — coming soon
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <NodeCanvas />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}