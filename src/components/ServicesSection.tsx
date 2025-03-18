"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/ServicesSection.module.css";
import { FaLightbulb } from "react-icons/fa";
import TitleSection from "./TitleSection";

const serviceCards = [
  { img: "/images/service1.png", title: "TuffSkin® Marble Protection", subtitle: "Protect your marble countertops from almost anything." },
  { img: "/images/service2.png", title: "Residential Window Tinting", subtitle: "Upgrade the style and energy efficiency of your home." },
  { img: "/images/service3.png", title: "Commercial  Window Tinting", subtitle: "Drive Upgrade the style and energy efficiency of your commercial property." },
  { img: "/images/service4.png", title: "Decorative & Privacy Films", subtitle: "Enhance your safety by adding protection to your windows with anti-shatter films." },
  { img: "/images/service5.png", title: "Safety & Security Window Films", subtitle: "Enhance your safety by adding protection to your windows with anti-shatter films." },
];

const ServicesSection: React.FC = () => {
  return (
    
    <section className={styles.servicesSection}>
  
        <Image src="/images/house-logo.png" alt="tint it pro" width={300} height={140} />
        <TitleSection title="Our Solutions" subtitle="From windows to countertops, we got you covered."/>
       

      <div className={styles.cardContainer}>
        {serviceCards.map((card, index) => (
          <motion.div
            className={styles.card}
            key={index}
            initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <Image src={card.img} alt={card.title} width={300} height={200} className={styles.cardImage} />
            </div>
            <div className={styles.overlay}>
              <h1>{card.title}</h1>
              <p style={{padding: "10px", fontWeight: "100"}}>{card.subtitle}</p>
              <button className={styles.learnMore}>
                <FaLightbulb style={{ marginRight: "8px" }} />
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
