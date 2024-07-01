"use client";
import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchIcon from "@/icons/SearchIcon";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="w-6 h-6 flex justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <SearchIcon />
      </button>
      {isOpen && <SearchInput setIsOpen={setIsOpen} />}
    </>
  );
}
