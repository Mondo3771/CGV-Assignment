/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 EndRawTrack.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody, Physics } from "@react-three/rapier";

export function EndRawTrack(props) {
  const { nodes, materials } = useGLTF("/~scarhatt/EndRawTrack.glb");
  materials["polished_blackstone_bricks.003"].transparent = true;
  materials["polished_blackstone_bricks.003"].opacity = 0; // Adjust opacity as needed

  materials.polished_blackstone_bricks.transparent = true;
  materials.polished_blackstone_bricks.opacity = 0; // Adjust opacity as needed

  materials["polished_blackstone_bricks.001"].transparent = true;
  materials["polished_blackstone_bricks.001"].opacity = 0; // Adjust opacity as needed

  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders="trimesh" position={[-217, -35, 183]}>
        <group
          // position={[-217, -35, 183]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            geometry={
              nodes["New_World_(6)__-83_24_-120_to_65_319_156006"].geometry
            }
            material={materials["polished_blackstone_bricks.003"]}
          />
          <mesh
            geometry={
              nodes["New_World_(6)__-83_24_-120_to_65_319_156006_1"].geometry
            }
            material={materials.polished_blackstone_bricks}
          />
          <mesh
            geometry={
              nodes["New_World_(6)__-83_24_-120_to_65_319_156006_2"].geometry
            }
            material={materials["polished_blackstone_bricks.001"]}
          />
        </group>
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/~scarhatt/EndRawTrack.glb");
