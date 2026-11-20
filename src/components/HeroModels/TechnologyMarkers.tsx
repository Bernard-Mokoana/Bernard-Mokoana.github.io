
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { technologies, type Technology } from "./technologyData";

const MARKER_RADIUS = 2.235;

const getGlobePosition = (
  latitude: number,
  longitude: number
): THREE.Vector3 => {
  const lat = THREE.MathUtils.degToRad(latitude);
  const lon = THREE.MathUtils.degToRad(longitude);

  return new THREE.Vector3(
    MARKER_RADIUS * Math.cos(lat) * Math.sin(lon),
    MARKER_RADIUS * Math.sin(lat),
    MARKER_RADIUS * Math.cos(lat) * Math.cos(lon)
  );
};

type TechnologyMarkersProps = {
  onSelect: (technology: Technology) => void;
  selectedTechnology: string | null;
};

const TechnologyMarkers = ({
  onSelect,
  selectedTechnology,
}: TechnologyMarkersProps) => {
  return (
    <>
      {technologies.map((technology) => {
        const position = getGlobePosition(
          technology.latitude,
          technology.longitude
        );

        const isSelected = selectedTechnology === technology.name;

        return (
          <Html
            key={technology.name}
            position={position}
            center
            distanceFactor={8}
            occlude
            zIndexRange={[20, 0]}
          >
            <button
              type="button"
              className={`globe-tech-marker ${
                isSelected ? "is-selected" : ""
              }`}
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                onSelect(technology);
              }}
              aria-label={`Explore ${technology.name}`}
              aria-pressed={isSelected}
            >
              <svg
                viewBox="0 0 24 24"
                className="globe-tech-icon"
                aria-hidden="true"
              >
                <path
                  d={technology.icon.path}
                  fill="currentColor"
                />
              </svg>

              <span>{technology.name}</span>
            </button>
          </Html>
        );
      })}
    </>
  );
};

export default TechnologyMarkers;
