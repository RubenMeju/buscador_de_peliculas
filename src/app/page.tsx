import { fetchMovies, Movie } from "./lib/fetchMovies";
import MovieCard from "./components/MovieCard";

export default async function Home() {
  let data;
  try {
    data = await fetchMovies();
  } catch (error) {
    console.error(error);
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1>Failed to load movies. Please try again later.</h1>
      </main>
    );
  }

  return (
    <main className="w-11/12 m-auto pt-10 flex flex-col items-center gap-10">
      {data.results.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </main>
  );
}
