"use client";
import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useScroll,
  ScrollControls,
  OrbitControls,
} from "@react-three/drei";
import styles from "./Hero3D.module.css";

const ScrollCube: React.FC<{ isInteracting: boolean }> = ({ isInteracting }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const scroll = useScroll();

  useFrame(() => {
    if (meshRef.current && !isInteracting) {
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
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div className={styles.container}>
      <div className={`${styles.canvasWrapper} ${!isInteracting ? styles.inactive : ""}`}>
        <Canvas style={{ height: "100vh" }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} />

          <ScrollControls pages={2}>
            <ScrollCube isInteracting={isInteracting} />
          </ScrollControls>

          {isInteracting && <OrbitControls enableZoom={false} />}
        </Canvas>
      </div>

      <button
        className={styles.toggleButton}
        onClick={() => setIsInteracting((prev) => !prev)}
      >
        {isInteracting ? "Disable Rotate" : "Explore Cube"}
      </button>
    </div>
  );
};

export default Hero3DSection;
