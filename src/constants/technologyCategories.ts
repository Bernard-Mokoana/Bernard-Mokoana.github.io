export interface TechnologyCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: "backend",
    number: "01",
    title: "Backend Engineering",
    description:
      "Developing APIs, application logic, authentication, and server-side systems.",
    technologies: [
      "Typescript",
      "Python",
      "Java",
      "SQL",
      "Node.js",
      "FastAPI",
      "Spring Boot",
    ],
  },
  {
    id: "frontend",
    number: "02",
    title: "Frontend Engineering",
    description:
      "Building responsive, interactive interfaces and user experiences.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Redux",
      "Tailwind CSS",
    ],
  },
  {
    id: "data",
    number: "03",
    title: "Databases & Data",
    description:
      "Designing data models, managing persistence, and working with structured and unstructured data.",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    id: "infrastructure",
    number: "04",
    title: "Infrastructure & Tools",
    description:
      "Working with development environments, containers, version control, and deployment workflows.",
    technologies: ["Docker", "Git", "GitHub", "Linux", "Cisco Packet Tracer"],
  },
];
