"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons
import Image from "next/image";
import styles from "../styles/Header.module.css"; // Import styles
import ThemeToggle from "./ThemeToggle";
import { FaClipboard } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <Image 
            src="/images/logo.png" 
            alt="Company Logo" 
            width={70}  
            height={50}  
            priority  
            className={styles.logoImg} 
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Desktop Call to Action Button & Theme Toggle (Hidden on Mobile) */}
      <div className={styles.desktopActions}>
        <ThemeToggle />
        <Link href="/signup" className={styles.ctaButton}>
        <FaClipboard style={{ marginRight: "8px" }} />
        Get a Quick Quote
        </Link>
      </div>


      {/* Mobile Menu Button */}
      <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
        <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>
          <X size={32} />
        </button>
        
        {/* Mobile Navigation */}
        <nav className={styles.mobileNav}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>

        {/* Mobile CTA Button (Only on Mobile) */}
        <Link href="/signup" className={styles.mobileCtaButton}>
        <FaClipboard style={{ marginRight: "8px" }} />
        Get a Quick Quote
        </Link>
          <div className={styles.mobileExtras}>
          <ThemeToggle />
        <div className={styles.extraLinks}>
            <Link href="/privacy" onClick={() => setMenuOpen(false)}>Privacy Policy</Link>
            <Link href="/terms" onClick={() => setMenuOpen(false)}>Terms of Service</Link>
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
