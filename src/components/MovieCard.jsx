// src/components/MovieCard.js
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <div className="card-content">
        <h3>{movie.title}</h3>
        <div className="card-footer">
          <span>⭐ {movie.vote_average}</span>
          <button onClick={() => movie}></button>
        </div>
      </div>
    </div>
  );
}
