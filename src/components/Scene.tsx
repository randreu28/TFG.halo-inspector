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
      <fog attach="fog" args={["white", 15, 21.5]} />
      <ambientLight />
      <Environment background files="/blue.hdr" blur={0.8} />

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
        cellColor={"white"}
        sectionColor={"turquoise"}
        fadeDistance={30}
      />
    </Canvas>
  );
}
