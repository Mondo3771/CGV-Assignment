import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const SmokeParticle = ({ position, velocity, lifetime }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.position.x = position.x;
    ref.current.position.y = position.y;
    ref.current.position.z = position.z;

    const animate = () => {
      requestAnimationFrame(animate);

      ref.current.position.x += velocity.x;
      ref.current.position.y += velocity.y;
      ref.current.position.z += velocity.z;

      ref.current.material.opacity -= 0.025;

      if (ref.current.material.opacity <= 0) {
        ref.current.visible = false;
      }
    };

    animate();
  }, [position, velocity]);

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshBasicMaterial
        color={new THREE.Color(0x666666)}
        transparent
        opacity={lifetime / 1000}
      />
    </mesh>
  );
};

export default SmokeParticle;
