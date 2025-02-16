import { Link } from "react-router-dom";
import { useMovieContext } from "../context/movieContext";
import PropTypes from "prop-types";

export default function MovieCard({ movie }) {
  const { bookmarks, toggleBookmark } = useMovieContext();
  const isBookmarked = bookmarks.some((b) => b.id === movie.id);

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="poster"
        />
        <div className="movie-info">
          <h3 className="title">{movie.title}</h3>
          <p className="rating">⭐ {movie.vote_average.toFixed(1)}</p>
        </div>
      </Link>
      <button
        className={`bookmark-btn ${isBookmarked ? "active" : ""}`}
        onClick={() => toggleBookmark(movie)}
      >
        {isBookmarked ? "★" : "☆"}
      </button>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.obj,
};
