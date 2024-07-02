import { fetchMovies, fetchSearchMovies } from "./lib/fetchMovies";
import SearchInput from "./components/search/SearchInput";
import { MovieData } from "./types";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

export default async function Page({
  searchParams,
}: {
  searchParams?: { search?: string; page?: number };
}) {
  const query = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  const data: MovieData = await fetchData(query, currentPage);
  // console.log("que devuelve data: ", data);
  const totalPages = data.total_pages;

  return (
    <main className="mt-20">
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
    const data = await fetchMovies(page);
    //console.log("data: ", data);
    return data;
  }
}
