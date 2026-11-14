import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { TechBadge } from "@/components/ui/TechBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { dictionaries, useLanguage } from "@/i18n";
import { pageHead } from "@/lib/metadata";
import type { CaseStudySection } from "@/i18n/types";

export const Route = createFileRoute("/projects/$slug")({
  loaderDeps: ({ search }) => ({ language: search.lang ?? "en" }),
  loader: ({ params, deps }) => {
    const project = dictionaries[deps.language].selectedWork.items.find(
      (item) => item.slug === params.slug,
    );
    if (!project) throw notFound();
    return { project, language: deps.language };
  },
  head: ({ loaderData }) => pageHead(loaderData?.language ?? "en", loaderData?.project),
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const { dictionary, language } = useLanguage();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main tabIndex={-1} id="main-content" className="px-6 pb-24 pt-28 sm:pt-36">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            search={{ lang: language }}
            hash="selected-work"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            {dictionary.caseStudy.back}
          </Link>
          <header className="mt-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--teal)]">
              {dictionary.caseStudy.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-medium tracking-tight text-gradient sm:text-7xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-foreground/85 sm:text-xl">
              {project.summary}
            </p>
            <p className="mt-5 text-sm text-[var(--teal)]">{project.role}</p>
            <p className="mt-2 text-sm text-muted-foreground">{project.status}</p>
            {project.period && (
              <p className="mt-2 font-mono text-sm text-muted-foreground">{project.period}</p>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:border-[var(--teal)]"
              >
                {dictionary.selectedWork.visitProject}
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </a>
            )}
          </header>
          <nav
            aria-label={dictionary.caseStudy.eyebrow.replace("// ", "")}
            className="mt-10 rounded-2xl border border-border bg-card/50 p-4 lg:hidden"
          >
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {Object.entries(dictionary.caseStudy.sections).map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="inline-flex min-h-11 items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-16 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div className="space-y-12">
              {project.caseStudy &&
                (Object.entries(project.caseStudy.sections) as [CaseStudySection, string[]][]).map(
                  ([id, paragraphs]) => (
                    <RevealOnScroll key={id}>
                      <section
                        id={id}
                        aria-labelledby={`${id}-title`}
                        className="border-t border-border pt-7"
                      >
                        <h2 id={`${id}-title`} className="text-2xl font-medium tracking-tight">
                          {dictionary.caseStudy.sections[id]}
                        </h2>
                        <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                          {paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </section>
                    </RevealOnScroll>
                  ),
                )}
            </div>
            <aside className="space-y-6 lg:sticky lg:top-24">
              <nav
                aria-label={dictionary.caseStudy.eyebrow.replace("// ", "")}
                className="hidden rounded-2xl border border-border bg-card/50 p-5 lg:block"
              >
                <ul className="space-y-1">
                  {Object.entries(dictionary.caseStudy.sections).map(([id, label]) => (
                    <li key={id}>
                      <a
                        className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                        href={`#${id}`}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <ProjectVisual project={project} />
            </aside>
          </div>
          <div className="mt-16 border-t border-border pt-8">
            <Link
              to="/"
              search={{ lang: language }}
              hash="contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-background"
            >
              {dictionary.caseStudy.contact}
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
