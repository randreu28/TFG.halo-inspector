import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <pointLight position={[2, 2, 2]} />
        <pointLight position={[-2, -2, -2]} />
        <Environment preset="night" />
        <OrbitControls maxDistance={3} minDistance={1} />
        <Model position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
