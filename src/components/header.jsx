// src/components/Header.js
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate(`/search?query=${query}`);
  };

  return (
    <>
      <header>
        <div className="container header">
          <div className="logo">
            <img className="main-logo" src="/assets/img/logox.png" alt="logo" />
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="/movie-details.html">Movies</a>
              </li>
              <li>
                <a href="/movie-details.html">Series</a>
              </li>
              <li>
                <a href="/movie-details.html">Trending</a>
              </li>
              <li>
                <a href="/movie-details.html">Categories</a>
              </li>
            </ul>
          </nav>
          <div className="search-bar">
            <form className="search-form">
              <input
                type="search"
                id="searchInput"
                placeholder="Search by title..."
              />
              <button
                onClick={handleSearch()}
                type="button"
                className="search-icon"
                id="searchButton"
              >
                <img src="/assets/img/search-icon.svg" alt="" />
              </button>
            </form>
          </div>
          <div className="profile">
            <img src="/assets/img/profile.png" alt="" />
          </div>
        </div>
      </header>
    </>
  );
}
