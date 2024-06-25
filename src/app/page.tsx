import { fetchMovies, fetchSearchMovies, Movie } from "./lib/fetchMovies";
import MovieCard from "./components/MovieCard";
import SearchInput from "./components/SearchInput";
import { Suspense } from "react";

interface searchInput {
  search: string;
}

const Home: React.FC<{ searchParams: searchInput }> = async ({
  searchParams,
}) => {
  console.log(searchParams);
  const query = searchParams?.search || "";

  let data: { results: Movie[] } = { results: [] };

  if (query.length > 0) {
    data = await fetchSearchMovies(query);
  } else {
    data = await fetchMovies();
  }

  return (
    <main className="w-11/12 m-auto pt-10 flex flex-col items-center gap-10">
      <SearchInput />
      <Suspense key={query} fallback={<p>Loading movies...</p>}>
        <div className="flex flex-col justify-center gap-10 md:flex-row md:flex-wrap">
          {data.results.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </Suspense>
    </main>
  );
};
export default Home;
