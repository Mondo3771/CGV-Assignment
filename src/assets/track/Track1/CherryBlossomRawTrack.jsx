/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 CherryBlossomRawTrack.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody, Physics } from "@react-three/rapier";


export function RaceTrackWalls(props) {
  const { nodes, materials } = useGLTF('/CherryBlossomRawTrack.glb')
  materials[nodes.stone015.material.name].transparent = true;
  materials[nodes.stone015.material.name].opacity = 0; // Adjust opacity as needed
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders="trimesh" position={[49, -66, -17]}>
        <mesh
          geometry={nodes.stone015.geometry}
          material={nodes.stone015.material}
          position={[-402.993, 46.992, 9.987]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload('/CherryBlossomRawTrack.glb')
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 CherryBlossomRawTrack.glb 
*/