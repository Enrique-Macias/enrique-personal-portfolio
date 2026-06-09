import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/i18n";

export function Certifications() {
  const { dictionary } = useLanguage();
  const certifications = dictionary.certifications.items;

  return (
    <section id="certifications" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={dictionary.certifications.eyebrow}
          title={dictionary.certifications.title}
        />
        <div className="flex flex-wrap gap-3">
          {certifications.map((c, i) => {
            const card = (
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/50 px-4 py-3 transition-colors hover:border-[var(--teal)]/40 hover:bg-card">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand/20">
                  <Award className="h-4 w-4 text-[var(--teal)]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{c.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </div>
            );

            return (
              <RevealOnScroll key={c.name} delay={i * 0.05}>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
