import styles from "../SearchForm/Search.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchMovies } from "../../services/api-services";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 2) {
      const results = await searchMovies(value);
      setSuggestions(results.results || []);
    }
  };

  const handleSuggestionClick = (movieId) => {
    navigate(`/movie/${movieId}`);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className={styles.input}>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search movies..."
      />
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((movie) => (
            <div key={movie.id} onClick={() => handleSuggestionClick(movie.id)}>
              {movie.title}
            </div>
          ))}
        </div>
      )}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
    </div>
  );
}
