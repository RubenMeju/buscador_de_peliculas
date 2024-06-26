"use client";
import { useTheme } from "../context/themeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
    >
      Toggle to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggleButton;
