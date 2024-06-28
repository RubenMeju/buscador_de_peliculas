"use client";

import { setUserLocale } from "../lib/locale";

export default function SelectLanguage({ currentLocale }) {
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
        defaultValue={JSON.stringify(currentLocale)}
        className="text-black"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </form>
  );
}
