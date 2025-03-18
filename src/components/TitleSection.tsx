import React from "react";
import styles from "../styles/TitleSection.module.css";

interface TitleSectionProps {
  title: string;
  subtitle?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
  {title.split(" ").map((word, wordIndex) => (
    <span key={wordIndex} style={{ display: "inline-block", marginRight: "5px" }}>
      {word.split("").map((char, charIndex) => (
        <span
          key={charIndex}
          className={styles.char}
          style={{
            animationDelay: `${(wordIndex * 0.3) + (charIndex * 0.05)}s`,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  ))}
</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default TitleSection;
