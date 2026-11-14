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
    visual: "thuto",
    visualLabel: "LEARN / BUILD / GROW",
  },
  {
    number: "02",
    name: "chat.zaAI",
    category: "AI · DISTRIBUTED SYSTEMS",
    description:
      "An AI chat application architecture connecting a Next.js interface to a FastAPI gateway and background Python worker, with Redis and PostgreSQL supporting the system.",
    technologies: ["Next.js", "FastAPI", "Python", "Redis", "PostgreSQL", "Docker"],
    repository: "https://github.com/Bernard-Mokoana/chat.zaAI",
    visual: "zaai",
    visualLabel: "PROMPT → PROCESS → RESPONSE",
  },
  {
    number: "03",
    name: "Real-Time Leaderboard",
    category: "REAL-TIME WEB APPLICATION",
    description:
      "A learning-management leaderboard where authenticated learners earn XP through tasks and see ranking updates broadcast in real time.",
    technologies: ["React", "TypeScript", "Node.js", "Socket.IO", "PostgreSQL", "Redis"],
    repository: "https://github.com/Bernard-Mokoana/Real_Time_Leaderboard",
    visual: "leaderboard",
    visualLabel: "LIVE RANKINGS",
  },
  {
  number: "04",
  name: "Computer Networks 2025",
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
  visual: "network",
  visualLabel: "DESIGN / CONFIGURE / VERIFY",
},
];

const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLArticleElement[]>([]);

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
            <span className="showcase-eyebrow">SELECTED WORK / 2026</span>
            <h2>Ideas, translated into <span>systems.</span></h2>
          </div>
          <p>
            A selection of projects exploring full-stack development, AI
            infrastructure, and real-time systems.
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
              <div className={`showcase-visual showcase-visual--${project.visual}`}>
                <div className="showcase-visual-topline">
                  <span>BM / PROJECT {project.number}</span>
                  <span>◉ CONCEPT / BUILD</span>
                </div>
                <div className="showcase-visual-center">
                  {project.visual === "thuto" && (
                    <div className="thuto-visual-ui">
                      <div className="visual-window-bar"><i /><i /><i /><span>THUTO / LEARNING SPACE</span></div>
                      <div className="thuto-visual-content">
                        <div className="visual-sidebar"><b /><i /><i /><i /></div>
                        <div className="visual-main"><small>YOUR LEARNING JOURNEY</small><strong>Keep<br />moving forward.</strong><div className="visual-progress"><span /></div><div className="visual-mini-row"><i /><i /><i /></div></div>
                      </div>
                    </div>
                  )}
                  {project.visual === "zaai" && (
                    <div className="zaai-visual-ui">
                      <div className="zaai-orbit zaai-orbit--one" />
                      <div className="zaai-orbit zaai-orbit--two" />
                      <div className="zaai-core">AI</div>
                      <span className="zaai-node zaai-node--top">NEXT.JS</span>
                      <span className="zaai-node zaai-node--left">FASTAPI</span>
                      <span className="zaai-node zaai-node--right">WORKER</span>
                      <span className="zaai-node zaai-node--bottom">REDIS · PG</span>
                    </div>
                  )}
                  {project.visual === "leaderboard" && (
                    <div className="leaderboard-visual-ui">
                      <div className="leaderboard-visual-heading"><small>GLOBAL LEADERBOARD</small><b><span /> LIVE</b></div>
                      {["01  Learner Alpha", "02  Learner Beta", "03  Learner Gamma"].map((row, rowIndex) => (
                        <div className="leaderboard-visual-row" key={row}>
                          <span>{row}</span><strong>{[2480, 2160, 1940][rowIndex]} XP</strong>
                        </div>
                      ))}
                      <div className="leaderboard-visual-foot">RANKINGS UPDATE IN REAL TIME</div>
                    </div>
                  )}
                  {project.visual === "network" && (
                    <div className="network-visual-ui">
                        <div className="network-visual-heading">
                            <span>NETWORK ARCHITECTURE</span>
                            <span>IPv4 / IPv6</span>
                    </div>
                    <div className="network-router">
                        <span>ROUTER</span>
                        <small>INTER-VLAN ROUTING</small>
                    </div>
                    
                    <div className="network-connection" />
                    <div className="network-switches">
                        <div className="network-switch">
                            <span>SWITCH 01</span>
                            <small>VLAN 10 / 20</small>
                    </div>
                    <div className="network-switch">
                        <span>SWITCH 02</span>
                        <small>VLAN 30 / 40</small>
                    </div>
                    <div className="network-switch">
                        <span>SERVER</span>
                        <small>DHCP / DNS / HTTP</small>
                    </div>
                </div>

    <div className="network-connection network-connection--short" />

    <div className="network-clients">
      <span>PC</span>
      <span>LAPTOP</span>
      <span>SERVER</span>
      <span>WIRELESS</span>
    </div>

    <div className="network-visual-footer">
      <span>TOPOLOGY DESIGN</span>
      <span>PACKET TRACER</span>
    </div>
  </div>
)}
                </div>
                <span className="showcase-visual-label">{project.visualLabel}</span>
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
                  <a href={project.repository} target="_blank" rel="noreferrer">
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
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
