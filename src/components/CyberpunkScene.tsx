"use client";

import { Canvas, useFrame } from '@react-three/fiber';
// import { Box } from '@react-three/drei';
import React, { useRef } from 'react';
import { Mesh } from 'three';

// Component for the rotating box
function RotatingBox() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

// Minimal scene with a colored box and basic lighting
const MinimalScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      {/* Ambient light to softly illuminate all objects */}
      <ambientLight intensity={0.5} />
      {/* Directional light to simulate sunlight */}
      <directionalLight position={[1, 1, 1]} intensity={1} />

      {/* Add the rotating box component */}
      <RotatingBox />
    </Canvas>
  );
};

export default MinimalScene; 