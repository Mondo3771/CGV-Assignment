/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 Nissan.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function HomeNissan(props) {
  const { nodes, materials } = useGLTF('/Nissan.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.skylineeeee.geometry} material={materials['Element.001']} position={[-4.264, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.15} />
    </group>
  )
}

useGLTF.preload('/~scarhatt/Nissan.glb');
