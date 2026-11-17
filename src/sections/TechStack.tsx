
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { technologyCategories } from "../constants/technologyCategories";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".tech-universe-header",
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
        ".tech-category-card",
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".tech-universe-grid",
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
      id="skills"
      ref={sectionRef}
      className="tech-universe section-padding"
    >
      <div className="tech-universe-inner">
        <header className="tech-universe-header">
          <div className="tech-universe-heading">
            <span className="tech-universe-eyebrow">
              THE TECHNICAL UNIVERSE
            </span>

            <h2>
              The tools behind
              <span> the thinking.</span>
            </h2>
          </div>

          <p className="tech-universe-intro">
            Technologies I use to design, build, connect, and maintain
            software systems.
          </p>
        </header>

        <div className="tech-universe-grid">
          {technologyCategories.map((category) => (
            <article
              className="tech-category-card"
              key={category.id}
            >
              <div className="tech-category-top">
                <span className="tech-category-number">
                  {category.number}
                </span>

                <span className="tech-category-indicator">
                  TOOLKIT
                </span>
              </div>

              <div className="tech-category-body">
                <h3>{category.title}</h3>

                <p>{category.description}</p>
              </div>

              <div
                className="tech-category-technologies"
                aria-label={`${category.title} technologies`}
              >
                {category.technologies.map((technology) => (
                  <span
                    className="tech-pill"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="tech-category-footer">
                <span>ENGINEERING DISCIPLINE</span>
                <span>{category.number} / 04</span>
              </div>
            </article>
          ))}
        </div>

        <div className="tech-universe-bottom">
          <span className="tech-universe-bottom-mark">
            BM / 2026
          </span>

          <p>
            Always learning. Always building. Always refining.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
