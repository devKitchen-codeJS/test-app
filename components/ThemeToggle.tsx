"use client";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const t = localStorage.getItem("theme");
  const [theme, setTheme] = useState(t);

  useEffect(() => {
    if (t) {
      setTheme(t);
    }
  }, [t]);

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme");

    if (!currentTheme) {
      return localStorage.setItem("theme", "light");
    } else {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      setTheme(newTheme);
      if (typeof window !== "undefined") {
        document.documentElement.setAttribute("data-theme", newTheme);
        document.body.className = newTheme; 
      }
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <button
      className={`px-2 py-2 rounded bg-primary mr-6 ${
        theme === "light" ? "text-white" : "text-black"
      }`}
      onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeToggle;
