// src/constants.js
export const API_KEY = "4ef363f9f9a3c5535149c90970fa2311";
export const API_URLS = {
  POPULAR: "https://api.themoviedb.org/3/movie/popular",
  TOP_RATED: "https://api.themoviedb.org/3/movie/top_rated",
  NOW_PLAYING: "https://api.themoviedb.org/3/movie/now_playing",
  SEARCH: "https://api.themoviedb.org/3/search/movie",
  MOVIE_DETAILS: (id) => `https://api.themoviedb.org/3/movie/${id}`,
  SIMILAR: (id) => `https://api.themoviedb.org/3/movie/${id}/similar`,
  CREDITS: (id) => `https://api.themoviedb.org/3/movie/${id}/credits`,
};

export const BRAND_LOGOS = [
  "disney",
  "netflix",
  "hbo-max",
  "pixar",
  "marvel",
  "starwars",
  "national-geographic",
  "youtube",
];
