"use client";

import Script from "next/script";
import TitleSection from "./TitleSection";
import styles from "../styles/ElfSightGoogle.module.css";
import { motion } from "framer-motion";

const ElfsightWidget = () => {
  return (
    <motion.section
      className={styles.wrapper}
      aria-label="Customer Reviews Section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.inner}>
        {/* Keep your original title component */}
        <TitleSection
          title="What Our Customers Say"
          subtitle="Check out the word on the street."
        />

        {/* Load Elfsight widget script */}
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
        />

        {/* Elfsight widget container */}
        <div
          className="elfsight-app-9a739ce6-aa6d-47ac-83b9-4952558ec03e"
          data-elfsight-app-lazy
        ></div>

        {/* Optional overlay to cover Elfsight credit badge */}
        <div className={styles.overlay}></div>
      </div>
    </motion.section>
  );
};

export default ElfsightWidget;
