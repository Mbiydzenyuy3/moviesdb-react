import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";
import useMovies from "../../hook/moviesFetch";
import styles from "../SimilarMovies/SimilarMovies.module.css";
import { useNavigate } from "react-router-dom";

export default function SimilarMovies(movie) {
  const { similarMovies } = useMovies();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className={styles.movieCard}
    >
      <section className={styles.similarMoviesContainer}>
        <div className="container">
          <h2 className={styles.similarMoviesTitle}>Similar Movies</h2>
          <div className={styles.similarMovies}>
            {similarMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

SimilarMovies.propTypes = {
  movies: PropTypes.object,
};
