"use client";
import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchIcon from "@/icons/SearchIcon";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <button
          className="w-6 h-6 flex justify-center items-center"
          onClick={() => setIsOpen(true)}
        >
          <SearchIcon />
        </button>
      ) : (
        <SearchInput setIsOpen={setIsOpen} />
      )}
    </>
  );
}
