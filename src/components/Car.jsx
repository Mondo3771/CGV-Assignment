
// import React, { useRef, useEffect, useState } from 'react';
// import { useGLTF, PerspectiveCamera } from '@react-three/drei';
// import { RigidBody } from '@react-three/rapier';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import Boost from './Boost';

// export function Car(props) {
//   const { nodes, materials } = useGLTF('/Car.glb');
//   const rigidBody = useRef();
//   const cameraRef = useRef();
//   const lookAtTarget = useRef(new THREE.Vector3()); // A point for the camera to look at

//   const Boostarray = [
//     [0, 1, 0],
//     [20, 1, 0],
//     [30, 1, 0],
//     [60, 1, 0],
//   ];

//   const [keys, setKeys] = useState({
//     forward: false,
//     backward: false,
//     left: false,
//     right: false,
//     space: false,
//   });

//   const [boostActive, setBoostActive] = useState(false);
//   const [boostTimer, setBoostTimer] = useState(0);

//   const FORCE = boostActive ? 50 : 25; // Increase force when boost is active
//   let TURN = boostActive ? 4 : 2;
//   const maxSpeed = 0.8;
//   let carSpeed = 0;

//   // Handling keypress events for movement
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'ArrowUp') setKeys((keys) => ({ ...keys, forward: true }));
//       if (e.key === 'ArrowDown') setKeys((keys) => ({ ...keys, backward: true }));
//       if (e.key === 'ArrowLeft') setKeys((keys) => ({ ...keys, left: true }));
//       if (e.key === 'ArrowRight') setKeys((keys) => ({ ...keys, right: true }));
//       if (e.key === ' ') setKeys((keys) => ({ ...keys, space: true }));
//     };

//     const handleKeyUp = (e) => {
//       if (e.key === 'ArrowUp') setKeys((keys) => ({ ...keys, forward: false }));
//       if (e.key === 'ArrowDown') setKeys((keys) => ({ ...keys, backward: false }));
//       if (e.key === 'ArrowLeft') setKeys((keys) => ({ ...keys, left: false }));
//       if (e.key === 'ArrowRight') setKeys((keys) => ({ ...keys, right: false }));
//       if (e.key === ' ') setKeys((keys) => ({ ...keys, space: false }));
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('keyup', handleKeyUp);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       window.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   // Frame loop to handle car movement and camera following
//   useFrame((state, delta) => {
//     if (!rigidBody.current || !cameraRef.current) return;

//     // Get the current quaternion (rotation) of the car
//     const quaternion = rigidBody.current.rotation();
//     const direction = new THREE.Vector3(0, -1, 0); // Forward direction in car space

//     // Apply the car's rotation to the forward vector
//     direction.applyQuaternion(quaternion);

//     // Apply forward/backward movement
//     if (keys.forward) {
//       carSpeed = Math.min(carSpeed + 0.01, maxSpeed);
//       rigidBody.current.applyImpulse(
//         { x: direction.x * FORCE, y: 0, z: direction.z * FORCE },
//         true
//       );
//     } else if (keys.backward) {
//       carSpeed = Math.max(carSpeed - 0.01, -maxSpeed);
//       rigidBody.current.applyImpulse(
//         { x: -direction.x * FORCE, y: 0, z: -direction.z * FORCE },
//         true
//       );
//     }

//     // Apply turning torque
//     if (keys.left) {
//       rigidBody.current.applyTorqueImpulse({ x: 0, y: TURN, z: 0 }, true);
//     }
//     if (keys.right) {
//       rigidBody.current.applyTorqueImpulse({ x: 0, y: -TURN, z: 0 }, true);
//     }
//     if (keys.space) {
//       TURN = 20;
//     }

//     // Check proximity to boost
//     const carPosition = rigidBody.current.translation();
//     Boostarray.forEach((boost) => {
//       const boostPosition = new THREE.Vector3(boost[0], boost[1], boost[2]); // Boost position, adjust if needed
//       const distanceToBoost = boostPosition.distanceTo(carPosition);

//       if (distanceToBoost < 2 && !boostActive) {
//         setBoostActive(true);
//         setBoostTimer(5); // Boost lasts 5 seconds
//       }

//       // Boost timer countdown
//       if (boostActive && boostTimer > 0) {
//         setBoostTimer(boostTimer - delta);
//       } else if (boostTimer <= 0) {
//         setBoostActive(false); // Deactivate boost when timer runs out
//       }
//     });

