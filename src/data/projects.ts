export type Project = {
  title: string;
  summary: string;
  tech: string[];
  href?: string;
  repo?: string;
};

export const featuredProject: Project = {
  title: "Agentic Workflow Builder",
  summary:
    "A visual no-code automation tool where users design workflows on a node-based canvas — chaining triggers, LLM calls, parsers, and actions to automate work without writing a line of code. Built around AI integrations and LLM orchestration.",
  tech: ["React", "TypeScript", "Node.js", "LLMs", "Postgres"],
};

export const projects: Project[] = [
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
];