"use client";
import React, { useEffect, useState } from "react";
interface ITheme {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
}
const ThemeToggle = ({ theme, setTheme }: ITheme) => {

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
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
