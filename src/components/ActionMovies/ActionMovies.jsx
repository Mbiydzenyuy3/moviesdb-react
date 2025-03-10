import useMovies from "../../hook/moviesFetch";
import MovieCard from "../MovieCard/MovieCard";
import styles from "../ActionMovies/ActionMovies.module.css";

const ActionMovies = () => {
  const { actionMovies } = useMovies();

  return (
    <>
      <h2 className={styles.actionTitle}>ACTION</h2>

      <div className={styles.carouselCommon}>
        {actionMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default ActionMovies;
