"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import ThemeToggle from "./ThemeToggle";
import { FaClipboard}from "react-icons/fa";
import SocialLinks from "./SocialLinks";

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
      <Link href="/#home" aria-label="Navigate to the Home section">Home</Link>
      <Link href="/#solutions" aria-label="Learn about the Solutions we offer">Solutions</Link>
      <Link href="/#reviews" aria-label="Read what our customers are saying in Reviews">Reviews</Link>
      <Link href="/#estimator" aria-label="Use our Estimator Pro to get a quote">Estimator Pro</Link>
      <Link href="/#faq" aria-label="Frequently Asked Questions about our services">FAQ</Link>
      <Link href="/blogs" aria-label="Tint it Pro Blog posts">Blog</Link>

      </nav>



      {/* Desktop Call to Action & Theme Toggle */}
      <div className={styles.desktopActions}>
        <ThemeToggle />
        <Link
          href="/#estimator"
          className={styles.ctaButton}
          aria-label="Get your free quote today"
        >
          <FaClipboard style={{ marginRight: "8px" }} />
          Get Your Free Quote Today!
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
        <Link href="/#home" aria-label="Navigate to the Home section">Home</Link>
        <Link href="/#solutions" aria-label="Learn about the Solutions we offer">Solutions</Link>
        <Link href="/#reviews" aria-label="Read what our customers are saying in Reviews">Reviews</Link>
        <Link href="/#estimator" aria-label="Use our Estimator Pro to get a quote">Estimator Pro</Link>
        <Link href="/#faq" aria-label="Frequently Asked Questions about our services">FAQ</Link>
        <Link href="/blogs" aria-label="Tint it Pro Blog posts">Blog</Link>
      </nav>

        {/* Mobile CTA */}
        <Link
          href="/#estimator"
          className={styles.mobileCtaButton}
          aria-label="Schedule a visit"
        >
          <FaClipboard style={{ marginRight: "8px" }} />
          Get Your Free Quote Today!
        </Link>

        {/* Social Icons & Footer */}
        <div className={styles.mobileExtras}>
         <SocialLinks />
          <p style={{ fontSize: "15px", marginTop: "auto", textAlign: "center", paddingBottom: "25px" }}>
            Tint It Pro ©2025
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
