// src/data/services.ts
import type { Lang } from "../i18n/ui";

export interface ServiceTag {
  label: string;
  accent?: "orange" | "cyan" | "default";
}

export interface Service {
  num: string;
  icon: string;
  title: string;
  description: string;
  tags: ServiceTag[];
}

export const services: Record<Lang, Service[]> = {
  es: [
    {
      num: "01",
      icon: "bolt",
      title: "Microservicios Concurrentes",
      description:
        "Servidores REST y gRPC de latencia ultra baja en Go con Gin y Echo. Logging estructurado, pipelines de middleware y concurrencia pura.",
      tags: [
        { label: "Go (Golang)" },
        { label: "Echo / Gin" },
        { label: "Goroutines", accent: "orange" },
      ],
    },
    {
      num: "02",
      icon: "psychology",
      title: "IA & Modelos Locales",
      description:
        "Despliegue de inferencia local con Ollama, embeddings contextuales, similitud coseno y aceleración con ONNX Runtime.",
      tags: [
        { label: "Ollama" },
        { label: "ONNX" },
        { label: "Vector Search", accent: "cyan" },
      ],
    },
    {
      num: "03",
      icon: "hub",
      title: "Grafos & Arquitectura de Datos",
      description:
        "Modelado de relaciones complejas con Neo4j Cypher, índices de alto rendimiento en MongoDB, SQLite y análisis matricial con NumPy.",
      tags: [
        { label: "Neo4j", accent: "orange" },
        { label: "MongoDB" },
        { label: "NumPy" },
      ],
    },
    {
      num: "04",
      icon: "terminal",
      title: "Cloud-Native CI/CD & Linux",
      description:
        "Docker multi-stage con 75%+ reducción de huella, afinamiento en Linux, pipelines automatizados con GitHub Actions y tooling CLI.",
      tags: [
        { label: "Docker" },
        { label: "Linux / Niri" },
        { label: "CI/CD" },
      ],
    },
  ],
  en: [
    {
      num: "01",
      icon: "bolt",
      title: "Concurrent Microservices",
      description:
        "Ultra low-latency REST and gRPC servers in Go with Gin and Echo. Structured logging, middleware pipelines, and goroutine pools.",
      tags: [
        { label: "Go (Golang)" },
        { label: "Echo / Gin" },
        { label: "Goroutines", accent: "orange" },
      ],
    },
    {
      num: "02",
      icon: "psychology",
      title: "Local LLMs & AI Systems",
      description:
        "Local LLM inference deployment with Ollama, contextual embeddings, cosine similarity scoring, and ONNX Runtime acceleration.",
      tags: [
        { label: "Ollama" },
        { label: "ONNX" },
        { label: "Vector Search", accent: "cyan" },
      ],
    },
    {
      num: "03",
      icon: "hub",
      title: "Graph & Data Engineering",
      description:
        "Modeling deep complex relationships with Neo4j Cypher, high-throughput MongoDB indexes, SQLite local engines, and multidimensional NumPy analysis.",
      tags: [
        { label: "Neo4j", accent: "orange" },
        { label: "MongoDB" },
        { label: "NumPy" },
      ],
    },
    {
      num: "04",
      icon: "terminal",
      title: "Cloud-Native CI/CD & Linux",
      description:
        "Multi-stage Docker builds with 75%+ footprint reduction, Linux kernel tuning, automated GitHub Actions pipelines, and developer tooling.",
      tags: [
        { label: "Docker" },
        { label: "Linux / Niri" },
        { label: "CI/CD" },
      ],
    },
  ],
};
