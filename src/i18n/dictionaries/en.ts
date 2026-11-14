import type { Dictionary } from "../types";

export const en = {
  languageName: "English",
  meta: {
    socialImageAlt:
      "Enrique Macías López, Software Engineer. Full-Stack Development, AI Applications & Mobile.",
    rootTitle: "Enrique Macías López | Software Engineer",
    rootDescription:
      "Software Engineer in Monterrey, Mexico. Tec de Monterrey graduate with enterprise AI, full-stack and mobile development experience. Open to full-time roles, remote work and international relocation.",
    homeTitle: "Enrique Macías López | Software Engineer",
    homeDescription:
      "Software Engineer in Monterrey, Mexico. Tec de Monterrey graduate with enterprise AI, full-stack and mobile development experience. Open to full-time roles, remote work and international relocation.",
    homeOgDescription:
      "Software Engineer in Monterrey, Mexico. Tec de Monterrey graduate with enterprise AI, full-stack and mobile development experience. Open to full-time roles, remote work and international relocation.",
  },
  notFound: {
    title: "Page not found",
    description: "The page you’re looking for doesn’t exist or has been moved.",
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
      {
        id: "selected-work",
        label: "Work",
      },
      {
        id: "experience",
        label: "Experience",
      },
      {
        id: "about",
        label: "About",
      },
      {
        id: "projects",
        label: "Projects",
      },
      {
        id: "contact",
        label: "Contact",
      },
    ],
    cta: "Get in touch",
    switchLabel: "Select language",
  },
  accessibility: {
    skip: "Skip to content",
    menu: "Toggle menu",
    navigation: "Main navigation",
  },
  profile: {
    role: "Software Engineer",
    specialization: "Full-Stack Development, AI Applications & Mobile",
    tagline:
      "I build software products across web, AI and mobile. My experience includes enterprise AI at Softtek, freelance development and independent ventures, backed by a Computer Science degree from Tec de Monterrey.",
    location: "Monterrey, Mexico",
    availability: "Open to full-time roles · Remote & international relocation",
  },
  hero: {
    eyebrow: "// Software, from idea to implementation",
    cta: "View My Work",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    downloadCV: "Download CV",
  },
  about: {
    eyebrow: "// About",
    title: "Curiosity, ownership and craft.",
    paragraphs: [
      "I graduated from Tecnológico de Monterrey in June 2026 with a degree in Computer Science. I enjoy taking a product from an idea to working software, connecting thoughtful interfaces with the systems behind them.",
      "My path includes enterprise AI at Softtek, paid freelance work for Escalando Fronteras and my own ventures. I am interested in software engineering, applied AI and mobile development, with room to keep learning across the stack.",
      "Outside software, I played on Tec de Monterrey’s representative tennis team. The discipline, teamwork and persistence of competitive sport are part of how I approach my work.",
    ],
    facts: [
      {
        label: "Based in",
        value: "Monterrey, Mexico",
      },
      {
        label: "Education",
        value: "Tec de Monterrey · Graduated June 2026",
      },
      {
        label: "Seeking",
        value: "Full-time software engineering roles",
      },
      {
        label: "Mobility",
        value: "Remote work & international relocation",
      },
      {
        label: "Beyond code",
        value: "Representative tennis team",
      },
    ],
  },
  selectedWork: {
    eyebrow: "// Selected work",
    title: "Products I’m building.",
    kicker:
      "Independent ventures across SaaS, mobile and applied AI. My role, engineering decisions and current status.",
    readCaseStudy: "Read case study",
    visitProject: "Explore demo",
    diagramLabel: "Technical overview · Conceptual diagram, not a product screenshot",
    items: [
      {
        slug: "passly",
        title: "Passly",
        role: "Sole developer",
        status: "Advanced MVP · Validated in staging",
        summary:
          "A B2B digital loyalty SaaS that brings loyalty programs to Apple Wallet and Google Wallet.",
        tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
        links: {},
        highlights: [
          "Multi-tenant architecture with row-level security",
          "Transactional ledger",
          "Asynchronous processing and retries",
        ],
        visualKind: "wallet",
        caseStudy: {
          sections: {
            overview: [
              "Passly is a B2B SaaS for digital loyalty programs using Apple Wallet and Google Wallet. The product is an advanced MVP validated in staging.",
            ],
            myRole: [
              "I am the sole developer, responsible for building the product across the application, database and wallet integrations.",
            ],
            product: [
              "The product connects a business’s loyalty program to digital wallet passes, bringing the loyalty experience into Apple Wallet and Google Wallet.",
            ],
            architecture: [
              "The application uses Next.js and TypeScript, with Supabase and PostgreSQL. Its multi-tenant architecture uses row-level security to separate tenant data, a transactional ledger to record operations, and asynchronous processing with retries.",
            ],
            challenges: [
              "Tenant isolation, transactional consistency and external wallet integrations are the central engineering challenges.",
              "The ledger and asynchronous processing address different concerns: recording business operations and handling work that may need retries.",
            ],
            testing: [
              "Validated core functionality with automated database and integration tests, including Wallet flows on real iOS and Android devices. The advanced MVP has been validated in staging.",
            ],
            currentStatus: ["Advanced MVP validated in staging. Passly has not launched publicly."],
          },
          diagram: [
            "Next.js · TypeScript",
            "Supabase · PostgreSQL · RLS",
            "Transactional ledger",
            "Async processing · Retries",
            "Apple Wallet · Google Wallet",
          ],
        },
        period: "September 2026 - Present",
      },
      {
        slug: "rlvo",
        title: "RLVO",
        role: "Co-founder & CTO · Sole developer",
        status: "Advanced development · Staging validation",
        summary:
          "A university marketplace built around institutional verification, AI content moderation and administrative tools.",
        tech: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
        links: {},
        highlights: [
          "Institutional verification",
          "AI content moderation",
          "Administrative tools and infrastructure",
        ],
        visualKind: "marketplace",
        caseStudy: {
          sections: {
            overview: [
              "RLVO is a university marketplace in advanced development and staging validation, built by a founding team of three.",
            ],
            myRole: [
              "I am Co-founder & CTO and the sole developer on the three-person founding team. I am responsible for the mobile application, backend, administrative tools and infrastructure.",
            ],
            product: [
              "The marketplace includes institutional verification and AI content moderation, supported by tools for administration.",
            ],
            architecture: [
              "The mobile application uses React Native, Expo and TypeScript. Supabase and PostgreSQL support the backend, alongside institutional verification, AI moderation and administrative tooling.",
            ],
            challenges: [
              "Institutional verification and content moderation are central product and engineering concerns for a university marketplace.",
              "As the sole developer, I work across the mobile experience, backend and infrastructure while collaborating with the founding team on the product.",
            ],
            testing: [
              "Managed staging environments, automated testing and mobile release preparation for iOS and Android. The application remains in advanced development and staging validation.",
            ],
            currentStatus: [
              "Advanced development and validation in staging. RLVO has not launched publicly.",
            ],
          },
          diagram: [
            "React Native · Expo · TypeScript",
            "Supabase · PostgreSQL",
            "Institutional verification",
            "AI moderation",
            "Administrative tools",
          ],
        },
        period: "August 2026 - Present",
      },
      {
        slug: "orqentic-ai",
        title: "Orqentic AI",
        role: "Independent creator · Sole developer",
        status: "Independent project · Demo available",
        summary:
          "A visual workflow platform built from scratch, with execution visibility, scheduling and AI assistance.",
        tech: ["React", "TanStack Start", "TypeScript", "Supabase", "Cloudflare Workers"],
        links: {
          live: "https://orqentic-ai.enriquemaciaslpz.workers.dev",
        },
        highlights: [
          "Approximately 40 node types",
          "Per-node logs, token and cost tracking",
          "Pause, resume, schedules and AI assistance",
        ],
        visualKind: "workflow",
        caseStudy: {
          sections: {
            overview: [
              "Orqentic AI is an independent visual workflow platform that I built from scratch. It is a separate personal project from my work at Softtek.",
            ],
            myRole: [
              "I designed and developed the platform independently, from the visual product experience to workflow execution and deployment.",
            ],
            product: [
              "The platform includes approximately 40 node types, per-node logs, token and cost tracking, pause and resume, schedules, and AI assistance.",
            ],
            architecture: [
              "React, TanStack Start and TypeScript power the application, with Supabase and Cloudflare Workers in the stack. The visual workflow model is supported by execution controls and per-node observability.",
            ],
            challenges: [
              "Supporting different node types while keeping execution understandable is a central engineering challenge.",
              "Per-node logs and token and cost tracking make execution easier to inspect. Pause and resume and schedules add control over when workflows run.",
            ],
            testing: [
              "A demo is available for hands-on exploration. Automated test coverage is not documented in this case study.",
            ],
            currentStatus: ["Independent personal project with a demo available to explore."],
          },
          diagram: [
            "React · TanStack Start",
            "Visual workflows · Node types",
            "Execution · Pause / Resume",
            "Logs · Tokens · Costs",
            "Supabase · Cloudflare Workers",
          ],
        },
      },
    ],
  },
  caseStudy: {
    eyebrow: "// Case study",
    back: "All selected work",
    contact: "Let’s talk about the work",
    sections: {
      overview: "Overview",
      myRole: "My Role",
      product: "Product",
      architecture: "Architecture",
      challenges: "Engineering Challenges",
      testing: "Testing",
      currentStatus: "Current Status",
    },
  },
  projects: {
    eyebrow: "// Other projects",
    title: "More ways to explore and build.",
    items: [
      {
        slug: "bufetec",
        title: "Bufetec",
        role: "Academic project",
        status: "iOS prototype",
        summary:
          "Academic iOS prototype for appointment management at Tec de Monterrey’s legal clinic, built with SwiftUI and Gemini.",
        tech: ["SwiftUI", "Gemini"],
        links: {},
        highlights: [],
        visualKind: "legal",
      },
      {
        slug: "worksense",
        title: "WORKSENSE",
        role: "Collaborative academic project",
        status: "Academic project",
        summary:
          "Collaborative academic project for Scrum management with AI, React, TypeScript, Node.js and Express.",
        tech: ["React", "TypeScript", "Node.js", "Express", "AI"],
        links: {},
        highlights: [],
        visualKind: "scrum",
      },
      {
        slug: "medication-tracker",
        title: "Medication Tracker",
        role: "Hackathon project",
        status: "iOS prototype",
        summary:
          "iOS hackathon project combining Swift, prescription OCR, Gemini, Firecrawl and voice assistance for medication tracking.",
        tech: ["Swift", "OCR", "Gemini", "Firecrawl"],
        links: {},
        highlights: [],
        visualKind: "medication",
      },
      {
        slug: "meetcoach",
        title: "MeetCoach",
        role: "Personal project",
        status: "Navigable prototype · Mock data",
        summary:
          "Navigable tennis and padel marketplace prototype built with React Native, Expo and TypeScript using mock data.",
        tech: ["React Native", "Expo", "TypeScript"],
        links: {},
        highlights: [],
        visualKind: "coach",
      },
    ],
  },
  experience: {
    eyebrow: "// Experience",
    title: "Software built with responsibility.",
    items: [
      {
        company: "Softtek",
        period: "August 2025 - July 2026",
        role: "Software Developer Intern",
        bullets: [
          "Sole developer of the Agentic Workflows module within a broader enterprise AI platform. Delivered the module to production for internal use.",
          "Implemented the frontend, backend, modular execution engine, LLM and MCP integrations, workspaces and workflow deployment.",
          "Worked on infrastructure with Kubernetes, Helm, Istio and self-hosted Supabase.",
          "Also contributed to GenUI’s AI engine, visual templates and landing page.",
        ],
      },
      {
        company: "Escalando Fronteras A.C.",
        period: "February 2025 - October 2025",
        role: "Freelance Full-Stack Developer",
        bullets: [
          "Independently developed a bilingual CMS as a paid freelance engagement.",
          "Built with Next.js, React, TypeScript, Node.js, PostgreSQL, Prisma, Cloudinary and DeepL.",
          "The engagement followed my redesign of the organization’s website during social service in 2024.",
        ],
      },
      {
        company: "Escalando Fronteras A.C.",
        role: "Volunteer Web Developer",
        period: "February 2024 - June 2024",
        bullets: [
          "Independently redesigned the organization’s website during my university community service. This collaboration later led to a paid freelance CMS project.",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "// Skills",
    title: "A stack for the whole product.",
    groups: [
      {
        label: "Languages",
        items: ["TypeScript", "JavaScript", "Swift", "SQL"],
      },
      {
        label: "Web & backend",
        items: ["React", "Next.js", "Node.js"],
      },
      {
        label: "Mobile",
        items: ["React Native", "Expo", "SwiftUI"],
      },
      {
        label: "Data",
        items: ["PostgreSQL", "Supabase"],
      },
      {
        label: "AI & infrastructure",
        items: ["LLM APIs", "MCP", "Docker", "Kubernetes"],
      },
      {
        label: "Additional technologies",
        items: ["TanStack Start", "Cloudflare Workers", "Helm", "Istio", "Prisma", "Firebase"],
      },
    ],
  },
  education: {
    school: "Tecnológico de Monterrey",
    degree: "B.S. in Computer Science and Technology",
    graduation: "Graduated June 2026",
    period: "August 2022 - June 2026",
  },
  certifications: {
    eyebrow: "// Education & credentials",
    title: "Education and continued learning.",
    items: [
      {
        name: "AWS Academy Graduate - Cloud Foundations - Training Badge",
        year: "Jun 2026",
        issuer: "Amazon Web Services Training and Certification",
        url: "https://www.credly.com/badges/d051ea5a-4172-40aa-85f0-ed7b14d25a4f",
      },
      {
        name: "Learn Git & GitHub Course",
        url: "https://www.codecademy.com/profiles/Enrique-Macias/certificates/a8ab218d5950c29861635cc0bf12fd13",
        year: "May 2025",
        issuer: "Codecademy",
      },
      {
        name: "OpenAI API Coding with JavaScript Course",
        url: "https://www.codecademy.com/profiles/Enrique-Macias/certificates/14b19bba366547918269209f27b2ab46",
        year: "May 2025",
        issuer: "Codecademy",
      },
      {
        name: "Learn MongoDB Course",
        url: "https://www.codecademy.com/profiles/Enrique-Macias/certificates/808a989d563e4e85ba3495d4d14dce5d",
        year: "Sep 2024",
        issuer: "Codecademy",
      },
      {
        name: "TOEFL iBT: 74/120 · CEFR B2",
        year: "Issued January 2025 · Expires January 2027",
        issuer: "ETS",
      },
    ],
  },
  contact: {
    eyebrow: "// Contact",
    title: "Let’s build what’s next.",
    kicker:
      "I’m looking for a full-time role in software engineering, full-stack development, AI applications or mobile. Based in Monterrey, Mexico, open to remote work and international relocation.",
    labels: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    validation: {
      required: "Required",
      invalidEmail: "Invalid email",
      tooShort: "Please write at least 5 characters",
    },
    submit: "Send message",
    sending: "Sending...",
    success: "Thanks, your message was sent. I’ll reply soon.",
    errors: {
      rateLimited:
        "Too many attempts. Please wait a few minutes or use the email link to contact me directly.",
      emailServiceNotConfigured:
        "The contact form is temporarily unavailable. Please use the email link to reach me directly.",
      emailRecipientNotConfigured:
        "The contact form is temporarily unavailable. Please use the email link to reach me directly.",
      sendFailed: "Your message could not be sent. Please try again or use the email link.",
      network: "Connection error. Try again or contact me by email.",
      unknown: "Your message could not be sent. Please contact me by email.",
    },
    links: {
      github: "github.com/Enrique-Macias",
      linkedin: "linkedin.com/in/enrique-macias-lopez",
    },
  },
  footer: {
    builtWith: "Built with TanStack Start, TypeScript & Tailwind CSS",
  },
} satisfies Dictionary;
