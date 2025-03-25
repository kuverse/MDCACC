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

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      aria-label={"Light and Dark Theme Toggle"}
      style={{
        background: "transparent", // No background
        border: "none",
        cursor: "pointer",
        padding: "10px", // Adjust if needed
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {currentTheme === "dark" ? (
        <Sun size={30} color="white" />
      ) : (
        <Moon size={30} color="black" />
      )}
    </button>
  );
};

export default ThemeToggle;
