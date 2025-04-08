import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/Themetoggle.css";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference or saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark-theme");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const theme = !isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark-theme");
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`theme-toggle ${isDarkMode ? "dark" : "light"}`}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? "🌙" : "☀️"}
    </motion.button>
  );
};

export default ThemeToggle;