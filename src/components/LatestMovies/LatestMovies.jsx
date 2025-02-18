import useMovies from "../../hook/moviesFetch";
import { Link } from "react-router-dom";
import styles from "../LatestMovies/LatestMovies.module.css";

export default function LatestMovies() {
  const { latestMovies } = useMovies();

  return (
    <>
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
              {/* <div className={styles.movieInfo}>
                <h3>{movie.title}</h3>
                <div className={styles.movieMeta}>
                  <span>⭐ {movie.vote_average.toFixed(1)}</span>
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                </div>
              </div> */}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
