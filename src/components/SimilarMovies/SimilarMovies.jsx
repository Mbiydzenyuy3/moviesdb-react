import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";

export default function SimilarMovies({ movies }) {
  return (
    <section className="similar-movies">
      <div className="container">
        <h2>Similar Movies</h2>
        <div className="similar-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}

SimilarMovies.propTypes = {
  movies: PropTypes.object,
};
