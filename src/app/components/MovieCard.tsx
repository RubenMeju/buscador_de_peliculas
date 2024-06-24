import Image from "next/image";
import { Movie } from "../lib/fetchMovies";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {movie.poster_path ? (
        <Image
          src={process.env.NEXT_PUBLIC_URL_IMAGES_TMDB + movie.poster_path}
          alt={`Poster of ${movie.title}`}
          width={250}
          height={300}
          placeholder="blur"
          blurDataURL={`${process.env.NEXT_PUBLIC_URL_IMAGES_TMDB}${movie.poster_path}`}
        />
      ) : (
        <div className="w-[250px] h-[300px] bg-gray-200 flex items-center justify-center">
          <span>No Image Available</span>
        </div>
      )}
      <h1 className="text-xl font-bold mb-4">{movie.title}</h1>
    </div>
  );
};

export default MovieCard;
