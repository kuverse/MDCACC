import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      {/* Upper Section */}
      <div className={styles.upperFooter}>
        {/* Logo */}
        <div className={styles.logoBlock}>
          <div className={styles.logo}>
            <Image src="/images/logo.png" alt="Logo" width={250} height={160} />
          </div>
        </div>

        {/* Description Paragraph */}
        <div className={styles.descriptionBlock}>
          <p className={styles.description}>
            We are proud to be an authorized dealer and installer for TuffSkin® Stone Sealer and Solar Gard® Window Films in Calgary.
          </p>
        </div>

        {/* Map */}
        <div className={styles.mapBlock}>
        <div className={styles.locationRow}>
        <MdLocationOn className={styles.locationIcon} />
        <h4>Serving Calgary, AB</h4>
        </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102410.96638528618!2d-114.18252740611754!3d51.02734996478432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717000c3bfb93f%3A0x2f4e48ed62761efb!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1710600000000"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />

        </div>

        {/* Hours of Operation */}
        <div className={styles.hoursBlock}>
          <h4>Hours of Operation</h4>
          <p>Monday - Saturday: 8am - 8pm</p>
          <p>Sunday: 10am - 7pm</p>
          <p>Holidays: 10am - 5pm</p>
        </div>

        {/* Social Media Icons */}
        <div className={styles.socialIconsBlock}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomFooter}>
        <div className={styles.bottomLinks}>
          <Link href="https://policies.google.com/privacy">Privacy Policy</Link>
          <Link href="https://policies.google.com/terms">Terms of Service</Link>
        </div>
        <p className={styles.copyText}>Tint It Pro © 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
