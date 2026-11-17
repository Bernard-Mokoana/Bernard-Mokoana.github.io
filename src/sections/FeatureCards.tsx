
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const engineeringPrinciples = [
  {
    number: "01",
    label: "HOW I APPROACH SYSTEMS",
    title: "Think in systems.",
    description:
      "I look beyond individual features to understand how architecture, APIs, databases, and services connect to form a complete system.",
    keywords: ["Architecture", "Data flow", "Integration"],
    symbol: "◎",
  },
  {
    number: "02",
    label: "HOW I APPROACH PROBLEMS",
    title: "Break complexity down.",
    description:
      "I turn broad requirements into smaller problems, define the relationships between them, and work through solutions methodically.",
    keywords: ["Analysis", "Structure", "Iteration"],
    symbol: "⌘",
  },
  {
    number: "03",
    label: "HOW I KEEP GROWING",
    title: "Learn by building.",
    description:
      "I explore unfamiliar technologies through practical projects, experiments, testing, and continuous refinement.",
    keywords: ["Experimentation", "Practice", "Growth"],
    symbol: "↗",
  },
];

const FeatureCards = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".beyond-code-heading",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".principle-card",
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".beyond-code-grid",
            start: "top 82%",
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="approach"
      ref={sectionRef}
      className="beyond-code-section"
    >
      <div className="beyond-code-inner">
        <header className="beyond-code-heading">
          <div>
            <span className="beyond-code-eyebrow">
              BEYOND CODE / ENGINEERING MINDSET
            </span>

            <h2>
              Beyond the code.
              <br />
              <span>Into the thinking.</span>
            </h2>
          </div>

          <p>
            Good software starts before the first line of code.
            It starts with how a problem is understood, structured,
            and approached.
          </p>
        </header>

        <div className="beyond-code-grid">
          {engineeringPrinciples.map((principle) => (
            <article
              className="principle-card"
              key={principle.number}
            >
              <div className="principle-card-top">
                <span className="principle-number">
                  / {principle.number}
                </span>

                <span
                  className="principle-symbol"
                  aria-hidden="true"
                >
                  {principle.symbol}
                </span>
              </div>

              <div className="principle-card-content">
                <span className="principle-label">
                  {principle.label}
                </span>

                <h3>{principle.title}</h3>

                <p>{principle.description}</p>
              </div>

              <div className="principle-keywords">
                {principle.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>

              <div className="principle-card-footer">
                <span>THE CURIOUS MIND</span>
                <span>{principle.number} / 03</span>
              </div>
            </article>
          ))}
        </div>

        <div className="beyond-code-statement">
          <span className="beyond-code-statement-mark">
            A PERSONAL PRINCIPLE
          </span>

          <p>
            Curious by nature.
            <span> Engineered by intention.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
