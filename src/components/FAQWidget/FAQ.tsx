"use client";
import React, { useState } from "react";
import styles from "./FAQ.module.css";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className={`${styles.arrow} ${isOpen ? styles.rotate : ""}`}>▶</span>
      </div>
      <div className={`${styles.answer} ${isOpen ? styles.show : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
