import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";
import useMovies from "../../hook/moviesFetch";
import styles from "../SimilarMovies/SimilarMovies.module.css";

export default function SimilarMovies() {
  const { similarMovies } = useMovies();

  return (
    <section className={styles.similarMoviesContainer}>
      <div className="container">
        <h2 className={styles.similarMoviesTitle}>Similar Movies</h2>
        <div className={styles.similarMovies}>
          {similarMovies.map((movie) => (
            <MovieCard key={movie} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}

SimilarMovies.propTypes = {
  movies: PropTypes.object,
};
