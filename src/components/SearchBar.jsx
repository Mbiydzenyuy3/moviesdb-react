import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useMovieContext } from "../context/movieContext";

const SearchBar = ({ debounceTime = 300 }) => {
  const [query, setQuery] = useState("");
  const { fetchMovies } = useMovieContext();

  useEffect(() => {
    if (query.trim()) {
      const timer = setTimeout(() => {
        fetchMovies("search", 1);
      }, debounceTime);

      return () => clearTimeout(timer);
    }
  }, [query, debounceTime, fetchMovies]);

  return (
    <div className="search-bar">
      <input
        type="text"
        id="searchInput"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        aria-label="Search movies"
      />
    </div>
  );
};

SearchBar.propTypes = {
  debounceTime: PropTypes.number,
};

export default SearchBar;
