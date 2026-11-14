export const languages = ["en", "es"] as const;

export type Language = (typeof languages)[number];

export type NavLinkId = "about" | "selected-work" | "projects" | "experience" | "contact";

export type ProjectSlug = "passly" | "rlvo" | "orqentic-ai";
export type VisualKind =
  | "wallet"
  | "marketplace"
  | "workflow"
  | "legal"
  | "scrum"
  | "medication"
  | "coach";
export type CaseStudySection =
  | "overview"
  | "myRole"
  | "product"
  | "architecture"
  | "challenges"
  | "testing"
  | "currentStatus";
export type Project = {
  slug: string;
  title: string;
  role: string;
  period?: string;
  status: string;
  summary: string;
  tech: string[];
  links: { live?: string };
  highlights: string[];
  visualKind: VisualKind;
  caseStudy?: {
    sections: Record<CaseStudySection, string[]>;
    diagram: string[];
  };
};

export type Experience = {
  company: string;
  role: string;
  period?: string;
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  url?: string;
};

export type ContactErrorKey =
  | "emailServiceNotConfigured"
  | "emailRecipientNotConfigured"
  | "rateLimited"
  | "sendFailed"
  | "network"
  | "unknown";

export type Dictionary = {
  languageName: string;
  meta: {
    socialImageAlt: string;
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
    specialization: string;
    availability: string;
  };
  hero: {
    eyebrow: string;
    cta: string;
    github: string;
    linkedin: string;
    email: string;
    downloadCV: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    facts: Array<{ label: string; value: string }>;
  };
  selectedWork: {
    eyebrow: string;
    title: string;
    kicker: string;
    readCaseStudy: string;
    visitProject: string;
    diagramLabel: string;
    items: Project[];
  };
  caseStudy: {
    eyebrow: string;
    back: string;
    contact: string;
    sections: Record<CaseStudySection, string>;
  };
  education: { school: string; degree: string; graduation: string; period: string };
  accessibility: { skip: string; menu: string; navigation: string };
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
