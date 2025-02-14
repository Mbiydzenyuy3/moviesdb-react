// src/pages/MovieDetailsPage/MovieDetailsPage.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { API_KEY } from "../constant";
import MovieCard from "../components/MovieCard";
import Footer from "../components/footer";
import Header from "../components/header";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);

        const detailsPromise = axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits,similar`
        );

        const [detailsResponse] = await Promise.all([detailsPromise]);

        const movieData = detailsResponse.data;
        setMovie(movieData);
        setCast(movieData.credits.cast.slice(0, 10));
        setSimilarMovies(movieData.similar.results);

        setLoading(false);
      } catch (err) {
        setError("Failed to load movie details");
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!movie) return <div className="error">Movie not found</div>;

  return (
    <>
      <Header />
      <div className="movie-details-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div
            className="hero-backdrop"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
          >
            <div className="hero-content container">
              <div className="poster-column">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              </div>
              <div className="info-column">
                <h1 className="movie-title">{movie.title}</h1>
                <div className="movie-meta">
                  <span className="rating">
                    ⭐ {movie.vote_average.toFixed(1)}
                  </span>
                  <span className="runtime">{movie.runtime} mins</span>
                  <span className="release-date">{movie.release_date}</span>
                </div>
                <div className="genres">
                  {movie.genres.map((genre) => (
                    <span key={genre.id} className="genre-tag">
                      {genre.name}
                    </span>
                  ))}
                </div>
                <p className="overview">{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cast Section */}
        <section className="cast-section container">
          <h2>Cast</h2>
          <div className="cast-grid">
            {cast.map((member) => (
              <div key={member.id} className="cast-member">
                <img
                  src={
                    member.profile_path
                      ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                      : "/placeholder-profile.jpg"
                  }
                  alt={member.name}
                />
                <div className="cast-info">
                  <h4>{member.name}</h4>
                  <p>{member.character}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Link to={`/movie/${movie.id}`}>
          {/* Similar Movies Section */}
          <section className="similar-movies container">
            <h2>Similar Movies</h2>
            <div className="similar-movies-grid">
              {similarMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        </Link>
      </div>
      <Footer />
    </>
  );
}

MovieDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
