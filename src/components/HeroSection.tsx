import styles from "../styles/Hero.module.css";
import Link from "next/link";
import GoogleReviews from "../components/GoogleReviews";
import { PiSealCheckFill } from "react-icons/pi";

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
            <span style={{ color: "var(--text-muted)", fontWeight: "bold" }}>SolarGard® </span>
            window tinting and{" "}
            <span style={{ color: "var(--text-muted)", fontWeight: "bold" }}>Tuffskin® </span>
            marble protection.
            </p>


        <GoogleReviews />

        <div className={styles.ctaButtons}>
          <Link href="/quote" className={styles.primaryButton}>Get a Free Quote</Link>
          <Link href="/services" className={styles.secondaryButton}>View Services</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
