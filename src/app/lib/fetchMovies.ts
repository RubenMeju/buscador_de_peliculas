export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
}

export async function fetchMovies(): Promise<{ results: Movie[] }> {
  const url = `${process.env.NEXT_PUBLIC_URL_TMDB}movie/popular?language=es-ES&page=1`;
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

//funcion para buscar por titulo
export async function fetchSearchMovies(
  query: string
): Promise<{ results: Movie[] }> {
  const url = `${process.env.NEXT_PUBLIC_URL_TMDB}search/movie?query=${query}&language=es-ES&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_API}`,
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch search results");
  }

  return res.json();
}

//filtrar pelicula por id

export async function fetchMovieID(movie_id: number): Promise<Movie> {
  const url = `${process.env.NEXT_PUBLIC_URL_TMDB}movie/${movie_id}?language=es-ES`;
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