//     // Adjust camera to follow the car smoothly
    // const carRotation = rigidBody.current.rotation();
    // const cameraOffset = new THREE.Vector3(2, 6, 0).applyQuaternion(carRotation); // Camera offset relative to the car's rotation
    // const targetPosition = new THREE.Vector3(
    //   carPosition.x + cameraOffset.x,
    //   carPosition.y + cameraOffset.y,
    //   carPosition.z + cameraOffset.z
    // );

    // // Lerp camera position for smooth movement
    // cameraRef.current.position.lerp(targetPosition, delta * 10);

    // // Update camera to look at the car
    // lookAtTarget.current.lerp(carPosition, delta * 10);
    // cameraRef.current.lookAt(lookAtTarget.current);
//   });

  // return (
  //   <>
  //     <group {...props} dispose={null}>
  //       <RigidBody
  //         ref={rigidBody}
  //         type="dynamic"
  //         colliders="hull"
  //         position={[10, 0, 0]}
  //         mass={1}
  //         rotation={[0, Math.PI / 2, Math.PI / 2]}
  //         linearDamping={0.5}
  //         angularDamping={0.8}
  //         scale={[0.4, 0.4, 0.4]}
  //       >
  //         <group rotation={[0, Math.PI / 2, 0]}>
  //           <mesh geometry={nodes.Punto_GT_0.geometry} material={materials['Material_0']} receiveShadow />
  //           <mesh geometry={nodes.Punto_GT_1.geometry} material={materials['Material_1']} receiveShadow />
  //           <mesh geometry={nodes.Punto_GT_2.geometry} material={materials['Material_2']} receiveShadow />
  //           <mesh geometry={nodes.Punto_GT_3.geometry} material={materials['Material_3']} receiveShadow />
  //           <mesh geometry={nodes.Punto_GT_4.geometry} material={materials['Material_4']} receiveShadow />
  //           <mesh geometry={nodes.Punto_GT_5.geometry} material={materials['Material_5']} receiveShadow />
  //           <mesh geometry={nodes.Punto_GT_6.geometry} material={materials['Material_6']} receiveShadow />
  //           <mesh geometry={nodes.Punto_GT_7.geometry} material={materials['Material_7']} receiveShadow />
  //         </group>
  //       </RigidBody>
  //     </group>

  //     <Boost />

  //     {/* Perspective camera that follows the car */}
  //     <PerspectiveCamera
  //       ref={cameraRef}
  //       makeDefault
  //       fov={75}
  //       position={[0, 5, -10]}
  //       near={0.1}
  //       far={1000}
  //     />
  //   </>
  // );
// }

// useGLTF.preload('/Car.glb');


import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Boost from './Boost';

