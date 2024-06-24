export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
}

export async function fetchMovies(): Promise<{ results: Movie[] }> {
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
