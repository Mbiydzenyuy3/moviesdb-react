// SearchBar.jsx
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
    <div>
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
    </div>
  );
}
