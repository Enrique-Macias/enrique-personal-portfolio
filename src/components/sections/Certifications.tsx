import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// Credentials" title="Certifications." />
        <div className="flex flex-wrap gap-3">
          {certifications.map((c, i) => (
            <RevealOnScroll key={c.name} delay={i * 0.05}>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/50 px-4 py-3">
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
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}