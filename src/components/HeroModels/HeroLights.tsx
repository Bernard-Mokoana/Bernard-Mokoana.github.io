
const HeroLights = () => {
  return (
    <>
      {/* General environment illumination */}
      <ambientLight
        intensity={0.6}
        color="#dce5dd"
      />

      {/* Main overhead light */}
      <spotLight
        position={[2, 7, 6]}
        angle={0.35}
        intensity={65}
        penumbra={0.6}
        color="#f2f2ed"
        castShadow
      />

      {/* Cool laboratory lighting */}
      <spotLight
        position={[5, 4, -3]}
        angle={0.4}
        intensity={35}
        penumbra={0.8}
        color="#91bfc2"
      />

      {/* Lime accent lighting */}
      <spotLight
        position={[-4, 3, 3]}
        angle={0.45}
        intensity={30}
        penumbra={0.9}
        color="#c3f36b"
      />

      {/* Subtle environmental fill */}
      <pointLight
        position={[0, 2, -4]}
        intensity={12}
        color="#91bfc2"
      />

      <pointLight
        position={[-3, 1, 1]}
        intensity={8}
        color="#c3f36b"
      />
    </>
  );
};

export default HeroLights;
