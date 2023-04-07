import { Environment, OrbitControls, Grid } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";

export default function Scene() {
  return (
    <Canvas
      gl={{ logarithmicDepthBuffer: true }}
      camera={{ position: [-15, 0, 10], fov: 25 }}
      shadows={"soft"}
    >
      <fog attach="fog" args={["black", 15, 21.5]} />
      <ambientLight intensity={0.5} />
      <Environment background preset="warehouse" blur={0.8} />

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.05}
        maxDistance={5}
        minDistance={1}
      />

      <Model position={[0, -2, 0]} />
      <Grid
        renderOrder={-1}
        position={[0, -1.85, 0]}
        infiniteGrid
        cellSize={0.6}
        cellThickness={0.6}
        sectionSize={3.3}
        sectionThickness={1.5}
        sectionColor={"lemonchiffon"}
        fadeDistance={30}
      />
    </Canvas>
  );
}
