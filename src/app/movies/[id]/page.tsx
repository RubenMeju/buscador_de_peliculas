import { fetchMovieID } from "@/app/lib/fetchMovies";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
  const movie = await fetchMovieID(params.id);
  console.log(movie);
  return (
    <div>
      <h1>id: {params.id}</h1>
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
        <h1 className="absolute bottom-0 left-0 w-full p-4 text-center text-2xl font-bold bg-black/80">
          {movie.title}
        </h1>
      </div>
    </div>
  );
}
