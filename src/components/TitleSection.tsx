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
        {title.split("").map((char, index) => (
          <span
            key={index}
            className={styles.char}
            style={{
              animationDelay: `${index * 0.1}s`, // Wave delay
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default TitleSection;
