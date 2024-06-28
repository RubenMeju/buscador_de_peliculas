import { fetchMovies, fetchSearchMovies } from "./lib/fetchMovies";
import MovieCard from "./components/MovieCard";
import SearchInput from "./components/SearchInput";
import { Suspense } from "react";
import { Movie, MovieData } from "./types";
import Pagination from "./components/Pagination";
import ThemeToggleButton from "./components/ThemeToggleButton";
import Loading from "./Loading";
import LocaleSwitcher from "./components/locale/LocaleSwitcher";

export default async function Page({
  searchParams,
}: {
  searchParams?: { search?: string; page?: number };
}) {
  const query = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  const data: MovieData = await fetchData(query, currentPage);
  console.log("que devuelve data: ", data);
  const totalPages = data.total_pages;

  return (
    <main className="w-full pt-10 flex flex-col items-center gap-10">
      <Header />
      <SearchInput />
      <MovieList query={query} currentPage={currentPage} data={data.results} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}

async function fetchData(query: string, page: number): Promise<MovieData> {
  if (query.length > 0) {
    return await fetchSearchMovies(query, page);
  } else {
    return await fetchMovies(page);
  }
}

function Header() {
  return (
    <div className="flex gap-6">
      <LocaleSwitcher />
      <ThemeToggleButton />
    </div>
  );
}

function MovieList({
  query,
  currentPage,
  data,
}: {
  query: string;
  currentPage: number;
  data: Movie[];
}) {
  return (
    <Suspense key={query + currentPage} fallback={<Loading />}>
      <div className="flex flex-col justify-center gap-10 md:flex-row md:flex-wrap lg:gap-20">
        {data.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </Suspense>
  );
}
