import useMovies from "../../hook/moviesFetch";
import MovieCard from "../MovieCard/MovieCard";
import styles from "../Romance/Romance.module.css";

export default function RomanceDramaMovies() {
  const { romanceDramaMovies,loading, error } = useMovies();


  if (loading)
    return (
      <div className={styles.common}>
        <div className="spinner"></div>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h2 className={styles.RomanceMoviesTitle}>ROMANCE</h2>
      <div className={styles.carouselCommon}>
        {romanceDramaMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
