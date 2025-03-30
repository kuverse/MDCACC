"use client";
import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useScroll, ScrollControls } from "@react-three/drei";

const ScrollCube: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const scroll = useScroll();

  useFrame(() => {
    if (meshRef.current) {
      // Map scroll.offset (0 to 1) to a full rotation
      meshRef.current.rotation.y = scroll.offset * Math.PI * 2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="#4186F3" />
    </mesh>
  );
};

const Hero3DSection: React.FC = () => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} />
      {/* Place ScrollControls inside the Canvas */}
      <ScrollControls pages={2}>
        <ScrollCube />
      </ScrollControls>
    </Canvas>
  );
};

export default Hero3DSection;
