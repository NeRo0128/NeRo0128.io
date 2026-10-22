// src/data/timeline.ts
import type { Lang } from "../i18n/ui";

export interface Job {
  period: string;
  company: string;
  title: string;
  description: string;
  tags: { label: string; accent?: "orange" }[];
  location: string;
  active?: boolean;
}

export const jobs: Record<Lang, Job[]> = {
  es: [
    {
      period: "Dic 2025 — Jul 2026",
      company: "Universidad Marta Abreu & MINEM",
      title: "Especialista en Módulos de IA & Grafos",
      description:
        "Diseño de un motor de recomendación híbrido que fusiona embeddings vectoriales de texto con consultas relacionales en Neo4j. Integración de modelos LLM locales mediante Ollama para razonamiento explicativo e inferencia acelerada con ONNX Runtime en servidores Linux.",
      tags: [
        { label: "Go" },
        { label: "Neo4j", accent: "orange" },
        { label: "Ollama LLM" },
        { label: "Python" },
      ],
      location: "Santa Clara, Cuba",
      active: true,
    },
    {
      period: "Jun 2025 — Nov 2025",
      company: "Data & MLOps Laboratory",
      title: "Ingeniero de Datos & Pipelines Asíncronos",
      description:
        "Construcción de pipelines de extracción asíncrona masiva con FastAPI y aiohttp con gestión de límites de velocidad. Computación vectorial y clustering matricial acelerado con NumPy para analítica multidimensional en tiempo real.",
      tags: [{ label: "FastAPI" }, { label: "NumPy" }, { label: "AsyncIO" }],
      location: "Santa Clara, Cuba",
    },
    {
      period: "Ago 2024 — May 2025",
      company: "Distributed Systems Core",
      title: "Ingeniero de Sistemas Distribuidos en Go",
      description:
        "Desarrollo de pipelines concurrentes de alto throughput en Go (Echo) con canales asíncronos resilientes. Contenerización multi-stage en Docker con reducción de huella al 75% y configuración de despliegues Linux.",
      tags: [
        { label: "Go (Echo)", accent: "orange" },
        { label: "Docker" },
        { label: "Concurrency" },
      ],
      location: "Remote / Distributed",
    },
    {
      period: "Ene 2024 — Jul 2024",
      company: "Xetid",
      title: "Desarrollador Backend",
      description:
        "Servidores REST API de alto rendimiento con Go (Gin) bajo arquitectura de microservicios, diseño de esquemas en MongoDB y algoritmos de filtrado colaborativo con autenticación segura.",
      tags: [
        { label: "Go (Gin)" },
        { label: "MongoDB" },
        { label: "REST APIs" },
      ],
      location: "La Habana, Cuba",
    },
  ],
  en: [
    {
      period: "Dec 2025 — Jul 2026",
      company: "Universidad Marta Abreu & MINEM",
      title: "AI & Graph Modules Specialist",
      description:
        "Designed a hybrid recommendation engine fusing text vector embeddings with Neo4j relational queries. Integrated local LLM models via Ollama for explainable reasoning and accelerated inference with ONNX Runtime on Linux servers.",
      tags: [
        { label: "Go" },
        { label: "Neo4j", accent: "orange" },
        { label: "Ollama LLM" },
        { label: "Python" },
      ],
      location: "Santa Clara, Cuba",
      active: true,
    },
    {
      period: "Jun 2025 — Nov 2025",
      company: "Data & MLOps Laboratory",
      title: "Data Engineer & Async Pipelines",
      description:
        "Built massive async extraction pipelines with FastAPI and aiohttp including rate-limit management. Vector computation and accelerated matrix clustering with NumPy for real-time multidimensional analytics.",
      tags: [{ label: "FastAPI" }, { label: "NumPy" }, { label: "AsyncIO" }],
      location: "Santa Clara, Cuba",
    },
    {
      period: "Aug 2024 — May 2025",
      company: "Distributed Systems Core",
      title: "Distributed Systems Engineer (Go)",
      description:
        "Developed high-throughput concurrent pipelines in Go (Echo) with resilient async channels. Multi-stage Docker containerization with 75% footprint reduction and Linux deployment configuration.",
      tags: [
        { label: "Go (Echo)", accent: "orange" },
        { label: "Docker" },
        { label: "Concurrency" },
      ],
      location: "Remote / Distributed",
    },
    {
      period: "Jan 2024 — Jul 2024",
      company: "Xetid",
      title: "Backend Developer",
      description:
        "High-performance REST API servers with Go (Gin) under microservices architecture, MongoDB schema design, and collaborative filtering algorithms with secure authentication.",
      tags: [
        { label: "Go (Gin)" },
        { label: "MongoDB" },
        { label: "REST APIs" },
      ],
      location: "Havana, Cuba",
    },
  ],
};
