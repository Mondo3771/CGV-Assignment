import React, { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import SmokeParticle from "./SmokeParticle";
import * as THREE from "three";

const SmokeEffect = ({ carRef }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const carPostion = carRef.current.translation();
    // const carRotation = new THREE.Quaternion().copy(carRef.current.rotation());
    const particlePos = new THREE.Vector3(
      carPostion.x + 0.5,
      carPostion.y +0.15,
      carPostion.z+1.3
    );

    const interval = setInterval(() => {
        setParticles((prev) => [
            ...prev,
            {
              position: particlePos,
              velocity: new THREE.Vector3(0, 0, 0.02),
              lifetime: 1000,
            },
          ]);
    }, 300);

    return () => clearInterval(interval);
  }, [carRef?.current?.translation()]);

  return (

    <group>
      {particles.map((particle, index) => (
        <SmokeParticle key={index} {...particle} />
      ))}
    </group>
  );
};

export default SmokeEffect;
