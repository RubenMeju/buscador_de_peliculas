"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import { useTranslations } from "next-intl";
import { SearchIcon } from "@/icons/SearchIcon";

export default function SearchInput() {
  const t = useTranslations("SearchInput");

  const searchParams = useSearchParams();
  //const search = searchParams.get("search");
  const { replace } = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = e.currentTarget.search.value;
    const params = new URLSearchParams(searchParams);
    params.set("search", query);
    replace(`?search=${params.get("search")?.toString()}`);
  };

  return (
    <form
      className="w-[300px] max-w-md mx-auto md:w-4/5"
      onSubmit={handleSearch}
    >
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="search"
          name="search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          //  required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {t("button")}
        </button>
      </div>
    </form>
  );
}
