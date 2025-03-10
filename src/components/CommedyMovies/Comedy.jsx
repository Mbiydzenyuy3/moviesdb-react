import useMovies from "../../hook/moviesFetch";
import MovieCard from "../MovieCard/MovieCard";
import styles from "../CommedyMovies/Comedy.module.css";

export default function ComedyMovies() {
  const { comedyMovies} = useMovies();

  return (
    <>
      <h2 className={styles.ComedyMoviesTitle}>COMEDY</h2>
     
        <div className={styles.ComedyMovies}>
          {comedyMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
    
    </>
  );
}
