import Image from "next/image";
import Link from "next/link";
import { Movie } from "../types";
import { getUserLocale } from "../lib/locale";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = async ({ movie }) => {
  const language = await getUserLocale();
  console.log("el idioma es :", language);
  return (
    <Link href={`/${language}/movies/${movie.id}`}>
      <div className="relative w-[300px] h-[480px] border-4 border-red-900 rounded-md cursor-pointer overflow-hidden">
        {movie.poster_path ? (
          <Image
            src={process.env.NEXT_PUBLIC_URL_IMAGES_TMDB + movie.poster_path}
            alt={`Poster of ${movie.title}`}
            fill={true}
            placeholder="blur"
            blurDataURL={`${process.env.NEXT_PUBLIC_URL_IMAGES_TMDB}${movie.poster_path}`}
            className="object-cover"
          />
        ) : (
          <div className="w-[250px] h-[300px] bg-gray-200 flex items-center justify-center">
            <span>No Image Available</span>
          </div>
        )}
        <h1 className="absolute bottom-0 left-0 w-full p-4 text-white text-center text-2xl font-bold bg-black/80">
          {movie.title}
        </h1>
      </div>
    </Link>
  );
};

export default MovieCard;
