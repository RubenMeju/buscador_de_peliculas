import Image from "next/image";
import { fetchMovieID, fetchTrailerByMovieID } from "../../lib/fetchMovies";

export default async function Page({ params }: { params: { id: number } }) {
  const movie = await fetchMovieID(params.id);
  const trailer = await fetchTrailerByMovieID(params.id);
  return (
    <div className="w-full ">
      {movie.backdrop_path && movie.poster_path ? (
        <>
          <Image
            src={process.env.NEXT_PUBLIC_URL_IMAGES_TMDB + movie.backdrop_path}
            alt={`Poster of ${movie.title}`}
            fill={true}
            placeholder="blur"
            blurDataURL={`${process.env.NEXT_PUBLIC_URL_IMAGES_TMDB}${movie.backdrop_path}`}
            className="object-cover"
          />

          <div className="fixed top-0 left-0 w-full h-[100vh] overflow-scroll bg-black/75">
            <div className="w-full max-w-5xl lg:w-4/5 m-auto">
              <section className="w-full  mt-10 flex flex-col items-center gap-6  lg:flex-row m-auto">
                <div className="relative w-full h-72 md:w-96 md:h-96 lg:h-[500px]">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_URL_IMAGES_TMDB +
                      movie.poster_path
                    }
                    alt={`Poster of ${movie.title}`}
                    placeholder="blur"
                    blurDataURL={`${process.env.NEXT_PUBLIC_URL_IMAGES_TMDB}${movie.poster_path}`}
                    fill={true}
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <div className="w-[90%] max-w-xl m-auto flex flex-col gap-4 text-white">
                  <h1 className="w-full text-2xl font-bold">{movie.title}</h1>
                  <p className="">{movie.overview}</p>

                  <span className="text-center">
                    Release Date: {movie.release_date}
                  </span>

                  <div className="w-full flex flex-wrap justify-center gap-4">
                    {movie.genres.map((genre) => (
                      <div
                        key={genre.id}
                        className="p-2 bg-gray-700 border border-gray-200 rounded-md"
                      >
                        <span>{genre.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="max-w-3xl p-4 pt-10">
                {trailer ? (
                  <div key={trailer.id} className="mb-4">
                    <p className="text-white">{trailer.name}</p>
                    {trailer.site === "YouTube" && (
                      <iframe
                        width="100%"
                        height="500"
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
              </section>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
