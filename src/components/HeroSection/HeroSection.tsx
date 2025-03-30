"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
// Optionally import your own components
//import SocialLinks from "../SocialLinks/SocialLinks";
import GoogleReviews from "../GoogleReviewsWidget/GoogleReviews";
// import TextButtonWithPopup from "../ButtonOverlay/ButtonWithPopup";
import { MdLocationOn } from "react-icons/md";
import { FaClipboard } from "react-icons/fa";

const Hero: React.FC = () => {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = buttonRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.locationWrapper}>
          <div className={styles.locationTag}>
            <MdLocationOn size={18} />
            <span>Your City, Country</span>
          </div>
        </div>

        <h1 className={styles.title}>
          Your Headline Here <br />
          <span className={styles.subtitleHighlight}>Your Subheadline Here</span>
        </h1>

        <p className={styles.subtitle}>
          This is a generic hero section template. Replace this description
          with your own text that highlights your product or service.
        </p>

        {/* Uncomment or replace with your own component */}
        <GoogleReviews />
        {/*<SocialLinks /> */}

        <div className={styles.ctaButtons}>
          <Link
            ref={buttonRef}
            href="#cta"
            className={`${styles.primaryButton} ${isVisible ? styles.animate : ""}`}
            aria-label="Call to Action"
          >
            <FaClipboard className={styles.buttonIcon} />
            Call to Action
          </Link>
          {/* <TextButtonWithPopup /> */}

        </div>
      </div>
    </section>
  );
};

export default Hero;
