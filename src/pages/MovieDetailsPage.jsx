import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchCredits,
  fetchSimilarMovies,
} from "../services/api-services";
import MovieCast from "../components/Cast/movieCast";
import SimilarMovies from "../components/SimilarMovies/SimilarMovies";
import Footer from "../components/Navigations/footer";
import Header from "../components/Navigations/header";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);

      const creditsData = await fetchCredits(id);
      setCast(creditsData.cast.slice(0, 7)); // Top 10 cast members

      const similarMoviesData = await fetchSimilarMovies(id);
      setSimilarMovies(similarMoviesData.results.slice(0, 4)); // Top 5 similar movies
    };

    fetchData();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details-page">
      <Header />
      <div className="movie-hero-display">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <h1 className="movie-hero-title">{movie.title}</h1>
        <p className="movie-overview-p">{movie.overview}</p>
      </div>
      <MovieCast cast={cast} />
      <SimilarMovies movies={similarMovies} />
      <Footer />
    </div>
  );
}
