import { CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useAtomValue } from "jotai";
import { useRef } from "react";
import { matAtom } from "../lib/store";

export default function CustomCamera() {
  const ref = useRef<CameraControls>(null!);
  const material = useAtomValue(matAtom);
  const get = useThree((state) => state.get);

  if (!material) {
    ref.current?.setLookAt(3, 2, 6, 0, -0.5, 0, true);
    return <CameraControls ref={ref} distance={5} />;
  }

  const selectedNode = get().scene.getObjectByName(material);

  if (!selectedNode) {
    return <CameraControls ref={ref} distance={5} />;
  }

  ref.current?.fitToBox(selectedNode, true);

  return <CameraControls ref={ref} distance={5} />;
}
