/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 badLandsWhole.glb 
*/

import React, {useEffect} from 'react'
import { useGLTF } from '@react-three/drei'

export function BadLands(props) {
  try{
    
  const { nodes, materials } = useGLTF('/BadLandsWhole.glb')
  useEffect(() => {
    Object.values(materials).forEach((material) => {
      if (material.emissive && material != "magma.003")
        material.emissive.set(0, 0, 0);
      material.emissiveIntensity = 1;
    });
  }, [materials]);
  return (
    <group {...props} dispose={null}>
      <group position={[0, -31, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_1'].geometry} material={materials.polished_blackstone_bricks} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_1'].geometry} material={materials.polished_blackstone_bricks} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_1'].geometry} material={materials.polished_blackstone_bricks} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_1'].geometry} material={materials.polished_blackstone_bricks} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_1'].geometry} material={materials.polished_blackstone_bricks} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_1'].geometry} material={materials.polished_blackstone_bricks} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_2'].geometry} material={materials.sand} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_3'].geometry} material={materials.red_sand} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_4'].geometry} material={materials.dead_bush} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093'].geometry} material={materials.stone} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_5'].geometry} material={materials.white_terracotta} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_6'].geometry} material={materials.orange_terracotta} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_7'].geometry} material={materials.yellow_terracotta} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_8'].geometry} material={materials.light_gray_terracotta} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_9'].geometry} material={materials.brown_terracotta} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_10'].geometry} material={materials.red_terracotta} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_11'].geometry} material={materials.dark_oak_log} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_12'].geometry} material={materials.terracotta} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_13'].geometry} material={materials.white_concrete} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_14'].geometry} material={materials.black_concrete} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093_15'].geometry} material={materials.lantern} />
      </group>
      <group position={[144, -32, 199]} rotation={[Math.PI / 2, 0, Math.PI]}>
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001'].geometry} material={materials.stone} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001'].geometry} material={materials.stone} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001'].geometry} material={materials.stone} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001'].geometry} material={materials.stone} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001'].geometry} material={materials.stone} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001'].geometry} material={materials.stone} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001'].geometry} material={materials.stone} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001'].geometry} material={materials.stone} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001'].geometry} material={materials.stone} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001'].geometry} material={materials.stone} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001'].geometry} material={materials.stone} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001'].geometry} material={materials.stone} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_1'].geometry} material={materials.polished_blackstone_bricks} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_2'].geometry} material={materials.sand} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_3'].geometry} material={materials.red_sand} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_4'].geometry} material={materials.dead_bush} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_5'].geometry} material={materials.white_terracotta} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_6'].geometry} material={materials.orange_terracotta} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_7'].geometry} material={materials.yellow_terracotta} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_8'].geometry} material={materials.light_gray_terracotta} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_9'].geometry} material={materials.brown_terracotta} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_10'].geometry} material={materials.red_terracotta} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_11'].geometry} material={materials.dark_oak_log} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_12'].geometry} material={materials.terracotta} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_13'].geometry} material={materials.white_concrete} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_14'].geometry} material={materials.black_concrete} />
        <mesh castShadow receiveShadow geometry={nodes['New_World_(8)__9994763_58_4009_to_9994925_319_4093001_15'].geometry} material={materials.lantern} />
      </group>
    </group>
  )}
  catch(e){
    console.log(e);
  }
}

useGLTF.preload('/badLandsWhole.glb')
