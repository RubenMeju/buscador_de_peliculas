import { fetchMovies, fetchSearchMovies } from "./lib/fetchMovies";
import SearchInput from "./components/search/SearchInput";
import { MovieData } from "./types";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Filters from "./components/Filters";

export default async function Page({
  searchParams,
}: {
  searchParams?: { filter?: string; search?: string; page?: number };
}) {
  const filter = searchParams?.filter || "popular";

  const query = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  const data: MovieData = await fetchData(filter, query, currentPage);
  const totalPages = data.total_pages;

  return (
    <main className="mt-20">
      <Header />
      <SearchInput />

      <Filters />

      <MovieList query={query} currentPage={currentPage} data={data.results} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}

async function fetchData(
  filter: string,
  query: string,
  page: number
): Promise<MovieData> {
  if (query.length > 0) {
    return await fetchSearchMovies(query, page);
  } else {
    const data = await fetchMovies(filter, page);
    //console.log("data: ", data);
    return data;
  }
}
