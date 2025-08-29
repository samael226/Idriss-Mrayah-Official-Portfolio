import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

export function AboutModel({ position = [0, 0, 0], scale = 1 }) {
  const modelRef = useRef<Group>(null);
  const { scene } = useGLTF('/assets/3d/cyberpunk (1).glb');

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5; // Rotate the model
      modelRef.current.rotation.x += delta * 0.5; // Rotate the model

    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={position}
      scale={scale}
    />
  );
}

useGLTF.preload('/assets/3d/cyberpunk (1).glb'); 