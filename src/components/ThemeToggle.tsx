"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false); // Hover state

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: "0.5",
        padding: "10px",
        borderRadius: "20%",
        background: hovered
          ? currentTheme === "light"
            ? "#bbbbbb"
            : "#666666"
          : currentTheme === "light"
          ? "#dddddd"
          : "#444444",
        color: currentTheme === "light" ? "#333" : "#f0f0f0",
        border: "none",
        cursor: "pointer",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {currentTheme === "dark" ? (
        <Sun size={20} color="white" />
      ) : (
        <Moon size={20} color="black" />
      )}
    </button>
  );
};

export default ThemeToggle;
