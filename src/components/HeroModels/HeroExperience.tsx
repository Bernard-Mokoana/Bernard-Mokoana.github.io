
import { useState, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import Earth from "./Earth";
import type { Technology } from "./TechnologyMarkers";

const HeroExperience = () => {
  const [selectedTechnology, setSelectedTechnology] =
    useState<Technology | null>(null);

  const prefersReducedMotion = useMediaQuery({
    query: "(prefers-reduced-motion: reduce)",
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedTechnology(null);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, []);


  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });


  return (
    <div className="hero-experience">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 45,
        }}
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <ambientLight intensity={0.7} color="#dce5dd" />

        <directionalLight
          position={[4, 5, 5]}
          intensity={2}
          color="#f2f2ed"
        />

        <pointLight
          position={[-4, 1, -3]}
          intensity={12}
          color="#91bfc2"
        />

        <pointLight
          position={[3, -2, 2]}
          intensity={8}
          color="#c3f36b"
        />
        
        <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={!isTablet}
        enableRotate
        enableDamping
        dampingFactor={0.06}
        autoRotate={!selectedTechnology && !prefersReducedMotion}
        autoRotateSpeed={0.3}
        minDistance={5}
        maxDistance={12}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI * 0.75}
        />

        <group
          scale={isMobile ? 0.8 : isTablet ? 0.9 : 1}
        >
          <Earth
            onSelectTechnology={setSelectedTechnology}
            selectedTechnology={
              selectedTechnology?.name ?? null
            }
          />
        </group>
      </Canvas>

      {selectedTechnology && (
        <aside
          className="globe-info-panel"
          aria-live="polite"
          aria-label={`${selectedTechnology.name} information`}
        >
          <div className="globe-panel-header">
            <div className="globe-panel-identity">
              <div className="globe-panel-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d={selectedTechnology.icon.path}
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div>
                <span className="globe-panel-category">
                  {selectedTechnology.category}
                </span>

                <h3>{selectedTechnology.name}</h3>
              </div>
            </div>

            <button
              type="button"
              className="globe-panel-close"
              onClick={() => setSelectedTechnology(null)}
              aria-label="Close technology information"
            >
              ×
            </button>
          </div>

          <p className="globe-panel-description">
            {selectedTechnology.description}
          </p>

          <div className="globe-panel-application">
            <span>HOW I USE IT</span>
            <p>{selectedTechnology.application}</p>
          </div>
        </aside>
      )}
    </div>
  );
};

export default HeroExperience;
