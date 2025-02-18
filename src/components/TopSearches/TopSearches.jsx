import useMovies from "../../hook/moviesFetch";
import MovieCard from "../MovieCard/MovieCard";

export default function TopSearchesMovies() {
  const { topRatedMovies } = useMovies();

  return (
    <div className="top-rated-movies">
      {topRatedMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
