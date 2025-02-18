import useMovies from "../../hook/moviesFetch";
import MovieCard from "../MovieCard/MovieCard";
import styles from "../LatestMovies/LatestMovies.module.css";

export default function LatestMovies() {
  const { latestMovies } = useMovies();

  return (
    <div className={styles.latestMovie}>
      {latestMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
