import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "/placeholder-poster.jpg"
        }
        alt={movie.title}
        className="poster"
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-meta">
          <span>⭐ {movie.vote_average.toFixed(1)}</span>
          <span>{new Date(movie.release_date).getFullYear()}</span>
        </div>
      </div>
    </Link>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
  }).isRequired,
};