export function Car(props) {
  const { nodes, materials } = useGLTF('/Car.glb');
  const rigidBody = useRef();
  const cameraRef = useRef();
  const lookAtTarget = useRef(new THREE.Vector3()); // A point for the camera to look at
  const [isFirstPerson, setIsFirstPerson] = useState(false); // Toggle for camera mode

  const Boostarray = [
    [0, 1, 0],
    [20, 1, 0],
    [30, 1, 0],
    [60, 1, 0],
  ];

  const [keys, setKeys] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    space: false,
  });

  const [boostActive, setBoostActive] = useState(false);
  const [boostTimer, setBoostTimer] = useState(0);

  const FORCE = boostActive ? 50 : 25; // Increase force when boost is active
  let TURN = boostActive ? 4 : 2;
  const maxSpeed = 0.8;
  let carSpeed = 0;

  // Handling keypress events for movement and camera switch
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') setKeys((keys) => ({ ...keys, forward: true }));
      if (e.key === 'ArrowDown') setKeys((keys) => ({ ...keys, backward: true }));
      if (e.key === 'ArrowLeft') setKeys((keys) => ({ ...keys, left: true }));
      if (e.key === 'ArrowRight') setKeys((keys) => ({ ...keys, right: true }));
      if (e.key === ' ') setKeys((keys) => ({ ...keys, space: true }));
      if (e.key === 'c') setIsFirstPerson((prev) => !prev); // Toggle camera mode on 'C' key press
    };

    const handleKeyUp = (e) => {
      if (e.key === 'ArrowUp') setKeys((keys) => ({ ...keys, forward: false }));
      if (e.key === 'ArrowDown') setKeys((keys) => ({ ...keys, backward: false }));
      if (e.key === 'ArrowLeft') setKeys((keys) => ({ ...keys, left: false }));
      if (e.key === 'ArrowRight') setKeys((keys) => ({ ...keys, right: false }));
      if (e.key === ' ') setKeys((keys) => ({ ...keys, space: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Frame loop to handle car movement and camera following
  useFrame((state, delta) => {
    if (!rigidBody.current || !cameraRef.current) return;

    // Get the current quaternion (rotation) of the car
    const quaternion = rigidBody.current.rotation();
    const direction = new THREE.Vector3(0, -1, 0); // Forward direction in car space

    // Apply the car's rotation to the forward vector
    direction.applyQuaternion(quaternion);

    // Apply forward/backward movement
    if (keys.forward) {
      carSpeed = Math.min(carSpeed + 0.01, maxSpeed);
      rigidBody.current.applyImpulse(
        { x: direction.x * FORCE, y: 0, z: direction.z * FORCE },
        true
      );
    } else if (keys.backward) {
      carSpeed = Math.max(carSpeed - 0.01, -maxSpeed);
      rigidBody.current.applyImpulse(
        { x: -direction.x * FORCE, y: 0, z: -direction.z * FORCE },
        true
      );
    }


    //determine turning directon, invert if reversing 
    const isReversing = carSpeed < 0;
    const turnDirection = isReversing ? -1: 1; 

    // Apply turning torque
    if (keys.left) {
      rigidBody.current.applyTorqueImpulse({ x: 0, y: TURN * turnDirection, z: 0 }, true);
    }
    if (keys.right) {
      rigidBody.current.applyTorqueImpulse({ x: 0, y: -TURN * turnDirection, z: 0 }, true);
    }
    if (keys.space) {
      TURN = 20;
    }

    // Check proximity to boost
    const carPosition = rigidBody.current.translation();
    Boostarray.forEach((boost) => {
      const boostPosition = new THREE.Vector3(boost[0], boost[1], boost[2]); // Boost position, adjust if needed
      const distanceToBoost = boostPosition.distanceTo(carPosition);

      if (distanceToBoost < 2 && !boostActive) {
        setBoostActive(true);
        setBoostTimer(5); // Boost lasts 5 seconds
      }

      // Boost timer countdown
      if (boostActive && boostTimer > 0) {
        setBoostTimer(boostTimer - delta);
      } else if (boostTimer <= 0) {
        setBoostActive(false); // Deactivate boost when timer runs out
      }
    });

    // Adjust camera based on mode (first-person or third-person)
    //press C to switch between brav
    if (isFirstPerson) {
      // First-person camera attached near the car's bonnet
      cameraRef.current.position.set(carPosition.x, carPosition.y + 1.5, carPosition.z - 0.5);
      cameraRef.current.rotation.copy(rigidBody.current.rotation());
    } else {
      // Third-person camera behind and above the car
      const carRotation = rigidBody.current.rotation();
      const cameraOffset = new THREE.Vector3(2, 6, 0).applyQuaternion(carRotation); // Camera offset relative to the car's rotation
      const targetPosition = new THREE.Vector3(
        carPosition.x + cameraOffset.x,
        carPosition.y + cameraOffset.y,
        carPosition.z + cameraOffset.z
      );

      cameraRef.current.position.lerp(targetPosition, delta * 10);

      lookAtTarget.current.lerp(carPosition, delta * 10);
      cameraRef.current.lookAt(lookAtTarget.current);
      }
  });


  return (
    <>
      <group {...props} dispose={null}>
        <RigidBody
          ref={rigidBody}
          type="dynamic"
          colliders="hull"
          position={[10, 0, 0]}
          mass={1}
          rotation={[0, Math.PI / 2, Math.PI / 2]}
          linearDamping={0.5}
          angularDamping={0.8}
          scale={[0.4, 0.4, 0.4]}
        >
          <group rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Punto_GT_0.geometry} material={materials['Material_0']} receiveShadow />
            <mesh geometry={nodes.Punto_GT_1.geometry} material={materials['Material_1']} receiveShadow />
            <mesh geometry={nodes.Punto_GT_2.geometry} material={materials['Material_2']} receiveShadow />
            <mesh geometry={nodes.Punto_GT_3.geometry} material={materials['Material_3']} receiveShadow />
            <mesh geometry={nodes.Punto_GT_4.geometry} material={materials['Material_4']} receiveShadow />
            <mesh geometry={nodes.Punto_GT_5.geometry} material={materials['Material_5']} receiveShadow />
            <mesh geometry={nodes.Punto_GT_6.geometry} material={materials['Material_6']} receiveShadow />
            <mesh geometry={nodes.Punto_GT_7.geometry} material={materials['Material_7']} receiveShadow />
          </group>
        </RigidBody>
      </group>

      <Boost />

      {/* Perspective camera that follows the car */}
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        fov={75}
        position={[0, 5, -10]}
        near={0.1}
        far={1000}
      />
    </>
  );
}

useGLTF.preload('/Car.glb');
