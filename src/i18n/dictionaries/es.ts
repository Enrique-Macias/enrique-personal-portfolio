import type { Dictionary } from "../types";

export const es = {
  languageName: "Español",
  meta: {
    socialImageAlt:
      "Enrique Macías López, Software Engineer. Desarrollo Full-Stack, Aplicaciones de IA y Móvil.",
    rootTitle: "Enrique Macías López | Software Engineer",
    rootDescription:
      "Software Engineer en Monterrey, México. Egresado del Tec de Monterrey con experiencia en IA empresarial, desarrollo full-stack y móvil. Disponible para empleo de tiempo completo, remoto y reubicación internacional.",
    homeTitle: "Enrique Macías López | Software Engineer",
    homeDescription:
      "Software Engineer en Monterrey, México. Egresado del Tec de Monterrey con experiencia en IA empresarial, desarrollo full-stack y móvil. Disponible para empleo de tiempo completo, remoto y reubicación internacional.",
    homeOgDescription:
      "Software Engineer en Monterrey, México. Egresado del Tec de Monterrey con experiencia en IA empresarial, desarrollo full-stack y móvil. Disponible para empleo de tiempo completo, remoto y reubicación internacional.",
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
      {
        id: "selected-work",
        label: "Trabajo",
      },
      {
        id: "experience",
        label: "Experiencia",
      },
      {
        id: "about",
        label: "Sobre mí",
      },
      {
        id: "projects",
        label: "Proyectos",
      },
      {
        id: "contact",
        label: "Contacto",
      },
    ],
    cta: "Hablemos",
    switchLabel: "Seleccionar idioma",
  },
  accessibility: {
    skip: "Saltar al contenido",
    menu: "Abrir o cerrar menú",
    navigation: "Navegación principal",
  },
  profile: {
    role: "Software Engineer",
    specialization: "Desarrollo Full-Stack, Aplicaciones de IA y Móvil",
    tagline:
      "Desarrollo productos de software para web, IA y móvil. Mi experiencia incluye IA empresarial en Softtek, desarrollo freelance y emprendimientos propios, con formación en Ingeniería en Tecnologías Computacionales del Tec de Monterrey.",
    location: "Monterrey, México",
    availability: "Busco empleo de tiempo completo · Remoto y reubicación internacional",
  },
  hero: {
    eyebrow: "// Software, de la idea a la implementación",
    cta: "Ver mi trabajo",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    downloadCV: "Descargar CV",
  },
  about: {
    eyebrow: "// Sobre mí",
    title: "Curiosidad, compromiso y oficio.",
    paragraphs: [
      "Egresé de Ingeniería en Tecnologías Computacionales del Tecnológico de Monterrey en junio de 2026. Disfruto llevar una idea a un producto funcional, conectando una interfaz bien pensada con los sistemas que la hacen posible.",
      "Mi trayectoria incluye IA empresarial en Softtek, trabajo freelance remunerado para Escalando Fronteras y emprendimientos propios. Me interesan la ingeniería de software, la IA aplicada y el desarrollo móvil, con ganas de seguir aprendiendo en todo el stack.",
      "Fuera del software, formé parte del equipo representativo de tenis del Tec de Monterrey. La disciplina, el trabajo en equipo y la constancia del deporte competitivo también forman parte de mi manera de trabajar.",
    ],
    facts: [
      {
        label: "Ubicación",
        value: "Monterrey, México",
      },
      {
        label: "Formación",
        value: "Tec de Monterrey · Egresado en junio de 2026",
      },
      {
        label: "Busco",
        value: "Empleo de tiempo completo en software",
      },
      {
        label: "Movilidad",
        value: "Remoto y reubicación internacional",
      },
      {
        label: "Fuera del código",
        value: "Equipo representativo de tenis",
      },
    ],
  },
  selectedWork: {
    eyebrow: "// Trabajo seleccionado",
    title: "Productos que estoy construyendo.",
    kicker:
      "Emprendimientos propios en SaaS, móvil e IA aplicada. Mi rol, las decisiones de ingeniería y su estado actual.",
    readCaseStudy: "Ver caso de estudio",
    visitProject: "Explorar demo",
    diagramLabel: "Vista técnica · Diagrama conceptual, no es una captura del producto",
    items: [
      {
        slug: "passly",
        title: "Passly",
        role: "Único desarrollador",
        status: "MVP avanzado · Validado en staging",
        summary:
          "SaaS B2B de lealtad digital que lleva los programas de lealtad a Apple Wallet y Google Wallet.",
        tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
        links: {},
        highlights: [
          "Arquitectura multi-tenant con row-level security",
          "Ledger transaccional",
          "Procesamiento asíncrono y reintentos",
        ],
        visualKind: "wallet",
        caseStudy: {
          sections: {
            overview: [
              "Passly es un SaaS B2B para programas de lealtad digital con Apple Wallet y Google Wallet. El producto es un MVP avanzado validado en staging.",
            ],
            myRole: [
              "Soy el único desarrollador, responsable de construir el producto desde la aplicación y la base de datos hasta las integraciones con wallets.",
            ],
            product: [
              "El producto conecta el programa de lealtad de un negocio con pases digitales en Apple Wallet y Google Wallet.",
            ],
            architecture: [
              "La aplicación utiliza Next.js y TypeScript, con Supabase y PostgreSQL. La arquitectura multi-tenant usa row-level security para separar datos entre organizaciones, un ledger transaccional para registrar operaciones y procesamiento asíncrono con reintentos.",
            ],
            challenges: [
              "El aislamiento entre organizaciones, la consistencia transaccional y las integraciones con wallets son los principales retos de ingeniería.",
              "El ledger y el procesamiento asíncrono atienden necesidades distintas: registrar operaciones de negocio y manejar tareas que pueden requerir reintentos.",
            ],
            testing: [
              "Validé la funcionalidad principal con pruebas automatizadas de base de datos e integración, incluyendo flujos de Wallet en dispositivos iOS y Android reales. El MVP avanzado fue validado en staging.",
            ],
            currentStatus: [
              "MVP avanzado validado en staging. Passly aún no se ha lanzado públicamente.",
            ],
          },
          diagram: [
            "Next.js · TypeScript",
            "Supabase · PostgreSQL · RLS",
            "Ledger transaccional",
            "Procesamiento asíncrono · Reintentos",
            "Apple Wallet · Google Wallet",
          ],
        },
        period: "Septiembre 2026 - Actualidad",
      },
      {
        slug: "rlvo",
        title: "RLVO",
        role: "Co-founder & CTO · Único desarrollador",
        status: "Desarrollo avanzado · Validación en staging",
        summary:
          "Marketplace universitario con verificación institucional, moderación de contenido con IA y herramientas administrativas.",
        tech: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
        links: {},
        highlights: [
          "Verificación institucional",
          "Moderación de contenido con IA",
          "Herramientas administrativas e infraestructura",
        ],
        visualKind: "marketplace",
        caseStudy: {
          sections: {
            overview: [
              "RLVO es un marketplace universitario en desarrollo avanzado y validación en staging, creado por un equipo fundador de tres personas.",
            ],
            myRole: [
              "Soy Co-founder & CTO y el único desarrollador del equipo fundador de tres personas. Me encargo de la aplicación móvil, el backend, las herramientas administrativas y la infraestructura.",
            ],
            product: [
              "El marketplace incluye verificación institucional y moderación de contenido con IA, con herramientas de apoyo para la administración.",
            ],
            architecture: [
              "La aplicación móvil utiliza React Native, Expo y TypeScript. Supabase y PostgreSQL soportan el backend, junto con verificación institucional, moderación con IA y herramientas administrativas.",
            ],
            challenges: [
              "La verificación institucional y la moderación de contenido son retos centrales de producto e ingeniería para un marketplace universitario.",
              "Como único desarrollador, trabajo en la experiencia móvil, el backend y la infraestructura, en colaboración con el equipo fundador para definir el producto.",
            ],
            testing: [
              "Gestioné entornos de staging, pruebas automatizadas y preparación de releases móviles para iOS y Android. La aplicación sigue en desarrollo avanzado y validación en staging.",
            ],
            currentStatus: [
              "Desarrollo avanzado y validación en staging. RLVO aún no se ha lanzado públicamente.",
            ],
          },
          diagram: [
            "React Native · Expo · TypeScript",
            "Supabase · PostgreSQL",
            "Verificación institucional",
            "Moderación con IA",
            "Herramientas administrativas",
          ],
        },
        period: "Agosto 2026 - Actualidad",
      },
      {
        slug: "orqentic-ai",
        title: "Orqentic AI",
        role: "Creador independiente · Único desarrollador",
        status: "Proyecto independiente · Demo disponible",
        summary:
          "Plataforma visual de workflows construida desde cero, con visibilidad de ejecución, schedules y asistencia de IA.",
        tech: ["React", "TanStack Start", "TypeScript", "Supabase", "Cloudflare Workers"],
        links: {
          live: "https://orqentic-ai.enriquemaciaslpz.workers.dev",
        },
        highlights: [
          "Aproximadamente 40 tipos de nodo",
          "Logs por nodo, seguimiento de tokens y costos",
          "Pausa, reanudación, schedules y asistencia de IA",
        ],
        visualKind: "workflow",
        caseStudy: {
          sections: {
            overview: [
              "Orqentic AI es una plataforma visual de workflows que desarrollé de forma independiente desde cero. Es un proyecto personal separado de mi trabajo en Softtek.",
            ],
            myRole: [
              "Diseñé y desarrollé la plataforma de forma independiente, desde la experiencia visual del producto hasta la ejecución de workflows y el despliegue.",
            ],
            product: [
              "La plataforma incluye aproximadamente 40 tipos de nodo, logs por nodo, seguimiento de tokens y costos, pausa y reanudación, schedules y asistencia de IA.",
            ],
            architecture: [
              "La aplicación usa React, TanStack Start y TypeScript, con Supabase y Cloudflare Workers en el stack. El modelo visual de workflows se complementa con controles de ejecución y observabilidad por nodo.",
            ],
            challenges: [
              "Soportar distintos tipos de nodo y mantener una ejecución comprensible es uno de los principales retos de ingeniería.",
              "Los logs por nodo y el seguimiento de tokens y costos facilitan inspeccionar la ejecución. La pausa, reanudación y los schedules agregan control sobre cuándo ejecutar workflows.",
            ],
            testing: [
              "Hay una demo disponible para explorar el producto. La cobertura de pruebas automatizadas no está documentada en este caso de estudio.",
            ],
            currentStatus: [
              "Proyecto personal independiente con una demo disponible para explorar.",
            ],
          },
          diagram: [
            "React · TanStack Start",
            "Workflows visuales · Tipos de nodo",
            "Ejecución · Pausa / Reanudación",
            "Logs · Tokens · Costos",
            "Supabase · Cloudflare Workers",
          ],
        },
      },
    ],
  },
  caseStudy: {
    eyebrow: "// Caso de estudio",
    back: "Ver todo el trabajo",
    contact: "Hablemos del proyecto",
    sections: {
      overview: "Descripción general",
      myRole: "Mi rol",
      product: "Producto",
      architecture: "Arquitectura",
      challenges: "Retos de ingeniería",
      testing: "Pruebas",
      currentStatus: "Estado actual",
    },
  },
  projects: {
    eyebrow: "// Otros proyectos",
    title: "Más formas de explorar y construir.",
    items: [
      {
        slug: "bufetec",
        title: "Bufetec",
        role: "Proyecto académico",
        status: "Prototipo iOS",
        summary:
          "Prototipo académico iOS para la gestión de citas del despacho jurídico del Tec de Monterrey, construido con SwiftUI y Gemini.",
        tech: ["SwiftUI", "Gemini"],
        links: {},
        highlights: [],
        visualKind: "legal",
      },
      {
        slug: "worksense",
        title: "WORKSENSE",
        role: "Proyecto académico colaborativo",
        status: "Proyecto académico",
        summary:
          "Proyecto académico colaborativo de gestión Scrum con IA, React, TypeScript, Node.js y Express.",
        tech: ["React", "TypeScript", "Node.js", "Express", "IA"],
        links: {},
        highlights: [],
        visualKind: "scrum",
      },
      {
        slug: "medication-tracker",
        title: "Medication Tracker",
        role: "Proyecto de hackathon",
        status: "Prototipo iOS",
        summary:
          "Proyecto de hackathon iOS con Swift, OCR de recetas, Gemini, Firecrawl y asistencia por voz para el seguimiento de medicamentos.",
        tech: ["Swift", "OCR", "Gemini", "Firecrawl"],
        links: {},
        highlights: [],
        visualKind: "medication",
      },
      {
        slug: "meetcoach",
        title: "MeetCoach",
        role: "Proyecto personal",
        status: "Prototipo navegable · Datos simulados",
        summary:
          "Prototipo navegable de marketplace de tenis y pádel con React Native, Expo, TypeScript y datos simulados.",
        tech: ["React Native", "Expo", "TypeScript"],
        links: {},
        highlights: [],
        visualKind: "coach",
      },
    ],
  },
  experience: {
    eyebrow: "// Experiencia",
    title: "Software construido con responsabilidad.",
    items: [
      {
        company: "Softtek",
        period: "Agosto 2025 - Julio 2026",
        role: "Software Developer Intern",
        bullets: [
          "Único desarrollador del módulo Agentic Workflows dentro de una plataforma empresarial de IA más amplia. El módulo llegó a producción y se utilizó internamente.",
          "Implementé frontend, backend, motor de ejecución modular, integraciones LLM y MCP, workspaces y despliegue de workflows.",
          "Trabajé en la infraestructura con Kubernetes, Helm, Istio y Supabase autohospedado.",
          "También colaboré en GenUI, contribuyendo al motor de IA, plantillas visuales y landing page.",
        ],
      },
      {
        company: "Escalando Fronteras A.C.",
        period: "Febrero 2025 - Octubre 2025",
        role: "Freelance Full-Stack Developer",
        bullets: [
          "Desarrollé individualmente un CMS bilingüe como trabajo freelance remunerado.",
          "Utilicé Next.js, React, TypeScript, Node.js, PostgreSQL, Prisma, Cloudinary y DeepL.",
          "El trabajo freelance surgió después de rediseñar su sitio durante mi servicio social en 2024.",
        ],
      },
      {
        company: "Escalando Fronteras A.C.",
        role: "Desarrollador web voluntario",
        period: "Febrero 2024 - Junio 2024",
        bullets: [
          "Rediseñé individualmente el sitio de la organización durante mi servicio social universitario. Esta colaboración dio lugar después a un proyecto freelance remunerado de CMS.",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "// Habilidades",
    title: "Un stack para todo el producto.",
    groups: [
      {
        label: "Lenguajes",
        items: ["TypeScript", "JavaScript", "Swift", "SQL"],
      },
      {
        label: "Web y backend",
        items: ["React", "Next.js", "Node.js"],
      },
      {
        label: "Móvil",
        items: ["React Native", "Expo", "SwiftUI"],
      },
      {
        label: "Datos",
        items: ["PostgreSQL", "Supabase"],
      },
      {
        label: "IA e infraestructura",
        items: ["LLM APIs", "MCP", "Docker", "Kubernetes"],
      },
      {
        label: "Tecnologías adicionales",
        items: ["TanStack Start", "Cloudflare Workers", "Helm", "Istio", "Prisma", "Firebase"],
      },
    ],
  },
  education: {
    school: "Tecnológico de Monterrey",
    degree: "Ingeniería en Tecnologías Computacionales",
    graduation: "Egresado en junio de 2026",
    period: "Agosto 2022 - Junio 2026",
  },
  certifications: {
    eyebrow: "// Educación y credenciales",
    title: "Formación y aprendizaje continuo.",
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
        year: "Expedido en enero de 2025 · Vence en enero de 2027",
        issuer: "ETS",
      },
    ],
  },
  contact: {
    eyebrow: "// Contacto",
    title: "Construyamos lo que sigue.",
    kicker:
      "Busco empleo de tiempo completo en ingeniería de software, desarrollo full-stack, aplicaciones de IA o móvil. Estoy en Monterrey, México, abierto a trabajo remoto y reubicación internacional.",
    labels: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
    },
    validation: {
      required: "Requerido",
      invalidEmail: "Email inválido",
      tooShort: "Escribe al menos 5 caracteres",
    },
    submit: "Enviar mensaje",
    sending: "Enviando...",
    success: "Gracias, tu mensaje fue enviado. Te responderé pronto.",
    errors: {
      rateLimited:
        "Demasiados intentos. Espera unos minutos o usa el enlace de email para escribirme directamente.",
      emailServiceNotConfigured:
        "El formulario no está disponible por el momento. Usa el enlace de email para escribirme directamente.",
      emailRecipientNotConfigured:
        "El formulario no está disponible por el momento. Usa el enlace de email para escribirme directamente.",
      sendFailed: "No se pudo enviar tu mensaje. Inténtalo de nuevo o usa el enlace de email.",
      network: "Error de conexión. Inténtalo de nuevo o escríbeme por email.",
      unknown: "No se pudo enviar tu mensaje. Escríbeme por email.",
    },
    links: {
      github: "github.com/Enrique-Macias",
      linkedin: "linkedin.com/in/enrique-macias-lopez",
    },
  },
  footer: {
    builtWith: "Desarrollado con TanStack Start, TypeScript y Tailwind CSS",
  },
} satisfies Dictionary;
