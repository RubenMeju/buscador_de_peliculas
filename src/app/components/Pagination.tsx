"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Pagination({
  searchParams,
  currentPage,
}: {
  searchParams?: {
    search?: string;
    query?: string;
    page?: string;
  };
  currentPage: number;
}) {
  console.log("pagina actual", currentPage);
  const { replace } = useRouter();
  const previousPage = currentPage - 1;
  const secondPreviousPage = currentPage - 2;
  const nextPage = currentPage + 1;
  const secondNextPage = currentPage + 2;

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    replace(`?page=${params.get("page")?.toString()}`);
  };

  return (
    <nav aria-label="Page navigation example" className="cursor-pointer">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <span
            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 rounded-s-lg ${
              previousPage > 0
                ? "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                : "text-gray-500 bg-gray-900 border-gray-700 cursor-not-allowed"
            }`}
            onClick={() => handlePageChange(previousPage)}
          >
            Previous
          </span>
        </li>
        {secondPreviousPage > 0 && (
          <li>
            <span
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => handlePageChange(secondPreviousPage)}
            >
              {secondPreviousPage}
            </span>
          </li>
        )}
        {previousPage > 0 && (
          <li>
            <span
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => handlePageChange(previousPage)}
            >
              {previousPage}
            </span>
          </li>
        )}
        <li>
          <span
            aria-current="page"
            className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >
            {currentPage}
          </span>
        </li>
        <li>
          <span
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePageChange(nextPage)}
          >
            {nextPage}
          </span>
        </li>
        <li>
          <span
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePageChange(secondNextPage)}
          >
            {secondNextPage}
          </span>
        </li>
        <li>
          <span
            onClick={() => handlePageChange(nextPage)}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
}
