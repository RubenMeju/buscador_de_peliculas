import { fetchMovies, fetchSearchMovies } from "./lib/fetchMovies";
import MovieCard from "./components/MovieCard";
import SearchInput from "./components/SearchInput";
import { Suspense } from "react";
import { Movie } from "./types";
import Pagination from "./components/Pagination";
import ThemeToggleButton from "./components/ThemeToggleButton";
import Loading from "./Loading";
import LocaleSwitcher from "./components/locale/LocaleSwitcher";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    query?: string;
    page?: Number;
  };
}) {
  const query = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  let data: { results: Movie[] } = { results: [] };

  if (query.length > 0) {
    data = await fetchSearchMovies(query, currentPage);
  } else {
    data = await fetchMovies(currentPage);
  }
  const totalPages = data.total_pages;
  return (
    <main className="w-full pt-10 flex flex-col items-center gap-10">
      <div className=" flex gap-6">
        <LocaleSwitcher />
        <ThemeToggleButton />
      </div>
      <SearchInput />

      <Suspense key={query + currentPage} fallback={<Loading />}>
        <div className="flex flex-col justify-center gap-10 md:flex-row md:flex-wrap lg:gap-20">
          {data.results.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </Suspense>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}
