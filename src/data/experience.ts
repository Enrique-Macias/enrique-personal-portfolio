export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Softtek",
    role: "Software Developer Intern",
    period: "2025 — Present",
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
    period: "2022 — Jun 2026",
    bullets: [
      "Coursework focused on AI, distributed systems, and software design.",
      "Built capstone projects with real nonprofit and startup partners.",
    ],
  },
];