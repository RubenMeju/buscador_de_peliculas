import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
}

async function getData() {
  const url = `${process.env.NEXT_PUBLIC_URL_TMDB}movie/popular?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_API}`,
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  let data;
  try {
    data = await getData();
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
        <div key={movie.id} className="flex flex-col items-center gap-4">
          {movie.poster_path ? (
            <Image
              src={process.env.NEXT_PUBLIC_URL_IMAGES_TMDB + movie.poster_path}
              alt={`Poster of ${movie.title}`}
              width={250}
              height={300}
              // Optional blur-up while loading
              placeholder="blur"
              blurDataURL={`${process.env.NEXT_PUBLIC_URL_IMAGES_TMDB}${movie.poster_path}`}
            />
          ) : (
            <div className="w-[500px] h-[750px] bg-gray-200 flex items-center justify-center">
              <span>No Image Available</span>
            </div>
          )}
          <h1 className="text-xl font-bold mb-4">{movie.title}</h1>
        </div>
      ))}
    </main>
  );
}
