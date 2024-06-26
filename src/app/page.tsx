import { fetchMovies, fetchSearchMovies } from "./lib/fetchMovies";
import MovieCard from "./components/MovieCard";
import SearchInput from "./components/SearchInput";
import { Suspense } from "react";
import { Movie } from "./types";
import Pagination from "./components/Pagination";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    query?: string;
    page?: Number;
  };
}) {
  // console.log(searchParams);
  const query = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  let data: { results: Movie[] } = { results: [] };

  if (query.length > 0) {
    data = await fetchSearchMovies(query);
  } else {
    data = await fetchMovies(currentPage);
  }
  console.log("principal page: ", currentPage);
  return (
    <main className="w-full pt-10 flex flex-col items-center gap-10">
      <SearchInput />
      <Suspense key={query + currentPage} fallback={<p>Loading movies...</p>}>
        <div className="flex flex-col justify-center gap-10 md:flex-row md:flex-wrap lg:gap-20">
          {data.results.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </Suspense>
      <Pagination currentPage={currentPage} />
    </main>
  );
}
