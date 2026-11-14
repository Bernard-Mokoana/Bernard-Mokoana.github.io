
import { Line } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import TechnologyMarkers from "./TechnologyMarkers";
import type { Technology } from "./technologyData";

type EarthProps = {
    onSelectTechnology: (technology: Technology) => void;
    selectedTechnology: string | null;
};


const GLOBE_RADIUS = 2.2;

const Earth = ( {onSelectTechnology, selectedTechnology}: EarthProps) => {
  // Generate latitude and longitude lines around the sphere.
  const { latitudes, longitudes } = useMemo(() => {
    const latitudeLines: THREE.Vector3[][] = [];
    const longitudeLines: THREE.Vector3[][] = [];

    // Latitude lines.
    for (let latitude = -60; latitude <= 60; latitude += 30) {
      const points: THREE.Vector3[] = [];
      const phi = (latitude * Math.PI) / 180;

      for (let i = 0; i <= 120; i++) {
        const theta = (i / 120) * Math.PI * 2;

        points.push(
          new THREE.Vector3(
            GLOBE_RADIUS * Math.cos(phi) * Math.cos(theta),
            GLOBE_RADIUS * Math.sin(phi),
            GLOBE_RADIUS * Math.cos(phi) * Math.sin(theta)
          )
        );
      }

      latitudeLines.push(points);
    }

    // Longitude lines.
    for (let longitude = 0; longitude < 180; longitude += 30) {
      const points: THREE.Vector3[] = [];
      const theta = (longitude * Math.PI) / 180;

      for (let i = 0; i <= 120; i++) {
        const phi = -Math.PI / 2 + (i / 120) * Math.PI;

        points.push(
          new THREE.Vector3(
            GLOBE_RADIUS * Math.cos(phi) * Math.cos(theta),
            GLOBE_RADIUS * Math.sin(phi),
            GLOBE_RADIUS * Math.cos(phi) * Math.sin(theta)
          )
        );
      }

      longitudeLines.push(points);
    }

    return {
      latitudes: latitudeLines,
      longitudes: longitudeLines,
    };
  }, []);

  return (
    <group>
      {/* Main planet surface */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshStandardMaterial
          color="#18231d"
          roughness={0.82}
          metalness={0.18}
        />
      </mesh>

      {/* Latitude lines */}
      {latitudes.map((points, index) => (
        <Line
          key={`latitude-${index}`}
          points={points}
          color="#c3f36b"
          lineWidth={0.7}
          transparent
          opacity={0.22}
        />
      ))}

      {/* Longitude lines */}
      {longitudes.map((points, index) => (
        <Line
          key={`longitude-${index}`}
          points={points}
          color="#91bfc2"
          lineWidth={0.7}
          transparent
          opacity={0.24}
        />
      ))}

      {/* Subtle atmospheric edge */}
      <mesh scale={1.055}>
        <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
        <meshBasicMaterial
          color="#91bfc2"
          transparent
          opacity={0.07}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Technology Markers */}
      <TechnologyMarkers onSelect={onSelectTechnology} selectedTechnology={selectedTechnology}/>
    </group>
  );
};

export default Earth;
