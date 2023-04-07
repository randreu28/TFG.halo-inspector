import { Suspense } from "react";
import Scene from "./components/Scene";

export default function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Suspense fallback={<p className="text-4xl">Loading...</p>}>
        <Scene />
      </Suspense>
    </div>
  );
}
