/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: McCarthy3D (https://sketchfab.com/joshuawatt811)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/spartan-armour-mkv-halo-reach-57070b2fd9ff472c8988e76d8c5cbe66
title: Spartan Armour MKV - Halo Reach
*/

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useSpring } from "@react-spring/web";

interface Animations extends THREE.AnimationClip {
  name: "Take 001";
}

type GLTFResult = GLTF & {
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

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials, animations } = useGLTF("/halo.glb") as GLTFResult;
  const { actions } = useAnimations<Animations>(animations as any, group);

  /* Plays animation */
  useEffect(() => {
    actions["Take 001"]?.play();
  }, []);

  /* Makes the materials transparent, so we can play with it's opacity later */
  for (let _mat in materials) {
    let mat = materials[_mat as keyof typeof materials];
    mat.transparent = true;
  }
  materials.lambert2.opacity = 0;

  /* Creates an animation interpolation */
  const [selectedMat, setSelectedMat] = useState({
    lambert2: true,
    lambert1: true,
    Spartan_Ear_Mat: true,
    Spartan_Shoulders_Mat: true,
    Spartan_Helmet_Mat: true,
    Spartan_Legs_Mat: true,
    Spartan_Undersuit_Mat: true,
    Spartan_Arms_Mat: true,
    Spartan_Chest_Mat: true,
  });

  const springs = useSpring({
    lambert2: selectedMat.lambert2 ? 1 : 0.1,
    lambert1: selectedMat.lambert1 ? 1 : 0.1,
    Spartan_Ear_Mat: selectedMat.Spartan_Ear_Mat ? 1 : 0.1,
    Spartan_Shoulders_Mat: selectedMat.Spartan_Shoulders_Mat ? 1 : 0.1,
    Spartan_Helmet_Mat: selectedMat.Spartan_Helmet_Mat ? 1 : 0.1,
    Spartan_Legs_Mat: selectedMat.Spartan_Legs_Mat ? 1 : 0.1,
    Spartan_Undersuit_Mat: selectedMat.Spartan_Undersuit_Mat ? 1 : 0.1,
    Spartan_Arms_Mat: selectedMat.Spartan_Arms_Mat ? 1 : 0.1,
    Spartan_Chest_Mat: selectedMat.Spartan_Chest_Mat ? 1 : 0.1,

    config: { duration: 200 },
  });

  useFrame(() => {
    materials.Spartan_Helmet_Mat.opacity = springs.Spartan_Helmet_Mat.get();
    materials.Spartan_Chest_Mat.opacity = springs.Spartan_Chest_Mat.get();
    materials.lambert2.opacity = springs.lambert2.get();
    materials.lambert1.opacity = springs.lambert1.get();
    materials.Spartan_Ear_Mat.opacity = springs.Spartan_Ear_Mat.get();
    materials.Spartan_Shoulders_Mat.opacity =
      springs.Spartan_Shoulders_Mat.get();
    materials.Spartan_Helmet_Mat.opacity = springs.Spartan_Helmet_Mat.get();
    materials.Spartan_Legs_Mat.opacity = springs.Spartan_Legs_Mat.get();
    materials.Spartan_Undersuit_Mat.opacity =
      springs.Spartan_Undersuit_Mat.get();
    materials.Spartan_Arms_Mat.opacity = springs.Spartan_Arms_Mat.get();
    materials.Spartan_Chest_Mat.opacity = springs.Spartan_Chest_Mat.get();
  });

  /**
   * Reduces the opacity of every material except the one clicked
   */
  function handleClick(e: ThreeEvent<MouseEvent>) {
    e.stopPropagation();
    let matName: keyof typeof materials | undefined;

    if (e.object instanceof THREE.Mesh) {
      matName = e.object.material.name;
    }

    let newMat = {
      lambert2: false,
      lambert1: false,
      Spartan_Ear_Mat: false,
      Spartan_Shoulders_Mat: false,
      Spartan_Helmet_Mat: false,
      Spartan_Legs_Mat: false,
      Spartan_Undersuit_Mat: false,
      Spartan_Arms_Mat: false,
      Spartan_Chest_Mat: false,
    };

    newMat[matName!] = true;

    setSelectedMat(newMat);
  }

  return (
    <group
      onClick={handleClick}
      onPointerMissed={() =>
        setSelectedMat({
          lambert2: true,
          lambert1: true,
          Spartan_Ear_Mat: true,
          Spartan_Shoulders_Mat: true,
          Spartan_Helmet_Mat: true,
          Spartan_Legs_Mat: true,
          Spartan_Undersuit_Mat: true,
          Spartan_Arms_Mat: true,
          Spartan_Chest_Mat: true,
        })
      }
      ref={group}
      {...props}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.02}
        >
          <group
            name="4757fffebe2a4d47b38143266af5f1a9fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Floor">
                  <mesh
                    name="Floor_lambert2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Floor_lambert2_0.geometry}
                    material={materials.lambert2}
                  />
                </group>
                <group name="group">
                  <group name="Object_7">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_9" />
                    <group name="Object_11" />
                    <group name="Object_19" />
                    <group name="polySurface436" />
                    <group name="Helmet" />
                    <group name="Armour" />
                    <group name="Armour_LP" />
                    <skinnedMesh
                      name="Object_18"
                      geometry={nodes.Object_18.geometry}
                      material={materials.lambert1}
                      skeleton={nodes.Object_18.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.Spartan_Ear_Mat}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.Spartan_Ear_Mat}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials.Spartan_Shoulders_Mat}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.Spartan_Helmet_Mat}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={materials.Spartan_Legs_Mat}
                      skeleton={nodes.Object_16.skeleton}
                    />
                    <skinnedMesh
                      name="Object_20"
                      geometry={nodes.Object_20.geometry}
                      material={materials.Spartan_Undersuit_Mat}
                      skeleton={nodes.Object_20.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.Spartan_Arms_Mat}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.Spartan_Chest_Mat}
                      skeleton={nodes.Object_14.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/halo.glb");
