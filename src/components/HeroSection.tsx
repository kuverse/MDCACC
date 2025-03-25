"use client";
import styles from "../styles/Hero.module.css";
import Link from "next/link";
import Image from "next/image";
import GoogleReviews from "../components/GoogleReviews";
import { PiSealCheckFill } from "react-icons/pi";
import { FaClipboard } from "react-icons/fa";
import TextButtonWithPopup from "./ButtonWithPopup";

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image using Next.js Image */}
      <Image
        src="/images/marble.png"
        alt="Marble background texture"
        fill
        priority
        quality={80}
        style={{
          objectFit: "cover",
          zIndex: 1,
          opacity: 0.5,
        }}
      />

      {/* Actual Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Tint it & Protect it{" "}
          <span className={styles.secondary}>like a Pro</span>
          <PiSealCheckFill className={styles.checkIcon} />
        </h1>

        <p className={styles.subtitle}>
          Professional Commercial and Residential{" "}
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
          <span style={{ color: "var(--secondary)" }}>®</span> window tinting and{" "}
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
          <span style={{ color: "var(--secondary)" }}>®</span> marble protection.
        </p>

        <GoogleReviews />

        <div className={styles.ctaButtons}>
          <Link href="#estimator" 
          className={styles.primaryButton}
          aria-label={"Get a Quick Quote"}
          >
            <FaClipboard style={{ marginRight: "8px" }} />
            Get a Quick Quote
          </Link>

          <TextButtonWithPopup />
        </div>
      </div>
    </section>
  );
};

export default Hero;
