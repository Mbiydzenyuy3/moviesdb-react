import PropTypes from "prop-types";
import styles from "../MovieCard/MovieCard.module.css";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className={styles.movieCard}
    >
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
        <p>{movie.overwiew}</p>
        <div className="movie-meta">
          <span>⭐ {movie.vote_average.toFixed(1)}</span>
          <span>{new Date(movie.release_date).getFullYear()}</span>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    overwiew: PropTypes.string,
  }).isRequired,
};
