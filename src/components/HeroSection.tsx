import styles from "../styles/Hero.module.css";
import Link from "next/link";
import GoogleReviews from "../components/GoogleReviews";
import { PiSealCheckFill } from "react-icons/pi";
import { FaClipboard, FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image Layer */}
      <div className={styles.heroBackground}></div>

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
            <Link href="https://www.solargard.com/">

            SolarGard
            </Link>
          </span>
          <span
            style={{
              color: "var(--secondary)"}}>
          ®</span>{" "}
          window tinting and{" "}
          <span
            style={{
              color: "var(--secondary)",
              fontWeight: "bold",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            <Link href="https://www.tuffskin.com/">

            Tuffskin
            </Link>
          </span>
          <span
            style={{
              color: "var(--secondary)"}}>
                ® </span>marble protection.
        </p>

        <GoogleReviews />

        <div className={styles.ctaButtons}>
        <Link href="#estimator" className={styles.primaryButton}>
            <FaClipboard style={{ marginRight: "8px" }} />
            Get a Quick Quote
        </Link>
        
        <Link href="/" className={styles.secondaryButton}>
            <FaPhoneAlt style={{ marginRight: "8px" }} />
            Text Us 403 470 1687
        </Link>
        </div>

      </div>
    </section>
  );
};

export default Hero;
