"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, OrbitControls } from "@react-three/drei";
import Heart3D from "./Bubble3D";
import TitleOverlay from "../Titles/TitleOverlay";

const ScrollTracker = ({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) => {
  const scroll = useScroll();
  useFrame(() => {
    scrollRef.current = scroll.offset;
  });
  return null;
};

const Hero3DSection: React.FC = () => {
  const scrollOffsetRef = useRef(0);

  return (
    <>
      <Canvas style={{ position: "absolute", top: 0, left: 0, height: "100vh", width: "100%" }} camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 7, 0.4]} />

        {/* ScrollControls provides virtual scrolling */}
        <ScrollControls pages={4}>
          <Heart3D />
          <ScrollTracker scrollRef={scrollOffsetRef} />
        </ScrollControls>

        <OrbitControls enableZoom={false} />
      </Canvas>

      <TitleOverlay scrollOffsetRef={scrollOffsetRef} />
    </>
  );
};


export default Hero3DSection;
