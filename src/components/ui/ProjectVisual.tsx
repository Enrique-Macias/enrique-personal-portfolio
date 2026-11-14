import {
  Activity,
  CalendarDays,
  GitBranch,
  LayoutList,
  Scale,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import type { Project, VisualKind } from "@/i18n/types";
import { useLanguage } from "@/i18n";
import { ProjectIllustration } from "./ProjectIllustration";

const icons = {
  wallet: Wallet,
  marketplace: ShieldCheck,
  workflow: GitBranch,
  legal: Scale,
  scrum: LayoutList,
  medication: Activity,
  coach: CalendarDays,
} satisfies Record<VisualKind, typeof Wallet>;

export function ProjectVisual({
  project,
  compact = false,
  illustrated = false,
}: {
  project: Project;
  compact?: boolean;
  illustrated?: boolean;
}) {
  const { dictionary } = useLanguage();
  const Icon = icons[project.visualKind];

  if (compact) {
    return <ProjectIllustration kind={project.visualKind} compact />;
  }

  if (illustrated) {
    return (
      <figure className="min-w-0">
        <ProjectIllustration kind={project.visualKind} />
        <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
          {dictionary.selectedWork.diagramLabel}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="relative overflow-hidden rounded-2xl border border-border bg-background/70 p-5 sm:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(var(--muted-foreground) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative">
        <div className="mb-8 flex items-center justify-between gap-4">
          <span className="text-2xl font-medium tracking-tight text-gradient">{project.title}</span>
          <Icon aria-hidden className="h-7 w-7 text-[var(--teal)]" />
        </div>
        <ul className="space-y-3">
          {project.caseStudy?.diagram.map((item, index) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm"
            >
              <span aria-hidden className="font-mono text-xs text-[var(--purple)]">
                0{index + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
        <figcaption className="mt-6 text-xs leading-relaxed text-muted-foreground">
          {dictionary.selectedWork.diagramLabel}
        </figcaption>
      </div>
    </figure>
  );
}
