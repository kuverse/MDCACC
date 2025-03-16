import Image from "next/image";
import { FaStar } from "react-icons/fa";
import styles from "../styles/GoogleReviews.module.css";

const GoogleReviewsSimple = () => {
  return (
    <div className={styles.googleReviews}>
      <a
        href="https://g.co/kgs/FhGToiB"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.reviewLink}
      >
        <div className={styles.reviewsRow}>
          <Image
            src="/images/google-logo.webp"
            alt="Google Logo"
            width={35}
            height={35}
            className={styles.googleLogo}
          />

          <div className={styles.starsRow}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color="gold" size={18} />
            ))}
            <span className={styles.ratingText}>5.0 Rating (65+ reviews)</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GoogleReviewsSimple;
