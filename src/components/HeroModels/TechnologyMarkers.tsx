
import { Html } from "@react-three/drei";
import * as THREE from "three";

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
} from "simple-icons";

const MARKER_RADIUS = 2.27;

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
};

export const technologies: Technology[] = [
  {
    name: "React",
    category: "Frontend",
    description:
      "A component-based JavaScript library for building interactive user interfaces.",
    application:
      "Building responsive interfaces and interactive portfolio experiences.",
    icon: siReact,
    latitude: 32,
    longitude: -35,
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
  },
  {
    name: "Python",
    category: "Programming",
    description:
      "A versatile programming language used in backend development, automation and data work.",
    application:
      "Exploring backend services, automation and AI-related applications.",
    icon: siPython,
    latitude: 48,
    longitude: 25,
  },
  {
    name: "FastAPI",
    category: "Backend",
    description:
      "A modern Python framework for building high-performance APIs.",
    application:
      "Building Python API services and experimenting with asynchronous architectures.",
    icon: siFastapi,
    latitude: -42,
    longitude: 12,
  },
  {
    name: "TypeScript",
    category: "Programming",
    description:
      "JavaScript with static typing to make larger applications easier to maintain.",
    application:
      "Adding type safety and clearer contracts to frontend and backend applications.",
    icon: siTypescript,
    latitude: 8,
    longitude: 48,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description:
      "A powerful relational database for structured data and reliable transactions.",
    application:
      "Designing relational schemas, writing SQL queries and managing application data.",
    icon: siPostgresql,
    latitude: -8,
    longitude: -58,
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
  },
  {
    name: "Redis",
    category: "Infrastructure",
    description:
      "An in-memory data store used for caching, messaging and fast data access.",
    application:
      "Exploring caching and Redis Streams in asynchronous application architectures.",
    icon: siRedis,
    latitude: -38,
    longitude: -65,
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
  },
];

const getGlobePosition = (
  latitude: number,
  longitude: number
): THREE.Vector3 => {
  const lat = THREE.MathUtils.degToRad(latitude);
  const lon = THREE.MathUtils.degToRad(longitude);

  return new THREE.Vector3(
    MARKER_RADIUS * Math.cos(lat) * Math.sin(lon),
    MARKER_RADIUS * Math.sin(lat),
    MARKER_RADIUS * Math.cos(lat) * Math.cos(lon)
  );
};

type TechnologyMarkersProps = {
  onSelect: (technology: Technology) => void;
  selectedTechnology: string | null;
};

const TechnologyMarkers = ({
  onSelect,
  selectedTechnology,
}: TechnologyMarkersProps) => {
  return (
    <>
      {technologies.map((technology) => {
        const position = getGlobePosition(
          technology.latitude,
          technology.longitude
        );

        const isSelected =
          selectedTechnology === technology.name;

        return (
          <Html
            key={technology.name}
            position={position}
            center
            distanceFactor={8}
            occlude
            zIndexRange={[20, 0]}
          >
            <button
              type="button"
              className={`globe-tech-marker ${
                isSelected ? "is-selected" : ""
              }`}
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                onSelect(technology);
              }}
              aria-label={`Explore ${technology.name}`}
              aria-pressed={isSelected}
            >
              <svg
                viewBox="0 0 24 24"
                className="globe-tech-icon"
                aria-hidden="true"
              >
                <path
                  d={technology.icon.path}
                  fill="currentColor"
                />
              </svg>

              <span>{technology.name}</span>
            </button>
          </Html>
        );
      })}
    </>
  );
};

export default TechnologyMarkers;
