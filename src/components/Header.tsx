"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import ThemeToggle from "./ThemeToggle";
import { FaClipboard, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/" 
        aria-label="Tint it Pro Home">
          <Image
            src="/images/logo.png"
            alt="Tint it Pro logo"
            width={70}
            height={50}
            priority
            className={styles.logoImg}
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.nav} aria-label="Main navigation">
      <Link href="/#home" aria-label="Go to Home section">Home</Link>
      <Link href="/#solutions" aria-label="View our Solutions">Solutions</Link>
      <Link href="/#reviews" aria-label="Read customer Reviews">Reviews</Link>
      <Link href="/#estimator" aria-label="Open Estimator Pro section">Estimator Pro</Link>
      <Link href="/#faq" aria-label="View Frequently Asked Questions">FAQ</Link>
    </nav>


      {/* Desktop Call to Action & Theme Toggle */}
      <div className={styles.desktopActions}>
        <ThemeToggle />
        <Link
          href="/booking"
          className={styles.ctaButton}
          aria-label="Schedule a visit"
        >
          <FaClipboard style={{ marginRight: "8px" }} />
          Schedule a Visit
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className={styles.mobileActions}>
        <ThemeToggle />
        <button
          className={styles.menuButton}
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
        <button
          className={styles.closeButton}
          onClick={handleMenuClose}
          aria-label="Close mobile menu"
        >
          <X size={32} />
        </button>

        <nav className={styles.mobileNav} aria-label="Mobile navigation">
        <Link href="/#home" aria-label="Go to Home section">Home</Link>
        <Link href="/#solutions" aria-label="View our Solutions">Solutions</Link>
        <Link href="/#reviews" aria-label="Read customer Reviews">Reviews</Link>
        <Link href="/#estimator" aria-label="Open Estimator Pro section">Estimator Pro</Link>
        <Link href="/#faq" aria-label="View Frequently Asked Questions">FAQ</Link>
        </nav>

        {/* Mobile CTA */}
        <Link
          href="/booking"
          className={styles.mobileCtaButton}
          aria-label="Schedule a visit"
        >
          <FaClipboard style={{ marginRight: "8px" }} />
          Schedule a Visit
        </Link>

        {/* Social Icons & Footer */}
        <div className={styles.mobileExtras}>
          <div className={styles.socialIconsMobile}>
            <a
              href="https://www.youtube.com/channel/UCxJ_WibdI_sia2RZ_wAIOMw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube channel"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://instagram.com/tintitpro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://facebook.com/tintitpro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF size={20} />
            </a>
          </div>
          <p style={{ fontSize: "15px", marginTop: "auto", textAlign: "center", paddingBottom: "25px" }}>
            Tint It Pro ©2025
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
