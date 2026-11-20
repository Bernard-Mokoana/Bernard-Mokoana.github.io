
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const LoadingEarth = () => {
  const globeRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = useRef(false);

useEffect(() => {
  const mediaQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  prefersReducedMotion.current = mediaQuery.matches;

  const handleChange = (event: MediaQueryListEvent) => {
    prefersReducedMotion.current = event.matches;
  };

  mediaQuery.addEventListener("change", handleChange);

  return () => {
    mediaQuery.removeEventListener("change", handleChange);
  };
}, []);

useFrame((_, delta) => {
  if (!globeRef.current || prefersReducedMotion.current) return;

  globeRef.current.rotation.y += delta * 0.22;

  globeRef.current.rotation.x =
    Math.sin(globeRef.current.rotation.y * 0.35) * 0.06;
});

  return (
    <group ref={globeRef}>
      {/* Dark planet surface */}
      <mesh>
        <sphereGeometry args={[1.35, 48, 48]} />
        <meshStandardMaterial
          color="#18231d"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Glowing wireframe */}
      <mesh scale={1.006}>
        <sphereGeometry args={[1.35, 32, 24]} />
        <meshBasicMaterial
          color="#91bfc2"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Atmospheric shell */}
      <mesh scale={1.08}>
        <sphereGeometry args={[1.35, 48, 48]} />
        <meshBasicMaterial
          color="#91bfc2"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Orbital ring */}
      <mesh rotation={[Math.PI / 2.8, 0.2, 0]}>
        <torusGeometry args={[1.75, 0.008, 8, 120]} />
        <meshBasicMaterial
          color="#c3f36b"
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Secondary orbital ring */}
      <mesh rotation={[Math.PI / 2.3, -0.35, 0]}>
        <torusGeometry args={[1.9, 0.004, 8, 120]} />
        <meshBasicMaterial
          color="#91bfc2"
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
};


type PreloaderProps = {
  isReady: boolean;
};

const Preloader = ({ isReady }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const startTime = useRef<number | null>(null);

  useEffect(() => {
  const previousOverflow = document.body.style.overflow;

  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = previousOverflow;
  };
}, []);

  // Start the visual progress animation.
  useEffect(() => {
    startTime.current = performance.now();

    const progressTimer = window.setInterval(() => {
      setProgress((current) => Math.min(current + 2, 90));
    }, 50);

    return () => {
      window.clearInterval(progressTimer);
    };
  }, []);

  // Wait for the portfolio scene to initialize.
  useEffect(() => {
    if (!isReady) return;

    const elapsed =
      performance.now() - (startTime.current ?? performance.now());

    const remaining = Math.max(0, 1200 - elapsed);

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, remaining + 350);

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, remaining + 1100);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, [isReady]);

  if (!isVisible) return null;

  // Display 100% when the actual scene is ready.
  const displayProgress = isReady ? 100 : progress;

  return (
    <div
      className={`preloader ${isExiting ? "preloader-exit" : ""}`}
      role="status"
      aria-label={
        isReady
          ? "Portfolio ready"
          : `Initializing portfolio, ${displayProgress}%`
      }
    >
      <div className="preloader-content">
        <div className="preloader-globe">
          <Canvas
            camera={{ position: [0, 0, 5.5], fov: 40 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.65} />

            <directionalLight
              position={[3, 4, 5]}
              intensity={2}
              color="#f2f2ed"
            />

            <pointLight
              position={[-3, 1, -3]}
              intensity={8}
              color="#91bfc2"
            />

            <pointLight
              position={[2, -2, 2]}
              intensity={5}
              color="#c3f36b"
            />

            <LoadingEarth />
          </Canvas>
        </div>

        <div className="preloader-brand">
          <span className="preloader-eyebrow">
            PORTFOLIO INITIALIZATION
          </span>

          <h1>The Curious Mind</h1>

          <p>
            Curious by nature. Engineered by intention.
          </p>
        </div>

        <div className="preloader-progress">
          <div className="preloader-progress-track">
            <div
              className="preloader-progress-fill"
              style={{ width: `${displayProgress}%` }}
            />
          </div>

          <div className="preloader-progress-meta">
            <span>
              {isReady
                ? "EXPERIENCE READY"
                : "INITIALIZING EXPERIENCE"}
            </span>

            <span>{displayProgress}%</span>
          </div>
        </div>
      </div>

      <span className="preloader-corner preloader-top-left">
        BM / 2026
      </span>

      <span className="preloader-corner preloader-bottom-right">
        {isReady ? "SYSTEM ONLINE" : "SYSTEM INITIALIZING"}
      </span>
    </div>
  );
};

export default Preloader;
