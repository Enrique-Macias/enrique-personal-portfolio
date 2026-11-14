import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Github, Linkedin, Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { sendContactMessage } from "@/server/contact.functions";
import { profile } from "@/data/profile";
import { useLanguage } from "@/i18n";
import type { ContactErrorKey } from "@/i18n";

type FormData = {
  name: string;
  email: string;
  message: string;
  website?: string;
};

export function Contact() {
  const { language, dictionary } = useLanguage();
  const schema = useMemo(
    () => createSchema(dictionary.contact.validation),
    [dictionary.contact.validation],
  );
  const [status, setStatus] = useState<
    { kind: "idle" } | { kind: "ok" } | { kind: "err"; error: ContactErrorKey }
  >({ kind: "idle" });
  const successRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema as any),
  });
  const errorCount = Object.keys(errors).length;

  const onSubmit = async (data: FormData) => {
    setStatus({ kind: "idle" });
    try {
      const res = await sendContactMessage({ data });
      if (res.ok) {
        reset();
        setStatus({ kind: "ok" });
      } else {
        setStatus({ kind: "err", error: res.error ?? "unknown" });
      }
    } catch {
      setStatus({ kind: "err", error: "network" });
    }
  };

  useEffect(() => {
    if (status.kind === "ok") successRef.current?.focus();
    if (status.kind === "err") errorRef.current?.focus();
  }, [status]);

  useEffect(() => {
    if (status.kind !== "ok") return;

    const timeoutId = window.setTimeout(() => {
      setStatus({ kind: "idle" });
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [status.kind]);

  useEffect(() => {
    if (errorCount > 0) {
      void trigger();
    }
  }, [errorCount, language, trigger]);

  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={dictionary.contact.eyebrow}
          title={dictionary.contact.title}
          kicker={dictionary.contact.kicker}
        />
        <div className="grid gap-10 md:grid-cols-2">
          <RevealOnScroll>
            <div className="space-y-4">
              <ContactLink href={`mailto:${profile.email}`} icon={Mail} label={profile.email} />
              <ContactLink
                href={profile.github}
                icon={Github}
                label={dictionary.contact.links.github}
              />
              <ContactLink
                href={profile.linkedin}
                icon={Linkedin}
                label={dictionary.contact.links.linkedin}
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.05}>
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 sm:p-8"
            >
              {isSubmitting && (
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-0.5 overflow-hidden"
                  aria-hidden="true"
                >
                  <div className="h-full w-1/3 animate-[progress-slide_1.2s_ease-in-out_infinite] bg-gradient-brand" />
                </div>
              )}
              <div hidden aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  {...register("website")}
                  id="contact-website"
                  tabIndex={-1}
                  autoComplete="off"
                  maxLength={200}
                />
              </div>
              <fieldset disabled={isSubmitting} className="space-y-4">
                <Field
                  errorId="contact-name-error"
                  label={dictionary.contact.labels.name}
                  error={errors.name?.message}
                >
                  <input
                    {...register("name")}
                    id="contact-name"
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    maxLength={100}
                    autoComplete="name"
                    className="w-full rounded-lg border border-muted-foreground/60 bg-background/60 px-3 py-2.5 text-base text-foreground outline-none transition-colors focus:border-[var(--teal)]"
                  />
                </Field>
                <Field
                  errorId="contact-email-error"
                  label={dictionary.contact.labels.email}
                  error={errors.email?.message}
                >
                  <input
                    type="email"
                    {...register("email")}
                    id="contact-email"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    maxLength={255}
                    autoComplete="email"
                    className="w-full rounded-lg border border-muted-foreground/60 bg-background/60 px-3 py-2.5 text-base text-foreground outline-none transition-colors focus:border-[var(--teal)]"
                  />
                </Field>
                <Field
                  errorId="contact-message-error"
                  label={dictionary.contact.labels.message}
                  error={errors.message?.message}
                >
                  <textarea
                    rows={5}
                    {...register("message")}
                    id="contact-message"
                    required
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    maxLength={2000}
                    className="w-full resize-none rounded-lg border border-muted-foreground/60 bg-background/60 px-3 py-2.5 text-base text-foreground outline-none transition-colors focus:border-[var(--teal)]"
                  />
                </Field>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-[var(--background)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {dictionary.contact.sending}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {dictionary.contact.submit}
                    </>
                  )}
                </button>
              </fieldset>
              {status.kind === "ok" && (
                <div
                  ref={successRef}
                  tabIndex={-1}
                  role="status"
                  aria-live="polite"
                  className="mt-3 flex items-start gap-2 rounded-lg border border-[var(--teal)]/30 bg-[var(--teal)]/10 px-3 py-2.5 text-sm text-[var(--teal)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)]/40"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{dictionary.contact.success}</span>
                </div>
              )}
              {status.kind === "err" && (
                <div
                  ref={errorRef}
                  tabIndex={-1}
                  role="alert"
                  aria-live="assertive"
                  className="mt-3 flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2.5 text-sm text-destructive outline-none focus-visible:ring-2 focus-visible:ring-destructive/40"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{dictionary.contact.errors[status.error]}</span>
                </div>
              )}
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function createSchema(validation: { required: string; invalidEmail: string; tooShort: string }) {
  return z.object({
    name: z.string().trim().min(1, validation.required).max(100),
    email: z.string().trim().email(validation.invalidEmail).max(255),
    message: z.string().trim().min(5, validation.tooShort).max(2000),
    website: z.string().max(200).optional(),
  });
}

function Field({
  label,
  error,
  errorId,
  children,
}: {
  label: string;
  error?: string;
  errorId: string;
  children: React.ReactNode;
}) {
  return (
    <div className="block">
      <label
        htmlFor={errorId.replace("-error", "")}
        className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <span id={errorId} className="mt-1 block text-xs text-destructive">
          {error}
        </span>
      )}
    </div>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card/40 px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-[var(--teal)]/40"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/60 text-[var(--teal)] transition-colors group-hover:bg-gradient-brand group-hover:text-[var(--background)]">
        <Icon className="h-4 w-4" />
      </div>
      <span className="min-w-0 break-words text-sm text-foreground">{label}</span>
    </a>
  );
}
