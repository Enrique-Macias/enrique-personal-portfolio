import { RevealOnScroll } from "./RevealOnScroll";

export function SectionHeading({
  eyebrow,
  title,
  kicker,
}: {
  eyebrow: string;
  title: string;
  kicker?: string;
}) {
  return (
    <RevealOnScroll className="mb-12 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {kicker && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{kicker}</p>}
    </RevealOnScroll>
  );
}
