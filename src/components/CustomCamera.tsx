import { CameraControls, useGLTF } from "@react-three/drei";
import { useAtomValue } from "jotai";
import { useRef } from "react";
import { matAtom } from "../store";
import { GLTFResult, MatName } from "../types";
import { useThree } from "@react-three/fiber";

export default function CustomCamera() {
  const ref = useRef<CameraControls>(null!);
  const material = useAtomValue(matAtom);

  const { nodes } = useGLTF("/halo.glb") as GLTFResult;

  const get = useThree((state) => state.get);

  if (material === undefined) {
    console.log("zoom out");
    ref.current?.setLookAt(3, 2, 6, 0, -0.5, 0, true);
  } else {
    console.log("zoom in");
    /* TODO: Select the correct node */
    ref.current?.fitToBox(nodes["Object_10"], true);
  }

  return <CameraControls ref={ref} distance={5} />;
}
