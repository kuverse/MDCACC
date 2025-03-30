"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";
import * as THREE from "three";

const Bubble3D: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null!);
  const scroll = useScroll();
  const { scene } = useGLTF("/models/realisticheart/scene.gltf");

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = scroll.offset * Math.PI * 1 * 2;
      modelRef.current.position.z = 2 - scroll.offset * 2;
      modelRef.current.position.x = 1.2 - scroll.offset * 1.1;

      const scale = 1 - scroll.offset * 0.005;
      modelRef.current.scale.setScalar(scale);
    }
  });

  return <primitive ref={modelRef} object={scene} />;
};

export default Bubble3D;
