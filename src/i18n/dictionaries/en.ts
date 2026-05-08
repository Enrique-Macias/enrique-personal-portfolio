import type { Dictionary } from "../types";

export const en = {
  languageName: "English",
  meta: {
    rootTitle: "Enrique Macias Personal Website",
    rootDescription: "Portfolio for Enrique Macías López",
    homeTitle: "Enrique Macías López — CS Student & AI Builder",
    homeDescription:
      "Portfolio of Enrique Macías López — final-year CS student at Tec de Monterrey, Software Developer Intern at Softtek, building AI-powered tools and agentic workflows.",
    homeOgDescription:
      "Building the future with AI, one workflow at a time. Projects, experience, and contact.",
  },
  notFound: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has been moved.",
    action: "Go home",
  },
  error: {
    title: "Something went wrong",
    description: "An unexpected error occurred. Please try again.",
    retry: "Try again",
    home: "Go home",
  },
  navbar: {
    links: [
      { id: "about", label: "About" },
      { id: "featured", label: "Featured" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "contact", label: "Contact" },
    ],
    cta: "Get in touch",
    switchLabel: "Select language",
  },
  profile: {
    tagline: "Building the future with AI, one workflow at a time.",
    role: "Final-year CS student at Tec de Monterrey · Software Developer Intern @ Softtek",
    location: "Monterrey, Mexico",
  },
  hero: {
    eyebrow: "// Portfolio — 2026",
    cta: "Get in touch",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
  about: {
    eyebrow: "// About",
    title: "A builder, not a templater.",
    paragraphs: [
      "I'm a final-year Computer Science student at Tec de Monterrey, graduating June 2026. I care about software that actually solves a real problem — and right now, that means agentic systems and LLM-powered tools that compress hours of work into seconds.",
      "I'm currently interning at Softtek, where I build AI-powered web apps and a visual agent workflow builder. On the side, I ship full-stack and iOS projects for nonprofits and small teams.",
      "I move fast, sweat the details, and take design as seriously as the code underneath it.",
    ],
    facts: [
      { label: "Location", value: "Monterrey, Mexico" },
      { label: "Education", value: "B.S. Computer Science, Tec de Monterrey" },
      { label: "GPA", value: "3.9 / 4.0 — Graduating Jun 2026" },
      { label: "Currently", value: "Software Developer Intern @ Softtek" },
      { label: "Focus", value: "Agentic systems, LLM tools, dev tooling" },
    ],
  },
  featured: {
    eyebrow: "// Featured build",
    project: {
      title: "Agentic Workflow Builder",
      summary:
        "A visual no-code automation tool where users design workflows on a node-based canvas — chaining triggers, LLM calls, parsers, and actions to automate work without writing a line of code. Built around AI integrations and LLM orchestration.",
      tech: ["React", "TypeScript", "Node.js", "LLMs", "Postgres"],
    },
    liveDemo: "Live demo",
    sourceComingSoon: "Source — coming soon",
  },
  projects: {
    eyebrow: "// More work",
    title: "Other things I've built.",
    items: [
      {
        title: "Nonprofit CMS",
        summary:
          "Content platform for a nonprofit — custom admin, media pipeline, and a public-facing site managed entirely by non-technical staff.",
        tech: ["React", "Node.js", "PostgreSQL", "Cloudinary"],
      },
      {
        title: "Medication Tracker (iOS)",
        summary:
          "Native iOS app to track medications with OCR-powered prescription scanning and an in-app AI assistant for reminders and questions.",
        tech: ["SwiftUI", "Firebase", "OCR", "OpenAI"],
      },
      {
        title: "Bufetec — Legal Services (iOS)",
        summary:
          "iOS app delivering legal services to underserved communities, with AI features that help users understand their case and next steps.",
        tech: ["SwiftUI", "Firebase", "AI"],
      },
      {
        title: "MeetCoach",
        summary:
          "Bilingual Flutter mobile marketplace connecting players with sports coaches — discovery, availability, booking, rescheduling, and real-time notifications, backed by Supabase with row-level security.",
        tech: ["Flutter", "Dart", "Riverpod", "Supabase", "PostgreSQL"],
      },
    ],
  },
  experience: {
    eyebrow: "// Experience",
    title: "Where I've been working.",
    items: [
      {
        company: "Softtek",
        role: "Software Developer Intern",
        period: "Aug 2025 — Present",
        bullets: [
          "Building AI-powered web applications and agent workflow builders.",
          "Designing LLM orchestration patterns for internal automation tools.",
          "Shipping features end-to-end across React, Node.js, and Postgres.",
        ],
      },
      {
        company: "Freelance",
        role: "Full-Stack Developer",
        period: "2023 — 2025",
        bullets: [
          "Delivered web and iOS apps for nonprofits and small businesses.",
          "Owned product, design, and engineering decisions on solo builds.",
        ],
      },
      {
        company: "Tec de Monterrey",
        role: "B.S. Computer Science · GPA 3.9 / 4.0",
        period: "Aug 2022 — Jun 2026",
        bullets: [
          "Coursework focused on AI, distributed systems, and software design.",
          "Built capstone projects with real nonprofit and startup partners.",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "// Stack",
    title: "Tools I reach for.",
    groups: [
      { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "Swift"] },
      { label: "Frameworks & Runtimes", items: ["React", "Node.js", "SwiftUI", "TanStack"] },
      { label: "Databases", items: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"] },
      { label: "Tools & Platforms", items: ["Git", "Docker", "Vercel", "Cloudinary", "Figma"] },
    ],
  },
  certifications: {
    eyebrow: "// Credentials",
    title: "Certifications.",
    items: [
      { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2026" },
      { name: "GitHub Foundations", issuer: "GitHub", year: "2026" },
      { name: "OpenAI Coding with JavaScript", issuer: "Codecademy", year: "2025" },
      { name: "Learn MongoDB", issuer: "Codecademy", year: "2024" },
    ],
  },
  contact: {
    eyebrow: "// Contact",
    title: "Let's build something.",
    kicker: "I'm open to job opportunities, collaborations, and interesting problems.",
    labels: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    validation: {
      required: "Required",
      invalidEmail: "Invalid email",
      tooShort: "Too short",
    },
    submit: "Send message",
    sending: "Sending...",
    success: "Thanks — message received. I'll reply soon.",
    errors: {
      emailServiceNotConfigured:
        "Email service not configured yet. Add RESEND_API_KEY to enable the contact form.",
      emailRecipientNotConfigured:
        "Email recipient not configured yet. Add TO_EMAIL to enable the contact form.",
      sendFailed: "Failed to send. Please try email directly.",
      network: "Network error. Try again.",
      unknown: "Something went wrong.",
    },
    links: {
      github: "github.com/enriquemacias",
      linkedin: "linkedin.com/in/enriquemacias",
    },
  },
  footer: {
    builtWith: "Developed with love · TanStack + Tailwind",
  },
} satisfies Dictionary;
