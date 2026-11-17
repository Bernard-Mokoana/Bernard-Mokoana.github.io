
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Computer } from "../Computer";

const ContactExperience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Soft base lighting */}
      <ambientLight intensity={0.7} color="#dce5df" />

      {/* Main neutral light */}
      <directionalLight
        position={[5, 5, 3]}
        intensity={2}
        color="#f2f2ed"
        castShadow
      />

      {/* Cool fill light */}
      <directionalLight
        position={[-5, 3, -2]}
        intensity={0.8}
        color="#91bfc2"
      />

      {/* Subtle lime accent */}
      <pointLight
        position={[2, 1, 2]}
        intensity={1.2}
        distance={8}
        color="#c3f36b"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Dark graphite floor */}
      <mesh
        receiveShadow
        position={[0, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial
          color="#171c19"
          roughness={0.85}
          metalness={0.15}
        />
      </mesh>

      {/* Computer model */}
      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
