
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroExperience from "../components/HeroModels/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-reveal",
      {
        y: 35,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".hero-scene",
      {
        opacity: 0,
        scale: 0.96,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: "power2.out",
      }
    );
  });

  return (
    <section
      id="hero"
      className="hero-section relative overflow-hidden"
    >
      {/* Background atmosphere */}
      <div className="hero-atmosphere" aria-hidden="true" />

      {/* Main hero content */}
      <div className="hero-container">

        {/* LEFT: PERSONAL INTRODUCTION */}
        <header className="hero-content">

          <div className="hero-reveal hero-eyebrow">
            <span className="hero-status-dot" />
            <span className="mono-label">
              Software Engineer
            </span>
            <span className="hero-location">
              {/* / South Africa */}
            </span>
          </div>

          <div className="hero-heading hero-reveal">
            <h1>
              Curiosity has
              <br />
              no interface<span className="hero-period">.</span>
            </h1>

            <h2>
              I build things to
              <br />
              <span>explore them.</span>
            </h2>
          </div>

          <p className="hero-description hero-reveal">
            I'm Bernard, a software engineer fascinated by
            how things work, how systems connect, and how
            technology can turn complex ideas into meaningful
            solutions.
          </p>

          <div className="hero-actions hero-reveal">

            <a href="#work" className="hero-primary-btn">
              <span>Explore my work</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#skills" className="hero-secondary-btn">
              Explore my technical universe
              <span aria-hidden="true">↓</span>
            </a>

          </div>

          {/* Small technical annotation */}
          <div className="hero-annotation hero-reveal">
            <span className="mono-label">
              CURRENT INTERESTS
            </span>

            <div className="hero-tags">
              <span>Systems</span>
              <span>Backend</span>
              <span>Cloud</span>
              <span>AI</span>
            </div>
          </div>

        </header>

        {/* RIGHT: INTERACTIVE TECHNICAL GLOBE */}
        <figure className="hero-scene">

          <div className="hero-scene-label">
            <span className="mono-label">
              MY WORLD
            </span>
            <span className="hero-scene-line" />
            <span className="mono-label">
              THE TECHNICAL UNIVERSE
            </span>
          </div>

          <div className="hero-3d-layout">
            <HeroExperience />
          </div>

          <div className="hero-scene-caption">
            <span className="hero-caption-dot" />
            <span className="mono-label">
              SELECT A MARKER TO EXPLORE ITS PROJECTS
            </span>
          </div>

        </figure>

      </div>

      {/* Bottom information */}
      <div className="hero-bottom">
        <span className="mono-label">
          SOUTH AFRICA
        </span>

        <a href="#work" className="hero-scroll">
          SCROLL TO EXPLORE
          <span aria-hidden="true">↓</span>
        </a>

        <span className="mono-label">
          BM / 001
        </span>
      </div>

    </section>
  );
};

export default Hero;
