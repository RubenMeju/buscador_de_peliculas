import React from "react";

export default function SelectLanguage() {
  return (
    <div className="text-white">
      <label htmlFor="cars">Elija el idioma:</label>

      <select name="cars" id="cars">
        <option value="spanish">Español</option>
        <option value="english">English</option>
      </select>
    </div>
  );
}
