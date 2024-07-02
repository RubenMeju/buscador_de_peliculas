"use client";
import { useState, useEffect } from "react";
import LocaleSwitcher from "./locale/LocaleSwitcher";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-20 w-full h-18 transition-colors duration-300 ${
        isScrolled ? "bg-black" : ""
      }`}
    >
      <div className="w-4/5 m-auto flex justify-between items-center lg:w-2/4">
        <span className="text-xl font-semibold dark:text-white">
          Movies APP
        </span>
        <div className="flex gap-2">
          <LocaleSwitcher />
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
}
