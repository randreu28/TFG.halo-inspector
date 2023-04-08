/* 
 Some types were auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { GLTF } from "three-stdlib";

export interface Animations extends THREE.AnimationClip {
  name: "Take 001";
}

export type GLTFResult = GLTF & {
  nodes: {
    Floor_lambert2_0: THREE.Mesh;
    Object_18: THREE.SkinnedMesh;
    Object_10: THREE.SkinnedMesh;
    Object_13: THREE.SkinnedMesh;
    Object_17: THREE.SkinnedMesh;
    Object_12: THREE.SkinnedMesh;
    Object_16: THREE.SkinnedMesh;
    Object_20: THREE.SkinnedMesh;
    Object_15: THREE.SkinnedMesh;
    Object_14: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    lambert2: THREE.MeshStandardMaterial;
    lambert1: THREE.MeshStandardMaterial;
    Spartan_Ear_Mat: THREE.MeshStandardMaterial;
    Spartan_Shoulders_Mat: THREE.MeshStandardMaterial;
    Spartan_Helmet_Mat: THREE.MeshStandardMaterial;
    Spartan_Legs_Mat: THREE.MeshStandardMaterial;
    Spartan_Undersuit_Mat: THREE.MeshStandardMaterial;
    Spartan_Arms_Mat: THREE.MeshStandardMaterial;
    Spartan_Chest_Mat: THREE.MeshStandardMaterial;
  };
};

export type MatSelection<T> = Record<keyof GLTFResult["materials"], T>;
