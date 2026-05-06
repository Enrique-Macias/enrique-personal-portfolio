import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/i18n";

export function About() {
  const { dictionary } = useLanguage();

  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={dictionary.about.eyebrow} title={dictionary.about.title} />
        <div className="grid gap-12 md:grid-cols-2">
          <RevealOnScroll>
            <div className="space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
              {dictionary.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <dl className="rounded-2xl border border-border bg-card/40 p-6 sm:p-8">
              {dictionary.about.facts.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 ${
                    i !== 0 ? "border-t border-border" : ""
                  }`}
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="text-sm text-foreground sm:text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
