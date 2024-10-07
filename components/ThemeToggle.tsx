"use client";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <button
      className={`px-2 py-2 rounded bg-primary mr-6 ${
        theme === 'light'
        ? 'text-white'
        : 'text-black'
      }`}
      onClick={toggleTheme}>
      {theme === "light" ? " Dark Mode" : " Light Mode"}
    </button>
  );
};

export default ThemeToggle;
