"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./TitleSection.module.css";

interface TitleSectionProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left"; // NEW
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle, align = "center" }) => {
  const [inView, setInView] = useState(false);

  const renderAnimatedTitle = () =>
    title.split(" ").map((word, wordIndex) => (
      <div key={wordIndex} className={styles.wordLine}>
        {word.split("").map((char, charIndex) => (
          <span
            key={charIndex}
            className={`${styles.char} ${inView ? styles.animateWave : ""}`}
            style={{ animationDelay: `${wordIndex * 0.2 + charIndex * 0.05}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    ));

  return (
    <motion.div
      className={`${styles.container} ${align === "left" ? styles.alignLeft : styles.alignCenter}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => setInView(true)}
    >
      <h2 className={styles.title}>{renderAnimatedTitle()}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
};

export default TitleSection;
