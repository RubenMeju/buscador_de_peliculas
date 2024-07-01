import Image from "next/image";
import Link from "next/link";
import { Movie } from "../types";
import { getLocale } from "next-intl/server";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = async ({ movie }) => {
  const language = await getLocale();
  return (
    <Link href={`/${language}/movies/${movie.id}`}>
      <div className="relative w-full pb-[150%] border-4 border-red-900 rounded-md cursor-pointer overflow-hidden">
        {movie.poster_path ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_URL_IMAGES_TMDB}${movie.poster_path}`}
            alt={`Poster of ${movie.title}`}
            fill={true}
            placeholder="blur"
            blurDataURL={`${process.env.NEXT_PUBLIC_URL_IMAGES_TMDB}${movie.poster_path}`}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <span>No Image Available</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
