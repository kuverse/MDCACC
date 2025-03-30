"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, OrbitControls } from "@react-three/drei";
import Heart3D from "./Bubble3D";
import TitleOverlay from "../Titles/TitleOverlay";
import styles from "./Hero3D.module.css";
import { FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaX } from "react-icons/fa6";

const ScrollTracker = ({
  scrollRef,
  onScrollChange,
}: {
  scrollRef: React.MutableRefObject<number>;
  onScrollChange?: (offset: number) => void;
}) => {
  const scroll = useScroll();
  useFrame(() => {
    scrollRef.current = scroll.offset;
    onScrollChange?.(scroll.offset);
  });
  return null;
};

const Hero3DSection: React.FC = () => {
  const scrollOffsetRef = useRef(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  const handleScrollChange = (offset: number) => {
    setShowToggle(offset > 0.95); // Show toggle near the end
  };

  return (
    <div className={styles.heroWrapper}>
      <Canvas style={{ height: "100vh" }} camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 7, 0.4]} />
        <ScrollControls pages={4}>
          <Heart3D />
          <ScrollTracker scrollRef={scrollOffsetRef} onScrollChange={handleScrollChange} />
        </ScrollControls>
        {isInteracting && <OrbitControls enableZoom={false} />}
      </Canvas>

      <TitleOverlay scrollOffsetRef={scrollOffsetRef} />

      {showToggle && (
      <motion.button
      className={styles.interactButton}
      onClick={() => setIsInteracting((prev) => !prev)}
      initial={{ opacity: 0, y: 50, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      {isInteracting ? <FaX style={{ marginRight: "8px", marginBottom: "-1px" }} /> : <FaUserMd style={{ marginRight: "8px", marginBottom: "-1px" }} /> }
      {isInteracting ? "Stop Examination" : "Examine the Heart"}
    </motion.button>
         
      
      )}
    </div>
  );
};

export default Hero3DSection;
