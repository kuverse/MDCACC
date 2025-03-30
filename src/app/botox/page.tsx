"use client";
import React from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BotoxPage: React.FC = () => {
  return (
    <section className={styles.botoxSection}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.text}>
          <h1>Botox Treatments</h1>
          <p>
            Refresh your appearance and reduce fine lines with our expert Botox services. 
            Our medical professionals provide safe, personalized care to help you look and feel your best.
          </p>
          <Link href="/" className={styles.ctaButton}>
            Book Your Appointment →
          </Link>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/botox.png"
            alt="Botox procedure"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default BotoxPage;
