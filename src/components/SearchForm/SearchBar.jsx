import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate query before navigation
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    } else {
      // Handle empty search (optional)
      alert("Please enter a search term");
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        id="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button type="submit" className="search-btn" id="searchButton">
        <img src="/assets/img/search-icon.svg" alt="" />
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  debounceTime: PropTypes.number,
};
