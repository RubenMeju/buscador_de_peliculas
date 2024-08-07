import { getLocale } from "next-intl/server";
import { Movie, MovieData, Trailer } from "../types";

async function getIdioma(): Promise<string> {
  const res = await getLocale();
  if (res === "en") {
    return "en-US";
  } else if (res === "es") {
    return "es-ES";
  }
  return "en-US";
}

function getFetchOptions() {
  return {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_API}`,
    },
  };
}

async function fetchFromAPI(endpoint: string): Promise<any> {
  const url = `${process.env.NEXT_PUBLIC_URL_TMDB}${endpoint}`;
  const options = getFetchOptions();
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function fetchMovies(
  filter = "popular",
  page = 1
): Promise<MovieData> {
  const idioma = await getIdioma();
  console.log("q filtro llega a la fetch", filter);
  const endpoint = `movie/${filter}?language=${idioma}&page=${page}`;
  return fetchFromAPI(endpoint);
}

export async function fetchSearchMovies(
  query: string,
  page: number
): Promise<MovieData> {
  const idioma = await getIdioma();
  const endpoint = `search/movie?query=${query}&language=${idioma}&page=${page}`;
  return fetchFromAPI(endpoint);
}

export async function fetchMovieID(movie_id: number): Promise<Movie> {
  const idioma = await getIdioma();
  const endpoint = `movie/${movie_id}?language=${idioma}`;
  return fetchFromAPI(endpoint);
}

export async function fetchTrailerByMovieID(
  movie_id: number
): Promise<Trailer | null> {
  const idioma = await getIdioma();
  const endpoint = `movie/${movie_id}/videos?language=${idioma}`;
  const data = (await fetchFromAPI(endpoint)) as { results: Trailer[] };

  // Filtrar los videos para obtener solo aquellos que son de tipo 'Teaser'
  const teaserVideos = data.results.filter((video) => video.type === "Teaser");

  // Devolver el primer video de tipo 'Teaser', o null si no hay ninguno
  return teaserVideos.length > 0 ? teaserVideos[0] : null;
}
