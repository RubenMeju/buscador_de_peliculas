"use client";
import { useState } from "react";
import SearchInput from "../SearchInput";
import { SearchIcon } from "@/icons/SearchIcon";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <button>
          <SearchIcon />
        </button>
      ) : (
        <SearchInput />
      )}
    </>
  );
}
