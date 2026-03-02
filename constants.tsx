
import { Project } from './types';

export const PERSONAL_INFO = {
  name: "MALLIKARJUNA MUDHOL",
  firstName: "MALLIKARJUNA",
  lastName: "MUDHOL",
  title: "Frontend Developer",
  summary: "Detail-oriented Frontend Developer and Computer Science undergraduate with a passion for building accessible, high-performance web applications. Expert in React.js, Next.js, and Tailwind CSS, with a specialized focus on creating pixel-perfect, responsive interfaces.",
  email: "manubmudhol@gmail.com",
  github: "https://github.com/MallikarjunaM987",
  linkedin: "https://linkedin.com/in/mallikarjuna-mudhol",
};

export const PROJECTS: Project[] = [
  {
    id: "aether",
    title: "AETHER DIGITAL",
    category: "Architecture Agency",
    description: "Architected a high-performance portfolio showcasing a 'hand-coded' aesthetic with organic fluidity and brutalist precision.",
    tech: ["React 19", "TypeScript", "Tailwind CSS", "GSAP"],
    link: "https://aetherbuildit.vercel.app/",
  },
  {
    id: "smart-student",
    title: "LEARNING ASSISTANT",
    category: "Accessibility AI",
    description: "SIH Finalist. Engineered an accessibility-first application for visually impaired users, focusing on screen reader compatibility.",
    tech: ["Flutter", "Firebase", "Accessibility"],
  },
  {
    id: "routestitch",
    title: "ROUTESTITCH",
    category: "Multi-Modal Travel Platform",
    description: "A unified multi-modal travel platform aggregating trains, flights, buses, and local transit into a single journey optimizer. Features an interactive TripBuilder with smart buffer-time management to eliminate missed connections.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Vite", "Zod"],
  },
  {
    id: "ai-brain",
    title: "AI SECOND BRAIN",
    category: "LLM Productivity",
    description: "Built a privacy-focused local AI assistant using RAG (Retrieval-Augmented Generation) for secure document analysis.",
    tech: ["Llama 3", "LangChain", "Streamlit"],
  }
];

export const SKILLS = [
  "React.js", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "Firebase", "Accessibility", "UI/UX", "Python"
];
