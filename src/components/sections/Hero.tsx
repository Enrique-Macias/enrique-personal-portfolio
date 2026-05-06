import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { useLanguage } from "@/i18n";

export function Hero() {
  const { dictionary } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[var(--teal)] opacity-[0.10] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[var(--purple)] opacity-[0.12] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          {dictionary.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-5 max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {profile.firstName}{" "}
          <span className="relative inline-block">
            <span className="text-gradient">{profile.lastName}</span>
            <span
              aria-hidden
              className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gradient-brand opacity-70"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg text-foreground/80 sm:text-xl"
        >
          {dictionary.profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base"
        >
          {dictionary.profile.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-[var(--background)] shadow-[0_8px_30px_-8px_oklch(0.82_0.14_180/0.6)] transition-transform hover:-translate-y-0.5"
          >
            {dictionary.hero.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <IconLink href={profile.github} label={dictionary.hero.github}>
            <Github className="h-4 w-4" />
            {dictionary.hero.github}
          </IconLink>
          <IconLink href={profile.linkedin} label={dictionary.hero.linkedin}>
            <Linkedin className="h-4 w-4" />
            {dictionary.hero.linkedin}
          </IconLink>
          <IconLink href={`mailto:${profile.email}`} label={dictionary.hero.email}>
            <Mail className="h-4 w-4" />
            {dictionary.hero.email}
          </IconLink>
        </motion.div>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
    >
      {children}
    </a>
  );
}
