import type { Dictionary } from "../types";

export const es = {
  languageName: "Español",
  meta: {
    rootTitle: "Sitio personal de Enrique Macías",
    rootDescription: "Portafolio de Enrique Macías López",
    homeTitle: "Enrique Macías López — Estudiante de CS y AI Builder",
    homeDescription:
      "Portafolio de Enrique Macías López — estudiante de último año de Ciencias Computacionales en Tec de Monterrey, Software Developer Intern en Softtek, creando herramientas con IA y flujos agentic.",
    homeOgDescription:
      "Construyendo el futuro con IA, un workflow a la vez. Proyectos, experiencia y contacto.",
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página que buscas no existe o fue movida.",
    action: "Volver al inicio",
  },
  error: {
    title: "Algo salió mal",
    description: "Ocurrió un error inesperado. Inténtalo de nuevo.",
    retry: "Intentar de nuevo",
    home: "Volver al inicio",
  },
  navbar: {
    links: [
      { id: "about", label: "Sobre mí" },
      { id: "featured", label: "Destacado" },
      { id: "projects", label: "Proyectos" },
      { id: "experience", label: "Experiencia" },
      { id: "contact", label: "Contacto" },
    ],
    cta: "Hablemos",
    switchLabel: "Seleccionar idioma",
  },
  profile: {
    tagline: "Construyendo el futuro con IA, un workflow a la vez.",
    role: "Estudiante de último año de CS en Tec de Monterrey · Software Developer Intern @ Softtek",
    location: "Monterrey, México",
  },
  hero: {
    eyebrow: "// Portafolio — 2026",
    cta: "Hablemos",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
  about: {
    eyebrow: "// Sobre mí",
    title: "Constructor de productos, no de plantillas.",
    paragraphs: [
      "Soy estudiante de último año de Ciencias Computacionales en Tec de Monterrey y me gradúo en junio de 2026. Me importa crear software que resuelva problemas reales; hoy eso significa sistemas de agentes y herramientas con LLMs que comprimen horas de trabajo en segundos.",
      "Actualmente soy intern en Softtek, donde construyo aplicaciones web con IA y un builder visual de workflows para agentes. En paralelo, desarrollo proyectos full-stack y iOS para organizaciones sin fines de lucro y equipos pequeños.",
      "Me muevo rápido, cuido los detalles y tomo el diseño tan en serio como el código que lo sostiene.",
    ],
    facts: [
      { label: "Ubicación", value: "Monterrey, México" },
      { label: "Educación", value: "Ing. en Tecnologías Computacionales, Tec de Monterrey" },
      { label: "GPA", value: "3.9 / 4.0 — Graduación en jun 2026" },
      { label: "Actualmente", value: "Software Developer Intern @ Softtek" },
      { label: "Enfoque", value: "Sistemas de agentes, herramientas LLM, dev tooling" },
    ],
  },
  featured: {
    eyebrow: "// Proyecto destacado",
    project: {
      title: "Agentic Workflow Builder",
      summary:
        "Herramienta visual de automatización no-code donde los usuarios diseñan workflows en un canvas de nodos, conectando triggers, llamadas a LLMs, parsers y acciones para automatizar trabajo sin escribir código. Construida alrededor de integraciones de IA y orquestación de LLMs.",
      tech: ["React", "TypeScript", "Node.js", "LLMs", "Postgres"],
    },
    liveDemo: "Demo",
    sourceComingSoon: "Código — próximamente",
  },
  projects: {
    eyebrow: "// Más proyectos",
    title: "Otras cosas que he construido.",
    items: [
      {
        title: "CMS para nonprofit",
        summary:
          "Plataforma de contenido para una organización sin fines de lucro, con admin personalizado, pipeline de medios y un sitio público gestionado por personas no técnicas.",
        tech: ["React", "Node.js", "PostgreSQL", "Cloudinary"],
      },
      {
        title: "Medication Tracker (iOS)",
        summary:
          "App nativa de iOS para registrar medicamentos con escaneo de recetas mediante OCR y un asistente de IA dentro de la app para recordatorios y preguntas.",
        tech: ["SwiftUI", "Firebase", "OCR", "OpenAI"],
      },
      {
        title: "Bufetec — Servicios legales (iOS)",
        summary:
          "App de iOS que acerca servicios legales a comunidades desatendidas, con funciones de IA que ayudan a los usuarios a entender su caso y sus siguientes pasos.",
        tech: ["SwiftUI", "Firebase", "AI"],
      },
      {
        title: "MeetCoach",
        summary:
          "Marketplace móvil bilingüe en Flutter que conecta jugadores con coaches deportivos: descubrimiento, disponibilidad, reservas, reprogramación y notificaciones en tiempo real, respaldado por Supabase con row-level security.",
        tech: ["Flutter", "Dart", "Riverpod", "Supabase", "PostgreSQL"],
      },
    ],
  },
  experience: {
    eyebrow: "// Experiencia",
    title: "Dónde he estado trabajando.",
    items: [
      {
        company: "Softtek",
        role: "Software Developer Intern",
        period: "Ago 2025 — Presente",
        bullets: [
          "Construyo aplicaciones web con IA y builders de workflows para agentes.",
          "Diseño patrones de orquestación de LLMs para herramientas internas de automatización.",
          "Desarrollo features end-to-end con React, Node.js y Postgres.",
        ],
      },
      {
        company: "Freelance",
        role: "Full-Stack Developer",
        period: "2023 — 2025",
        bullets: [
          "Entregué aplicaciones web e iOS para nonprofits y pequeños negocios.",
          "Tomé decisiones de producto, diseño e ingeniería en proyectos construidos de forma independiente.",
        ],
      },
      {
        company: "Tec de Monterrey",
        role: "B.S. Ciencias Computacionales · GPA 3.9 / 4.0",
        period: "Ago 2022 — Jun 2026",
        bullets: [
          "Coursework enfocado en IA, sistemas distribuidos y diseño de software.",
          "Construí proyectos capstone con partners reales de nonprofits y startups.",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "// Stack",
    title: "Herramientas que uso.",
    groups: [
      { label: "Lenguajes", items: ["TypeScript", "JavaScript", "Python", "Swift"] },
      { label: "Frameworks & Runtimes", items: ["React", "Node.js", "SwiftUI", "TanStack"] },
      { label: "Bases de datos", items: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"] },
      {
        label: "Herramientas & Plataformas",
        items: ["Git", "Docker", "Vercel", "Cloudinary", "Figma"],
      },
    ],
  },
  certifications: {
    eyebrow: "// Credenciales",
    title: "Certificaciones.",
    items: [
      { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
      { name: "Deep Learning Specialization", issuer: "DeepLearning.AI", year: "2024" },
      { name: "Meta Front-End Developer", issuer: "Meta", year: "2023" },
    ],
  },
  contact: {
    eyebrow: "// Contacto",
    title: "Construyamos algo.",
    kicker: "Estoy abierto a oportunidades de trabajo, colaboraciones y problemas interesantes.",
    labels: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
    },
    validation: {
      required: "Requerido",
      invalidEmail: "Email inválido",
      tooShort: "Muy corto",
    },
    submit: "Enviar mensaje",
    sending: "Enviando...",
    success: "Gracias — recibí tu mensaje. Te responderé pronto.",
    errors: {
      emailServiceNotConfigured:
        "El servicio de email aún no está configurado.",
      emailRecipientNotConfigured:
        "El destinatario aún no está configurado.",
      sendFailed: "No se pudo enviar. Intenta escribirme directamente por email.",
      network: "Error de red. Inténtalo de nuevo.",
      unknown: "Algo salió mal.",
    },
    links: {
      github: "github.com/enriquemacias",
      linkedin: "linkedin.com/in/enriquemacias",
    },
  },
  footer: {
    builtWith: "Desarrollado con amor · TanStack + Tailwind",
  },
} satisfies Dictionary;
