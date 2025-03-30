"use client";
import React from "react";
import styles from "./HeroSection2.module.css";

type BubbleData = {
  left: string;
  size: string;
  delay: string;
  color: string;
};

const bubbleData: BubbleData[] = [
  { left: "5%", size: "120px", delay: "0s", color: "#FF6B6B" },
  { left: "20%", size: "100px", delay: "1s", color: "#6BCB77" },
  { left: "35%", size: "140px", delay: "0.5s", color: "#4D96FF" },
  { left: "50%", size: "110px", delay: "1.5s", color: "#F3D250" },
  { left: "65%", size: "130px", delay: "0.8s", color: "#9D65C9" },
  { left: "75%", size: "90px", delay: "1.2s", color: "#FF9F1C" },
  { left: "85%", size: "150px", delay: "0.3s", color: "#2EC4B6" },
  { left: "95%", size: "100px", delay: "1s", color: "#FF1654" },
];

const HeroLanding: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Background Animation */}
      <div className={styles.backgroundAnimation}>
        {bubbleData.map((bubble, index) => (
          <div
            key={index}
            className={styles.bubble}
            style={{
              left: bubble.left,
              width: bubble.size,
              height: bubble.size,
              animationDelay: bubble.delay,
              "--bubble-color": bubble.color,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Our World</h1>
        <p className={styles.subtitle}>
          Experience a vibrant journey of innovation and creativity.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </section>
  );
};

export default HeroLanding;
