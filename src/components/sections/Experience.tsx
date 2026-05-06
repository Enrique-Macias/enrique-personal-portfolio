import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/i18n";

export function Experience() {
  const { dictionary } = useLanguage();
  const experience = dictionary.experience.items;

  return (
    <section id="experience" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={dictionary.experience.eyebrow}
          title={dictionary.experience.title}
        />
        <ol className="relative ml-3 space-y-10 border-l border-border pl-8 sm:ml-4 sm:pl-10">
          {experience.map((e, i) => (
            <RevealOnScroll key={e.company + i} delay={i * 0.05}>
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[42px] top-1.5 h-3 w-3 rounded-full bg-gradient-brand ring-4 ring-background sm:-left-[46px]"
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-medium text-foreground">
                    {e.role} <span className="text-muted-foreground">@ {e.company}</span>
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  {e.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--teal)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
