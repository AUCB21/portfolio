import type { L } from './data';

export type RepoOverride = {
  /** Display name when different from the GitHub repo name */
  title?: string;
  description: L;
  tags: string[];
  /** Show this repo first regardless of GitHub update order */
  pinned?: boolean;
};

export const repoOverrides: Record<string, RepoOverride> = {
  Gastos: {
    pinned: true,
    description: {
      es: "Herramienta financiera con lógica de filtrado avanzada mediante Django Q Objects y visualización de datos SQL para gestión de gastos individuales y grupales, medios de pago y administración de grupos.",
      en: "Financial tool featuring advanced filtering logic via Django Q Objects and SQL-based data visualization for individual and group expense management, including payment methods and group administration.",
    },
    tags: ["Next.js", "Django", "DRF", "PostgreSQL", "Tailwind CSS"],
  },
  chatapp: {
    title: "EPS Chat App",
    pinned: true,
    description: {
      es: "Plataforma de mensajería en tiempo real con arquitectura escalable y baja latencia. Incluye autenticación, canales y sincronización en tiempo real.",
      en: "Real-time messaging platform with scalable architecture and low-latency message delivery. Features authentication, channels, and live sync.",
    },
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  },
  Tooner: {
    description: {
      es: "Herramienta Text-to-TOON que convierte entradas en clases TOON para reducir el costo de prompts en APIs de LLMs.",
      en: "Text-to-TOON tool that converts inputs into TOON classes to reduce API/LLM prompt costs.",
    },
    tags: ["JavaScript", "AI", "LLM"],
  },
  crWRL: {
    description: {
      es: "Bot crawler con exportación automática a JSON, TXT y base de datos, completamente parametrizable.",
      en: "Crawler bot with automatic export to JSON, TXT and database, fully parametrized.",
    },
    tags: ["Python", "Web Scraping"],
  },
  GitPeek: {
    description: {
      es: "Herramienta para explorar y visualizar perfiles de GitHub y sus repositorios.",
      en: "Tool to explore and visualize GitHub profiles and repository data.",
    },
    tags: ["JavaScript"],
  },
  gitdorker: {
    description: {
      es: "Herramienta OSINT para búsquedas avanzadas en GitHub usando dorks.",
      en: "OSINT tool for advanced GitHub searches using dorks.",
    },
    tags: ["Python", "OSINT"],
  },
};
