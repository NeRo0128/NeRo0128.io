// src/data/cases.ts
import type { Lang } from "../i18n/ui";

export type TerminalColor =
  "muted" | "primary" | "orange" | "orange-bold" | "emerald";

export interface TerminalLine {
  text: string;
  color?: TerminalColor;
}

export interface CaseFeatured {
  num: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  metrics: { label: string; value: string; accent?: "orange" }[];
  repoUrl: string;
  stack: string;
  terminal: {
    pid: string;
    prompt: string;
    logLines: TerminalLine[];
    response: { label: string; text: string };
    executionTime: string;
    footerLeft: string;
    footerRight: string;
  };
}

export interface CaseCard {
  num: string;
  category: string;
  title: string;
  description: string;
  tags: { label: string; accent?: "orange" }[];
  repoLabel: string;
  repoUrl: string;
  meta: string;
}

export interface CaseBanner {
  num: string;
  title: string;
  pill: string;
  description: string;
  meta: string;
  repoUrl: string;
}

export interface CasesBundle {
  featured: CaseFeatured;
  cards: CaseCard[];
  banner: CaseBanner;
}

const sharedTerminal = {
  pid: "PID 41820",
  prompt: "brain --orchestrate --mode=hybrid",
  logLines: [
    {
      text: "[OK] SQLite VectorStore initialized in 2.4ms",
      color: "muted" as const,
    },
    {
      text: '[ROUTER] Query detected: "Benchmark Go channels vs mutex"',
      color: "muted" as const,
    },
    {
      text: ">> Selecting Model: Ollama / qwen2.5-coder:7b (Local)",
      color: "orange-bold" as const,
    },
  ],
  response: {
    label: "Streaming Response:",
    text: "Using Go channels for synchronization avoids lock contention on multi-core pipelines...",
  },
  executionTime: "Execution time: 38ms · Memory footprint: 14.2MB",
  footerLeft: "CONCURRENCY: PASS",
  footerRight: "OLLAMA ROUTING: LIVE",
};

export const cases: Record<Lang, CasesBundle> = {
  es: {
    featured: {
      num: "CASE 01",
      category: "SYSTEM CLI & AI ORCHESTRATION",
      badge: "FLAGSHIP",
      title: "Brain CLI — Terminal AI Orchestrator & Autonomous Agent",
      description:
        "Asistente personal en TUI de terminal desarrollado en Go bajo principios de Clean Architecture. Orquesta tareas del sistema en segundo plano, canales reactivos de streaming de tokens y enrutamiento dinámico entre LLMs locales y de nube.",
      metrics: [
        { label: "ARCHITECTURE", value: "Hexagonal / Clean" },
        {
          label: "AI PROVIDERS",
          value: "Ollama · DeepSeek · OpenAI",
          accent: "orange",
        },
        { label: "MEMORY ENGINE", value: "SQLite + WAL Mode" },
      ],
      repoUrl: "https://github.com/NeRo0128/brain-cli",
      stack: "Go 1.22+ · Bubble Tea · Goroutines",
      terminal: sharedTerminal,
    },
    cards: [
      {
        num: "CASE 02",
        category: "GO / VECTOR EMBEDDINGS",
        title: "Semantic Router Microservice",
        description:
          "Microservicio HTTP de alto rendimiento para enrutamiento dinámico de consultas basado en similitud coseno de vectores semánticos. Reduce costos de LLM en un 60% mediante ruteo inteligente.",
        tags: [
          { label: "Go / Echo" },
          { label: "Jina Embeddings", accent: "orange" },
          { label: "Cosine Math" },
        ],
        repoLabel: "NeRo0201/semantic-router",
        repoUrl: "https://github.com/NeRo0201/semantic-router",
        meta: "<15ms Latency",
      },
      {
        num: "CASE 03",
        category: "PYTHON / STATS & NUMPY",
        title: "Subgroup Classifier Engine",
        description:
          "API de inferencia estadística y clustering multidimensional diseñada para aislar cohortes homogéneas a partir de conjuntos de datos heterogéneos con feedback paramétrico en tiempo real.",
        tags: [
          { label: "Python" },
          { label: "NumPy Matrix", accent: "orange" },
          { label: "Flask REST" },
        ],
        repoLabel: "NeRo0201/subgroup-classifier",
        repoUrl: "https://github.com/NeRo0201/subgroup-classifier",
        meta: "Matrix Accelerated",
      },
    ],
    banner: {
      num: "04",
      title: "E-Commerce Distributed Scraping & Data Pipeline",
      pill: "AsyncIO",
      description:
        "Pipeline de recolección de datos de alta concurrencia con Python AsyncIO, rotación dinámica de proxies y almacenamiento en MongoDB.",
      meta: "10k+ req/min",
      repoUrl: "https://github.com/NeRo0201",
    },
  },
  en: {
    featured: {
      num: "CASE 01",
      category: "SYSTEM CLI & AI ORCHESTRATION",
      badge: "FLAGSHIP",
      title: "Brain CLI — Terminal AI Orchestrator & Autonomous Agent",
      description:
        "A highly responsive Terminal User Interface (TUI) personal assistant engineered in Go following Clean Architecture. Orchestrates real-time background task execution, streaming token channels, and dynamic multi-provider routing across local and cloud LLMs.",
      metrics: [
        { label: "ARCHITECTURE", value: "Hexagonal / Clean" },
        {
          label: "AI PROVIDERS",
          value: "Ollama · DeepSeek · OpenAI",
          accent: "orange",
        },
        { label: "MEMORY ENGINE", value: "SQLite + WAL Mode" },
      ],
      repoUrl: "https://github.com/NeRo0128/brain-cli",
      stack: "Go 1.22+ · Bubble Tea · Goroutines",
      terminal: sharedTerminal,
    },
    cards: [
      {
        num: "CASE 02",
        category: "GO / VECTOR EMBEDDINGS",
        title: "Semantic Router Microservice",
        description:
          "High-throughput HTTP microservice routing queries dynamically based on cosine similarity thresholds of semantic vectors. Minimizes downstream LLM costs by 60% through intelligent routing.",
        tags: [
          { label: "Go / Echo" },
          { label: "Jina Embeddings", accent: "orange" },
          { label: "Cosine Math" },
        ],
        repoLabel: "NeRo0201/semantic-router",
        repoUrl: "https://github.com/NeRo0201/semantic-router",
        meta: "<15ms Latency",
      },
      {
        num: "CASE 03",
        category: "PYTHON / STATS & NUMPY",
        title: "Subgroup Classifier Engine",
        description:
          "Multidimensional clustering and statistical inference API designed to isolate homogeneous cohorts from heterogeneous datasets with real-time parametric feedback.",
        tags: [
          { label: "Python" },
          { label: "NumPy Matrix", accent: "orange" },
          { label: "Flask REST" },
        ],
        repoLabel: "NeRo0201/subgroup-classifier",
        repoUrl: "https://github.com/NeRo0201/subgroup-classifier",
        meta: "Matrix Accelerated",
      },
    ],
    banner: {
      num: "04",
      title: "E-Commerce Distributed Scraping & Data Pipeline",
      pill: "AsyncIO",
      description:
        "High-concurrency data harvest pipeline utilizing Python AsyncIO, dynamic proxy rotation, and MongoDB event storage.",
      meta: "10k+ req/min",
      repoUrl: "https://github.com/NeRo0201",
    },
  },
};
