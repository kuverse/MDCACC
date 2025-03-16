"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  // Detect system theme if theme is "system"
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      style={{
        padding: "10px",
        borderRadius: "20%",
        background: currentTheme === "light" ? "#f0f0f0" : "#333",
        color: currentTheme === "light" ? "#333" : "#f0f0f0",
        border: "none",
        cursor: "pointer",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {currentTheme === "dark" ? <Sun size={20} color="white"/> : <Moon size={20} color="black"/>}
    </button>
  );
};

export default ThemeToggle;
