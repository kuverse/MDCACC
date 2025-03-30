"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeToggle.module.css";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Trigger the animation on theme change
  useEffect(() => {
    if (mounted) {
      setAnimating(true);
      const timer = setTimeout(() => setAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [theme, systemTheme, mounted]);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  // Add the animate class conditionally
  const iconClass = `${styles.icon} ${animating ? styles.animate : ""}`;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Light and Dark Theme Toggle"
      className={styles.toggleButton}
    >
      {currentTheme === "dark" ? (
        <Sun size={30} color="var(--foreground)" className={iconClass} />
      ) : (
        <Moon size={30} color="var(--foreground)" className={iconClass} />
      )}
    </button>
  );
};

export default ThemeToggle;
