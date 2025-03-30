"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import styles from "./Header.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { FaMailBulk } from "react-icons/fa";
import SocialLinks from "../SocialLinks/SocialLinks";

// Navigation links for desktop and mobile
const navLinksDesktop = [
  { href: "/#home", label: "Home", ariaLabel: "Navigate to the Home section" },
  { href: "/#about", label: "About Us", ariaLabel: "Navigate to about us section." },
  { href: "/#faq", label: "FAQ", ariaLabel: "Navigate to FAQ section." },
  { href: "/#services", label: "Services", ariaLabel: "Learn about the Solutions we offer" },
];

const navLinksMobile = [
  ...navLinksDesktop.slice(0, 3),
  ...navLinksDesktop.slice(3),
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/" aria-label="Tint it Pro Home">
          <Image
            src="/images/mainLogo.png"
            alt="Company Logo"
            width={170}
            height={170}
            priority
            className={styles.logoImg}
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.nav} aria-label="Main navigation">
        {navLinksDesktop.map(({ href, label, ariaLabel }) => (
          <Link key={href} href={href} aria-label={ariaLabel}>
            {label}
          </Link>
        ))}
      </nav>

      {/* Desktop Call to Action & Theme Toggle */}
      <div className={styles.desktopActions}>
        <ThemeToggle />
        <Link href="/" className={styles.ctaButton} aria-label="Contact us">
          <FaMailBulk size={"20px"} className={styles.clipboardIcon} />
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className={styles.mobileActions}>
        <ThemeToggle />
        <button className={styles.menuButton} onClick={toggleMenu} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
        <button className={styles.closeButton} onClick={closeMenu} aria-label="Close mobile menu">
          <X size={32} />
        </button>

        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinksMobile.map(({ href, label, ariaLabel }) => (
            <Link key={href} href={href} aria-label={ariaLabel}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Call to Action */}
        <Link href="/" className={styles.mobileCtaButton} aria-label="Schedule a visit">
        <FaMailBulk size={"20px"} className={styles.clipboardIcon} />
        Contact Us
        </Link>

        {/* Social Icons & Footer */}
        <div className={styles.mobileExtras}>
          <SocialLinks />
          <p className={styles.footerText}>Company ©2025</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
