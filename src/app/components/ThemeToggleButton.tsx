"use client";
import { useTheme } from "next-themes";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button className="dark:text-white" onClick={() => setTheme("light")}>
        Light Mode
      </button>
      <button className="dark:text-white" onClick={() => setTheme("dark")}>
        Dark Mode
      </button>
    </div>
  );
}
