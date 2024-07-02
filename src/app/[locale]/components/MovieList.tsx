import { Suspense } from "react";
import { Movie } from "../types";
import Loading from "../Loading";
import MovieCard from "./MovieCard";

export default function MovieList({
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
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {data.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </Suspense>
  );
}
