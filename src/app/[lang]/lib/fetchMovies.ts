import { Movie, Trailer } from "../types";
import { getUserLocale } from "./locale";

export async function fetchMovies(page = 1): Promise<{ results: Movie[] }> {
  const idioma = await getUserLocale().then((res) => {
    if (res === "en") {
      return "en-US";
    } else if (res === "es") {
      return "es-ES";
    }
  });
  const url = `${process.env.NEXT_PUBLIC_URL_TMDB}movie/popular?language=${idioma}&page=${page}`;
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
  query: string,
  currentPage: Number
): Promise<{ results: Movie[] }> {
  const url = `${process.env.NEXT_PUBLIC_URL_TMDB}search/movie?query=${query}&language=es-ES&page=${currentPage}`;
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

//Buscar trailer de la pelicula segun su id
export async function fetchTrailerByMovieID(
  movie_id: number
): Promise<Trailer | null> {
  const url = `${process.env.NEXT_PUBLIC_URL_TMDB}movie/${movie_id}/videos?language=es-ES`;
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

  const data: { results: Trailer[] } = await res.json();

  // Filtrar los videos para obtener solo aquellos que son de tipo 'Teaser'
  const teaserVideos = data.results.filter((video) => video.type === "Teaser");

  // Devolver el primer video de tipo 'Teaser', o null si no hay ninguno
  return teaserVideos.length > 0 ? teaserVideos[0] : null;
}
