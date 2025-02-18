import useMovies from "../../hook/moviesFetch";
import MovieCard from "../MovieCard/MovieCard";
import styles from "../TopSearches/TopSearches.module.css";

export default function TopSearchesMovies() {
  const { topRatedMovies } = useMovies();

  return (
    <div className={styles.topRatedMovies}>
      {topRatedMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
