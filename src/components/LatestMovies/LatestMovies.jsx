import useMovies from "../../hook/moviesFetch";
import { Link } from "react-router-dom";
import styles from "../LatestMovies/LatestMovies.module.css";

export default function LatestMovies() {
  const { latestMovies, loading } = useMovies();

  return (
    <>
      <h2 className={styles.latestHeading}>LATEST & TRENDING</h2>
      {loading ? (
        <div className={styles.loadingSpinner}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <div className={styles.latestMovie}>
          {latestMovies.map((movie, index) => (
            <div className={styles.movie} key={movie.id}>
              <span className={styles.numbers}>{index + 1}</span>
              <Link to={`/movie/${movie.id}`} className={styles.latestCard}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "/placeholder-poster.jpg"
                  }
                  alt={movie.title}
                  className={styles.posterImg}
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
