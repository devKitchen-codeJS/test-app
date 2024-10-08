"use client";
import React, { useEffect, useState } from "react";
// interface ITheme {
//   setTheme: React.Dispatch<React.SetStateAction<string>>;
//   theme: string;
// }
const ThemeToggle = () => {
  const t = localStorage.getItem("theme");
  const [theme, setTheme] = useState(t);

  useEffect(() => {
    if (t) {
      setTheme(t);
      console.log("rrrr");
    }
  }, [t]);

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    console.log(currentTheme);

    if (!currentTheme) {
      return localStorage.setItem("theme", "light");
    } else {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      setTheme(newTheme);
      if (typeof window !== "undefined") {
        document.documentElement.setAttribute("data-theme", newTheme);
        document.body.className = newTheme; // Устанавливаем класс на body
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
