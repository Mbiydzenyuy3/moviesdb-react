import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_KEY } from "../constant";
// import { useMovieContext } from "../context/movieContext";
import CastList from "../components/CastList";
import SimilarMovies from "../components/SimilarMovies";
import ErrorBoundary from "../components/ErrorBoundary";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const MovieDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [detailsRes, creditsRes, similarRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`),
          fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`
          ),
        ]);

        if (!detailsRes.ok) throw new Error("Movie not found");

        const [details, credits, similar] = await Promise.all([
          detailsRes.json(),
          creditsRes.json(),
          similarRes.json(),
        ]);

        setMovie(details);
        setCast(credits.cast.slice(0, 10));
        setSimilar(similar.results);
      } catch (err) {
        setError(err.message);
        navigate("/error", { state: { message: err.message } });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, navigate]);

  if (error) return null; // Handled by error boundary

  return (
    <ErrorBoundary>
      <div className="movie-details-page">
        {loading ? (
          <Skeleton height={500} />
        ) : (
          <>
            <div
              className="hero-section"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              }}
            >
              {/* Hero content */}
            </div>
            <CastList cast={cast} />
            <SimilarMovies movies={similar} />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default MovieDetailsPage;
