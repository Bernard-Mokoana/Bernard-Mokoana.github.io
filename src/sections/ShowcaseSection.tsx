
import { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    name: "Thuto",
    category: "LEARNING PLATFORM",
    description:
      "A full-stack learning platform built to bring learning experiences, user progress, and course content into one place.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
    repository: "https://github.com/Bernard-Mokoana/Thuto",
    live: "https://bernard-mokoana.github.io/Thuto/",
    image:
      "/images/lms-learning-management-system-web-260nw-2179576237.webp",
    imageAlt: "Learning management system concept illustration",
    visual: "thuto",
    visualLabel: "LEARN / BUILD / GROW",
  },
  {
    number: "02",
    name: "chat.zaAI",
    category: "AI · DISTRIBUTED SYSTEMS",
    description:
      "An AI chat application architecture connecting a Next.js interface to a FastAPI gateway and background Python worker, with Redis and PostgreSQL supporting the system.",
    technologies: [
      "Next.js",
      "FastAPI",
      "Python",
      "Redis",
      "PostgreSQL",
      "Docker",
    ],
    repository: "https://github.com/Bernard-Mokoana/chat.zaAI",
    image: "/images/AiChatbot.avif",
    imageAlt: "AI chatbot and conversational interface illustration",
    visual: "zaai",
    visualLabel: "PROMPT / PROCESS / RESPONSE",
  },
  {
    number: "03",
    name: "Real-Time Leaderboard",
    category: "REAL-TIME WEB APPLICATION",
    description:
      "A learning-management leaderboard where authenticated learners earn XP through tasks and see ranking updates broadcast in real time.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Socket.IO",
      "PostgreSQL",
      "Redis",
    ],
    repository:
      "https://github.com/Bernard-Mokoana/Real_Time_Leaderboard",
    image: "/images/RealTimeLeaderboard.jpg",
    imageAlt: "Leaderboard interface concept showing player rankings and scores",
    visual: "leaderboard",
    visualLabel: "LIVE RANKINGS",
  },
  {
    number: "04",
    name: "Computer Networks",
    category: "NETWORK ENGINEERING",
    description:
      "A Cisco Packet Tracer project exploring wired and wireless network design, multiple network topologies, VLAN segmentation, inter-VLAN routing, and server configuration.",
    technologies: [
      "Cisco Packet Tracer",
      "IPv4 / IPv6",
      "VLANs",
      "DHCP",
      "DNS",
      "HTTP",
      "WPA2",
    ],
    repository:
      "https://github.com/Bernard-Mokoana/Computer-Networks-2025-Project",
    image: "/images/computer-networking-vector.jpg",
    imageAlt: "Computer network architecture illustration",
    visual: "network",
    visualLabel: "DESIGN / CONFIGURE / VERIFY",
  },
];

const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      gsap.fromTo(
        cardsRef.current,
        { y: 44, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="showcase-inner">
        <div className="showcase-heading">
          <div>
            <span className="showcase-eyebrow">
              SELECTED WORK / 2026
            </span>

            <h2>
              Ideas, translated into <span>systems.</span>
            </h2>
          </div>

          <p>
            A selection of projects exploring full-stack development,
            AI infrastructure, and real-time systems.
          </p>
        </div>

        <div className="showcase-grid">
          {projects.map((project, index) => (
            <article
              className="showcase-card"
              key={project.name}
              ref={(element) => {
                if (element) cardsRef.current[index] = element;
              }}
            >
              <div
                className={`showcase-visual showcase-visual--${project.visual}`}
              >
                <div className="showcase-visual-topline">
                  <span>BM / PROJECT {project.number}</span>
                  <span>VISUAL REFERENCE</span>
                </div>

                <div className="showcase-image-frame">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="showcase-project-image"
                    loading="lazy"
                  />
                </div>

                <span className="showcase-visual-label">
                  {project.visualLabel}
                </span>
              </div>

              <div className="showcase-card-content">
                <div className="showcase-card-meta">
                  <span>{project.category}</span>
                  <span>/{project.number}</span>
                </div>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="showcase-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="showcase-links">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>

                  {"live" in project && project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live project <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
