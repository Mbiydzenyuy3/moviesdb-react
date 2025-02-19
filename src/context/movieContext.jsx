// movieContext.jsx
import PropTypes from "prop-types";
import { createContext, useState, useEffect, useContext } from "react";

export const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [heroSection, setHeroSection] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]); // Top Searches/Likes?
  const [actionMovies, setActionMovies] = useState([]);
  const [romanceDramaMovies, setRomanceDramaMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const API_URLS = {
    heroSection: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US&page=1`,
    latestReleases: `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`, //
    action: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US&page=1`,
    romanceDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749,18&language=en-US&page=1`,
    comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US&page=1`,
    similarMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US&page=1`,
  };

  const fetchMovies = async (apiUrl, setMovies) => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error(`Error fetching movies for ${apiUrl}:`, error);
    }
  };

  useEffect(() => {
    if (API_KEY) {
      // Only fetch if API_KEY is available
      fetchMovies(API_URLS.heroSection, setHeroSection);
      fetchMovies(API_URLS.latestReleases, setLatestMovies);
      fetchMovies(API_URLS.topRated, setTopRatedMovies);
      fetchMovies(API_URLS.action, setActionMovies);
      fetchMovies(API_URLS.romanceDrama, setRomanceDramaMovies);
      fetchMovies(API_URLS.comedy, setComedyMovies);
      fetchMovies(API_URLS.similarMovies, setSimilarMovies);
    } else {
      console.warn("verify if your api key is correct");
    }
  }, []);

  const value = {
    heroSection,
    latestMovies,
    topRatedMovies,
    actionMovies,
    romanceDramaMovies,
    comedyMovies,
    similarMovies,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovies must be used within a MovieProvider");
  }
  return context;
};

MovieProvider.propTypes = {
  children: PropTypes.node, // Corrected proptype
};
