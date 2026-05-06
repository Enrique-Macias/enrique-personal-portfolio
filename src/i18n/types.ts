export const languages = ["en", "es"] as const;

export type Language = (typeof languages)[number];

export type NavLinkId = "about" | "featured" | "projects" | "experience" | "contact";

export type Project = {
  title: string;
  summary: string;
  tech: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export type ContactErrorKey =
  | "emailServiceNotConfigured"
  | "emailRecipientNotConfigured"
  | "sendFailed"
  | "network"
  | "unknown";

export type Dictionary = {
  languageName: string;
  meta: {
    rootTitle: string;
    rootDescription: string;
    homeTitle: string;
    homeDescription: string;
    homeOgDescription: string;
  };
  notFound: {
    title: string;
    description: string;
    action: string;
  };
  error: {
    title: string;
    description: string;
    retry: string;
    home: string;
  };
  navbar: {
    links: Array<{ id: NavLinkId; label: string }>;
    cta: string;
    switchLabel: string;
  };
  profile: {
    tagline: string;
    role: string;
    location: string;
  };
  hero: {
    eyebrow: string;
    cta: string;
    github: string;
    linkedin: string;
    email: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    facts: Array<{ label: string; value: string }>;
  };
  featured: {
    eyebrow: string;
    project: Project;
    liveDemo: string;
    sourceComingSoon: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    items: Project[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: Experience[];
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: SkillGroup[];
  };
  certifications: {
    eyebrow: string;
    title: string;
    items: Certification[];
  };
  contact: {
    eyebrow: string;
    title: string;
    kicker: string;
    labels: {
      name: string;
      email: string;
      message: string;
    };
    validation: {
      required: string;
      invalidEmail: string;
      tooShort: string;
    };
    submit: string;
    sending: string;
    success: string;
    errors: Record<ContactErrorKey, string>;
    links: {
      github: string;
      linkedin: string;
    };
  };
  footer: {
    builtWith: string;
  };
};
