import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const facts = [
  ["Location", "Monterrey, Mexico"],
  ["Education", "B.S. Computer Science, Tec de Monterrey"],
  ["GPA", "3.9 / 4.0 — Graduating Jun 2026"],
  ["Currently", "Software Developer Intern @ Softtek"],
  ["Focus", "Agentic systems, LLM tools, dev tooling"],
];

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// About" title="A builder, not a templater." />
        <div className="grid gap-12 md:grid-cols-2">
          <RevealOnScroll>
            <div className="space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
              <p>
                I'm a final-year Computer Science student at Tec de Monterrey,
                graduating June 2026. I care about software that actually solves
                a real problem — and right now, that means agentic systems and
                LLM-powered tools that compress hours of work into seconds.
              </p>
              <p>
                I'm currently interning at Softtek, where I build AI-powered web
                apps and a visual agent workflow builder. On the side, I ship
                full-stack and iOS projects for nonprofits and small teams.
              </p>
              <p>
                I move fast, sweat the details, and take design as seriously as
                the code underneath it.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <dl className="rounded-2xl border border-border bg-card/40 p-6 sm:p-8">
              {facts.map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 ${
                    i !== 0 ? "border-t border-border" : ""
                  }`}
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="text-sm text-foreground sm:text-right">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}