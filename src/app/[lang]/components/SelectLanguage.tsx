"use client";

import { defaultLocale } from "@/config";
import { setUserLocale } from "../lib/locale";

export default function SelectLanguage() {
  const handleChange = (event) => {
    const locale = event.target.value;
    setUserLocale(locale);
  };

  return (
    <form className="text-white">
      <label htmlFor="language">Elija el idioma:</label>
      <select
        name="language"
        id="language"
        onChange={handleChange}
        defaultValue={defaultLocale}
        className="text-black dark:text-white"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </form>
  );
}
