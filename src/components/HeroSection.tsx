"use client";

import { useRef, useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";
import Link from "next/link";
import GoogleReviews from "../components/GoogleReviews";
import { PiSealCheckFill } from "react-icons/pi";
import { FaClipboard } from "react-icons/fa";
import TextButtonWithPopup from "./ButtonWithPopup";
import { MdLocationOn } from "react-icons/md";

const Hero = () => {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = buttonRef.current; // ✅ Store stable reference
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // optional: remove this line to allow repeat animation
        }
      },
      { threshold: 0.5 }
    );
  
    if (node) observer.observe(node);
  
    return () => {
      if (node) observer.unobserve(node); // ✅ Use the saved node here
    };
  }, []);
  

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.locationWrapper}>
          <div className={styles.locationTag}>
            <MdLocationOn size={18} />
            <span>Calgary, AB</span>
          </div>
        </div>

        <h1 className={styles.title}>
          Tint & Protect <span className={styles.secondary}>like a Pro</span>
          <PiSealCheckFill className={styles.checkIcon} />
          <br />
          – Goodbye Heat, UV & Marble Damage.
        </h1>

        <p className={styles.subtitle}>
          Premium{" "}
          <span
            style={{
              color: "var(--secondary)",
              fontWeight: "bold",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            <Link href="https://www.solargard.com/">SolarGard</Link>
          </span>
          <span style={{ color: "var(--secondary)" }}>®</span> Window Tinting &{" "}
          <span
            style={{
              color: "var(--secondary)",
              fontWeight: "bold",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            <Link href="https://www.tuffskin.com/">Tuffskin</Link>
          </span>
          <span style={{ color: "var(--secondary)" }}>®</span> Marble Protection
          for Homes & Businesses.
        </p>

        <GoogleReviews />

        <div className={styles.ctaButtons}>
          <Link
            ref={buttonRef}
            href="#estimator"
            className={`${styles.primaryButton} ${
              isVisible ? styles.animate : ""
            }`}
            aria-label={"Get a Quick Quote"}
          >
            <FaClipboard style={{ marginRight: "8px" }} />
            Book in Home Estimate
          </Link>

          <TextButtonWithPopup />
        </div>
      </div>
    </section>
  );
};

export default Hero;
