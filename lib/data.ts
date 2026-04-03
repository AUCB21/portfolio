// ─── Locale types ─────────────────────────────────────────────────────────────
export type Locale = 'es' | 'en';
export type L = { es: string; en: string };

/** Shorthand to create a localized string */
const l = (es: string, en: string): L => ({ es, en });

// ─── Site config ──────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Augusto Contreras Braillard",
  initials: "ACB",
  title: l(
    "Desarrollador de Software | Ing. en Sistemas (UTN-FRBA)",
    "Software Developer | Systems Engineering Student (UTN-FRBA)"
  ),
  tagline: l(
    "Sistemas que escalan. Código que perdura.",
    "Systems that scale. Code that lasts."
  ),
  bio: l(
    "Desarrollador de Software con más de 2 años de experiencia en entornos técnicos corporativos. Especializado en el desarrollo de aplicaciones Full Stack con Python (Django/DRF) y React.js, profundizando en Next.js. Gran fluidez en la optimización de bases de datos SQL (HANA, PostgreSQL, MySQL) y automatización de procesos. Actualmente enfocado en soluciones seguras e integradas con IA mientras curso Ingeniería en Sistemas en la UTN.",
    "Software Developer with 2+ years of experience in corporate technical environments. Specialized in Full Stack application development using Python (Django/DRF) and React.js, while expanding expertise in Next.js. Highly proficient in SQL database optimization (HANA, PostgreSQL, MySQL) and business process automation. Currently focused on secure, AI-integrated solutions while pursuing a Systems Engineering degree at UTN-FRBA."
  ),
  email: "aucontrerasb@gmail.com",
  location: "Buenos Aires, Argentina",
  available: true,
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export const navItems = [
  { label: l("Trayectoria", "Track Record"), href: "#timeline" },
  { label: l("Sobre mí", "About"), href: "#about" },
  { label: l("Trabajo", "Work"), href: "#work" },
  { label: l("Habilidades", "Skills"), href: "#skills" },
  { label: l("Contacto", "Contact"), href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/aucb21" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/augusto-contreras-braillard-654092231/",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export type Project = {
  title: string;
  description: L;
  tags: string[];
  href?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Gastos",
    description: l(
      "Herramienta financiera con lógica de filtrado avanzada mediante Django Q Objects y visualización de datos SQL para gestión de gastos individuales y grupales, medios de pago y administración de grupos.",
      "Financial tool featuring advanced filtering logic via Django Q Objects and SQL-based data visualization for individual and group expense management, including payment methods and group administration."
    ),
    tags: ["Next.js", "Django", "DRF", "PostgreSQL", "Tailwind CSS"],
    href: "https://gastos-jade.vercel.app/",
    github: "https://github.com/aucb21/Gastos",
  },
  {
    title: "EPS Chat App",
    description: l(
      "Plataforma de mensajería en tiempo real con arquitectura escalable y baja latencia. Incluye autenticación, canales y sincronización en tiempo real.",
      "Real-time messaging platform with scalable architecture and low-latency message delivery. Features authentication, channels, and live sync."
    ),
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    href: "https://epschatapp.vercel.app",
    github: "https://github.com/aucb21/chatapp",
  },
  {
    title: "Tooner",
    description: l(
      "Herramienta Text-to-TOON que convierte entradas en clases TOON para reducir el costo de prompts en APIs de LLMs.",
      "Text-to-TOON tool that converts inputs into TOON classes to reduce API/LLM prompt costs."
    ),
    tags: ["JavaScript", "AI", "LLM"],
    github: "https://github.com/aucb21/Tooner",
  },
  {
    title: "crWRL",
    description: l(
      "Bot crawler con exportación automática a JSON, TXT y base de datos, completamente parametrizable.",
      "Crawler bot with automatic export to JSON, TXT and database, fully parametrized."
    ),
    tags: ["Python", "Web Scraping"],
    github: "https://github.com/aucb21/crWRL",
  },
  {
    title: "GitPeek",
    description: l(
      "Herramienta para explorar y visualizar perfiles de GitHub y sus repositorios.",
      "Tool to explore and visualize GitHub profiles and repository data."
    ),
    tags: ["JavaScript"],
    href: "https://git-peek-umber.vercel.app",
    github: "https://github.com/aucb21/GitPeek",
  },
  {
    title: "gitdorker",
    description: l(
      "Herramienta OSINT para búsquedas avanzadas en GitHub usando dorks.",
      "OSINT tool for advanced GitHub searches using dorks."
    ),
    tags: ["Python", "OSINT"],
    github: "https://github.com/aucb21/gitdorker",
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────
export type TimelineEntry = {
  type: 'work' | 'education' | 'course';
  title: string;
  subtitle: string;
  period: L;
  description?: L;
  bullets?: L[];
  tags?: string[];
  href?: string;
  github?: string;
};

export const timeline: TimelineEntry[] = [
  // 1 — Current job (most relevant, most recent)
  {
    type: 'work',
    title: "Consultor Técnico — SAP Business One",
    subtitle: "Visual Knowledge S.A.",
    period: l("Jul 2024 – Actualidad", "Jul 2024 – Present"),
    description: l(
      "Participo activamente en la implementación, mantenimiento y optimización de instalaciones SAP y desarrollos a medida.",
      "Actively participate in the implementation, maintenance, and optimization of SAP installations and custom developments."
    ),
    bullets: [
      l("Optimización de lógica backend con SQL Queries, Stored Procedures y Vistas en SAP HANA.", "Optimized backend logic through SQL queries, Stored Procedures, and Views in SAP HANA."),
      l("Desarrollo de KPIs y reportes estadísticos en SQL para toma de decisiones estratégicas.", "Developed SQL-based KPIs and statistical reports for strategic business decision-making."),
      l("Migraciones de datos masivas y actualizaciones con herramientas SQL y Excel.", "Executed large-scale data migrations and mass updates using SQL tools and Excel."),
      l("Garantía de calidad en la fase de testing del SDLC para desarrollos propios.", "Ensured quality during the SDLC testing phase for in-house software developments."),
    ],
    tags: ["SAP HANA", "SQL", "Stored Procedures", "SAP Business One"],
  },

  // 2 — Previous job
  {
    type: 'work',
    title: "Soporte IT & SysAdmin JR / Developer",
    subtitle: "Madero Harbour S.A.",
    period: l("Mar 2023 – Ago 2024", "Mar 2023 – Aug 2024"),
    description: l(
      "Responsable del mantenimiento completo del predio y oficinas, soporte a usuarios y desarrollos especializados.",
      "Responsible for full maintenance of the company's premises, user support, and specialized software developments."
    ),
    bullets: [
      l("Desarrollo de Gestor Web de Inventario IT con Django (DRF) y React.js.", "Developed an IT Inventory Web Manager using Django (DRF) and React.js."),
      l("Administración de entornos Windows Server, Domain Controllers e infraestructura de red (VLANs, Routers, Switches).", "Administered Windows Server environments, Domain Controllers, and network infrastructure (VLANs, Routers, Switches)."),
      l("Soporte técnico integral y mantenimiento de equipos IoT y sistemas de archivos.", "Provided comprehensive technical support and maintained IoT equipment and file systems."),
    ],
    tags: ["Django", "React.js", "Windows Server", "VLANs", "IoT"],
  },

  // 3 — Flagship education (ongoing, most prestigious)
  {
    type: 'education',
    title: "Ingeniería en Sistemas de Información",
    subtitle: "UTN-FRBA",
    period: l("2022 – En curso (2° año)", "2022 – Ongoing (2nd year)"),
    tags: ["Algoritmos", "Redes", "SO", "Matemática"],
  },

  // 4 — Most recent course, extends the stack
  {
    type: 'course',
    title: "Full Stack Developer (Node.js & MySQL)",
    subtitle: "Codo a Codo 4.0",
    period: l("2024", "2024"),
    tags: ["Node.js", "MySQL", "JavaScript"],
  },

  // 5 — Ongoing, data engineering expands profile
  {
    type: 'course',
    title: "Data Engineering",
    subtitle: "UTN E-Learning",
    period: l("En curso", "Ongoing"),
    tags: ["Python", "Jupyter", "ETL"],
  },

  // 6 — Foundational course
  {
    type: 'course',
    title: "Full Stack Developer (Django & SQLite)",
    subtitle: "ITBA Innovación",
    period: l("2022", "2022"),
    description: l(
      "Primera formación formal en desarrollo web. HTML, CSS, JavaScript, Django y control de versiones con Git.",
      "First formal web-dev training. Covered HTML, CSS, JavaScript, Django, and version control with Git."
    ),
    tags: ["Django", "SQLite", "JavaScript", "HTML", "CSS", "Git"],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export type SkillCategory = {
  label: L;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: l("Lenguajes", "Languages"),
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    label: l("Frontend", "Frontend"),
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: l("Backend", "Backend"),
    items: ["Django", "DRF", "Node.js", "REST APIs"],
  },
  {
    label: l("Bases de datos", "Databases"),
    items: ["SAP HANA", "PostgreSQL", "MySQL", "Supabase", "SQLite"],
  },
  {
    label: l("Herramientas", "Tools"),
    items: ["Docker", "Git", "Linux (Debian/Kali)", "Vercel", "Render", "Ollama", "Claude Code"],
  },
  {
    label: l("Infraestructura", "Infrastructure"),
    items: ["Windows Server", "VLANs / Routing", "IoT", "Domain Controllers"],
  },
];

// ─── UI labels ────────────────────────────────────────────────────────────────
export const ui = {
  available: l("Disponible para trabajar", "Available for work"),
  viewWork: l("Ver trabajo", "View Work"),
  getInTouch: l("Contacto", "Get in Touch"),
  scroll: l("Desplazar", "Scroll"),
  live: l("En vivo", "Live"),
  work: {
    badge: l("03 / Trabajo", "03 / Work"),
    heading: l("Soluciones Desarrolladas", "Engineered Solutions"),
    description: l(
      "Algunas cosas que construí — desde apps full-stack hasta herramientas personales.",
      "A few things I've built — ranging from full-stack apps to personal tools."
    ),
  },
  about: {
    badge: l("02 / Sobre mí", "02 / About"),
    heading: l("¿Quién soy?", "Who am I?"),
  },
  timeline: {
    badge: l("01 / Trayectoria", "01 / Timeline"),
    heading: l("Experiencia", "Track Record"),
    description: l(
      "Experiencia laboral, educación y cursos.",
      "Work experience, education, and courses."
    ),
    types: {
      work: l("Trabajo", "Work"),
      education: l("Educación", "Education"),
      course: l("Curso", "Course"),
    },
  },
  skills: {
    badge: l("04 / Habilidades", "04 / Skills"),
    heading: l("Stack Técnico", "Technical Stack"),
  },
  contact: {
    badge: l("05 / Contacto", "05 / Contact"),
    heading: l("Conecta conmigo", "Get in Touch"),
    description: l(
      "Disponible para roles, consultas técnicas o colaboraciones estratégicas.",
      "Available for roles, technical inquiries, or strategic collaborations."
    ),
  },
  cv: {
    download: l("Descargar CV", "Download CV"),
    label: l("CV_ACB_Español.pdf", "CV_ACB_English.pdf"),
    path: l("/CV_ACB_Español.pdf", "/CV_ACB_English.pdf"),
  },
  footer: {
    builtWith: l("Construido con Next.js + Tailwind CSS", "Built with Next.js + Tailwind CSS"),
  },
};
