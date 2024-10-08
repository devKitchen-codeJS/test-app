import React, { useEffect, useState } from "react";
interface IProviderTheme {
  children: React.ReactNode;
}

const ProviderTheme = ({ children }: IProviderTheme) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || ""); 
  const currentTheme = localStorage.getItem("theme");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log("[ggggh]");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("light");
    }
  }, [currentTheme]);

  useEffect(() => {
    console.log("hhhh");
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return <div>{children}</div>;
};

export default ProviderTheme;
