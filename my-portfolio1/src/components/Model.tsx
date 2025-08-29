import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Group } from 'three'
import { useFrame } from '@react-three/fiber'

// Define props interface to accept position
interface ModelProps {
  position?: [number, number, number];
}

export function Model({ position = [0, 0, 0] }: ModelProps) {
  const { scene, animations } = useGLTF('/assets/3d/cybermotors-neonlime-project_911--testing-01.glb')
  const group = useRef<Group>(null)
  const { actions } = useAnimations(animations, group)
  const firstAction = actions[Object.keys(actions)[0]];
  useFrame(() => {
    if (actions) {
      if (firstAction) firstAction.play();
    }
  });
  return (
    <primitive ref={group} object={scene} scale={1} position={position} />
  )
}

useGLTF.preload('/assets/3d/cybermotors-neonlime-project_911--testing-01.glb')