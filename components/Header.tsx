import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className=' w-full h-16 flex justify-center items-center relative '>
      <span>Test Task </span>
      <div className=' absolute right-0'>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
