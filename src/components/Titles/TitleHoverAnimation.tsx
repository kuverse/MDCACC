"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./TitleHoverAnimation.module.css";

interface AnimatedTitleProps {
  text: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text }) => {
  const [spinningIndex, setSpinningIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSpinningIndex(index);
    setTimeout(() => setSpinningIndex(null), 1000); // reset after animation
  };

  return (
    <motion.div
      className={styles.titleContainer}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`${styles.char} ${spinningIndex === i ? styles.spin : ""}`}
          onClick={() => handleClick(i)}
        >
          {char}
        </span>
      ))}
    </motion.div>
  );
};

export default AnimatedTitle;
