"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons
import Image from "next/image";
import styles from "../styles/Header.module.css"; // Import styles
import ThemeToggle from "./ThemeToggle";
import { FaClipboard, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <Image 
            src="/images/logo.png" 
            alt="Tint it Pro" 
            width={70}  
            height={50}  
            priority  
            className={styles.logoImg} 
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.nav}>
      <Link href="/#home">Home</Link>
        <Link href="/#solutions">Solutions</Link>
        <Link href="/#reviews">Reviews</Link>
        <Link href="/#estimator">Estimator Pro</Link>
        <Link href="/#faq">FAQ</Link>
      </nav>

      {/* Desktop Call to Action Button & Theme Toggle (Hidden on Mobile) */}
      <div className={styles.desktopActions}>
        <ThemeToggle />
        <Link href="/booking" className={styles.ctaButton}>
        
        <FaClipboard style={{ marginRight: "8px" }} />
        Schedule a Visit
        </Link>
      </div>


      {/* Mobile Menu Button */}
      <div className={styles.mobileActions}>
  <ThemeToggle />
  <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
</div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
        <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>
          <X size={32} />
        </button>
        
        {/* Mobile Navigation */}
        <nav className={styles.mobileNav}>
        <Link href="/#home" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/#solutions" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link href="/#reviews" onClick={() => setMenuOpen(false)}>Reviews</Link>
          <Link href="/#estimator" onClick={() => setMenuOpen(false)}>Estimator Pro</Link>
          <Link href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
        </nav>

        {/* Mobile CTA Button (Only on Mobile) */}
        <Link href="/booking" className={styles.mobileCtaButton}>
        <FaClipboard style={{ marginRight: "8px" }} />
        Schedule a Visit
        </Link>
          <div className={styles.mobileExtras}>
        <div className={styles.socialIconsMobile}>
            <a href="https://www.youtube.com/channel/UCxJ_WibdI_sia2RZ_wAIOMw" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20}/>
            </a>
            <a href="https://instagram.com/tintitpro" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20}/>
            </a>
            <a href="https://facebook.com/tintitpro" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20}/>
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
