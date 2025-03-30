"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer2.module.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaPinterest, FaTiktok, FaYoutube } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Section: Newsletter Signup */}
      

      {/* Middle Section: Logo + Links + Certification */}
      <div className={styles.mainFooter}>
        
        <div>
          <Image src="/images/whiteSquareLogo.png" alt="Company Logo" width={170} height={120} />
        </div>


        <div className={styles.doubleColumnGroup}>
        <div className={styles.column}>
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Services</Link>
          <Link href="/faq">FAQ</Link>

        </div>

        <div className={styles.column}>
          <h4>Support</h4>
          <Link href="https://www.bizprofile.net/fl/mount-dora/md-cardiac-anesthesia-and">Biz Profile</Link>
          <Link href="https://www.indeed.com/q-md-cardiac-anesthesia-critical-care-pllc-l-leesburg,-fl-jobs.html?vjk=b5e1e6b9d0467196">Careers</Link>
        </div>
      </div>
      <div className={styles.newsletter}>
        <h3>Have a Question? Get in Touch</h3>
        <form className={styles.form}>
          <input type="email" placeholder="Your email address" />
          <button type="submit">→</button>
        </form>
      </div>
        <div className={styles.column}>
        <Image src="/images/uf-logo.png" alt="Certified Trust Badge" width={170} height={100}   className={styles.whiteLogo}
          />
          <Image src="/images/aba-logo.avif" alt="Certified Trust Badge" width={150} height={110}   className={styles.whiteLogo}
          />
          <p>This company meets the highest critical care standards.</p>
        </div>

     


      </div>

      {/* Bottom Section: Social & Legal */}
      <div className={styles.bottomRow}>
        <div className={styles.socialIcons}>
          <Link href="https://facebook.com"><FaFacebookF /></Link>
          <Link href="https://instagram.com"><FaInstagram /></Link>
          <Link href="https://youtube.com"><FaYoutube /></Link>
          <Link href="https://tiktok.com"><FaTiktok /></Link>
          <Link href="https://twitter.com"><FaXTwitter /></Link>
          <Link href="https://pinterest.com"><FaPinterest /></Link>
          <Link href="https://linkedin.com"><FaLinkedinIn /></Link>
        </div>

        <div className={styles.legal}>
          <p>© {new Date().getFullYear()} YourCompanyName • All Rights Reserved</p>
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms-of-use">Terms of Service</Link>
         
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
