import useMovies from "../../hook/moviesFetch";
import MovieCard from "../MovieCard/MovieCard";

export default function RomanceDramaMovies() {
  const { romanceDramaMovies } = useMovies();

  return (
    <div className="romance-movies">
      {romanceDramaMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
