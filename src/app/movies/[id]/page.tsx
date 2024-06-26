import { fetchMovieID, fetchTrailerByMovieID } from "@/app/lib/fetchMovies";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
  const movie = await fetchMovieID(params.id);
  const trailer = await fetchTrailerByMovieID(params.id);
  console.log(trailer);
  return (
    <div className="w-full ">
      <div className="relative w-full h-[280px] max-w-6xl md:h-[500px]">
        {movie.backdrop_path && movie.poster_path ? (
          <>
            <Image
              src={
                process.env.NEXT_PUBLIC_URL_IMAGES_TMDB + movie.backdrop_path
              }
              alt={`Poster of ${movie.title}`}
              fill={true}
              placeholder="blur"
              blurDataURL={`${process.env.NEXT_PUBLIC_URL_IMAGES_TMDB}${movie.backdrop_path}`}
              className="object-cover"
            />

            <Image
              src={process.env.NEXT_PUBLIC_URL_IMAGES_TMDB + movie.poster_path}
              alt={`Poster of ${movie.title}`}
              placeholder="blur"
              blurDataURL={`${process.env.NEXT_PUBLIC_URL_IMAGES_TMDB}${movie.poster_path}`}
              width={100}
              height={100}
              className="absolute bottom-6 left-6"
            />
          </>
        ) : (
          <div className="w-[250px] h-[300px] bg-gray-200 flex items-center justify-center">
            <span>No Image Available</span>
          </div>
        )}
      </div>

      <h1 className="w-full p-4 text-center text-2xl font-bold">
        {movie.title}
      </h1>

      <section className="w-[90%] m-auto flex flex-col gap-6">
        <p>{movie.overview}</p>

        <span className="text-center">Release Date: {movie.release_date}</span>

        <div className="flex justify-between">
          {movie.genres.map((genre) => (
            <div
              key={genre.id}
              className="p-2 bg-gray-700 border border-gray-200 rounded-md"
            >
              <span>{genre.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="p-4">
        {trailer ? (
          <div key={trailer.id} className="mb-4">
            <p>{trailer.name}</p>
            {trailer.site === "YouTube" && (
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title={trailer.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        ) : (
          <p>No trailers available</p>
        )}
      </div>
    </div>
  );
}
