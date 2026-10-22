// src/i18n/ui.ts
export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es" as const;

export const ui = {
  es: {
    // ─── Nav ───
    "nav.services": "Capacidades",
    "nav.cases": "Casos de Estudio",
    "nav.trajectory": "Trayectoria",
    "nav.contact": "Contacto",
    "nav.cta": "Iniciar Proyecto",

    // ─── Hero ───
    "hero.status": "DISPONIBLE PARA CONTRATOS GLOBALES / Q2-Q3",
    "hero.badge": "Sistemas de Alto Rendimiento & IA",
    "hero.title.lead": "Arquitecturas",
    "hero.title.accent": "resilientes",
    "hero.title.tail": "que escalan a millones.",
    "hero.description":
      "Senior Backend Developer & Arquitecto Cloud-Native. Especializado en Go, Python, microservicios distribuidos, bases de datos en grafo y orquestación local de LLMs.",
    "hero.cta.primary": "Auditoría o Proyecto",
    "hero.stat.years": "Años Exp. Core",
    "hero.stat.sla": "Fiabilidad SLA",
    "hero.stat.latency": "Latencia Media",
    "hero.card.role": "ENGINEERING LEAD",
    "hero.card.location": "Software Engineer · Cuba",
    "hero.card.education": "UCLV CS GRADUATE",

    // ─── Services ───
    "services.eyebrow": "01 / CAPABILITIES",
    "services.title": "Capacidades de Consultoría e Ingeniería",
    "services.description":
      "Diseñado para plataformas de alto tráfico, microservicios resilientes e inteligencia de datos con IA.",

    // ─── Case Studies ───
    "cases.eyebrow": "02 / CASE STUDIES",
    "cases.title": "Casos de Estudio de Ingeniería",
    "cases.github": "Explorar 20+ Repositorios en GitHub",
    "cases.viewRepo": "Ver Repositorio",
    "cases.repoAccess": "Ver Repositorio",

    // ─── Timeline ───
    "timeline.eyebrow": "03 / EXPERIENCE & MILESTONES",
    "timeline.title": "Trayectoria Profesional",
    "timeline.description":
      "Roles de ingeniería enfocados en escala backend, grafos con IA y arquitecturas concurrentes.",
    "timeline.education.title":
      "Licenciatura en Ciencias de la Computación — Graduado 2025",

    // ─── Contact ───
    "contact.eyebrow": "04 / DIRECT CHANNEL",
    "contact.title.lead": "Construyamos",
    "contact.title.accent": "algo sólido.",
    "contact.description":
      "Cuéntame sobre tu proyecto o necesidades de arquitectura. Disponible para liderazgo técnico, contratos de microservicios en Go/Python e integraciones de IA.",
    "contact.form.title": "¿Tienes un proyecto en mente?",
    "contact.form.description":
      "Completa los detalles técnicos y responderé en menos de 24 horas.",
    "contact.form.name": "Nombre",
    "contact.form.email": "Correo Electrónico",
    "contact.form.scope": "Alcance del Proyecto & Arquitectura",
    "contact.form.submit": "Enviar Propuesta",
    "contact.form.success":
      "✓ Solicitud registrada. Te contactaré en breve vía nerowork60@gmail.com",
    "contact.form.transmitting": "Transmitiendo...",
    "timeline.activeBadge": "Hito Activo",
  },
  en: {
    // ─── Nav ───
    "nav.services": "Capabilities",
    "nav.cases": "Case Studies",
    "nav.trajectory": "Trajectory",
    "nav.contact": "Inquiry",
    "nav.cta": "Start a Project",

    // ─── Hero ───
    "hero.status": "AVAILABLE FOR GLOBAL CONTRACTS / Q2-Q3",
    "hero.badge": "High-Performance Systems & AI",
    "hero.title.lead": "Let's build",
    "hero.title.accent": "something bold.",
    "hero.title.tail": "Mission-critical backends.",
    "hero.description":
      "Senior Backend Developer & Cloud-Native Architect. Specialized in Go, Python, distributed microservices, graph databases, and local LLM orchestration.",
    "hero.cta.primary": "Request Architecture Audit",
    "hero.stat.years": "Years Core Exp.",
    "hero.stat.sla": "SLA Reliability",
    "hero.stat.latency": "Median Latency",
    "hero.card.role": "ENGINEERING LEAD",
    "hero.card.location": "Software Engineer · Cuba",
    "hero.card.education": "UCLV CS GRADUATE",

    // ─── Services ───
    "services.eyebrow": "01 / CAPABILITIES",
    "services.title": "Consultancy & Engineering Stack",
    "services.description":
      "Engineered for high-load platforms, zero-downtime microservices, and AI-driven data intelligence.",

    // ─── Case Studies ───
    "cases.eyebrow": "02 / CASE STUDIES",
    "cases.title": "Selected Engineering Works",
    "cases.github": "Explore 20+ GitHub Repositories",
    "cases.viewRepo": "View Repository",
    "cases.repoAccess": "Repo Access",

    // ─── Timeline ───
    "timeline.eyebrow": "03 / EXPERIENCE & MILESTONES",
    "timeline.title": "Professional Trajectory",
    "timeline.description":
      "Engineering roles focused on backend scale, AI graphs, and concurrent architectures.",
    "timeline.education.title": "B.S. in Computer Science — Graduated 2025",

    // ─── Contact ───
    "contact.eyebrow": "04 / DIRECT CHANNEL",
    "contact.title.lead": "Let's build",
    "contact.title.accent": "something bold.",
    "contact.description":
      "Tell me a little about your project or architecture needs. Available for engineering leadership, Go/Python microservice contracts, and AI workflow integrations.",
    "contact.form.title": "Have a project in mind?",
    "contact.form.description":
      "Fill in the technical details below and I'll get back to you within 24 hours.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.scope": "Project Scope & Architecture",
    "contact.form.submit": "Submit Inquiry",
    "contact.form.success":
      "✓ Message delivered. Connecting shortly via nerowork60@gmail.com",
    "contact.form.transmitting": "Transmitting...",
    "timeline.activeBadge": "Active Milestone",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)["es"];
