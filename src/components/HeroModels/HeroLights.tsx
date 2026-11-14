
const HeroLights = () => {
  return (
    <>
      {/* General environment illumination */}
      <ambientLight intensity={0.45} color="#dce5dd" />

      <directionalLight
       position={[4, 5, 5]}
       intensity={2.2}
       color="#f2f2ed"
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
      position={[-4, 1, -3]}
      intensity={15}
      color="#91bfc2"
      distance={10}
      />
      
      <pointLight
      position={[3, -2, 2]}
      intensity={9}
      color="#c3f36b"
      distance={8}
      />
    </>
  );
};

export default HeroLights;
