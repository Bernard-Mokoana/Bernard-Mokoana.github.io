import {
  siReact,
  siNodedotjs,
  siExpress,
  siPython,
  siFastapi,
  siTypescript,
  siPostgresql,
  siMongodb,
  siRedis,
  siDocker,
  siCplusplus,
} from "simple-icons";

export type ProjectConnection = {
  projectId: string;
  usage: string;
};

export type PortfolioProject = {
  id: string;
  name: string;
  summary: string;
  repositoryUrl: string;
  liveUrl?: string;
};

export const portfolioProjects: Record<string, PortfolioProject> = {
  thuto: {
    id: "thuto",
    name: "Thuto | Learning Management Platform",
    summary:
      "A full-stack online learning platform for course creation and enrollment, lesson management, assessments, grading, progress tracking and certificates.",
    repositoryUrl: "https://github.com/Bernard-Mokoana/Thuto",
    liveUrl: "https://bernard-mokoana.github.io/Thuto/",
  },
  chatZaAI: {
    id: "chat-za-ai",
    name: "chat.zaAI | Distributed AI Chatbot",
    summary:
      "A full-stack chatbot split across a Next.js client, FastAPI gateway and Python inference worker, with Redis coordinating sessions and asynchronous messages.",
    repositoryUrl: "https://github.com/Bernard-Mokoana/chat.zaAI",
  },
};

export type Technology = {
  name: string;
  category: string;
  description: string;
  application: string;
  icon: {
    path: string;
    hex: string;
  };
  latitude: number;
  longitude: number;
  projects: ProjectConnection[];
};

export const technologies: Technology[] = [
  {
    name: "React",
    category: "Frontend",
    description:
      "A component-based JavaScript library for building interactive user interfaces.",
    application:
      "Building responsive interfaces and interactive application experiences.",
    icon: siReact,
    latitude: 32,
    longitude: -35,
    projects: [
      {
        projectId: "thuto",
        usage:
          "Builds the responsive learning platform interface and reusable course, lesson and assessment views.",
      },
      {
        projectId: "chat-za-ai",
        usage:
          "Powers the interactive chat experience through the Next.js client.",
      },
    ],
  },
  {
    name: "Node.js",
    category: "Backend",
    description:
      "A JavaScript runtime for building server-side applications and APIs.",
    application:
      "Developing backend services, application logic and API integrations.",
    icon: siNodedotjs,
    latitude: 12,
    longitude: 5,
    projects: [
      {
        projectId: "thuto",
        usage: "Runs the platform's server-side application and API services.",
      },
    ],
  },
  {
    name: "Express",
    category: "Backend",
    description:
      "A lightweight web framework for building APIs and server applications with Node.js.",
    application:
      "Structuring REST APIs, middleware, routing and backend services.",
    icon: siExpress,
    latitude: -18,
    longitude: -28,
    projects: [
      {
        projectId: "thuto",
        usage:
          "Organises REST endpoints, authentication middleware and routes for learning-platform features.",
      },
    ],
  },
  {
    name: "Python",
    category: "Programming",
    description:
      "A versatile programming language used in backend development, automation and data work.",
    application:
      "Building backend services, automation and AI-related applications.",
    icon: siPython,
    latitude: 48,
    longitude: 25,
    projects: [
      {
        projectId: "chat-za-ai",
        usage:
          "Runs the background worker that consumes queued messages, calls the Hugging Face inference model and publishes replies.",
      },
    ],
  },
  {
    name: "FastAPI",
    category: "Backend",
    description:
      "A modern Python framework for building high-performance APIs.",
    application: "Building Python API services and asynchronous architectures.",
    icon: siFastapi,
    latitude: -42,
    longitude: 12,
    projects: [
      {
        projectId: "chat-za-ai",
        usage:
          "Provides the HTTP session and token endpoints and hosts the WebSocket gateway between the client and worker flow.",
      },
    ],
  },
  {
    name: "TypeScript",
    category: "Programming",
    description:
      "JavaScript with static typing to make larger applications easier to maintain.",
    application:
      "Adding type safety and clearer contracts to frontend applications.",
    icon: siTypescript,
    latitude: 8,
    longitude: 48,
    projects: [
      {
        projectId: "thuto",
        usage:
          "Provides type-safe frontend code for the React and Vite learning platform.",
      },
      {
        projectId: "chat-za-ai",
        usage: "Types the Next.js client and its chat interface code.",
      },
    ],
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description:
      "A relational database used for structured data and reliable transactions.",
    application:
      "Working with relational models and SQL-backed application data.",
    icon: siPostgresql,
    latitude: -8,
    longitude: -58,
    projects: [
      {
        projectId: "chat-za-ai",
        usage:
          "Provides the relational data-layer foundation through SQLAlchemy models and Alembic migrations. The current chat-session flow uses Redis for active session storage.",
      },
    ],
  },
  {
    name: "MongoDB",
    category: "Database",
    description:
      "A document-oriented database designed for flexible data models.",
    application:
      "Working with document models, queries and aggregation pipelines.",
    icon: siMongodb,
    latitude: 38,
    longitude: 65,
    projects: [
      {
        projectId: "thuto",
        usage:
          "Stores platform data and supports aggregation pipelines for course, submission and student-performance reporting.",
      },
    ],
  },
  {
    name: "Redis",
    category: "Infrastructure",
    description:
      "An in-memory data store used for caching, messaging and fast data access.",
    application: "Handling session data and asynchronous message passing.",
    icon: siRedis,
    latitude: -38,
    longitude: -65,
    projects: [
      {
        projectId: "chat-za-ai",
        usage:
          "Stores active chat sessions and message history, while Redis Streams pass messages between the FastAPI server and Python worker.",
      },
    ],
  },
  {
    name: "Docker",
    category: "Infrastructure",
    description:
      "A platform for packaging applications and their dependencies into containers.",
    application:
      "Containerizing development environments and application services.",
    icon: siDocker,
    latitude: -5,
    longitude: 85,
    projects: [
      {
        projectId: "chat-za-ai",
        usage:
          "Docker Compose defines the Redis, FastAPI server, Python worker and Next.js client services.",
      },
    ],
  },
  // {
  //   name: "Java",
  //   category: "Programming",
  //   description:
  //     "An object-oriented programming language used to build robust, portable applications and backend systems.",
  //   application:
  //     "Developing object-oriented applications and strengthening programming fundamentals.",
  //   icon: siJava,
  //   latitude: 18,
  //   longitude: 125,
  //   projects: [],
  // },
  {
    name: "C++",
    category: "Programming",
    description:
      "A high-performance programming language offering low-level memory control and object-oriented programming capabilities.",
    application:
      "Exploring algorithms, data structures, object-oriented programming and performance-focused software development.",
    icon: siCplusplus,
    latitude: -28,
    longitude: 145,
    projects: [],
  },
];
