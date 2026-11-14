import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { useLanguage } from "@/i18n";

export function SelectedWork() {
  const { dictionary, language } = useLanguage();
  return (
    <section id="selected-work" className="relative px-6 py-24 sm:py-32">
      <span id="featured" aria-hidden className="absolute top-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-full max-w-7xl"
      >
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-gradient-brand opacity-[0.06] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={dictionary.selectedWork.eyebrow}
          title={dictionary.selectedWork.title}
          kicker={dictionary.selectedWork.kicker}
        />
        <div className="space-y-8">
          {dictionary.selectedWork.items.map((project, index) => (
            <RevealOnScroll key={project.slug}>
              <article className="rounded-3xl bg-gradient-brand p-px">
                <div className="grid items-center gap-8 rounded-3xl bg-card p-6 sm:p-10 lg:grid-cols-2 lg:gap-12">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-[var(--purple)]">
                      0{index + 1} / {project.status}
                    </p>
                    <h3 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
                      <Link
                        to="/projects/$slug"
                        params={{ slug: project.slug }}
                        search={{ lang: language }}
                        className="hover:text-[var(--teal)]"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm text-[var(--teal)]">{project.role}</p>
                    {project.period && (
                      <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                        {project.period}
                      </p>
                    )}
                    <p className="mt-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
                      {project.summary}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--teal)]"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <TechBadge key={tech}>{tech}</TechBadge>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        to="/projects/$slug"
                        params={{ slug: project.slug }}
                        search={{ lang: language }}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-background"
                        aria-label={`${dictionary.selectedWork.readCaseStudy}: ${project.title}`}
                      >
                        {dictionary.selectedWork.readCaseStudy}
                        <ArrowRight aria-hidden className="h-4 w-4" />
                      </Link>
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {dictionary.selectedWork.visitProject}
                          <ArrowUpRight aria-hidden className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <ProjectVisual project={project} illustrated />
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
