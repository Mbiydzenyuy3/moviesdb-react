import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { API_KEY } from "../constant";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [state, setState] = useState({
    movies: { popular: [], top_rated: [], now_playing: [], search: [] },
    bookmarks: [],
    loading: false,
    error: "",
    currentPage: 1,
    totalPages: 1,
  });

  // Load initial bookmarks
  useEffect(() => {
    const saved = localStorage.getItem("movieBookmarks");
    if (saved) {
      setState((prev) => ({ ...prev, bookmarks: JSON.parse(saved) }));
    }
  }, []);

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem("movieBookmarks", JSON.stringify(state.bookmarks));
  }, [state.bookmarks]);

  const fetchMovies = async (type, page = 1) => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: "" }));

      const url =
        type === "search"
          ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${state.searchQuery}&page=${page}`
          : `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&page=${page}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();

      setState((prev) => ({
        ...prev,
        movies: { ...prev.movies, [type]: data.results },
        currentPage: data.page,
        totalPages: data.total_pages,
        loading: false,
      }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: err.message,
        loading: false,
      }));
    }
  };

  const toggleBookmark = (movie) => {
    setState((prev) => {
      const exists = prev.bookmarks.some((b) => b.id === movie.id);
      const newBookmarks = exists
        ? prev.bookmarks.filter((b) => b.id !== movie.id)
        : [...prev.bookmarks, movie];
      return { ...prev, bookmarks: newBookmarks };
    });
  };

  return (
    <MovieContext.Provider value={{ ...state, fetchMovies, toggleBookmark }}>
      {children}
    </MovieContext.Provider>
  );
};

MovieProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useMovieContext = () => useContext(MovieContext);
